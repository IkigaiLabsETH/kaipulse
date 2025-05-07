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
  const paymentHashHex = base64ToHex(paymentHash);
  try {
    const invoice = await prisma.invoice.findUnique({ where: { paymentHash: paymentHashHex } });
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
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Status endpoint error: ${message}`);
    return NextResponse.json({ error: 'Internal server error', code: 'SERVER_ERROR', requestId }, { status: 500 });
  }
} 