'use client';

import Image from 'next/image';
import { ImageIcon, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface NFTImageProps {
  src: string | null;
  alt: string;
}

const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';
const ARWEAVE_GATEWAY = 'https://arweave.net/';

function transformImageUrl(url: string | null): string {
  if (!url) return '/images/nft-placeholder.png';

  // Handle IPFS URLs
  if (url.startsWith('ipfs://')) {
    return IPFS_GATEWAY + url.slice(7);
  }

  // Handle Arweave URLs
  if (url.startsWith('ar://')) {
    return ARWEAVE_GATEWAY + url.slice(5);
  }

  return url;
}

export function NFTImage({ src, alt }: NFTImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(transformImageUrl(src));

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
      
      {/* Main container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1A1A1A] transition-all duration-500">
        {/* Loading state */}
        <div className={`absolute inset-0 bg-neutral-900 animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className={`
                object-contain p-2 
                transform transition-all duration-700 
                group-hover:scale-105 
                ${isLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              priority
              onLoadingComplete={() => {
                setIsLoaded(true);
              }}
              onError={() => {
                setImageSrc('/images/nft-placeholder.png');
                setIsLoaded(true);
              }}
            />

            {/* Expand icon */}
            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 size={20} className="text-white" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon size={48} className="text-neutral-700" />
          </div>
        )}

        {/* Info overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-white font-bold text-xl truncate mb-1">
            {alt}
          </h3>
        </div>
      </div>
    </div>
  );
} 