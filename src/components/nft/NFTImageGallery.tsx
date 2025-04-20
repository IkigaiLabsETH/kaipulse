'use client';

import { useState, useCallback } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { NFTImage } from './NFTImage';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NFTImageGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
  className?: string;
}

export function NFTImageGallery({ images, className }: NFTImageGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const currentImage = images[currentIndex];

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div 
        className={cn(
          "relative cursor-zoom-in",
          className
        )}
        onClick={() => setIsZoomed(true)}
      >
        <NFTImage
          src={currentImage.url}
          alt={currentImage.alt}
        />
        
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex 
                    ? "bg-white" 
                    : "bg-white/50 hover:bg-white/75"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden transition-all",
                      index === currentIndex 
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black" 
                        : "opacity-50 hover:opacity-75"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 