'use client';

import { useEffect, useState } from 'react';
import { NFTGallery } from './NFTGallery';
import { fetchNFTs } from '@/lib/nft';
import { NFT } from '@/lib/nft';

interface NFTGalleryClientProps {
  nftConfigs: Array<{
    contract: string;
    tokenId: string;
    title?: string;
    priority?: number;
  }>;
  priorityCount?: number; // Make it configurable, default to loading all
}

// Simple in-memory cache for client-side
const clientCache = new Map<string, NFT[]>();

export function NFTGalleryClient({ nftConfigs, priorityCount }: NFTGalleryClientProps) {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadNFTs() {
      try {
        // Create a cache key from the configs and priority count
        const cacheKey = JSON.stringify({ nftConfigs, priorityCount });
        
        // Check if we have cached data
        if (clientCache.has(cacheKey)) {
          if (mounted) {
            setNfts(clientCache.get(cacheKey)!);
            setIsLoading(false);
          }
          return;
        }

        // Fetch all NFTs by default (priorityCount defaults to nftConfigs.length)
        const effectivePriorityCount = priorityCount ?? nftConfigs.length;
        const fetchedNFTs = await fetchNFTs(nftConfigs, effectivePriorityCount);
        if (mounted) {
          setNfts(fetchedNFTs);
          // Cache the results
          clientCache.set(cacheKey, fetchedNFTs);
          setIsLoading(false);
        }
      } catch {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadNFTs();

    return () => {
      mounted = false;
    };
  }, [nftConfigs, priorityCount]);

  if (isLoading) {
    return null; // The Suspense fallback will handle the loading state
  }

  return <NFTGallery nfts={nfts} />;
} 