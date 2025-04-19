'use client';

import Image from 'next/image';
import { ImageIcon, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface NFTImageProps {
  imageUrl: string | null;
  name: string | null;
  identifier: string;
  collection?: string;
}

export function NFTImage({ imageUrl, name, identifier, collection }: NFTImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
      
      {/* Main container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#1A1A1A] transition-all duration-500">
        {/* Loading state */}
        <div className={`absolute inset-0 bg-neutral-900 animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={name || `NFT #${identifier}`}
              fill
              className={`
                object-contain p-2 
                transform transition-all duration-700 
                group-hover:scale-105 
                ${isLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              priority
              onLoadingComplete={() => {
                setIsLoaded(true);
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/nft-placeholder.png';
              }}
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
            {name || `#${identifier}`}
          </h3>
          {collection && (
            <p className="text-gray-300 text-sm truncate">
              {collection}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 