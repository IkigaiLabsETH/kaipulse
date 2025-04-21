'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { useState } from 'react';
import { logger } from '@/lib/logger';
import { formatEthPrice } from '@/lib/format';

export interface NFTCardProps {
  nft: OpenSeaNFT;
  href: string;
}

export function NFTCard({ nft, href }: NFTCardProps) {
  const [imageError, setImageError] = useState(false);
  const hasTraits = nft.traits && nft.traits.length > 0;
  const rarity = nft.rarity?.rank 
    ? `${nft.rarity.rank} of ${nft.rarity.tokens_scored}`
    : null;

  const handleImageError = () => {
    logger.warn('Failed to load NFT image:', { 
      nftId: nft.identifier,
      imageUrl: nft.image_url 
    });
    setImageError(true);
  };

  const imageUrl = !imageError && nft.image_url 
    ? nft.image_url 
    : '/images/placeholder-nft.svg';

  const price = nft.listings?.[0]?.price?.current?.value;
  const lastSalePrice = null;

  return (
    <Link
      href={href}
      className="block bg-black group"
    >
      <div className="relative aspect-square overflow-hidden">
        {nft.image_url ? (
          <Image
            src={nft.image_url}
            alt={nft.name || 'NFT'}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className="text-white/40">No Image</span>
          </div>
        )}
        
        {/* Price Tag */}
        {price && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
            <span className="text-white/60">Ξ</span> {formatEthPrice(price)}
          </div>
        )}
      </div>

      <div className="p-3 space-y-2">
        <div>
          <h3 className="text-sm font-medium truncate" title={nft.name || `#${nft.identifier}`}>
            {nft.name || `#${nft.identifier}`}
          </h3>
          {rarity && (
            <p className="text-xs text-white/60">
              Rank: {rarity}
            </p>
          )}
        </div>

        {hasTraits && (
          <div className="flex flex-wrap gap-1">
            {nft.traits.slice(0, 3).map((trait, index) => (
              <div 
                key={index}
                className="px-1.5 py-0.5 bg-white/5 rounded-sm text-[10px] text-white/60"
                title={`${trait.trait_type}: ${trait.value}`}
              >
                {trait.value}
              </div>
            ))}
            {nft.traits.length > 3 && (
              <div className="px-1.5 py-0.5 bg-white/5 rounded-sm text-[10px] text-white/60">
                +{nft.traits.length - 3}
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
} 