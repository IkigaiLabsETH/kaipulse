"use client";

import Masonry from 'react-masonry-css';
import { NFTCard } from './NFTCard';

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
  return (
    <div className="relative">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F3CC3E]/5 to-transparent opacity-30 pointer-events-none" />
      
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
        {nfts.map((nft) => (
          <div 
            key={`${nft.contract_address}-${nft.token_id}`} 
            className="mb-6 w-full"
          >
            <NFTCard
              name={nft.name}
              imageUrl={nft.image_url}
              contract={nft.contract_address}
              tokenId={nft.token_id}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
} 