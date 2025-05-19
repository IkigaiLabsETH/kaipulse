import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';

/**
 * Types for CoinGecko global API response
 */
interface CoinGeckoGlobalData {
  total_market_cap: { [currency: string]: number };
  total_volume: { [currency: string]: number };
  market_cap_percentage: { [coin: string]: number };
}
interface CoinGeckoGlobalResponse {
  data: CoinGeckoGlobalData;
}

/**
 * Dashboard card for global crypto market stats using CoinGecko API.
 */
export default function GlobalMarketDashboardCard() {
  const [global, setGlobal] = useState<CoinGeckoGlobalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const globalRes = await fetch('/api/global-market');
        if (!globalRes.ok) throw new Error('Failed to fetch market data');
        const globalData: CoinGeckoGlobalResponse = await globalRes.json();
        setGlobal(globalData.data);
      } catch {
        setError('Failed to load market stats');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <Card className="bg-[#1c1f26] border-2 border-yellow-500">
        <CardContent className="p-4 text-yellow-500">Loading global market stats...</CardContent>
      </Card>
    );
  }
  if (error) {
    return (
      <Card className="bg-[#1c1f26] border-2 border-red-500">
        <CardContent className="p-4 text-red-500">{error}</CardContent>
      </Card>
    );
  }

  // Format numbers
  const formatUSD = (n: number | null | undefined) =>
    typeof n === 'number' && !isNaN(n)
      ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
      : 'N/A';

  const formatPct = (n: number | null | undefined) =>
    typeof n === 'number' && !isNaN(n)
      ? n.toFixed(2) + '%'
      : 'N/A';

  return (
    <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <CardContent className="p-4 grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-yellow-500">Total Market Cap</div>
          <div className="text-lg font-bold text-white">{formatUSD(global?.total_market_cap?.usd ?? 0)}</div>
        </div>
        <div>
          <div className="text-xs text-yellow-500">24h Volume</div>
          <div className="text-lg font-bold text-white">{formatUSD(global?.total_volume?.usd ?? 0)}</div>
        </div>
        <div>
          <div className="text-xs text-yellow-500">BTC Dominance</div>
          <div className="text-lg font-bold text-white">{formatPct(global?.market_cap_percentage?.btc ?? 0)}</div>
        </div>
        <div>
          <div className="text-xs text-yellow-500">ETH Dominance</div>
          <div className="text-lg font-bold text-white">{formatPct(global?.market_cap_percentage?.eth ?? 0)}</div>
        </div>
      </CardContent>
    </Card>
  );
} 