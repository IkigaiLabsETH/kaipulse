'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Activity, AlertCircle, Network } from 'lucide-react';
import { clientLogger } from '@/utils/clientLogger';
import { cn } from '@/lib/utils';

interface CryptoData {
  price: {
    usd: number;
    change24h: number;
  };
  network: {
    hashRate: number;
    difficulty: number;
    mempool: {
      fastestFee: number;
      halfHourFee: number;
      hourFee: number;
    };
  };
  sentiment: {
    value: number;
    classification: string;
  };
  nodes: {
    total: number;
    latestTimestamp: string;
  };
}

type ApiError = Record<string, unknown>;

export default function DataPage() {
  const [data, setData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/crypto-data');
        const result = await response.json();
        setData(result);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (error) {
        const apiError: ApiError = {
          message: error instanceof Error ? error.message : 'Unknown error occurred',
          status: error instanceof Response ? error.status : undefined,
          timestamp: new Date().toISOString()
        };
        clientLogger.error('Error fetching crypto data:', apiError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number | undefined | null): string => {
    if (num === undefined || num === null) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatLargeNumber = (num: number | undefined | null): string => {
    if (num === undefined || num === null) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  };

  const getFearGreedColor = (index: number | undefined | null): string => {
    if (index === undefined || index === null) return 'text-white';
    if (index >= 75) return 'text-green-500';
    if (index >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-black font-satoshi">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-yellow-500">
              Real-Time Crypto Data
            </h1>
            <div className="text-sm text-white/60">
              {lastUpdated && `Last updated: ${lastUpdated}`}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bitcoin Price */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Bitcoin Price</h3>
                  <Bitcoin className="h-6 w-6 text-yellow-500" />
                </div>
                <div className={cn(
                  "text-2xl font-bold",
                  loading ? "text-white/20" : "text-white"
                )}>
                  {loading ? "Loading..." : (data ? formatNumber(data.price.usd) : 'N/A')}
                </div>
                {!loading && data?.price.change24h && (
                  <div className={cn(
                    "text-sm mt-2",
                    data.price.change24h >= 0 ? "text-green-500" : "text-red-500"
                  )}>
                    {data.price.change24h >= 0 ? '↑' : '↓'} {Math.abs(data.price.change24h).toFixed(2)}%
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Network Stats */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Hash Rate</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className={cn(
                  "text-2xl font-bold",
                  loading ? "text-white/20" : "text-white"
                )}>
                  {loading ? "Loading..." : (data ? formatLargeNumber(data.network.hashRate) + ' TH/s' : 'N/A')}
                </div>
              </CardContent>
            </Card>

            {/* Fear & Greed Index */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Fear & Greed Index</h3>
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <div className={cn(
                    "text-2xl font-bold",
                    loading ? "text-white/20" : data ? getFearGreedColor(data.sentiment.value) : "text-white"
                  )}>
                    {loading ? "Loading..." : (data ? data.sentiment.value : 'N/A')}
                  </div>
                  <div className="text-sm text-white/60">
                    {loading ? "Loading..." : (data ? data.sentiment.classification : 'N/A')}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Network Fees */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Network Fees</h3>
                  <Activity className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/60">Fast</span>
                    <span className="text-white">{loading ? "..." : (data ? `${data.network.mempool.fastestFee} sat/vB` : 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Medium</span>
                    <span className="text-white">{loading ? "..." : (data ? `${data.network.mempool.halfHourFee} sat/vB` : 'N/A')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Slow</span>
                    <span className="text-white">{loading ? "..." : (data ? `${data.network.mempool.hourFee} sat/vB` : 'N/A')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Node Count */}
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-yellow-500">Active Nodes</h3>
                  <Network className="h-6 w-6 text-yellow-500" />
                </div>
                <div className={cn(
                  "text-2xl font-bold",
                  loading ? "text-white/20" : "text-white"
                )}>
                  {loading ? "Loading..." : (data ? formatLargeNumber(data.nodes.total) : 'N/A')}
                </div>
              </CardContent>
            </Card>

          </div>
        </motion.div>
      </div>
    </div>
  );
} 