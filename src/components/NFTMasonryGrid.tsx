"use client";

import Masonry from 'react-masonry-css';
import { NFTCard } from './NFTCard';
import { useState, useEffect } from 'react';

interface NFTGridProps {
  nfts: Array<{
    name: string;
    description: string;
    image_url: string;
    contract_address: string;
    token_id: string;
  }>;
}

export function NFTMasonryGrid({ nfts }: NFTGridProps) {
  const [priorityLoadedCount, setPriorityLoadedCount] = useState(0);

  const handlePriorityImageLoad = () => {
    setPriorityLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    // Reset loading state when nfts change
    setPriorityLoadedCount(0);
  }, [nfts]);

  return (
    <div className="relative">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F3CC3E]/5 to-transparent opacity-30 pointer-events-none" />
      
      {/* Loading overlay */}
      {priorityLoadedCount < 4 && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-yellow-400 text-lg font-serif">Loading artworks...</div>
        </div>
      )}
      
      <Masonry
        breakpointCols={{
          default: 4,
          1920: 4,
          1536: 3,
          1280: 2,
          1024: 2,
          768: 2,
          640: 1
        }}
        className="flex w-auto"
        columnClassName="pl-8 first:pl-0 bg-clip-padding space-y-12 md:space-y-16"
      >
        {nfts.map((nft, idx) => (
          <div 
            key={`${nft.contract_address}-${nft.token_id}`} 
            className="mb-6 w-full"
          >
            <NFTCard
              name={nft.name}
              imageUrl={nft.image_url}
              contract={nft.contract_address}
              tokenId={nft.token_id}
              onLoad={idx < 4 ? handlePriorityImageLoad : undefined}
              priority={idx < 4}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
} 