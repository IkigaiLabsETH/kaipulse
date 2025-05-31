import { NextResponse } from 'next/server';
import { serverLogger } from '@/utils/serverLogger';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

// Cache interface
interface CacheEntry {
  data: {
    [key: string]: {
      price: number;
      change24h: number;
      marketCap: number;
      volume24h: number;
    };
  };
  timestamp: number;
}

// Simple in-memory cache
const cache: { [key: string]: CacheEntry } = {};
const CACHE_DURATION = 60 * 1000; // 1 minute in milliseconds

// Define CoinData type for type safety
type CoinData = {
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
};

// Cache key for this endpoint
const CACHE_KEY = 'crypto-prices';

function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < CACHE_DURATION;
}

export async function GET() {
  try {
    // Check cache first
    const cachedData = cache[CACHE_KEY];
    if (cachedData && isCacheValid(cachedData)) {
      serverLogger.info('Serving cached crypto prices data');
      return NextResponse.json(cachedData.data);
    }

    // Update ids to match frontend altcoins as closely as possible
    const ids = [
      'ethereum',
      'chainlink',
      'uniswap',
      'aave',
      'ondo-finance', 
      'ethena', 
      'solana',
      'sui',
      'hyperliquid', 
      'berachain-bera', 
      'infrafred-bgt', 
      'avalanche-2',
      'blockstack',
      'dogecoin',
      'pepe',
      'mog-coin',
      'bittensor',
      'render-token',
      'fartcoin',
      'railgun' 
    ];
    const idsParam = ids.join(',');
    const response = await fetch(
      `${COINGECKO_API_URL}/simple/price?ids=${idsParam}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Ensure all requested IDs are present in the response (with zeroed data if missing)
    const result: Record<string, CoinData> = {};
    ids.forEach((id) => {
      result[id] = data[id]
        ? {
            price: data[id].usd || 0,
            change24h: data[id].usd_24h_change || 0,
            marketCap: data[id].usd_market_cap || 0,
            volume24h: data[id].usd_24h_vol || 0,
          }
        : { price: 0, change24h: 0, marketCap: 0, volume24h: 0 };
    });

    // Update cache
    cache[CACHE_KEY] = {
      data: result,
      timestamp: Date.now(),
    };

    serverLogger.info('Fetched fresh crypto prices data from CoinGecko');
    return NextResponse.json(result);
  } catch (error) {
    serverLogger.error('Error fetching crypto prices:', {
      error,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { error: 'Failed to fetch crypto prices' },
      { status: 500 }
    );
  }
} 