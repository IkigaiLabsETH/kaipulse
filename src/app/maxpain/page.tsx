'use client';

import { useState } from 'react';
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
} from 'chart.js';
import Image from 'next/image';

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
