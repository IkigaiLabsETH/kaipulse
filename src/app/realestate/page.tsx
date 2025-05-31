'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
