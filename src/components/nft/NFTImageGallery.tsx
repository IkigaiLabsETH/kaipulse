'use client';

import { useState, useEffect } from 'react';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { logger } from '@/lib/logger';

interface NFTImageGalleryProps {
  image: string;
  alt: string;
  fallbackMode?: boolean;
}

export default function NFTImageGallery({ 
  image, 
  alt,
  fallbackMode = false 
}: NFTImageGalleryProps) {
  const [imageExists, setImageExists] = useState(true);
  
  // Ensure we have a fallback image if none provided
  const displayImage = image || '/images/placeholder-nft.svg';
  
  // Check for placeholder or fallback images
  useEffect(() => {
    if (fallbackMode || 
        displayImage.includes('placeholder') || 
        !displayImage || 
        displayImage === '/images/placeholder-nft.svg') {
      setImageExists(false);
    } else {
      setImageExists(true);
    }
  }, [displayImage, fallbackMode]);

  return (
    <div className="relative rounded-sm overflow-hidden bg-gray-900 aspect-square">
      <div className="relative h-full w-full">
        {!imageExists || fallbackMode ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <ImageIcon size={64} className="text-gray-700 mb-4" />
              <div className="bg-black/40 px-6 py-4 rounded-sm text-center max-w-xs">
                <p className="text-sm text-white/80">Image temporarily unavailable</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative flex items-center justify-center">
            <Image
              src={displayImage}
              alt={alt}
              fill
              className="object-contain"
              unoptimized={true}
              onError={() => {
                logger.error('Failed to load NFT image:', { src: displayImage });
                setImageExists(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 