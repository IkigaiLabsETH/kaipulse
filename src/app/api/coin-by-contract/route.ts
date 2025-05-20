import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/coin-by-contract?id=ethereum&platform=ethereum&contract=0x...
 * Fetches coin data from CoinGecko by contract address.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const platform = searchParams.get('platform');
  const contract = searchParams.get('contract');

  if (!id || !platform || !contract) {
    return NextResponse.json({ error: 'Missing required query params: id, platform, contract' }, { status: 400 });
  }

  const url = `https://api.coingecko.com/api/v3/coins/${id}/contract/${contract}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&vs_currencies=usd,btc`;

  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
    });
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