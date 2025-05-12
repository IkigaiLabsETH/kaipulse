'use client';

import { OpenSeaNFT, OpenSeaListing, OpenSeaOffer } from '@/services/opensea/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-6">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-white/60">Current Price</p>
          <p className="text-2xl font-bold text-yellow-400 font-epilogue tracking-tight">
            {currentPrice ? `${currentPrice} ETH` : 'Not listed'}
          </p>
        </div>

        {bestOfferPrice && (
          <div>
            <p className="text-sm text-white/60">Best Offer</p>
            <p className="text-xl font-medium text-white">
              {bestOfferPrice} ETH
            </p>
          </div>
        )}

        <div className="flex gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-[#F7B500] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
            onClick={() => window.open(`https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`, '_blank')}
          >
            View on OpenSea
            <Image 
              src="/opensea-verified.svg" 
              alt="OpenSea Verified" 
              width={20} 
              height={21}
              priority
              className="inline-block"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 