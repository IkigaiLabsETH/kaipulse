import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

// Mock offers for BAYC NFT
const MOCK_OFFERS = [
  {
    protocol_address: '0x00000000000000adc04c56bf30ac9d3c0aaf14dc',
    chain: 'ethereum',
    order_hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
    created_date: new Date().toISOString(),
    closing_date: null,
    listing_time: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
    expiration_time: Math.floor(Date.now() / 1000) + 259200, // 3 days from now
    current_price: '33500000000000000000', // 33.5 ETH
    maker: {
      address: '0x8e37e5c3af2b6efbc13328c43b1f7bf3ccab007c'
    },
    taker: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    },
    side: 'bid',
    order_type: 'basic',
    cancelled: false,
    finalized: false,
    marked_invalid: false
  },
  {
    protocol_address: '0x00000000000000adc04c56bf30ac9d3c0aaf14dc',
    chain: 'ethereum',
    order_hash: '0x2468ace02468ace02468ace02468ace02468ace02468ace02468ace02468ace0',
    created_date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    closing_date: null,
    listing_time: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    expiration_time: Math.floor(Date.now() / 1000) + 172800, // 2 days from now
    current_price: '32000000000000000000', // 32 ETH
    maker: {
      address: '0x3f8473c62766aa98a31edbd2a5cb361a95c75850'
    },
    taker: {
      address: '0x6170b3c3a54c3d8c854934cbc33a8fb0e3e5cf4f'
    },
    side: 'bid',
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
    logger.info('Using mock data for NFT offers', { slug, tokenId });
    
    const response = NextResponse.json({ orders: MOCK_OFFERS });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  } catch (error) {
    logger.error('Error in NFT offers route:', {
      slug: params.slug,
      tokenId: params.tokenId,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    // Return empty offers rather than failing
    return NextResponse.json({ orders: [] }, { status: 200 });
  }
} 