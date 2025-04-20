'use client';

import { OpenSeaNFT, OpenSeaListing, OpenSeaOffer } from '@/services/opensea/types';

export interface NFTActionsProps {
  nft: OpenSeaNFT;
  listing: OpenSeaListing | null;
  bestOffer: OpenSeaOffer | null;
}

export function NFTActions({ nft, listing, bestOffer }: NFTActionsProps) {
  const currentPrice = listing?.current_price 
    ? Number(listing.current_price) / 1e18 
    : undefined;

  const bestOfferPrice = bestOffer?.current_price
    ? Number(bestOffer.current_price) / 1e18
    : undefined;

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-neutral-400">Current Price</p>
          <p className="text-2xl font-bold">
            {currentPrice ? `${currentPrice} ETH` : 'Not listed'}
          </p>
        </div>

        {bestOfferPrice && (
          <div>
            <p className="text-sm text-neutral-400">Best Offer</p>
            <p className="text-xl font-medium text-neutral-300">
              {bestOfferPrice} ETH
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl transition-colors"
            onClick={() => window.open(`https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`, '_blank')}
          >
            View on OpenSea
          </button>
        </div>
      </div>
    </div>
  );
} 