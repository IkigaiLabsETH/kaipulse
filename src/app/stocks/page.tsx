"use client";

import StockMarket from "@/components/StockMarket";
import CryptoRelatedStocks from "@/components/stocks/CryptoRelatedStocks";
import InnovatingEquities from "@/components/stocks/InnovatingEquities";
import HighGrowthWatchlist from "@/components/stocks/HighGrowthWatchlist";
import BitcoinMiningSector from "@/components/stocks/BitcoinMiningSector";

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
              Crypto-Related Equities
            </p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Tickers to Explore
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
                Analysis for 2025
              </p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          <div className="relative w-full mx-auto -mt-8">
            <StockMarket />
          </div>
        
          <CryptoRelatedStocks />
          
          <InnovatingEquities />
          
          <HighGrowthWatchlist />
          
          <BitcoinMiningSector />

        </div>
      </div>
    </div>
  );
}