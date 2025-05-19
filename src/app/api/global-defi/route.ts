import { NextResponse } from 'next/server';

const COINGECKO_DEFI_URL = 'https://api.coingecko.com/api/v3/global/decentralized_finance_defi'; // Free API endpoint
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

let cache: { data: unknown; timestamp: number } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data);
  }
  try {
    const response = await fetch(COINGECKO_DEFI_URL, {
      headers: {
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: 'Failed to fetch global DeFi market data', details: errorText }, { status: 500 });
    }
    const data = await response.json();
    cache = { data, timestamp: Date.now() };
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch global DeFi market data', details: String(e) }, { status: 500 });
  }
} 