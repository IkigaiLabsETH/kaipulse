'use client';

import Image from 'next/image';
import type { OpenSeaCollection } from '@/services/opensea/types';
import { useState } from 'react';
import { logger } from '@/lib/logger';

interface CollectionHeaderProps {
  collection: OpenSeaCollection;
}

export function CollectionHeader({ collection }: CollectionHeaderProps) {
  const [logoError, setLogoError] = useState(false);

  const logoUrl = !logoError && collection.image_url 
    ? collection.image_url 
    : '/images/placeholder-logo.svg';

  const handleImageError = () => {
    logger.warn('Failed to load logo image:', { url: collection.image_url });
    setLogoError(true);
  };

  return (
    <div className="bg-black">
      {/* Collection Info */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          {/* Collection Image */}
          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#111111]">
            <Image
              src={logoUrl}
              alt={collection.name}
              fill
              className="object-cover"
              priority
              quality={90}
              onError={handleImageError}
            />
          </div>

          {/* Collection Name */}
          <div>
            <h1 className="text-xl font-medium text-white">
              {collection.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
} 