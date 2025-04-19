'use client';

import Image from 'next/image';

interface RelatedNFTsProps {
  nfts: Array<{
    id: string;
    name: string;
    image_url: string | null;
    price: string;
  }>;
}

export function RelatedNFTs({ nfts }: RelatedNFTsProps) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
      <h3 className="text-lg font-semibold text-white mb-4">More from this Collection</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg relative">
              <Image
                src={nft.image_url || '/images/nft-placeholder.png'}
                alt={nft.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-white truncate">{nft.name}</h3>
              <p className="text-sm text-neutral-400">{nft.price} ETH</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 