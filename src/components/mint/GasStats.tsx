import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type GasStats = {
  LastBlock: string;
  ProposeGasPrice: string;
};

const MINT_GAS_LIMIT = 200000; // Standard gas limit for NFT minting

export function GasStats() {
  const [gasStats, setGasStats] = useState<GasStats | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gasResponse, priceResponse] = await Promise.all([
          fetch('/api/gas-stats'),
          fetch('/api/eth-price')
        ]);
        
        if (!gasResponse.ok || !priceResponse.ok) return;
        
        const [gasData, priceData] = await Promise.all([
          gasResponse.json(),
          priceResponse.json()
        ]);
        
        setGasStats(gasData.result);
        setEthPrice(priceData.price);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const calculateCost = (gwei: string): string => {
    if (!ethPrice) return '...';
    const gweiNum = parseFloat(gwei);
    const ethCost = (gweiNum * MINT_GAS_LIMIT) / 1e9;
    const usdCost = ethCost * ethPrice;
    return usdCost.toFixed(2);
  };

  if (loading || !gasStats) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-yellow-500/20 rounded w-3/4"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-yellow-400">Gas Fee</span>
        <span className="text-sm font-bold text-yellow-400">${calculateCost(gasStats.ProposeGasPrice)}</span>
      </div>
    </motion.div>
  );
} 