"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VolPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Market Analysis • Institutional Strategy • Price Dynamics</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Volatility
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Why Bitcoin&apos;s Price Is Stuck</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Points Overview */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Insights
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Research suggests institutional call selling and dealer hedging are key factors pinning Bitcoin&apos;s price.</li>
                <li>It seems likely that the structured yield regime, dominated by options and covered calls, limits Bitcoin&apos;s breakout potential.</li>
                <li>The evidence leans toward offshore exchanges capping price swings by flushing retail leverage, differing from the 2021 retail-driven bull market.</li>
              </ul>
            </div>
          </div>

          {/* Main Analysis */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Why Bitcoin&apos;s Price Is Stuck
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Bitcoin&apos;s price has been range-bound in 2025, frustrating many who expected explosive rallies like those in 2021. The main reason? Institutional investors, now dominating the market, are using strategies like selling call options and dealer hedging to manage risk and generate yield. This creates resistance to upward price movements, keeping Bitcoin pinned. Additionally, offshore exchanges often counteract retail leverage, further stabilizing prices. Unlike the retail-driven volatility of 2021, today&apos;s market is more controlled, with structured products like covered calls limiting big breakouts.
              </p>
            </div>
          </div>

          {/* Key Factors Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📊</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Call Selling
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Institutional Hedging
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏛️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Structured Yield
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Market Regime Shift
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Leverage Flush
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Offshore Exchange Control
              </p>
            </div>
          </div>

          {/* Detailed Analysis Sections */}
          <div className="space-y-8">
            {/* Institutional Call Selling */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Institutional Call Selling and Dealer Hedging</h4>
              <div className="space-y-4 text-gray-300">
                <p>
                  Institutions sell call options to earn premiums, capping Bitcoin&apos;s upside if prices rise above the strike price. Dealers then hedge by buying or selling Bitcoin, which can stabilize prices and prevent rallies. This dynamic, seen in products like the Roundhill Bitcoin Covered Call Strategy ETF (<a href="https://www.roundhillinvestments.com/etf/ybtc/" className="text-yellow-500 hover:text-yellow-400 underline">YBTC</a>), means Bitcoin&apos;s price often gets &quot;pinned&quot; in a range.
                </p>
              </div>
            </div>

            {/* Structured Yield Regime */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Structured Yield Regime</h4>
              <div className="space-y-4 text-gray-300">
                <p>
                  The market has shifted to a &quot;structured yield regime,&quot; where institutions use options and covered calls for income, not just speculation. This differs from 2021&apos;s retail-driven bull market, making price movements more controlled and less volatile, as seen in recent CME Group data (<a href="https://www.cmegroup.com/markets/cryptocurrencies/bitcoin/bitcoin.quotes.options.html" className="text-yellow-500 hover:text-yellow-400 underline">Bitcoin Options Quotes</a>).
                </p>
              </div>
            </div>

            {/* Offshore Exchanges */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h4 className="text-xl font-bold text-yellow-500 mb-4">Offshore Exchanges and Retail Leverage</h4>
              <div className="space-y-4 text-gray-300">
                <p>
                  Offshore exchanges flush out retail traders when leverage builds, artificially capping price swings. This contrasts with 2021, where retail FOMO drove wild moves, now tamed by big players&apos; hedging strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Market Evolution Comparison */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Evolution: 2021 vs 2025
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b border-yellow-500/30">
                    <th className="text-left py-3 px-4 text-yellow-500">Factor</th>
                    <th className="text-left py-3 px-4 text-yellow-500">2021 Market</th>
                    <th className="text-left py-3 px-4 text-yellow-500">2025 Market</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Dominant Players</td>
                    <td className="py-3 px-4">Retail investors, high leverage</td>
                    <td className="py-3 px-4">Institutions, structured products</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Price Dynamics</td>
                    <td className="py-3 px-4">Vertical moves, high volatility</td>
                    <td className="py-3 px-4">Range-bound, price pinning</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Key Strategies</td>
                    <td className="py-3 px-4">Speculation, FOMO</td>
                    <td className="py-3 px-4">Covered calls, yield generation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Role of Exchanges</td>
                    <td className="py-3 px-4">Amplified rallies via retail leverage</td>
                    <td className="py-3 px-4">Caps swings by flushing retail leverage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deep Dive Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Deep Dive: Bitcoin&apos;s Price Dynamics in 2025
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                As of June 29, 2025, Bitcoin&apos;s price has been notably range-bound, prompting widespread speculation about why it hasn&apos;t broken out as anticipated. This analysis explores the underlying factors, focusing on institutional call selling, dealer hedging, and the shift to a structured yield regime, as well as the role of offshore exchanges in managing retail leverage.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">The Evolution from Retail to Institutional Dominance</h4>
                <p>
                  Bitcoin&apos;s trajectory has shifted significantly since 2021. Once dominated by retail investors chasing speculative gains, the market now sees substantial institutional participation. Recent surveys indicate that 80% of institutional investors hold Bitcoin, with 43% actively exploring yield-generating strategies. Hedge funds, pension funds, corporations, and asset managers view Bitcoin as a portfolio diversifier and a hedge against inflation, a stark contrast to the retail-driven FOMO of yesteryears.
                </p>
                <p>
                  This shift is evidenced by the surge in Bitcoin holdings by Fortune 500 companies, with over $50 billion allocated, transforming corporate treasuries into crypto-forward operations. The launch of spot Bitcoin ETFs in 2024 and subsequent ETF options approvals have further institutionalized the market, making it easier for institutions to gain exposure while managing risk.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Institutional Call Selling: The Covered Call Strategy in Action</h4>
                <p>
                  A key factor pinning Bitcoin&apos;s price is the widespread use of covered call strategies by institutions. This involves holding Bitcoin (or Bitcoin ETFs) and selling call options against it, generating income from option premiums. For instance, the Roundhill Bitcoin Covered Call Strategy ETF (YBTC), launched in January 2024, employs a synthetic covered call strategy, selling weekly call options on Bitcoin ETFs to provide income while capping upside exposure.
                </p>
                <p>
                  The mechanics are straightforward: by selling call options, institutions bet that Bitcoin&apos;s price won&apos;t rise above the strike price, or they are willing to sell at that price. This creates a structural resistance level, as the market becomes &quot;overwritten&quot; with call options, meaning more calls are sold than there is underlying Bitcoin to cover. Recent news highlights this, with a $40 billion Bitcoin options expiry looming, underscoring the scale of institutional activity.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Conclusion: A Market in Transition</h4>
                <p>
                  Bitcoin&apos;s inability to break out in 2025 is not a sign of weakness but a reflection of its evolution. Institutional call selling, dealer hedging, and the shift to a structured yield regime have created a market where price movements are controlled, with resistance levels formed by covered call strategies and dealer activities. Offshore exchanges further cap price swings by managing retail leverage, contrasting with the retail-driven volatility of 2021.
                </p>
                <p>
                  While this may frustrate those hoping for another parabolic rally, it signals Bitcoin&apos;s growing maturity as an asset class, where patience, risk management, and yield generation are key. Until dealer hedges unwind or implied volatility spikes, Bitcoin&apos;s price is likely to remain range-bound, reflecting a new era for the cryptocurrency market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
