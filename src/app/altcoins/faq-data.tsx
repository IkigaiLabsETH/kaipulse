import React from 'react';

export const faqs = [
  {
    q: 'Is $110K the cycle top?',
    a: (
      <div className="space-y-6">
        <p className="text-lg">Halving-progress math suggests &quot;probably not.&quot; Let&apos;s break down why:</p>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">1. What the carrot-chart actually shows</h5>
          <p className="mb-4">The orange bands mark the first ≈28% of every post-halving epoch:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Halving-1 (2012): 28% progress ≈ Jan-2013, price ~$15—but the real peak was $1,150 eleven months later.</li>
            <li>Halving-2 (2016): 28% progress ≈ Mar-2017, price ~$1,250—cycle peak $19,800 nine months later.</li>
            <li>Halving-3 (2020): 28% progress ≈ Feb-2021, price ~$50K—final peak $69K nine months later.</li>
          </ul>
          <p className="mt-4">
            We&apos;re now just past the same 28% mark for Halving-4 (April 2024 ➜ early Jun 2025). Price printed a new ATH at $111,970 on May-22, but if history rhymes the vertical blow-off normally lands ~65-80% into the epoch—i.e., Q4 2025 ↔ Q1 2026.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">2. Historical multiples still point higher</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-yellow-500/30">
                  <th className="py-3 px-4 text-left">Cycle</th>
                  <th className="py-3 px-4 text-left">Pre-halving trough → 28% mark</th>
                  <th className="py-3 px-4 text-left">28% mark → cycle top</th>
                  <th className="py-3 px-4 text-left">Total trough → top</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-yellow-500/30">
                  <td className="py-3 px-4">2012-13</td>
                  <td className="py-3 px-4">×8</td>
                  <td className="py-3 px-4">×77</td>
                  <td className="py-3 px-4">×600</td>
                </tr>
                <tr className="border-b border-yellow-500/30">
                  <td className="py-3 px-4">2016-17</td>
                  <td className="py-3 px-4">×3</td>
                  <td className="py-3 px-4">×16</td>
                  <td className="py-3 px-4">×48</td>
                </tr>
                <tr className="border-b border-yellow-500/30">
                  <td className="py-3 px-4">2020-21</td>
                  <td className="py-3 px-4">×6</td>
                  <td className="py-3 px-4">×1.4</td>
                  <td className="py-3 px-4">×8.5</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">2024-26</td>
                  <td className="py-3 px-4">×4.3 (from ~$26K low to $112K)</td>
                  <td className="py-3 px-4">?</td>
                  <td className="py-3 px-4">?</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Even using the more modest 2020-21 template, another 1.4-2.0× from $110K projects $150-220K.</p>
          <div className="mt-4 bg-black/30 p-4 rounded">
            <p className="font-bold text-yellow-500/90 mb-2">Analyst Consensus:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Cointelegraph consensus range $180-250K</li>
              <li>TA breakout models eye $200K in 2025</li>
              <li>AI and quant desks see $135-150K as &quot;base case,&quot; not ceiling</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">3. What could invalidate a higher-high thesis?</h5>
          <ol className="list-decimal list-inside space-y-2">
            <li>Macro shock – aggressive rate hikes, credit crunch.</li>
            <li>ETF outflow reversal – if institutions exit and GBTC-type selling returns.</li>
            <li>Reg-risk event – e.g., U.S. spot-market crackdown that chills liquidity.</li>
          </ol>
          <p className="mt-4">
            A weekly close below the 200-day SMA (~$88K) would be the first technical red flag; losing the prior ATH region ($69-70K) would almost certainly mark a cycle failure.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">4. Playbook if you fear $110K was it</h5>
          <ul className="list-disc list-inside space-y-2">
            <li>Trail stops up on cash BTC or long-dated calls; no reason to round-trip massive gains.</li>
            <li>Stagger profit-taking 5-10% at each new $10K increment; redeploy on confirmed support.</li>
            <li>Hedge with short-dated covered calls above $130K—harvest theta while retaining upside.</li>
            <li>Rotation sleeve stays live: if BTC stalls near-term, sats earned on ETH/SOL/AVAX etc. continue compounding.</li>
          </ul>
        </div>

        <div className="bg-black/30 p-4 rounded">
          <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Bottom Line</h5>
          <p>
            Halving math, time-based analogs and still-bullish macro/flow signals imply $110K looks more like mid-cycle, not finale. But tops are only obvious in hindsight—so manage risk as if either outcome is possible.
          </p>
        </div>
      </div>
    ),
  },
  {
    q: 'Whats different about this crypto cycle?',
    a: (
      <span>
        This cycle shows several key differences:
        <br />
        <br />
        • Retail investors burned by meme coins
        <br />
        • Increased institutional focus on Bitcoin
        <br />
        • Stronger regulatory scrutiny
        <br />
        • More mature market dynamics
        <br />
        • Bitcoin ETF adoption
      </span>
    ),
  },
  {
    q: 'Why might altcoins still perform well?',
    a: (
      <span>
        Several factors could drive altcoin growth:
        <br />
        <br />
        • New narratives and use cases
        <br />
        • Capital rotation after Bitcoin peaks
        <br />
        • Continued blockchain innovation
        <br />
        • Institutional adoption of select altcoins
        <br />
        • Market cycle patterns
      </span>
    ),
  },
  {
    q: 'Whats the historical pattern of altcoin seasons?',
    a: (
      <span>
        Historically, Bitcoin leads the market, followed by altcoin seasons:
        <br />
        <br />
        • 2017: Bitcoin peak → Altcoin explosion
        <br />
        • 2021: Similar pattern with DeFi/NFT boom
        <br />
        • 2025-26: Potential repeat if cycle holds
        <br />
        <br />
        This pattern suggests altcoins may rally after Bitcoins peak.
      </span>
    ),
  },
  {
    q: 'How should investors approach this market?',
    a: (
      <span>
        Recommended strategy includes:
        <br />
        <br />
        • Bitcoin as core portfolio anchor
        <br />
        • Selective altcoin exposure
        <br />
        • Focus on fundamentals
        <br />
        • Diversification across sectors
        <br />
        • Risk management discipline
      </span>
    ),
  },
  {
    q: 'What can we expect in the 2026/2027 bear market?',
    a: (
      <div className="space-y-6">
        <p className="text-lg">
          While predicting exact lows is speculative, historical patterns and current market dynamics provide valuable insights for the anticipated 2026/2027 bear market.
        </p>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Historical Context & Four-Year Cycle</h5>
          <div className="bg-black/30 p-4 rounded">
            <p className="mb-4">Past bear markets have seen Bitcoin drop by 50–85% from cycle peaks:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>2017–2018: $20,000 → $3,200 (84% drop)</li>
              <li>2021–2022: $69,000 → $16,500 (76% drop)</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Price Predictions for 2026/2027</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded">
              <h6 className="font-bold text-yellow-500/90 mb-2">If 2025 Peak is $140,000–$150,000:</h6>
              <ul className="space-y-2 list-disc list-inside">
                <li>60–80% correction: $28,000–$52,500</li>
                <li>2027 bottom: $30,000–$40,000</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h6 className="font-bold text-yellow-500/90 mb-2">If 2025 Peak is $200,000–$250,000:</h6>
              <ul className="space-y-2 list-disc list-inside">
                <li>60–80% correction: $50,000–$87,500</li>
                <li>2027 bottom: $50,000–$70,000</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Key Factors Influencing the Bear Market</h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded">
              <h6 className="font-bold text-yellow-500/90 mb-2">Bullish Factors</h6>
              <ul className="space-y-2 list-disc list-inside">
                <li>Institutional ETF adoption</li>
                <li>Corporate reserves (MicroStrategy, BlackRock)</li>
                <li>Whale accumulation reducing supply</li>
                <li>Regulatory clarity</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h6 className="font-bold text-yellow-500/90 mb-2">Bearish Factors</h6>
              <ul className="space-y-2 list-disc list-inside">
                <li>Macroeconomic conditions</li>
                <li>Regulatory uncertainty</li>
                <li>Market sentiment shifts</li>
                <li>Profit-taking pressure</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-lg font-bold text-yellow-500/90 mb-3">Analyst Consensus</h5>
          <div className="bg-black/30 p-4 rounded">
            <ul className="space-y-2 list-disc list-inside">
              <li>Rekt Capital: $30,000–$50,000 range for 2027 bottom</li>
              <li>CoinGape: $115,000–$131,000 range (less severe correction)</li>
              <li>BeInCrypto: $51,466 potential low in early 2027</li>
              <li>CoinMarketCap: $30,000–$50,000 based on historical cycles</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/30 p-4 rounded">
          <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Critical Considerations</h5>
          <ul className="space-y-2 list-disc list-inside">
            <li>Predictions are speculative and not guarantees</li>
            <li>Four-year cycle may evolve with institutional adoption</li>
            <li>Monitor macroeconomic trends and whale activity</li>
            <li>Consider ETF inflows as a key indicator</li>
            <li>Always conduct your own research</li>
          </ul>
        </div>

        <div className="bg-black/30 p-4 rounded">
          <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Conclusion</h5>
          <p>
            The most likely bottom for the 2026/2027 bear market is $30,000–$50,000, with recovery starting in 2027 as the next halving approaches. However, increased institutional adoption could result in a higher low ($95,000–$115,000) if selling pressure is mitigated. Monitor key indicators and approach predictions with caution.
          </p>
        </div>
      </div>
    ),
  },
]; 