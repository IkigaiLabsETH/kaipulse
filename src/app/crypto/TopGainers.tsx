"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GainerCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

export default function TopGainers() {
  const [coins, setCoins] = useState<GainerCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/top-gainers")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load top gainers");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-yellow-500 text-center py-8">Loading UP ONLY...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center font-epilogue tracking-tight">UP ONLY (24h)</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#18191c] border-[3px] border-[#F7B500] shadow-[5px_5px_0px_0px_#F7B500] flex flex-col items-center p-6 hover:scale-105 transition-transform duration-200"
          >
            <Image src={coin.image} alt={coin.name} width={56} height={56} className="w-14 h-14 mb-3 rounded-full border border-yellow-500 bg-black" />
            <div className="text-yellow-500 font-bold text-lg mb-1 font-epilogue">{coin.name}</div>
            <div className="text-white/80 text-base mb-1 font-satoshi">{coin.symbol}</div>
            <div className="text-xs text-white/50 font-satoshi mb-1">Rank: {coin.market_cap_rank ?? "-"}</div>
            <div className="text-green-500 font-bold text-base font-satoshi">+{coin.price_change_percentage_24h.toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
} 