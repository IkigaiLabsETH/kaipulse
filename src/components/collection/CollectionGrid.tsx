'use client';

import { useState, useEffect } from 'react';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { NFTCard } from '@/components/nft/NFTCard';
import { Loader } from '@/components/ui/loader';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

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
      console.log('------- FETCH STARTED -------');
      console.log('1. Starting to fetch NFTs for collection:', collectionSlug);
      console.log('Current state before fetch:', { 
        isLoading, 
        hasError: !!error, 
        nftsCount: nfts.length,
        retryCount
      });
      
      try {
        setIsLoading(true);
        setError(null);
        
        // Add timestamp to prevent browser caching
        const timestamp = new Date().getTime();
        
        // Determine if we're dealing with a contract address or a collection slug
        const isContract = isEthereumAddress(collectionSlug);
        console.log(`Detected ${isContract ? 'contract address' : 'collection slug'}`);
        
        // Choose the appropriate endpoint
        const fetchUrl = isContract
          ? `/api/collections/contract/${collectionSlug}/nfts?t=${timestamp}`
          : `/api/collections/${collectionSlug}/nfts?t=${timestamp}`;
          
        console.log('2. About to make fetch request to:', fetchUrl);
        
        const response = await fetch(fetchUrl);
        console.log('3. Fetch request completed with status:', response.status);
        
        // Manual conversion of headers to object to avoid iteration issues
        const responseHeaders: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        console.log('Response headers:', responseHeaders);
        
        if (!response.ok) {
          console.error('4a. Response was not OK:', response.status, response.statusText);
          throw new Error(`API returned ${response.status} ${response.statusText}`);
        }
        
        console.log('4b. Response was OK, about to parse JSON');
        const responseText = await response.text();
        console.log('4c. Raw response text (first 200 chars):', responseText.substring(0, 200));
        
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          console.error('4d. JSON parse error:', e);
          throw new Error('Failed to parse JSON response');
        }
        
        console.log('5. JSON parsed, result type:', Array.isArray(data) ? 'array' : typeof data);
        console.log('6. Data preview:', Array.isArray(data) ? `Array with ${data.length} items` : JSON.stringify(data).substring(0, 100));
        
        // Handle different response formats
        let nftArray: OpenSeaNFT[] = [];
        
        if (Array.isArray(data)) {
          // Direct array format (collection slug endpoint)
          nftArray = data;
        } else if (data && typeof data === 'object' && Array.isArray(data.nfts)) {
          // Object with nfts array (contract address endpoint)
          nftArray = data.nfts;
        } else {
          console.error('7a. Data is not in expected format:', typeof data);
          console.error('Data content:', JSON.stringify(data).substring(0, 200));
          throw new Error('API did not return data in expected format');
        }
        
        console.log('7b. Processed data is an array with', nftArray.length, 'items');
        
        // Deep validation of expected properties
        if (nftArray.length > 0) {
          const firstItem = nftArray[0];
          console.log('Sample NFT item properties:', Object.keys(firstItem));
          console.log('Sample NFT identifier:', firstItem.identifier);
          console.log('Sample NFT image_url:', firstItem.image_url);
        }
        
        setNfts(nftArray);
        console.log('8. Updated nfts state with', nftArray.length, 'items');
      } catch (err) {
        console.error('ERROR in fetchNFTs:', err);
        const message = err instanceof Error ? err.message : 'Failed to load NFTs';
        setError(message);
        console.error('9a. Set error state:', message);
      } finally {
        setIsLoading(false);
        console.log('9b. Finished loading, isLoading set to false');
        console.log('------- FETCH COMPLETED -------');
      }
    }
    
    fetchNFTs();
  }, [collectionSlug, retryCount]);

  // Add detailed logging for the rendering process
  console.log('Rendering CollectionGrid with state:', {
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
    console.log('No NFTs found for collection:', collectionSlug);
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

  console.log('Rendering NFT grid with', nfts.length, 'items');

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