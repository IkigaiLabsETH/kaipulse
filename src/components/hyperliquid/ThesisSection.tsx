"use client";

export default function ThesisSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Core Investment Thesis
      </h3>
      
      {/* Risk/Reward Overview */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Risk / Reward Profile</h4>
        <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
          <p className="text-white/80 text-lg mb-4">
            <strong className="text-yellow-400">Hyperliquid is the fastest-growing product in crypto&apos;s most profitable vertical—perpetual futures.</strong>
          </p>
          <p className="text-white/80 text-lg">
            Incumbent CEX desks earn &gt;$10B yearly; Hyperliquid is already on a $0.8–0.9B run-rate and compounding faster.
          </p>
        </div>
      </div>

      {/* Valuation Snapshot */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Valuation Snapshot</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Current Metrics</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Price ≈ $44–45 / HYPE</li>
              <li>• $14.9B circulating cap</li>
              <li>• $45B FDV</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Supply Schedule</h5>
            <ul className="space-y-2 text-white/80">
              <li>• 30% team (1-yr cliff, linear vest 2026-28)</li>
              <li>• 40% community rewards</li>
              <li>• 30% in float</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cap Table Comfort */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Cap Table Comfort</h4>
        <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
          <ul className="space-y-3 text-white/80">
            <li>• Founders bootstrapped and still run lean, therefore no VC overhang</li>
            <li>• ~93% of protocol fee revenue is auto-routed to buy-backs, so the team has proven it doesn&apos;t need to sell into rallies</li>
            <li>• Community pool unlock cadence is deliberately slow (first airdrop took years). Expect only single-digit % of new tokens hitting the market at any time</li>
          </ul>
        </div>
      </div>

      {/* Why $15B Cap Still Has Upside */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Why $15B Cap Still Has Upside</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Market Position</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Dominant DEX perps share – ~90% of on-chain volume, but just 10% of Binance and 20% of Bybit</li>
              <li>• Deepest on-chain liquidity – handled $1B BTC positions without dislocation</li>
              <li>• Fee edge – taker fees are one order of magnitude lower than CEXes</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Growth Drivers</h5>
            <ul className="space-y-2 text-white/80">
              <li>• HIP-3 flywheel – anyone who stakes 1M HYPE can spin up new perp markets</li>
              <li>• Reg & culture tailwinds – U.S. perps access is opening</li>
              <li>• HyperEVM moat – L1 for settlement lets dApps plug directly into exchange</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buyer Profile */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Buyer Profile</h4>
        <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
          <p className="text-white/80 text-lg">
            ETH/SOL whales diversifying, VCs shut out of private rounds, and TradFi desks running P/E screens on fee yield.
          </p>
        </div>
      </div>

      {/* Concise Summary */}
      <div className="bg-yellow-500/10 p-6 rounded-none border-2 border-yellow-500/30">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Concise Summary</h4>
        <p className="text-white/90 text-lg leading-relaxed">
          Hyperliquid already controls nearly all on-chain perp flow yet captures only a low-teens share of CEX activity. At $15B float cap the token trades at ≈18× revenue, rich versus GMX but supported by a hard buy-back yield (~5%) and a supply schedule that trickles out. If volume merely triples by 2027 (still &lt;¼ of Binance), our base-case DCF pegs fair value at $82/HYPE on float, leaving headroom despite the scary $45B FDV headline. But supply emissions and fee compression remain the live risks; therefore position-size for volatility, watch HIP-3 uptake, and track buy-back wallet flow as the real tell.
        </p>
      </div>
    </div>
  );
} 