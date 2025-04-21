import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';
import { mockCollections } from '@/data/mockNFTs';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

// Track NFT data in memory to prevent redundant API calls during development
const responseCache = new Map<string, { data: any, timestamp: number }>();
const CACHE_TTL = 60 * 1000; // 1 minute cache

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : 50;
    const next = searchParams.get('next') || undefined;

    // Create a cache key that includes pagination parameters
    const cacheKey = `nfts:slug:${slug.toLowerCase()}:${limit}:${next || ''}`;
    const now = Date.now();
    
    // Check cache first
    const cached = responseCache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL) {
      logger.info(`Using cached NFT data for collection slug: ${slug}`);
      const response = NextResponse.json(cached.data);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'HIT');
      return response;
    }

    if (!OPENSEA_API_KEY) {
      logger.warn('No OpenSea API key found, using mock data');
      return getMockData(slug);
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);

    try {
      // Get NFTs by collection slug
      const nfts = await openSeaAPI.nft.getNFTsByCollection({
        collection_slug: slug,
        limit,
        next: next as string | undefined
      });

      // Cache the response
      responseCache.set(cacheKey, { data: nfts, timestamp: now });

      // Add cache headers for better performance
      const response = NextResponse.json(nfts);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'MISS');
      
      return response;
    } catch (apiError) {
      // If API call fails, fall back to mock data
      logger.warn('OpenSea API call failed, using mock data:', {
        slug,
        error: apiError instanceof Error ? apiError.message : 'Unknown error'
      });
      return getMockData(slug);
    }

  } catch (error) {
    logger.error('Error fetching NFTs:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Last resort - try to use mock data after another error
    try {
      return getMockData(params.slug);
    } catch {
      return NextResponse.json(
        { error: 'Failed to fetch NFTs' },
        { status: 500 }
      );
    }
  }
}

function getMockData(slug: string) {
  logger.info(`Using mock data for collection: ${slug}`);
  
  // Normalize the slug to match our mock data keys
  const normalizedSlug = slug.toLowerCase();
  
  if (mockCollections[normalizedSlug]) {
    const response = NextResponse.json({ 
      nfts: mockCollections[normalizedSlug],
      next: null
    });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // If we don't have mock data for this specific collection, use the first mock collection we have
  const firstMockCollection = Object.values(mockCollections)[0];
  if (firstMockCollection) {
    logger.warn(`No mock data for ${slug}, using default mock collection`);
    const response = NextResponse.json({ 
      nfts: firstMockCollection,
      next: null
    });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // If we have no mock data at all
  return NextResponse.json({ error: 'No data available' }, { status: 404 });
} 