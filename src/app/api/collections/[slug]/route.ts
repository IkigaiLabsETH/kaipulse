import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { isAddress } from 'viem';
import { env } from '@/env.mjs';

// BAYC mock data for development and fallback
const MOCK_BAYC_COLLECTION = {
  slug: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  name: 'Bored Ape Yacht Club',
  description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  image_url: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?w=500&auto=format',
  banner_image_url: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?w=500&auto=format',
  created_date: new Date().toISOString(),
  safelist_status: 'verified',
  is_nsfw: false,
  category: 'collectibles',
  contract_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  asset_contract: {
    address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    name: 'BoredApeYachtClub',
    schema_name: 'ERC721',
  },
  stats: {
    total_supply: 10000,
    total_listings: 284,
    total_volume: 848968.1,
    floor_price: 30.3,
    num_owners: 6345,
    market_cap: 303000
  }
};

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

// Log API key status (without leaking the key)
logger.info('OpenSea API Configuration:', { 
  keyPresent: !!OPENSEA_API_KEY, 
  keyLength: OPENSEA_API_KEY?.length || 0
});

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    if (!OPENSEA_API_KEY) {
      logger.warn('No OpenSea API key, using mock data for: ' + slug);
      // Fall back to mock data for BAYC
      if (slug.toLowerCase() === 'boredapeyachtclub') {
        const response = NextResponse.json({ collection: MOCK_BAYC_COLLECTION });
        response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
        return response;
      }
      
      return NextResponse.json(
        { error: 'OpenSea API is not configured. Please add OPENSEA_API_KEY to your environment variables.' },
        { status: 503 }
      );
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);
    
    // For tracking retry attempts
    let retryCount = 0;
    const maxRetries = 2;
    
    // Function to handle retrying with exponential backoff
    const fetchWithRetry = async (isContractAddress: boolean, slugOverride?: string) => {
      try {
        let collectionData;
        const slugToUse = slugOverride || slug;
        logger.info('Fetching collection by slug', { slug: slugToUse, attempt: retryCount + 1 });
        try {
          collectionData = await openSeaAPI.collections.getCollection({ slug: slugToUse });
          logger.info('Successfully fetched collection by slug', { slug: slugToUse });
        } catch (slugError) {
          logger.error('Error in getCollection', { 
            error: slugError instanceof Error ? slugError.message : 'Unknown error',
            stack: slugError instanceof Error ? slugError.stack : undefined 
          });
          throw slugError;
        }
        if (!collectionData?.collection) {
          logger.error('Collection data is missing expected structure', { collectionData });
          throw new Error('Invalid collection data structure');
        }
        return collectionData;
      } catch (error) {
        retryCount++;
        logger.error('Error in fetchWithRetry:', {
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          attempt: retryCount,
          slug
        });
        if (retryCount <= maxRetries && (
          error instanceof Error && (
            error.message.includes('timeout') ||
            error.message.includes('rate limit') ||
            error.message.includes('429') ||
            error.message.includes('500') ||
            error.message.includes('503') ||
            error.message.includes('504')
          )
        )) {
          const delay = Math.min(1000 * Math.pow(2, retryCount), 4000);
          logger.info(`Retrying after ${delay}ms...`, { attempt: retryCount });
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchWithRetry(isContractAddress, slugOverride);
        }
        throw error;
      }
    };

    try {
      let actualSlug = slug;
      // If slug is a contract address, resolve to collection slug first
      if (isAddress(slug)) {
        try {
          const contractRes = await fetch(
            `https://api.opensea.io/api/v2/chain/ethereum/contract/${slug}`,
            { headers: { 'x-api-key': OPENSEA_API_KEY } }
          );
          if (!contractRes.ok) {
            logger.warn('OpenSea contract endpoint did not recognize address', { slug });
            return NextResponse.json(
              { error: 'Collection not found' },
              { status: 404 }
            );
          }
          const contractData = await contractRes.json();
          if (!contractData.collection) {
            logger.warn('No collection slug found for contract address', { slug, contractData });
            return NextResponse.json(
              { error: 'Collection not found' },
              { status: 404 }
            );
          }
          actualSlug = contractData.collection;
        } catch (err) {
          logger.error('Error resolving contract to collection slug', { slug, err });
          return NextResponse.json(
            { error: 'Collection not found' },
            { status: 404 }
          );
        }
      }

      // Now fetch the collection by slug
      const collectionData = await fetchWithRetry(false, actualSlug);

      // Normalize: handle both root object and nested 'collection' key
      const isCollectionObject = (
        obj: unknown
      ): obj is { name: string; slug: string } =>
        obj !== null &&
        typeof obj === 'object' &&
        'name' in obj &&
        'slug' in obj;

      let normalized = null;
      const collectionObj = (collectionData as { collection?: unknown }).collection;
      if (collectionObj && isCollectionObject(collectionObj)) {
        normalized = collectionObj;
      } else {
        // Fallback: fetch first NFT from the collection and use its fields for minimal metadata
        try {
          const nftsRes = await fetch(
            `https://api.opensea.io/api/v2/collection/${actualSlug}/nfts?limit=1`,
            { headers: { 'x-api-key': OPENSEA_API_KEY } }
          );
          if (nftsRes.ok) {
            const nftsData = await nftsRes.json();
            const nft = Array.isArray(nftsData.nfts) ? nftsData.nfts[0] : null;
            if (nft) {
              normalized = {
                name: nft.name?.split('#')[0]?.trim() || actualSlug,
                slug: actualSlug,
                image_url: nft.image_url,
                contract_address: nft.contract,
                description: nft.description || '',
                // Add more fields as needed
              };
            }
          }
        } catch (nftErr) {
          logger.warn('NFT fallback for collection metadata failed', { slug, nftErr });
        }
      }
      if (!normalized) {
        logger.warn('Collection not found or invalid structure', { slug, normalized });
        return NextResponse.json(
          { error: 'Collection not found' },
          { status: 404 }
        );
      }

      // Debug log before returning
      logger.info('Returning normalized collection', { normalized });

      // Always return under 'collection' key
      const response = NextResponse.json({ collection: normalized });
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      return response;
    } catch (error) {
      logger.error('Error fetching collection data:', {
        slug,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      // Return a user-friendly error message
      return NextResponse.json(
        { error: 'Failed to fetch collection data. The server may be experiencing issues connecting to OpenSea or the collection does not exist.' },
        { status: 500 }
      );
    }
  } catch (error) {
    logger.error('Error in collection API route:', {
      slug: params.slug,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 