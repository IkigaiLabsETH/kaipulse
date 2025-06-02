'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MarketMetrics {
  price: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
  timestamp: number;
}

export default function MaxPain() {
  const [showHodl, setShowHodl] = useState(true);
  const { metrics, loading, error } = useBitcoinData();

  // Forward-looking years and projections (2024–2040)
  const futureLabels = [
    '2024', '2025', '2026', '2027', '2028', '2029', '2030',
    '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040'
  ];
  // Use $100,000 as the current price for 2024
  const currentPrice = 100000;
  // Base scenario: cyclical, exponential growth
  const base = [
    currentPrice, // 2024
    250000, // 2025 (top)
    62500,  // 2026 (75% drawdown)
    90000,  // 2027 (recovery)
    120000, // 2028
    180000, // 2029
    500000, // 2030 (top)
    125000, // 2031 (75% drawdown)
    180000, // 2032 (recovery)
    250000, // 2033
    350000, // 2034
    1000000, // 2035 (top)
    250000, // 2036 (75% drawdown)
    350000, // 2037 (recovery)
    500000, // 2038
    1200000, // 2039
    2000000, // 2040 (top)
  ];
  const optimistic = [
    currentPrice,
    400000, // 2025 (top)
    140000, // 2026 (65% drawdown)
    200000, // 2027 (recovery)
    300000, // 2028
    400000, // 2029
    1000000, // 2030 (top)
    350000, // 2031 (65% drawdown)
    500000, // 2032 (recovery)
    700000, // 2033
    1000000, // 2034
    2500000, // 2035 (top)
    875000, // 2036 (65% drawdown)
    1200000, // 2037 (recovery)
    1800000, // 2038
    3500000, // 2039
    5000000, // 2040 (top)
  ];
  const pessimistic = [
    currentPrice,
    180000, // 2025 (top)
    36000,  // 2026 (80% drawdown)
    50000,  // 2027 (recovery)
    70000,  // 2028
    100000, // 2029
    300000, // 2030 (top)
    60000,  // 2031 (80% drawdown)
    90000,  // 2032 (recovery)
    120000, // 2033
    180000, // 2034
    600000, // 2035 (top)
    120000, // 2036 (80% drawdown)
    180000, // 2037 (recovery)
    250000, // 2038
    800000, // 2039
    1000000, // 2040 (top)
  ];

  // HODL strategies (8.1%, 14.5%, 36% CAGR from current price)
  const hodlStrategy81 = futureLabels.map((_, index) => currentPrice * Math.pow(1.081, index));
  const hodlStrategy145 = futureLabels.map((_, index) => currentPrice * Math.pow(1.145, index));
  const hodlStrategy36 = futureLabels.map((_, index) => currentPrice * Math.pow(1.36, index));

  const data = {
    labels: futureLabels,
    datasets: [
      {
        label: 'Base Scenario',
        data: base,
        borderColor: 'rgba(255, 165, 0, 0.8)',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        pointRadius: 4,
        tension: 0.3,
      },
      {
        label: 'Optimistic Scenario',
        data: optimistic,
        borderColor: 'rgba(0, 255, 0, 0.8)',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        pointRadius: 4,
        tension: 0.3,
      },
      {
        label: 'Pessimistic Scenario',
        data: pessimistic,
        borderColor: 'rgba(255, 0, 0, 0.8)',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        pointRadius: 4,
        tension: 0.3,
      },
      ...(showHodl ? [
        {
          label: 'HODL (8.1% annualized)',
          data: hodlStrategy81,
          borderColor: 'rgba(0, 255, 255, 0.8)',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          pointRadius: 0,
          tension: 0.3,
          borderDash: [2, 4],
        },
        {
          label: 'HODL (14.5% annualized)',
          data: hodlStrategy145,
          borderColor: 'rgba(255, 0, 255, 0.8)',
          backgroundColor: 'rgba(255, 0, 255, 0.1)',
          pointRadius: 0,
          tension: 0.3,
          borderDash: [6, 6],
        },
        {
          label: 'HODL (36% annualized)',
          data: hodlStrategy36,
          borderColor: 'rgba(255, 255, 255, 0.8)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          pointRadius: 0,
          tension: 0.3,
          borderDash: [5, 5],
        },
      ] : []),
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bitcoin Price Strategies Comparison',
      },
    },
    scales: {
      y: {
        type: 'logarithmic' as const,
        title: {
          display: true,
          text: 'Price (Log Scale)',
        },
        ticks: {
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return `$${value.toLocaleString()}`;
            }
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
          🎯 Strategy Optimization
        </h3>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-yellow-500/10 p-4 rounded-lg">
            <h4 className="text-sm text-yellow-400 mb-1">Current Price</h4>
            <p className="text-2xl font-bold text-white">
              {loading ? 'Loading...' : error ? 'Error' : `$${metrics?.price.toLocaleString()}`}
            </p>
          </div>
          <div className="bg-yellow-500/10 p-4 rounded-lg">
            <h4 className="text-sm text-yellow-400 mb-1">24h Change</h4>
            <p className={`text-2xl font-bold ${metrics?.priceChange24h && metrics.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {loading ? 'Loading...' : error ? 'Error' : `${metrics?.priceChange24h.toFixed(2)}%`}
            </p>
          </div>
          <div className="bg-yellow-500/10 p-4 rounded-lg">
            <h4 className="text-sm text-yellow-400 mb-1">Market Cap</h4>
            <p className="text-2xl font-bold text-white">
              {loading ? 'Loading...' : error ? 'Error' : metrics?.marketCap ? `$${(metrics.marketCap / 1e9).toFixed(2)}B` : 'N/A'}
            </p>
          </div>
          <div className="bg-yellow-500/10 p-4 rounded-lg">
            <h4 className="text-sm text-yellow-400 mb-1">24h Volume</h4>
            <p className="text-2xl font-bold text-white">
              {loading ? 'Loading...' : error ? 'Error' : metrics?.volume24h ? `$${(metrics.volume24h / 1e9).toFixed(2)}B` : 'N/A'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <label className="min-w-[120px] text-yellow-500 font-medium">
            Show HODL Strategy
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showHodl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShowHodl(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-[#1c1f26] border-2 border-yellow-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-yellow-500 after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
          </label>
        </div>

        <div className="w-full aspect-[16/9] mt-6">
          <Line options={options} data={data} />
        </div>
        <p className="mt-2 text-xs text-gray-400 text-center">
          <span className="font-semibold text-cyan-300">HODL (8.1% annualized):</span> Compounding at 8.1% per year (20-Year S&amp;P 500 CAGR).
          <br />
          <span className="font-semibold text-pink-400">HODL (14.5% annualized):</span> Compounding at 14.5% per year (Current BTC CAGR).
          <br />
          <span className="font-semibold text-white">HODL (36% annualized):</span> Compounding at 36% per year (Historical BTC Growth).
        </p>
      </div>
    </div>
  );
}

// Custom hook for fetching real-time data
function useBitcoinData() {
  const [metrics, setMetrics] = useState<MarketMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch comprehensive data from CoinGecko
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false'
        );
        const data = await response.json();

        setMetrics({
          price: data.market_data.current_price.usd,
          priceChange24h: data.market_data.price_change_percentage_24h,
          marketCap: data.market_data.market_cap.usd,
          volume24h: data.market_data.total_volume.usd,
          timestamp: Date.now(),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { metrics, loading, error };
}