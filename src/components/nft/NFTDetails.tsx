'use client';

import { OpenSeaNFT } from '@/services/opensea/types';

export interface NFTDetailsProps {
  nft: OpenSeaNFT;
  collection: {
    name: string;
    slug: string;
  };
}

export function NFTDetails({ nft, collection }: NFTDetailsProps) {
  return (
    <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold font-epilogue tracking-tight text-yellow-400">{nft.name || `${collection.name} #${nft.identifier}`}</h1>
          <p className="text-white/70">{collection.name}</p>
        </div>

        {nft.description && (
          <p className="text-white/80 whitespace-pre-wrap">{nft.description}</p>
        )}

        <div className="grid grid-cols-2 gap-4 pt-4">
          {nft.creator && (
            <div>
              <p className="text-sm text-white/60">Creator</p>
              <p className="text-sm font-medium truncate text-white">
                {nft.creator.username || nft.creator.address}
              </p>
            </div>
          )}
          
          {nft.owners?.[0] && (
            <div>
              <p className="text-sm text-white/60">Owner</p>
              <p className="text-sm font-medium truncate text-white">
                {nft.owners[0].address}
                {nft.owners[0].quantity > 1 && ` (${nft.owners[0].quantity})`}
              </p>
            </div>
          )}

          <div>
            <p className="text-sm text-white/60">Contract Address</p>
            <p className="text-sm font-medium truncate text-white">{nft.contract}</p>
          </div>

          <div>
            <p className="text-sm text-white/60">Token ID</p>
            <p className="text-sm font-medium truncate text-white">{nft.identifier}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 