import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
const OPENSEA_API_URL = 'https://api.opensea.io/api/v2';

if (!OPENSEA_API_KEY) {
  logger.error('OpenSea API key is required. Please add OPENSEA_API_KEY to your environment variables.');
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    const contractAddress = searchParams.get('contractAddress');

    if (!path || !contractAddress) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    if (path !== 'collection') {
      return NextResponse.json(
        { error: 'Invalid path parameter' },
        { status: 400 }
      );
    }

    if (!OPENSEA_API_KEY) {
      return NextResponse.json(
        { error: 'OpenSea API key is not configured' },
        { status: 503 }
      );
    }

    const headers: HeadersInit = {
      'Accept': 'application/json',
      'X-API-KEY': OPENSEA_API_KEY
    };

    // First, get the collection slug using the contract address
    const collectionResponse = await fetch(
      `${OPENSEA_API_URL}/chain/ethereum/contract/${contractAddress}`,
      { headers }
    );

    if (!collectionResponse.ok) {
      logger.error('OpenSea API error fetching collection by contract:', {
        status: collectionResponse.status,
        statusText: collectionResponse.statusText,
        contractAddress
      });

      return NextResponse.json(
        { error: 'Failed to fetch collection data from OpenSea' },
        { status: collectionResponse.status }
      );
    }

    const contractData = await collectionResponse.json();
    const collectionSlug = contractData.collection;

    if (!collectionSlug) {
      return NextResponse.json(
        { error: 'Collection not found for this contract' },
        { status: 404 }
      );
    }

    // Then get the full collection data using the slug
    const response = await fetch(
      `${OPENSEA_API_URL}/collections/${collectionSlug}`,
      { headers }
    );

    if (!response.ok) {
      logger.error('OpenSea API error fetching collection details:', {
        status: response.status,
        statusText: response.statusText,
        collectionSlug
      });

      return NextResponse.json(
        { error: 'Failed to fetch collection details from OpenSea' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Add cache headers for better performance
    const responseWithData = NextResponse.json(data);
    responseWithData.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    
    return responseWithData;
  } catch (error) {
    logger.error('Error in OpenSea API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 