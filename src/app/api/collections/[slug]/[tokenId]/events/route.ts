import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

// Mock events for BAYC NFT #1
const MOCK_BAYC_EVENTS = [
  {
    event_type: 'sale',
    created_date: '2023-03-15T12:34:56Z',
    event_timestamp: '2023-03-15T12:34:56Z',
    from_account: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    },
    to_account: {
      address: '0x8e37e5c3af2b6efbc13328c43b1f7bf3ccab007c'
    },
    payment: {
      quantity: '75000000000000000000',
      token: {
        symbol: 'ETH',
        address: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        decimals: 18
      }
    }
  },
  {
    event_type: 'transfer',
    created_date: '2023-01-10T08:23:45Z',
    event_timestamp: '2023-01-10T08:23:45Z',
    from_account: {
      address: '0x3f8473c62766aa98a31edbd2a5cb361a95c75850'
    },
    to_account: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    }
  },
  {
    event_type: 'listing',
    created_date: '2023-03-01T10:12:33Z',
    event_timestamp: '2023-03-01T10:12:33Z',
    from_account: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    },
    payment: {
      quantity: '80000000000000000000',
      token: {
        symbol: 'ETH',
        address: '0x0000000000000000000000000000000000000000',
        name: 'Ethereum',
        decimals: 18
      }
    }
  },
  {
    event_type: 'mint',
    created_date: '2021-04-22T05:07:35Z',
    event_timestamp: '2021-04-22T05:07:35Z',
    from_account: {
      address: '0x0000000000000000000000000000000000000000'
    },
    to_account: {
      address: '0x3f8473c62766aa98a31edbd2a5cb361a95c75850'
    }
  }
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string; tokenId: string } }
) {
  try {
    const { slug, tokenId } = params;
    
    // For demonstration purposes, always return mock data
    logger.info('Using mock data for events', { slug, tokenId });
    
    const response = NextResponse.json({ events: MOCK_BAYC_EVENTS });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  } catch (error) {
    logger.error('Error in NFT events route:', {
      slug: params.slug,
      tokenId: params.tokenId,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    // Return empty events rather than failing
    return NextResponse.json({ events: [] }, { status: 200 });
  }
} 