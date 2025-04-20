'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI, OpenSeaNFT } from '@/services/opensea/api.new';
import { NFTCard } from '@/components/nft/NFTCard';
import { logger } from '@/lib/logger';

interface CollectionGridProps {
  collectionSlug: string;
}

// Initialize with environment variable
const api = new OpenSeaAPI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY 
});

export function CollectionGrid({ collectionSlug }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchNFTs() {
      try {
        setIsLoading(true);
        setError(null);

        // Check if the collectionSlug is a contract address
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(collectionSlug);
        
        logger.info('Fetching NFTs:', { 
          collectionSlug,
          isContractAddress 
        });

        // Use the new unified getNFTs method
        const response = await api.getNFTs({
          ...(isContractAddress 
            ? { contract: collectionSlug, chain: 'ethereum' }
            : { collection: collectionSlug }
          ),
          limit: 20
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
      fetchNFTs();
    }
  }, [collectionSlug]);

  const loadMore = async () => {
    if (!nextCursor || !hasMore) return;

    try {
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
        limit: 20,
        next: nextCursor
      });

      if (response.data) {
        setNfts(prev => [...prev, ...response.data]);
        setHasMore(!!response.next);
        setNextCursor(response.next || undefined);
      }
    } catch (error) {
      logger.error('Error loading more NFTs:', error);
      // Don't set error state here to keep showing existing NFTs
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white/5 rounded-lg aspect-square" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!nfts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No NFTs found in this collection</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <NFTCard
            key={`${nft.contract}-${nft.identifier}`}
            nft={nft}
            href={`/collections/${collectionSlug}/${nft.identifier}`}
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
} 