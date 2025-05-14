import { NextResponse } from 'next/server';

const COINGECKO_TRENDING_URL = 'https://api.coingecko.com/api/v3/search/trending';
const CACHE_DURATION = 60 * 1000; // 1 minute

interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  score: number;
}

interface CoinGeckoTrendingItem {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    score: number;
  };
}

let cache: { data: TrendingCoin[]; timestamp: number } | null = null;

export async function GET() {
  // Serve from cache if valid
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data);
  }

  try {
    const response = await fetch(COINGECKO_TRENDING_URL, {
      headers: { 'Accept': 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`CoinGecko error: ${response.status}`);
    }
    const data = await response.json();
    // Simplify the response
    const trending: TrendingCoin[] = (data.coins || []).map((c: CoinGeckoTrendingItem) => ({
      id: c.item.id,
      name: c.item.name,
      symbol: c.item.symbol,
      market_cap_rank: c.item.market_cap_rank,
      thumb: c.item.thumb,
      score: c.item.score,
    }));
    // Cache the result
    cache = { data: trending, timestamp: Date.now() };
    return NextResponse.json(trending);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch trending altcoins' }, { status: 500 });
  }
} 