import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';
import { mockCollections } from '@/data/mockNFTs';
import type { OpenSeaNFT } from '@/services/opensea/types';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

// Simple cache to prevent redundant API calls during development
type CacheData = any[] | Record<string, unknown>;
const responseCache = new Map<string, { data: CacheData, timestamp: number }>();
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

    // Normalized slug for consistency
    const normalizedSlug = slug.toLowerCase();

    // Special case for BAYC - always return mock data
    if (normalizedSlug === 'boredapeyachtclub') {
      logger.info('Using mock data for Bored Ape Yacht Club');
      
      const nfts = mockCollections['boredapeyachtclub'] || [];
      logger.info(`Returning ${nfts.length} Bored Ape NFTs`);
      
      const response = NextResponse.json(nfts);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      return response;
    }

    // Create a cache key 
    const cacheKey = `nfts:slug:${normalizedSlug}:${limit}:${next || ''}`;
    const now = Date.now();
    
    // Check cache first
    const cached = responseCache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL) {
      let nfts: any[] = [];
      
      // Handle both array and object formats in cache
      if (Array.isArray(cached.data)) {
        nfts = cached.data;
      } else if (cached.data && (cached.data as any).nfts && Array.isArray((cached.data as any).nfts)) {
        nfts = (cached.data as any).nfts;
      }
      
      logger.info(`Using cached NFT data for ${slug}: ${nfts.length} items`);
      const response = NextResponse.json(nfts);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'HIT');
      return response;
    }

    // Use mock data if no API key
    if (!OPENSEA_API_KEY) {
      logger.warn('No OpenSea API key found, using mock data');
      return getMockData(normalizedSlug);
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);

    try {
      // Get NFTs by collection slug
      const result = await openSeaAPI.nft.getNFTsByCollection({
        collection_slug: normalizedSlug,
        limit,
        next: next as string | undefined
      });

      // Extract NFTs array from the result
      const nfts = result.nfts || [];
      
      logger.info(`Received ${nfts.length} NFTs for collection ${slug}`);

      // Cache the response
      responseCache.set(cacheKey, { data: nfts, timestamp: now });

      // Return array directly
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
      return getMockData(normalizedSlug);
    }

  } catch (error) {
    logger.error('Error fetching NFTs:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Last resort - try to use mock data after an error
    try {
      return getMockData(params.slug);
    } catch {
      // Return empty array if all else fails
      return NextResponse.json([], { status: 500 });
    }
  }
}

function getMockData(slug: string) {
  logger.info(`Using mock data for collection: ${slug}`);
  
  // Normalize the slug
  const normalizedSlug = slug.toLowerCase();
  
  // For BAYC, return the array directly
  if (normalizedSlug === 'boredapeyachtclub' && mockCollections['boredapeyachtclub']) {
    const nfts = mockCollections['boredapeyachtclub'];
    logger.info(`Returning ${nfts.length} Bored Ape NFTs from mock data`);
    const response = NextResponse.json(nfts);
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }
  
  // For other collections with mock data
  if (mockCollections[normalizedSlug]) {
    const nfts = mockCollections[normalizedSlug];
    logger.info(`Returning ${nfts.length} NFTs for ${slug} from mock data`);
    const response = NextResponse.json(nfts);
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // Try to use BAYC as fallback
  if (mockCollections['boredapeyachtclub']) {
    const nfts = mockCollections['boredapeyachtclub'];
    logger.warn(`No mock data for ${slug}, using ${nfts.length} Bored Ape NFTs as fallback`);
    const response = NextResponse.json(nfts);
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }
  
  // Last resort - empty array
  logger.warn(`No mock data available, returning empty array`);
  const response = NextResponse.json([]);
  response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return response;
} 