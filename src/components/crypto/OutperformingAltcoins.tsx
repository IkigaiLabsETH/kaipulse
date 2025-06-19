'use client';

import useSWR from 'swr';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
  market_cap_rank: number;
}

export default function OutperformingAltcoins() {
  const { data: coins, error } = useSWR<Coin[]>('/api/coingecko/outperforming-btc', fetcher, {
    refreshInterval: 60000, // Refresh every 60 seconds
  });

  if (error) {
    return (
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center text-red-500">
        Failed to load data. Please try again later.
      </div>
    );
  }

  if (!coins) {
    return (
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Altcoins Outperforming Bitcoin (24h)
      </h3>
      {coins.length === 0 ? (
        <p className="text-center text-gray-400">Bitcoin is outperforming all top 100 altcoins in the last 24 hours.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-yellow-500/30">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4 text-right">Price</th>
                <th className="py-3 px-4 text-right">24h %</th>
                <th className="py-3 px-4 text-right">7d %</th>
                <th className="py-3 px-4 text-right">30d %</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id} className="border-b border-gray-800 hover:bg-black/20">
                  <td className="py-4 px-4">{coin.market_cap_rank}</td>
                  <td className="py-4 px-4 flex items-center">
                    <Image src={coin.image} alt={coin.name} width={24} height={24} className="mr-3 rounded-full" />
                    <div>
                        <p className="font-bold">{coin.name}</p>
                        <p className="text-xs text-gray-400 uppercase">{coin.symbol}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-mono">${coin.current_price.toLocaleString()}</td>
                  <td className={cn('py-4 px-4 text-right font-mono', {
                      'text-green-500': coin.price_change_percentage_24h > 0,
                      'text-red-500': coin.price_change_percentage_24h < 0,
                  })}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className={cn('py-4 px-4 text-right font-mono', {
                      'text-green-500': (coin.price_change_percentage_7d_in_currency ?? 0) > 0,
                      'text-red-500': (coin.price_change_percentage_7d_in_currency ?? 0) < 0,
                  })}>
                    {coin.price_change_percentage_7d_in_currency?.toFixed(2) ?? 'N/A'}%
                  </td>
                  <td className={cn('py-4 px-4 text-right font-mono', {
                      'text-green-500': (coin.price_change_percentage_30d_in_currency ?? 0) > 0,
                      'text-red-500': (coin.price_change_percentage_30d_in_currency ?? 0) < 0,
                  })}>
                    {coin.price_change_percentage_30d_in_currency?.toFixed(2) ?? 'N/A'}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 