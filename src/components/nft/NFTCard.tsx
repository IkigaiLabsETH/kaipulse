import Image from 'next/image';
import Link from 'next/link';
import { OpenSeaNFT } from '@/services/opensea/types';

interface NFTCardProps {
  nft: OpenSeaNFT;
  collectionSlug: string;
}

export function NFTCard({ nft, collectionSlug }: NFTCardProps) {
  return (
    <Link href={`/collections/${collectionSlug}/${nft.identifier}`}>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-yellow-500 bg-[#1c1f26] shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-800">
          <Image
            src={nft.image_url}
            alt={nft.name || `NFT #${nft.identifier}`}
            fill
            className="object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="text-lg font-bold text-white font-epilogue">
            {nft.name || `#${nft.identifier}`}
          </h3>

          {nft.description && (
            <p className="text-sm text-gray-400 line-clamp-2 font-satoshi">
              {nft.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
} 