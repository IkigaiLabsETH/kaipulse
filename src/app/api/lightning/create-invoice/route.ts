import { NextResponse } from 'next/server';
import { z } from 'zod';
import Redis from 'ioredis';
// @ts-expect-error: ln-service has no types
import { createInvoice } from 'ln-service';
import { prisma } from '@/lib/prisma';
import * as Sentry from '@sentry/nextjs';
import winston from 'winston';
import { randomUUID } from 'crypto';

// --- Setup ---
const redis = new Redis(process.env.REDIS_URL!);

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

// --- Zod schema ---
const InvoiceSchema = z.object({
  amount: z.number().int().min(21).max(1_000_000),
  memo: z.string().max(140).optional(),
});

// --- Lightning credentials ---
const lndCert = process.env.VOLTAGE_LND_CERT;
const lndMacaroon = process.env.VOLTAGE_LND_MACAROON;
const lndSocket = process.env.VOLTAGE_LND_SOCKET;

function getLnd() {
  return {
    cert: lndCert,
    macaroon: lndMacaroon,
    socket: lndSocket,
  };
}

// --- Rate limiting ---
async function checkRateLimit(ip: string) {
  const key = `invoice:rate:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60); // 1 minute window
  return count > 50;
}

// --- API Route ---
export async function POST(request: Request) {
  const requestId = randomUUID();
  let ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (ip.includes(',')) ip = ip.split(',')[0];

  try {
    // Rate limiting
    if (await checkRateLimit(ip)) {
      logger.warn(`[${requestId}] Rate limit exceeded for IP ${ip}`);
      return NextResponse.json(
        { error: 'Rate limit exceeded', code: 'RATE_LIMITED', requestId },
        { status: 429 }
      );
    }

    // Input validation
    const body = await request.json();
    const parsed = InvoiceSchema.safeParse(body);
    if (!parsed.success) {
      logger.warn(`[${requestId}] Invalid input: ${JSON.stringify(parsed.error.issues)}`);
      return NextResponse.json(
        { error: 'Invalid input', code: 'INVALID_INPUT', details: parsed.error.issues, requestId },
        { status: 400 }
      );
    }
    const { amount, memo } = parsed.data;

    // Create Lightning invoice
    const lnd = getLnd();
    const invoice = await createInvoice({
      lnd,
      tokens: amount,
      description: memo || undefined,
    });

    // Persist invoice in DB
    await prisma.invoice.create({
      data: {
        paymentHash: invoice.id,
        amountSats: BigInt(amount),
        memo: memo || null,
        status: 'pending',
        expiresAt: new Date(invoice.expires_at),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Respond
    return NextResponse.json({
      paymentRequest: invoice.request,
      paymentHash: invoice.id,
      expiresAt: invoice.expires_at,
      requestId,
    });
  } catch (err: unknown) {
    Sentry.captureException(err);
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Internal error: ${message}`);
    return NextResponse.json(
      { error: 'Internal server error', code: 'SERVER_ERROR', requestId },
      { status: 500 }
    );
  }
} 