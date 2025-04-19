'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { useState } from 'react';
import { logger } from '@/lib/logger';

export interface NFTCardProps {
  nft: OpenSeaNFT;
  href: string;
}

export function NFTCard({ nft, href }: NFTCardProps) {
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price?: { currentPrice?: number }) => {
    if (!price?.currentPrice) return 'Not listed';
    return `${price.currentPrice.toFixed(3)} ETH`;
  };

  const imageUrl = !imageError && nft.image_url 
    ? nft.image_url 
    : '/images/placeholder-nft.svg';

  const handleImageError = () => {
    logger.warn('Failed to load NFT image:', { 
      nftId: nft.identifier,
      imageUrl: nft.image_url 
    });
    setImageError(true);
  };

  return (
    <Link
      href={href}
      className="group block rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-yellow-500/20"
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={nft.name || `#${nft.identifier}`}
          fill
          className="object-cover transform transition-transform duration-700 group-hover:scale-110"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white truncate">
          {nft.name || `#${nft.identifier}`}
        </h3>
        <p className="text-sm text-white/60 mt-1">
          {formatPrice(nft.price)}
        </p>
      </div>
    </Link>
  );
} 