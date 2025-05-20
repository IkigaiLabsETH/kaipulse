import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/coin-by-id?id=solana
 * Fetches coin data from CoinGecko by coin id.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing required query param: id' }, { status: 400 });
  }
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&vs_currencies=usd,btc`;
  try {
    const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: 'Failed to fetch coin data', details: errorText }, { status: 500 });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch coin data', details: String(e) }, { status: 500 });
  }
} 