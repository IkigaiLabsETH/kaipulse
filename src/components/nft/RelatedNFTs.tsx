'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Grid2X2 } from 'lucide-react';
import { ImageIcon } from 'lucide-react';

interface RelatedNFT {
  id: string;
  name: string;
  image_url: string | null;
  price?: string;
}

interface RelatedNFTsProps {
  collectionSlug: string;
  nfts: RelatedNFT[];
}

export function RelatedNFTs({ collectionSlug, nfts }: RelatedNFTsProps) {
  return (
    <div className="rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
      <div className="p-6 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Grid2X2 size={20} className="text-yellow-500" />
          <h2 className="text-xl font-bold text-white">More from this Collection</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {nfts.map((nft) => (
            <Link
              key={nft.id}
              href={`/collections/${collectionSlug}/${nft.id}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-yellow-500/10 group-hover:border-yellow-500 transition-colors">
                {nft.image_url ? (
                  <Image
                    src={nft.image_url}
                    alt={nft.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                    <ImageIcon size={32} className="text-neutral-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-medium truncate text-sm">
                    {nft.name}
                  </p>
                  {nft.price && (
                    <p className="text-yellow-500 font-mono text-sm">
                      {nft.price} Ξ
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 