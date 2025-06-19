export function MarketSentiment() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Market Sentiment & Dynamics</h3>
      <div className="space-y-8 text-gray-300">
        {/* Sentiment Analysis */}
        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Sentiment Analysis</h4>
          <div className="bg-black/30 p-6 rounded">
            <p className="text-lg leading-relaxed">
              The current market sentiment reflects growing skepticism about a broad altcoin season like those in 2017 and 2021. While previous cycles saw Bitcoin strength leading to altcoin rallies as crypto-native buyers rotated profits, this cycle differs due to institutional Bitcoin accumulation potentially limiting capital flow to altcoins. The 2021-style altcoin season may not repeat due to unique market conditions and increased altcoin dilution from new launches. However, select altcoins could still shine significantly, with their performance driven by individual merits rather than Bitcoin&apos;s influence. Historical trends show altcoins typically rally during bull cycles, but the current market is still testing this pattern with Bitcoin dominance holding strong.
            </p>

            <div className="mt-8">
              <h5 className="text-xl font-bold text-yellow-500 mb-4">The $1M Bitcoin Thesis: Supply Mechanics & Macro Reality</h5>

              <div className="space-y-6">
                <div>
                  <h6 className="text-lg font-bold text-yellow-500/90 mb-2">Supply Reality Check</h6>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>19.87M BTC exist in total</li>
                    <li>3-4M BTC lost forever (death, accidents, lost keys)</li>
                    <li>~16M BTC theoretically available</li>
                    <li>70%+ hasn&apos;t moved in over a year</li>
                    <li>ETFs, corporates, sovereigns accumulating aggressively</li>
                    <li>Real float: Potentially as low as 2M BTC</li>
                  </ul>
                </div>

                <div>
                  <h6 className="text-lg font-bold text-yellow-500/90 mb-2">Global Macro Powder Keg</h6>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>US printing $1T every 100 days</li>
                    <li>BOJ trading bonds like poker chips</li>
                    <li>China&apos;s property market crisis</li>
                    <li>Europe&apos;s political instability</li>
                    <li>$500T global capital seeking safe haven</li>
                  </ul>
                </div>

                <div>
                  <h6 className="text-lg font-bold text-yellow-500/90 mb-2">The Math of Panic</h6>
                  <p className="mb-4">
                    You don&apos;t need mass adoption. You need 2-3% of global capital to panic. That&apos;s enough to send $10T trying to squeeze into 1-2M available coins. That&apos;s $5M per coin math. Conservatively.
                  </p>
                  <p>
                    Even with sloppy execution, even if half the capital gets distracted by other assets - you still overshoot $1M BTC on basic supply mechanics alone.
                  </p>
                </div>

                <div>
                  <h6 className="text-lg font-bold text-yellow-500/90 mb-2">The Final Collateral Layer</h6>
                  <p>
                    Bitcoin is becoming the monetary triage - the blood transfusion for a dying fiat system clogged with IOUs, zombie debt, and fraudulent accounting. When the bid hits, there will be no ask. Because the people who own it - aren&apos;t selling it. They&apos;ll be the only ones with actual capital left.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Dynamics */}
        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Dynamics & Bitcoin Dominance</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Bitcoin Dominance Trends</h5>
              <ul className="space-y-2">
                <li>Peaked at 65.38% in May 2025</li>
                <li>Recent decline to 63.89%</li>
                <li>Spot Bitcoin ETFs: $122B in holdings</li>
                <li>Watch for sustained drop below 60%</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Altcoin Season Index</h5>
              <ul className="space-y-2">
                <li>Current: 45 (Bitcoin-dominated)</li>
                <li>December 2024 peak: 87</li>
                <li>Neutral zone: ~55</li>
                <li>Altcoin season signal: &gt;75</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Cycle Differs */}
        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Why This Cycle Might Differ</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Institutional Influence</h5>
              <ul className="space-y-2">
                <li>Spot Bitcoin ETFs</li>
                <li>Potential U.S. policy shifts</li>
                <li>Concentrated capital in BTC</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Dilution</h5>
              <ul className="space-y-2">
                <li>New altcoin projects</li>
                <li>Capital spread thin</li>
                <li>Focus on quality</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Macro Factors</h5>
              <ul className="space-y-2">
                <li>M2 money supply growth</li>
                <li>High interest rates (4.19%)</li>
                <li>Bitcoin stability premium</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Indicators */}
        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Indicators to Watch</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Metrics</h5>
              <ul className="space-y-2">
                <li>Bitcoin Dominance &lt; 60%</li>
                <li>ETH/BTC Ratio rise</li>
                <li>Altcoin Season Index &gt; 75</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Sector Narratives</h5>
              <ul className="space-y-2">
                <li>AI integration</li>
                <li>DeFi innovation</li>
                <li>Real-world asset tokenization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 