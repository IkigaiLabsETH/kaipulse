'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function STRFPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is $STRF?",
      a: (
        <span>
          $STRF is MicroStrategy Incorporated&apos;s 10.00% Series A Perpetual Strife Preferred Stock, listed on NASDAQ. As the world&apos;s largest corporate Bitcoin holder, MicroStrategy issued this preferred stock to raise capital primarily for Bitcoin acquisitions and general corporate purposes. The initial offering in March 2025 was priced at $85.00 per share, with 8,500,000 shares raising approximately $711.2 million.
        </span>
      ),
    },
    {
      q: "What are the key financial features?",
      a: (
        <span>
          Key financial features include:
          <br /><br />
          • Fixed dividend rate of 10.00% per annum ($10 per share annually)
          <br />
          • Stated amount of $100 per share with $100 liquidation preference
          <br />
          • Quarterly cash payments starting June 30, 2025
          <br />
          • 18% compound rate on missed dividends
          <br />
          • Conversion to Class A common stock (MSTR) at 0.0001 shares per $100
          <br />
          • Redemption terms starting March 25, 2035
        </span>
      ),
    },
    {
      q: "What is the current market performance?",
      a: (
        <span>
          As of June 2, 2025:
          <br /><br />
          • Current Price: $104.761 (premium to $100 liquidation preference)
          <br />
          • Previous Close: $103.59
          <br />
          • Day&apos;s Range: $103.59 - $106.39
          <br />
          • 52-Week Range: $85.05 - $104.47
          <br />
          • Average Daily Volume: 242,769 shares
          <br />
          • Recent Volume: 503,041 shares
          <br />
          • Current Yield: ~9.55%
          <br />
          • Year-to-Date Return: 9.33%
        </span>
      ),
    },
    {
      q: "What are the recent developments?",
      a: (
        <span>
          Recent developments include:
          <br /><br />
          • March 21, 2025: Initial offering at $85.00 per share
          <br />
          • May 22, 2025: $2.1 billion ATM Program announcement
          <br />
          • Initial raise of $711.2 million for Bitcoin purchases
          <br />
          • Michael Saylor&apos;s X post highlighting dual appeal: &quot;USD Yield for $STRF investors—and BTC Yield for $MSTR investors&quot;
          <br />
          • Initial yield of 11.76% at offering price
        </span>
      ),
    },
    {
      q: "What are the key risks and considerations?",
      a: (
        <span>
          Key risks include:
          <br /><br />
          • Dividend Payment Risk: Fixed 10% dividend subject to board declaration
          <br />
          • Redemption Risk: Not redeemable until March 25, 2035
          <br />
          • Company-Specific Risk: Heavy reliance on Bitcoin as treasury asset
          <br />
          • Market Risk: Interest rate sensitivity and fixed-income market conditions
          <br />
          • Supply Impact: Potential dilution from $2.1 billion ATM program
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Preferred Stock • Bitcoin Strategy • Fixed Income</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                $STRF
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">MicroStrategy&apos;s 10% Series A Perpetual Strife Preferred Stock</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/strategy.png"
                alt="STRF Stock Performance and Analysis"
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
              Current Market Performance
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                As of June 2, 2025, STRF is trading at $104.761, which is above its liquidation preference of $100, suggesting strong investor demand for its fixed dividend. The stock has shown active trading with a 52-week range of $85.05 to $104.47.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Price Metrics</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Current Price: $104.761</li>
                    <li>Previous Close: $103.59</li>
                    <li>Day&apos;s High: $106.39</li>
                    <li>Day&apos;s Low: $103.59</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Volume & Range</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>52-Week Range: $85.05 - $104.47</li>
                    <li>Average Daily Volume: 242,769 shares</li>
                    <li>Recent Volume: 503,041 shares</li>
                    <li>Year-to-Date Return: 9.33%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Features Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Dividend and Features
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                STRF offers a fixed dividend of 10.00% per annum on a stated amount of $100 per share, payable quarterly in cash starting June 30, 2025. If dividends are not paid, they compound at 18.00% per annum.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>10% fixed annual dividend ($10 per share)</li>
                    <li>Quarterly cash payments</li>
                    <li>18% compound rate on missed dividends</li>
                    <li>$100 liquidation preference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Conversion Rights</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Convertible to Class A common stock (MSTR)</li>
                    <li>0.0001 shares per $100 stated amount</li>
                    <li>Redemption starting March 25, 2035</li>
                    <li>Adjustable conversion rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Market Context Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Context and Comparative Analysis
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                STRF operates within the preferred stock market, offering a fixed-income security with a high dividend yield compared to traditional bonds and other preferred stocks.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Comparative Yields</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>STRF: 10.00% fixed dividend</li>
                    <li>STRK (MicroStrategy&apos;s other preferred): 8.00%</li>
                    <li>U.S. Treasury bills: ~4.2%</li>
                    <li>Current yield at $104.761: ~9.55%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Sensitivity</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Interest rate sensitivity</li>
                    <li>Bitcoin price correlation</li>
                    <li>Fixed-income market conditions</li>
                    <li>Supply impact from ATM program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Recent Developments
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                On May 22, 2025, MicroStrategy announced a $2.1 billion At-The-Market (ATM) Program for STRF, allowing the issuance of additional shares, which could affect supply and price. The initial offering raised about $711.2 million, intended for Bitcoin purchases and working capital.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Developments:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>March 2025: Initial public offering at $85.00</li>
                  <li>May 2025: $2.1 billion ATM Program announcement</li>
                  <li>Initial raise of $711.2 million</li>
                  <li>Proceeds for Bitcoin acquisition</li>
                  <li>Michael Saylor&apos;s X post highlighting dual appeal</li>
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
                Current Performance
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Fixed Income
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                10% Annual Dividend
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Bitcoin Strategy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                MicroStrategy&apos;s Vision
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
                      "w-6 h-6 text-yellow-500 transition-transform duration-200",
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
