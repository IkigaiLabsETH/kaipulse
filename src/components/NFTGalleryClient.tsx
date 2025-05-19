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
}

// Simple in-memory cache for client-side
const clientCache = new Map<string, NFT[]>();

export function NFTGalleryClient({ nftConfigs }: NFTGalleryClientProps) {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadNFTs() {
      try {
        // Create a cache key from the configs
        const cacheKey = JSON.stringify(nftConfigs);
        
        // Check if we have cached data
        if (clientCache.has(cacheKey)) {
          if (mounted) {
            setNfts(clientCache.get(cacheKey)!);
            setIsLoading(false);
          }
          return;
        }

        const fetchedNFTs = await fetchNFTs(nftConfigs, 4);
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
  }, [nftConfigs]);

  if (isLoading) {
    return null; // The Suspense fallback will handle the loading state
  }

  return <NFTGallery nfts={nfts} />;
} 