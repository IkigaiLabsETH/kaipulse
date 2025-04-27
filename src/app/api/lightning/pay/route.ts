import { NextResponse } from 'next/server';
import { z } from 'zod';
import Redis from 'ioredis';
// @ts-expect-error: ln-service has no types
import { pay } from 'ln-service';
// import { prisma } from '@/lib/prisma'; // Commented out because not used
import winston from 'winston';
import { randomUUID } from 'crypto';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;
if (!redis) {
  logger.warn('Redis is not configured. Rate limiting is disabled.');
}

const PaySchema = z.object({
  paymentRequest: z.string().min(10),
  amount: z.number().int().min(1).optional(), // Optional for zero-amount invoices
});

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

async function checkRateLimit(ip: string) {
  if (!redis) return false;
  const key = `pay:rate:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count > 20; // Lower limit for outgoing payments
}

export async function POST(request: Request) {
  const requestId = randomUUID();
  let ip = request.headers.get('x-forwarded-for') || 'unknown';
  if (ip.includes(',')) ip = ip.split(',')[0];

  try {
    if (await checkRateLimit(ip)) {
      logger.warn(`[${requestId}] Rate limit exceeded for IP ${ip}`);
      return NextResponse.json(
        { error: 'Rate limit exceeded', code: 'RATE_LIMITED', requestId },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = PaySchema.safeParse(body);
    if (!parsed.success) {
      logger.warn(`[${requestId}] Invalid input: ${JSON.stringify(parsed.error.issues)}`);
      return NextResponse.json(
        { error: 'Invalid input', code: 'INVALID_INPUT', details: parsed.error.issues, requestId },
        { status: 400 }
      );
    }
    const { paymentRequest, amount } = parsed.data;

    const lnd = getLnd();
    const paymentResult = await pay({ lnd, request: paymentRequest, tokens: amount });

    // Persist payment attempt
    // await prisma.paymentAttempt.create({
    //   data: {
    //     paymentRequest,
    //     amountSats: amount ? BigInt(amount) : null,
    //     status: 'sent',
    //     preimage: paymentResult.secret,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // });

    return NextResponse.json({
      paymentHash: paymentResult.id,
      preimage: paymentResult.secret,
      fee: paymentResult.fee,
      requestId,
    });
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Payment error: ${message}`);
    return NextResponse.json(
      { error: 'Internal server error', code: 'SERVER_ERROR', requestId },
      { status: 500 }
    );
  }
} 