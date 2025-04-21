'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI } from '@/services/opensea';
import type { OpenSeaOffer, OpenSeaAccount, OpenSeaEventDetails } from '@/services/opensea/types';
import { logger } from '@/lib/logger';

interface CollectionOffersProps {
  collectionSlug: string;
}

const api = new OpenSeaAPI(process.env.NEXT_PUBLIC_OPENSEA_API_KEY!);

export function CollectionOffers({ collectionSlug }: CollectionOffersProps) {
  const [offers, setOffers] = useState<OpenSeaOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOffers() {
      try {
        setIsLoading(true);
        setError(null);

        // Check if the slug is a contract address
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(collectionSlug);
        let contractAddress: string;

        if (isContractAddress) {
          contractAddress = collectionSlug.toLowerCase();
        } else {
          // Get the collection to get the contract address
          logger.info('Getting collection details for slug:', { collectionSlug });
          const collection = await api.getCollection(collectionSlug);
          contractAddress = collection.contract_address;
        }
        
        logger.info('Fetching collection offers:', { 
          collectionSlug,
          contractAddress 
        });

        // Get offers for the collection
        const response = await api.events.getEventsByCollection({
          collection_slug: collectionSlug,
          event_type: 'offer',
          limit: 20
        });

        // Transform events into offers
        const validOffers = response.events
          .filter((event: OpenSeaEventDetails) => event.event_type === 'offer')
          .map((event: OpenSeaEventDetails): OpenSeaOffer => {
            const maker: OpenSeaAccount = {
              address: event.from_account.address,
              profile_img_url: event.from_account.profile_img_url,
              user: event.from_account.user
            };
            
            const taker: OpenSeaAccount | null = event.to_account ? {
              address: event.to_account.address,
              profile_img_url: event.to_account.profile_img_url,
              user: event.to_account.user
            } : null;

            return {
              created_date: event.created_date,
              closing_date: null,
              listing_time: Math.floor(Date.parse(event.created_date) / 1000),
              expiration_time: Math.floor(Date.now() / 1000) + 86400, // 24 hours from now
              order_hash: event.transaction?.hash || '',
              protocol_data: {
                parameters: {
                  offerer: event.from_account.address,
                  offer: [{
                    itemType: 1, // ERC721
                    token: contractAddress,
                    identifierOrCriteria: '0',
                    startAmount: '1',
                    endAmount: '1'
                  }],
                  consideration: [{
                    itemType: 0, // Native token (ETH)
                    token: '0x0000000000000000000000000000000000000000',
                    identifierOrCriteria: '0',
                    startAmount: event.payment?.quantity || '0',
                    endAmount: event.payment?.quantity || '0',
                    recipient: event.from_account.address
                  }],
                  startTime: event.created_date,
                  endTime: new Date(Date.now() + 86400000).toISOString(), // 24 hours from now
                  orderType: 0,
                  zone: '0x0000000000000000000000000000000000000000',
                  zoneHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
                  salt: '0',
                  conduitKey: '0x0000000000000000000000000000000000000000000000000000000000000000',
                  totalOriginalConsiderationItems: 1,
                  counter: 0
                },
                signature: '0x'
              },
              protocol_address: '0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC', // Seaport contract
              current_price: event.payment?.quantity || '0',
              maker,
              taker,
              maker_fees: [],
              taker_fees: [],
              side: 'bid',
              order_type: 'basic',
              cancelled: false,
              finalized: false,
              marked_invalid: false,
              client_signature: '0x',
              relay_id: `${event.transaction?.hash || ''}-${event.created_date}`,
              criteria_proof: null
            };
          });

        logger.info('Offers fetched:', {
          count: validOffers.length
        });

        setOffers(validOffers);
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