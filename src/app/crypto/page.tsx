'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Coins } from 'lucide-react';
import { clientLogger } from '@/utils/clientLogger';
import PriceTicker from '@/components/AltCoins';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TrendingAltcoins from './TrendingAltcoins';
import TopGainers from './TopGainers';
import TopLosers from './TopLosers';

interface AltcoinData {
  [key: string]: {
    price: number;
    change24h: number;
    marketCap: number;
    volume24h: number;
  };
}

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
  const { error, lastUpdated } = useCryptoData();

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

          {/* Removed ticker price cards grid */}

          {/* DOWN BAD Section */}
          <TopLosers />

          {/* UP ONLY Section */}
          <TopGainers />

          {/* Trending Altcoins Section */}
          <TrendingAltcoins />

          {/* Stunning Navigation Buttons - now directly under the chart */}
          <div className="w-full max-w-[90rem] mx-auto flex flex-wrap justify-center gap-8 mt-12 mb-12">
            <Link href="/eth" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="relative w-full gap-3 font-semibold text-base py-4 sm:py-6 bg-gradient-to-r from-black via-zinc-900 to-black hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500] text-[#F7B500] hover:text-black transition-all duration-300 ease-out border border-[#F7B500] shadow-[5px_5px_0px_0px_#F7B500] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] disabled:opacity-70 disabled:cursor-not-allowed rounded-md text-2xl font-epilogue tracking-tight"
              >
                Ethereum (ETH)
              </Button>
            </Link>
            <Link href="/sui" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="relative w-full gap-3 font-semibold text-base py-4 sm:py-6 bg-gradient-to-r from-black via-zinc-900 to-black hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500] text-[#F7B500] hover:text-black transition-all duration-300 ease-out border border-[#F7B500] shadow-[5px_5px_0px_0px_#F7B500] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] disabled:opacity-70 disabled:cursor-not-allowed rounded-md text-2xl font-epilogue tracking-tight"
              >
                Sui (SUI)
              </Button>
            </Link>
            <Link href="/sol" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="relative w-full gap-3 font-semibold text-base py-4 sm:py-6 bg-gradient-to-r from-black via-zinc-900 to-black hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500] text-[#F7B500] hover:text-black transition-all duration-300 ease-out border border-[#F7B500] shadow-[5px_5px_0px_0px_#F7B500] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] disabled:opacity-70 disabled:cursor-not-allowed rounded-md text-2xl font-epilogue tracking-tight"
              >
                Solana (SOL)
              </Button>
            </Link>
            <Link href="/bera" className="w-full sm:w-auto flex-1">
              <Button
                size="lg"
                className="relative w-full gap-3 font-semibold text-base py-4 sm:py-6 bg-gradient-to-r from-black via-zinc-900 to-black hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500] text-[#F7B500] hover:text-black transition-all duration-300 ease-out border border-[#F7B500] shadow-[5px_5px_0px_0px_#F7B500] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] disabled:opacity-70 disabled:cursor-not-allowed rounded-md text-2xl font-epilogue tracking-tight"
              >
                Berachain (BERA)
              </Button>
            </Link>
          </div>
                    {/* Summary Card */}
                    <Card className="bg-[#18191c] border-[3px] border-yellow-500 w-full max-w-[90rem] mx-auto shadow-[0_0_0_4px_rgba(247,181,0,0.7),0_8px_32px_0_rgba(247,181,0,0.18)]">
            <CardContent className="p-10 md:p-14">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl md:text-4xl font-epilogue font-bold text-yellow-500 tracking-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
                  Market Overview: <span className="text-white">Structural Shifts & Institutional Moves</span>
                </h3>
                <Coins className="h-10 w-10 text-yellow-500" />
              </div>
              <div className="space-y-8 text-white/90">
                <p className="text-lg md:text-xl font-satoshi">
                  The cryptocurrency market is experiencing <span className="text-yellow-400 font-bold font-boska">unprecedented institutional adoption</span> and structural integration into mainstream finance. Major players like <span className="text-yellow-400 font-bold font-boska">Stripe, Meta, and Robinhood</span> are driving innovation in stablecoins, tokenized assets, and blockchain infrastructure. Meanwhile, the altcoin landscape reveals a cultural shift—one that blends <span className="text-yellow-400 font-bold font-boska">memes, AI, DeFi, and narrative investing</span> into a high-volatility cocktail that&apos;s hard to ignore.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-black/30 p-6 rounded-xl">
                    <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">Major Market Moves</h4>
                    <ul className="text-lg font-satoshi space-y-2">
                      <li>• Coinbase acquiring Deribit</li>
                      <li>• Stripe&apos;s global stablecoin push</li>
                      <li>• Meta&apos;s blockchain infrastructure</li>
                      <li>• Robinhood&apos;s crypto expansion</li>
                      <li>• Major TradFi M&A activity</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-6 rounded-xl">
                    <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">Market Dynamics</h4>
                    <ul className="text-lg font-satoshi space-y-2">
                      <li>• Memecoin cultural integration</li>
                      <li>• AI infrastructure development</li>
                      <li>• DeFi protocol maturation</li>
                      <li>• L1 ecosystem evolution</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div className="bg-black/30 p-6 rounded-xl">
                    <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">Key Innovations</h4>
                    <ul className="text-lg font-satoshi space-y-2">
                      <li>• On-chain stock trading</li>
                      <li>• Stablecoin payment rails</li>
                      <li>• LSDfi infrastructure</li>
                      <li>• Decentralized ML economies</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-6 rounded-xl">
                    <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">Market Insights</h4>
                    <ul className="text-lg font-satoshi space-y-2">
                      <li>• Institutional adoption accelerating</li>
                      <li>• Cultural narratives driving innovation</li>
                      <li>• Infrastructure-first approach</li>
                      <li>• Convergence of TradFi and DeFi</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg md:text-xl font-satoshi mt-6">
                  <span className="font-epilogue text-yellow-400 font-bold">This isn&apos;t 2021 redux.</span> It&apos;s more meta, more modular, and more memetic. We&apos;re witnessing the convergence of institutional adoption and cultural innovation—where traditional finance meets the edge of crypto, creating unprecedented opportunities for both builders and traders. The market is being reshaped by major structural moves rather than just price action.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
