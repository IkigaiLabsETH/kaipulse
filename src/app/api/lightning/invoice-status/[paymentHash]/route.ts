import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as Sentry from '@sentry/nextjs';
import winston from 'winston';

const prisma = new PrismaClient();
const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

export async function GET(
  _request: Request,
  { params }: { params: { paymentHash: string } }
) {
  const requestId = Math.random().toString(36).slice(2, 10);
  const { paymentHash } = params;
  try {
    const invoice = await prisma.invoice.findUnique({ where: { paymentHash } });
    if (!invoice) {
      logger.warn(`[${requestId}] Invoice not found: ${paymentHash}`);
      return NextResponse.json({ error: 'Invoice not found', code: 'NOT_FOUND', requestId }, { status: 404 });
    }
    return NextResponse.json({
      status: invoice.status,
      amountSats: invoice.amountSats,
      expiresAt: invoice.expiresAt,
      settledAt: invoice.settledAt,
      createdAt: invoice.createdAt,
      updatedAt: invoice.updatedAt,
      requestId,
    });
  } catch (err: unknown) {
    Sentry.captureException(err);
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Status endpoint error: ${message}`);
    return NextResponse.json({ error: 'Internal server error', code: 'SERVER_ERROR', requestId }, { status: 500 });
  }
} 