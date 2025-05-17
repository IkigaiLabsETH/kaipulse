'use client';

import BTC8020Ticker from '@/components/8020';

export default function BTC8020Page() {
  const sections = [
    {
      title: "Portfolio Composition",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">₿</span>
            <h3 className="text-xl font-bold text-yellow-500">80% BTC (Cold Storage)</h3>
          </div>
          <p className="text-white/90">Long-term asymmetric bet on Bitcoin as pristine collateral and digital gold.</p>
          
          <div className="flex items-center gap-2 mt-6">
            <span className="text-2xl">📊</span>
            <h3 className="text-xl font-bold text-yellow-500">20% Tactical Allocation</h3>
          </div>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>Split between MSTR, MSTU (2x long MSTR), and MSTX (2x long MSTR from Defiance)</li>
            <li>Potential satellite exposure to BMAX for yield and convexity via BTC-related convertibles</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Strategic Logic Behind the Allocation",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🟡</span>
              <h3 className="text-xl font-bold text-yellow-500">80% BTC (Cold Storage)</h3>
            </div>
            <div className="pl-8 space-y-2">
              <p className="text-white/90">Objective: Preserve wealth over the long arc of monetary debasement cycles.</p>
              <h4 className="text-lg font-semibold text-yellow-500/90">Cold Storage Thesis:</h4>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Immunity to exchange risk</li>
                <li>Self-custody aligns with sovereign individual principles</li>
                <li>&ldquo;Don&apos;t trust, verify&rdquo; layer of the thesis</li>
                <li>Bitcoin remains the base layer of digital trust and the denominator of this strategy</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔵</span>
              <h3 className="text-xl font-bold text-yellow-500">20% MSTR / MSTU / MSTX</h3>
            </div>
            <p className="text-white/90">Leverage on BTC without selling BTC</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-yellow-500/30">
                <thead>
                  <tr className="bg-yellow-500/10">
                    <th className="p-3 text-left text-yellow-500">Ticker</th>
                    <th className="p-3 text-left text-yellow-500">Role</th>
                    <th className="p-3 text-left text-yellow-500">Benefit</th>
                    <th className="p-3 text-left text-yellow-500">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">MSTR</td>
                    <td className="p-3 text-white/90">Spot BTC proxy with operational leverage</td>
                    <td className="p-3 text-white/90">Long exposure to BTC with embedded optionality via Saylor&apos;s strategy and BTC on balance sheet</td>
                    <td className="p-3 text-white/90">Company-specific risks, dilution</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">MSTU</td>
                    <td className="p-3 text-white/90">2x daily long MSTR</td>
                    <td className="p-3 text-white/90">Tactical tool for bullish conviction surges</td>
                    <td className="p-3 text-white/90">High risk due to daily rebalancing decay</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">MSTX</td>
                    <td className="p-3 text-white/90">Alternative 2x long MSTR</td>
                    <td className="p-3 text-white/90">Competes with MSTU, possibly better fees or options liquidity</td>
                    <td className="p-3 text-white/90">Similar decay and compounding effects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-yellow-500/90">Purpose of Leveraged MSTR ETFs (MSTU, MSTX):</h4>
              <ul className="list-disc list-inside text-white/90 space-y-1 mt-2">
                <li>Enhance upside during BTC bull trends without liquidating BTC holdings</li>
                <li>Tactical exposure tool for expressing short-term directional conviction</li>
                <li>Use sparingly, ideally with stop-loss automation or delta hedging to manage risk</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🟢</span>
              <h3 className="text-xl font-bold text-yellow-500">Optional: BMAX – Income + BTC-Linked Exposure via Convertibles</h3>
            </div>
            <div className="pl-8 space-y-2">
              <h4 className="text-lg font-semibold text-yellow-500/90">Thesis:</h4>
              <p className="text-white/90">Exposure to BTC-tied companies&apos; convertibles offers:</p>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Yield from corporate credit</li>
                <li>Embedded call options (convertibility)</li>
                <li>Convex exposure to upside while earning passive yield</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-yellow-500/90 mt-4">Complement to MSTR/MSTU:</h4>
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Helps smooth out portfolio volatility</li>
                <li>Earns yield while still aligned with BTC-heavy firms like MicroStrategy</li>
                <li>Could be especially useful in sideways markets where volatility premiums are high</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Investment Narrative Summary",
      content: (
        <div className="space-y-4">
          <p className="text-white/90 italic">
            &ldquo;This portfolio anchors 80% in cold-stored BTC—your core asset of conviction and sovereignty. The remaining 20% dynamically tracks Bitcoin&apos;s upside through leveraged equity exposure (MSTR via MSTU/MSTX), enhancing gains during bull markets without needing to sell BTC. BMAX offers a yield-bearing hedge that aligns with BTC thesis via convertible debt from BTC treasury-rich firms.&rdquo;
          </p>
        </div>
      ),
    },
    {
      title: "BTC Tactical Barbell Allocation Strategy (80/20 Model)",
      content: (
        <div className="space-y-8">
          {/* Core Allocation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <h3 className="text-xl font-bold text-yellow-500">Core Allocation (80%)</h3>
            </div>
            <div className="pl-8 space-y-2">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li><strong>Asset:</strong> BTC (cold storage)</li>
                <li><strong>Objective:</strong> Long-term capital preservation and appreciation</li>
                <li><strong>Notes:</strong> Sovereign-grade asset, self-custodied, zero counterparty risk</li>
              </ul>
            </div>
          </div>

          {/* Tactical Allocation Table */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-xl font-bold text-yellow-500">Tactical Allocation (20%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-yellow-500/30">
                <thead>
                  <tr className="bg-yellow-500/10">
                    <th className="p-3 text-left text-yellow-500">Ticker</th>
                    <th className="p-3 text-left text-yellow-500">Type</th>
                    <th className="p-3 text-left text-yellow-500">Yield</th>
                    <th className="p-3 text-left text-yellow-500">Volatility</th>
                    <th className="p-3 text-left text-yellow-500">Upside</th>
                    <th className="p-3 text-left text-yellow-500">Role in Portfolio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>MSTR</strong></td>
                    <td className="p-3 text-white/90">Common Stock</td>
                    <td className="p-3 text-white/90">0%</td>
                    <td className="p-3 text-white/90">High</td>
                    <td className="p-3 text-white/90">High</td>
                    <td className="p-3 text-white/90">BTC proxy with operating leverage</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>MSTU/MSTX</strong></td>
                    <td className="p-3 text-white/90">2x Leveraged MSTR ETFs</td>
                    <td className="p-3 text-white/90">0%</td>
                    <td className="p-3 text-white/90">Very High</td>
                    <td className="p-3 text-white/90">Very High</td>
                    <td className="p-3 text-white/90">Short-term bullish BTC proxy</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>MSTY</strong></td>
                    <td className="p-3 text-white/90">MSTR Option Income ETF</td>
                    <td className="p-3 text-white/90">~35% TTM</td>
                    <td className="p-3 text-white/90">Medium</td>
                    <td className="p-3 text-white/90">Moderate</td>
                    <td className="p-3 text-white/90">Income + moderate BTC upside</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>IMST</strong></td>
                    <td className="p-3 text-white/90">Synthetic Covered Call ETF (MSTR)</td>
                    <td className="p-3 text-white/90">~3% SEC Y</td>
                    <td className="p-3 text-white/90">Medium</td>
                    <td className="p-3 text-white/90">Limited</td>
                    <td className="p-3 text-white/90">Conservative income from MSTR exposure</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>STRK</strong></td>
                    <td className="p-3 text-white/90">MSTR 8% Preferred Shares</td>
                    <td className="p-3 text-white/90">8% Fixed</td>
                    <td className="p-3 text-white/90">Low</td>
                    <td className="p-3 text-white/90">None</td>
                    <td className="p-3 text-white/90">Income stability, lower volatility</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>STRF</strong></td>
                    <td className="p-3 text-white/90">MSTR 10% Preferred Shares</td>
                    <td className="p-3 text-white/90">10% Fixed</td>
                    <td className="p-3 text-white/90">Low</td>
                    <td className="p-3 text-white/90">None (Callable)</td>
                    <td className="p-3 text-white/90">Higher yield, callable risk</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90"><strong>BMAX</strong></td>
                    <td className="p-3 text-white/90">BTC Treasury Convertibles ETF</td>
                    <td className="p-3 text-white/90">Variable</td>
                    <td className="p-3 text-white/90">Medium</td>
                    <td className="p-3 text-white/90">Moderate</td>
                    <td className="p-3 text-white/90">Yield + BTC-tied bond convexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Suggested Tactical Allocation Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-xl font-bold text-yellow-500">Suggested Tactical Allocation Breakdown (20%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-yellow-500/30">
                <thead>
                  <tr className="bg-yellow-500/10">
                    <th className="p-3 text-left text-yellow-500">Category</th>
                    <th className="p-3 text-left text-yellow-500">Allocation</th>
                    <th className="p-3 text-left text-yellow-500">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">High Conviction Beta (MSTR/MSTU/MSTX)</td>
                    <td className="p-3 text-white/90">5%</td>
                    <td className="p-3 text-white/90">Capture BTC upside with leverage</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Yield + Beta (MSTY + IMST)</td>
                    <td className="p-3 text-white/90">6%</td>
                    <td className="p-3 text-white/90">Generate income, maintain MSTR linkage</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Stability / Cashflow (STRK + STRF)</td>
                    <td className="p-3 text-white/90">5%</td>
                    <td className="p-3 text-white/90">Downside protection, fixed yield</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Strategic Convexity (BMAX)</td>
                    <td className="p-3 text-white/90">4%</td>
                    <td className="p-3 text-white/90">Bond-style BTC exposure with upside</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rebalancing Framework */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-xl font-bold text-yellow-500">Rebalancing Framework</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-yellow-500/30">
                <thead>
                  <tr className="bg-yellow-500/10">
                    <th className="p-3 text-left text-yellow-500">Market Condition</th>
                    <th className="p-3 text-left text-yellow-500">Allocation Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">BTC Bull Market</td>
                    <td className="p-3 text-white/90">Tilt to MSTU/MSTX, reduce IMST/STRF</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Sideways BTC</td>
                    <td className="p-3 text-white/90">Favor MSTY, IMST, STRK</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">BTC Volatility Spike</td>
                    <td className="p-3 text-white/90">Rotate into STRF, IMST, reduce leverage (MSTU/MSTX)</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Post-Earnings MSTR</td>
                    <td className="p-3 text-white/90">Hold MSTU/MSTX short-term to capture drift</td>
                  </tr>
                  <tr className="border-t border-yellow-500/30">
                    <td className="p-3 text-white/90">Macro Risk Event</td>
                    <td className="p-3 text-white/90">Increase BMAX, STRK; reduce leverage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Thesis */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📈</span>
              <h3 className="text-xl font-bold text-yellow-500">Summary Thesis</h3>
            </div>
            <blockquote className="pl-8 border-l-4 border-yellow-500/30 italic text-white/90">
              &ldquo;Store 80% in cold BTC as sovereign-grade collateral. Deploy the remaining 20% dynamically across high-beta, yield-enhancing, and downside-protected instruments. Use MSTR as a liquid BTC proxy, MSTU/MSTX as turbo leverage, MSTY/IMST for yield, and STRK/STRF/BMAX for defensive positioning.&rdquo;
            </blockquote>
          </div>
        </div>
      ),
    },
    {
      title: "The Infinite Money Glitch Strategy",
      content: (
        <div className="space-y-8">
          {/* Individual Strategy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <h3 className="text-xl font-bold text-yellow-500">Individual Approach</h3>
            </div>
            <div className="pl-8 space-y-2">
              <ol className="list-decimal list-inside text-white/90 space-y-2">
                <li>Own Bitcoin</li>
                <li>Secure low-interest DeFi loans using Bitcoin</li>
                <li>Buy MSTY during optimal market conditions</li>
                <li>Use MSTY dividends to repay the loan</li>
                <li>Take out another low-interest DeFi loan</li>
                <li>Repay the new loan ~2x faster (with roughly double the MSTY shares)</li>
                <li>Repeat until achieving desired passive income</li>
              </ol>
              <p className="text-white/90 mt-4 italic">
                Strategy: Arbitrage low DeFi loan rates against MSTY dividends. NAV erosion is irrelevant since you&apos;re using borrowed capital.
              </p>
            </div>
          </div>

          {/* LLC Strategy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏢</span>
              <h3 className="text-xl font-bold text-yellow-500">LLC Protection Strategy</h3>
            </div>
            <div className="pl-8 space-y-2">
              <ol className="list-decimal list-inside text-white/90 space-y-2">
                <li>Form a L.L.C.</li>
                <li>L.L.C. Own Bitcoin</li>
                <li>L.L.C. Secure low-interest DeFi loans using Bitcoin</li>
                <li>L.L.C. Buy MSTY during optimal market conditions</li>
                <li>L.L.C. Use MSTY dividends to repay the loan</li>
                <li>L.L.C. Take out another low-interest DeFi loan</li>
                <li>L.L.C. Repay the new loan ~2x faster (with roughly double the MSTY shares)</li>
                <li>L.L.C. Repeat until achieving desired passive income</li>
              </ol>
              <p className="text-white/90 mt-4 italic">
                Key Benefit: L.L.C. protects Individual if L.L.C. goes bankrupt.
              </p>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="mt-8 p-4 border border-yellow-500/30 bg-yellow-500/5">
            <p className="text-white/90 text-sm">
              <strong className="text-yellow-500">Important:</strong> This strategy involves significant risks including but not limited to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>DeFi protocol risks and smart contract vulnerabilities</li>
                <li>Interest rate fluctuations</li>
                <li>MSTY dividend variability</li>
                <li>Market volatility and liquidation risks</li>
                <li>Regulatory considerations</li>
              </ul>
              Always consult with qualified legal and financial advisors before implementing any leveraged strategy.
            </p>
          </div>
        </div>
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
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin Investment Strategy • Portfolio Management • Risk Optimization</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                BTC-Centric Thesis
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Cold Storage + Tactical Exposure = 80/20</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* TradingView Chart First */}
            <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <BTC8020Ticker />
            </div>

            {/* Other Sections */}
            {sections.map((section, index) => (
              <div key={index} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                  {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
