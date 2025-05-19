import { NextResponse } from 'next/server';

const COINGECKO_MARKETS_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h';
const CACHE_DURATION = 60 * 1000; // 1 minute

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

let cache: { data: Coin[]; timestamp: number } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data);
  }

  try {
    const response = await fetch(COINGECKO_MARKETS_URL, {
      headers: { 'Accept': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`CoinGecko error: ${response.status}`);
    }
    const data: Coin[] = await response.json();
    // Sort by 24h price change percentage ascending
    const sorted = data
      .filter((coin) => typeof coin.price_change_percentage_24h === 'number')
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, 4)
      .map((coin) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image,
        market_cap_rank: coin.market_cap_rank,
        price_change_percentage_24h: coin.price_change_percentage_24h,
      }));
    cache = { data: sorted, timestamp: Date.now() };
    return NextResponse.json(sorted);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch top losers' }, { status: 500 });
  }
} 