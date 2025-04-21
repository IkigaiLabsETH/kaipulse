import { z } from 'zod';
import { Chain } from '@/types/web3';

// API paths
export const API_PATHS = {
  nft: 'nft',
  collection: 'collection',
  collections: 'collections',
  events: 'events',
  bestListing: 'bestListing',
  bestOffer: 'bestOffer',
  relatedNFTs: 'relatedNFTs'
} as const;

// Error messages
export const ERROR_MESSAGES = {
  PATH_REQUIRED: 'Path parameter is required',
  INVALID_PATH: 'Invalid path parameter',
  INVALID_PARAMS: 'Invalid parameters',
  COLLECTION_REQUIRED: 'Collection parameter is required',
  API_KEY_ERROR: 'OpenSea API key error',
  UNEXPECTED: 'An unexpected error occurred'
};

// Cache configuration
export const CACHE_TIMES = {
  [API_PATHS.collection]: 3600,
  [API_PATHS.collections]: 3600,
  [API_PATHS.nft]: 1800,
  [API_PATHS.events]: 300
};

// Response headers
export const RESPONSE_HEADERS = {
  'Cache-Control': 'public, s-maxage=3600'
};

// Event types
export const EVENT_TYPES = [
  'sale',
  'transfer',
  'mint',
  'offer',
  'listing',
  'cancel',
  'approve'
] as const;

export type EventType = typeof EVENT_TYPES[number];

// Base query parameters
export const baseQuerySchema = z.object({
  path: z.enum([
    API_PATHS.nft,
    API_PATHS.collection,
    API_PATHS.collections,
    API_PATHS.events,
    API_PATHS.bestListing,
    API_PATHS.bestOffer,
    API_PATHS.relatedNFTs
  ])
});

// Collection query parameters
export const collectionQuerySchema = baseQuerySchema.extend({
  collection: z.string(),
  limit: z.string().optional()
});

// Collections query parameters
export const collectionsQuerySchema = baseQuerySchema.extend({
  slugs: z.string()
});

// NFT query parameters
export const nftQuerySchema = baseQuerySchema.extend({
  contract: z.string(),
  tokenId: z.string()
});

// Events query parameters
export const eventsQuerySchema = baseQuerySchema.extend({
  collection: z.string().optional(),
  token_ids: z.string().optional(),
  event_type: z.enum(EVENT_TYPES).optional()
});

export type ApiPath = keyof typeof API_PATHS;

// Rate limiting configuration
export const RATE_LIMIT = {
  MAX_REQUESTS: 50, // Maximum requests per window
  WINDOW_MS: 60 * 1000, // 1 minute window
  COOLDOWN_MS: 60 * 1000, // 1 minute cooldown
} as const; 