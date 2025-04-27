import { NextResponse, NextRequest } from 'next/server';
import { CURATED_COLLECTIONS } from '@/config/collections';
import { openSeaService } from '@/services/opensea';
import { rateLimit } from '@/lib/rate-limit';

// TODO: Import curated collections config
// TODO: Import OpenSea service utilities for fetching floor NFTs
// TODO: Import caching utilities

const BATCH_SIZE = 2;
const BATCH_DELAY_MS = 500;
const RATE_LIMIT_CONFIG = { maxRequests: 10, windowMs: 60 * 1000 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Dedicated in-memory cache for floor listings
const floorListingCache: Record<string, { listing: unknown; timestamp: number }> = {};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCachedFloorListing(contractAddress: string): unknown | null {
  const entry = floorListingCache[contractAddress];
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.listing;
  }
  return null;
}

function setCachedFloorListing(contractAddress: string, listing: unknown) {
  floorListingCache[contractAddress] = {
    listing,
    timestamp: Date.now(),
  };
}

type ErrorWithResponseBody = Error & { responseBody?: unknown };
function hasResponseBody(error: unknown): error is ErrorWithResponseBody {
  return typeof error === 'object' && error !== null && 'responseBody' in error;
}

// Utility to normalize a floor listing for frontend consumption (v2)
function normalizeFloorListingV2(params: {
  collection: typeof CURATED_COLLECTIONS[number];
  floorListing: unknown | null;
  fromCache: boolean;
  error?: string;
  errorStack?: string;
  errorResponse?: unknown;
}) {
  const { collection, floorListing, fromCache, error, errorStack, errorResponse } = params;
  if (!floorListing || typeof floorListing !== 'object' || floorListing === null) {
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
  // Type guard for v2 listing
  const hasPrice = (obj: unknown): obj is { price: { current: { value: string } } } =>
    typeof obj === 'object' && obj !== null &&
    'price' in obj &&
    typeof (obj as { price?: unknown }).price === 'object' &&
    (obj as { price: { current?: unknown } }).price.current !== undefined &&
    (obj as { price: { current?: unknown } }).price.current !== null &&
    typeof (obj as { price: { current: { value?: unknown } } }).price.current.value === 'string';

  const hasNFT = (obj: unknown): obj is { nft: { name?: string; image_url?: string; contract?: string; identifier?: string } } =>
    typeof obj === 'object' && obj !== null &&
    'nft' in obj && typeof (obj as { nft?: unknown }).nft === 'object';

  const priceEth = hasPrice(floorListing) ? Number(floorListing.price.current.value) : null;
  const priceUsd = null;
  const nft = hasNFT(floorListing) ? floorListing.nft : {};
  const listingUrl = nft.contract && nft.identifier
    ? `https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`
    : null;
  return {
    collectionName: collection.name,
    collectionAddress: collection.address,
    collectionImage: collection.image_url,
    nftName: nft.name || null,
    nftImage: nft.image_url || null,
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
  const results: Array<ReturnType<typeof normalizeFloorListingV2>> = [];
  const toFetch: typeof CURATED_COLLECTIONS = [];

  // Check cache first
  for (const collection of collections) {
    const cached = getCachedFloorListing(collection.address);
    if (cached) {
      results.push(normalizeFloorListingV2({ collection, floorListing: cached, fromCache: true }));
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
            limit: 1,
          });
          // v2: response.listings is the array
          const floorListing = response.listings?.[0] || null;
          if (floorListing) {
            setCachedFloorListing(collection.address, floorListing);
          }
          return normalizeFloorListingV2({ collection, floorListing, fromCache: false });
        } catch (error) {
          // Detailed error logging
          // eslint-disable-next-line no-console
          console.error('OpenSea API error for collection', collection.address, error);
          return normalizeFloorListingV2({
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