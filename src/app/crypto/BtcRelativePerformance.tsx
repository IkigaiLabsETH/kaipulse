"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BtcRelativeCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_7d: number;
  btc_relative_performance: number;
}

export default function BtcRelativePerformance() {
  const [coins, setCoins] = useState<BtcRelativeCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/btc-relative-performance")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load BTC relative performance");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-yellow-500 text-center py-8">Loading BTC Relative Performance...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="my-8 sm:my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#18191c] border-[2px] sm:border-[3px] border-[#F7B500] shadow-[3px_3px_0px_0px_#F7B500] sm:shadow-[5px_5px_0px_0px_#F7B500] flex flex-col items-center p-4 sm:p-6 hover:scale-105 transition-transform duration-200"
          >
            <Image 
              src={coin.image} 
              alt={coin.name} 
              width={48} 
              height={48} 
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 rounded-full border border-yellow-500 bg-black" 
            />
            <div className="text-yellow-500 font-bold text-base sm:text-lg mb-1 font-epilogue">
              {coin.name}
            </div>
            <div className="text-white/80 text-sm sm:text-base mb-1 font-satoshi">
              {coin.symbol}
            </div>
            <div className="text-xs text-white/50 font-satoshi mb-1">
              Rank: {coin.market_cap_rank ?? "-"}
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-green-500 font-bold text-sm sm:text-base font-satoshi">
                +{coin.btc_relative_performance.toFixed(2)}% vs BTC
              </div>
              <div className="text-white/60 text-xs font-satoshi">
                {coin.price_change_percentage_7d.toFixed(2)}% 7d
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 