import { NextResponse, NextRequest } from 'next/server';
import { CURATED_COLLECTIONS } from '@/config/collections';
import { openSeaService } from '@/services/opensea';
import { rateLimit } from '@/lib/rate-limit';
import type { Listing } from '@/services/opensea/types';

// TODO: Import curated collections config
// TODO: Import OpenSea service utilities for fetching floor NFTs
// TODO: Import caching utilities

const BATCH_SIZE = 2;
const BATCH_DELAY_MS = 500;
const RATE_LIMIT_CONFIG = { maxRequests: 10, windowMs: 60 * 1000 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Dedicated in-memory cache for floor listings
const floorListingCache: Record<string, { listing: Listing; timestamp: number }> = {};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCachedFloorListing(contractAddress: string): Listing | null {
  const entry = floorListingCache[contractAddress];
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.listing;
  }
  return null;
}

function setCachedFloorListing(contractAddress: string, listing: Listing) {
  floorListingCache[contractAddress] = {
    listing,
    timestamp: Date.now(),
  };
}

type ErrorWithResponseBody = Error & { responseBody?: unknown };
function hasResponseBody(error: unknown): error is ErrorWithResponseBody {
  return typeof error === 'object' && error !== null && 'responseBody' in error;
}

// Utility to normalize a floor listing for frontend consumption
function normalizeFloorListing(params: {
  collection: typeof CURATED_COLLECTIONS[number];
  floorListing: Listing | null;
  fromCache: boolean;
  error?: string;
  errorStack?: string;
  errorResponse?: unknown;
}) {
  const { collection, floorListing, fromCache, error, errorStack, errorResponse } = params;
  if (!floorListing) {
    return {
      collectionName: collection.name,
      collectionAddress: collection.address,
      collectionImage: collection.image_url,
      nftName: null,
      nftImage: null,
      priceEth: null,
      priceUsd: null,
      listingUrl: null,
      fromCache,
      error: error || null,
      errorStack,
      errorResponse,
    };
  }
  // Extract price in ETH (current_price is a string in wei)
  const priceEth = floorListing.current_price
    ? Number(floorListing.current_price) / 1e18
    : null;
  // Try to get USD price if available (from payment token or other fields)
  // This is a placeholder; you may want to enhance this with real token info
  const priceUsd = null;
  // OpenSea listing URL (if available)
  const listingUrl = floorListing.nft && floorListing.nft.contract && floorListing.nft.identifier
    ? `https://opensea.io/assets/ethereum/${floorListing.nft.contract}/${floorListing.nft.identifier}`
    : null;
  return {
    collectionName: collection.name,
    collectionAddress: collection.address,
    collectionImage: collection.image_url,
    nftName: floorListing.nft?.name || null,
    nftImage: floorListing.nft?.image_url || null,
    priceEth,
    priceUsd,
    listingUrl,
    fromCache,
    error: error || null,
    errorStack,
    errorResponse,
  };
}

export async function GET(request: NextRequest) {
  // Endpoint-level rate limiting
  const rate = await rateLimit(request, RATE_LIMIT_CONFIG);
  if (!rate.success) {
    return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
  }

  const collections = CURATED_COLLECTIONS;
  const results: Array<ReturnType<typeof normalizeFloorListing>> = [];
  const toFetch: typeof CURATED_COLLECTIONS = [];

  // Check cache first
  for (const collection of collections) {
    const cached = getCachedFloorListing(collection.address);
    if (cached) {
      results.push(normalizeFloorListing({ collection, floorListing: cached, fromCache: true }));
    } else {
      toFetch.push(collection);
    }
  }

  // Batch fetch uncached collections
  for (let i = 0; i < toFetch.length; i += BATCH_SIZE) {
    const batch = toFetch.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(async (collection) => {
        try {
          const response = await openSeaService.orders.getListings({
            asset_contract_address: collection.address,
            order_by: 'eth_price',
            order_direction: 'asc',
            limit: 1,
          });
          const floorListing = response.orders[0] || null;
          if (floorListing) {
            setCachedFloorListing(collection.address, floorListing);
          }
          return normalizeFloorListing({ collection, floorListing, fromCache: false });
        } catch (error) {
          // Detailed error logging
          // eslint-disable-next-line no-console
          console.error('OpenSea API error for collection', collection.address, error);
          return normalizeFloorListing({
            collection,
            floorListing: null,
            fromCache: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            errorStack: error instanceof Error && error.stack ? error.stack : undefined,
            errorResponse: hasResponseBody(error) ? error.responseBody : undefined,
          });
        }
      })
    );
    results.push(...batchResults);
    if (i + BATCH_SIZE < toFetch.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  return NextResponse.json({
    message: 'Floor NFTs for curated collections',
    floorNFTs: results,
  });
} 