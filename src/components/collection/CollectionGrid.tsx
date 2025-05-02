'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { NFTCard } from '@/components/nft/NFTCard';
import { Loader } from '@/components/ui/loader';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { logger } from '@/lib/logger';

interface CollectionGridProps {
  collectionSlug: string;
}

// Detect if the slug is actually an Ethereum address
function isEthereumAddress(value: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function CollectionGrid({ collectionSlug }: CollectionGridProps) {
  const [nfts, setNfts] = useState<OpenSeaNFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    async function fetchNFTs() {
      logger.debug('------- FETCH STARTED -------');
      logger.debug(`Starting to fetch NFTs for collection: ${collectionSlug}`);
      
      try {
        setIsLoading(true);
        setError(null);
        
        // Add timestamp to prevent browser caching
        const timestamp = new Date().getTime();
        
        // Determine if we're dealing with a contract address or a collection slug
        const isContract = isEthereumAddress(collectionSlug);
        logger.debug(`Detected ${isContract ? 'contract address' : 'collection slug'}`);
        
        // Choose the appropriate endpoint
        const fetchUrl = isContract
          ? `/api/collections/contract/${collectionSlug}/nfts?t=${timestamp}`
          : `/api/collections/${collectionSlug}/nfts?t=${timestamp}`;
          
        logger.debug(`About to make fetch request to: ${fetchUrl}`);
        
        const response = await fetch(fetchUrl);
        logger.debug(`Fetch request completed with status: ${response.status}`);
        
        if (!response.ok) {
          logger.error(`Response was not OK: ${response.status} ${response.statusText}`);
          throw new Error(`API returned ${response.status} ${response.statusText}`);
        }
        
        logger.debug('Response was OK, about to parse JSON');
        const responseText = await response.text();
        
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          logger.error('JSON parse error:', e);
          throw new Error('Failed to parse JSON response');
        }
        
        logger.debug(`JSON parsed, result type: ${Array.isArray(data) ? 'array' : typeof data}`);
        
        // Handle different response formats
        let nftArray: OpenSeaNFT[] = [];
        
        if (Array.isArray(data)) {
          // Direct array format (collection slug endpoint)
          nftArray = data;
        } else if (data && typeof data === 'object' && Array.isArray(data.nfts)) {
          // Object with nfts array (contract address endpoint)
          nftArray = data.nfts;
        } else {
          logger.error('Data is not in expected format:', typeof data);
          throw new Error('API did not return data in expected format');
        }
        
        logger.debug(`Processed data is an array with ${nftArray.length} items`);
        
        setNfts(nftArray);
        logger.debug(`Updated nfts state with ${nftArray.length} items`);
      } catch (err) {
        logger.error('ERROR in fetchNFTs:', err);
        const message = err instanceof Error ? err.message : 'Failed to load NFTs';
        setError(message);
        logger.error(`Set error state: ${message}`);
      } finally {
        setIsLoading(false);
        logger.debug('Finished loading, isLoading set to false');
        logger.debug('------- FETCH COMPLETED -------');
      }
    }
    
    fetchNFTs();
  }, [collectionSlug, retryCount]);

  logger.debug('Rendering CollectionGrid with state:', {
    isLoading,
    hasError: !!error,
    nftsLength: nfts.length,
    collectionSlug,
    isEthAddress: isEthereumAddress(collectionSlug),
    timestamp: new Date().toISOString() // Add timestamp to track re-renders
  });

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
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setRetryCount(prev => prev + 1)}
          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-light border border-yellow-400/30 text-yellow-400 uppercase tracking-wider hover:bg-yellow-400/10 transition-all duration-300"
        >
          <RefreshCw size={14} />
          Try Again
        </motion.button>
      </div>
    );
  }

  if (!nfts.length) {
    logger.debug(`No NFTs found for collection: ${collectionSlug}`);
    return (
      <div className="min-h-[300px] flex flex-col items-center justify-center">
        <p className="text-white/40 uppercase tracking-wider text-sm mb-4">No artworks found in this collection</p>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setRetryCount(prev => prev + 1)}
          className="px-4 py-2 text-white/70 border border-white/20 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
        >
          Refresh
        </motion.button>
      </div>
    );
  }

  logger.debug(`Rendering NFT grid with ${nfts.length} items`);

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
            href={`/collections/${nft.contract}/${nft.identifier}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 