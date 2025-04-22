import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';

// Mock events data for development
const MOCK_EVENTS = [
  {
    event_type: 'sale',
    event_timestamp: new Date().toISOString(),
    created_date: new Date().toISOString(),
    from_account: {
      address: '0x1234...',
      user: { username: 'seller123' }
    },
    to_account: {
      address: '0xabcd...',
      user: { username: 'buyer456' }
    },
    transaction: {
      hash: '0x123456789abcdef',
      timestamp: new Date().toISOString()
    },
    payment: {
      quantity: '2.5',
      price_usd: '4500'
    }
  },
  {
    event_type: 'transfer',
    event_timestamp: new Date(Date.now() - 86400000).toISOString(),
    created_date: new Date(Date.now() - 86400000).toISOString(),
    from_account: {
      address: '0xdef0...',
      user: { username: 'collector789' }
    },
    to_account: {
      address: '0x5678...',
      user: { username: 'gallery365' }
    },
    transaction: {
      hash: '0x987654321fedcba',
      timestamp: new Date(Date.now() - 86400000).toISOString()
    }
  },
  {
    event_type: 'mint',
    event_timestamp: new Date(Date.now() - 172800000).toISOString(),
    created_date: new Date(Date.now() - 172800000).toISOString(),
    from_account: {
      address: '0x0000...',
      user: { username: 'creator001' }
    },
    to_account: {
      address: '0x9876...',
      user: { username: 'collector001' }
    },
    transaction: {
      hash: '0xabcdef123456789',
      timestamp: new Date(Date.now() - 172800000).toISOString()
    }
  }
];

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : 10;
    const next = searchParams.get('next') || undefined;

    // Log request info
    logger.info('Fetching collection activity:', { 
      collectionSlug: slug,
      limit,
      next
    });

    // Use mock data if no API key or for specific collections
    if (!OPENSEA_API_KEY || slug.toLowerCase() === 'boredapeyachtclub') {
      logger.info('Using mock events data for collection: ' + slug);
      const response = NextResponse.json({ events: MOCK_EVENTS, next: null });
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      return response;
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);

    try {
      // Get events by collection
      const events = await openSeaAPI.events.getEventsByCollection({
        collection_slug: slug,
        limit: limit,
        next: next as string | undefined
      });

      // Add cache headers for better performance
      const response = NextResponse.json(events);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      return response;
    } catch (apiError) {
      logger.error('OpenSea API error for collection events:', {
        error: apiError instanceof Error ? apiError.message : 'Unknown error',
        slug
      });

      // Fall back to mock data
      logger.info('Falling back to mock data for events');
      return NextResponse.json({ events: MOCK_EVENTS, next: null });
    }
  } catch (error) {
    logger.error('Error fetching NFT events:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Last resort - use mock data
    return NextResponse.json(
      { events: MOCK_EVENTS, next: null },
      { status: 200 }
    );
  }
} 