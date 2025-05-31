'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function AltcoinsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Whats different about this crypto cycle?",
      a: (
        <span>
          This cycle shows several key differences:
          <br /><br />
          • Retail investors burned by meme coins
          <br />
          • Increased institutional focus on Bitcoin
          <br />
          • Stronger regulatory scrutiny
          <br />
          • More mature market dynamics
          <br />
          • Bitcoin ETF adoption
        </span>
      ),
    },
    {
      q: "Why might altcoins still perform well?",
      a: (
        <span>
          Several factors could drive altcoin growth:
          <br /><br />
          • New narratives and use cases
          <br />
          • Capital rotation after Bitcoin peaks
          <br />
          • Continued blockchain innovation
          <br />
          • Institutional adoption of select altcoins
          <br />
          • Market cycle patterns
        </span>
      ),
    },
    {
      q: "Whats the historical pattern of altcoin seasons?",
      a: (
        <span>
          Historically, Bitcoin leads the market, followed by altcoin seasons:
          <br /><br />
          • 2017: Bitcoin peak → Altcoin explosion
          <br />
          • 2021: Similar pattern with DeFi/NFT boom
          <br />
          • 2025-26: Potential repeat if cycle holds
          <br /><br />
          This pattern suggests altcoins may rally after Bitcoins peak.
        </span>
      ),
    },
    {
      q: "How should investors approach this market?",
      a: (
        <span>
          Recommended strategy includes:
          <br /><br />
          • Bitcoin as core portfolio anchor
          <br />
          • Selective altcoin exposure
          <br />
          • Focus on fundamentals
          <br />
          • Diversification across sectors
          <br />
          • Risk management discipline
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Crypto Markets • Bitcoin • Altcoins</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Altcoins vs Bitcoin
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Navigating the Next Crypto Cycle</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/tesla_s.jpg"
                alt="Crypto Market Analysis: Bitcoin vs Altcoins"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Market Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Sentiment & Dynamics
            </h3>
            <div className="space-y-8 text-gray-300">
              {/* Sentiment Analysis */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Sentiment Analysis</h4>
                <div className="bg-black/30 p-6 rounded">
                  <p className="text-lg leading-relaxed">
                    The current market sentiment reflects growing skepticism about a broad altcoin season like those in 2017 and 2021. While previous cycles saw Bitcoin strength leading to altcoin rallies as crypto-native buyers rotated profits, this cycle differs due to institutional Bitcoin accumulation potentially limiting capital flow to altcoins. The 2021-style altcoin season may not repeat due to unique market conditions and increased altcoin dilution from new launches. However, select altcoins could still shine significantly, with their performance driven by individual merits rather than Bitcoin&apos;s influence. Historical trends show altcoins typically rally during bull cycles, but the current market is still testing this pattern with Bitcoin dominance holding strong.
                  </p>
                </div>
              </div>

              {/* Market Dynamics */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Dynamics & Bitcoin Dominance</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Bitcoin Dominance Trends</h5>
                    <ul className="space-y-2">
                      <li>Peaked at 65.38% in May 2025</li>
                      <li>Recent decline to 63.89%</li>
                      <li>Spot Bitcoin ETFs: $122B in holdings</li>
                      <li>Watch for sustained drop below 60%</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Altcoin Season Index</h5>
                    <ul className="space-y-2">
                      <li>Current: 45 (Bitcoin-dominated)</li>
                      <li>December 2024 peak: 87</li>
                      <li>Neutral zone: ~55</li>
                      <li>Altcoin season signal: &gt;75</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Select Altcoins Performance */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Select Altcoins Outperforming</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded">
                    <p className="font-bold">Solana (SOL)</p>
                    <p className="text-green-500">+5% YTD</p>
                    <p className="text-yellow-500/70">Strong fundamentals</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <p className="font-bold">XRP</p>
                    <p className="text-green-500">+21% YTD</p>
                    <p className="text-yellow-500/70">Regulatory clarity</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <p className="font-bold">Ethereum</p>
                    <p className="text-red-500">-18% YTD</p>
                    <p className="text-yellow-500/70">Watch ETH/BTC ratio</p>
                  </div>
                </div>
              </div>

              {/* Why This Cycle Differs */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Why This Cycle Might Differ</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Institutional Influence</h5>
                    <ul className="space-y-2">
                      <li>Spot Bitcoin ETFs</li>
                      <li>Potential U.S. policy shifts</li>
                      <li>Concentrated capital in BTC</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Dilution</h5>
                    <ul className="space-y-2">
                      <li>New altcoin projects</li>
                      <li>Capital spread thin</li>
                      <li>Focus on quality</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Macro Factors</h5>
                    <ul className="space-y-2">
                      <li>M2 money supply growth</li>
                      <li>High interest rates (4.19%)</li>
                      <li>Bitcoin stability premium</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Indicators */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Indicators to Watch</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Metrics</h5>
                    <ul className="space-y-2">
                      <li>Bitcoin Dominance &lt; 60%</li>
                      <li>ETH/BTC Ratio rise</li>
                      <li>Altcoin Season Index &gt; 75</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Sector Narratives</h5>
                    <ul className="space-y-2">
                      <li>AI integration</li>
                      <li>DeFi innovation</li>
                      <li>Real-world asset tokenization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Outperform BTC with a Small-Stack Rotation — 2025-Q1 2026 Playbook
            </h3>
            <div className="space-y-8 text-gray-300">
              {/* Cycle Analysis */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">1. Cycle Check: Same Rhyme, New Verse</h4>
                <p className="text-lg">
                  Bitcoin dominance ripped for 176 weeks, but ETH/BTC is printing a textbook cup-and-handle that historically kicks off alt rotations. A weekly close above 0.02596 BTC unlocks a 30-55% move and the usual tide that lifts other boats.
                </p>
              </div>

              {/* Capital Efficiency Framework */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">2. Capital-Efficiency Framework</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-yellow-500/30">
                        <th className="py-3 px-4 text-left">Sleeve</th>
                        <th className="py-3 px-4 text-left">% of stack</th>
                        <th className="py-3 px-4 text-left">Objective</th>
                        <th className="py-3 px-4 text-left">Why it works</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-yellow-500/30">
                        <td className="py-3 px-4">Core BTC</td>
                        <td className="py-3 px-4">80%</td>
                        <td className="py-3 px-4">Stay long the benchmark</td>
                        <td className="py-3 px-4">Liquidity + institutional bid (ETFs, corporates)</td>
                      </tr>
                      <tr className="border-b border-yellow-500/30">
                        <td className="py-3 px-4">Rotation bucket</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">2-4× BTC in sats</td>
                        <td className="py-3 px-4">Deploy only at HTF supports & breakouts</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Meme flyer bucket</td>
                        <td className="py-3 px-4">5%</td>
                        <td className="py-3 px-4">Optional moonshots</td>
                        <td className="py-3 px-4">Defined risk; asymmetric upside</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-lg">
                  You&apos;re never more than 20% exposed to under-performers therefore a BTC melt-up doesn&apos;t wreck the book.
                </p>
              </div>

              {/* High-Conviction Targets */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">3. High-Conviction Rotation Targets (BTC pairs only)</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Majors</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">ETH/BTC 0.025</p>
                        <p>Weekly close &gt; 0.026</p>
                        <p>+30-55%</p>
                        <p className="text-yellow-500/70">Pectra + dank-sharding, ETH ETF flows</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">SOL/BTC 0.00235</p>
                        <p>Break + retest 0.0024</p>
                        <p>+15-20%</p>
                        <p className="text-yellow-500/70">Firedancer, concurrent-proposer upgrade</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Infra / Next Wave</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">AVAX/BTC 0.00020</p>
                        <p>Wave-5 bottom → reclaim 0.00027</p>
                        <p>+70%</p>
                        <p className="text-yellow-500/70">Avalanche9000 slashes subnet costs 90%</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">SUI/BTC 0.000031</p>
                        <p>Hold unlock lows, reclaim 0.000036</p>
                        <p>+30-50%</p>
                        <p className="text-yellow-500/70">DeFi+gaming roadmap, Cetus recovery goodwill</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">LINK/BTC 0.000135</p>
                        <p>Bounce off reversal zone</p>
                        <p>+40-60%</p>
                        <p className="text-yellow-500/70">CCIP in Brazil CBDC, TradFi tokenization pilots</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">High Beta Yield</h5>
                    <div className="bg-black/30 p-4 rounded">
                      <p className="font-bold">HYPE/BTC 0.00032</p>
                      <p>Any 10% pullback into 20-DMA</p>
                      <p>+50-100%</p>
                      <p className="text-yellow-500/70">97% revenue buy-backs ($858M in 7 mo)</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Meme Satellites</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">DOGE/BTC 0.0000020</p>
                        <p>Break above 0.0000025</p>
                        <p>+25-40%</p>
                        <p className="text-yellow-500/70">Social spikes often front-run altseason</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">FART/BTC 0.0000105</p>
                        <p>Liquidity spikes only</p>
                        <p>Lottery</p>
                        <p className="text-yellow-500/70">Pure meme virality; size tiny</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded">
                        <p className="font-bold">REKT/BTC ≈2.6e-7 USD</p>
                        <p>n/a (illiquid)</p>
                        <p>Lottery</p>
                        <p className="text-yellow-500/70">Rumor-driven; track new listings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution Rules */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">4. Execution & Risk Rules</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Wait for ETH/BTC weekly breakout → that&apos;s your green-light.</li>
                  <li>Scale-in 25% tranches at trigger levels; invalidate if pair closes two candles below prior HTF support.</li>
                  <li>Recycle winners into BTC when targets hit or ETH dominance stalls at 22-24%.</li>
                  <li>Use static 2% portfolio risk per trade; memes get 0.5%.</li>
                </ol>
              </div>

              {/* Tracking Dashboard */}
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">5. Tracking Dashboard</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>ETH/BTC neckline 0.02596 BTC → alert.</li>
                  <li>BTC dominance &lt; 50% confirms rotation.</li>
                  <li>HYPE buy-back wallet inflow &gt; $5M/day = momentum.</li>
                  <li>SUI unlock calendar + validator votes for sentiment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Market Analysis
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Cycle Patterns & Trends
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Bitcoin Focus
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Institutional Adoption
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🚀</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Altcoin Strategy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Growth Opportunities
              </p>
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
                  <h3 className="text-xl font-bold text-yellow-500">{faq.q}</h3>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-yellow-500 transition-transform",
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
