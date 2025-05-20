import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const clientId = process.env.BTC_DIRECT_CLIENT_ID;
    const clientSecret = process.env.BTC_DIRECT_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      throw new Error('BTC Direct credentials are not set');
    }

    const response = await fetch('https://api.btcdirect.eu/api/v2/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId, clientSecret }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to authenticate with BTC Direct');
    }

    const { token } = await response.json();
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to authenticate with BTC Direct' },
      { status: 500 }
    );
  }
} 