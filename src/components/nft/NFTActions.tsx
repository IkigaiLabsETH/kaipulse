'use client';

import { Tag, ShoppingCart, TrendingUp, History } from 'lucide-react';

interface NFTActionsProps {
  contractAddress: string;
  tokenId: string;
  price?: string;
  currency?: string;
  floorPrice?: string;
  lastSalePrice?: string;
}

export function NFTActions({ 
  contractAddress, 
  tokenId, 
  price = "2.5", 
  currency = "ETH",
  floorPrice = "2.1",
  lastSalePrice = "2.8"
}: NFTActionsProps) {
  const handleMakeOffer = () => {
    window.open(`https://opensea.io/assets/${contractAddress}/${tokenId}`, '_blank');
  };

  const handleBuyNow = () => {
    window.open(`https://opensea.io/assets/${contractAddress}/${tokenId}?buyNow=true`, '_blank');
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
      {/* Price Display */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        {/* Current Price */}
        <div className="flex flex-col items-center text-center rounded-lg bg-black/30 px-3 py-2.5">
          <span className="text-neutral-500 text-xs font-medium mb-1">Current Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white">{price}</span>
            <span className="text-sm text-neutral-400">{currency}</span>
          </div>
        </div>

        {/* Floor Price */}
        <div className="flex flex-col items-center text-center rounded-lg bg-black/30 px-3 py-2.5">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp size={12} className="text-neutral-500" />
            <span className="text-neutral-500 text-xs font-medium">Floor</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white">{floorPrice}</span>
            <span className="text-sm text-neutral-400">{currency}</span>
          </div>
        </div>

        {/* Last Sale */}
        <div className="flex flex-col items-center text-center rounded-lg bg-black/30 px-3 py-2.5">
          <div className="flex items-center gap-1 mb-1">
            <History size={12} className="text-neutral-500" />
            <span className="text-neutral-500 text-xs font-medium">Last Sale</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white">{lastSalePrice}</span>
            <span className="text-sm text-neutral-400">{currency}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5">
        {/* Buy Now Button */}
        <button 
          className="w-full group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors"
          onClick={handleBuyNow}
        >
          <ShoppingCart size={18} className="relative" />
          <span className="relative">Buy Now</span>
        </button>

        {/* Make Offer Button */}
        <button 
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-neutral-700 bg-black/30 text-white font-semibold hover:border-yellow-500/50 transition-colors"
          onClick={handleMakeOffer}
        >
          <Tag size={18} />
          <span>Make Offer</span>
        </button>
      </div>
    </div>
  );
} 