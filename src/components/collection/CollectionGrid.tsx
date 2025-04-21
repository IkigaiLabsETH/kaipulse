'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { NFTCard } from '@/components/nft/NFTCard';
import { logger } from '@/lib/logger';
import { Loader } from '@/components/ui/loader';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface CollectionGridProps {
  collectionSlug: string;
}

export function CollectionGrid({ collectionSlug }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchNFTs() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/collections/${collectionSlug}/nfts`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch NFTs');
        }

        const data = await response.json();
        
        if (!isMounted) return;

        if (!data.nfts || !Array.isArray(data.nfts)) {
          throw new Error('Invalid NFT data received');
        }

        setNfts(data.nfts);
        setRetryCount(0); // Reset retry count on success
      } catch (error) {
        if (!isMounted) return;

        const errorMessage = error instanceof Error ? error.message : 'Failed to load NFTs';
        logger.error('Error fetching NFTs:', { error: errorMessage, collectionSlug });
        setError(errorMessage);

        // Implement retry logic for specific errors
        if (retryCount < MAX_RETRIES && 
            (errorMessage.includes('Failed to fetch') || 
             errorMessage.includes('Internal Server Error'))) {
          setRetryCount(prev => prev + 1);
          setTimeout(() => {
            if (isMounted) {
              fetchNFTs();
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
      fetchNFTs();
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [collectionSlug, retryCount]);

  if (isLoading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <Loader size="lg" className="text-yellow-400/50" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[300px] flex flex-col items-center justify-center text-center p-4">
        <p className="text-white/60 mb-8 tracking-wide">{error}</p>
        {retryCount < MAX_RETRIES && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setRetryCount(prev => prev + 1)}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-light border border-yellow-400/30 text-yellow-400 uppercase tracking-wider hover:bg-yellow-400/10 transition-all duration-300"
          >
            <RefreshCw size={14} />
            Try Again
          </motion.button>
        )}
      </div>
    );
  }

  if (!nfts.length) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <p className="text-white/40 uppercase tracking-wider text-sm">No artworks found in this collection</p>
      </div>
    );
  }

  // Animation for each artwork as it appears
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16"
    >
      {nfts.map((nft) => (
        <motion.div 
          key={nft.identifier}
          variants={itemVariants}
        >
          <NFTCard 
            nft={nft} 
            href={`/collections/${collectionSlug}/${nft.identifier}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 