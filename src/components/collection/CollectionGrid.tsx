'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { NFTCard } from '@/components/nft/NFTCard';
import { motion } from 'framer-motion';
import { logger } from '@/lib/logger';
import { AlertTriangle } from 'lucide-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface CollectionGridProps {
  collectionSlug: string;
}

// Detect if the slug is actually an Ethereum address
function isEthereumAddress(value: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

function NFTGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_5px_20px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-neutral-800 rounded" />
          </div>
          <div className="py-4 px-1">
            <div className="h-5 w-2/3 bg-neutral-800 rounded mb-2" />
            <div className="h-3 w-1/2 bg-neutral-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ArtGalleryErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-16 text-center bg-gradient-to-br from-[#111] to-[#222] rounded-xl border border-yellow-400/20 shadow-2xl">
      <AlertTriangle size={64} className="text-yellow-400 mb-6 animate-pulse" />
      <h2 className="text-3xl font-bold text-yellow-400 mb-4 font-serif tracking-tight">Something went wrong</h2>
      <p className="text-lg text-white/80 mb-8 max-w-xl font-light">We couldn&apos;t load the artworks in this collection. This might be a network issue or a temporary glitch. Please try again in a moment.</p>
      <button
        onClick={() => window.location.reload()}
        className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold text-lg shadow-lg hover:bg-yellow-300 transition-all duration-200 uppercase tracking-widest"
      >
        Try Again
      </button>
    </div>
  );
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
    return <NFTGridSkeleton />;
  }

  if (error) {
    return (
      <ArtGalleryErrorFallback />
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

  // Filter out NFTs with missing or unavailable data
  const filteredNFTs = nfts.filter(nft =>
    nft &&
    nft.identifier &&
    (nft.name || nft.image_url) &&
    nft.image_url &&
    nft.image_url !== '/images/nft-placeholder.png' &&
    nft.image_url !== '/images/placeholder-nft.svg'
  );

  return (
    <ErrorBoundary fallback={<ArtGalleryErrorFallback />}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16"
      >
        {filteredNFTs.map((nft, index) => (
          <motion.div 
            key={nft.identifier}
            variants={itemVariants}
          >
            <NFTCard 
              nft={nft} 
              href={`/collections/${nft.contract}/${nft.identifier}`}
              priority={index < 4}
            />
          </motion.div>
        ))}
      </motion.div>
    </ErrorBoundary>
  );
} 