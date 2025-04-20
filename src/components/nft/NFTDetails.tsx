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
    <div className="bg-[#1A1A1A] rounded-2xl p-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">{nft.name || `${collection.name} #${nft.identifier}`}</h1>
          <p className="text-neutral-400">{collection.name}</p>
        </div>

        {nft.description && (
          <p className="text-neutral-300 whitespace-pre-wrap">{nft.description}</p>
        )}

        <div className="grid grid-cols-2 gap-4 pt-4">
          {nft.creator && (
            <div>
              <p className="text-sm text-neutral-400">Creator</p>
              <p className="text-sm font-medium truncate">{nft.creator}</p>
            </div>
          )}
          
          {nft.owners?.[0] && (
            <div>
              <p className="text-sm text-neutral-400">Owner</p>
              <p className="text-sm font-medium truncate">{nft.owners[0]}</p>
            </div>
          )}

          <div>
            <p className="text-sm text-neutral-400">Contract Address</p>
            <p className="text-sm font-medium truncate">{nft.contract}</p>
          </div>

          <div>
            <p className="text-sm text-neutral-400">Token ID</p>
            <p className="text-sm font-medium truncate">{nft.identifier}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 