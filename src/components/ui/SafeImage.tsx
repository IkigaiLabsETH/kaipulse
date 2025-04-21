'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { logger } from '@/lib/logger';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  onError?: () => void;
}

export function SafeImage({ src, alt, className, fill = false, priority = false, onError }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  
  // Log image loading attempt
  useEffect(() => {
    logger.info('Loading image:', {
      originalSrc: src,
      processedSrc: imgSrc,
      alt,
      isOpenseaUrl: src.includes('opensea') || src.includes('i.seadn.io')
    });
  }, [src, imgSrc, alt]);

  // Process the URL when src changes
  useEffect(() => {
    let processedSrc = src;
    try {
      // Handle local images (starting with /)
      if (processedSrc.startsWith('/')) {
        setImgSrc(processedSrc);
        return;
      }

      // Handle relative paths without leading slash
      if (!processedSrc.startsWith('http') && !processedSrc.startsWith('/')) {
        processedSrc = `/${processedSrc}`;
        setImgSrc(processedSrc);
        return;
      }

      // For external URLs
      // Ensure HTTPS
      processedSrc = processedSrc.replace(/^http:/, 'https:');
      
      // Handle special characters
      processedSrc = processedSrc.replace(/[()]/g, encodeURIComponent);
      
      // Validate URL
      new URL(processedSrc);
      
      setImgSrc(processedSrc);
    } catch (error) {
      logger.error('Invalid image URL:', {
        originalSrc: src,
        processedSrc,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      onError?.();
    }
  }, [src, onError]);

  const handleImageError = (e: any) => {
    logger.error('Image load error:', {
      originalSrc: src,
      processedSrc: imgSrc,
      alt,
      error: e.toString()
    });
    onError?.();
  };

  // For local images, don't use unoptimized
  const isExternalImage = imgSrc.startsWith('http');

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      fill={fill}
      priority={priority}
      onError={handleImageError}
      unoptimized={
        isExternalImage && (
          imgSrc.includes('stream.mux.com') || 
          imgSrc.includes('opensea') || 
          imgSrc.includes('i.seadn.io') ||
          imgSrc.includes('ipfs')
        )
      }
      width={!fill ? 500 : undefined}
      height={!fill ? 500 : undefined}
    />
  );
} 