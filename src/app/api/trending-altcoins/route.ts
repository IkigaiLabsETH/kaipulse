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
    // Fetch trending coins from CoinGecko
    const response = await fetch(COINGECKO_TRENDING_URL, {
      headers: { 'Accept': 'application/json' },
      // Optionally, set a timeout in the future
    });
    if (!response.ok) {
      // Return empty array on error for frontend resilience
      return NextResponse.json([]);
    }
    const data = await response.json();
    // Map and validate trending coins
    const trending: TrendingCoin[] = Array.isArray(data.coins)
      ? data.coins.map((c: CoinGeckoTrendingItem) => ({
          id: c.item.id,
          name: c.item.name,
          symbol: c.item.symbol,
          market_cap_rank: c.item.market_cap_rank,
          thumb: c.item.thumb,
          score: c.item.score,
        }))
      : [];
    // Cache the result
    cache = { data: trending, timestamp: Date.now() };
    return NextResponse.json(trending);
  } catch {
    // Return empty array for frontend resilience
    return NextResponse.json([]);
  }
} 