"use client";

export default function FarmingSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Farming Opportunities
      </h3>
      <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
        With 38.9% of $HYPE tokens locked for community rewards and future emissions, discover the best ways to maximize your yield in the Hyperliquid ecosystem.
      </p>

      {/* Entry Points */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Getting Started</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Direct Entry</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Hyperliquid Perp Site - Bridge $USDC (ARB)</li>
              <li>• HyperUnit - Bridge BTC, ETH, SOL</li>
              <li>• Hybridge - Multi-chain bridge with HyPoints</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Staking Options</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Native Staking ($stHYPE)</li>
              <li>• Looped Hype ($LHYPE) - Phase 2 live</li>
              <li>• Magpie Hype ($mHYPE) - Position for $HPP</li>
              <li>• Kinetiq Hype ($kHYPE) - Coming soon</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Yield Strategies */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Advanced Strategies</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Yield Aggregators</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Hyperbeat - Multi-asset vaults (5x Upshift Points)</li>
              <li>• MizuLabs - ETH chain deposits</li>
              <li>• Hyperyield - 36.83% APY on USDXL</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Lending & CDPs</h5>
            <ul className="space-y-2 text-white/80">
              <li>• HypurrFi - Supply/borrow + USDXL minting</li>
              <li>• HyperLend - USDe lending</li>
              <li>• Felix - HYPE → feUSD minting</li>
              <li>• Keiko - Asset-backed KEI stablecoin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* LP Opportunities */}
      <div className="mb-8">
        <h4 className="text-xl font-bold text-yellow-500 mb-4">Liquidity Pools</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Kittenswap Pools</h5>
            <ul className="space-y-2 text-white/80">
              <li>• feUSD/USDT0 - 37.5% APY</li>
              <li>• feUSD/USDe - 11.12% APY</li>
              <li>• KEI/USDT0 - 19.03% APY + Keiko points</li>
              <li>• USDT0/USDXL - 46.88% APY + Hypurr points</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <h5 className="text-yellow-400 font-epilogue mb-3">Optimization Strategies</h5>
            <ul className="space-y-2 text-white/80">
              <li>• Loop mHYPE on HypurrFi (2x multiplier)</li>
              <li>• HYPE/mHYPE or HYPE/LHYPE pools (10-15x points)</li>
              <li>• Hyperbeat passive deposits (5x Upshift points)</li>
              <li>• Keiko stability pool rewards</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
        <h5 className="text-yellow-400 font-epilogue mb-3">Important Considerations</h5>
        <ul className="space-y-2 text-white/80">
          <li>• Hyperbeat deposits are locked for 1 hour before withdrawal</li>
          <li>• 5x Upshift Points available until $750M TVL (currently $335M)</li>
          <li>• Some pools are cap-sensitive - early entry recommended</li>
          <li>• Consider combining multiple strategies for optimal returns</li>
        </ul>
      </div>
    </div>
  );
} 