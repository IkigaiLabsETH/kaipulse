'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from "@/components/ui/card"

export default function BTCABPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Bitcoin Treasury Capital AB?",
      a: (
        <span>
          Bitcoin Treasury Capital AB (BTC AB) is a Sweden-based company headquartered in Stockholm, established in 2025 with a singular focus on Bitcoin. The firm&apos;s mission is to provide investors meaningful exposure to Bitcoin through a &ldquo;structured, yield-oriented&rdquo; strategy, functioning as a pure-play Bitcoin holding company – the first of its kind in Europe.
        </span>
      ),
    },
    {
      q: "Who are the founders and leadership team?",
      a: (
        <span>
          BTC AB was co-founded by Christoffer De Geer (CEO) and Topias Riuttamäki (Chairman). The leadership team combines extensive experience in both cryptocurrency and traditional finance. De Geer brings deep crypto expertise from his time at BT.CX and Goobit Group, while Riuttamäki contributes strategic financial planning skills from his experience founding Preservia.
        </span>
      ),
    },
    {
      q: "What is BTC AB's investment strategy?",
      a: (
        <span>
          BTC AB employs a unique &ldquo;Bitcoin per share&rdquo; growth strategy, measuring success by the growth of Bitcoin ownership per share. The company uses creative financing methods to increase BTC holdings faster than a static treasury would, targeting ~15% annual growth in BTC holdings per share through strategic financing and compounding.
        </span>
      ),
    },
    {
      q: "How does BTC AB differ from a Bitcoin ETF?",
      a: (
        <span>
          Unlike a passive Bitcoin ETF that simply holds coins, BTC AB actively seeks to grow its Bitcoin stash through strategic financing and compounding. The company positions itself as an active Bitcoin treasury manager, aiming to increase the quantity of BTC underlying each share over time through careful capital management.
        </span>
      ),
    },
    {
      q: "What is BTC AB's corporate structure?",
      a: (
        <span>
          BTC AB is incorporated in Sweden as an Aktiebolag (AB), a Swedish limited liability company. The company plans to list on the Swedish Spotlight Stock Market under the ticker symbol &ldquo;BTC&rdquo; by June 2025. The corporate structure is straightforward, with the operating company directly holding the Bitcoin on its balance sheet.
        </span>
      ),
    },
    {
      q: "What are the risks of investing in BTC AB?",
      a: (
        <span>
          As with any investment, there are risks involved. BTC AB&apos;s strategy involves execution risk and is novel. The company&apos;s success depends on Bitcoin&apos;s performance and its ability to execute its financial strategies effectively. Investors should carefully consider these factors and conduct their own due diligence.
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
              Bitcoin Treasury Capital AB
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl">
                Europe&apos;s first pure-play Bitcoin holding company
              </p>
              <p className="text-xl md:text-2xl">
                Focused on growing Bitcoin per share through strategic treasury management
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🇸🇪</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Stockholm Based
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                First European Bitcoin treasury company
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Pure Bitcoin Focus
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                No diversification beyond Bitcoin
              </p>
            </div>
          </div>

          {/* Investment Strategy */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Investment Strategy
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Bitcoin per share growth</strong> targeting <span className="text-yellow-400">~15% annual growth</span> in BTC holdings per share
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Strategic financing</strong> through convertible bonds and preferred equity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Tax-efficient approach</strong> avoiding unnecessary sales of Bitcoin
                </span>
              </li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Christoffer De Geer</h4>
                <p className="text-white/90">CEO (Head of Bitcoin Operations)</p>
                <p className="text-sm text-white/70">Former VP of BT.CX, deep crypto expertise since 2013</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Topias Riuttamäki</h4>
                <p className="text-white/90">Chairman (Head of Financial Products)</p>
                <p className="text-sm text-white/70">Founder of Preservia, traditional finance background</p>
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