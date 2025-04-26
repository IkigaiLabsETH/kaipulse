import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
});

// Placeholder for reward logic
async function triggerReward(paymentHash: string) {
  // TODO: Implement actual reward logic (e.g., credit sats, unlock reward, notify user)
  logger.info(`[webhook] Reward triggered for paymentHash: ${paymentHash}`);
}

export async function POST(request: Request) {
  const requestId = Math.random().toString(36).slice(2, 10);
  try {
    const body = await request.json();
    const paymentHash = body.paymentHash || body.payment_hash || body.id;
    if (!paymentHash || typeof paymentHash !== 'string') {
      logger.warn(`[${requestId}] Missing or invalid paymentHash in webhook`);
      return NextResponse.json({ error: 'Missing paymentHash', code: 'INVALID_INPUT', requestId }, { status: 400 });
    }

    // Update invoice in DB
    const _invoice = await prisma.invoice.update({
      where: { paymentHash },
      data: {
        status: 'settled',
        settledAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Trigger reward logic
    await triggerReward(paymentHash);

    logger.info(`[${requestId}] Invoice ${paymentHash} settled and reward triggered.`);
    return NextResponse.json({ ok: true, requestId });
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Webhook error: ${message}`);
    return NextResponse.json({ error: 'Internal server error', code: 'SERVER_ERROR', requestId }, { status: 500 });
  }
} 