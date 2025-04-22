import { NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { logger } from '@/lib/logger';

// Mock data for Art Blocks NFT #163000597 (Chromie Squiggle)
const MOCK_NFT_DATA = {
  nft: {
    identifier: "163000597",
    collection: "art-blocks",
    contract: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    contract_address: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
    token_id: "163000597",
    chain: "ethereum",
    token_standard: "erc721",
    name: "Chromie Squiggle #7583",
    description: "Chromie Squiggle by Snowfro is the genesis Art Blocks project. The squiggle is dynamic, alive, and unique. Each output has its own personality and visual aesthetic, but all are undeniably part of the same family.",
    image_url: "https://i.seadn.io/gae/MfTH7kjn7Z2B0-jc3NvTErkiQKm19QWJ7hE9rSIigXVEMZxHEz-vRpOZJJDCjZBVQRxDY-gF7ILQ4fT3KYuN93SWx11OhGCMxFPXRQ?auto=format&dpr=1&w=1000",
    metadata_url: "https://api.artblocks.io/token/7583",
    created_at: "2021-03-01T05:07:35.000Z",
    updated_at: "2023-06-18T00:36:26.000Z",
    is_disabled: false,
    is_nsfw: false,
    animation_url: null,
    external_url: "https://artblocks.io/collections/curated/projects/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/7583",
    background_color: null,
    traits: [
      { trait_type: "Spectrum", value: "Multi-Rainbow", trait_count: 578 },
      { trait_type: "Segments", value: "17", trait_count: 1226 },
      { trait_type: "Density", value: "Dense", trait_count: 3297 }
    ]
  },
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
  },
  orders: []
};

export async function GET() {
  try {
    // Check if we have an API key
    const apiKey = env.OPENSEA_API_KEY;
    
    // Log this special mock NFT request
    logger.info('Serving mock NFT data for Art Blocks #163000597', {
      apiKeyConfigured: !!apiKey,
      environment: process.env.NODE_ENV
    });

    // Always return mock data for this specific NFT
    return NextResponse.json(MOCK_NFT_DATA, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  } catch (error) {
    logger.error('Error serving mock NFT data:', error);
    
    return NextResponse.json(MOCK_NFT_DATA, { 
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
  }
} 