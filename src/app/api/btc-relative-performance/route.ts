import { NextResponse } from 'next/server';

const COINGECKO_MARKETS_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const CACHE_DURATION = 60 * 1000; // 1 minute

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_7d: number;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}

let cache: { data: Coin[]; timestamp: number } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data);
  }

  try {
    // Fetch top 200 coins by market cap with additional data
    const response = await fetch(
      `${COINGECKO_MARKETS_URL}?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&price_change_percentage=7d_in_currency&price_change_percentage=7d&sparkline=false`,
      {
        headers: { 'Accept': 'application/json' },
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko error: ${response.status}`);
    }

    const data: Coin[] = await response.json();
    
    // Get Bitcoin's 7d performance
    const btc = data.find(coin => coin.id === 'bitcoin');
    if (!btc) {
      throw new Error('Bitcoin data not found');
    }

    // Calculate relative performance and sort
    const sorted = data
      .filter(coin => 
        coin.id !== 'bitcoin' && 
        typeof coin.price_change_percentage_7d === 'number' &&
        coin.market_cap_rank <= 200
      )
      .map(coin => ({
        ...coin,
        btc_relative_performance: coin.price_change_percentage_7d - btc.price_change_percentage_7d
      }))
      .sort((a, b) => b.btc_relative_performance - a.btc_relative_performance)
      .slice(0, 8);

    cache = { data: sorted, timestamp: Date.now() };
    return NextResponse.json(sorted);
  } catch (error) {
    console.error('Error fetching BTC relative performance:', error);
    return NextResponse.json({ error: 'Failed to fetch BTC relative performance' }, { status: 500 });
  }
} 