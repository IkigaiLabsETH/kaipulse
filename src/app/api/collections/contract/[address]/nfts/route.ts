import { NextResponse } from 'next/server';
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
      return getMockNFTsForContract(params.address);
    }

    const { address } = params;

    try {
      // Skip the API call for now since we don't have that method implemented
      // and directly use mock data
      return getMockNFTsForContract(address);

      /*
      // This is the ideal implementation once the API client supports it
      const openSeaAPI = new OpenSeaAPI(OPENSEA_API_KEY);
      const response = await openSeaAPI.nft.getNFTsByContract({
        contractAddress: address,
        chain: 'ethereum',
        limit: 50
      });

      // Add cache headers for better performance
      const apiResponse = NextResponse.json({ nfts: response.nfts });
      apiResponse.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
      
      return apiResponse;
      */
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
    const response = NextResponse.json({ nfts: mockCollections['boredapeyachtclub'] });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // For any other contract, use a generic mock or the first available mock collection
  const firstMockCollection = Object.values(mockCollections)[0];
  if (firstMockCollection) {
    logger.warn(`No specific mock data for ${contractAddress}, using default mock collection`);
    const response = NextResponse.json({ nfts: firstMockCollection });
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    return response;
  }

  // If we have no mock data at all
  return NextResponse.json({ error: 'No data available' }, { status: 404 });
} 