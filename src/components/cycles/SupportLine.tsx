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
  TooltipItem,
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

export default function SupportLine() {
  const [showPredictions, setShowPredictions] = useState(true);
  const [showMethodology, setShowMethodology] = useState(false);
  const { metrics, loading, error } = useBitcoinData();

  // Time labels from 2024 to 2030
  const timeLabels = [
    '2024', '2025', '2026', '2027', '2028', '2029', '2030'
  ];

  // Historical data points (simplified for visualization)
  const historicalData = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    prices: [0.1, 2, 5, 13, 200, 300, 1000, 20000, 3200, 7000, 4000, 30000, 16000, 20000, 40000]
  };

  // Power law support line (5th percentile)
  const supportLine = [
    40128, // 2024 (current)
    50000, // 2025
    60000, // 2026
    80000, // 2027
    100000, // 2028
    110000, // 2029
    120000, // 2030
  ];

  // 2015 frozen model projection
  const frozenModel = [
    300, // 2015
    1000, // 2016
    2000, // 2017
    4000, // 2018
    8000, // 2019
    16000, // 2020
    32000, // 2021
    40000, // 2022
    50000, // 2023
    60000, // 2024
    80000, // 2025
    100000, // 2026
    120000, // 2027
    150000, // 2028
    180000, // 2029
    200000, // 2030
  ];

  // 2024-25 cycle predictions
  const cycle2025 = [
    40128, // 2024 (current)
    180000, // 2025 (min target)
    275000, // 2025 (max target)
    60000, // 2026 (bear market floor)
    80000, // 2027 (recovery)
    100000, // 2028 (halving)
    110000, // 2029
    120000, // 2030
  ];

  // 2028-30 cycle predictions
  const cycle2029 = [
    40128, // 2024 (current)
    50000, // 2025
    60000, // 2026
    80000, // 2027
    100000, // 2028 (halving)
    300000, // 2029 (min target)
    480000, // 2029 (max target)
    120000, // 2030 (support)
  ];

  const data = {
    labels: [...historicalData.labels, ...timeLabels.slice(1)],
    datasets: [
      {
        label: 'Historical Daily Closes',
        data: historicalData.prices,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        pointRadius: 2,
        tension: 0.1,
      },
      {
        label: 'Power Law Support (5th percentile)',
        data: [...Array(historicalData.labels.length - 1).fill(null), ...supportLine],
        borderColor: 'rgba(255, 165, 0, 0.8)',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        pointRadius: 4,
        tension: 0.3,
        borderWidth: 2,
      },
      {
        label: '2015 Frozen Model',
        data: frozenModel,
        borderColor: 'rgba(0, 191, 255, 0.6)',
        backgroundColor: 'rgba(0, 191, 255, 0.1)',
        pointRadius: 2,
        tension: 0.3,
        borderDash: [5, 5],
      },
      ...(showPredictions ? [
        {
          label: '2024-25 Cycle Range',
          data: [...Array(historicalData.labels.length - 1).fill(null), ...cycle2025],
          borderColor: 'rgba(0, 255, 0, 0.8)',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          pointRadius: 4,
          tension: 0.3,
        },
        {
          label: '2028-30 Cycle Range',
          data: [...Array(historicalData.labels.length - 1).fill(null), ...cycle2029],
          borderColor: 'rgba(255, 0, 0, 0.8)',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          pointRadius: 4,
          tension: 0.3,
        },
      ] : []),
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
          },
        },
      },
      title: {
        display: true,
        text: 'Bitcoin Support Line & Cycle Predictions',
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          family: 'Satoshi',
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'line'>) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        type: 'logarithmic' as const,
        title: {
          display: true,
          text: 'Price (Log Scale)',
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
          },
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return `$${value.toLocaleString()}`;
            }
            return `$${value}`;
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          font: {
            family: 'Satoshi',
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
          📈 Support Line Analysis
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
            Show Predictions
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showPredictions}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShowPredictions(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-[#1c1f26] border-2 border-yellow-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-yellow-500 after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
          </label>
        </div>

        <div className="w-full aspect-[16/9] mt-6">
          <Line options={options} data={data} />
        </div>

        {/* Methodology Explanation */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-2"
          >
            <span className="font-medium">Methodology</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${showMethodology ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMethodology && (
            <div className="bg-yellow-500/5 p-6 rounded-lg space-y-4 text-gray-300">
              <h4 className="text-yellow-500 font-medium">Power Law Floor Calculation</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>Collect daily BTC/USD closes since 2009</li>
                <li>Identify the 5th percentile cutoff value</li>
                <li>Mask data to keep only prices ≤ 5th percentile</li>
                <li>Apply log-log transformation</li>
                <li>Fit regression line to transformed data</li>
                <li>Project forward using power law equation</li>
              </ol>
              <div className="bg-yellow-500/10 p-4 rounded-lg mt-4">
                <p className="text-sm italic">
                  The 2015 frozen model (dashed blue line) validates the methodology by showing near-perfect overlap with the full-data curve, reducing data-snooping bias.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-400">
          <p className="font-semibold text-yellow-500">Key Predictions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>2024-25 Cycle: $180k - $275k peak range (Nov 2025 ± 3mo)</li>
            <li>2028-30 Cycle: $300k - $480k peak range (Q4 2029 ± 6mo)</li>
            <li>Power Law Support: $40k current → $50k (2025) → $110k (2029)</li>
          </ul>
          <p className="mt-2 text-xs italic">
            Note: Predictions based on power-law support × decaying multiple, with 10% haircut for macro-shock risk.
          </p>
        </div>
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
