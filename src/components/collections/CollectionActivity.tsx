'use client';

import { useState, useEffect } from 'react';
import { OpenSeaAPI } from '@/services/opensea/api';
import { logger } from '@/lib/logger';
import type { OpenSeaEvent } from '@/services/opensea/types';

interface CollectionActivityProps {
  collectionSlug: string;
}

const api = new OpenSeaAPI();

export function CollectionActivity({ collectionSlug }: CollectionActivityProps) {
  const [events, setEvents] = useState<OpenSeaEvent[]>([]);
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
          contractAddress = collection.primary_contract;
          
          if (!contractAddress) {
            throw new Error('No contract address found for collection');
          }
          
          logger.info('Got contract address:', { contractAddress });
        }

        logger.info('Fetching collection activity:', { 
          collectionSlug,
          contractAddress 
        });

        // First try to get events by contract
        const response = await api.getNFTsByContract({
          chain: 'ethereum',
          address: contractAddress,
          limit: 20,
          order_by: 'sale_date',
          order_direction: 'desc'
        });

        // Then get events for each NFT
        const allEvents = await Promise.all(
          response.results.map(async (nft) => {
            try {
              const events = await api.getNFTEvents(
                contractAddress,
                nft.identifier,
                {
                  limit: 1,
                  event_type: 'sale'
                }
              );
              return events.results;
            } catch (error) {
              logger.warn('Failed to fetch events for NFT:', {
                contractAddress,
                tokenId: nft.identifier,
                error
              });
              return [];
            }
          })
        );

        // Flatten and sort events
        const flatEvents = allEvents
          .flat()
          .sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime())
          .slice(0, 20);

        logger.info('Activity fetched:', {
          count: flatEvents.length
        });

        setEvents(flatEvents);
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