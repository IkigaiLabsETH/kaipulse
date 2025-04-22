'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaOffer, OpenSeaAccount } from '@/services/opensea/types';
import { logger } from '@/lib/logger';
import { Loader } from '@/components/ui/loader';
import { formatEthPrice } from '@/lib/format';

interface CollectionOffersProps {
  collectionSlug: string;
}

export function CollectionOffers({ collectionSlug }: CollectionOffersProps) {
  const [offers, setOffers] = useState<OpenSeaOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchOffers() {
      try {
        setIsLoading(true);
        setError(null);

        // Use server API route to fetch offers
        const response = await fetch(`/api/collections/${collectionSlug}/offers`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to fetch offers: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!isMounted) return;

        // Check the response format
        if (!data.offers || !Array.isArray(data.offers)) {
          // If the response format is not what we expect, we try to adapt
          if (data.orders && Array.isArray(data.orders)) {
            setOffers(data.orders);
          } else {
            setOffers([]);
            logger.warn('Unexpected offers data format', data);
          }
        } else {
          setOffers(data.offers);
        }
        
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (!isMounted) return;

        const errorMessage = error instanceof Error ? error.message : 'Failed to load offers';
        setError(errorMessage);
        logger.error('Error fetching offers:', { error: errorMessage, collectionSlug });
        
        // Implement retry logic for specific errors
        if (retryCount < MAX_RETRIES && 
            (errorMessage.includes('Failed to fetch') || 
             errorMessage.includes('Internal Server Error'))) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            if (isMounted) {
              fetchOffers();
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
      fetchOffers();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [collectionSlug, retryCount]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader size="lg" className="text-yellow-400/50" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-white/60 mb-6">{error}</p>
        <button 
          onClick={() => setRetryCount(prev => prev + 1)} 
          className="px-5 py-2 text-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!offers.length) {
    return (
      <div className="text-center p-8">
        <p className="text-white/40">No offers found for this collection</p>
      </div>
    );
  }

  // Sort offers by price (highest first)
  const sortedOffers = [...offers].sort((a, b) => 
    parseFloat(b.current_price) - parseFloat(a.current_price)
  );

  // Format account address
  const formatAddress = (account: OpenSeaAccount): string => {
    const address = account.address;
    if (!address) return 'Unknown';
    return account.user?.username || `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="px-4 py-3 font-medium text-white/60">Price</th>
            <th className="px-4 py-3 font-medium text-white/60">Expiration</th>
            <th className="px-4 py-3 font-medium text-white/60">From</th>
          </tr>
        </thead>
        <tbody>
          {sortedOffers.slice(0, 10).map((offer, index) => {
            const ethPrice = formatEthPrice(parseFloat(offer.current_price));
            const expirationDate = new Date(offer.expiration_time * 1000);
            const now = new Date();
            const timeLeft = expirationDate.getTime() - now.getTime();
            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            // Determine if the offer has expired
            const isExpired = timeLeft < 0;
            
            return (
              <tr 
                key={index} 
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-4 py-4 text-yellow-400 font-medium">Ξ {ethPrice}</td>
                <td className="px-4 py-4 text-white">
                  {isExpired ? (
                    <span className="text-red-400">Expired</span>
                  ) : (
                    <span>{daysLeft}d {hoursLeft}h</span>
                  )}
                </td>
                <td className="px-4 py-4 text-white">
                  {formatAddress(offer.maker)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
} 