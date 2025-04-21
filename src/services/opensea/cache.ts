import { Collection, NFT } from '@/types/opensea';

/**
 * Shared cache implementation for OpenSea API services
 * This helps reduce duplicate API calls and improve performance
 */

// Cache for contract address to collection slug mappings
export const contractToCollectionCache: Record<string, string> = {};

// Cache for collection data (slug to collection info)
export const collectionDataCache: Record<string, any> = {};

// Cache TTL in milliseconds (5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

// Cache timestamps to implement expiration
const cacheTimestamps: Record<string, number> = {};

/**
 * Get a cached value with TTL check
 */
export function getCachedValue<T>(cache: Record<string, T>, key: string): T | undefined {
  // Check if cached and not expired
  if (cache[key] && cacheTimestamps[key] && (Date.now() - cacheTimestamps[key] < CACHE_TTL)) {
    return cache[key];
  }
  
  return undefined;
}

/**
 * Set a value in cache with timestamp
 */
export function setCachedValue<T>(cache: Record<string, T>, key: string, value: T): void {
  cache[key] = value;
  cacheTimestamps[key] = Date.now();
}

/**
 * Get a contract to collection slug mapping
 */
export function getContractToCollectionMapping(chain: string | undefined, contractAddress: string | undefined): string | undefined {
  if (!chain || !contractAddress) return undefined;
  
  const normalizedContract = contractAddress.toLowerCase();
  const cacheKey = `${chain}:${normalizedContract}`;
  return getCachedValue(contractToCollectionCache, cacheKey);
}

/**
 * Set a contract to collection slug mapping
 */
export function setContractToCollectionMapping(chain: string | undefined, contractAddress: string | undefined, collectionSlug: string): void {
  if (!chain || !contractAddress) return;
  
  const normalizedContract = contractAddress.toLowerCase();
  const cacheKey = `${chain}:${normalizedContract}`;
  setCachedValue(contractToCollectionCache, cacheKey, collectionSlug);
}

/**
 * Clear expired cache entries
 */
export function clearExpiredCache(): void {
  const now = Date.now();
  
  Object.keys(cacheTimestamps).forEach(key => {
    if (now - cacheTimestamps[key] >= CACHE_TTL) {
      delete cacheTimestamps[key];
      
      // Remove from all caches
      delete contractToCollectionCache[key];
      delete collectionDataCache[key];
    }
  });
}

// Run cache cleanup every 10 minutes
setInterval(clearExpiredCache, 10 * 60 * 1000);

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export class OpenSeaCache {
  private collections: Map<string, CacheEntry<Collection>> = new Map();
  private nfts: Map<string, CacheEntry<NFT>> = new Map();

  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > CACHE_TTL;
  }

  // Collection cache methods
  getCollection(slug: string): Collection | null {
    const entry = this.collections.get(slug);
    if (!entry || this.isExpired(entry.timestamp)) {
      return null;
    }
    return entry.data;
  }

  setCollection(slug: string, collection: Collection): void {
    this.collections.set(slug, {
      data: collection,
      timestamp: Date.now()
    });
  }

  // NFT cache methods
  getNFT(chain: string, address: string, tokenId: string): NFT | null {
    const key = `${chain}:${address}:${tokenId}`;
    const entry = this.nfts.get(key);
    if (!entry || this.isExpired(entry.timestamp)) {
      return null;
    }
    return entry.data;
  }

  setNFT(chain: string, address: string, tokenId: string, nft: NFT): void {
    const key = `${chain}:${address}:${tokenId}`;
    this.nfts.set(key, {
      data: nft,
      timestamp: Date.now()
    });
  }

  // Clear expired entries
  clearExpired(): void {
    const now = Date.now();

    // Clear expired collections
    Array.from(this.collections.entries()).forEach(([key, entry]) => {
      if (this.isExpired(entry.timestamp)) {
        this.collections.delete(key);
      }
    });

    // Clear expired NFTs
    Array.from(this.nfts.entries()).forEach(([key, entry]) => {
      if (this.isExpired(entry.timestamp)) {
        this.nfts.delete(key);
      }
    });
  }

  // Clear all cache
  clear(): void {
    this.collections.clear();
    this.nfts.clear();
  }
} 