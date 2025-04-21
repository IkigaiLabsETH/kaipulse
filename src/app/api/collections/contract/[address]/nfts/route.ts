import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';
import { mockCollections } from '@/data/mockNFTs';
import { OpenSeaAPI } from '@/services/opensea/api';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

// Track NFT data in memory to prevent redundant API calls during development
const responseCache = new Map<string, { data: Record<string, unknown>, timestamp: number }>();
const CACHE_TTL = 60 * 1000; // 1 minute cache

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  try {
    const { address } = params;
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : 50;
    const next = searchParams.get('next') || undefined;

    // Create a cache key that includes pagination parameters
    const cacheKey = `nfts:${address.toLowerCase()}:${limit}:${next || ''}`;
    const now = Date.now();
    
    // Check cache first
    const cached = responseCache.get(cacheKey);
    if (cached && now - cached.timestamp < CACHE_TTL) {
      logger.info(`Using cached NFT data for ${address}`);
      const response = NextResponse.json(cached.data);
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      response.headers.set('X-Cache', 'HIT');
      return response;
    }

    if (!OPENSEA_API_KEY) {
      logger.warn('No OpenSea API key found, using mock data');
      return getMockNFTsForContract(address);
    }

    try {
      // Use the real OpenSea API
      const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);
      const response = await openSeaAPI.nft.getNFTsByContract({
        contractAddress: address,
        chain: 'ethereum',
        limit,
        next: next as string | undefined
      });

      // Cache the response
      responseCache.set(cacheKey, { data: response, timestamp: now });

      // Add cache headers for better performance
      const apiResponse = NextResponse.json(response);
      apiResponse.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      apiResponse.headers.set('X-Cache', 'MISS');
      
      return apiResponse;
    } catch (apiError) {
      // If API call fails, fall back to mock data
      logger.warn('OpenSea API call failed when fetching NFTs by contract, using mock data:', {
        address,
        error: apiError instanceof Error ? apiError.message : 'Unknown error'
      });
      return getMockNFTsForContract(address);
    }

  } catch (error) {
    logger.error('Error fetching NFTs by contract address:', {
      address: params.address,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Last resort - try to use mock data after another error
    try {
      return getMockNFTsForContract(params.address);
    } catch {
      return NextResponse.json(
        { error: 'Failed to fetch NFTs' },
        { status: 500 }
      );
    }
  }
}

function getMockNFTsForContract(contractAddress: string) {
  logger.info(`Using mock NFT data for contract address: ${contractAddress}`);
  
  // BAYC contract address as a reference
  const BAYC_CONTRACT = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'.toLowerCase();
  
  // If the contract matches BAYC, use the BAYC mock data
  if (contractAddress.toLowerCase() === BAYC_CONTRACT) {
    const response = NextResponse.json({ 
      nfts: mockCollections['boredapeyachtclub'],
      next: null 
    });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // For any other contract, use a generic mock or the first available mock collection
  const firstMockCollection = Object.values(mockCollections)[0];
  if (firstMockCollection) {
    logger.warn(`No specific mock data for ${contractAddress}, using default mock collection`);
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