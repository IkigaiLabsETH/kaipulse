"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoserCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

export default function TopLosers() {
  const [coins, setCoins] = useState<LoserCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/top-losers")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load top losers");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-yellow-500 text-center py-8">Loading DOWN BAD...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="my-4 sm:my-8">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6 text-center font-epilogue tracking-tight">
        DOWN BAD (24h)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#18191c] border-[2px] sm:border-[3px] border-[#F7B500] shadow-[3px_3px_0px_0px_#F7B500] sm:shadow-[5px_5px_0px_0px_#F7B500] flex flex-col items-center p-3 sm:p-4 hover:scale-[1.02] transition-transform duration-200 rounded-lg"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3">
              <Image 
                src={coin.image} 
                alt={coin.name} 
                fill
                className="rounded-full border border-yellow-500 bg-black object-cover" 
              />
            </div>
            <div className="text-yellow-500 font-bold text-sm sm:text-base mb-1 font-epilogue">
              {coin.name}
            </div>
            <div className="text-white/80 text-xs sm:text-sm mb-1 font-satoshi">
              {coin.symbol}
            </div>
            <div className="text-[10px] sm:text-xs text-white/50 font-satoshi mb-1">
              Rank: {coin.market_cap_rank ?? "-"}
            </div>
            <div className="text-red-500 font-bold text-xs sm:text-sm font-satoshi">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 