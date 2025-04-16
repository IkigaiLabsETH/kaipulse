'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from "@/components/ui/card"

export default function BitBondsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Saylor&apos;s Speculative Attack thesis?",
      a: (
        <span>
          MicroStrategy, under Michael Saylor, is using the global bond market as a capital reallocation machine—issuing yield-enhanced instruments like $STRK and $STRF to turn low-yield capital into high-performing Bitcoin. This is a macro-level &quot;speculative attack&quot; on fiat: borrow at 10%, buy BTC, and let Bitcoin&apos;s appreciation outpace the cost of capital.
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
      q: "How do these instruments impact Bitcoin&apos;s price?",
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
          Unlike a Bitcoin ETF, STRK/STRF pay high yields but don&apos;t offer pure BTC price exposure (except STRK&apos;s conversion feature). Unlike traditional bonds, they have no maturity, can defer payments, and are backed by a company with massive BTC holdings. They blend fixed income and crypto in a unique way.
        </span>
      ),
    },
    {
      q: "What are the risks?",
      a: (
        <span>
          These are not risk-free: if Bitcoin&apos;s price crashes, MicroStrategy could struggle to pay dividends, and the preferreds could lose value. STRK/STRF are junior to debt and not directly collateralized by BTC. Investors are betting on both MicroStrategy&apos;s solvency and Bitcoin&apos;s long-term success.
        </span>
      ),
    },
    {
      q: "Could this model go global?",
      a: (
        <span>
          Yes. El Salvador&apos;s &quot;Volcano Bonds&quot; and other corporate Bitcoin bonds show the model is spreading. If sovereigns or more corporations adopt this approach, it could institutionalize Bitcoin demand and reshape global capital flows.
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 font-epilogue">
          BitBonds: The Aligned Solution
        </h1>
        <p className="text-xl md:text-2xl text-yellow-100/90 mb-6">
          The U.S. needs to refinance <span className="font-bold text-yellow-300">$14T</span> in debt.<br />
          Investors want protection from inflation and asset debasement.
        </p>
        <p className="text-lg md:text-xl text-yellow-200/80 mb-4">
          <span className="font-bold text-yellow-400">Enter BitBonds:</span>
        </p>
      </section>

      {/* Visual Breakdown */}
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          <Card className="w-full md:w-1/2 text-center">
            <span className="text-5xl mb-2 block">🇺🇸</span>
            <span className="text-2xl font-bold text-yellow-500 mb-2 block">90% Treasury</span>
            <span className="text-white/90 text-lg">Stable, government-backed bond</span>
          </Card>
          <Card className="w-full md:w-1/2 text-center">
            <span className="text-5xl mb-2 block">₿</span>
            <span className="text-2xl font-bold text-yellow-500 mb-2 block">10% Bitcoin</span>
            <span className="text-white/90 text-lg">Full BTC upside exposure</span>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full max-w-2xl mx-auto mb-10">
        <Card>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">How It Works</h2>
          <ul className="text-white/90 text-lg space-y-3 text-left">
            <li>📎 <span className="font-bold">Full BTC upside</span> until you reach a <span className="text-yellow-500">4.5% annual return</span>.</li>
            <li>📎 <span className="font-bold">After 4.5% YTM</span>, any additional BTC gains are split <span className="text-yellow-500">50/50</span> between the investor and the US government.</li>
            <li>📎 <span className="font-bold">Sale Value:</span> $100 → <span className="text-yellow-500">Redemption: $90 + BTC Value</span></li>
          </ul>
        </Card>
      </section>

      {/* Alignment Summary */}
      <section className="w-full max-w-2xl mx-auto mb-10">
        <Card>
          <h3 className="text-2xl font-bold text-yellow-500 mb-2">Why BitBonds?</h3>
          <p className="text-white/90 text-lg">
            BitBonds align incentives: The US government gets continued bond demand and novel reserves, while investors get inflation protection and BTC upside. It&apos;s a win-win for mismatched needs in a new era of finance.
          </p>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto mt-16 mb-10">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center font-epilogue">FAQ: The Big Picture of Bitcoin Bonds</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <Card key={i} className="border-yellow-500/20">
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
      </section>
    </div>
  );
} 