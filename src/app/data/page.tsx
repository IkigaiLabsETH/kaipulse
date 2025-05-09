'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, AlertCircle, Network, Coins } from 'lucide-react';
import { clientLogger } from '@/utils/clientLogger';
import { formatNumber } from '@/lib/utils';

interface CryptoData {
  price: {
    usd: number;
    change24h: number;
  };
  network: {
    hashRate: number;
    difficulty: number;
    blockHeight: number;
    avgBlockTime: number;
    avgBlockSize: number;
    totalBTC: number | null;
    marketCap: number | null;
    nextHalving: {
      blocks: number | null;
      estimatedDate: string | null;
    } | null;
    mempoolSize: number;
    mempoolFees: {
      fastestFee: number;
      halfHourFee: number;
      economyFee: number;
    };
    mempoolTxs: number;
    miningRevenue: number | null;
    miningRevenue24h: number | null;
    lightningCapacity: number | null;
    lightningChannels: number | null;
    liquidity: number | null;
  };
  sentiment: {
    fearGreedIndex: number;
    fearGreedValue: string;
  };
  nodes: {
    total: number;
    countries: number;
  };
}

function formatHashRate(hashRate: number | null | undefined): string {
  if (hashRate === null || hashRate === undefined) return "...";
  // Hash rate comes in H/s (hashes per second)
  const eh = hashRate / 1e18; // Convert to EH/s
  if (eh >= 1) return `${eh.toFixed(2)} EH/s`;
  const ph = hashRate / 1e15; // Convert to PH/s
  if (ph >= 1) return `${ph.toFixed(2)} PH/s`;
  const th = hashRate / 1e12; // Convert to TH/s
  return `${th.toFixed(2)} TH/s`;
}

export default function DataPage() {
  const [data, setData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/crypto-data');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Debug log the options data specifically
        clientLogger.info('Options Data Response:', {
          optionsData: result?.network?.optionsData,
          status: response.status,
          ok: response.ok
        });

        // Validate the response data structure
        if (!result || typeof result !== 'object') {
          throw new Error('Invalid response format');
        }

        if (!result.network?.optionsData) {
          clientLogger.warn('Missing options data in response:', result);
        }

        setData(result);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
        clientLogger.error('Error fetching crypto data:', {
          error,
          message: errorMessage,
          timestamp: new Date().toISOString()
        });
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Set up polling interval
    const interval = setInterval(fetchData, 30000); // Poll every 30 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Log current state for debugging
  clientLogger.info('Current state:', { loading, data, error });

  return (
    <div className="min-h-screen bg-black font-satoshi">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-yellow-500">
              Bitcoin Network Dashboard
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
            {/* Bitcoin Price */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Bitcoin Price</h3>
                  <Bitcoin className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  ${loading ? "..." : formatNumber(data?.price?.usd || 0)}
                </div>
                {!loading && data && (
                  <div className={data.price.change24h >= 0 ? "text-green-500" : "text-red-500"}>
                    {data.price.change24h >= 0 ? "+" : ""}{data.price.change24h?.toFixed(2) || "0.00"}% (24h)
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Hash Rate */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Hash Rate</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : formatHashRate(data?.network?.hashRate)}
                </div>
              </CardContent>
            </Card>

            {/* Network Difficulty */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Network Difficulty</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : `${((data?.network?.difficulty || 0) / 1e12).toFixed(2)}T`}
                </div>
                <div className="text-sm text-white/60 mt-1">
                  Hash Rate: {loading ? "..." : formatHashRate(data?.network?.hashRate)}
                </div>
              </CardContent>
            </Card>

            {/* Block Height */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Block Height</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : formatNumber(data?.network?.blockHeight || 0)}
                </div>
              </CardContent>
            </Card>

            {/* Block Time */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Block Time</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.avgBlockTime ? `${data.network.avgBlockTime.toFixed(1)} min` : "..."}
                </div>
              </CardContent>
            </Card>

            {/* Block Size */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Block Size</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.avgBlockSize ? `${(data.network.avgBlockSize / 1024).toFixed(2)} MB` : "..."}
                </div>
              </CardContent>
            </Card>

            {/* Mempool Size */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Mempool Size</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.mempoolSize 
                    ? `${(data.network.mempoolSize / 1024 / 1024).toFixed(2)} MB` 
                    : "..."
                  }
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {loading ? "..." : data?.network?.mempoolTxs 
                    ? `${formatNumber(data.network.mempoolTxs)} transactions` 
                    : "..."
                  }
                </div>
              </CardContent>
            </Card>

            {/* Mempool Fees */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Transaction Fees</h3>
                  <Coins className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.mempoolFees?.fastestFee 
                    ? `${data.network.mempoolFees.fastestFee} sat/vB` 
                    : "..."
                  }
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {!loading && data?.network?.mempoolFees && (
                    <>
                      Medium: {data.network.mempoolFees.halfHourFee} sat/vB
                      <br />
                      Economy: {data.network.mempoolFees.economyFee} sat/vB
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Mining Revenue */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Mining Revenue</h3>
                  <Coins className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.miningRevenue 
                    ? `$${formatNumber(data.network.miningRevenue)}` 
                    : "..."
                  }
                </div>
                <div className="text-sm text-white/60 mt-1">
                  24h: {loading ? "..." : data?.network?.miningRevenue24h 
                    ? `$${formatNumber(data.network.miningRevenue24h)}` 
                    : "..."
                  }
                </div>
              </CardContent>
            </Card>

            {/* Total BTC Supply */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Total Supply</h3>
                  <Bitcoin className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.totalBTC 
                    ? `${formatNumber(data.network.totalBTC)} BTC` 
                    : "..."
                  }
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {loading ? "..." : data?.network?.marketCap 
                    ? `$${data.network.marketCap.toLocaleString('en-US', { maximumFractionDigits: 0 })}` 
                    : "..."
                  }
                </div>
              </CardContent>
            </Card>

            {/* Fear & Greed */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Fear & Greed</h3>
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.sentiment?.fearGreedIndex ? data.sentiment.fearGreedIndex : "..."}
                </div>
                {!loading && data?.sentiment?.fearGreedValue && (
                  <div className="text-gray-400">{data.sentiment.fearGreedValue}</div>
                )}
              </CardContent>
            </Card>

            {/* Market Dominance */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Market Dominance</h3>
                  <Bitcoin className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {loading ? "..." : data?.network?.marketCap 
                    ? `${((data.network.marketCap / (data.network.marketCap + 1e12)) * 100).toFixed(1)}%` 
                    : "..."
                  }
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {loading ? "..." : data?.network?.marketCap 
                    ? `$${data.network.marketCap.toLocaleString('en-US', { maximumFractionDigits: 0 })}` 
                    : "..."
                  }
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary Card */}
          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-yellow-500">Bitcoin Network Summary</h3>
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="space-y-4 text-white/80">
                <p className="text-sm">
                  Bitcoin has evolved from a niche experiment into a mainstream digital asset, often dubbed &quot;digital gold.&quot; 
                  Its hard-capped supply and decentralized network give it unique properties of scarcity and resilience, 
                  driving an investment thesis that Bitcoin can serve as both a growth asset and an inflation hedge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Key Strengths</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Fixed supply of 21 million coins</li>
                      <li>• Decentralized and censorship-resistant</li>
                      <li>• Global 24/7 trading</li>
                      <li>• Growing institutional adoption</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-yellow-500 font-medium mb-2">Market Outlook</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Increasing institutional participation</li>
                      <li>• Maturing financial infrastructure</li>
                      <li>• Growing regulatory clarity</li>
                      <li>• Expanding use cases</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm italic text-white/60">
                  Note: Following the 2024 halving, block rewards were reduced from 6.25 to 3.125 BTC. 
                  This latest halving has further tightened Bitcoin&apos;s supply issuance, with the next halving 
                  expected in 2028, which will reduce rewards to 1.5625 BTC per block.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 