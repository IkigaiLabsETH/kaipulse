'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaEventDetails } from '@/services/opensea/types';
import { logger } from '@/lib/logger';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface CollectionActivityProps {
  collectionSlug: string;
}

export function CollectionActivity({ collectionSlug }: CollectionActivityProps) {
  const [events, setEvents] = useState<OpenSeaEventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchActivity() {
      try {
        setIsLoading(true);
        setError(null);

        logger.info('Fetching collection activity:', { collectionSlug });

        const response = await fetch(`/api/collections/${collectionSlug}/events`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch activity');
        }

        const data = await response.json();
        
        if (!isMounted) return;

        if (!data.events || !Array.isArray(data.events)) {
          throw new Error('Invalid activity data received');
        }

        logger.info('Activity fetched:', {
          count: data.events.length
        });

        setEvents(data.events);
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (!isMounted) return;

        const errorMessage = error instanceof Error ? error.message : 'Failed to load activity';
        logger.error('Error fetching activity:', { error: errorMessage, collectionSlug });
        setError(errorMessage);

        // Implement retry logic for specific errors
        if (retryCount < MAX_RETRIES && 
            (errorMessage.includes('Failed to fetch') || 
             errorMessage.includes('Internal Server Error'))) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            if (isMounted) {
              fetchActivity();
            }
          }, Math.min(1000 * Math.pow(2, retryCount), 8000)); // Exponential backoff
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    if (collectionSlug) {
      fetchActivity();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [collectionSlug, retryCount]);

  return (
    <div className="rounded-lg bg-white/5 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white/10 h-12 rounded-lg" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500 mb-4">{error}</p>
          {retryCount < MAX_RETRIES && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setRetryCount(prev => prev + 1)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7B500] text-black rounded-lg font-semibold hover:bg-[#F7B500]/90 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <RefreshCw size={16} />
              Try Again
            </motion.button>
          )}
        </div>
      ) : !events.length ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No recent activity</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <motion.div
              key={event.transaction?.hash || event.created_date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div>
                <p className="text-white">
                  {event.event_type === 'sale' ? 'Sale' : event.event_type}
                </p>
                <p className="text-sm text-white/60">
                  {new Date(event.created_date).toLocaleDateString()}
                </p>
              </div>
              {event.payment && (
                <div className="text-right">
                  <p className="text-white font-mono">
                    {Number(event.payment.quantity).toFixed(3)} ETH
                  </p>
                  {event.payment.price_usd && (
                    <p className="text-sm text-white/60">
                      ${Number(event.payment.price_usd).toFixed(2)}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
} 