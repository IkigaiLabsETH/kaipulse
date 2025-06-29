"use client";

import Link from 'next/link';
import Image from 'next/image';
import InteractiveTradePlaybook from '@/components/InteractiveTradePlaybook';

// Helper component for styled sections
const SectionCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
    <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 font-epilogue">
      {title}
    </h3>
    <div className="space-y-6 text-gray-300 font-satoshi text-lg">
      {children}
    </div>
  </div>
);

// Helper component for subsections within a card
const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h4 className="text-2xl font-bold text-yellow-500 font-epilogue">{title}</h4>
        <div className="bg-black/50 p-8 rounded-none border border-yellow-500/20 text-white/80 space-y-4">
            {children}
        </div>
    </div>
);


export default function OptionsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Income Strategy • Options Trading • Wealth Management</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-boska">
                Tesla Covered Calls
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Guide to Generating Income with TSLA Options</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/roadster.jpg"
                alt="Tesla Options Strategy Visual"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <SectionCard title="Key Points">
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Research suggests selling Tesla covered call options can generate income, especially with high volatility.</li>
                <li>It seems likely that using tastytrade simplifies the process with its user-friendly interface.</li>
                <li>The evidence leans toward selecting strikes 5-10% above the current price, around $323.62 as of June 28, 2025.</li>
                <li>Tax implications in France involve a 30% flat tax, requiring careful reporting.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Introduction to Covered Calls">
            <p className="text-lg">
              Selling covered calls on Tesla (TSLA) is a strategy where you own the stock and sell call options to earn premiums. This can be particularly effective given Tesla&apos;s volatility, which often leads to higher option premiums. It&apos;s a way to generate income while potentially capping your upside if the stock rises above the strike price.
            </p>
            <p className="text-lg mt-6 italic text-yellow-200">
              While we&apos;re discussing selling volatility through covered calls, it&apos;s worth noting that Michael Saylor didn&apos;t just buy Bitcoin—he invented the playbook. He sold future volatility to debt markets, raised billions, and bought BTC with it, essentially turning MicroStrategy stock into a Bitcoin-powered call option. Now others are copying this leveraged approach to volatility arbitrage.
            </p>
          </SectionCard>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">Why Tesla?</h3>
                <p>Tesla&apos;s stock, currently at $323.62, benefits from high implied volatility, making it ideal for covered calls.</p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-epilogue">Why Tastytrade?</h3>
                <p>Tastytrade, preferred for its options-centric tools, offers a simple interface for managing these trades, aligning with your choice for ease of use.</p>
            </div>
          </div>

          <SectionCard title="Detailed Analysis on Selling Tesla Covered Call Options">
            <div className="space-y-8">
                <SubSection title="Overview and Strategy Rationale">
                    <p>Selling covered call options on Tesla (TSLA) is an income-generating strategy that involves owning the underlying stock and selling call options against it. This approach is particularly appealing for Tesla due to its high volatility, which results in elevated option premiums. As of June 28, 2025, Tesla&apos;s stock price stands at approximately $323.62, providing a solid base for implementing this strategy. The goal is to collect premiums while potentially capping gains if the stock price exceeds the strike price, balancing income generation with risk management.</p>
                    <p>Recent research, such as articles from <Link href="#" className="text-yellow-400 hover:underline">Smart Investor: Improve Your Returns on Tesla with Covered Calls</Link>, highlights Tesla&apos;s 24.51% surge in the past month, making it an opportune time for covered calls, especially with earnings on the horizon. This volatility, driven by events like the robotaxi launch, creates significant extrinsic value in options, as noted in <Link href="#" className="text-yellow-400 hover:underline">Mastering Tesla Covered Calls</Link>, enhancing premium collection opportunities.</p>
                </SubSection>
                <SubSection title="Platform Selection: Tastytrade Preference">
                    <p>Your preference for tastytrade is well-founded, given its options-centric interface and user-friendly tools. Compared to alternatives like Interactive Brokers (IBKR), which offers institutional-grade features, tastytrade&apos;s simplicity aligns with your needs for managing covered calls efficiently. <Link href="#" className="text-yellow-400 hover:underline">Tastytrade Help Center</Link> supports this, noting that covered calls are available in all account types, including cash accounts, which suits your trading style.</p>
                    <p>A snapshot comparison from your notes shows:</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-yellow-500/30">
                                    <th className="p-2">Platform</th>
                                    <th className="p-2">Why it wins for a French covered-call seller</th>
                                    <th className="p-2">Watch-outs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-yellow-500/20">
                                    <td className="p-2 font-bold text-yellow-400">tastytrade</td>
                                    <td className="p-2">Options-first interface, probability-of-profit tools, € wire funding, flat 1 USD/contract, free stock trades, approved for French residents</td>
                                    <td className="p-2">No multi-currency cash, fewer order-types, no unified portfolio-margin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>This table underscores tastytrade&apos;s suitability for your strategy, especially with its flat 1 USD/contract fee, which is cost-effective for frequent trades.</p>
                </SubSection>
                <SubSection title="Execution Steps on Tastytrade">
                    <p>The process for selling covered calls on tastytrade is streamlined, as detailed in <Link href="#" className="text-yellow-400 hover:underline">What is a Covered Call &amp; How Does it Work?</Link>. Here&apos;s a straightforward process:</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Log into tastytrade and search for TSLA.</li>
                        <li>Go to the Trade tab, select Table mode, and expand the desired expiration.</li>
                        <li>Use the Strategy Menu to choose &lsquo;Covered Call&rsquo; or manually pick the call to sell.</li>
                        <li>Select your strike price and expiration, review details, and send the order.</li>
                    </ol>
                    <p>For more details, check <Link href="https://support.tastytrade.com/support/solutions/articles/43000435222-what-is-a-covered-call-how-does-it-work-" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Tastytrade Covered Call Guide</Link>.</p>
                    <h5 className="text-lg font-bold text-yellow-400 mt-4">Manual Steps:</h5>
                     <ul className="list-disc list-inside space-y-2">
                        <li>Enter TSLA, go to Trade tab, Table mode.</li>
                        <li>Expand the expiration date.</li>
                        <li>Click the Bid price of the call to sell.</li>
                        <li>Review and send the order.</li>
                    </ul>
                    <p>These steps ensure you can execute trades efficiently, aligning with your plan to sell on 100 shares every two weeks. Given Tesla&apos;s current price, you&apos;ll need at least $32,362 for 100 shares, and tastytrade&apos;s cash account support means no additional margin is required for covered calls.</p>
                </SubSection>
                <SubSection title="Strike and Expiration Selection">
                    <p>Selecting the right strike and expiration is critical. Research from <Link href="#" className="text-yellow-400 hover:underline">Option Samurai</Link> indicates 276 covered call opportunities for TSLA in the next three months, with returns ranging from 0.58% to 8.56% until expiration, annualizing to 83.35%–292.12%. For your bi-weekly cadence, focus on options with 7-14 day expirations. A common strategy, as suggested by <Link href="#" className="text-yellow-400 hover:underline">Smart Investor</Link>, is to sell OTM calls with strikes 5-10% above the current price ($340–$355), balancing premium collection with assignment risk.</p>
                    <p>For example, at a strike of $350, you might collect a premium of around $2.50–$5.00, depending on volatility, aiming for a 1% monthly return as a target. Tastytrade&apos;s probability-of-profit tools can help assess the likelihood of the option expiring worthless, typically targeting a delta of ~0.2 for lower risk.</p>
                </SubSection>
                <SubSection title="Tax and Risk Considerations">
                    <h5 className="text-lg font-bold text-yellow-400 mt-4">Tax Implications in France</h5>
                    <p>Given your flat tax stance, options income in France is taxed at a 30% PFU rate (12.8% IR + 17.2% PS), as noted in your provided details. This simplifies reporting, requiring you to file on Form 2042, lines 3VG/3VH, with Tastytrade&apos;s activity statement CSV. Losses can offset gains within the year and carry forward for 10 years, and trades in USD must be converted to EUR at the Banco de France daily rate, with Tastytrade reports including this conversion.</p>
                    <h5 className="text-lg font-bold text-yellow-400 mt-4">Risk Management and Market Context</h5>
                    <p>Covered calls carry risks, primarily the stock being called away if Tesla rises above your strike, potentially missing further gains. To manage this, consider rolling options, as discussed in <Link href="#" className="text-yellow-400 hover:underline">Offensively Rolling Covered Calls Explained</Link>, by buying back the current call and selling a new one with a higher strike or later expiration. Another risk is a stock price drop, offset partially by the premium, but Tesla&apos;s volatility (IV percentile 59.92% per Option Samurai) means significant moves are possible.</p>
                    <p>Recent news, such as Tesla&apos;s robotaxi launch facing early struggles , could increase volatility, affecting your strategy. If the launch succeeds, Tesla&apos;s stock might surge, increasing assignment risk; if it struggles, the stock could decline, letting calls expire worthless. Staying informed via platforms like <Link href="https://www.cnn.com/markets" className="text-yellow-400 hover:underline">CNN Markets</Link> is crucial for managing positions.</p>
                </SubSection>
                 <SubSection title="Psychological and Practical Tips">
                    <p>From seasoned EU call-sellers&apos; in your notes, keep positions to 25% per ticker to manage risk, given Tesla&apos;s potential for overnight 10% swings. Enter orders 15–30 minutes after the US open for tighter spreads, and use Tastytrade&apos;s tools to export trade data for record-keeping, tagging trades with reason codes (e.g., &quot;income,&quot; &quot;roll&quot;) for post-mortems. Celebrate hitting annualized yield targets but avoid chasing extra pennies when assignment means realizing gains.</p>
                </SubSection>
                <SubSection title="Conclusion">
                    <p>Selling Tesla covered calls on tastytrade, with your bi-weekly 100-share cadence, leverages the platform&apos;s strengths for income generation. By selecting appropriate strikes, managing risks, and adhering to French tax rules, you can enhance returns. Stay informed about Tesla&apos;s developments, like the robotaxi launch, to adjust your strategy dynamically.</p>
                </SubSection>
            </div>
          </SectionCard>

          <SectionCard title="Institutional Desk Behavior: The Covered Call Recycling Machine">
            <div className="space-y-8">
                <SubSection title="The Systematic Playbook">
                    <p>Professional trading desks run covered call programs as systematic yield-generation strategies. Here&apos;s how the machine works:</p>
                    <div className="bg-black/30 p-6 rounded-none border border-yellow-500/30">
                        <p className="font-mono text-sm">
                            <strong className="text-yellow-400">Covered Call Formula:</strong><br/>
                            Long Spot (TSLA/BTC) + Short OTM Call = Premium Income
                        </p>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong className="text-yellow-400">Collect premium up-front:</strong> Steady, bond-like &quot;yield&quot; regardless of outcome</li>
                        <li><strong className="text-yellow-400">If expires below strike:</strong> Keep premium + underlying asset</li>
                        <li><strong className="text-yellow-400">If expires above strike:</strong> Get &quot;called away&quot; but keep premium</li>
                    </ul>
                    <p>Either way, the premium is theirs. The only difference is whether they still hold the underlying afterward.</p>
                </SubSection>

                <SubSection title="Why Re-buy Spot After Expiry?">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-900/20 p-6 rounded-none border border-red-500/30">
                            <h5 className="text-lg font-bold text-red-400 mb-3">Scenario A: Called Away</h5>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Their Tesla shares got delivered to call buyer → now flat</li>
                                <li>But their mandate requires running the same program next month</li>
                                <li>→ Immediately buy spot to reload inventory</li>
                                <li>→ Sell next batch of calls</li>
                            </ul>
                        </div>
                        <div className="bg-blue-900/20 p-6 rounded-none border border-blue-500/30">
                            <h5 className="text-lg font-bold text-blue-400 mb-3">Scenario B: Not Called Away</h5>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>Still hold Tesla, but delta is now &quot;un-hedged&quot;</li>
                                <li>Some desks neutralize P/L by being flat gamma over weekends</li>
                                <li>→ Temporarily sell part of spot before expiry</li>
                                <li>→ Repurchase once options are off books</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-yellow-900/20 p-4 rounded-none border border-yellow-500/30 mt-4">
                        <p className="text-yellow-200"><strong>Net Effect:</strong> Predictable post-expiry demand from covered-call sellers who need fresh underlying for new cycles or hedge resets.</p>
                    </div>
                </SubSection>

                <SubSection title="Market Impact Mechanics">
                    <div className="space-y-4">
                        <div className="bg-gray-900/50 p-6 rounded-none border border-gray-500/30">
                            <h5 className="text-lg font-bold text-gray-300 mb-3">Into Expiry (Pinning Effect)</h5>
                            <p className="text-sm">Short calls keep dealers long gamma → dealers sell rallies/buy dips → price gravitates toward popular strikes (&quot;pinning&quot;)</p>
                        </div>
                        <div className="bg-green-900/20 p-6 rounded-none border border-green-500/30">
                            <h5 className="text-lg font-bold text-green-400 mb-3">After Expiry (The Reload)</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Pin evaporates</li>
                                <li>Covered-call desks buy spot</li>
                                <li>Dealers unwind hedges</li>
                                <li>IV often pops a few vol points</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-yellow-200 italic">This is why Tesla (and crypto like BTC) sometimes catches a mild bid in the 24-48h after big option maturities.</p>
                </SubSection>

                <SubSection title="Why Institutions Bother with This Strategy">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-purple-900/20 p-4 rounded-none border border-purple-500/30">
                            <h6 className="font-bold text-purple-400 mb-2">Yield Environment</h6>
                            <p className="text-sm">With real rates &gt; 0 and traditional carry trades offering skinny yields, covered calls are one of the few scalable yield trades left.</p>
                        </div>
                        <div className="bg-orange-900/20 p-4 rounded-none border border-orange-500/30">
                            <h6 className="font-bold text-orange-400 mb-2">Stacked Income</h6>
                            <p className="text-sm">Institutions love multiple income streams: premium + potential dividends + basis when futures trade rich.</p>
                        </div>
                        <div className="bg-pink-900/20 p-4 rounded-none border border-pink-500/30">
                            <h6 className="font-bold text-pink-400 mb-2">Mandate Match</h6>
                            <p className="text-sm">They accept capped upside because their mandate is income generation, not lottery tickets.</p>
                        </div>
                    </div>
                </SubSection>

                <SubSection title="The Covered Call Contingent">
                    <p>Who runs these systematic programs?</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h6 className="font-bold text-yellow-400 mb-3">Traditional Markets (TSLA, etc.)</h6>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Covered call ETFs (JEPI, QYLD)</li>
                                <li>Pension funds with income mandates</li>
                                <li>Market-neutral hedge funds</li>
                                <li>Institutional wealth managers</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-yellow-400 mb-3">Crypto Markets</h6>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Crypto lending desks</li>
                                <li>Market-neutral crypto funds</li>
                                <li>Covered-call crypto ETFs (YBTC)</li>
                                <li>Mining companies hedging production</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-yellow-200 mt-4"><strong>Key Insight:</strong> Because they must roll every expiry, their flows are quasi-mechanical — making them predictable for professional traders to anticipate.</p>
                </SubSection>

                <SubSection title="Data: Post-Expiry Patterns in Bitcoin (Proxy for High-Vol Assets)">
                    <p>Here&apos;s what typically happens around major option expiries, using Bitcoin as a proxy for high-volatility assets like Tesla:</p>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-left border-collapse bg-black/30">
                            <thead>
                                <tr className="border-b border-yellow-500/50">
                                    <th className="p-3 text-yellow-400">Deribit Quarterly Expiry</th>
                                    <th className="p-3 text-yellow-400">-48h → Expiry</th>
                                    <th className="p-3 text-yellow-400">Expiry → +48h</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-gray-600/30">
                                    <td className="p-3">29 Mar 2024</td>
                                    <td className="p-3 text-green-400">+0.63%</td>
                                    <td className="p-3 text-green-400">+2.06%</td>
                                </tr>
                                <tr className="border-b border-gray-600/30">
                                    <td className="p-3">28 Jun 2024</td>
                                    <td className="p-3 text-red-400">-0.81%</td>
                                    <td className="p-3 text-green-400">+3.91%</td>
                                </tr>
                                <tr className="border-b border-gray-600/30">
                                    <td className="p-3">27 Sep 2024</td>
                                    <td className="p-3 text-green-400">+4.19%</td>
                                    <td className="p-3 text-red-400">-0.24%</td>
                                </tr>
                                <tr className="border-b border-gray-600/30">
                                    <td className="p-3">27 Dec 2024</td>
                                    <td className="p-3 text-red-400">-5.17%</td>
                                    <td className="p-3 text-red-400">-0.67%</td>
                                </tr>
                                <tr className="border-b border-gray-600/30">
                                    <td className="p-3">28 Mar 2025</td>
                                    <td className="p-3 text-red-400">-2.93%</td>
                                    <td className="p-3 text-red-400">-2.39%</td>
                                </tr>
                                <tr>
                                    <td className="p-3">27 Jun 2025</td>
                                    <td className="p-3 text-red-400">-0.25%</td>
                                    <td className="p-3 text-green-400">+0.22%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                        <h6 className="font-bold text-yellow-400">What the Numbers Tell Us:</h6>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-red-900/20 p-4 rounded-none border border-red-500/30">
                                <h6 className="font-bold text-red-400 mb-2">Pre-Expiry Softness</h6>
                                <p className="text-xs">Spot drifts or sells off modestly into expiry (dealers long-gamma, selling rallies and buying dips)</p>
                            </div>
                            <div className="bg-green-900/20 p-4 rounded-none border border-green-500/30">
                                <h6 className="font-bold text-green-400 mb-2">Post-Expiry Bid</h6>
                                <p className="text-xs">Covered-call contingent re-buys to reload inventory before writing next month&apos;s calls</p>
                            </div>
                            <div className="bg-orange-900/20 p-4 rounded-none border border-orange-500/30">
                                <h6 className="font-bold text-orange-400 mb-2">Macro Exceptions</h6>
                                <p className="text-xs">Dec 2024 & Mar 2025 dominated by risk-off flows, swamping usual patterns</p>
                            </div>
                        </div>
                    </div>
                </SubSection>

                <SubSection title="Trade-Craft Takeaways for Tesla Options">
                    <div className="space-y-4">
                        <div className="bg-blue-900/20 p-4 rounded-none border border-blue-500/30">
                            <h6 className="font-bold text-blue-400 mb-2">🎯 Expect Pinning</h6>
                            <p className="text-sm">Into monthly Tesla option expiries, long-gamma dealers clamp intraday moves around popular strikes</p>
                        </div>
                        <div className="bg-green-900/20 p-4 rounded-none border border-green-500/30">
                            <h6 className="font-bold text-green-400 mb-2">📈 Watch Post-Expiry Action</h6>
                            <p className="text-sm">Monitor unusual volume in Tesla stock on Monday after third Friday expiries - often marks institutional re-buy waves</p>
                        </div>
                        <div className="bg-yellow-900/20 p-4 rounded-none border border-yellow-500/30">
                            <h6 className="font-bold text-yellow-400 mb-2">⚡ IV Reset Opportunities</h6>
                            <p className="text-sm">Implied volatility often resets higher after big maturities, making fresh call overwriting attractive again</p>
                        </div>
                        <div className="bg-purple-900/20 p-4 rounded-none border border-purple-500/30">
                            <h6 className="font-bold text-purple-400 mb-2">🚨 Fade Wisely</h6>
                            <p className="text-sm">Only fade the first post-expiry bounce when macro headwinds are strong (earnings, Fed meetings, etc.)</p>
                        </div>
                    </div>
                </SubSection>
            </div>
          </SectionCard>

          <div className="my-24">
            <InteractiveTradePlaybook />
          </div>

        </div>
      </div>
    </div>
  );
}
