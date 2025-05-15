import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type GasStats = {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
};

export function GasStats() {
  const [gasStats, setGasStats] = useState<GasStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGasStats = async () => {
      try {
        const response = await fetch('/api/gas-stats');
        if (!response.ok) throw new Error('Failed to fetch gas stats');
        const data = await response.json();
        setGasStats(data.result);
        setError(null);
      } catch {
        setError('Failed to load gas stats');
      } finally {
        setLoading(false);
      }
    };

    fetchGasStats();
    const interval = setInterval(fetchGasStats, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse bg-black/10 rounded-lg p-4">
        <div className="h-4 bg-yellow-500/20 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-yellow-500/20 rounded w-1/2"></div>
      </div>
    );
  }

  if (error || !gasStats) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/10 rounded-lg p-4 border border-yellow-500/20"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-yellow-400">Gas Prices (Gwei)</span>
        <span className="text-xs text-gray-400">Block #{gasStats.LastBlock}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-xs text-gray-400">Safe</div>
          <div className="text-sm font-bold text-green-400">{gasStats.SafeGasPrice}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400">Standard</div>
          <div className="text-sm font-bold text-yellow-400">{gasStats.ProposeGasPrice}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-400">Fast</div>
          <div className="text-sm font-bold text-red-400">{gasStats.FastGasPrice}</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Base Fee: {parseFloat(gasStats.suggestBaseFee).toFixed(2)} Gwei
      </div>
    </motion.div>
  );
} 