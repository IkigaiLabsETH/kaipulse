'use client';

import SupportLine from '@/components/cycles/SupportLine';

export default function GMPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-16">
        <div className="space-y-8 sm:space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4 sm:space-y-8">
            <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-yellow-500/90 text-[10px] sm:text-sm mb-2 sm:mb-4 font-light font-satoshi">Analysis • Cycle Theory • Power Law</p>
            <h1 className="text-center">
              <span className="text-3xl sm:text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                GM, GM
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-2 sm:mt-6 gap-2 sm:gap-0">
              <div className="h-px w-12 sm:w-24 bg-yellow-500/30"></div>
              <p className="mx-0 sm:mx-6 text-sm sm:text-lg text-white/70 font-light italic font-satoshi">Understanding Bitcoin&apos;s Market Cycles</p>
              <div className="h-px w-12 sm:w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Main Chart */}
          <div className="mb-8 sm:mb-12">
            <SupportLine />
          </div>

          {/* Analysis Frames */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Power Law Support */}
            <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] sm:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
                Power Law Support
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                The power law support line represents Bitcoin&apos;s long-term price floor, calculated using the 5th percentile of historical price data. This model has proven remarkably accurate in predicting major market bottoms.
              </p>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">Key Support Levels</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Current: $40,128</li>
                  <li>• 2025: $50,000</li>
                  <li>• 2029: $110,000</li>
                </ul>
              </div>
            </div>

            {/* Cycle Predictions */}
            <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] sm:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
                Cycle Predictions
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Based on historical patterns and the power law model, we can project key price targets for upcoming cycles:
              </p>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">2024-25 Cycle</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Peak Range: $180k - $275k</li>
                  <li>• Timing: Nov 2025 ± 3mo</li>
                  <li>• Support: $50k - $55k</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">2028-30 Cycle</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Peak Range: $300k - $480k</li>
                  <li>• Timing: Q4 2029 ± 6mo</li>
                  <li>• Support: $110k - $120k</li>
                </ul>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] sm:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
                Risk Management
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Effective risk management is crucial for navigating Bitcoin&apos;s volatile cycles:
              </p>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">Strategy Guidelines</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Dollar-cost averaging reduces timing risk</li>
                  <li>• Position sizing based on risk tolerance</li>
                  <li>• Trailing stops for profit protection</li>
                  <li>• Regular portfolio rebalancing</li>
                </ul>
              </div>
            </div>

            {/* Exit Strategy */}
            <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] sm:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3 sm:mb-4">
                Exit Strategy
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Strategic exit points are crucial for maximizing returns while managing risk:
              </p>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">Current Cycle</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Primary target: $230k - $250k</li>
                  <li>• Captures 80% of expected move</li>
                  <li>• Avoids vertical-drop risk</li>
                  <li>• Based on historical patterns</li>
                </ul>
              </div>
              <div className="bg-yellow-500/10 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-sm text-yellow-400 mb-2">Invalidation Levels</h4>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                  <li>• Weekly close above $300k this cycle</li>
                  <li>• Weekly close below $120k in 2029</li>
                  <li>• Would break the decay curve</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,1)] sm:shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4 sm:mb-6">
              The Hidden Order in Bitcoin&apos;s Chaos
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300">
              <p>
                Bitcoin&apos;s price chart looks chaotic—but hidden under every spike and crash is a quietly rising &quot;support line.&quot; This line isn&apos;t a hunch; it&apos;s a 5-th-percentile power-law regression of all daily closes. In plain English: it tracks the lowest 5% of prices, bends with Bitcoin&apos;s slowing growth, and has barely been breached since 2010. A separate model frozen in 2015 lands on nearly the same curve, proving the floor&apos;s long-term reliability.
              </p>
              <p>
                Why care? First, that floor lets us gauge how high bubbles can stretch—each boom overshoots it by a shrinking multiple, creating the &quot;Decay Channel&quot; that traders use to set sell targets. Second, it anchors a conservative retirement plan: budget as if BTC hugs the support line, enjoy upside 95% of the time, tighten belts only during the rare dips below.
              </p>
              <div className="bg-yellow-500/10 p-4 sm:p-6 rounded-lg">
                <p className="italic text-sm sm:text-base">
                  But models aren&apos;t magic. A regulatory shock, tech failure, or data-snooping bias could flatten the curve, and any genuine black-swan could knife straight through it. Therefore, treat the support line as a statistical seatbelt, not an ironclad guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
