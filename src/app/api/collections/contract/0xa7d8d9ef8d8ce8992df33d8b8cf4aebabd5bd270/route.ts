import { NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { logger } from '@/lib/logger';

export async function GET() {
  try {
    const apiKey = env.OPENSEA_API_KEY;

    if (!apiKey) {
      logger.warn('OpenSea API key not configured when trying to fetch collection data');
      return NextResponse.json(
        { error: 'OpenSea API key is not configured. Please set up your API key in the environment variables.' },
        { status: 503 }
      );
    }

    // Fetch real data from OpenSea for the Art Blocks collection
    const contractAddress = '0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270';
    
    // First try to get by contract address directly
    const url = `https://api.opensea.io/api/v2/chain/ethereum/contract/${contractAddress}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': apiKey
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      logger.error('Error fetching collection data from OpenSea by contract:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      // Try to fetch by slug as a fallback (if we know it's "art-blocks")
      const slugUrl = `https://api.opensea.io/api/v2/collections/art-blocks`;
      
      const slugResponse = await fetch(slugUrl, {
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': apiKey
        },
        next: { revalidate: 3600 }
      });
      
      if (!slugResponse.ok) {
        logger.error('Error fetching collection data from OpenSea by slug:', {
          status: slugResponse.status,
          statusText: slugResponse.statusText
        });
        
        return NextResponse.json(
          { error: `Failed to fetch collection data: ${response.statusText}` },
          { status: response.status }
        );
      }
      
      const slugData = await slugResponse.json();
      return NextResponse.json({ collection: slugData.collection }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
        }
      });
    }
    
    const data = await response.json();
    
    return NextResponse.json({ collection: data.collection }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  } catch (error) {
    logger.error('Error fetching collection data:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch collection data from OpenSea API' },
      { status: 500 }
    );
  }
} 