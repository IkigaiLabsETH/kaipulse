import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

// Track collection offers in memory to prevent redundant API calls
const responseCache = new Map<string, { data: Record<string, unknown>, timestamp: number }>();
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
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : 20;
    
    // Create a cache key
    const cacheKey = `offers:slug:${slug.toLowerCase()}:${limit}`;
    const now = Date.now();
    
    // Check cache first
    const cached = responseCache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL) {
      logger.info(`Using cached offers data for collection slug: ${slug}`);
      const response = NextResponse.json(cached.data);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'HIT');
      return response;
    }

    if (!OPENSEA_API_KEY) {
      logger.warn('No OpenSea API key found, returning empty offers array');
      return NextResponse.json({ offers: [] });
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);

    try {
      // First check if this is a contract address
      const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(slug);
      let contractAddress: string | undefined;
      
      if (isContractAddress) {
        // Use the contract address directly
        contractAddress = slug;
      } else {
        // Get the collection to find the contract address
        try {
          const collectionData = await openSeaAPI.collections.getCollection({ slug });
          
          // The collection API doesn't directly give us the contract address in a simple way
          // We need to use the asset contract address
          if (collectionData.asset_contract?.address) {
            contractAddress = collectionData.asset_contract.address;
          }
        } catch {
          // No need to capture the error variable if we're not using it
          logger.warn(`Could not get contract address for collection ${slug}, will try without it`);
        }
      }
      
      // Get collection offers - using contract address if available
      const offersResponse = await openSeaAPI.orders.getOffers({
        asset_contract_address: contractAddress,
        limit
      });

      // Transform the response to match client expectations
      const transformedResponse = {
        offers: offersResponse.orders,
        next: offersResponse.next
      };

      // Cache the response
      responseCache.set(cacheKey, { data: transformedResponse, timestamp: now });

      // Add cache headers for better performance
      const response = NextResponse.json(transformedResponse);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'MISS');
      
      return response;
    } catch (apiError) {
      // Log the error and return empty offers array
      logger.error('OpenSea API call failed when fetching offers:', {
        slug,
        error: apiError instanceof Error ? apiError.message : 'Unknown error'
      });
      
      return NextResponse.json({ offers: [] });
    }

  } catch (error) {
    logger.error('Error fetching collection offers:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return NextResponse.json(
      { error: 'Failed to fetch collection offers' },
      { status: 500 }
    );
  }
} 