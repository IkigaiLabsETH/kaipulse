'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Treasury • Data Intelligence • Blockchain Technology</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                The Blockchain Group
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Europe&apos;s first Bitcoin Treasury Company</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <div className="w-full h-[600px]">
              <iframe
                src="https://www.youtube.com/embed/fZ_Oxlu-WE0"
                title="The Blockchain Group (ALTBG) Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🇫🇷</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Euronext Paris
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Listed under ticker ALTBG
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Bitcoin Treasury
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                620 BTC Holdings
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Performance
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                +474% Share Price Growth
              </p>
            </div>
          </div>

          {/* Recent Performance */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              FY24 Performance
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Financial Results</h4>
                <p className="text-white/90">Revenue: €13.86M</p>
                <p className="text-white/90">Net Income: €1.36M</p>
                <p className="text-white/90">Adjusted EBITDA: €910K</p>
                <p className="text-white/90">Equity: €12.2M (+64%)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Bitcoin Metrics</h4>
                <p className="text-white/90">BTC Holdings: 620 BTC</p>
                <p className="text-white/90">BTC Yield YTD: 709.8%</p>
                <p className="text-white/90">BTC Gain YTD: 283.9 BTC</p>
                <p className="text-white/90">BTC € Gain YTD: €23.2M</p>
              </div>
            </div>
          </div>

          {/* Recent Capital Raises */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Recent Capital Raises
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">May 7, 2025</h4>
                <p className="text-white/90">€9.9M Capital Increase</p>
                <p className="text-sm text-white/70">Subscription price: €1.0932 per share</p>
                <p className="text-sm text-white/70">9,045,039 new shares issued</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">May 12, 2025</h4>
                <p className="text-white/90">€12.1M Convertible Bond</p>
                <p className="text-sm text-white/70">Conversion price: €0.707 per share</p>
                <p className="text-sm text-white/70">Strategic investment from Adam Back</p>
              </div>
            </div>
          </div>

          {/* Business Model */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Business Model
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span>
                  <strong>Bitcoin Treasury Strategy</strong> focused on increasing BTC per share
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span>
                  <strong>Data Intelligence</strong> and AI consulting services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span>
                  <strong>Decentralized Technology</strong> development and consulting
                </span>
              </li>
            </ul>
          </div>

          {/* Shareholder Structure */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Major Shareholders
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Fulgur Ventures</h4>
                <p className="text-white/90">34.90% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Adam Back</h4>
                <p className="text-white/90">9.56% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Public & Institutional</h4>
                <p className="text-white/90">40.09% (fully diluted)</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Executives</h4>
                <p className="text-white/90">7.66% (fully diluted)</p>
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
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-xl font-medium text-white">{item.q}</span>
                    <ChevronDown
                      className={cn('h-6 w-6 transition-transform text-yellow-500', {
                        '-rotate-180': open === i,
                      })}
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

          {/* Disclaimer Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-red-500 shadow-[5px_5px_0px_0px_rgba(239,68,68,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
              Important Disclaimer
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Bitcoin treasury companies represent a significant risk in the current market cycle.
              </p>
              <p className="text-lg">
                Consider this: These companies are issuing new shares to investors seeking Bitcoin exposure, creating a layer of complexity and risk between investors and the underlying asset.
              </p>
              <p className="text-lg">
                Their primary product is essentially a derivative of Bitcoin, introducing traditional financial market risks.
              </p>
              <p className="text-lg">
                Market dynamics are important to understand: The market-to-NAV ratio will fluctuate significantly during bull and bear markets, potentially similar to the GBTC premium/discount dynamics of previous cycles.
              </p>
              <p className="text-lg">
                However, it&apos;s crucial to recognize that Bitcoin&apos;s $2 trillion market cap exists in a world of $1000 trillion in traditional assets. Many institutional investors face regulatory constraints or tax considerations that prevent direct Bitcoin ownership.
              </p>
              <p className="text-lg">
                This structural reality is similar to how certain stocks may appear overvalued on traditional metrics like CAPE, yet maintain their positions due to specific market conditions and constraints.
              </p>
              <p className="text-lg">
                The current silver lining is that these businesses are absorbing speculative capital that might otherwise flow into higher-risk assets, while directing it toward Bitcoin.
              </p>
              <p className="text-lg">
                However, there&apos;s a significant risk that poorly managed companies may be forced to liquidate their Bitcoin holdings when market conditions change, as investors realize the advantages of direct Bitcoin ownership.
              </p>
              <p className="text-lg">
                True corporate Bitcoin adoption should be our primary focus.
              </p>
              <p className="text-lg">
                Companies that generate real economic value through their products and services, while maintaining Bitcoin as a treasury asset, are what will create sustainable value for the Bitcoin network.
              </p>
              <p className="text-lg">
                Most other approaches represent traditional financial engineering with potential for significant unwinding.
              </p>
              <p className="text-lg">
                As these companies emerge and investors share their apparent &quot;gains,&quot; remember that Bitcoin remains the most compelling risk-adjusted asset in this space.
              </p>
              <p className="text-lg">
                A key aspect of successful Bitcoin ownership is maintaining focus on the core asset, despite the emergence of various alternatives.
              </p>
              <p className="text-lg">
                It&apos;s worth noting that large Bitcoin treasury positions (500-600k BTC) held by a single entity represent significant value beyond their spot price due to the substantial slippage that would occur when attempting to acquire such large positions in the open market. This creates an inherent premium to the underlying Bitcoin value.
              </p>
              <p className="text-lg">
                Current market valuations, as indicated by metrics like mNAV (market-to-NAV ratio), suggest that Bitcoin treasury companies may be significantly undervalued. For instance, even with conservative replacement cost considerations, many of these companies are trading at mNAV ratios of 0.1-0.2, representing a substantial opportunity spread.
              </p>
              <p className="text-lg font-bold text-red-500">
                While some treasury companies may face challenges, well-managed ones with conservative and prudent strategies have the potential to thrive across multiple market cycles, serving as important bridges for institutional capital into the Bitcoin ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
