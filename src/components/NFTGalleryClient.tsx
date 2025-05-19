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

export function NFTGalleryClient({ nftConfigs }: NFTGalleryClientProps) {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadNFTs() {
      try {
        const fetchedNFTs = await fetchNFTs(nftConfigs, 4);
        if (mounted) {
          setNfts(fetchedNFTs);
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