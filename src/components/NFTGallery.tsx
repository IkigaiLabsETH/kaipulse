import { Suspense } from 'react';
import { NFT } from '@/lib/nft';
import { NFTMasonryGrid } from './NFTMasonryGrid';

function Skeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-[3/4] bg-gradient-to-b from-yellow-500/5 to-transparent" />
      ))}
    </div>
  );
}

interface NFTGalleryProps {
  nfts: NFT[];
}

export function NFTGallery({ nfts }: NFTGalleryProps) {
  if (nfts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">No NFTs found</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<Skeleton />}>
      <NFTMasonryGrid nfts={nfts.map(nft => ({ ...nft, placeholderColor: '#181818' }))} />
    </Suspense>
  );
} 