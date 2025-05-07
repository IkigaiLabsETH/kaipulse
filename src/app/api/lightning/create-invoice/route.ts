import { NextResponse } from 'next/server';
import { z } from 'zod';
import Redis from 'ioredis';
// @ts-expect-error: ln-service has no types
import { createInvoice } from 'ln-service';
import { prisma } from '@/lib/prisma';
import winston from 'winston';
import { randomUUID } from 'crypto';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

// --- Setup ---
const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;
if (!redis) {
  logger.warn('Redis is not configured. Rate limiting is disabled.');
}

// --- Zod schema ---
const InvoiceSchema = z.object({
  amount: z.number().int().min(21).max(1_000_000),
  memo: z.string().max(140).optional(),
});

// --- Lightning credentials ---
const lndMacaroon = process.env.VOLTAGE_LND_MACAROON;
const lndSocket = process.env.VOLTAGE_LND_SOCKET;

function getLnd() {
  return {
    cert: '', // Voltage uses CA certs, so we can leave this empty
    macaroon: lndMacaroon,
    socket: lndSocket,
  };
}

// --- Rate limiting ---
async function checkRateLimit(ip: string) {
  if (!redis) return false; // If Redis is not available, skip rate limiting
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

    // Create Lightning invoice (try ln-service first)
    let invoice;
    let usedFallback = false;
    try {
      const lnd = getLnd();
      invoice = await createInvoice({
        lnd,
        tokens: amount,
        description: memo || undefined,
      });
      logger.info(`[${requestId}] Invoice created using ln-service`);
    } catch (lnServiceError) {
      logger.warn(`[${requestId}] ln-service createInvoice failed: ${lnServiceError instanceof Error ? lnServiceError.message : lnServiceError}`);
      // Fallback: direct REST call
      try {
        const restHost = process.env.VOLTAGE_LND_SOCKET; // e.g. 'node-name.m.voltageapp.io:8080'
        const macaroon = process.env.VOLTAGE_LND_MACAROON; // hex-encoded
        if (!restHost || !macaroon) throw new Error('Missing REST host or macaroon for fallback');
        const response = await fetch(`https://${restHost}/v1/invoices`, {
          method: 'POST',
          headers: {
            'Grpc-Metadata-macaroon': macaroon,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value: amount, // in satoshis
            memo: memo || '',
          }),
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`REST fallback failed: ${response.status} ${response.statusText} - ${errorText}`);
        }
        const data = await response.json();
        invoice = {
          request: data.payment_request,
          id: data.r_hash || data.id || data.payment_hash,
          expires_at: data.expiry || data.expires_at || new Date(Date.now() + 3600 * 1000).toISOString(),
        };
        usedFallback = true;
        logger.info(`[${requestId}] Invoice created using REST fallback`);
      } catch (restError) {
        logger.error(`[${requestId}] Both ln-service and REST fallback failed: ${restError instanceof Error ? restError.message : restError}`);
        return NextResponse.json(
          { error: 'Internal server error', code: 'SERVER_ERROR', requestId, details: restError instanceof Error ? restError.message : restError },
          { status: 500 }
        );
      }
    }

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
      usedFallback,
    });
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Internal error: ${message}`);
    return NextResponse.json(
      { error: 'Internal server error', code: 'SERVER_ERROR', requestId },
      { status: 500 }
    );
  }
} 