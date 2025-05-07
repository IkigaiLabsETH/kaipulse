import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

function base64ToHex(base64: string): string {
  return Buffer.from(base64, 'base64').toString('hex');
}

export async function GET(
  _request: Request,
  { params }: { params: { paymentHash: string } }
) {
  const requestId = Math.random().toString(36).slice(2, 10);
  const { paymentHash } = params;
  logger.info(`[${requestId}] Queried paymentHash (base64): ${paymentHash}`);
  let paymentHashHex;
  try {
    paymentHashHex = base64ToHex(paymentHash);
  } catch (e) {
    logger.error(`[${requestId}] Failed to decode base64 paymentHash: ${paymentHash} - ${e}`);
    return NextResponse.json({ error: 'Invalid payment hash', code: 'INVALID_HASH', requestId }, { status: 400 });
  }
  logger.info(`[${requestId}] Queried paymentHash (hex): ${paymentHashHex}`);
  try {
    const invoice = await prisma.invoice.findUnique({ where: { paymentHash: paymentHashHex } });
    if (!invoice) {
      logger.warn(`[${requestId}] Invoice not found: ${paymentHash}`);
      return NextResponse.json({ error: 'Invoice not found', code: 'NOT_FOUND', requestId }, { status: 404 });
    }
    return NextResponse.json({
      status: invoice.status,
      amountSats: invoice.amountSats.toString(),
      expiresAt: invoice.expiresAt,
      settledAt: invoice.settledAt,
      createdAt: invoice.createdAt,
      updatedAt: invoice.updatedAt,
      requestId,
    });
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Status endpoint error: ${message}`);
    return NextResponse.json({ error: 'Internal server error', code: 'SERVER_ERROR', requestId }, { status: 500 });
  }
} 