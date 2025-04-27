import { NextResponse } from 'next/server';
// @ts-expect-error: ln-service has no types
import { getWalletInfo } from 'ln-service';
import winston from 'winston';
import { randomUUID } from 'crypto';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
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

export async function GET() {
  const requestId = randomUUID();
  try {
    const lnd = getLnd();
    const walletInfo = await getWalletInfo({ lnd });
    return NextResponse.json({
      confirmedBalance: walletInfo.confirmed_balance,
      unconfirmedBalance: walletInfo.unconfirmed_balance,
      requestId,
    });
  } catch (err: unknown) {
    let message = 'Unknown error';
    if (err instanceof Error) message = err.message;
    logger.error(`[${requestId}] Balance error: ${message}`);
    return NextResponse.json(
      { error: 'Internal server error', code: 'SERVER_ERROR', requestId },
      { status: 500 }
    );
  }
} 