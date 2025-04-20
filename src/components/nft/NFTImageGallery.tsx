'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface NFTImageGalleryProps {
  images: { url: string; alt: string }[];
  className?: string;
}

export function NFTImageGallery({ images, className }: NFTImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!images.length) {
    return null;
  }

  return (
    <div className={className}>
      {/* Main image */}
      <div 
        className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900"
        onClick={() => setIsDialogOpen(true)}
      >
        <Image
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {/* Thumbnail grid */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image.url}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-900",
                selectedImage === index && "ring-2 ring-yellow-500"
              )}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl bg-neutral-900 p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 