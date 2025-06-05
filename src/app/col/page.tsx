'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Cost data in USD
const costData = {
  NYC: 8000,
  Monaco: 12000,
  Zug: 8000,
  Amsterdam: 5000,
  Bordeaux: 4500,
  Marbella: 3600,
  Lisbon: 3500,
};

// Real estate price per m² in USD
const realEstatePerM2 = {
  Bordeaux: 5500,
  Lisbon: 5000,
  Marbella: 4000,
  Zug: 11000,
  Monaco: 50000,
  Amsterdam: 7000,
  NYC: 16000,
};

// Responsive font/rotation for ChartJS
function getResponsiveFontSize() {
  if (typeof window !== 'undefined' && window.innerWidth < 640) return 8;
  return 10;
}
function getResponsiveRotation() {
  if (typeof window !== 'undefined' && window.innerWidth < 640) return 15;
  return 30;
}

export default function CostOfLivingPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [satoshisData, setSatoshisData] = useState<number[]>([]);
  const [btcApartmentData, setBtcApartmentData] = useState<number[]>([]);

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch('/api/crypto-data');
        const data = await response.json();
        if (data.price?.usd) {
          setBtcPrice(data.price.usd);
          // Convert costs to satoshis (1 BTC = 100,000,000 satoshis)
          const satoshis = Object.values(costData).map(cost => 
            Math.round((cost / data.price.usd) * 100000000)
          );
          setSatoshisData(satoshis);
        }
      } catch {
        // Error intentionally ignored
      }
    };

    fetchBtcPrice();
    // Update every 5 minutes
    const interval = setInterval(fetchBtcPrice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (btcPrice) {
      const btcCosts = Object.values(realEstatePerM2).map((usdPerM2) => {
        const totalUsd = usdPerM2 * 100;
        return +(totalUsd / btcPrice).toFixed(4); // 4 decimals for BTC
      });
      setBtcApartmentData(btcCosts);
    }
  }, [btcPrice]);

  const chartData = {
    labels: Object.keys(costData),
    datasets: [
      {
        label: 'Monthly Cost (Satoshis)',
        data: satoshisData,
        backgroundColor: 'rgba(234, 179, 8, 0.8)',
        borderColor: 'rgba(234, 179, 8, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Cost of Living in Satoshis',
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 16,
          family: 'Satoshi',
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'bar'>) {
            const value = tooltipItem.raw as number;
            const label = tooltipItem.label as keyof typeof costData;
            return `${value.toLocaleString()} sats (≈ $${costData[label].toLocaleString()})`;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
          callback: function(value: string | number) {
            return Number(value).toLocaleString() + ' sats';
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
          maxRotation: getResponsiveRotation(),
          minRotation: 0,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const apartmentChartData = {
    labels: Object.keys(realEstatePerM2),
    datasets: [
      {
        label: '100 m² Apartment Cost (BTC)',
        data: btcApartmentData,
        backgroundColor: 'rgba(234, 179, 8, 0.8)',
        borderColor: 'rgba(234, 179, 8, 1)',
        borderWidth: 1,
      },
    ],
  };

  const apartmentChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
        },
      },
      title: {
        display: true,
        text: 'Cost of a 100 m² Apartment in Bitcoin',
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 16,
          family: 'Satoshi',
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'bar'>) {
            const value = tooltipItem.raw as number;
            const label = tooltipItem.label as keyof typeof realEstatePerM2;
            const usd = realEstatePerM2[label] * 100;
            return `${value} BTC (≈ $${usd.toLocaleString()})`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
          callback: function(value: string | number) {
            return Number(value).toLocaleString() + ' BTC';
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            family: 'Satoshi',
            size: getResponsiveFontSize(),
          },
          maxRotation: getResponsiveRotation(),
          minRotation: 0,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const faqs = [
    {
      q: "What are the main cost differences between NYC and European cities?",
      a: (
        <span>
          The key differences vary by city:
          <br /><br />
          • Monaco is 20-50% more expensive than NYC, mainly due to housing and healthcare
          <br />
          • Zug (Switzerland) is comparable to NYC ($6,000-8,000/month)
          <br />
          • Amsterdam and Bordeaux are 30-60% cheaper than NYC
          <br />
          • Lisbon and Marbella are 50-65% cheaper than NYC
          <br />
          • Healthcare costs are significantly lower in most European cities
          <br />
          • Public transportation is generally more affordable in Europe
        </span>
      ),
    },
    {
      q: "How much does a couple need to live comfortably in each city?",
      a: (
        <span>
          Monthly costs for a couple (2025 estimates):
          <br /><br />
          • NYC: $6,000–$8,000/month
          <br />
          • Monaco: $8,000–$12,000/month
          <br />
          • Zug: $6,000–$8,000/month
          <br />
          • Amsterdam: $3,500–$5,000/month
          <br />
          • Bordeaux: $3,000–$4,500/month
          <br />
          • Marbella: $2,600–$3,600/month
          <br />
          • Lisbon: $2,500–$3,500/month
        </span>
      ),
    },
    {
      q: "What are the biggest cost-saving opportunities in each region?",
      a: (
        <span>
          Cost-saving strategies by region:
          <br /><br />
          NYC:
          <br />
          • Live in outer boroughs
          <br />
          • Use public transit instead of car
          <br />
          • Cook at home more often
          <br /><br />
          European Cities:
          <br />
          • Take advantage of universal healthcare
          <br />
          • Use efficient public transit systems
          <br />
          • Consider smaller cities for lower costs
          <br />
          • Look for housing outside city centers
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-16">
        <div className="space-y-10 sm:space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 sm:space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-xs sm:text-sm mb-2 sm:mb-4 font-light font-satoshi">Cost Comparison • Lifestyle Analysis • Financial Planning</p>
            <h1 className="text-center">
              <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Cost of Living
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-6 gap-2 sm:gap-0">
              <div className="h-px w-16 sm:w-24 bg-yellow-500/30"></div>
              <p className="mx-0 sm:mx-6 text-base sm:text-lg text-white/70 font-light italic font-satoshi">NYC vs Europe: A Comprehensive Comparison</p>
              <div className="h-px w-16 sm:w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Satoshis Chart */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="mb-2 sm:mb-4">
              <p className="text-base sm:text-lg text-gray-300">
                Current Bitcoin Price: {btcPrice ? `$${btcPrice.toLocaleString()}` : 'Loading...'}
              </p>
            </div>
            <div className="relative w-full" style={{ minHeight: 220, height: '40vw', maxHeight: 400 }}>
              <Bar
                data={chartData}
                options={chartOptions}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Apartment BTC Chart */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] mt-6 sm:mt-8">
            <div className="mb-2 sm:mb-4">
              <p className="text-base sm:text-lg text-gray-300">
                100 m² Apartment Cost in Bitcoin (real-time)
              </p>
            </div>
            <div className="relative w-full" style={{ minHeight: 220, height: '40vw', maxHeight: 400 }}>
              <Bar
                data={apartmentChartData}
                options={apartmentChartOptions}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* NYC Cost Breakdown */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6">
              NYC Cost of Living Breakdown (2025)
            </h3>
            <div className="space-y-2 sm:space-y-4 text-gray-300">
              <p className="text-base sm:text-lg">
                Monthly expenses for a couple in NYC average $6,000–$8,000, with key components including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Housing & Utilities</h4>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                    <li>Rent: $3,500–$5,000/month</li>
                    <li>Utilities: $150–$250/month</li>
                    <li>Internet & Phone: $200–$300/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Daily Expenses</h4>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                    <li>Groceries: $400–$600/month</li>
                    <li>Transportation: $264/month (MetroCard)</li>
                    <li>Healthcare: $700–$1,500/month</li>
                    <li>Entertainment: $200–$500/month</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* European Cities Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Monaco */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Monaco</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $8,000–$12,000 (20-50% more expensive than NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $4,000–$6,000/month</li>
                  <li>Utilities: $200–$400/month</li>
                  <li>Groceries: $500–$800/month</li>
                  <li>Transport: $100–$200/month</li>
                  <li>Healthcare: $1,000–$2,000/month</li>
                  <li>Leisure: $400–$800/month</li>
                </ul>
              </div>
            </div>
            {/* Zug */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Zug, Switzerland</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $6,000–$8,000 (comparable to NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $2,500–$3,500/month</li>
                  <li>Utilities: $200–$350/month</li>
                  <li>Groceries: $600–$900/month</li>
                  <li>Transport: $160–$240/month</li>
                  <li>Healthcare: $800–$1,600/month</li>
                  <li>Leisure: $300–$600/month</li>
                </ul>
              </div>
            </div>
            {/* Amsterdam */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Amsterdam</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $3,500–$5,000 (30-50% cheaper than NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $1,500–$2,200/month</li>
                  <li>Utilities: $150–$300/month</li>
                  <li>Groceries: $350–$550/month</li>
                  <li>Transport: $160–$240/month</li>
                  <li>Healthcare: $300–$500/month</li>
                  <li>Leisure: $200–$450/month</li>
                </ul>
              </div>
            </div>
            {/* Bordeaux */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Bordeaux</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $3,000–$4,500 (40-60% cheaper than NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $700–$1,200/month</li>
                  <li>Utilities: $150–$250/month</li>
                  <li>Groceries: $350–$500/month</li>
                  <li>Transport: $80–$120/month</li>
                  <li>Healthcare: $50–$200/month</li>
                  <li>Leisure: $200–$400/month</li>
                </ul>
              </div>
            </div>
            {/* Marbella */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Marbella</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $2,600–$3,600 (50-60% cheaper than NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $1,000–$1,400/month</li>
                  <li>Utilities: $120–$200/month</li>
                  <li>Groceries: $300–$450/month</li>
                  <li>Transport: $60–$100/month</li>
                  <li>Healthcare: $50–$200/month</li>
                  <li>Leisure: $200–$400/month</li>
                </ul>
              </div>
            </div>
            {/* Lisbon */}
            <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-lg sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">Lisbon</h3>
              <div className="space-y-2 sm:space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Monthly Cost: $2,500–$3,500 (50-65% cheaper than NYC)</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                  <li>Housing: $800–$1,500/month</li>
                  <li>Utilities: $130–$300/month</li>
                  <li>Groceries: $300–$450/month</li>
                  <li>Transport: $80/month</li>
                  <li>Healthcare: $30–$300/month</li>
                  <li>Leisure: $150–$350/month</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6">
              Key Insights
            </h3>
            <div className="space-y-2 sm:space-y-4 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Most Affordable</h4>
                  <p className="text-base sm:text-lg">Lisbon and Marbella offer the lowest costs ($2,500-3,600/month), with excellent public healthcare and affordable housing.</p>
                </div>
                <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Mid-Range Options</h4>
                  <p className="text-base sm:text-lg">Bordeaux and Amsterdam ($3,000-5,000/month) provide a balance of affordability and quality of life with robust public services.</p>
                </div>
                <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                  <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Premium Destinations</h4>
                  <p className="text-base sm:text-lg">Monaco ($8,000-12,000/month) and Zug ($6,000-8,000/month) offer luxury living with high costs offset by tax benefits and high salaries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Cost Comparison */}
          <div className="bg-[#1c1f26] p-4 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-x-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6">
              Real Estate Cost Comparison (2025)
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
              Average cost of an apartment per square meter (m²) in USD, city center, 2025. Data: Numbeo, Expatistan, Global Property Guide, and others.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-white border border-yellow-500 rounded-lg text-xs sm:text-base">
                <thead className="bg-yellow-500/10">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 font-bold">City</th>
                    <th className="px-2 sm:px-4 py-2 font-bold">Cost per m² (USD)</th>
                    <th className="px-2 sm:px-4 py-2 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-500/20">
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Bordeaux</td>
                    <td className="px-2 sm:px-4 py-2">$5,000–$6,000</td>
                    <td className="px-2 sm:px-4 py-2">Suburbs ~20–30% cheaper</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Lisbon</td>
                    <td className="px-2 sm:px-4 py-2">$4,500–$5,500</td>
                    <td className="px-2 sm:px-4 py-2">Suburbs ~$2,500–$3,500; rising demand</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Marbella</td>
                    <td className="px-2 sm:px-4 py-2">$3,500–$4,500</td>
                    <td className="px-2 sm:px-4 py-2">Golden Mile ~$5,000; suburbs ~$3,000</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Zug</td>
                    <td className="px-2 sm:px-4 py-2">$10,000–$12,000</td>
                    <td className="px-2 sm:px-4 py-2">High due to corporate hub; suburbs ~$8,000</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Monaco</td>
                    <td className="px-2 sm:px-4 py-2">$45,000–$55,000</td>
                    <td className="px-2 sm:px-4 py-2">World&apos;s priciest; luxury-focused market</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">Amsterdam</td>
                    <td className="px-2 sm:px-4 py-2">$6,000–$8,000</td>
                    <td className="px-2 sm:px-4 py-2">Canal belt ~$9,000; Noord ~$5,000</td>
                  </tr>
                  <tr>
                    <td className="px-2 sm:px-4 py-2">NYC</td>
                    <td className="px-2 sm:px-4 py-2">$14,000–$18,000</td>
                    <td className="px-2 sm:px-4 py-2">Manhattan ~$20,000; Brooklyn ~$10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Cheapest</h4>
                <p className="text-base sm:text-lg">Marbella ($3,500–$4,500/m²) and Lisbon ($4,500–$5,500/m²) are the most affordable, reflecting Southern Europe&apos;s lower property costs.</p>
              </div>
              <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Most Expensive</h4>
                <p className="text-base sm:text-lg">Monaco ($45,000–$55,000/m²) dwarfs all others, followed by NYC ($14,000–$18,000/m²) and Zug ($10,000–$12,000/m²).</p>
              </div>
              <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2 sm:mb-4">Mid-Range</h4>
                <p className="text-base sm:text-lg">Bordeaux ($5,000–$6,000/m²) and Amsterdam ($6,000–$8,000/m²) are moderately priced but face upward pressure from demand.</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>NYC is 2–4x pricier than Bordeaux, Lisbon, Marbella, and Amsterdam but ~3–4x cheaper than Monaco. Zug is closer to NYC&apos;s lower end.</li>
                <li>Lisbon and Amsterdam see rising prices due to housing shortages and expat demand.</li>
                <li>Monaco and Zug cater to high-net-worth individuals, inflating costs. Marbella benefits from Spain&apos;s relatively low property prices.</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-bold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform duration-200",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
