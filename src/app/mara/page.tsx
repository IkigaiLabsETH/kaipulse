'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function MaraPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is MARAs current Bitcoin holdings and value?",
      a: (
        <span>
          MARA holds approximately 48,237 BTC, worth around $5.02 billion as of April 2025. This is close to the user&apos;s figure of 49,140 BTC worth $5.13 billion, suggesting a slight overestimation or different valuation date.
        </span>
      ),
    },
    {
      q: "What is MARAs mining capacity and output?",
      a: (
        <span>
          MARA&apos;s hashrate is 57.3 EH/s, closely matching the user&apos;s 57 EHS. However, its April 2025 mining output of 705 BTC is lower than the user&apos;s 1,000 BTC per month estimate. This discrepancy may be due to seasonal variations, mining difficulty increases, or the user&apos;s projection based on earlier trends.
        </span>
      ),
    },
    {
      q: "What is MARAs market position and valuation?",
      a: (
        <span>
          MARA&apos;s market cap is $5.79 billion, slightly above the user&apos;s $5 billion estimate. The company&apos;s mNav (multiple of net asset value) is currently 1.15, indicating the stock trades above its Bitcoin asset value. This reflects operational value beyond just its Bitcoin holdings.
        </span>
      ),
    },
    {
      q: "What are MARAs key business initiatives?",
      a: (
        <span>
          MARA is actively expanding its operations:
          <br /><br />
          • 50 MW increase at Ohio data center (now 100 MW, scalable to 200 MW)
          <br />
          • 114 MW wind farm development in Texas (2025)
          <br />
          • Focus on renewable energy and sustainability
          <br />
          • Operation of MARAPool for cost efficiency
        </span>
      ),
    },
    {
      q: "What are the main risks and challenges?",
      a: (
        <span>
          Key challenges include:
          <br /><br />
          • Bitcoin price volatility
          <br />
          • Increasing mining difficulty
          <br />
          • Energy costs and efficiency
          <br />
          • Regulatory risks
          <br />
          • $650 million debt level
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Mining • Digital Assets • Renewable Energy</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                MARA
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Leading the Future of Bitcoin Mining</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/mara-mining.jpg"
                alt="MARA Bitcoin Mining Operations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Bitcoin Market Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Bitcoin&apos;s Evolution: A New Era
            </h3>
            <div className="space-y-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Recent Performance</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>+275% over past two years</li>
                    <li>+53% in the past year</li>
                    <li>Remarkable growth with minimal froth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">2025: A Pivotal Year</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Target: $125K (32% annual gain)</li>
                    <li>Breaking the 4-year cycle narrative</li>
                    <li>Transition to institutional asset class</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">The New Bitcoin Thesis</h4>
                <p className="text-lg">
                  Bitcoin is evolving into an institutional-grade asset with steady annual returns of 30-50%, offering protection against debasement and counterparty risk. This transformation could pave the way for a measured ascent to $1 million per coin, marking a fundamental shift in how we perceive Bitcoin&apos;s role in global finance.
                </p>
              </div>
            </div>
          </div>

          {/* Company Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Company Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                MARA (Marathon Digital Holdings) is a leading digital asset technology firm focused on Bitcoin mining. Based in Fort Lauderdale, Florida, and listed on NASDAQ as MARA, it operates large-scale mining facilities and offers innovative tech solutions like liquid immersion cooling for data centers.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Business Focus:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bitcoin mining and blockchain security</li>
                  <li>Energy-efficient data center operations</li>
                  <li>Renewable energy integration</li>
                  <li>Technology innovation in mining</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Performance Metrics
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Asset Holdings</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>48,237 BTC ($5.02B value)</li>
                    <li>57.3 EH/s hashrate</li>
                    <li>705 BTC mined (April 2025)</li>
                    <li>$5.79B market cap</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Operational Metrics</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>100 MW Ohio facility</li>
                    <li>114 MW Texas wind farm</li>
                    <li>MARAPool operations</li>
                    <li>Renewable energy focus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Business Strategy Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Strategic Initiatives
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                MARA&apos;s growth strategy focuses on sustainable expansion and operational efficiency:
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Initiatives:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Expansion of mining capacity</li>
                  <li>Renewable energy integration</li>
                  <li>Cost optimization through MARAPool</li>
                  <li>Technology innovation in cooling systems</li>
                  <li>Strategic facility locations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💰</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Bitcoin Holdings
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                48,237 BTC Treasury
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Mining Power
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                57.3 EH/s Hashrate
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌱</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Sustainability
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Renewable Energy Focus
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
