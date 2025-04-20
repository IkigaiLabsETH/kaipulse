'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI, OpenSeaEvent } from '@/services/opensea/api.new';
import { logger } from '@/lib/logger';

interface CollectionActivityProps {
  collectionSlug: string;
}

const api = new OpenSeaAPI({
  apiKey: process.env.NEXT_PUBLIC_OPENSEA_API_KEY
});

interface EventWithPrice extends OpenSeaEvent {
  price?: {
    current: {
      value: string;
    };
  };
  type?: string;
  transaction?: {
    transaction_hash: string;
  };
}

export function CollectionActivity({ collectionSlug }: CollectionActivityProps) {
  const [events, setEvents] = useState<EventWithPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchActivity() {
      try {
        setIsLoading(true);
        setError(null);

        let contractAddress: string;
        const isContractAddress = /^0x[a-fA-F0-9]{40}$/i.test(collectionSlug);

        if (isContractAddress) {
          contractAddress = collectionSlug;
          logger.info('Using contract address directly:', { contractAddress });
        } else {
          // Get the collection to get the contract address
          logger.info('Getting collection details for slug:', { collectionSlug });
          const collection = await api.getCollection(collectionSlug);
          contractAddress = collection.primary_asset_contracts[0];
          
          if (!contractAddress) {
            throw new Error('No contract address found for collection');
          }
          
          logger.info('Got contract address:', { contractAddress });
        }

        logger.info('Fetching collection activity:', { 
          collectionSlug,
          contractAddress 
        });

        // Get events directly
        const response = await api.getEvents({
          chain: 'ethereum',
          asset_contract_address: contractAddress,
          event_type: 'sale',
          limit: 20
        });

        const events = response.data.map(event => ({
          ...event,
          type: event.event_type,
          price: event.total_price ? {
            current: {
              value: event.total_price
            }
          } : undefined,
          transaction: event.transaction_hash ? {
            transaction_hash: event.transaction_hash
          } : undefined
        }));

        logger.info('Activity fetched:', {
          count: events.length
        });

        setEvents(events);
      } catch (error) {
        logger.error('Error fetching activity:', error);
        setError('Failed to load activity');
      } finally {
        setIsLoading(false);
      }
    }

    if (collectionSlug) {
      fetchActivity();
    }
  }, [collectionSlug]);

  if (isLoading) {
    return (
      <div className="rounded-lg bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
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
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="rounded-lg bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <p className="text-gray-400">No recent activity</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white/5 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.transaction?.transaction_hash || event.created_date}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div>
              <p className="text-white">
                {event.type === 'sale' ? 'Sale' : event.type}
              </p>
              <p className="text-sm text-white/60">
                {new Date(event.created_date).toLocaleDateString()}
              </p>
            </div>
            {event.price?.current?.value && (
              <div className="text-right">
                <p className="text-white font-mono">
                  {Number(event.price.current.value).toFixed(3)} ETH
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 