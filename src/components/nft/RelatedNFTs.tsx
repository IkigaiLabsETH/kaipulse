'use client';

import { NFTImage } from '@/components/nft/NFTImage';
import Link from 'next/link';

interface FormattedNFT {
  id: string;
  name: string;
  image_url: string | null;
  price: string;
}

interface RelatedNFTsProps {
  nfts: FormattedNFT[];
  slug: string;
}

export function RelatedNFTs({ nfts, slug }: RelatedNFTsProps) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
      <h3 className="text-lg font-semibold text-white mb-4">More from this Collection</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <Link 
            key={nft.id} 
            href={`/collections/${slug}/${nft.id}`}
            className="block group"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#1A1A1A]">
              <NFTImage
                src={nft.image_url}
                alt={nft.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-white group-hover:text-neutral-300">{nft.name}</h3>
              {nft.price !== '—' && (
                <p className="text-sm text-neutral-400">{nft.price} ETH</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 