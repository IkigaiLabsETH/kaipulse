'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import type { OpenSeaOffer } from '@/services/opensea/types';

interface CollectionOffersProps {
  collectionSlug: string;
}

const api = new OpenSeaAPI();

export function CollectionOffers({ collectionSlug }: CollectionOffersProps) {
  const [offers, setOffers] = useState<OpenSeaOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actualSlug, setActualSlug] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchOffers() {
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
          // Get the collection to get the contract address
          logger.info('Getting collection details for slug:', { collectionSlug });
          const collection = await api.getCollection(collectionSlug);
          contractAddress = collection.primary_contract;
          slug = collection.collection;
          logger.info('Got contract address:', { contractAddress });
        }

        if (!contractAddress) {
          throw new Error('No contract address found for collection');
        }

        logger.info('Fetching collection offers:', { slug });

        // First try to get offers by contract
        const itemOffers = await api.getItemOffers({
          chain: 'ethereum',
          asset_contract_address: contractAddress,
          limit: 20,
          order_by: 'eth_price',
          order_direction: 'desc'
        });

        // Then get collection-wide offers
        const collectionOffers = await api.getCollectionOffers({
          collection_slug: slug,
          limit: 20,
          order_by: 'eth_price',
          order_direction: 'desc'
        });

        // Combine and sort offers
        const allOffers = [...itemOffers.results, ...collectionOffers.results]
          .sort((a, b) => Number(b.current_price) - Number(a.current_price))
          .slice(0, 20);

        logger.info('Offers fetched:', {
          count: allOffers.length,
          itemOffers: itemOffers.results.length,
          collectionOffers: collectionOffers.results.length
        });

        setOffers(allOffers);
      } catch (error) {
        logger.error('Error fetching offers:', error);
        setError('Failed to load offers');
      } finally {
        setIsLoading(false);
      }
    }

    if (collectionSlug) {
      fetchOffers();
    }
  }, [collectionSlug]);

  if (isLoading) {
    return (
      <div className="rounded-lg bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Collection Offers</h3>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white/10 h-12 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Collection Offers</h3>
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!offers.length) {
    return (
      <div className="rounded-lg bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Collection Offers</h3>
        <div className="text-center py-8">
          <p className="text-gray-400">No active offers</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white/5 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Collection Offers</h3>
      <div className="space-y-4">
        {offers.map((offer) => (
          <div
            key={offer.order_hash}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div>
              <p className="text-white">
                {offer.criteria?.trait ? (
                  <>Trait Offer: {offer.criteria.trait.type}</>
                ) : (
                  'Collection Offer'
                )}
              </p>
              <p className="text-sm text-white/60">
                {new Date(offer.created_date).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white font-mono">
                {Number(offer.current_price).toFixed(3)} ETH
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 