'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
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
  Filler,
  type ChartOptions,
} from 'chart.js';
import Image from 'next/image';
import MaxPain from '@/components/cycles/MaxPain';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface LiveChartData {
  date: string;
  price: number;
  twoYearMA: number | null;
  twoYearMAx5: number | null;
}

interface ErrorData {
  error: string;
  details?: string;
}

function TwoYearMAMultiplierChart() {
  const { data: chartData, error } = useSWR<LiveChartData[] | ErrorData>('/api/cryptocompare/btc-price-history', fetcher);

  if (error) return <div>Failed to load chart data. Please try again later.</div>;
  if (!chartData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-yellow-500">Loading Real-Time Data...</p>
      </div>
    );
  }

  if (!Array.isArray(chartData)) {
    const errorPayload = chartData as ErrorData;
    const errorMessage = errorPayload.details || errorPayload.error || 'An unknown error occurred.';
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-red-500 font-bold">Failed to load chart data.</p>
        <p className="text-sm text-gray-400 mt-2">Error: {errorMessage}</p>
      </div>
    );
  }

  const labels = chartData.map(d => d.date);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Bitcoin Price',
        data: chartData.map(d => d.price),
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        pointRadius: 0,
        tension: 0.1,
        borderWidth: 1.5,
      },
      {
        label: '2-Year MA x 5 (Sell Target)',
        data: chartData.map(d => d.twoYearMAx5),
        borderColor: '#ef4444', // red-500
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: '2-Year MA (Buy Zone)',
        data: chartData.map(d => d.twoYearMA),
        borderColor: '#22c55e', // green-500
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
          padding: 20,
          font: {
            size: 14,
          }
        }
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'logarithmic' as const,
        title: {
          display: true,
          text: 'Price (USD)',
          color: 'white',
        },
        ticks: {
          color: 'white',
          callback: function (value: string | number) {
            if (typeof value !== 'number') {
              return value;
            }
            if (value >= 1000000) {
              return `$${(value / 1000000).toFixed(1)}M`;
            }
            if (value >= 1000) {
              return `$${(value / 1000).toFixed(0)}k`;
            }
            return `$${value}`;
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'white',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 10,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return <Line options={options} data={data} />;
}


const cycles = [
  { start: 2014, bottom: 176, gain: 113, drawdown: 0.84 },
  { start: 2018, bottom: 3185, gain: 21, drawdown: 0.77 },
  { start: 2022, bottom: 15758, gain: 10, drawdown: 0.75 },
  { start: 2026, bottom: 50000, gain: 6, drawdown: 0.7 },
  { start: 2030, bottom: 75000, gain: 5, drawdown: 0.65 },
];

const labels: string[] = [];
const dataPoints: number[] = [];

cycles.forEach((cycle) => {
  const topYear = cycle.start + 3;
  const nextBottomYear = cycle.start + 4;
  const top = cycle.bottom * cycle.gain;
  const nextBottom = top * (1 - cycle.drawdown);

  labels.push(`${cycle.start}`);
  dataPoints.push(cycle.bottom);
  
  labels.push(`${topYear}`);
  dataPoints.push(top);

  labels.push(`${nextBottomYear}`);
  dataPoints.push(nextBottom);
});

function BtcCycleChart() {
  const data = {
    labels,
    datasets: [
      {
        label: 'BTC Cycle Projection (Log Scale)',
        data: dataPoints,
        borderColor: 'orange',
        backgroundColor: 'rgba(255,165,0,0.4)',
        pointRadius: 4,
        tension: 0.3,
      },
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
        text: 'Bitcoin Cycle Forecast (2014–2033)',
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
          callback: function (value: string | number) {
            if (typeof value === 'number') {
              return `$${value.toLocaleString()}`;
            }
            return `$${value}`;
          },
        },
      },
    },
  };

  return <Line options={options} data={data} />;
}

export default function MaxPainPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the Bitcoin cycle theory?",
      a: (
        <span>
          The Bitcoin cycle theory suggests that Bitcoin follows a roughly 4-year cycle pattern, primarily driven by its halving events. Each cycle typically consists of a bottom, followed by a parabolic rise, and then a significant drawdown before the next cycle begins.
        </span>
      ),
    },
    {
      q: "How accurate are these cycle predictions?",
      a: (
        <span>
          While historical patterns show remarkable consistency, each cycle is unique. The diminishing returns pattern (113x → 21x → 10x) suggests increasing market maturity. Predictions should be used as guidelines rather than certainties, as market conditions and adoption rates can significantly impact outcomes.
        </span>
      ),
    },
    {
      q: "What factors influence the cycle bottoms?",
      a: (
        <span>
          Several key factors influence cycle bottoms:
          <br /><br />
          • Halving events and their market impact
          <br />
          • Macroeconomic conditions
          <br />
          • Institutional adoption rates
          <br />
          • Market liquidity and trading volume
          <br />
          • Regulatory developments
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Cycles • Market Analysis • Price Projections</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Max Pain
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Understanding Bitcoin&apos;s Market Cycles</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* 2-Year MA Multiplier Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
              The 2-Year Moving Average Multiplier
            </h3>
            <div className="w-full h-[60vh]">
              <TwoYearMAMultiplierChart />
            </div>
            <div className="mt-8 pt-6 border-t border-yellow-500/20 text-gray-300">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">A RECESSION IS COMING. ARE YOU READY?</h4>
                <div className="space-y-4 text-lg leading-relaxed">
                    <p>The clock is ticking. By the end of 2025 or early 2026, the economic storm will hit. Most people? They&apos;ll be caught off guard—unprepared, overwhelmed, and outmaneuvered. But not me. I&apos;m ready. And I want you to be too.</p>
                    <p>My goal this cycle? Simple: Sell the top. Buy the bottom. No guesswork. No emotions. Just a proven strategy that&apos;s worked in every crypto cycle since 2013. The key? The 2-Year Moving Average Multiplier. It&apos;s not hype—it&apos;s data.</p>
                    <p className="font-semibold text-yellow-400/90">Here&apos;s how it works:</p>
                    <p><span className="text-red-500 font-bold">🔴 The Red Line (2Y MA x5):</span> Every time Bitcoin hits this level, the bull run ends. The market tops out. That&apos;s when I sell. No hesitation. This has called every peak—2014, 2017, 2021. It&apos;s the exit signal you can&apos;t ignore.</p>
                    <p><span className="text-green-400 font-bold">🟢 The Green Line (2Y MA):</span> When Bitcoin drops below this line, it&apos;s the bottom. The reload zone. The wealth transfer moment. This is where I buy back in—big. It nailed the lows in 2014, 2017, and 2021. Every. Single. Time.</p>
                    <p className="font-semibold text-yellow-400/90">My plan is crystal clear:</p>
                    <ul className="list-disc list-inside pl-4 space-y-2">
                        <li>Sell at the red line. Lock in profits.</li>
                        <li>Buy below the green line. Build wealth for the next cycle.</li>
                    </ul>
                    <p>No noise. No speculation. Just cold, hard data guiding every move.</p>
                    <p>When the time comes to exit, I&apos;ll be shouting it from the rooftops. When it&apos;s time to buy back in, you&apos;ll hear me even louder. Follow the lines, and you&apos;re in control. Ignore them, and you&apos;re someone else&apos;s exit liquidity.</p>
                    <p className="font-bold">Follow me. Let&apos;s ride this cycle together—buying bottoms, not chasing tops. The recession&apos;s coming, but we&apos;ll be ready.</p>
                </div>
            </div>
          </div>

          {/* Historical Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              📜 Crypto&apos;s Wildest Whiplash Years
            </h3>
            <div className="space-y-8 text-gray-300">
              <p className="text-lg leading-relaxed">
                Crypto history reads like a storyboard where every frame begins with euphoria but ends with a plot-twist that re-writes the rules of the game. Each cycle we survive forges a harder, savvier industry. Below is a whirlwind tour of the loudest boom-and-bust chapters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">2012-2014 | The Prototype Roller-Coaster</h4>
                  <p className="text-sm leading-relaxed">
                    Bitcoin&apos;s first halving on 28 Nov 2012 slashed block rewards from 50 to 25 BTC. When new money arrived in spring 2013, price discovery was violent: $13 → $266 in April, followed by a sprint to ~$1,150 by November. Mt. Gox&apos;s February 2014 collapse vaporized ~850,000 BTC, teaching two enduring lessons: &quot;Not your keys, not your coins&quot; and &quot;Liquidity vanishes when you need it most.&quot;
                  </p>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">Q4 2017 | ICO Fever Dream</h4>
                  <p className="text-sm leading-relaxed">
                    Bitcoin blasted through prior ATHs as token sales raised billions on white-papers and Telegram rooms. When BTC kissed $20k on 17 Dec 2017, retail investors FOMO-ed into every ticker ending in &quot;-coin.&quot; Two months later, the market erased ~70% and taught everyone the meaning of &quot;vaporware.&quot;
                  </p>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">DeFi Summer (Aug 2020)</h4>
                  <p className="text-sm leading-relaxed">
                    COVID-era stimulus cash chased yield. Compound turned &quot;liquidity mining&quot; from esoteric hack to mainstream motif. TVL rocketed from $1B → $10B in 90 days, but gas fees spiked and rugs multiplied, pushing Layer-2 roadmaps to the front.
                  </p>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">2021 | The NFT Revolution</h4>
                  <p className="text-sm leading-relaxed">
                    From NBA Top Shot&apos;s $40M weekend to CryptoPunks&apos; seven-figure bids, NFTs went from fringe to front-page. Art Blocks and Sotheby&apos;s hammer prices forced even skeptics to admit culture had merged with code.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">The Meta-Takeaway</h4>
                <p className="text-lg">
                  Every surge begins with scarcity or storytelling, but unsustainable leverage, product-market fiction, or regulatory whiplash always crash the party. The only constant is cyclicality itself: HODLers survive, infrastructure hardens, and the next wave rides on the ashes of the last.
                </p>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin Cycle Forecast
            </h3>
            <div className="w-full aspect-[16/9]">
              <BtcCycleChart />
            </div>
          </div>

          {/* Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Historical Cycle Analysis
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🔁 Historical Cycle Bottoms (Log Scale Adjusted):</h4>
                <div className="space-y-2">
                  <p>2014–2017: $176 → ~$20,000 (~113x)</p>
                  <p>2018–2021: $3,185 → ~$69,000 (~21x)</p>
                  <p>2022–2025: $15,758 → TBD (~$250k-1M?)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projection Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              📉 Projected 2026–2029 Cycle Bottom
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Step 1: Use Halving Logic</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Halvings tend to trigger parabolic tops ~12–18 months after</li>
                  <li>Bottoms occur ~12 months after the top, typically during post-hype capitulation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Step 2: Log-Adjusted Pattern</h4>
                <p>If the diminishing returns continue:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>2017 Top to 2018 Bottom: ~84% drop</li>
                  <li>2021 Top to 2022 Bottom: ~77% drop</li>
                </ul>
                <p className="mt-4">Let&apos;s assume an average future drawdown of 75–80% from the next top.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Step 3: Estimate</h4>
                <p>If this cycle tops out at:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>$250,000, then an 80% drop = ~$50,000</li>
                  <li>$500,000, then 80% drop = ~$100,000</li>
                  <li>$1,000,000, then 80% drop = ~$200,000</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Prediction Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              📍 Realistic Prediction for 2026–2029 Bottom
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Based on historical analogs and current trajectory:
              </p>
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <p className="text-xl font-semibold text-yellow-400">
                  🧠 Cycle Bottom (2026–2029): $50,000–$120,000
                </p>
                <p className="text-sm mt-2">
                  (Assuming a top between $250k–$500k and ~75–80% correction)
                </p>
              </div>
            </div>
          </div>

          {/* 2030–2033 Cycle Forecast Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🐻 2030–2033 Bitcoin Cycle Bottom Forecast
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <p className="text-lg mb-2">Alright, let&apos;s forecast the 2030–2033 Bitcoin cycle bottom, using the same logical framework but extrapolating further out based on diminishing returns, halving cycles, and macro adoption S-curves.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">🧠 Context Recap:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Each cycle = ~4 years</li>
                  <li>Tops happen ~1 year post-halving</li>
                  <li>Bottoms happen ~1 year post-top</li>
                  <li>Returns diminish each cycle: 113x → 21x → (likely 10x this cycle)</li>
                  <li>Drawdowns from top: 84% → 77% → likely 70–75%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-2">🔮 Step-by-Step Projection for 2030–2033</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Cycle Start Date</span>
                    <ul className="list-disc list-inside ml-6">
                      <li>If 2025 is the top of the current cycle, the next bottom is expected ~2026–2027</li>
                      <li>That puts the next halving around 2028, with a top likely in 2029–2030</li>
                      <li>Therefore, the 2030–2033 period includes the post-2030 top drawdown phase</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Estimate the Top for the 2026–2029 Cycle</span>
                    <div className="ml-6">
                      <p>Using our last bottom forecast ($50K–$120K):</p>
                      <p>Assume a more mature, adoption-stabilized cycle:</p>
                      <ul className="list-disc list-inside ml-6">
                        <li>Modest gain: 5x–7x from 2026–2027 bottom</li>
                      </ul>
                      <p className="mt-2">→ Top in 2029–2030 = $250K–$800K</p>
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">Apply Drawdown Assumption (70% decline)</span>
                    <div className="ml-6">
                      <table className="w-full text-left mt-2 border-separate border-spacing-y-1">
                        <thead>
                          <tr className="text-yellow-400">
                            <th className="pr-4">Top Price (2029–2030)</th>
                            <th>70% Drop = Predicted Bottom</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>$250,000</td>
                            <td>$75,000</td>
                          </tr>
                          <tr>
                            <td>$500,000</td>
                            <td>$150,000</td>
                          </tr>
                          <tr>
                            <td>$800,000</td>
                            <td>$240,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">✅ 2030–2033 Bottom Projection:</h4>
                <p className="text-lg">$75,000 – $240,000, depending on how the 2029–2030 top plays out.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">🧠 Extra Notes:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>By then, Bitcoin may be priced in satoshis, with widespread Lightning adoption.</li>
                  <li>Sovereign adoption and institutional custody rails could flatten volatility.</li>
                  <li>The bottom might not be as deep as before if BTC is used as collateral and base layer more than as a speculative asset.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              📊 Bitcoin Market Cycle Summary
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Key Points</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bitcoin&apos;s price may reach $150,000–$200,000 by end of 2025</li>
                  <li>Long-term growth could see prices in hundreds of thousands to millions by 2030</li>
                  <li>Diminishing volatility in cycles suggests milder drawdowns as Bitcoin matures</li>
                  <li>Recent drawdown of ~76.9% (2021-24) vs historical 86-93% shows market maturity</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Current Context (June 2025)</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Trading at ~$104,319, near ATH of $111,814</li>
                  <li>Strong momentum post-April 2024 halving</li>
                  <li>Historically, bull runs peak 12–18 months after halving</li>
                  <li>Expected peak: late 2025 or early 2026</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Historical Cycles</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2012-13 Cycle</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Peak: $1,152 (Nov 2013)</li>
                        <li>Bottom: $150 (Jan 2015)</li>
                        <li>~12 months post-halving</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2016-17 Cycle</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Peak: $19,188 (Dec 2017)</li>
                        <li>Bottom: $3,236 (Dec 2018)</li>
                        <li>~17 months post-halving</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2020-21 Cycle</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Peak: $69,000 (Nov 2021)</li>
                        <li>Bottom: $15,787 (Nov 2022)</li>
                        <li>Milder drawdown: ~77%</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2024-25 Cycle</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Current: $104,319</li>
                        <li>Expected peak: Late 2025</li>
                        <li>Projected: $150k-$200k</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Institutional Adoption</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-2">ETF Growth</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li>$27.4B in U.S. Bitcoin ETFs (Q4 2024)</li>
                        <li>114% QoQ growth</li>
                        <li>26.3% of ETF market share</li>
                        <li>Projected: 7-15% of BTC supply by 2033</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-2">Sovereign Adoption</h5>
                      <ul className="list-disc list-inside space-y-1">
                        <li>El Salvador (2021)</li>
                        <li>Central African Republic (2022)</li>
                        <li>U.S. Strategic Bitcoin Reserve (2025)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Price Forecast Models</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2025 Forecasts</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Bernstein: $200k (ETF flows)</li>
                        <li>PlanB: $160k (doubling trend)</li>
                        <li>Changelly: $210k-$230k</li>
                        <li>Consensus: $150k-$200k</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/5 p-4 rounded">
                      <h5 className="font-semibold text-yellow-400 mb-2">2030+ Forecasts</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ARK Invest: $300k-$1.5M</li>
                        <li>Fidelity: $1B by 2040</li>
                        <li>Willy Woo: Mid-6-figures (8% CAGR)</li>
                        <li>Cane Island: $1-10M by 2050</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Macroeconomic Context</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cycles align with global liquidity and inflation trends</li>
                  <li>2020–21 rally coincided with stimulus and 5–7% inflation</li>
                  <li>2022 drawdown overlapped with Fed rate hikes</li>
                  <li>Expected easing by 2025–2026 could catalyze next bull run</li>
                  <li>Geopolitical factors may impact short-term volatility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cycles Image Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              📈 Bitcoin Market Cycles Visualization
            </h3>
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/cycles.jpeg"
                alt="Bitcoin market cycles visualization showing historical price patterns and future projections"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Historical Bitcoin cycles and projected future patterns based on halving events and market adoption
            </p>
          </div>

          {/* DCA Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              🐻 DCA OUT / DCA BACK IN Strategy
            </h3>
            <div className="space-y-8 text-gray-300">
              <p className="text-lg">
                Here&apos;s a strategic action plan for when BTC crosses $145K, assuming we want to exit near the top and avoid a 60–70% drawdown (like prior cycles). This plan blends on-chain signals, macro indicators, and execution discipline.
              </p>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🎯 Goal</h4>
                <p>Exit most or all of our BTC exposure between $145K–$220K, ahead of a potential reversion to $45K–$75K.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">✅ Action Plan: BTC {'>'} $145K</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">1. Exit in Tranches</h5>
                    <p className="mb-2">🧠 Avoid single-point exits. Use volatility to your advantage.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>$145K–160K: Start trimming 10–20%</li>
                      <li>$160K–180K: Sell 20–30%</li>
                      <li>$180K–200K: Sell 30–40%</li>
                      <li>&gt; $200K: Final 10–20% if blow-off top confirmed</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-400">Use TWAP/limit orders to scale out with less slippage.</p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">2. Watch On-Chain Top Signals</h5>
                    <p className="mb-2">High conviction indicators of overheated markets:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>📈 MVRV Z-Score &gt; 7</li>
                      <li>🔥 Realized Profit Spikes</li>
                      <li>📊 Exchange inflows surge</li>
                      <li>🟧 Dormant BTC waking up (HODL waves thinning)</li>
                      <li>💸 Funding rates spike (perpetual swaps)</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-400">Set alerts using Glassnode, CryptoQuant, or Arkham.</p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">3. Monitor Macro Catalysts</h5>
                    <p className="mb-2">Fed pivot or liquidity reversal can be the kill switch.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>🏦 Fed restarting hikes or QT = bad</li>
                      <li>🛢️ Inflation re-accelerating = bearish</li>
                      <li>💳 Credit markets tightening = risk-off</li>
                      <li>📉 DXY + yields up = BTC down</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-400">Use macro dashboards (e.g. TradingView, FRED, ZeroHedge AI feeds).</p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">4. Rotate Capital Into Bear-Resistant Buckets</h5>
                    <p className="mb-2">If conviction in long-term BTC remains, protect capital:</p>
                    <div className="bg-yellow-500/10 p-4 rounded-lg">
                      <h6 className="font-semibold text-yellow-400 mb-2">Options:</h6>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>🧊 Stables with yield: USDC, T-bill backed on-chain</li>
                        <li>🔄 Rotate into ETH/AI/infra plays with lower blow-off top risk</li>
                        <li>🏡 Off-ramp into real-world assets: Property, BTC-funded businesses</li>
                        <li>🧱 Cold storage BTC: Wait for next bottom to reaccumulate</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">5. Leave Dry Powder for Re-entry</h5>
                    <p className="mb-2">Historically, best entries come 9–15 months post-top.</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Target rebuy zone: $45K–$75K</li>
                      <li>Set automated limit orders and notifications</li>
                      <li>Use DCA for re-entry once macro + on-chain align</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">6. Hedge Against Downside Risk</h5>
                    <p className="mb-2">Protect your portfolio with strategic hedging across on-chain and TradFi:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">On-Chain Hedging:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Platforms: Lyra, Dopex, Premia, Ribbon Finance</li>
                          <li>Buy Put Options when BTC is above $130K</li>
                          <li>Example: 1-month $150K put ≈ $2.5K premium</li>
                          <li>Max 1-2% of portfolio in monthly premiums</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">TradFi Hedging:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>BITI: ProShares Inverse BTC ETF</li>
                          <li>Put options on BITO/GBTC/IBIT</li>
                          <li>Target 1x exposure when BTC is above $145K</li>
                          <li>Ladder 30-60-90D puts at various strikes</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Hedging Triggers:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>$130K: Start hedging with laddered puts</li>
                          <li>$145K-$160K: Add BITI + deeper OTM puts</li>
                          <li>&gt;$180K: Maximum downside protection</li>
                          <li>Watch IV &lt; 60% for optimal entry</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Advanced Strategies:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Put Spreads: Long $160K put / Short $120K put</li>
                          <li>Straddles for volatility plays</li>
                          <li>Auto-rolling vaults on Ribbon</li>
                          <li>Monitor Greeks.Live, Laevitas for IV</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">7. Key Metrics & Risk Management</h5>
                    <p className="mb-2">Monitor these critical indicators to optimize your hedging strategy:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Market Health Indicators:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>SOPR: Spent Output Profit Ratio (peaking = profit-taking)</li>
                          <li>MVRV: Above 2.5 indicates overvaluation</li>
                          <li>Funding Rates: High rates = over-leveraged markets</li>
                          <li>Implied Volatility: Target &lt; 60% for optimal entry</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Risk Management Rules:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Limit premium costs to 1-2% of portfolio monthly</li>
                          <li>Set stop-losses on all hedging positions</li>
                          <li>Diversify across multiple strike prices</li>
                          <li>Maintain dry powder for adjustments</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Macro Triggers:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Fed policy shifts (tightening = maintain hedges)</li>
                          <li>Inflation acceleration signals</li>
                          <li>Credit market stress indicators</li>
                          <li>DXY and yield movements</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-500/10 p-4 rounded-lg">
                        <h6 className="font-semibold text-yellow-400 mb-2">Portfolio Protection Checklist:</h6>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Regular IV monitoring (Greeks.Live, Laevitas)</li>
                          <li>Monthly strategy reassessment</li>
                          <li>Position size adjustments based on market conditions</li>
                          <li>Documentation of all hedging decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MaxPain Interactive Strategy Section */}
          <div className="mt-12">
            <MaxPain />
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
                  <span className="text-lg font-medium text-yellow-500">{faq.q}</span>
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
