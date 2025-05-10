'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, TrendingUp, TrendingDown } from 'lucide-react';
import { clientLogger } from '@/utils/clientLogger';
import { formatNumber } from '@/lib/utils';
import PriceTicker from '@/components/AltCoins';

interface AltcoinData {
  [key: string]: {
    price: number;
    change24h: number;
    marketCap: number;
    volume24h: number;
  };
}

// Move altcoins array outside component
const altcoins = [
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK' },
  { id: 'uniswap', name: 'Uniswap', symbol: 'UNI' },
  { id: 'aave', name: 'Aave', symbol: 'AAVE' },
  { id: 'ondo-finance', name: 'Ondo', symbol: 'ONDO' },
  { id: 'ethena', name: 'Ethena', symbol: 'ENA' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'sui', name: 'Sui', symbol: 'SUI' },
  { id: 'hyperliquid', name: 'Hyperliquid', symbol: 'HYPER' },    
  { id: 'berachain-bera', name: 'Berachain', symbol: 'BERA' },
  { id: 'infrafred-bgt', name: 'Infrared BGT', symbol: 'IBGT' },
  { id: 'avalanche-2', name: 'Avalanche', symbol: 'AVAX' },
  { id: 'blockstack', name: 'Stacks', symbol: 'STX' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
  { id: 'pepe', name: 'Pepe', symbol: 'PEPE' },
  { id: 'mog-coin', name: 'Mog', symbol: 'MOG' },
  { id: 'bittensor', name: 'Bittensor', symbol: 'TAO' },
  { id: 'render-token', name: 'Render', symbol: 'RENDER' },
  { id: 'fartcoin', name: 'Fartcoin', symbol: 'FARTCOIN' },
  { id: 'ai16z', name: 'ai16z', symbol: 'AI16Z' },
];

// Custom hook for data fetching with retry logic
const useCryptoData = (pollingInterval = 30000) => {
  const [data, setData] = useState<AltcoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/crypto-prices');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      setLastUpdated(new Date().toLocaleTimeString());
      setRetryCount(0); // Reset retry count on success
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
      clientLogger.error('Error fetching crypto prices:', {
        error,
        message: errorMessage,
        timestamp: new Date().toISOString()
      });
      setError(errorMessage);
      
      // Implement exponential backoff for retries
      if (retryCount < 3) {
        const backoffDelay = Math.min(1000 * Math.pow(2, retryCount), 10000);
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchData();
        }, backoffDelay);
      }
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling interval
    const interval = setInterval(fetchData, pollingInterval);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [fetchData, pollingInterval]);

  return { data, loading, lastUpdated, error };
};

export default function CryptoPage() {
  const { data, loading, lastUpdated, error } = useCryptoData();

  // Memoize the coin cards to prevent unnecessary re-renders
  const coinCards = useMemo(() => (
    altcoins.map((coin) => (
      <Card key={coin.id} className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-medium text-yellow-500">{coin.name}</h3>
            <Coins className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-white">
            {loading ? "..." : `$${(data?.[coin.id]?.price ?? 0).toFixed(6)}`}
          </div>
          {!loading && data?.[coin.id] && (
            <div className={data[coin.id].change24h >= 0 ? "text-green-500" : "text-red-500"}>
              {data[coin.id].change24h >= 0 ? (
                <TrendingUp className="inline-block mr-1" />
              ) : (
                <TrendingDown className="inline-block mr-1" />
              )}
              {data[coin.id].change24h >= 0 ? "+" : ""}{data[coin.id].change24h?.toFixed(2) || "0.00"}% (24h)
            </div>
          )}
          <div className="text-sm text-white/60 mt-2">
            <div>Market Cap: ${loading ? "..." : formatNumber(data?.[coin.id]?.marketCap || 0)}</div>
            <div>Volume: ${loading ? "..." : formatNumber(data?.[coin.id]?.volume24h || 0)}</div>
          </div>
        </CardContent>
      </Card>
    ))
  ), [data, loading]);

  return (
    <div className="min-h-screen bg-black font-satoshi">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <PriceTicker />
          
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-yellow-500">
              Altcoin Market Dashboard
            </h1>
            <div className="text-sm text-white/60">
              {lastUpdated && `Last updated: ${lastUpdated}`}
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-4 text-red-500">
              Error fetching data: {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coinCards}
          </div>

          {/* Summary Card */}
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-yellow-500">Market Overview: Structural Shifts & Institutional Moves</h3>
                <Coins className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">
                  The cryptocurrency market is experiencing unprecedented institutional adoption and structural integration into mainstream finance. Major players like Stripe, Meta, and Robinhood are driving innovation in stablecoins, tokenized assets, and blockchain infrastructure. Meanwhile, the altcoin landscape reveals a cultural shift—one that blends memes, AI, DeFi, and narrative investing into a high-volatility cocktail that&apos;s hard to ignore.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Major Market Moves</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Coinbase acquiring Deribit</li>
                      <li>• Stripe&apos;s global stablecoin push</li>
                      <li>• Meta&apos;s blockchain infrastructure</li>
                      <li>• Robinhood&apos;s crypto expansion</li>
                      <li>• Major TradFi M&A activity</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Market Dynamics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Memecoin cultural integration</li>
                      <li>• AI infrastructure development</li>
                      <li>• DeFi protocol maturation</li>
                      <li>• L1 ecosystem evolution</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Key Innovations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• On-chain stock trading</li>
                      <li>• Stablecoin payment rails</li>
                      <li>• LSDfi infrastructure</li>
                      <li>• Decentralized ML economies</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Market Insights</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Institutional adoption accelerating</li>
                      <li>• Cultural narratives driving innovation</li>
                      <li>• Infrastructure-first approach</li>
                      <li>• Convergence of TradFi and DeFi</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  This isn&apos;t 2021 redux. It&apos;s more meta, more modular, and more memetic. We&apos;re witnessing the convergence of institutional adoption and cultural innovation—where traditional finance meets the edge of crypto, creating unprecedented opportunities for both builders and traders. The market is being reshaped by major structural moves rather than just price action.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
