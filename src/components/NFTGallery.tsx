"use client";

import { NFT } from '@/lib/nft';
import { NFTGallerySkeleton } from './NFTGallerySkeleton';
import { NFTMasonryGrid } from './NFTMasonryGrid';

interface NFTGalleryProps {
  nfts: NFT[];
}

export function NFTGallery({ nfts }: NFTGalleryProps) {
  if (!nfts.length) {
    return <NFTGallerySkeleton />;
  }
  return <NFTMasonryGrid nfts={nfts} />;
} 