import { NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { logger } from '@/lib/logger';

export async function GET() {
  try {
    // Check if we have an API key
    const apiKey = env.OPENSEA_API_KEY;
    
    if (!apiKey) {
      logger.warn('OpenSea API key not configured when trying to fetch NFT data');
      return NextResponse.json(
        { error: 'OpenSea API key is not configured. Please set up your API key in the environment variables.' },
        { status: 503 }
      );
    }

    // This is a production endpoint, so we should fetch real data from OpenSea
    const address = '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270';
    const tokenId = '163000597';
    
    const url = `https://api.opensea.io/api/v2/chain/ethereum/contract/${address}/nfts/${tokenId}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': apiKey
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      logger.error('Error fetching NFT data from OpenSea:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      return NextResponse.json(
        { error: `Failed to fetch NFT data: ${response.statusText}` },
        { status: response.status }
      );
    }
    
    const nftData = await response.json();
    
    // Fetch collection data
    const collectionUrl = `https://api.opensea.io/api/v2/collections/art-blocks`;
    
    const collectionResponse = await fetch(collectionUrl, {
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': apiKey
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!collectionResponse.ok) {
      logger.error('Error fetching collection data from OpenSea:', {
        status: collectionResponse.status,
        statusText: collectionResponse.statusText
      });
      
      // Still return NFT data even if collection fetch fails
      return NextResponse.json(
        { nft: nftData.nft, collection: null },
        { 
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
          }
        }
      );
    }
    
    const collectionData = await collectionResponse.json();
    
    return NextResponse.json(
      { 
        nft: nftData.nft, 
        collection: collectionData.collection,
        orders: []
      },
      { 
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
        }
      }
    );
  } catch (error) {
    logger.error('Error fetching NFT data:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch NFT data from OpenSea API' },
      { status: 500 }
    );
  }
} 