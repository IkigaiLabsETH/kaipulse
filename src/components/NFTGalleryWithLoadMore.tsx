"use client";

import { useState, useEffect, useCallback } from 'react';
import { NFTMasonryGrid } from './NFTMasonryGrid';
import { NFTGallerySkeleton } from './NFTGallerySkeleton';
import { logger } from '@/lib/logger';
import { motion } from 'framer-motion';

interface NFTConfig {
  contract: string;
  tokenId: string;
  title?: string;
  priority?: number;
}

interface NFT {
  name: string;
  description: string;
  image_url: string;
  contract_address: string;
  token_id: string;
  placeholderColor?: string;
  blurhash?: string;
}

interface NFTGalleryWithLoadMoreProps {
  nftConfigs: NFTConfig[];
  initialBatchSize?: number;
  loadMoreBatchSize?: number;
  collectionName: string;
}

export function NFTGalleryWithLoadMore({ 
  nftConfigs, 
  initialBatchSize = 12, 
  loadMoreBatchSize = 12,
  collectionName 
}: NFTGalleryWithLoadMoreProps) {
  const [loadedNFTs, setLoadedNFTs] = useState<NFT[]>([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const totalBatches = Math.ceil(nftConfigs.length / loadMoreBatchSize);
  const hasMoreToLoad = currentBatch < totalBatches - 1;

  const loadInitialBatch = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const initialConfigs = nftConfigs.slice(0, initialBatchSize);
      logger.info(`Loading initial batch for ${collectionName}`, {
        batchSize: initialConfigs.length,
        totalNFTs: nftConfigs.length
      });

      const response = await fetch('/api/nfts/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ configs: initialConfigs })
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch initial batch: ${response.statusText}`);
      }

      const data = await response.json();
      const validNFTs = data.nfts.filter((nft: NFT | null) => nft !== null);
      
      setLoadedNFTs(validNFTs);
      setCurrentBatch(0);
      
      logger.info(`Initial batch loaded for ${collectionName}`, {
        loaded: validNFTs.length,
        expected: initialConfigs.length,
        successRate: ((validNFTs.length / initialConfigs.length) * 100).toFixed(1) + '%'
      });
    } catch (err) {
      logger.error(`Error loading initial batch for ${collectionName}:`, err);
      setError(err instanceof Error ? err.message : 'Failed to load initial batch');
    } finally {
      setIsLoading(false);
    }
  }, [nftConfigs, initialBatchSize, collectionName]);

  // Initial load
  useEffect(() => {
    loadInitialBatch();
  }, [loadInitialBatch]);

  const loadMoreNFTs = async () => {
    if (isLoadingMore || !hasMoreToLoad) return;

    try {
      setIsLoadingMore(true);
      const nextBatch = currentBatch + 1;
      const start = initialBatchSize + (nextBatch - 1) * loadMoreBatchSize;
      const end = Math.min(start + loadMoreBatchSize, nftConfigs.length);
      const batchConfigs = nftConfigs.slice(start, end);

      logger.info(`Loading batch ${nextBatch + 1} for ${collectionName}`, {
        batchSize: batchConfigs.length,
        start,
        end,
        totalLoaded: loadedNFTs.length
      });

      const response = await fetch('/api/nfts/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ configs: batchConfigs })
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch batch: ${response.statusText}`);
      }

      const data = await response.json();
      const validNFTs = data.nfts.filter((nft: NFT | null) => nft !== null);
      
      setLoadedNFTs(prev => [...prev, ...validNFTs]);
      setCurrentBatch(nextBatch);
      
      logger.info(`Batch ${nextBatch + 1} loaded for ${collectionName}`, {
        loaded: validNFTs.length,
        expected: batchConfigs.length,
        totalLoaded: loadedNFTs.length + validNFTs.length,
        successRate: ((validNFTs.length / batchConfigs.length) * 100).toFixed(1) + '%'
      });
    } catch (err) {
      logger.error(`Error loading more NFTs for ${collectionName}:`, err);
      setError(err instanceof Error ? err.message : 'Failed to load more NFTs');
    } finally {
      setIsLoadingMore(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <NFTGallerySkeleton />
        <div className="text-center text-white/60">
          Loading {collectionName} artworks...
        </div>
      </div>
    );
  }

  if (error && loadedNFTs.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <div className="text-white/60 text-center">
          <p className="text-lg mb-2">Unable to load artworks</p>
          <p className="text-sm text-white/40">{error}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={loadInitialBatch}
          className="px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-colors rounded-lg"
        >
          Try Again
        </motion.button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <NFTMasonryGrid nfts={loadedNFTs} />
      
      {hasMoreToLoad && (
        <div className="text-center">
          <div className="mb-4 text-white/50 text-sm">
            Showing {loadedNFTs.length} of {nftConfigs.length} artworks
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMoreNFTs}
            disabled={isLoadingMore}
            className="px-8 py-4 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isLoadingMore ? (
              <span className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin" />
                <span>Loading More...</span>
              </span>
            ) : (
              `Load More (${Math.min(loadMoreBatchSize, nftConfigs.length - loadedNFTs.length)} remaining)`
            )}
          </motion.button>
        </div>
      )}
      
      {error && (
        <div className="text-center text-red-400/60 text-sm">
          {error}
        </div>
      )}
    </div>
  );
} 