import { Collection, NFT } from '@/types/opensea';

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

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