'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { logger } from '@/lib/logger';
import { cn } from '@/lib/utils';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  onError?: () => void;
  quality?: number;
  sizes?: string;
  preload?: boolean;
}

export function SafeImage({ 
  src, 
  alt, 
  className, 
  fill = false, 
  priority = false, 
  onError,
  quality = 75,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  preload = false
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer setup
  useEffect(() => {
    if (priority || !imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading when image is 50px from viewport
        threshold: 0.1
      }
    );

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Preload image if needed
  useEffect(() => {
    if (preload && imgSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imgSrc;
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [preload, imgSrc]);

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
      // Clean up the URL by removing line breaks and extra spaces
      processedSrc = processedSrc.replace(/[\n\r\s]+/g, '').trim();

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
      
      // Optimize OpenSea URLs
      if (processedSrc.includes('opensea.io') || processedSrc.includes('i.seadn.io')) {
        const url = new URL(processedSrc);
        if (!url.searchParams.has('w')) {
          url.searchParams.set('w', '400'); // Request smaller initial size
        }
        // Add cache-busting parameter for OpenSea images
        url.searchParams.set('t', Date.now().toString());
        processedSrc = url.toString();
      }
      
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
  const isAnimated = /\.(gif|webp|apng)$/i.test(imgSrc) ||
    imgSrc.includes('arweave.net') ||
    imgSrc.includes('ipfs') ||
    imgSrc.includes('seadn.io');

  return (
    <div ref={imageRef} className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {isVisible && (
        <Image
          src={imgSrc}
          alt={alt}
          className={cn(
            className,
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          fill={fill}
          priority={priority}
          onError={handleImageError}
          unoptimized={isExternalImage && isAnimated}
          width={!fill ? 500 : undefined}
          height={!fill ? 500 : undefined}
          quality={quality}
          sizes={sizes}
          onLoadingComplete={() => setIsLoading(false)}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
} 