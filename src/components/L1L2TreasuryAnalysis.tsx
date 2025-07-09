'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, DollarSign, Building2, Bitcoin, AlertTriangle, BarChart3 } from 'lucide-react';

export default function L1L2TreasuryAnalysis() {
  return (
    <Card className="bg-[#18191c] border-[2px] sm:border-[3px] border-yellow-500 w-full max-w-[90rem] mx-auto shadow-[0_0_0_2px_rgba(247,181,0,0.7),0_4px_16px_0_rgba(247,181,0,0.18)] sm:shadow-[0_0_0_4px_rgba(247,181,0,0.7),0_8px_32px_0_rgba(247,181,0,0.18)]">
      <CardContent className="p-4 sm:p-10 md:p-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-epilogue font-bold text-yellow-500 tracking-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
            The L1/L2 Treasury Playbook
          </h3>
          <TrendingDown className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-500" />
        </div>

        <div className="space-y-6 sm:space-y-8 text-white/90">
          {/* Introduction */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              🚨 The Dead Chain Playbook
            </h4>
            <p className="text-lg font-satoshi">
              We have been annoyed (to say the least) to see so many L1/L2&apos;s raise huge amounts of capital, launch a chain, have no PMF and see them run this playbook. These companies will never die and will just pivot to being holding companies.
            </p>
          </div>

          {/* The Playbook */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              💰 The Standard Playbook
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Fundraising Rounds</h5>
                  <ul className="text-base font-satoshi space-y-1">
                    <li>• Dead chain: Raise $25M on a $250M post</li>
                    <li>• Then $75M on $750M post</li>
                    <li>• Over 2 years, $100M raised for 20% equity</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Team & Operations</h5>
                  <ul className="text-base font-satoshi space-y-1">
                    <li>• 40–50 FTEs at ~$200K avg comp = ~$9M/yr</li>
                    <li>• Add ~$4M/yr in ops (legal, SaaS, travel, etc.)</li>
                    <li>• Total burn: ~$13M/yr</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Treasury Strategy</h5>
                  <ul className="text-base font-satoshi space-y-1">
                    <li>• Keep ~$80M in t-bills earning 4% = $3.2M/yr</li>
                    <li>• Launch a token, trades at $1B FDV</li>
                    <li>• Treasury owns 30% = $300M</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Monetization</h5>
                  <ul className="text-base font-satoshi space-y-1">
                    <li>• Sell $30M to USDC (total cash raised now $130M)</li>
                    <li>• Monetize the balance by selling covered calls</li>
                    <li>• $500K–$1M/mo in income</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Position */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              🏢 Final Position
            </h4>
            <p className="text-lg font-satoshi mb-4">
              Business has ~$100M cash + ~$250M in native asset and optionality (albeit very low given incentives at play) to get traction and build real ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                <h5 className="text-lg font-epilogue text-green-400 font-bold mb-2">Cash Position</h5>
                <p className="text-2xl font-bold text-green-400">$100M</p>
                <p className="text-sm text-white/70">Liquid cash reserves</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                <h5 className="text-lg font-epilogue text-blue-400 font-bold mb-2">Native Assets</h5>
                <p className="text-2xl font-bold text-blue-400">$250M</p>
                <p className="text-sm text-white/70">Token treasury value</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg">
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">Monthly Income</h5>
                <p className="text-2xl font-bold text-yellow-400">$1M</p>
                <p className="text-sm text-white/70">From covered calls</p>
              </div>
            </div>
          </div>

          {/* Bitcoin Treasury Comparison */}
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-red-400 font-bold mb-3 flex items-center gap-2">
              <Bitcoin className="h-6 w-6" />
              ₿ Bitcoin Treasury Scenario
            </h4>
            <p className="text-lg font-satoshi mb-4">
              <span className="text-red-400 font-bold">Now imagine their treasury was sitting in Bitcoin the past few years...</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-3">Treasury Bills (Current)</h5>
                <ul className="text-base font-satoshi space-y-2">
                  <li>• $80M initial investment</li>
                  <li>• 4% annual return</li>
                  <li>• 2 years = $6.4M interest</li>
                  <li>• <span className="text-green-400 font-bold">Total: $86.4M</span></li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-3">Bitcoin Investment (Hypothetical)</h5>
                <ul className="text-base font-satoshi space-y-2">
                  <li>• $80M invested in BTC (July 2023)</li>
                  <li>• BTC price: $30,169 → $109,529</li>
                  <li>• 263% return over 2 years</li>
                  <li>• <span className="text-green-400 font-bold">Total: $290.4M</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-black/30 rounded-lg">
              <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">The Difference</h5>
              <p className="text-lg font-satoshi">
                <span className="text-yellow-400 font-bold">$204M additional value</span> if treasury was in Bitcoin instead of T-bills. That&apos;s the difference between a struggling project and a financial powerhouse.
              </p>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              📊 Key Insights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">The Reality</h5>
                <ul className="text-base font-satoshi space-y-2">
                  <li>• These companies will never die</li>
                  <li>• They pivot to being holding companies</li>
                  <li>• Token launches are exit strategies</li>
                  <li>• Treasury management ecosystem building</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-epilogue text-yellow-400 font-bold mb-2">The Problem</h5>
                <ul className="text-base font-satoshi space-y-2">
                  <li>• No real PMF for most L1/L2s</li>
                  <li>• Massive capital misallocation</li>
                  <li>• Teams focus on financial engineering</li>
                  <li>• Innovation takes a backseat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-2xl font-epilogue text-yellow-500 font-bold mb-3">🎯 The Bottom Line</h4>
            <p className="text-lg font-satoshi">
              This is what most L1/L2s do who have raised a ton of money and have a token. It&apos;s insane. These companies will never die and will just pivot to being holding companies. The question isn&apos;t whether they&apos;ll survive—it&apos;s whether they&apos;ll ever build anything meaningful.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 