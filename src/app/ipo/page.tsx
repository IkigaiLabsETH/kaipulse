"use client";
import React from 'react';

const ipoData = [
  {
    name: "Kraken (Payward, Inc.)",
    industry: "Cryptocurrency Exchange",
    timeline: "Early 2026 (possibly Q1)",
    valuation: "Estimated $2.5–$4 billion",
    details: "Founded in 2011, Kraken is one of the largest crypto exchanges globally, with over 10 million active users and trading in 261 coins across 185+ pairs. It's reportedly planning a $1 billion debt offering to fuel growth before an IPO, with a more favorable U.S. regulatory environment under the Trump administration (post-SEC lawsuit dismissal) boosting confidence. Kraken's earlier IPO plans were shelved after Coinbase's lackluster direct listing in 2021, but recent optimism in crypto (e.g., Circle's 168% IPO surge) suggests a 2026 debut. Its Layer 2 blockchain, Ink, launched in 2025, could also drive hype if a token drop precedes the IPO.",
    altMarketTake: "Crypto IPOs are inherently speculative, tied to volatile digital asset trends and regulatory shifts. Kraken's IPO could ride Bitcoin's momentum or crash if sentiment sours."
  },
  {
    name: "Revolut",
    industry: "Fintech (Neobank)",
    timeline: "2025",
    valuation: "$45 billion (with some investors pushing for $60 billion)",
    details: "This UK-based fintech unicorn, with over 25 million customers and $2.2 billion in 2023 revenue, offers multi-currency accounts, crypto trading, and now ventures into commercial real estate and private lending. Revolut's Nasdaq IPO is highly anticipated, though no exact date is set. Its $1 billion pre-tax profit in 2024 and pursuit of a U.S. banking license signal readiness. However, regulatory scrutiny and valuation debates could delay or temper its debut.",
    altMarketTake: "Revolut's blend of traditional banking and crypto services mirrors the speculative crossover appeal of altcoins, with its high valuation banking on future growth."
  },
  {
    name: "Ripple",
    industry: "Cryptocurrency/Blockchain (Payments)",
    timeline: "2026",
    valuation: "~$5 billion (based on 2023 estimates)",
    details: "Known for XRP, Ripple focuses on cross-border payments. Past SEC lawsuits delayed IPO plans, but Circle's 2025 IPO success and a friendlier regulatory climate could pave the way for a 2026 listing. Ripple's enterprise focus contrasts with retail-heavy crypto platforms like Kraken.",
    altMarketTake: "Ripple's IPO would directly tap crypto enthusiasm, with XRP's price likely to spike on listing news, embodying altcoin volatility."
  },
  {
    name: "Circle (Issuer of USDC)",
    industry: "Stablecoin/Blockchain Payments",
    timeline: "2025 (Q2–Q3)",
    valuation: "~$15 billion (based on 2022 estimates; current post-IPO market cap ~$10 billion)",
    details: "Circle, the issuer of the USDC stablecoin, went public on June 5, 2025, on the NYSE, raising $1.05 billion by selling 34 million shares at $31 each. Its IPO was 25x oversubscribed, with shares surging 168% on debut, reflecting massive investor enthusiasm. Circle manages $56 billion in dollar-pegged assets across major blockchains, making it a cornerstone of crypto's financial infrastructure. A new stablecoin bill could further boost its valuation if passed in 2025. However, regulatory scrutiny and competition from Tether (USDT) pose risks.",
    altMarketTake: "Circle's stablecoin dominance and IPO success mirror the hype of high-utility altcoins, but its reliance on regulatory clarity makes it a high-stakes bet."
  },
  {
    name: "Bullish",
    industry: "Cryptocurrency Exchange",
    timeline: "2025 (likely H2)",
    valuation: "~$9 billion (based on 2021 SPAC valuation)",
    details: "Backed by Peter Thiel, Bullish, a crypto exchange launched in May 2021 as a spinoff of Block One (EOS token creators), filed for a U.S. IPO in June 2025, per the Financial Times. Initially funded with $100 million cash and 164,000 BTC, Bullish attempted a $9 billion SPAC in 2021 but shelved it due to market conditions. Its 2024 revenue reportedly doubled to $1.2 billion, and Trump's pro-crypto stance could accelerate its listing. Competition from Binance and Coinbase, plus past EOS controversies, are concerns.",
    altMarketTake: "Bullish's ties to high-profile investors and its rapid growth echo the speculative frenzy of altcoin launches, with its IPO banking on crypto's bull run."
  },
  {
    name: "Gemini",
    industry: "Cryptocurrency Exchange/Custody",
    timeline: "2025–2026",
    valuation: "~$7.1 billion (based on 2021 fundraising)",
    details: "Founded by the Winklevoss twins in 2014, Gemini is a crypto exchange and custodian that signaled IPO intentions in January 2021. A $400 million raise in November 2021 valued it at $7.1 billion, but the FTX collapse and issues with its \"Earn\" program (settled for $50 million in 2024) delayed plans. Bloomberg reported in February 2025 that Gemini is exploring an IPO, buoyed by a recovering crypto market and regulatory tailwinds. Its stablecoin (GUSD) and custody services add appeal, though past legal battles could spook investors.",
    altMarketTake: "Gemini's brand and retail focus make it a speculative play akin to altcoins with strong community backing, but its valuation may hinge on market sentiment."
  },
  {
    name: "Chainalysis",
    industry: "Blockchain Analytics/Compliance",
    timeline: "2025–2026",
    valuation: "~$8.6 billion (based on May 2022 Series F)",
    details: "Founded in 2014, Chainalysis provides blockchain investigation and compliance tools to governments and law enforcement. A $170 million raise in May 2022 valued it at $8.6 billion, doubling its 2021 valuation. Bitwise cited Chainalysis as a prime IPO candidate in a January 2025 report, driven by demand for regulatory compliance solutions as crypto goes mainstream. Its niche focus may limit retail hype but appeals to institutional investors.",
    altMarketTake: "Chainalysis' role in bridging crypto and regulators parallels utility-driven altcoins, with its IPO likely to attract investors betting on blockchain's institutional adoption."
  },
  {
    name: "Consensys",
    industry: "Blockchain Software (Ethereum-focused)",
    timeline: "2026",
    valuation: "Not disclosed (last valued at $7 billion in 2022)",
    details: "Founded by Ethereum co-founder Joseph Lubin, Consensys develops Ethereum-based tools like MetaMask, with 42 million monthly active users. While no official IPO announcement has been made, Lubin's January 2025 tweet hinting at a public listing sparked speculation. Consensys' focus on Ethereum infrastructure positions it well for a 2026 IPO, especially if Ethereum's price (projected at $6,000+ by Q1 2025) sustains momentum. SEC scrutiny of Ethereum could pose risks.",
    altMarketTake: "Consensys' MetaMask and Ethereum ties make it a high-utility play, akin to altcoins with strong ecosystem backing, but its success depends on Ethereum's performance."
  },
  {
    name: "Fireblocks",
    industry: "Crypto Custody/Infrastructure",
    timeline: "2026–2027",
    valuation: "~$8 billion (based on 2022 estimates)",
    details: "Fireblocks, a crypto custody and settlement platform, supports over 1,800 institutions. While it stated in 2022 it has \"no urgency\" to go public, its $550 million Series E in 2022 valued it at $8 billion, and industry insiders expect a 2026–2027 IPO. Its infrastructure focus appeals to institutional investors, but a lack of retail brand recognition may limit IPO hype.",
    altMarketTake: "Fireblocks' behind-the-scenes role in crypto infrastructure is like a low-cap altcoin with strong fundamentals but less speculative fervor."
  },
  {
    name: "Uphold",
    industry: "Cryptocurrency Exchange",
    timeline: "2025–2026",
    valuation: "Not disclosed",
    details: "Uphold, a U.S.-based crypto exchange, is exploring an IPO or sale, as reported by @scottmelker on X in June 2025. With over 10 million users and support for 250+ assets, Uphold's multi-asset platform (crypto, fiat, metals) has grown steadily. No specific valuation or timeline was provided, but its exploration signals intent to capitalize on the 2025 crypto bull market. Regulatory hurdles and competition from larger exchanges like Coinbase are risks.",
    altMarketTake: "Uphold's broad asset support and retail appeal mirror altcoins with diverse use cases, but its IPO success hinges on market timing."
  }
];

const IpoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Market Analysis • Public Offerings</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Crypto IPO Watch
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The New &quot;Alt Market&quot;</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 font-boska">
              Finding the Next 1,000x Winner
            </h3>
            <div className="space-y-6 text-lg text-gray-300 font-satoshi">
              <p>
                During the Dotcom Bubble, ~1,000 internet companies IPO&apos;d. Most didn&apos;t survive the next 20 years, but the few that did became giants:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-yellow-500/90">
                <li><span className="text-gray-300">Nvidia (1999 IPO)</span></li>
                <li><span className="text-gray-300">Amazon (1997 IPO)</span></li>
                <li><span className="text-gray-300">Google (2004 IPO, just after the bubble)</span></li>
              </ul>
              <p>
                Each returned 1,000x to early investors by relentlessly growing revenue and market share, compounding value for a decade. People often compare the Dotcom Bubble to crypto&apos;s 2017 &amp; 2021 bubbles. Asset selection in crypto is perhaps more challenging: 1,000 IPO stocks then vs. &gt;1M token TGEs since 2015. Plus, token buyers are not protected by law unlike for equities.
              </p>
              <p>
                Yet the power law still applies: the few survivors of the crypto bubble will define the onchain financial world. Today, liquid funds largely converge on BTC and HYPE. One is digital gold that institutions are racing to accumulate, whereas the other is pioneering the future of France, already returning $1B+/yr to HYPE holders via buybacks.
              </p>
              <h4 className="text-2xl text-white pt-4 font-epilogue font-bold">Other Key Bets by Funds:</h4>
              <ul className="list-disc pl-6 space-y-2 text-yellow-500/90">
                <li><span className="text-gray-300"><strong className="text-white font-semibold">AAVE:</strong> dominant crypto bank for permissionless lending</span></li>
                <li><span className="text-gray-300"><strong className="text-white font-semibold">PENDLE:</strong> first-mover to tap into the $5T high-yield bond market</span></li>
                <li><span className="text-gray-300/70 italic">&lt;insert your bags&gt;</span></li>
              </ul>
              <h4 className="text-2xl text-white pt-4 font-epilogue font-bold">The Winning Formula:</h4>
              <ol className="list-decimal pl-6 space-y-2 marker:text-yellow-500/90 marker:font-semibold">
                <li>Generating significant amount of revenue</li>
                <li>Consistent growth e.g. in fees / TVL</li>
                <li>Offer direct value accrual e.g. buybacks</li>
                <li>Have minimal token unlock risk</li>
              </ol>
              <p className="pt-2">
                Point (1) and (2) applies to all stocks including Dotcom stocks. Point (3) and (4) are more crypto-specific. Token buyers lack legal protections—so investors demand alignment via direct value accrual to tokens and tight tokenomics. You don&apos;t want VCs to dump 20% token supply on your head.
              </p>
              <p>
                The formula narrows the universe of investable tokens to a small handful. However, the next AMZN or GOOG of crypto might be there somewhere.
              </p>
            </div>
          </div>

          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 font-boska">
              Case Study: Coinbase vs. MicroStrategy
            </h3>
            <div className="space-y-8 text-lg text-gray-300 font-satoshi">
              <p>The comparison between Coinbase and MicroStrategy offers a fascinating insight into market valuations, Bitcoin holdings, and whether Wall Street is missing the boat on &quot;onchain power laws.&quot;</p>
              
              <div>
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">The Numbers at a Glance</h4>
                <p><strong>Coinbase:</strong> Valued at $95 billion, holding less than 6,885 BTC.</p>
                <p><strong>MicroStrategy:</strong> Valued at $105 billion, holding 576,230 BTC—approximately 83.7 times more than Coinbase. The point is clear: MicroStrategy&apos;s market cap is slightly higher than Coinbase&apos;s, yet it&apos;s sitting on a much larger Bitcoin stash. This suggests Wall Street&apos;s &quot;legacy frameworks&quot; aren&apos;t keeping up with crypto reality.</p>
              </div>

              <div>
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">Two Different Playbooks</h4>
                <p><strong>Coinbase:</strong> This is the crypto economy&apos;s toll booth. As a centralized exchange, its value comes from transaction fees, custody services, and a growing user base. They&apos;re betting on the infrastructure of crypto, not just Bitcoin&apos;s price. Their revenue scales with trading volume and adoption, so their valuation reflects expectations of steady, linear growth.</p>
                <p><strong>MicroStrategy:</strong> This is a Bitcoin rocket ship in a corporate shell. Under Michael Saylor, they&apos;ve transformed into a leveraged play on Bitcoin itself. Their valuation is tightly coupled to Bitcoin&apos;s price—think of it as a BTC price multiple plus a premium for their bold strategy. They aren&apos;t generating cash flow like Coinbase; they&apos;re banking on Bitcoin being digital gold with exponential upside.</p>
              </div>

              <div>
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">Wall Street&apos;s Valuation Lens</h4>
                <p>Traditional finance leans on frameworks like discounted cash flows (DCF) and earnings multiples. For Coinbase, that works fine. But MicroStrategy is trickier. A DCF doesn&apos;t capture the wild potential of Bitcoin&apos;s price trajectory. The $105 billion valuation suggests the market is already baking in some future Bitcoin appreciation—but perhaps not enough.</p>
              </div>

              <div>
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">Onchain Power Laws</h4>
                <p>This is where the idea of &quot;onchain power laws&quot; (e.g., Metcalfe&apos;s Law) gets juicy. Applied to Bitcoin, this means its value could compound exponentially as adoption scales—way beyond what linear models predict. MicroStrategy is positioned to ride that wave. If Bitcoin hits $200,000, their holdings could dwarf Coinbase&apos;s market cap, making today&apos;s $105 billion look like a steal.</p>
              </div>

              <div>
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">The Counterpoints</h4>
                <ul className="list-disc pl-6 space-y-2 text-yellow-500/90">
                  <li><span className="text-gray-300"><strong>Risk:</strong> MicroStrategy&apos;s all-in bet is a double-edged sword. If Bitcoin tanks, their valuation craters. Coinbase&apos;s diversified revenue offers a smoother ride.</span></li>
                  <li><span className="text-gray-300"><strong>Market Efficiency:</strong> Wall Street isn&apos;t totally clueless. MicroStrategy&apos;s premium shows the market is pricing in some power-law potential.</span></li>
                  <li><span className="text-gray-300"><strong>Time Lag:</strong> Markets don&apos;t always price in paradigm shifts instantly. Wall Street might &quot;get it&quot; eventually, but it&apos;s a slow beast.</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl text-white mb-3 pt-6 border-t border-yellow-500/20 mt-8 font-epilogue font-bold">The Verdict</h4>
                <p>This comparison highlights a clash between old-school valuation and crypto-native logic. Coinbase is a safer, steady grower. MicroStrategy is a moonshot. If Bitcoin&apos;s power-law trajectory plays out, their hoard could make $105 billion look laughably low in hindsight. It&apos;s a question of timing and whether the power law kicks in before the risks do.</p>
              </div>

              <div className="mt-8 border-t border-yellow-500/20 pt-6">
                <h4 className="text-2xl text-white mb-3 font-epilogue font-bold">The ROI Data: A Quantitative Look</h4>
                <p>Coinbase, valued at $95 billion with ~6,885 BTC, and MicroStrategy, valued at $105 billion with ~576,230 BTC, highlight a disconnect in Wall Street&apos;s valuation models. Comparing the ROI of Coinbase&apos;s stock from its April 14, 2021, direct listing to Bitcoin&apos;s performance over the same period underscores this.</p>
                <p><strong>Coinbase ROI:</strong> Investors who bought Coinbase (COIN) at its first-day closing price of $328.28 and held until June 27, 2025, at $355, achieved a total ROI of 8.14% (1.88% annualized). This reflects Coinbase&apos;s valuation as a traditional business, driven by transaction fees and user growth, not direct Bitcoin price exposure.</p>
                <p><strong>Bitcoin ROI:</strong> Over the same period, Bitcoin&apos;s price rose from $64,921 to $106,745.99, yielding a total ROI of 64.43% (12.48% annualized)—~8x higher than Coinbase&apos;s return. This performance, fueled by events like the 2024 halving and ETF approvals, aligns with &quot;onchain power laws&quot; (e.g., Metcalfe&apos;s Law), where network adoption drives exponential value growth.</p>
                <p><strong>Implications:</strong> Bitcoin&apos;s superior ROI suggests that MicroStrategy&apos;s BTC-heavy strategy likely captured more upside than Coinbase&apos;s, despite their similar market caps. Wall Street&apos;s &quot;legacy frameworks&quot; undervalue Bitcoin&apos;s potential, as seen in Coinbase&apos;s modest returns and MicroStrategy&apos;s valuation not fully reflecting its vastly larger BTC holdings.</p>
              </div>

             <div className="mt-8 border-t-4 border-yellow-500 pt-6">
                <h4 className="text-3xl font-boska text-yellow-500 mb-4">Final Takeaway</h4>
                <p className="text-xl text-white/90">
                Bitcoin&apos;s <strong>64.43%</strong> return dwarfs Coinbase&apos;s <strong>8.14%</strong>, validating the argument that Wall Street&apos;s frameworks haven&apos;t caught up to the power-law-driven reality of onchain assets.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Companies on the Horizon</h2>
            <div className="space-y-12">
              {ipoData.map((ipo) => (
                <div key={ipo.name} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">{ipo.name}</h3>
                  <p className="text-yellow-500/80 text-sm uppercase tracking-widest mb-6">{ipo.industry}</p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-6">
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-bold text-white mb-2">Key Metrics</h4>
                        <table className="w-full text-left">
                            <tbody>
                                <tr className="border-b border-yellow-500/10"><td className="py-2 pr-4 font-semibold">Timeline</td><td className="py-2 text-gray-300">{ipo.timeline}</td></tr>
                                <tr><td className="py-2 pr-4 font-semibold">Valuation</td><td className="py-2 text-gray-300">{ipo.valuation}</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-bold text-white mb-2">Details</h4>
                      <p className="text-gray-300">{ipo.details}</p>
                    </div>
                  </div>

                  <div>
                      <h4 className="text-lg font-bold text-white mb-2">Why It Fits the &quot;Alt Market&quot;</h4>
                      <p className="text-gray-300 italic">{ipo.altMarketTake}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Broader Context and Risks
            </h3>
            <div className="space-y-6 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-yellow-500">
              <div>
                <h4>Market Sentiment</h4>
                <p>The crypto IPO wave is fueled by Bitcoin surpassing $100,000 and Ethereum&apos;s recovery, with Circle&apos;s 168% IPO pop setting a high bar. Posts on X highlight &quot;crypto stocks back in vogue&quot; (@SoSoValue) and a &quot;crypto public debut plunge&quot; (@bankless), reflecting retail and institutional excitement.</p>
              </div>
              <div>
                <h4>Regulatory Tailwinds</h4>
                <p>The Trump administration&apos;s crypto-friendly appointees (e.g., Paul Atkins as SEC Chairman) and dropped lawsuits against Coinbase and Ripple have boosted confidence. However, unresolved SEC rules could still delay IPOs.</p>
              </div>
              <div>
                <h4>Risks</h4>
                <p>Crypto IPOs face volatility (e.g., CoreWeave&apos;s 27% price cut due to AI spending concerns), regulatory uncertainty, and competition. Investors should watch for S-1 filings on SEC.gov and monitor crypto market trends, as a 30–60% pullback is projected post-Q1 2025.</p>
              </div>
              <div>
                <h4>Investment Approach</h4>
                <p>Like altcoins, crypto IPOs offer high upside but require caution. Platforms like Forge Global allow accredited investors to buy pre-IPO shares (minimums $1,000–$50,000), while retail investors can trade post-IPO via brokers like TradeStation. Waiting for post-IPO stabilization (e.g., 90–180 days post-lockup) can reduce risk of overpaying.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Final Thoughts
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
              The crypto IPO pipeline for 2025–2026, including Circle, Bullish, Gemini, Bitkub, Chainalysis, Consensys, Fireblocks, and Uphold, reflects the sector&apos;s maturation and mainstream appeal, akin to the speculative rush of altcoins. These companies span exchanges, stablecoins, analytics, and infrastructure, offering diverse exposure to blockchain&apos;s growth. However, regulatory shifts, market volatility, and valuation risks mirror the high-stakes nature of the &quot;alt market.&quot; Investors should track filings, diversify, and consider waiting for post-IPO dips to mitigate overhype, much like timing an altcoin trade.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IpoPage;