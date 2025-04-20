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
  'https://ipfs.io/ipfs/',
  'https://cloudflare-ipfs.com/ipfs/',
  'https://gateway.pinata.cloud/ipfs/'
];

const ARWEAVE_GATEWAY = 'https://arweave.net/';

function transformImageUrl(url: string | null): string {
  if (!url) {
    logger.warn('No image URL provided');
    return '/images/nft-placeholder.png';
  }

  try {
    // Handle IPFS URLs
    if (url.startsWith('ipfs://')) {
      const ipfsHash = url.slice(7);
      const gateway = IPFS_GATEWAYS[0];
      const transformed = gateway + ipfsHash;
      logger.info('Transformed IPFS URL:', { original: url, transformed });
      return transformed;
    }

    // Handle Arweave URLs
    if (url.startsWith('ar://')) {
      const transformed = ARWEAVE_GATEWAY + url.slice(5);
      logger.info('Transformed Arweave URL:', { original: url, transformed });
      return transformed;
    }

    // Ensure URL is HTTPS
    if (url.startsWith('http://')) {
      const transformed = url.replace('http://', 'https://');
      logger.info('Converted HTTP to HTTPS:', { original: url, transformed });
      return transformed;
    }

    logger.info('Using original URL:', { url });
    return url;
  } catch (error) {
    logger.error('Error transforming image URL:', { url, error });
    return '/images/nft-placeholder.png';
  }
}

export function NFTImage({ src, alt }: NFTImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [gatewayIndex, setGatewayIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState(transformImageUrl(src));

  const handleError = () => {
    logger.error('Failed to load NFT image:', { src: imageSrc, gatewayIndex });

    // Try next IPFS gateway if current URL is IPFS
    if (src?.startsWith('ipfs://') && gatewayIndex < IPFS_GATEWAYS.length - 1) {
      const nextGateway = IPFS_GATEWAYS[gatewayIndex + 1];
      const ipfsHash = src.slice(7);
      const newSrc = nextGateway + ipfsHash;
      logger.info('Trying next IPFS gateway:', { gateway: nextGateway, newSrc });
      setGatewayIndex(gatewayIndex + 1);
      setImageSrc(newSrc);
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