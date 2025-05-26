import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

// Simple in-memory cache with 5 minute TTL
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: unknown; timestamp: number }>();

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

  // Check cache first
  const cached = cache.get(id);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json(cached.data);
  }

  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&vs_currencies=usd,btc`;
  
  try {
    const response = await fetch(url, { 
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 300 } // Enable Next.js cache for 5 minutes
    });

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 404) {
        return NextResponse.json({ error: 'Coin not found' }, { status: 404 });
      }
      if (response.status === 429) {
        // If we have cached data, return it even if expired
        if (cached) {
          logger.warn(`Rate limited, returning stale data for ${id}`);
          return NextResponse.json(cached.data);
        }
        return NextResponse.json({ 
          error: 'Rate limit exceeded', 
          details: 'Please try again in a few minutes'
        }, { status: 429 });
      }
      
      const errorText = await response.text();
      logger.error(`CoinGecko API error for ${id}:`, errorText);
      return NextResponse.json({ 
        error: 'Failed to fetch coin data', 
        details: errorText 
      }, { status: response.status });
    }

    const data = await response.json();
    
    // Cache successful response
    cache.set(id, { data, timestamp: Date.now() });
    
    return NextResponse.json(data);
  } catch (e) {
    // If we have cached data, return it even if expired
    if (cached) {
      logger.warn(`Error fetching data, returning stale data for ${id}`);
      return NextResponse.json(cached.data);
    }
    logger.error(`Error fetching coin data for ${id}:`, e);
    return NextResponse.json({ 
      error: 'Failed to fetch coin data', 
      details: e instanceof Error ? e.message : 'Unknown error'
    }, { status: 500 });
  }
} 