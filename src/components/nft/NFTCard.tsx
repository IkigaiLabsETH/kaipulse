'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { OpenSeaNFT } from '@/services/opensea/types';
import { useState } from 'react';
import { logger } from '@/lib/logger';
import { formatEthPrice } from '@/lib/format';
import { motion } from 'framer-motion';
import { ArrowUpRight, ImageIcon } from 'lucide-react';

export interface NFTCardProps {
  nft: OpenSeaNFT;
  href: string;
  priority?: boolean;
}

export function NFTCard({ nft, href, priority = false }: NFTCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    logger.warn('Failed to load NFT image:', { 
      nftId: nft.identifier,
      imageUrl: nft.image_url 
    });
    setImageError(true);
  };

  const imageUrl = !imageError && nft.image_url ? nft.image_url : '/images/nft-placeholder.png';
  const price = nft.listings?.[0]?.price?.current?.value;
  const isUnoptimized =
    imageUrl.includes('ipfs') ||
    imageUrl.includes('arweave') ||
    /\.gif($|\?)/i.test(imageUrl) ||
    /\.webp($|\?)/i.test(imageUrl);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative group"
    >
      <Link
        href={href}
        className="block overflow-hidden relative"
        aria-label={`View details for ${nft.name || `NFT #${nft.identifier}`}`}
      >
        {/* Art frame - artwork is the focus */}
        <div className="relative">
          {/* Art piece */}
          <div className="relative aspect-square overflow-hidden bg-black">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={nft.name || 'NFT'}
                width={500}
                height={500}
                className="object-cover transition-all duration-700 group-hover:scale-105"
                onError={handleImageError}
                priority={priority}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={isUnoptimized}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQoU2NkYGD4z0AEYBxVSFJgFIwC0QwMDAwMDAwMDAwAAAwA4nQn2QAAAABJRU5ErkJggg=="
                placeholder="blur"
              />
            ) : (
              <div className="w-full h-full bg-black/30 flex items-center justify-center">
                <ImageIcon size={48} className="text-white/40" />
              </div>
            )}

            {/* Subtle price display */}
            {price && (
              <div className="absolute bottom-0 right-0 bg-black/80 px-3 py-1.5 text-sm font-light">
                <span className="text-yellow-400">Ξ</span> {formatEthPrice(price)}
              </div>
            )}

            {/* Elegant hover state */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="border-b border-white/50 px-3 py-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                <span className="uppercase tracking-wider text-sm font-light text-white">View</span>
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* Minimal artwork title - only shows artwork name */}
          <div className="py-4 px-1">
            <h3 className="text-base font-light text-white/80 group-hover:text-yellow-400 transition-colors duration-300" title={nft.name || `#${nft.identifier}`}>
              {nft.name || `#${nft.identifier}`}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 