'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from "@/components/ui/card"

export default function ALTBGPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is The Blockchain Group (ALTBG)?",
      a: (
        <span>
          The Blockchain Group (ALTBG) is Europe&apos;s first Bitcoin Treasury Company (BTCco), listed on Euronext Growth Paris. Since November 5, 2024, the company has fully adopted a Bitcoin standard, transitioning from traditional business operations to a Bitcoin-centric strategy. TBG aims to become one of the largest public BTC holders globally, with a long-term vision to acquire approximately 1% of total BTC supply by 2033.
        </span>
      ),
    },
    {
      q: "What are ALTBG's recent financial results?",
      a: (
        <span>
          FY24 Financial Highlights:
          <br /><br />
          • Revenue: €13.86M (down from €20.4M in FY23 due to restructuring)
          <br />
          • Net Income: €1.36M (vs. €-22.7M in FY23) — returned to profitability
          <br />
          • Adjusted EBITDA: €910K (vs. €-2.45M)
          <br />
          • Balance Sheet: Equity increased by 64% to €12.2M
          <br /><br />
          The company has shown significant improvement in its financial health while transitioning to its Bitcoin strategy.
        </span>
      ),
    },
    {
      q: "What is ALTBG's Bitcoin strategy?",
      a: (
        <span>
          ALTBG&apos;s Bitcoin strategy focuses on maximizing BTC per share over time. Key metrics include:
          <br /><br />
          • BTC Holdings: 620 BTC (as of March 2025, up from 15 BTC in November 2024)
          <br />
          • Share Price: Up +474% in 6 months (from €0.15 to €0.85)
          <br />
          • BTC Yield YTD: 709.8%
          <br />
          • BTC Gain YTD: 283.9 BTC
          <br />
          • BTC € Gain YTD: €23.2M
          <br /><br />
          The company has secured €48.6M in BTC-denominated convertible bonds and has approval for €300M capital raise capacity.
        </span>
      ),
    },
    {
      q: "What are ALTBG's business units?",
      a: (
        <span>
          ALTBG operates through two main business units:
          <br /><br />
          • Trimane: Specializes in Data & AI consulting
          <br />
          • Iorga: Focuses on custom blockchain and decentralized applications development
          <br /><br />
          These units support the company&apos;s Bitcoin treasury strategy while maintaining operational excellence.
        </span>
      ),
    },
    {
      q: "What is ALTBG's long-term vision?",
      a: (
        <span>
          ALTBG aims to acquire approximately 1% of total BTC supply (~210K BTC) within 8 years by 2033. This ambitious goal could potentially unlock €210–420B in BTC Net Asset Value if BTC reaches €1–2M per coin. The company positions itself as Europe&apos;s MicroStrategy, focusing on aggressive Bitcoin accumulation and delivering exceptional shareholder value through BTC yield.
        </span>
      ),
    },
    {
      q: "How is ALTBG valued?",
      a: (
        <span>
          ALTBG&apos;s valuation is based on three BTCco pillars:
          <br /><br />
          1. BTC Yield (growth in BTC per share)
          <br />
          2. BTC Performance (growth in BTC price)
          <br />
          3. BTC Premium (market cap vs. BTC NAV)
          <br /><br />
          This model reflects the company&apos;s focus on Bitcoin accumulation and value creation for shareholders.
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
              The Blockchain Group (ALTBG)
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl">
                Europe&apos;s first Bitcoin Treasury Company
              </p>
              <p className="text-xl md:text-2xl">
                Bitcoin treasury + Data Intelligence, AI, and decentralized tech
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🇫🇷</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Euronext Paris
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Listed under ticker ALTBG
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Bitcoin Treasury
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                620 BTC Holdings
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Performance
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                +474% Share Price Growth
              </p>
            </div>
          </div>

          {/* Recent Performance */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              FY24 Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Financial Results</h4>
                <p className="text-white/90">Revenue: €13.86M</p>
                <p className="text-white/90">Net Income: €1.36M</p>
                <p className="text-white/90">Adjusted EBITDA: €910K</p>
                <p className="text-white/90">Equity: €12.2M (+64%)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Bitcoin Metrics</h4>
                <p className="text-white/90">BTC Holdings: 620 BTC</p>
                <p className="text-white/90">BTC Yield YTD: 709.8%</p>
                <p className="text-white/90">BTC Gain YTD: 283.9 BTC</p>
                <p className="text-white/90">BTC € Gain YTD: €23.2M</p>
              </div>
            </div>
          </div>

          {/* Recent Capital Raises */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Recent Capital Raises
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">May 7, 2025</h4>
                <p className="text-white/90">€9.9M Capital Increase</p>
                <p className="text-sm text-white/70">Subscription price: €1.0932 per share</p>
                <p className="text-sm text-white/70">9,045,039 new shares issued</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">May 12, 2025</h4>
                <p className="text-white/90">€12.1M Convertible Bond</p>
                <p className="text-sm text-white/70">Conversion price: €0.707 per share</p>
                <p className="text-sm text-white/70">Strategic investment from Adam Back</p>
              </div>
            </div>
          </div>

          {/* Business Model */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Business Model
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Bitcoin Treasury Strategy</strong> focused on increasing BTC per share
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Data Intelligence</strong> and AI consulting services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Decentralized Technology</strong> development and consulting
                </span>
              </li>
            </ul>
          </div>

          {/* Shareholder Structure */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Major Shareholders
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Fulgur Ventures</h4>
                <p className="text-white/90">34.90% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Adam Back</h4>
                <p className="text-white/90">9.56% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Public & Institutional</h4>
                <p className="text-white/90">40.09% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Executives</h4>
                <p className="text-white/90">7.66% (fully diluted)</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <Card key={i} className="border-yellow-500 rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-lg font-semibold text-white">{item.q}</span>
                    <span className={`ml-4 transition-transform text-yellow-500 ${open === i ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    {open === i && <div className="py-4 text-white/90 text-base">{item.a}</div>}
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
