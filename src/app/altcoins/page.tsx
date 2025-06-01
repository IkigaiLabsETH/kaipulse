'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function AltcoinsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "Is $110K the cycle top?",
      a: (
        <div className="space-y-6">
          <p className="text-lg">
            Halving-progress math suggests &quot;probably not.&quot; Let&apos;s break down why:
          </p>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">1. What the carrot-chart actually shows</h5>
            <p className="mb-4">The orange bands mark the first ≈28% of every post-halving epoch:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Halving-1 (2012): 28% progress ≈ Jan-2013, price ~$15—but the real peak was $1,150 eleven months later.</li>
              <li>Halving-2 (2016): 28% progress ≈ Mar-2017, price ~$1,250—cycle peak $19,800 nine months later.</li>
              <li>Halving-3 (2020): 28% progress ≈ Feb-2021, price ~$50K—final peak $69K nine months later.</li>
            </ul>
            <p className="mt-4">
              We&apos;re now just past the same 28% mark for Halving-4 (April 2024 ➜ early Jun 2025). Price printed a new ATH at $111,970 on May-22, but if history rhymes the vertical blow-off normally lands ~65-80% into the epoch—i.e., Q4 2025 ↔ Q1 2026.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">2. Historical multiples still point higher</h5>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="py-3 px-4 text-left">Cycle</th>
                    <th className="py-3 px-4 text-left">Pre-halving trough → 28% mark</th>
                    <th className="py-3 px-4 text-left">28% mark → cycle top</th>
                    <th className="py-3 px-4 text-left">Total trough → top</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-500/30">
                    <td className="py-3 px-4">2012-13</td>
                    <td className="py-3 px-4">×8</td>
                    <td className="py-3 px-4">×77</td>
                    <td className="py-3 px-4">×600</td>
                  </tr>
                  <tr className="border-b border-yellow-500/30">
                    <td className="py-3 px-4">2016-17</td>
                    <td className="py-3 px-4">×3</td>
                    <td className="py-3 px-4">×16</td>
                    <td className="py-3 px-4">×48</td>
                  </tr>
                  <tr className="border-b border-yellow-500/30">
                    <td className="py-3 px-4">2020-21</td>
                    <td className="py-3 px-4">×6</td>
                    <td className="py-3 px-4">×1.4</td>
                    <td className="py-3 px-4">×8.5</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">2024-26</td>
                    <td className="py-3 px-4">×4.3 (from ~$26K low to $112K)</td>
                    <td className="py-3 px-4">?</td>
                    <td className="py-3 px-4">?</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Even using the more modest 2020-21 template, another 1.4-2.0× from $110K projects $150-220K.
            </p>
            <div className="mt-4 bg-black/30 p-4 rounded">
              <p className="font-bold text-yellow-500/90 mb-2">Analyst Consensus:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Cointelegraph consensus range $180-250K</li>
                <li>TA breakout models eye $200K in 2025</li>
                <li>AI and quant desks see $135-150K as &quot;base case,&quot; not ceiling</li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">3. What could invalidate a higher-high thesis?</h5>
            <ol className="list-decimal list-inside space-y-2">
              <li>Macro shock – aggressive rate hikes, credit crunch.</li>
              <li>ETF outflow reversal – if institutions exit and GBTC-type selling returns.</li>
              <li>Reg-risk event – e.g., U.S. spot-market crackdown that chills liquidity.</li>
            </ol>
            <p className="mt-4">
              A weekly close below the 200-day SMA (~$88K) would be the first technical red flag; losing the prior ATH region ($69-70K) would almost certainly mark a cycle failure.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">4. Playbook if you fear $110K was it</h5>
            <ul className="list-disc list-inside space-y-2">
              <li>Trail stops up on cash BTC or long-dated calls; no reason to round-trip massive gains.</li>
              <li>Stagger profit-taking 5-10% at each new $10K increment; redeploy on confirmed support.</li>
              <li>Hedge with short-dated covered calls above $130K—harvest theta while retaining upside.</li>
              <li>Rotation sleeve stays live: if BTC stalls near-term, sats earned on ETH/SOL/AVAX etc. continue compounding.</li>
            </ul>
          </div>

          <div className="bg-black/30 p-4 rounded">
            <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Bottom Line</h5>
            <p>
              Halving math, time-based analogs and still-bullish macro/flow signals imply $110K looks more like mid-cycle, not finale. But tops are only obvious in hindsight—so manage risk as if either outcome is possible.
            </p>
          </div>
        </div>
      ),
    },
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
    {
      q: "What can we expect in the 2026/2027 bear market?",
      a: (
        <div className="space-y-6">
          <p className="text-lg">
            While predicting exact lows is speculative, historical patterns and current market dynamics provide valuable insights for the anticipated 2026/2027 bear market.
          </p>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Historical Context & Four-Year Cycle</h5>
            <div className="bg-black/30 p-4 rounded">
              <p className="mb-4">Past bear markets have seen Bitcoin drop by 50–85% from cycle peaks:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>2017–2018: $20,000 → $3,200 (84% drop)</li>
                <li>2021–2022: $69,000 → $16,500 (76% drop)</li>
              </ul>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Price Predictions for 2026/2027</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h6 className="font-bold text-yellow-500/90 mb-2">If 2025 Peak is $140,000–$150,000:</h6>
                <ul className="space-y-2 list-disc list-inside">
                  <li>60–80% correction: $28,000–$52,500</li>
                  <li>2027 bottom: $30,000–$40,000</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h6 className="font-bold text-yellow-500/90 mb-2">If 2025 Peak is $200,000–$250,000:</h6>
                <ul className="space-y-2 list-disc list-inside">
                  <li>60–80% correction: $50,000–$87,500</li>
                  <li>2027 bottom: $50,000–$70,000</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Key Factors Influencing the Bear Market</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <h6 className="font-bold text-yellow-500/90 mb-2">Bullish Factors</h6>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Institutional ETF adoption</li>
                  <li>Corporate reserves (MicroStrategy, BlackRock)</li>
                  <li>Whale accumulation reducing supply</li>
                  <li>Regulatory clarity</li>
                </ul>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <h6 className="font-bold text-yellow-500/90 mb-2">Bearish Factors</h6>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Macroeconomic conditions</li>
                  <li>Regulatory uncertainty</li>
                  <li>Market sentiment shifts</li>
                  <li>Profit-taking pressure</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Analyst Consensus</h5>
            <div className="bg-black/30 p-4 rounded">
              <ul className="space-y-2 list-disc list-inside">
                <li>Rekt Capital: $30,000–$50,000 range for 2027 bottom</li>
                <li>CoinGape: $115,000–$131,000 range (less severe correction)</li>
                <li>BeInCrypto: $51,466 potential low in early 2027</li>
                <li>CoinMarketCap: $30,000–$50,000 based on historical cycles</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/30 p-4 rounded">
            <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Critical Considerations</h5>
            <ul className="space-y-2 list-disc list-inside">
              <li>Predictions are speculative and not guarantees</li>
              <li>Four-year cycle may evolve with institutional adoption</li>
              <li>Monitor macroeconomic trends and whale activity</li>
              <li>Consider ETF inflows as a key indicator</li>
              <li>Always conduct your own research</li>
            </ul>
          </div>

          <div className="bg-black/30 p-4 rounded">
            <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Conclusion</h5>
            <p>
              The most likely bottom for the 2026/2027 bear market is $30,000–$50,000, with recovery starting in 2027 as the next halving approaches. However, increased institutional adoption could result in a higher low ($95,000–$115,000) if selling pressure is mitigated. Monitor key indicators and approach predictions with caution.
            </p>
          </div>
        </div>
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

                  <div className="mt-8">
                    <h5 className="text-xl font-bold text-yellow-500 mb-4">The $1M Bitcoin Thesis: Supply Mechanics & Macro Reality</h5>
                    
                    <div className="space-y-6">
                      <div>
                        <h6 className="text-lg font-bold text-yellow-500/90 mb-2">Supply Reality Check</h6>
                        <ul className="space-y-2 list-disc list-inside">
                          <li>19.87M BTC exist in total</li>
                          <li>3-4M BTC lost forever (death, accidents, lost keys)</li>
                          <li>~16M BTC theoretically available</li>
                          <li>70%+ hasn&apos;t moved in over a year</li>
                          <li>ETFs, corporates, sovereigns accumulating aggressively</li>
                          <li>Real float: Potentially as low as 2M BTC</li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="text-lg font-bold text-yellow-500/90 mb-2">Global Macro Powder Keg</h6>
                        <ul className="space-y-2 list-disc list-inside">
                          <li>US printing $1T every 100 days</li>
                          <li>BOJ trading bonds like poker chips</li>
                          <li>China&apos;s property market crisis</li>
                          <li>Europe&apos;s political instability</li>
                          <li>$500T global capital seeking safe haven</li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="text-lg font-bold text-yellow-500/90 mb-2">The Math of Panic</h6>
                        <p className="mb-4">
                          You don&apos;t need mass adoption. You need 2-3% of global capital to panic. That&apos;s enough to send $10T trying to squeeze into 1-2M available coins. That&apos;s $5M per coin math. Conservatively.
                        </p>
                        <p>
                          Even with sloppy execution, even if half the capital gets distracted by other assets - you still overshoot $1M BTC on basic supply mechanics alone.
                        </p>
                      </div>

                      <div>
                        <h6 className="text-lg font-bold text-yellow-500/90 mb-2">The Final Collateral Layer</h6>
                        <p>
                          Bitcoin is becoming the monetary triage - the blood transfusion for a dying fiat system clogged with IOUs, zombie debt, and fraudulent accounting. When the bid hits, there will be no ask. Because the people who own it - aren&apos;t selling it. They&apos;ll be the only ones with actual capital left.
                        </p>
                      </div>
                    </div>
                  </div>
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
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/RoRZE2DpEzE"
                title="The $1M Bitcoin Thesis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

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

          {/* ETH/BTC Opportunity Cost Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              ETH/BTC Opportunity Cost Analysis
            </h3>
            <div className="space-y-8 text-gray-300">
              <div className="bg-black/30 p-6 rounded border-l-4 border-yellow-500">
                <blockquote className="text-xl italic text-yellow-500/90">
                  &ldquo;ETH would have to goto 20k just to breakeven with the market to make up for opportunity cost&rdquo;
                </blockquote>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Historical Performance Context</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">2021 Peak Metrics</h5>
                    <ul className="space-y-2">
                      <li>ETH: ~$5,000</li>
                      <li>BTC: ~$69,000</li>
                      <li>ETH/BTC Ratio: 0.072</li>
                      <li>Market Cycle: Retail-driven</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Current Metrics (2025)</h5>
                    <ul className="space-y-2">
                      <li>ETH: ~$2,500</li>
                      <li>BTC: ~$110,000</li>
                      <li>ETH/BTC Ratio: 0.023</li>
                      <li>Market Cycle: Institutional-driven</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Opportunity Cost Analysis</h4>
                <div className="bg-black/30 p-4 rounded">
                  <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Performance Comparison</h5>
                  <ul className="space-y-2">
                    <li>BTC Performance: +59% (69K → 110K)</li>
                    <li>ETH Performance: -50% (5K → 2.5K)</li>
                    <li>Required ETH Price to Match BTC: ~$7.95K</li>
                    <li>Required ETH Price to Outperform: $10-12K</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Considerations</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Evolution</h5>
                    <ul className="space-y-2">
                      <li>Institutional adoption</li>
                      <li>ETF developments</li>
                      <li>Regulatory clarity</li>
                      <li>Market maturity</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">ETH Improvements</h5>
                    <ul className="space-y-2">
                      <li>The Merge completed</li>
                      <li>Pectra upgrade coming</li>
                      <li>Layer 2 scaling</li>
                      <li>Ecosystem growth</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded">
                    <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Risk Factors</h5>
                    <ul className="space-y-2">
                      <li>Competition from L2s</li>
                      <li>Regulatory uncertainty</li>
                      <li>Technical complexity</li>
                      <li>Market sentiment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-4 rounded">
                <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Conclusion</h5>
                <p>
                  While ETH would need to reach $7-8K to match BTC&apos;s performance since 2021, the $20K target represents an extreme outperformance scenario. The opportunity cost analysis should be balanced against ETH&apos;s unique value proposition, upcoming catalysts, and the evolving market structure. Investors should consider both the historical performance gap and the potential for future outperformance based on fundamental developments.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Visual Section */}
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/altcoins.jpeg"
                alt="Crypto Market Analysis Visualization"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
