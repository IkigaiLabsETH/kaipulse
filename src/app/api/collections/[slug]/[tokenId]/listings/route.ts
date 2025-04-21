import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

// Mock listing for BAYC NFT
const MOCK_LISTINGS = [
  {
    protocol_address: '0x00000000000000adc04c56bf30ac9d3c0aaf14dc',
    chain: 'ethereum',
    order_hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    created_date: new Date().toISOString(),
    closing_date: null,
    listing_time: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    expiration_time: Math.floor(Date.now() / 1000) + 604800, // 1 week from now
    current_price: '35000000000000000000', // 35 ETH
    maker: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    },
    taker: null,
    side: 'ask',
    order_type: 'basic',
    cancelled: false,
    finalized: false,
    marked_invalid: false
  }
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string; tokenId: string } }
) {
  try {
    const { slug, tokenId } = params;
    
    // For demonstration purposes, always return mock data
    logger.info('Using mock data for NFT listings', { slug, tokenId });
    
    const response = NextResponse.json({ orders: MOCK_LISTINGS });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  } catch (error) {
    logger.error('Error in NFT listings route:', {
      slug: params.slug,
      tokenId: params.tokenId,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    // Return empty listings rather than failing
    return NextResponse.json({ orders: [] }, { status: 200 });
  }
} 