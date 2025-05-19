'use client';

import { NFTGalleryClient } from './NFTGalleryClient';
import { NFTGallerySkeleton } from './NFTGallerySkeleton';
import { Suspense } from 'react';

interface ArtGalleryWrapperProps {
  nftConfigs: Array<{
    contract: string;
    tokenId: string;
    title?: string;
    priority?: number;
  }>;
}

export function ArtGalleryWrapper({ nftConfigs }: ArtGalleryWrapperProps) {
  return (
    <Suspense fallback={<NFTGallerySkeleton />}>
      <NFTGalleryClient nftConfigs={nftConfigs} />
    </Suspense>
  );
} 