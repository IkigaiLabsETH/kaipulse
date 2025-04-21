import { NextResponse } from 'next/server';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import { env } from '@/env.mjs';
import { mockCollections } from '@/data/mockNFTs';

const OPENSEA_API_KEY = env.OPENSEA_API_KEY;

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(
  request: Request,
  { params }: { params: { address: string } }
) {
  try {
    if (!OPENSEA_API_KEY) {
      return getMockDataForContract(params.address);
    }

    const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);
    const { address } = params;

    try {
      // For now, just use mock data since we don't have that API method accessible yet
      return getMockDataForContract(address);
      
      /*
      // This is the actual implementation once the API client has the method
      const collection = await openSeaAPI.collection.getCollectionByContractAddress({
        contractAddress: address,
        chain: 'ethereum'
      });

      // Add cache headers for better performance
      const response = NextResponse.json({ collection });
      response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      
      return response;
      */
    } catch (apiError) {
      // If API call fails, fall back to mock data
      logger.warn('OpenSea API call failed when fetching by contract, using mock data:', {
        address,
        error: apiError instanceof Error ? apiError.message : 'Unknown error'
      });
      return getMockDataForContract(address);
    }

  } catch (error) {
    logger.error('Error fetching collection by contract address:', {
      address: params.address,
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    // Last resort - try to use mock data after another error
    try {
      return getMockDataForContract(params.address);
    } catch (err) {
      return NextResponse.json(
        { error: 'Failed to fetch collection' },
        { status: 500 }
      );
    }
  }
}

function getMockDataForContract(contractAddress: string) {
  logger.info(`Using mock data for contract address: ${contractAddress}`);
  
  // Default BAYC contract address as a reference
  const BAYC_CONTRACT = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'.toLowerCase();
  
  // If the contract matches BAYC, use that mock data
  if (contractAddress.toLowerCase() === BAYC_CONTRACT) {
    const mockCollection = {
      collection: {
        name: 'Bored Ape Yacht Club',
        description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs.',
        image_url: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000',
        banner_image_url: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8aOE?auto=format&dpr=1&w=3000',
        external_url: 'https://boredapeyachtclub.com',
        slug: 'boredapeyachtclub',
        discord_url: 'https://discord.gg/3P5K3dzgdB',
        twitter_username: 'BoredApeYC',
        safelist_status: 'verified',
        is_nsfw: false,
        stats: {
          total_supply: 10000,
          total_listings: 435,
          total_volume: 848968.1,
          floor_price: 30.3,
          num_owners: 6345,
          market_cap: 303000
        }
      }
    };

    const response = NextResponse.json(mockCollection);
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // For any other contract address, return a generic mock
  const mockCollection = {
    collection: {
      name: 'Mock Collection',
      description: 'This is a mock collection for testing purposes.',
      image_url: '/images/placeholder-logo.png',
      banner_image_url: '/images/placeholder-banner.png',
      external_url: '#',
      slug: 'mock-collection',
      discord_url: '#',
      twitter_username: 'mock',
      safelist_status: 'verified',
      is_nsfw: false,
      stats: {
        total_supply: 10000,
        total_listings: 100,
        total_volume: 1000,
        floor_price: 0.1,
        num_owners: 1000,
        market_cap: 1000
      }
    }
  };

  const response = NextResponse.json(mockCollection);
  response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return response;
} 