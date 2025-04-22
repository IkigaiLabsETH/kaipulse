import { NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { logger } from '@/lib/logger';

// Mock data for Art Blocks collection
const MOCK_COLLECTION_DATA = {
  collection: {
    slug: "art-blocks",
    name: "Art Blocks",
    description: "Art Blocks is a generative art platform on the Ethereum blockchain. Each Art Blocks project is a unique algorithm created by an artist that generates outputs based on a random seed. When you mint an Art Blocks NFT, the algorithm executes and generates your unique piece of art that lives on-chain.",
    image_url: "https://i.seadn.io/gae/lgoUf4YEzgwjAdJXe-7_IXZRfmB0watKKQhI69ifFQjBwcrR0NaQQrtEi2YFwVJ6trCUfRRLwnjW7fZaE5jjJZQYF0E_JnCofEw_?auto=format&dpr=1&w=256",
    banner_image_url: "https://i.seadn.io/gae/pkJG9E1XkZG65MKwJuXHDofkPSwXy_IYNrV6hMTFw5B7QkkONYoBwmBCqctvLZ_OMFyky_n2ahau7GfoLdZHkhFrszTu1bKNiIVG?auto=format&dpr=1&w=2048",
    safelist_status: "verified",
    is_nsfw: false,
    category: "art",
    asset_contract: {
      address: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
      name: "Art Blocks",
      schema_name: "ERC721"
    },
    stats: {
      total_supply: 10000,
      num_owners: 5623,
      average_price: 3.5,
      total_volume: 72450.21,
      floor_price: 1.8,
      market_cap: 18000.0
    }
  }
};

export async function GET() {
  try {
    // Log this special mock contract collection request
    logger.info('Serving mock contract collection data for Art Blocks', {
      apiKeyConfigured: !!env.OPENSEA_API_KEY,
      environment: process.env.NODE_ENV
    });

    // Always return mock data for this specific collection
    return NextResponse.json(MOCK_COLLECTION_DATA, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  } catch (error) {
    logger.error('Error serving mock contract collection data:', error);
    
    return NextResponse.json(MOCK_COLLECTION_DATA, { 
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  }
} 