'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
import { NFTCard } from '@/components/nft/NFTCard';
import { logger } from '@/lib/logger';
import type { OpenSeaNFT } from '@/services/opensea/types';
import type { OpenSeaCollectionTraits } from '@/services/opensea/types';

interface CollectionGridProps {
  collectionSlug: string;
  traits?: OpenSeaCollectionTraits;
}

const api = new OpenSeaAPI();

export function CollectionGrid({ collectionSlug, traits }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [actualSlug, setActualSlug] = useState<string | undefined>(undefined);
  const [selectedTraits, setSelectedTraits] = useState<Array<{
    trait_type: string;
    values: string[];
  }>>([]);

  useEffect(() => {
    async function fetchNFTs() {
      try {
        setIsLoading(true);
        setError(null);

        // Check if the slug is a contract address
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(collectionSlug);
        let slug = collectionSlug;
        let contractAddress: string | undefined;

        if (isContractAddress) {
          logger.info('Converting contract address to collection slug:', { collectionSlug });
          const collection = await api.getCollectionByContract(collectionSlug);
          slug = collection.collection;
          contractAddress = collectionSlug;
          setActualSlug(slug);
          logger.info('Converted to collection slug:', { slug });
        } else {
          // If it's a slug, get the collection first to get the contract address
          logger.info('Getting collection details for slug:', { collectionSlug });
          const collection = await api.getCollection(collectionSlug);
          contractAddress = collection.primary_contract;
          logger.info('Got contract address:', { contractAddress });
        }

        if (!contractAddress) {
          throw new Error('No contract address found for collection');
        }

        logger.info('Fetching NFTs by contract:', { contractAddress, selectedTraits });

        // Use getNFTsByContract with trait filters if selected
        const response = await api.getNFTsByContract({
          chain: 'ethereum',
          address: contractAddress,
          limit: 20,
          include_orders: true,
          order_by: 'sale_price',
          order_direction: 'desc',
          traits: selectedTraits.length > 0 ? selectedTraits : undefined
        });

        logger.info('NFTs fetched:', {
          count: response.results.length,
          hasMore: !!response.next,
          nextCursor: response.next
        });

        setNfts(response.results);
        setHasMore(!!response.next);
        setNextCursor(response.next || undefined);
      } catch (error) {
        logger.error('Error fetching NFTs:', error);
        setError('Failed to load NFTs');
      } finally {
        setIsLoading(false);
      }
    }

    if (collectionSlug) {
      fetchNFTs();
    }
  }, [collectionSlug, selectedTraits]);

  const loadMore = async () => {
    if (!nextCursor || !hasMore) return;

    try {
      const slug = actualSlug || collectionSlug;
      logger.info('Loading more NFTs:', { slug, nextCursor });

      const collection = await api.getCollection(slug);
      const contractAddress = collection.primary_contract;

      if (!contractAddress) {
        throw new Error('No contract address found for collection');
      }

      const response = await api.getNFTsByContract({
        chain: 'ethereum',
        address: contractAddress,
        limit: 20,
        next: nextCursor,
        include_orders: true,
        order_by: 'sale_price',
        order_direction: 'desc'
      });

      logger.info('Additional NFTs fetched:', {
        count: response.results.length,
        hasMore: !!response.next,
        nextCursor: response.next
      });

      setNfts(prev => [...prev, ...response.results]);
      setHasMore(!!response.next);
      setNextCursor(response.next || undefined);
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

  const displaySlug = actualSlug || collectionSlug;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <NFTCard
            key={`${nft.contract}-${nft.identifier}`}
            nft={nft}
            href={`/collections/${displaySlug}/${nft.identifier}`}
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