import { NextResponse } from 'next/server';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';

export async function GET() {
  if (!ETHERSCAN_API_KEY) {
    return NextResponse.json(
      { error: 'Etherscan API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${ETHERSCAN_API_URL}?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch gas stats from Etherscan');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch gas stats' },
      { status: 500 }
    );
  }
} 