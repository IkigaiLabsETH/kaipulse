'use client';

import { TrendingUp } from 'lucide-react';
import { OpenSeaNFT } from '@/services/opensea/types';

export interface NFTActionsProps {
  contractAddress: string;
  tokenId: string;
  nft: OpenSeaNFT;
}

export function NFTActions({ 
  contractAddress, 
  tokenId,
  nft
}: NFTActionsProps) {
  const handleMakeOffer = () => {
    window.open(`https://opensea.io/assets/${contractAddress}/${tokenId}`, '_blank');
  };

  const handleBuyNow = () => {
    window.open(`https://opensea.io/assets/${contractAddress}/${tokenId}?buyNow=true`, '_blank');
  };

  // Get price information from the NFT data
  const currentPrice = nft.price?.currentPrice;
  const lastSalePrice = nft.price?.lastSale?.price;
  const currency = nft.price?.paymentToken?.symbol || 'ETH';

  return (
    <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
      {/* Price Display */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {/* Current Price */}
        <div className="flex flex-col items-center text-center rounded-lg bg-black/30 px-3 py-2.5">
          <span className="text-neutral-500 text-xs font-medium mb-1">Current Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white">
              {currentPrice ? currentPrice.toFixed(3) : '—'}
            </span>
            <span className="text-sm text-neutral-400">{currency}</span>
          </div>
        </div>

        {/* Last Sale */}
        <div className="flex flex-col items-center text-center rounded-lg bg-black/30 px-3 py-2.5">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp size={12} className="text-neutral-500" />
            <span className="text-neutral-500 text-xs font-medium">Last Sale</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white">
              {lastSalePrice ? lastSalePrice.toFixed(3) : '—'}
            </span>
            <span className="text-sm text-neutral-400">{currency}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleBuyNow}
          className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Buy Now
        </button>
        <button
          onClick={handleMakeOffer}
          className="w-full px-4 py-3 text-sm font-semibold text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Make Offer
        </button>
      </div>
    </div>
  );
} 