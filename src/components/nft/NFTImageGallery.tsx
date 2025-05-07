'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { logger } from '@/lib/logger';

interface NFTImageGalleryProps {
  images: string[];
  alt: string;
  fallbackMode?: boolean;
}

export default function NFTImageGallery({ 
  images, 
  alt,
  fallbackMode = false 
}: NFTImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageExists, setImageExists] = useState(true);
  
  // Ensure we have at least one image, even in fallback mode
  const displayImages = images.length > 0 
    ? images 
    : ['/images/placeholder-nft.svg'];

  const currentImage = displayImages[activeIndex] || '/images/placeholder-nft.svg';
  
  // Check for placeholder or fallback images
  useEffect(() => {
    if (fallbackMode || 
        currentImage.includes('placeholder') || 
        !currentImage || 
        currentImage === '/images/placeholder-nft.svg') {
      setImageExists(false);
    } else {
      setImageExists(true);
    }
  }, [currentImage, fallbackMode]);
  
  const handleNext = () => {
    if (activeIndex < displayImages.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Only show navigation if there are multiple real images (not just placeholder)
  const realImages = images.filter(img => img && !img.includes('placeholder-nft'));
  const showNavigation = realImages.length > 1;

  return (
    <div className="relative rounded-sm overflow-hidden bg-gray-900 aspect-square">
      {/* Main image */}
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
              src={currentImage}
              alt={alt}
              fill
              className="object-contain"
              unoptimized={true}
              onError={() => {
                logger.error('Failed to load NFT image:', { src: currentImage });
                setImageExists(false);
              }}
            />
          </div>
        )}
      </div>

      {/* Navigation arrows for multiple images */}
      {showNavigation && !fallbackMode && (
        <>
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors ${
              activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === displayImages.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors ${
              activeIndex === displayImages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* Thumbnail navigation for multiple images */}
      {showNavigation && !fallbackMode && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 