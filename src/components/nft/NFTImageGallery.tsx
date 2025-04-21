'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ZoomIn, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NFTImageGalleryProps {
  images: string[];
  alt: string;
}

export default function NFTImageGallery({ images, alt }: NFTImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const currentImage = images[currentIndex];

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main image with yellow border highlight */}
      <div 
        className="relative aspect-square w-full overflow-hidden border-[6px] border-yellow-400 cursor-zoom-in bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]" 
        onClick={() => setFullscreenOpen(true)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
        >
          <Image
            src={currentImage}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
            priority
          />
          
          {/* Zoom indicator */}
          <div className="absolute bottom-4 right-4 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-80 transition-opacity">
            <ZoomIn size={20} className="text-yellow-400" />
          </div>
        </motion.div>
      </div>

      {/* Thumbnail strip, if there are multiple images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative w-20 h-20 flex-shrink-0 cursor-pointer transition-all duration-300 transform",
                currentIndex === index 
                  ? "border-[3px] border-yellow-400 opacity-100 scale-105" 
                  : "border border-white/10 opacity-70 hover:opacity-100 hover:border-yellow-400/50"
              )}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-5xl w-full bg-black border border-yellow-400/60 p-0 sm:p-6">
          <div className="relative w-full h-[80vh]">
            <Image
              src={currentImage}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
            
            <button 
              className="absolute top-4 right-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
              onClick={() => setFullscreenOpen(false)}
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 