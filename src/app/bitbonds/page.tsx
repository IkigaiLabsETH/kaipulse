'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BitBondsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the Saylor Speculative Attack thesis?",
      a: (
        <span>
          MicroStrategy, under Michael Saylor, is using the global bond market as a capital reallocation machine—issuing yield-enhanced instruments like $STRK and $STRF to turn low-yield capital into high-performing Bitcoin. This is a macro-level &ldquo;speculative attack&rdquo; on fiat: borrow at 10%, buy BTC, and let Bitcoin&rsquo;s appreciation outpace the cost of capital.
        </span>
      ),
    },
    {
      q: "How do $STRK and $STRF work?",
      a: (
        <span>
          Both are perpetual preferred equity (traded on Nasdaq) that function like Bitcoin-backed bonds. <b>STRK</b> pays an 8% annual dividend (can be paid in cash or MSTR shares, and is convertible to equity if MSTR stock soars). <b>STRF</b> pays a 10% annual cash dividend, with penalty interest if missed. Both are senior to common stock, junior to debt, and are designed to fund more BTC purchases for MicroStrategy.
        </span>
      ),
    },
    {
      q: "Why would fixed income investors buy these?",
      a: (
        <span>
          STRK and STRF offer yields (8–12%) far above most traditional bonds, with the added kicker of Bitcoin exposure. STRF, for example, offers double the 10Y Treasury yield, but with BTC-backed risk. These products let institutions access Bitcoin upside in a familiar, yield-focused wrapper.
        </span>
      ),
    },
    {
      q: "How do these instruments impact the Bitcoin price?",
      a: (
        <span>
          Every time MicroStrategy issues these bonds and buys BTC, it creates direct buy pressure and removes supply from the market. If this model scales (e.g., more companies or even countries issue Bitcoin-backed bonds), it could create a persistent, institutional bid for Bitcoin, supporting price and reducing circulating supply.
        </span>
      ),
    },
    {
      q: "How are STRK/STRF different from a Bitcoin ETF or a traditional bond?",
      a: (
        <span>
          Unlike a Bitcoin ETF, STRK/STRF pay high yields but don&rsquo;t offer pure BTC price exposure (except STRK&rsquo;s conversion feature). Unlike traditional bonds, they have no maturity, can defer payments, and are backed by a company with massive BTC holdings. They blend fixed income and crypto in a unique way.
        </span>
      ),
    },
    {
      q: "What are the risks?",
      a: (
        <span>
          These are not risk-free: if Bitcoin&rsquo;s price crashes, MicroStrategy could struggle to pay dividends, and the preferreds could lose value. STRK/STRF are junior to debt and not directly collateralized by BTC. Investors are betting on both MicroStrategy&rsquo;s solvency and Bitcoin&rsquo;s long-term success.
        </span>
      ),
    },
    {
      q: "Could this model go global?",
      a: (
        <span>
          Yes. El Salvador&rsquo;s &ldquo;Volcano Bonds&rdquo; and other corporate Bitcoin bonds show the model is spreading. If sovereigns or more corporations adopt this approach, it could institutionalize Bitcoin demand and reshape global capital flows.
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Bonds • Treasury Innovation • Capital Markets</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                BitBonds
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Aligned Solution</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-white/90">
                The U.S. needs to refinance <span className="text-yellow-500">$14T</span> in debt.
              </p>
              <p className="text-xl md:text-2xl text-white/90">
                Investors want protection from inflation and asset debasement.
              </p>
            </div>
          </div>

          {/* Visual Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🇺🇸</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  90% Treasury
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl text-white/90">
                Stable, government-backed bond
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  10% Bitcoin
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl text-white/90">
                Full BTC upside exposure
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              How It Works
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">
                  <strong>Full BTC upside</strong> until you reach a <span className="text-yellow-500">4.5% annual return</span>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">
                  <strong>After 4.5% YTM</strong>, any additional BTC gains are split <span className="text-yellow-500">50/50</span> between the investor and the US government.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">🔗</span>
                <span className="text-white/90">
                  <strong>Sale Value: $100</strong> → <span className="text-yellow-500">Redemption: $90 + BTC Value</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Alignment Summary */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why BitBonds?
            </h3>
            <div className="space-y-6">
              <p className="text-white/90 text-lg">
                BitBonds on the federal, state, and municipal levels would be a game-changer—reducing debt burdens, boosting purchasing power, and making everyday life more manageable. By indexing repayment to the hardest asset on Earth—Bitcoin—BitBonds could restore trust in public debt, unlock dormant capital, and turn inflationary liabilities into deflationary incentives.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The French Precedent</h4>
                <p className="text-white/90">
                  In 1952, France faced a similar crisis of confidence in government debt. Antoine Pinay&apos;s solution? Bonds indexed to gold. The result? 17 tons of gold unlocked from private savings in just four days. This proved that aligning investor interests with inflation-resilient assets can restore faith in sovereign debt.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Modern Solution</h4>
                <p className="text-white/90">
                  BitBonds are inflation-resistant bonds indexed to Bitcoin&apos;s value, offering:
                </p>
                <ul className="list-none space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">📈</span>
                    <span>Principal guaranteed (denominated in fiat or BTC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">💸</span>
                    <span>Interest paid in BTC or BTC-linked value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🛡️</span>
                    <span>CPI-beating performance via BTC&apos;s historical CAGR (~35%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🧱</span>
                    <span>Settlement rails via Ethereum/Solana, using tokenized BTC</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Real-World Example</h4>
                <p className="text-white/90">
                  Consider a $100M BitBond from a company like Nike:
                </p>
                <ul className="list-none space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🎯</span>
                    <span>Principal: 100% guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">💰</span>
                    <span>Interest: 10% annual, paid in BTC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">💎</span>
                    <span>Backed by: 35% of principal in BTC reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">📊</span>
                    <span>Expected outcome: 2.5x return over 7 years</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Sovereign Potential</h4>
                <p className="text-white/90">
                  Governments can use BitBonds to:
                </p>
                <ul className="list-none space-y-2 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🔓</span>
                    <span>Tap into crypto wealth avoiding fiat systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🧲</span>
                    <span>Attract international capital via hard-asset-linked securities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🔄</span>
                    <span>Align government incentives with sound money principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🌐</span>
                    <span>Issue programmable, fractionalized, globally tradable debt</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/90 text-lg italic">
                The question isn&apos;t whether we can afford to issue BitBonds. It&apos;s whether we can afford not to.
              </p>
            </div>
          </div>

          {/* Bitcoin Bond Revolution */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Bitcoin Bond Revolution
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">The Zero-Risk Model</h4>
                <p className="text-white/90">
                  The issuer of BitBonds maintains zero Bitcoin exposure. Through intermediaries like Cantor, the Bitcoin-linked cash flows are swapped for traditional fixed or floating rate debt, resulting in cheaper financing costs for the issuer.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">Retail Investor Appeal</h4>
                <p className="text-white/90">
                  BitBonds are designed to be instant hits with retail investors seeking Bitcoin exposure. They can offer high coupons and yields even under modest Bitcoin growth assumptions, making them attractive investment vehicles.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">The Saylor Effect</h4>
                <p className="text-white/90">
                  Following MicroStrategy&apos;s success with $STRF and $STRK, sovereign and municipal BitBonds could be even more powerful. A triple tax-free municipal BitBond yielding 10% would be revolutionary in the fixed income market.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-500">The Ultimate Strategy</h4>
                <p className="text-white/90">
                  The true power of BitBonds as a Service (BBAAS) lies in the residual Bitcoin accumulation. By structuring these instruments correctly, issuers can potentially accumulate more Bitcoin than even MicroStrategy, creating a new paradigm in treasury management.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              FAQ: The Big Picture of Bitcoin Bonds
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="bg-[#1c1f26]">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors duration-200"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-lg font-semibold text-white">{item.q}</span>
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 text-yellow-500 transition-transform duration-200",
                        open === i ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    {open === i && <div className="py-4 text-white/90 text-base">{item.a}</div>}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 