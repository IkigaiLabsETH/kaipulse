'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaNFT, OpenSeaCollection, OpenSeaCollectionStats } from '@/services/opensea/types';
import { NFTCard } from '@/components/nft/NFTCard';
import { logger } from '@/lib/logger';
import { Loader } from '@/components/ui/loader';
import { formatEthPrice } from '@/lib/format';

interface CollectionGridProps {
  collectionSlug: string;
}

// Define an extended collection type that includes stats
interface ExtendedCollection extends OpenSeaCollection {
  stats?: OpenSeaCollectionStats;
}

export function CollectionGrid({ collectionSlug }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [collection, setCollection] = useState<ExtendedCollection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchCollectionData() {
      try {
        if (!collectionSlug) return;
        
        setIsLoading(true);
        setError(null);

        // Fetch collection data using server API route
        const collectionResponse = await fetch(`/api/collections/${collectionSlug}`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!collectionResponse.ok) {
          const errorData = await collectionResponse.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to fetch collection: ${collectionResponse.statusText}`);
        }

        const collectionData = await collectionResponse.json();
        
        if (!isMounted) return;

        if (!collectionData.collection) {
          throw new Error('Collection data is missing');
        }

        setCollection(collectionData.collection);

        // Fetch NFTs using server API route
        const nftsResponse = await fetch(`/api/collections/${collectionSlug}/nfts?limit=30`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!nftsResponse.ok) {
          const errorData = await nftsResponse.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to fetch NFTs: ${nftsResponse.statusText}`);
        }

        const nftsData = await nftsResponse.json();
        
        if (!isMounted) return;

        if (!nftsData.nfts || !Array.isArray(nftsData.nfts)) {
          throw new Error('Invalid NFT data received');
        }

        logger.info('NFTs fetched:', {
          count: nftsData.nfts.length,
          hasMore: !!nftsData.next,
          nextCursor: nftsData.next
        });

        setNfts(nftsData.nfts);
        setHasMore(!!nftsData.next);
        setNextCursor(nftsData.next || undefined);
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (!isMounted) return;

        const errorMessage = error instanceof Error ? error.message : 'Failed to load collection data';
        setError(errorMessage);
        logger.error('Collection grid error:', { error: errorMessage });
        
        // Implement retry logic for specific errors
        if (retryCount < MAX_RETRIES && 
            (errorMessage.includes('Failed to fetch') || 
             errorMessage.includes('Internal Server Error'))) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            if (isMounted) {
              fetchCollectionData();
            }
          }, Math.min(1000 * Math.pow(2, retryCount), 8000)); // Exponential backoff
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchCollectionData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [collectionSlug, retryCount]);

  const loadMore = async () => {
    if (!nextCursor || !hasMore || isLoadingMore) return;

    try {
      setIsLoadingMore(true);
      logger.info('Loading more NFTs:', { collectionSlug, nextCursor });

      // Fetch more NFTs using server API route with pagination
      const response = await fetch(`/api/collections/${collectionSlug}/nfts?limit=30&next=${nextCursor}`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to fetch more NFTs: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.nfts && Array.isArray(data.nfts)) {
        setNfts(prev => [...prev, ...data.nfts]);
        setHasMore(!!data.next);
        setNextCursor(data.next || undefined);
      } else {
        throw new Error('Invalid NFT data received when loading more');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error loading more NFTs';
      logger.error('Error loading more NFTs:', { error: errorMessage });
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 space-y-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-white/5 rounded w-1/3" />
          <div className="h-4 bg-white/5 rounded w-2/3" />
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded p-4 flex-1">
                <div className="h-6 bg-white/10 rounded w-1/2 mb-2" />
                <div className="h-8 bg-white/10 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[1px] bg-white/5">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="bg-black">
              <div className="aspect-square bg-white/5" />
              <div className="px-2 py-3">
                <div className="h-4 bg-white/5 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4">
        <div className="py-12 text-center">
          <p className="text-white/60">{error}</p>
          <button 
            onClick={() => setRetryCount(prev => prev + 1)} 
            className="mt-4 px-4 py-2 bg-white/5 rounded hover:bg-white/10"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!nfts.length) {
    return (
      <div className="container mx-auto px-4">
        <div className="py-12 text-center">
          <p className="text-white/60">No NFTs found in this collection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 space-y-8">
      {collection && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{collection.name}</h1>
            <p className="text-white/60">{collection.description}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded p-4">
              <div className="text-sm text-white/60">Floor Price</div>
              <div className="text-xl">
                Ξ {formatEthPrice(collection.stats?.floor_price || 0)}
              </div>
            </div>
            <div className="bg-white/5 rounded p-4">
              <div className="text-sm text-white/60">Total Volume</div>
              <div className="text-xl">
                Ξ {formatEthPrice(collection.stats?.total_volume || 0)}
              </div>
            </div>
            <div className="bg-white/5 rounded p-4">
              <div className="text-sm text-white/60">Items</div>
              <div className="text-xl">{collection.stats?.total_supply || 0}</div>
            </div>
            <div className="bg-white/5 rounded p-4">
              <div className="text-sm text-white/60">Owners</div>
              <div className="text-xl">{collection.stats?.num_owners || 0}</div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[1px] bg-white/5">
        {nfts.map((nft) => (
          <NFTCard
            key={`${nft.contract}-${nft.identifier}`}
            nft={nft}
            href={`/collections/${collectionSlug}/${nft.identifier}`}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center py-8">
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="px-4 py-2 bg-white/5 text-white/80 text-sm rounded hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoadingMore ? (
              <>
                <Loader className="w-4 h-4" />
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}
    </div>
  );
} 