'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Price {
  symbol: string;
  price: number;
  change24h: number;
}

const formatPrice = (price: number) => {
  // For prices under 100, show 2 decimal places
  // For prices 100 and above, show no decimal places
  return price < 100 
    ? price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const DEFAULT_PRICES: Price[] = [
  { symbol: 'BTC', price: 67000, change24h: 2.5 },
  { symbol: 'MSTR', price: 1500, change24h: 1.8 },
  { symbol: 'MSTY', price: 20.00, change24h: 0 }
];

export default function PriceTicker() {
  const [prices, setPrices] = useState<Price[]>(DEFAULT_PRICES);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Fetch BTC data
        const btcResponse = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h',
          { headers: { 'Accept': 'application/json' } }
        );

        if (btcResponse.ok) {
          const btcData = await btcResponse.json();
          if (btcData && btcData[0]) {
            setPrices(current => 
              current.map(price => 
                price.symbol === 'BTC' 
                  ? {
                      symbol: 'BTC',
                      price: btcData[0].current_price || DEFAULT_PRICES[0].price,
                      change24h: btcData[0].price_change_percentage_24h || DEFAULT_PRICES[0].change24h
                    }
                  : price
              )
            );
          }
        }

        // Fetch MSTR data
        const mstrResponse = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=microstrategy&vs_currencies=usd&include_24hr_change=true',
          { headers: { 'Accept': 'application/json' } }
        );

        if (mstrResponse.ok) {
          const mstrData = await mstrResponse.json();
          if (mstrData && mstrData.microstrategy) {
            setPrices(current => 
              current.map(price => 
                price.symbol === 'MSTR' 
                  ? {
                      symbol: 'MSTR',
                      price: mstrData.microstrategy.usd || DEFAULT_PRICES[1].price,
                      change24h: mstrData.microstrategy.usd_24h_change || DEFAULT_PRICES[1].change24h
                    }
                  : price
              )
            );
          }
        }
      } catch (error) {
        console.error('Error fetching prices:', error);
        // Keep showing default prices on error
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 120000); // Update every 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
      {prices.map((item) => (
        <motion.div
          key={item.symbol}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="text-yellow-400 font-bold">{item.symbol}</div>
          <div className="text-white">
            ${formatPrice(item.price)}
          </div>
          {item.symbol !== 'MSTY' && (
            <div className={`flex items-center ${item.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {item.change24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="ml-1">{Math.abs(item.change24h).toFixed(2)}%</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
} 