export function EthBtcAnalysis() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">ETH/BTC Opportunity Cost Analysis</h3>
      <div className="space-y-8 text-gray-300">
        <div className="bg-black/30 p-6 rounded border-l-4 border-yellow-500">
          <blockquote className="text-xl italic text-yellow-500/90">
            &ldquo;ETH would have to goto 20k just to breakeven with the market to make up for opportunity cost&rdquo;
          </blockquote>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Historical Performance Context</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">2021 Peak Metrics</h5>
              <ul className="space-y-2">
                <li>ETH: ~$5,000</li>
                <li>BTC: ~$69,000</li>
                <li>ETH/BTC Ratio: 0.072</li>
                <li>Market Cycle: Retail-driven</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Current Metrics (2025)</h5>
              <ul className="space-y-2">
                <li>ETH: ~$2,500</li>
                <li>BTC: ~$110,000</li>
                <li>ETH/BTC Ratio: 0.023</li>
                <li>Market Cycle: Institutional-driven</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Opportunity Cost Analysis</h4>
          <div className="bg-black/30 p-4 rounded">
            <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Performance Comparison</h5>
            <ul className="space-y-2">
              <li>BTC Performance: +59% (69K → 110K)</li>
              <li>ETH Performance: -50% (5K → 2.5K)</li>
              <li>Required ETH Price to Match BTC: ~$7.95K</li>
              <li>Required ETH Price to Outperform: $10-12K</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Considerations</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Market Evolution</h5>
              <ul className="space-y-2">
                <li>Institutional adoption</li>
                <li>ETF developments</li>
                <li>Regulatory clarity</li>
                <li>Market maturity</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">ETH Improvements</h5>
              <ul className="space-y-2">
                <li>The Merge completed</li>
                <li>Pectra upgrade coming</li>
                <li>Layer 2 scaling</li>
                <li>Ecosystem growth</li>
              </ul>
            </div>
            <div className="bg-black/30 p-4 rounded">
              <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Risk Factors</h5>
              <ul className="space-y-2">
                <li>Competition from L2s</li>
                <li>Regulatory uncertainty</li>
                <li>Technical complexity</li>
                <li>Market sentiment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/30 p-4 rounded">
          <h5 className="text-lg font-bold text-yellow-500/90 mb-2">Conclusion</h5>
          <p>
            While ETH would need to reach $7-8K to match BTC&apos;s performance since 2021, the $20K target represents an extreme outperformance scenario. The opportunity cost analysis should be balanced against ETH&apos;s unique value proposition, upcoming catalysts, and the evolving market structure. Investors should consider both the historical performance gap and the potential for future outperformance based on fundamental developments.
          </p>
        </div>
      </div>
    </div>
  );
} 