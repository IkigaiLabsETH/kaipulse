import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    if (!OPENSEA_API_KEY) {
      return NextResponse.json(
        { error: 'OpenSea API is not configured. Please add OPENSEA_API_KEY to your environment variables.' },
        { status: 503 }
      );
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);
    const { slug } = params;

    // Get NFTs by collection slug
    const nfts = await openSeaAPI.nft.getNFTsByCollection({
      collection_slug: slug,
      limit: 50
    });

    // Add cache headers for better performance
    const response = NextResponse.json({ nfts: nfts.nfts });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    
    return response;

  } catch (error) {
    logger.error('Error fetching NFTs:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return NextResponse.json(
      { error: 'Failed to fetch NFTs' },
      { status: 500 }
    );
  }
} 