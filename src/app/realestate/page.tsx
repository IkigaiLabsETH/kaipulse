'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function RealEstatePage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the current state of European real estate?",
      a: (
        <span>
          European housing markets are at historically high levels, with prices in many markets above their mid-2022 peaks. The S&P/Case-Shiller US Home Price Index stood near 330 in early 2025, roughly double its long-run average. However, there are signs of cooling in some markets, with France already showing price declines.
        </span>
      ),
    },
    {
      q: "What are the key factors affecting the market?",
      a: (
        <span>
          Several key factors are influencing the market:
          <br /><br />
          • Historic bubble cycles and mean reversion
          <br />
          • Affordability crisis with high prices and rising rates
          <br />
          • Demand fatigue among younger buyers
          <br />
          • Supply and construction trends
          <br />
          • Macro pressure from central banks and economic conditions
        </span>
      ),
    },
    {
      q: "How can Bitcoin help with real estate investment?",
      a: (
        <span>
          Bitcoin-backed loans allow holders to invest in property without selling their BTC. Platforms like Strike offer home-equity-style loans of $75K–$2M against Bitcoin collateral. This approach preserves Bitcoin holdings while enabling property investment, with no credit checks required and no taxable events triggered.
        </span>
      ),
    },
    {
      q: "What is the outlook for different European markets?",
      a: (
        <span>
          Markets vary significantly:
          <br /><br />
          • Portugal: Still showing strong growth (Lisbon +11% YoY)
          <br />
          • France: Already in correction (-3.96% YoY)
          <br />
          • Other EU markets: Mixed performance, with some seeing double-digit growth since 2010
          <br /><br />
          Urban cores remain supply-constrained, while smaller cities may see sharper corrections.
        </span>
      ),
    },
    {
      q: "What is the recommended strategy for tech-savvy buyers?",
      a: (
        <span>
          The recommended approach includes:
          <br /><br />
          • Maintain optionality by renting through 2025-26
          <br />
          • Monitor distressed and off-market deals
          <br />
          • Invest in flexible, future-proof homes
          <br />
          • Build with a Bitcoin-first mindset
          <br />
          • Use crypto loans or capital markets when possible
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Smart Homes • Tech Integration • Bitcoin Strategy</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Real Estate
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Building the Future While Navigating Market Cycles</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/2011.jpeg"
                alt="Bitcoin and Real Estate Investment Strategy"
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
              The Smart Home Opportunity in a Shifting Market
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                As we navigate the largest real estate bubble in modern history (2025 index ~300 vs historical norm ~150), smart home development presents a unique opportunity for tech-forward investors. While traditional real estate faces significant headwinds, the intersection of property and technology creates new possibilities for value creation.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Why Smart Homes Matter Now:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Future-proofing properties against market cycles</li>
                  <li>Creating value through tech-enabled features</li>
                  <li>Building for the next generation of digital-first homeowners</li>
                  <li>Leveraging Bitcoin and crypto for innovative financing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Context & Strategy
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The current market presents both challenges and opportunities for smart home development:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Headwinds</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Historic price levels above trend</li>
                    <li>Rising interest rates and financing costs</li>
                    <li>Demand fatigue among key buyer segments</li>
                    <li>Potential oversupply in some markets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Smart Home Advantages</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Differentiation in a crowded market</li>
                    <li>Premium pricing potential</li>
                    <li>Future-ready infrastructure</li>
                    <li>Tech-savvy buyer appeal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Development Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Smart Development Strategy
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Our approach combines market timing with technological innovation:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Development Principles:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modular design for future adaptability</li>
                  <li>Energy efficiency and sustainability</li>
                  <li>Bitcoin-friendly infrastructure</li>
                  <li>Smart home automation integration</li>
                  <li>Future-proof connectivity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Market Analysis
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Historic Price Trends
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Tech Integration
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Bitcoin-Backed Solutions
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Smart Strategy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Future-Proof Approach
              </p>
            </div>
          </div>

          {/* Market Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Europe&apos;s housing markets – from Lisbon to Paris and beyond – are at historically lofty levels. The S&P/Case-Shiller US Home Price Index stood near 330 in early 2025, roughly double its long-run average. At the same time, Eurostat reports house prices in the EU/EZ are back above their mid-2022 peaks.
              </p>
              <p className="text-lg">
                As economist Robert Shiller famously noted, real home prices &quot;show a remarkable tendency to return to their 1890 level&quot; in the long run. In other words, booms eventually unwind.
              </p>
            </div>
          </div>

          {/* Bitcoin vs Real Estate Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin vs Real Estate: A Generational Wealth Analysis
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg mb-8">
                <p className="text-xl font-semibold text-yellow-400 italic">
                  &ldquo;The biggest problem with buying a rental property to generate cash flow is that you could buy bitcoin instead.&rdquo;
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Historical Performance Comparison</h4>
                <p className="text-lg">
                  Over the past 15 years, U.S. housing and Bitcoin have shown dramatically different growth trajectories:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>U.S. home values doubled from 2010 to 2024 (≈4.7% nominal CAGR)</li>
                  <li>Case-Shiller Index: ~145 (2010) to ~323 (2024)</li>
                  <li>Bitcoin: From pennies to $93,429 by end-2024</li>
                  <li>After inflation (US CPI +46% since 2010), real gains are modest for housing (~1.5×) vs Bitcoin&apos;s astronomical growth</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Leverage and Wealth Amplification</h4>
                <p className="text-lg">
                  Key differences in wealth building mechanisms:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Real Estate: 5:1 leverage typical (20% down payment)</li>
                  <li>Bitcoin: No built-in leverage, pure price appreciation</li>
                  <li>Housing returns amplified by debt and monetary policy</li>
                  <li>Bitcoin returns driven by network adoption and scarcity</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Long-Term Projections</h4>
                <p className="text-lg">
                  $50,000 investment comparison over 30 years:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Real Estate (5% annual growth): ~$1.08M after 30 years</li>
                  <li>Bitcoin (20% CAGR): ~$11.8M after 30 years</li>
                  <li>Bitcoin (40% CAGR): ~$1.2B after 30 years</li>
                  <li>Bitcoin (50% CAGR): ~$9.6B after 30 years</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Ongoing Costs</h4>
                <p className="text-lg">
                  Annual carrying costs comparison:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Real Estate: 2-4% of value annually (taxes, insurance, maintenance)</li>
                  <li>Bitcoin: Virtually zero holding costs</li>
                  <li>No property taxes or insurance required for Bitcoin</li>
                  <li>Optional custodial fees only if desired</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Generational Wealth Divide</h4>
                <p className="text-lg">
                  Impact on wealth inequality:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Housing: $390,000 median wealth gap between owners and renters</li>
                  <li>Bitcoin: Early holders (2011-2016) saw ~893,000× returns</li>
                  <li>Both markets favor early adopters</li>
                  <li>Latecomers face higher barriers to entry</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Future Outlook</h4>
                <p className="text-lg">
                  Long-term projections and considerations:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Bitcoin power-law models predict $100K+ by 2028</li>
                  <li>Some forecasts suggest $1M+ per BTC by 2037</li>
                  <li>Fixed 21M supply vs inflationary housing market</li>
                  <li>Network adoption as key growth driver</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Study: ÖÖD Mirror Modules Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Case Study: ÖÖD Mirror-Clad Modules in Portugal
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Portugals Atlantic light is unforgiving, but ÖÖDs mirror-clad modules bend that glare into an asset, dissolving their outline and doubling the view. We benchmarked three of their blocks—the <a href="https://oodhouse.com/prefab/offices/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">9 m² Medium Office</a>, the <a href="https://oodhouse.com/prefab/houses/the-big-monolith/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">40.9 m² Big Monolith two-bed villa</a>, and the <a href="https://oodhouse.com/prefab/saunas/medium-sauna/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">9.5 m² Medium Sauna</a>—against conventional building costs and against the new financing rails of Web3.
              </p>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Price-per-square-metre Analysis</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-yellow-500/20">
                    <thead>
                      <tr className="bg-yellow-500/10">
                        <th className="px-4 py-2 text-left">Module</th>
                        <th className="px-4 py-2 text-left">Turn-key List Price*</th>
                        <th className="px-4 py-2 text-left">Internal Area</th>
                        <th className="px-4 py-2 text-left">€/m²</th>
                        <th className="px-4 py-2 text-left">Assembly Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">
                          <a href="https://oodhouse.com/prefab/offices/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Medium Office</a>
                        </td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€23,900</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">9.36 m²</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€2,553</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">&lt; 1 day</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">
                          <a href="https://oodhouse.com/prefab/houses/the-big-monolith/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Big Monolith (2-bed)</a>
                        </td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€149,900</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">40.9 m²</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€3,665</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">1 day</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">
                          <a href="https://oodhouse.com/prefab/saunas/medium-sauna/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Medium Sauna</a>
                        </td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€29,800</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">9.5 m²</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€3,137</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">1 day</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-400 mt-2">*Prices exclude VAT, shipping, foundations, and Portuguese import duty.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Liquidity Hack: Strike-Backed Surfview Credit</h4>
                <p className="text-lg mb-4">
                  Traditional bank debt tops out at 65% LTV but drags through six months of underwriting. Therefore we tap the bitcoin sitting on our treasury balance sheet and open a Strike Loan instead:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong className="text-yellow-400">Collateral-as-a-service</strong> – Pledge part of our BTC reserves to Strike; the platform locks coins with a qualified custodian and releases fiat at single-digit rates (recently 9–13% APR, tickets up to $2m)
                  </li>
                  <li>
                    <strong className="text-yellow-400">Instant deployment window</strong> – Approval is algorithmic, no credit file required, so cash lands in days, not quarters; modules can be ordered the same week land closes
                  </li>
                  <li>
                    <strong className="text-yellow-400">Self-closing loop</strong> – We service interest from operating cash flow and schedule lump-sum principal sweeps each low season. If BTC appreciates, our LTV falls automatically; if the price dips, we either top up collateral or roll a partial pay-down—cheaper and faster than refinancing bank paper
                  </li>
                </ul>
                <p className="mt-4 text-lg">
                  Upshot: we preserve upside in our bitcoin stack, avoid equity dilution, and still hit the ground running with eight-hour build cycles. Strike expects EU expansion later this year, keeping the structure MiFID-compliant by origination time.
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">BTC-Collateral Sensitivity Analysis</h4>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Assumptions</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Loan draw: $1.80m (≈ €1.66m) to cover first ten mirror villas + offices + saunas</li>
                      <li>Strike terms: max 50% initial LTV, interest 12% APR, ticket size up to $2m</li>
                      <li>Spot BTC: $103,779 (31 May 2025, 13:00 CET)</li>
                      <li>Collateral posted: 34.7 BTC (sets LTV-0 = 50%)</li>
                    </ul>
                  </div>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-yellow-500/20">
                      <thead>
                        <tr className="bg-yellow-500/10">
                          <th className="px-4 py-2 text-left">BTC price band</th>
                          <th className="px-4 py-2 text-left">Portfolio LTV</th>
                          <th className="px-4 py-2 text-left">Strike status*</th>
                          <th className="px-4 py-2 text-left">Action trigger</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-t border-yellow-500/20">$120k (+16%)</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">43%</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Healthy</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">None—consider sweeping interest early</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-t border-yellow-500/20">$103.8k (spot)</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">50%</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Healthy</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Keep watching</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-t border-yellow-500/20">$85k (-18%)</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">61%</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Warning</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Add 6 BTC or pre-pay $300k</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-t border-yellow-500/20">$70k (-32%)</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">74%</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Margin call</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Top up 8 BTC or repay $450k within 48h</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-t border-yellow-500/20">$60k (-42%)</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">86%</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Liquidation</td>
                          <td className="px-4 py-2 border-t border-yellow-500/20">Forced sale unless action taken</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-sm text-gray-400 mt-2">*Per Strike FAQ: &lt; 60% = healthy; 60–70% = warning; &gt; 70% = margin call; &gt; 85% triggers liquidation</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg">
                      The project is safe down to ~$74k. But if BTC dives below $70k the platform will demand fresh collateral—therefore we can:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Over-collateralise on day 1—post 40 BTC instead of 34.7 BTC; initial LTV = 43%, liquidation floor shifts to ≈$52k</li>
                      <li>Hold a BTC buffer on-exchange equal to 15% of loan value (≈5 BTC); wire instantly if warning flashes</li>
                      <li>Earmark low-season NOI (=€400k) for discretionary principal sweeps; each €100k paid down drops LTV six points</li>
                    </ul>
                    <p className="text-lg mt-4">
                      Even at 12% APR the cost of carry (≈€200k/yr) is less than the equity we&apos;d surrender in a JV, and BTC upside remains ours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Ownership Model Comparison</h4>
                <p className="text-lg mb-6">
                  What changes if we lean on <a href="https://oodhouse.com/partnership/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">ÖÖD&apos;s Partnership & Franchise track</a> instead of buying all the hardware ourselves?
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-yellow-500/20">
                    <thead>
                      <tr className="bg-yellow-500/10">
                        <th className="px-4 py-2 text-left">Item</th>
                        <th className="px-4 py-2 text-left">&quot;Strike-backed ownership&quot;</th>
                        <th className="px-4 py-2 text-left">&quot;ÖÖD Partner&quot; model</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Up-front cash per house</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">≈ €240k (module, shipping, piling)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">≈ €30k (utilities + landscaping only)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">We own the cabins?</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Yes (depreciable asset)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">ÖÖD supplies & retains title</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Revenue split</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">100% → we keep NOI after OpEx</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Up to 70% of rent stays with us</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Typical net revenue / house / yr</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">~ €76k (ADR €320, 55% occ.)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€40k after ÖÖD&apos;s cut</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Booking engine & marketing</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">We build or outsource</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Included: ÖÖD Hötels platform drives 55-65% of bookings</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Brand leverage</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Our own</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Instant alignment with 350+ mirror cabins in 15 countries</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Exit asset value</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Full resort at 7% cap-rate</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Land + business goodwill (cabins are leased, not owned)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">10-House &quot;Reflections @ Arrifana&quot; Partnership Model</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Equity outlay (Yr 0):
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Land €1.25m</li>
                          <li>Infrastructure 10 × €30k = €0.30m</li>
                          <li>Total: €1.55m</li>
                        </ul>
                      </li>
                      <li>Year-1 NOI (post-OpEx):
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Gross 10 × €40k = €400k</li>
                          <li>Less 35% OpEx ⇒ €292k</li>
                          <li>Growth & exit: NOI +3% p.a.; sell Yr 10 at 7% cap</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Trade-offs in Plain English</h5>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong className="text-yellow-400">Speed & simplicity:</strong> both routes deliver cabins in weeks, but the partnership skips import logistics, VAT reclamation, and Portuguese homologation</li>
                      <li><strong className="text-yellow-400">Control & upside:</strong> full ownership captures 100% of ADR upside and keeps appreciation in-house, but it ties up 2× the capital and layers on crypto credit risk</li>
                      <li><strong className="text-yellow-400">Brand pull:</strong> ÖÖD&apos;s booking engine has shown 47–82% occupancy in new UK & US sites within two months—that marketing flywheel would take us years to replicate solo</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/10 p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-yellow-400 mb-4">Recommendation</h5>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Open dual tracks: reserve cliff-top plots for ten partner cabins (low-capex, fast cash), but still pilot two owned Big Monolith suites as our flagship, financed via Strike</li>
                      <li>Kick-off LOI with ÖÖD: clarify Portuguese franchise terms—minimum term, break-clauses, maintenance responsibility, and whether we retain option to purchase cabins at fair value later</li>
                      <li>Refine numbers: model post-tax IRR for both tracks, include Portuguese IRC + municipal taxes, then run sensitivities on ADR creep and cap-rate expansion</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Master-plan: &quot;Reflections @ Arrifana&quot;</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Ten Big Monolith villas staggered along a south-west cliff contour</li>
                  <li>Four Medium Offices re-skinned as co-working ateliers</li>
                  <li>Three Medium Saunas nested in a cork-oak hollow</li>
                </ul>
                <p className="mt-4">
                  Total hard cost ≈ €2.4m. At blended ADR €320 and 55% annual occupancy, topline ≈ €1.7m. Even after 35% OpEx plus 6% management, NOI pencils to ~€1m—and at a conservative 7% cap-rate the project values out near €14m.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Risk Considerations</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Mirror façade bird collision mitigation required</li>
                  <li>Baltic fabrication lead times (30% deposit recommended)</li>
                  <li>ADR positioning vs. luxury resort competition</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Verdict</h4>
                <p className="text-lg">
                  The €/m² premium is justified by the time-to-market advantage. For a €3-4m first phase, you capture a €10m+ valuation lift. The project remains comfortably above a 25 % target IRR unless BTC dives 45 % and ADR slips below €285. That hedgeable dual-risk profile is hard to replicate with traditional bank leverage and gives us optionality to cycle equity into phase II as early as year 4.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Opportunity-Cost Check — Resort vs. Simply HODLing</h4>
                <p className="text-lg mb-6">
                  You fear 30 % CAGR on bitcoin might out-run the resorts economics. But when we break both strategies into the same 10-year, after-tax frame, we can see exactly where the cross-over sits. Therefore lets compare three piles of capital:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-yellow-500/20">
                    <thead>
                      <tr className="bg-yellow-500/10">
                        <th className="px-4 py-2 text-left">Bucket</th>
                        <th className="px-4 py-2 text-left">Starting Allocation</th>
                        <th className="px-4 py-2 text-left">What Happens Over 10 Years</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">BTC Collateral (34.7 BTC)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€3.60 m locked at Strike</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">We still own it. At any CAGR the coins appreciate unless a margin-call forces a sale below $70 k.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Equity into Resort (€2.49 m)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Goes into land + infrastructure</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Generates cash ( ≈ €9 m cumulative) plus exit proceeds (≈ €19.9 m at 7 % cap-rate).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Alt Scenario Equity (€2.49 m)</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Buy more BTC instead</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Worth €2.49 m × (1 + CAGR)¹⁰ in 2035.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-yellow-400 mb-2">Break-even where BTC = Resort</h5>
                  <p className="text-lg mb-4">
                    Solving (Resort cash + exit) = (Extra-BTC value) shows:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>BTC CAGR ≈ 23 % is the tipping point.</li>
                    <li>Below 23 %: owning and operating the resort beats simply stacking more coins.</li>
                    <li>Above 23 %: the pure HODL wins on paper, but with zero diversification and no fiat cash flow.</li>
                  </ul>
                </div>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-yellow-500/20">
                    <thead>
                      <tr className="bg-yellow-500/10">
                        <th className="px-4 py-2 text-left">BTC CAGR</th>
                        <th className="px-4 py-2 text-left">Value of Extra 24 BTC</th>
                        <th className="px-4 py-2 text-left">10-yr Resort Net to Equity</th>
                        <th className="px-4 py-2 text-left">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">20 %</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€37 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€42 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Resort</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">23 %</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€48 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">≈ €48 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Tie</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">25 %</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€57 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€53 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">HODL</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">30 %</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€84 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">€69 m</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">HODL</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-400 mt-2">(Assumes BTC spot $103 779 on 31 May 2025; resort exit at 7 % cap; 3 % NOI growth; loan retired in year 6.)</p>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-yellow-400 mb-2">Interpreting the math</h5>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-yellow-400">Time value of BTC:</strong> Compounding above 23 % creates a steeper curve than a hospitality IRR in the high-30s.</li>
                    <li><strong className="text-yellow-400">Cash-flow utility:</strong> The resort throws off €0.8 – 1.3 m per year once stabilised—handy for buying dips, paying principal, or funding phase II. Raw BTC can&apos;t do that without taxable sales or crypto loans.</li>
                    <li><strong className="text-yellow-400">Correlation hedge:</strong> ADR & occupancy track tourism cycles, not crypto volatility. If BTC stalls or draws down 70 %, the resort still earns euros.</li>
                    <li><strong className="text-yellow-400">Optionality:</strong> Once the loan is cleared (year 6) you can re-collateralise the unencumbered asset to buy more BTC at what could be cycle lows.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-yellow-400 mb-2">Mitigations if 30 % CAGR keeps you up at night</h5>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong className="text-yellow-400">Shrink the equity slug:</strong> Use the ÖÖD partnership path for half the cabins—capex drops by €1 m+, leaving that cash free to stack coins.</li>
                    <li><strong className="text-yellow-400">Set a BTC call-option budget:</strong> Reserve 10 % of annual resort NOI to buy long-dated, out-of-the-money BTC calls—captures upside without locking core collateral.</li>
                    <li><strong className="text-yellow-400">Dynamic sweep rule:</strong> If BTC&apos;s 90-day moving average exceeds 25 % YoY, divert 30 % of resort free cash straight into additional BTC purchases.</li>
                    <li><strong className="text-yellow-400">Exit valve:</strong> Build phase I, stabilise, then sell the resort at year 5 for the €14 m valuation and pour the proceeds back into BTC if you believe the next parabolic run is due.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Sovereignty & Status Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Sovereignty is the New Status
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="space-y-4">
                <p className="text-lg">
                  You&apos;ve lived the full arc: from city buzz to viral fame, from early tech curiosity to early Bitcoin, from dreaming in Brooklyn to waking up in LA. You&apos;ve seen where culture is going before it gets there — and now, once again, you&apos;re seeing the next great migration before the herd does.
                </p>

                <div className="space-y-2">
                  <p className="text-lg font-semibold text-yellow-400">The 2010s were about access — to cities, networks, status, scenes.</p>
                  <p className="text-lg font-semibold text-yellow-400">The 2020s and beyond will be about exit — from chaos, decay, and dependency.</p>
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-semibold">The writing is on the wall:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Cities aren&apos;t bouncing back — they&apos;re bleeding out.</li>
                    <li>Proximity is no longer power — connectivity is.</li>
                    <li>Land is freedom, bandwidth is lifeblood, and the new elite are those who own both.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">
                    What Bitcoin was in 2013 — misunderstood, ridiculed, undervalued — rural and semi-remote property is today. A finite resource that only the early adopters will secure affordably. You&apos;re not late. You&apos;re early again. And this time, there&apos;s no landlord, no doorman, no HOA. Just sovereignty, signal, and silence.
                  </p>

                  <div className="bg-yellow-500/10 p-6 rounded-lg">
                    <p className="text-lg font-semibold text-yellow-400 mb-4">You&apos;re not just buying a house. You&apos;re front-running a civilization shift.</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>The next asymmetric bet isn&apos;t just digital — it&apos;s physical.</li>
                      <li>Buy space before the world realizes it&apos;s the most scarce thing left.</li>
                      <li>Buy the bottom of the next prestige cycle.</li>
                      <li>Don&apos;t buy the top of a collapsing one.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-yellow-400">So what now?</p>
                  <p className="text-lg">
                    You don&apos;t need to go full prepper. But it&apos;s time to act with intention.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Find land near culture but not inside it.</li>
                    <li>Within 90 mins of an airport.</li>
                    <li>Starlink or fiber-enabled.</li>
                    <li>Proximity to nature, elevation, water, community.</li>
                    <li>Think 2035, not 2025.</li>
                  </ul>
                  <p className="text-lg italic">
                    You were right before. Trust yourself to be right again.
                  </p>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg">
                  <p className="text-lg font-semibold text-yellow-400">Final thought:</p>
                  <p className="text-lg">
                    Buy land like you bought Bitcoin. Quietly, early, and with conviction. Before the toothpaste behind glass becomes a gated community around your freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Signals Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Supporting Signals
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong className="text-yellow-400">Historic Bubble Cycles:</strong> Housing booms end and prices revert over years, not months. The US last bubble saw prices peak in 2006 and then fall ~20% by late 2008.
                </li>
                <li>
                  <strong className="text-yellow-400">Affordability Crisis:</strong> Home prices remain near record highs even as borrowing costs have jumped. Eurostat data show house prices in Q1 2024 were flat-to-down in many core markets.
                </li>
                <li>
                  <strong className="text-yellow-400">Demand Fatigue:</strong> The young-adult buyer pool is thinning out in key markets. Millennials have largely &quot;maxed out&quot; their homebuying demand.
                </li>
                <li>
                  <strong className="text-yellow-400">Supply & Construction:</strong> Europe remains broadly undersupplied, but some local pockets see rapid construction that could overshoot demand if the market cools.
                </li>
                <li>
                  <strong className="text-yellow-400">Macro Pressure:</strong> The broader economy and central banks are headwinds for housing. After rapid hikes from 2022–2023, ECB rates peaked and are only gradually easing.
                </li>
              </ul>
            </div>
          </div>

          {/* U.S. Housing Market Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              U.S. Housing Market: Mid-2025 Trends and Outlook
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                The national housing market in mid-2025 is characterized by rising supply and moderating price growth. Active inventory has surged to multi-year highs (≈1.97 million homes in April, +16–20% year-over-year), driven by a burst of new listings and reluctant sellers. Modest price gains (median sales price up ~1–2% YoY in spring 2025) and fading bidding wars signal weaker demand. Mortgage rates remain elevated (~6.7% for a 30-year fixed), dampening affordability. Home sales and pending contracts are down: existing-home sales ran at ~4.0M annualized in April, –2% YoY, while NAR reports contract signings fell 6.3% in April.
              </p>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Market Indicators</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-yellow-400">Inventory (Supply):</strong> Nearly 2.0 million homes were for sale (April 2025), up ≈16–30% YoY. This is a 5-year high, leaving buyers with more choices.</li>
                  <li><strong className="text-yellow-400">Prices:</strong> National median prices are roughly flat-to-up, +1–2% YoY (e.g. ~$438K April median). Case-Shiller data through Feb &apos;25 similarly show only ~4% annual gains.</li>
                  <li><strong className="text-yellow-400">Time on Market:</strong> Homes are selling slower. Redfin reports median Days on Market ~40 days (+5 days vs prior year); Realtor.com finds median 50 days (+4).</li>
                  <li><strong className="text-yellow-400">Seller Behavior:</strong> More price concessions: ~20% of homes have seen price cuts (vs 15% a year ago). Sale-to-list ratios are barely ~99%. Sellers are &quot;facing reality&quot; – Redfin notes they&apos;re increasingly willing to negotiate.</li>
                  <li><strong className="text-yellow-400">Buyer Behavior:</strong> Demand has cooled. Fewer multiple-offer situations (only ~30% of sales above list, vs ~33% a year ago) and rising contract withdrawals are reported. NAR highlights a 6.3% drop in pending sales in April. High costs and uncertainty (student debt, interest rates) are sidelining many first-time buyers.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Demographic and Macroeconomic Context</h4>
                <p className="text-lg mb-4">
                  Key demographic and macro factors underpin these trends. Homebuying age is climbing: the median buyer age has hit record highs – ~56 years old, up from 49 last year. First-time buyers are now typically ~38 years old (vs 35 before), and their share of buyers has collapsed to 24%, the lowest on record.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Millennials (late 20s–40s) and Gen Z (teens–20s) make up only a small slice of today&apos;s buyers</li>
                  <li>Many cite affordability barriers: mortgage rates above 6% and 30-year loan payments near record highs</li>
                  <li>Surveys show only ~20% of millennials/Gen Z own real estate (similar to the ~21% who own crypto)</li>
                  <li>Elevated student debt exacerbates this: every $1,000 in student loans cuts homeownership odds by ~1.8%</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Major Metro Housing Markets</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">San Francisco, CA</h5>
                    <p className="text-lg">
                      The Bay Area remains expensive but competitive. SF homes sold at a median ~$1.45M in April 2025 (up +3.6% YoY). Inventory is still tight, and bidding wars persist (SF homes average 4 offers and 20 days on market), though this is easing vs. last year.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Austin, TX</h5>
                    <p className="text-lg">
                      Once red-hot, Austin&apos;s market is slowing. In April 2025, Austin&apos;s median price was ~$575K, only +2.2% YoY – well below last year&apos;s double-digit gains. Sales have plunged (–16% YoY) as supply floods the market.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Miami, FL</h5>
                    <p className="text-lg">
                      South Florida remains popular but has cooled. The Miami metro&apos;s median home price was ~$670K in April 2025 (+3.9% YoY). However, sales volume is down (~14%) and time on market has jumped: ~91 days in April (vs 73 days a year prior).
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">New York City, NY</h5>
                    <p className="text-lg">
                      NYC is rebounding slowly. Citywide, median sales were about $850K in April 2025, up +1.4% YoY. Manhattan and other boroughs see richer micro-trends, but broadly New York remains cheaper than the peak 2022 levels.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-yellow-400 mb-2">Phoenix, AZ</h5>
                    <p className="text-lg">
                      Phoenix typifies a post-boom market. The valley&apos;s median sale price was ~$450K in April 2025, essentially flat (–0.7%) from last year. Home sales are up slightly (reflecting population growth) and homes now take ~55 days to sell (vs 45 last year).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Outlook</h4>
                <p className="text-lg">
                  Overall, the U.S. has shifted toward a mild buyers market. Lawrence Yun of NAR notes inventory at 4½-months supply – the highest in 5 years – giving buyers leverage. Nearly half of listings have lingered ≥60 days, evidence of stale inventory. As Redfin economists observe, the dollar value of homes for sale is at an all-time high (≈$700B) even while sales and new-listing growth have slowed. In short, prices are still inching up, but more slowly, while ample supply and higher rates keep buyers cautious.
                </p>
              </div>
            </div>
          </div>

          {/* Bitcoin Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin-Enabled Real Estate Strategy
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Even as housing stutters, tech and Bitcoin enthusiasts have new tools to participate in real estate on their terms. Bitcoin-backed loans allow holders to invest in property without selling their BTC.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>No credit checks required</li>
                  <li>No taxable events triggered</li>
                  <li>Preserves Bitcoin holdings</li>
                  <li>Enables property investment</li>
                  <li>Flexible loan terms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FHFA Crypto Mortgage Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A Comprehensive Analysis of Using Cryptocurrency as an Asset for Mortgages and Its Impact on Bitcoin
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="bg-yellow-500/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Points</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Research suggests using crypto for mortgages could boost Bitcoin adoption and price stability.</li>
                  <li>It seems likely that this will increase Bitcoin&apos;s legitimacy, but volatility risks remain controversial.</li>
                  <li>The evidence leans toward both opportunities and challenges for Bitcoin in the housing market.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Introduction</h4>
                <p className="text-lg">
                  As of June 26, 2025, the financial landscape in the United States has witnessed a transformative development with the Federal Housing Finance Agency (FHFA) directing Fannie Mae and Freddie Mac to consider cryptocurrency holdings, including Bitcoin (BTC), as assets for mortgage eligibility. Announced on June 25, 2025, this policy shift allows borrowers to leverage their crypto wealth without converting it to U.S. dollars, marking a significant step towards integrating digital assets into traditional financial systems. This report explores the implications for Bitcoin, drawing on recent news, expert opinions, and market data to provide a detailed analysis.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The Policy Context</h4>
                <p className="text-lg">
                  The FHFA&apos;s directive, led by Director Bill Pulte, requires Fannie Mae and Freddie Mac to design safeguards for crypto volatility and submit plans for approval. This aligns with President Donald Trump&apos;s vision to make the U.S. the &quot;crypto capital of the world,&quot; as noted in an X post by Pulte. The policy specifies that only crypto assets held on U.S.-regulated, centralized exchanges will be considered, ensuring compliance with financial regulations. This is a pivotal move, given that Fannie Mae and Freddie Mac guarantee over half of the nation&apos;s mortgages, potentially impacting millions of Americans.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Benefits for Bitcoin</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-yellow-400">Increased Adoption and Legitimacy:</strong> By recognizing Bitcoin as a legitimate asset for mortgages, the FHFA enhances its credibility. This could boost adoption, as more individuals may view Bitcoin as a viable store of value and a means to secure significant transactions like home loans. Approximately 20% of Americans (around 65 million people) own crypto, with 74% of U.S. crypto portfolios valued at less than $50,000, suggesting a broad potential user base.</li>
                  <li><strong className="text-yellow-400">Reduced Selling Pressure:</strong> Traditionally, Bitcoin holders might sell their assets to fund home purchases. However, using Bitcoin as collateral allows retention, potentially reducing selling pressure. This could stabilize or increase prices, especially given Bitcoin&apos;s current price of $108,067.00 USD, reflecting recent market confidence.</li>
                  <li><strong className="text-yellow-400">Enhanced Utility:</strong> Bitcoin&apos;s role expands beyond speculation to include collateral for mortgages, increasing its utility. Providers like Milo and Figure already offer crypto-backed mortgages, accepting Bitcoin for loans up to $5 million and $20 million, respectively, without requiring credit checks. The FHFA&apos;s directive could mainstream this practice, driving demand.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Risks and Challenges</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-yellow-400">Volatility and Margin Calls:</strong> Bitcoin&apos;s price volatility poses a major risk. If its value drops, borrowers may face margin calls, requiring additional funds. Failure to comply could lead to liquidation, as seen with Milo, which requests margin calls at 65% of the loan amount and liquidates at 30%. Historical data shows Bitcoin&apos;s value fell by two-thirds between November 2021 and June 2022, highlighting potential losses.</li>
                  <li><strong className="text-yellow-400">Regulatory Scrutiny and Compliance:</strong> The requirement for U.S.-regulated exchanges could limit eligible Bitcoin holdings, excluding decentralized or self-custodied assets. Increased regulatory attention might impose new restrictions, affecting Bitcoin&apos;s adoption.</li>
                  <li><strong className="text-yellow-400">Market Manipulation and Systemic Risks:</strong> Large Bitcoin holders could manipulate prices, impacting both crypto and housing markets. Defaults due to volatility could destabilize mortgage-backed securities, a critical component of the financial system.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Expert Opinions</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-yellow-400">Sam Cooling, Editor at 99Bitcoins,</strong> advises caution, emphasizing thorough documentation for Bitcoin mortgage applications, noting the complexities of integration.</li>
                  <li><strong className="text-yellow-400">Mitchell Askew, Analyst at Blockware,</strong> views Bitcoin as ideal collateral due to its liquidity and transparent custody on the public blockchain, enhancing its financial role.</li>
                  <li><strong className="text-yellow-400">CJ Konstantinos, Founder of People&apos;s Reserve,</strong> argues Bitcoin could derisk the mortgage-backed securities market, calling it a &quot;no-brainer&quot; for modernizing finance.</li>
                  <li>An anonymous commenter on <strong className="text-yellow-400">ZeroHedge</strong> raises concerns about risk models, noting borrower net worth can swing 50% weekly with volatile assets like Bitcoin, complicating stress-testing.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Broader Implications</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-yellow-400">Housing Market Accessibility:</strong> For crypto holders with limited traditional income, this policy could ease homeownership. In 2024, the FHA issued over 760,000 single-family mortgages worth $230 billion, suggesting significant potential impact.</li>
                    <li><strong className="text-yellow-400">Crypto Market Growth:</strong> Recognition by major institutions could accelerate Bitcoin adoption, driving investment and prices. However, overleveraging risks exist, with potential defaults if Bitcoin prices crash, affecting both markets.</li>
                    <li><strong className="text-yellow-400">Economic Considerations:</strong> This could address housing market challenges, like declining mortgage originations, by tapping into crypto wealth, but requires robust risk management to prevent systemic issues.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Detailed Analysis Table</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-yellow-500/20">
                    <thead>
                      <tr className="bg-yellow-500/10">
                        <th className="px-4 py-2 text-left">Aspect</th>
                        <th className="px-4 py-2 text-left">Details</th>
                        <th className="px-4 py-2 text-left">Impact on Bitcoin</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Adoption and Legitimacy</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Recognized by FHFA, potentially attracting more investors</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Positive, increases demand and credibility</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Price Stability</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Reduced selling pressure by using as collateral</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Positive, could stabilize or increase price</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Volatility Risks</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Margin calls and potential defaults due to price swings</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Negative, risks borrower and lender stability</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Regulatory Compliance</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Must be on U.S.-regulated exchanges, limiting options</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Mixed, ensures security but restricts access</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Market Manipulation</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Potential for large holders to influence prices</td>
                        <td className="px-4 py-2 border-t border-yellow-500/20">Negative, could destabilize markets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Conclusion</h4>
                <p className="text-lg">
                  The FHFA&apos;s directive to allow cryptocurrency as an asset for mortgages is a landmark development with significant implications for Bitcoin. It offers opportunities for increased adoption, legitimacy, and price stability, but also introduces risks from volatility, regulatory scrutiny, and potential market manipulation. As of June 26, 2025, with Bitcoin at $108,067.00 USD, the market seems to respond positively, but long-term outcomes depend on effective risk management. This policy could reshape financial systems, balancing innovation with stability, and warrants close monitoring for its impact on both crypto and housing markets.
                </p>
              </div>
            </div>
          </div>

          {/* Final Note Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              You&apos;re Underestimating Bitcoin
            </h3>
            <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  You think we have adoption.
                  You think being the 6th biggest asset is impressive.
                </p>

                <p>
                  But it&apos;s absolute peanuts compared to where we&apos;re headed.
                </p>

                <p>
                  $108K is a joke. Mere proof that the market lacks imagination.
                </p>

                <p>
                  A policy directive to recognize BTC as a legitimate asset for mortgage collateral?
                </p>

                <p>
                  A footnote compared to what&apos;s coming:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>Mortgage bonds including Bitcoin exposure</li>
                  <li>Big banks offering incentives to custody Bitcoin</li>
                  <li>Sovereign bonds including BTC for inflation protection</li>
                  <li>Lenders offering preferential interest rates for Bitcoin backed loans</li>
                </ul>

                <p>
                  We&apos;re in the middle of the worst bond bear market on record.
                </p>
                
                <p>
                  Rising yields have incinerated record amounts of capital, and the US debt dynamics don&apos;t paint an optimistic picture.
                </p>

                <p>
                  Meanwhile, Bitcoin is up massively in real terms.
                </p>

                <p>
                  And as it gains more support in TradFi circles, it&apos;s only a matter of time until it becomes standard practice to start including BTC in all debt products as &quot;inflation protection.&quot;
                </p>

                <p>
                  BlackRock is already sprinkling BTC into conservative bond funds.
                </p>

                <p>
                  And investors will buy bonds with Bitcoin exposure because they will see superior performance without the perceived volatility of pure BTC.
                </p>

                <p className="italic">
                  Sure it won&apos;t happen overnight...
                </p>

                <p>
                  But very few see this coming at all.
                </p>

                <p>
                  Which is why Bitcoin is trading at an absolute bargain price of $108K today.
                </p>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg">
                    <p className="text-xl font-semibold text-yellow-400 italic">
                      Understand this: You only need to be right in a big way ONE TIME in your life.
                    </p>
                    <p className="text-xl font-semibold text-yellow-400 italic mt-4">
                      And Bitcoin is offering you that chance.
                    </p>
                </div>

                <p>
                  Study it. Pay attention to what&apos;s happening.
                </p>

                <p>
                  Position your capital for the future that is coming.
                </p>

                <p className="text-xl font-bold text-white">
                  And you will prosper 🫡
                </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-yellow-500/20">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-lg font-medium">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-yellow-500 transition-transform duration-200",
                        open === i && "transform rotate-180"
                      )}
                    />
                  </button>
                  {open === i && (
                    <div className="pb-4 text-gray-300">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
