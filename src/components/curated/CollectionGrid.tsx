'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI, OpenSeaNFT, OpenSeaCollection } from '@/services/opensea/api';
import { NFTCard } from '@/components/nft/NFTCard';
import { logger } from '@/lib/logger';
import { Loader } from '@/components/ui/loader';
import { formatEthPrice } from '@/lib/format';

interface CollectionGridProps {
  collectionSlug: string;
}

// Initialize with environment variable
const api = new OpenSeaAPI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY 
});

export function CollectionGrid({ collectionSlug }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [collection, setCollection] = useState<OpenSeaCollection | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    async function fetchCollectionData() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch collection data first
        const collectionData = await api.getCollection(collectionSlug);
        setCollection(collectionData);

        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(collectionSlug);
        
        logger.info('Fetching NFTs:', { 
          collectionSlug,
          isContractAddress 
        });

        const response = await api.getNFTs({
          ...(isContractAddress 
            ? { contract: collectionSlug, chain: 'ethereum' }
            : { collection: collectionSlug }
          ),
          limit: 30
        });

        logger.info('NFTs fetched:', {
          count: response.data?.length || 0,
          hasMore: !!response.next,
          nextCursor: response.next
        });

        setNfts(response.data || []);
        setHasMore(!!response.next);
        setNextCursor(response.next || undefined);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load collection data';
        setError(errorMessage);
        logger.error('Collection grid error:', { error: errorMessage });
      } finally {
        setIsLoading(false);
      }
    }

    if (collectionSlug) {
      fetchCollectionData();
    }
  }, [collectionSlug]);

  const loadMore = async () => {
    if (!nextCursor || !hasMore || isLoadingMore) return;

    try {
      setIsLoadingMore(true);
      logger.info('Loading more NFTs:', { collectionSlug, nextCursor });

      const collection = await api.getCollection(collectionSlug);
      const ethereumContract = collection.contracts.find(c => c.chain === 'ethereum');
      if (!ethereumContract) {
        throw new Error('No Ethereum contract found for collection');
      }
      const contractAddress = ethereumContract.address;

      const response = await api.getNFTsByContract({
        chain: 'ethereum',
        address: contractAddress,
        limit: 30,
        next: nextCursor
      });

      if (response.data) {
        setNfts(prev => [...prev, ...response.data]);
        setHasMore(!!response.next);
        setNextCursor(response.next || undefined);
      }
    } catch (error) {
      logger.error('Error loading more NFTs:', error);
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
            onClick={() => window.location.reload()} 
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