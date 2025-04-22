'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bitcoin, Calculator } from 'lucide-react';

export default function BitcoinPage21() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-yellow-500 hover:text-yellow-400 transition-colors font-bold text-lg"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-yellow-500/30 rounded-full bg-yellow-500/10 backdrop-blur-sm">
            <Bitcoin className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-yellow-400 font-medium">Bitcoin Strategy</span>
          </div>
          
          <h1 className="font-boska text-4xl sm:text-5xl font-bold tracking-tight text-yellow-500 mb-6">
            Bitcoin FIRE — 4% Rule Edition
          </h1>
          <h2 className="font-boska text-3xl text-yellow-400/90 mb-8">
            (21 BTC Target)
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-10"
        >
          {/* Premise Section */}
          <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-4">Premise</h3>
            <p className="text-white/90 leading-relaxed">
              The 4% withdrawal rule assumes a portfolio can fund annual spending equal to 4% of its starting size. 
              It came from an era expecting 10% nominal returns minus 6% inflation = 4% real.
            </p>
            
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mt-6 mb-4">Twist for Bitcoin</h3>
            <p className="text-white/90 leading-relaxed">
              BTC&apos;s long‑run CAGR towers above 10%, but we stress‑test for severe under‑performance. 
              Therefore we still anchor on the 4% rule to set a conservative floor.
            </p>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-yellow-500/20"></div>
            </div>
          </div>

          {/* Formula Section */}
          <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-4">Quick‑Math Formula</h3>
            <div className="flex justify-center my-6 bg-black/30 p-6 rounded-lg border border-yellow-500/20">
              <div className="font-mono text-xl text-white/90">
                BTC needed (Z) = Spending (X) / (0.04 × BTC Price (Y))
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-yellow-500/20"></div>
            </div>
          </div>

          {/* Example Section */}
          <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-6">Worked Example — Exactly 21 BTC</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-yellow-500/20">
                    <th className="p-4 text-left text-yellow-500 font-bold">Variable</th>
                    <th className="p-4 text-left text-yellow-500 font-bold">Value</th>
                    <th className="p-4 text-left text-yellow-500 font-bold">Reasoning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-medium text-white">Desired annual spend X</td>
                    <td className="p-4 text-white/90">$75,600</td>
                    <td className="p-4 text-white/90">Matches typical mid‑six‑figure lifestyle when BTC is &ldquo;cheap&rdquo;</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-medium text-white">Current BTC price Y</td>
                    <td className="p-4 text-white/90">$90,000</td>
                    <td className="p-4 text-white/90">Placeholder for today&apos;s spot price</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4 font-medium text-white">BTC required Z</td>
                    <td className="p-4 text-white/90 font-mono">75,600 / (0.04 × 90,000) = <span className="text-yellow-400 font-bold">21 BTC</span></td>
                    <td className="p-4 text-white/90">21 is the symbolic cap‑stone number in Bitcoin lore</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-8 text-white/90 leading-relaxed">
              A 21‑BTC stack drawn down at 4% supplies $75,600 per year under worst‑case return assumptions, 
              but any upside in BTC price or CAGR increases the real‑world cushion dramatically, 
              therefore users gain both durability and optionality.
            </p>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-yellow-500/20"></div>
            </div>
          </div>

          {/* Strategy Takeaways */}
          <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-6">Strategy Takeaways</h3>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li className="text-white/90">
                <span className="font-medium text-white">Conservative Floor:</span> 21 BTC is the &ldquo;sleep‑well&rdquo; threshold for a $75,600 lifestyle.
              </li>
              <li className="text-white/90">
                <span className="font-medium text-white">Scenario Leverage:</span> Move X or Y to see target BTC float instantly.
              </li>
              <li className="text-white/90">
                <span className="font-medium text-white">Narrative Hook:</span> &ldquo;21 BTC for financial independence&rdquo; is memorable and on‑brand.
              </li>
            </ol>
          </div>
          
          {/* Divider with Bitcoin Icon */}
          <div className="relative py-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-yellow-500/30"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-black px-4">
                <Bitcoin className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
          
          {/* Alternative 42% CAGR Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className="font-boska text-3xl sm:text-4xl font-bold tracking-tight text-yellow-500 mb-6 text-center">
              Bitcoin FIRE — 42% CAGR Scenario
            </h2>
            <h3 className="font-boska text-2xl text-yellow-400/90 mb-8 text-center">
              (2.1 BTC Target)
            </h3>
            
            {/* 42% CAGR Premise Section */}
            <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8 mt-8">
              <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-4">Premise</h3>
              <p className="text-white/90 leading-relaxed">
                If Bitcoin compounds at 42% nominal and inflation sticks near 6%, the real growth is ≈ 36%. 
                Under the safe‑withdrawal logic (&ldquo;spend the real return&rdquo;), the draw‑rate rises from 4% to 36%.
              </p>
              <p className="text-white/90 leading-relaxed mt-4">
                Therefore the number of bitcoin you need collapses by roughly a factor of ten compared with the classic 4% rule.
              </p>
            </div>
            
            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-yellow-500/20"></div>
              </div>
            </div>
            
            {/* 42% CAGR Formula Section */}
            <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
              <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-4">Quick‑Math Formula at 36% Real Growth</h3>
              <div className="flex justify-center my-6 bg-black/30 p-6 rounded-lg border border-yellow-500/20">
                <div className="font-mono text-xl text-white/90">
                  BTC needed (Z) = Spending (X) / (0.36 × BTC Price (Y))
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-yellow-500/20"></div>
              </div>
            </div>
            
            {/* 42% CAGR Example Section */}
            <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
              <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-6">Worked Example — Exactly 2.1 BTC</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-500/20">
                      <th className="p-4 text-left text-yellow-500 font-bold">Variable</th>
                      <th className="p-4 text-left text-yellow-500 font-bold">Value</th>
                      <th className="p-4 text-left text-yellow-500 font-bold">Why it&apos;s realistic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 font-medium text-white">Desired annual spend X</td>
                      <td className="p-4 text-white/90">$75,600</td>
                      <td className="p-4 text-white/90">Roughly the median U.S. dual‑income household lifestyle</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 font-medium text-white">BTC price assumption Y</td>
                      <td className="p-4 text-white/90">$100,000</td>
                      <td className="p-4 text-white/90">A neat, near‑future milestone (spot is ≈ $91k today)</td>
                    </tr>
                    <tr className="border-b border-yellow-500/10">
                      <td className="p-4 font-medium text-white">BTC required Z</td>
                      <td className="p-4 text-white/90 font-mono">75,600 / (0.36 × 100,000) = <span className="text-yellow-400 font-bold">2.1 BTC</span></td>
                      <td className="p-4 text-white/90">Matches the symbolic &ldquo;two‑point‑one&rdquo; slice of the 21M cap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-8 text-white/90 leading-relaxed">
                A 2.1 BTC stack withdrawn at its 36% real return supplies $75,600 per year under this high‑growth regime, 
                but any price appreciation beyond $100k or growth above 42% compounds the surplus further. 
                Therefore the 2.1‑BTC target is an aggressive yet mathematically sound benchmark for users who accept Bitcoin&apos;s volatility.
              </p>
            </div>
            
            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-yellow-500/20"></div>
              </div>
            </div>
            
            {/* 42% CAGR Strategy Takeaways */}
            <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8">
              <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-6">Strategy Takeaways</h3>
              
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-white/90">
                  <span className="font-medium text-white">Aggressive Floor:</span> 2.1 BTC funds a middle‑class lifestyle if 42% CAGR persists.
                </li>
                <li className="text-white/90">
                  <span className="font-medium text-white">Stress‑Test Friendly:</span> Slide X or Y in‑app to see BTC need flex instantly.
                </li>
                <li className="text-white/90">
                  <span className="font-medium text-white">Narrative Hook:</span> &ldquo;From 21 BTC to 2.1 BTC—10× less for the same freedom when growth screams&rdquo; is a headline users remember.
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center pt-8"
          >
            <Link
              href="/calculator"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Calculate Your Freedom
            </Link>
          </motion.div>
          
          {/* Current CAGR Data Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-16 bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-8"
          >
            <h3 className="font-epilogue text-2xl font-semibold text-yellow-400 mb-6">Current Bitcoin CAGR Insights</h3>
            
            <div className="space-y-5 text-white/90">
              <p className="leading-relaxed">
                <span className="font-semibold text-white">Historical Context:</span> Bitcoin&apos;s four-year CAGR has declined to 14.5%, its lowest rate on record. However, this still outperforms traditional assets like gold and stocks.
              </p>
              
              <p className="leading-relaxed">
                <span className="font-semibold text-white">Performance Perspective:</span> Despite the Fed&apos;s hawkish stance, BTC has surged 88% over the past year, setting multiple all-time highs. For comparison, other assets&apos; four-year CAGRs range between 4-13%.
              </p>
              
              <p className="leading-relaxed">
                <span className="font-semibold text-white">Market Position:</span> With a $1.9 trillion market cap versus gold&apos;s $19 trillion, Bitcoin has substantial growth potential. Some analysts project Bitcoin could replace gold as a global safe-haven asset within a decade.
              </p>
            </div>
            
            <div className="mt-8 bg-black/30 p-6 rounded-lg border border-yellow-500/20">
              <p className="text-white/70 leading-relaxed italic">
                &ldquo;While our models account for both conservative (4%) and aggressive (42%) growth scenarios, Bitcoin&apos;s current 14.5% CAGR suggests a middle path may be most realistic for planning purposes. This would place the BTC requirement for financial independence between 2.1 and 21 BTC depending on your personal risk tolerance.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mt-20"
        >
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-yellow-400 font-semibold mb-3">Important Disclaimer</h3>
            <p className="text-white/70 leading-relaxed">
              This information is for educational purposes only. Not financial advice. 
              Always do your own research and consult with qualified professionals before making investment decisions. 
              Past performance is not indicative of future results. Investing involves risk of loss.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 