'use client';

import Image from 'next/image';
import { ImageIcon, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { logger } from '@/lib/logger';

interface NFTImageProps {
  src: string | null;
  alt: string;
}

// Multiple IPFS gateways for fallback
const IPFS_GATEWAYS = [
  'https://cloudflare-ipfs.com/ipfs/',
  'https://gateway.pinata.cloud/ipfs/',
  'https://ipfs.io/ipfs/'
];

const ARWEAVE_GATEWAY = 'https://arweave.net/';

function ipfsToHttp(url: string | null, gatewayIndex = 0): string {
  if (!url) return '/images/nft-placeholder.png';
  if (url.startsWith('ipfs://')) {
    const ipfsHash = url.slice(7);
    return IPFS_GATEWAYS[gatewayIndex] + ipfsHash;
  }
  if (url.startsWith('ar://')) {
    return ARWEAVE_GATEWAY + url.slice(5);
  }
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
}

export function NFTImage({ src, alt }: NFTImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [gatewayIndex, setGatewayIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(ipfsToHttp(src, 0));

  const handleError = () => {
    // Try next IPFS gateway if current URL is IPFS
    if (src?.startsWith('ipfs://') && gatewayIndex < IPFS_GATEWAYS.length - 1) {
      const nextIndex = gatewayIndex + 1;
      setGatewayIndex(nextIndex);
      setImageSrc(ipfsToHttp(src, nextIndex));
      setHasError(false);
      return;
    }
    setHasError(true);
    setImageSrc('/images/nft-placeholder.png');
  };

  if (hasError || !imageSrc) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
        <ImageIcon size={48} className="text-neutral-700" />
      </div>
    );
  }

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
      
      {/* Main container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1A1A1A] transition-all duration-500">
        {/* Loading state */}
        <div className={`absolute inset-0 bg-neutral-900 animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        {imageSrc && !hasError ? (
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
              unoptimized={true}
              onLoad={() => {
                logger.info('Image loaded successfully:', { src: imageSrc });
                setIsLoaded(true);
              }}
              onError={handleError}
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