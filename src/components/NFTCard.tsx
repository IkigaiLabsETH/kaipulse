"use client";

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface NFTCardProps {
  name: string;
  imageUrl: string;
  contract: string;
  tokenId: string;
  onLoad?: () => void;
  priority?: boolean;
}

export function NFTCard({ name, imageUrl, contract, tokenId, onLoad, priority = false }: NFTCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);
  const [imageUrlToUse, setImageUrlToUse] = useState(imageUrl);

  // Handler to get natural image dimensions
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    const img = e.target as HTMLImageElement;
    if (img?.naturalWidth && img?.naturalHeight) {
      setAspectRatio(img?.naturalWidth / img?.naturalHeight);
    }
    onLoad?.();
  };

  const handleImageError = () => {
    // If IPFS and not already tried fallback, try cloudflare gateway
    if (imageUrlToUse.startsWith('https://ipfs.io/')) {
      setImageUrlToUse(imageUrlToUse.replace('https://ipfs.io/', 'https://cloudflare-ipfs.com/'));
    } else if (imageUrlToUse.startsWith('https://cloudflare-ipfs.com/')) {
      setImageError(true);
    } else {
      setImageError(true);
    }
  };

  // Compute aspect ratio style
  const aspectStyle: React.CSSProperties = { aspectRatio: aspectRatio ? `${aspectRatio}` : '0.75' };
  const displayImageUrl = !imageError && imageUrlToUse ? imageUrlToUse : '/images/nft-placeholder.png';

  return (
    <div className="group relative w-full bg-black border-4 border-yellow-400 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)] transition-all duration-500 hover:shadow-[0_12px_40px_0_rgba(247,181,0,0.35),0_4px_16px_0_rgba(0,0,0,0.55)] hover:border-yellow-300">
      {/* Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none z-10" />
      {/* Image Container with dynamic aspect ratio */}
      <div className="relative w-full bg-[#181818] rounded-xl overflow-hidden" style={aspectStyle}>
        {displayImageUrl && !imageError ? (
          <Image
            src={displayImageUrl}
            alt={name}
            fill
            className={`object-contain transition-all duration-700 ${isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            priority={priority}
            unoptimized={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            quality={85}
            style={{
              objectFit: 'contain'
            }}
          />
        ) : (
          <div className="w-full h-full bg-black/30 flex items-center justify-center">
            <ImageIcon size={48} className="text-white/40" />
            <span className="mt-2 text-white/60 text-sm">NFT Image Unavailable</span>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          {/* Content */}
          <div className="relative p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-between">
              <h2 className="font-epilogue text-xl text-yellow-400 tracking-tight font-bold drop-shadow-md">
                {name}
              </h2>
              <a
                href={`https://opensea.io/assets/ethereum/${contract}/${tokenId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-yellow-400 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 32 32" className="transition-transform duration-500 hover:rotate-12">
                  <circle cx="16" cy="16" r="16" fill="currentColor"/>
                  <path fill="black" d="M16.02 7.5l-6.5 10.5h13l-6.5-10.5zm0 2.5l4.5 7h-9l4.5-7zm-6.5 11v3h13v-3h-13zm0 4v1.5h13V25h-13z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 