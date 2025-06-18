"use client";

export default function ValuationSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
        HYPE Valuation: Context Matters
      </h3>
      <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
        If Hype is pushing ~$600M annualized revenue and trading at a ~26.5x FDV multiple, it&apos;s operating in the same valuation range as peak ETH (Nov &lsquo;21) and SOL (Jan &lsquo;25) — but the context and quality of that revenue matters a lot more now.
      </p>
      
      <div className="overflow-x-auto rounded-2xl bg-black/50 p-6 mb-8 border border-yellow-500/20">
        <table className="w-full font-epilogue text-white/90 text-lg">
          <thead>
            <tr className="border-b border-yellow-500/40">
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">Metric</th>
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">HYPE (Est.)</th>
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">SOL (Jan &lsquo;25)</th>
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">ETH (Nov &lsquo;21)</th>
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">BERA (May &lsquo;25)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
              <td className="py-3 font-epilogue font-semibold text-lg">Annualized Rev ($bn)</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~$0.60</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">$6.61</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">$21.90</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~$0.002 - $0.004</td>
            </tr>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
              <td className="py-3 font-epilogue font-semibold text-lg">FDV ($bn)</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~$15.9</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">$177.00</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">$578.71</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~$1.4 - $1.6</td>
            </tr>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
              <td className="py-3 font-epilogue font-semibold text-lg">FDV/Revenue Multiple</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~26.5x</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">26.77x</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">26.42x</td>
              <td className="py-3 font-satoshi text-white/80 text-lg">~350x ⚠️</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-left">
        <h4 className="font-epilogue text-2xl text-yellow-400 mb-4 font-bold">Interpretation</h4>
        <p className="text-white/80 text-lg mb-4">
          Berachain, a blockchain network that launched its mainnet in February 2025, has experienced volatile metrics as of May 2025. Its daily active users (DAUs) range from 25,000 to 60,000, with transaction volume holding steady at 1.5–2 million transactions daily, reflecting sustained engagement. Average transaction fees remain low, likely under $0.001 per transaction, consistent with its cost-efficient design.
        </p>
        <p className="text-white/80 text-lg mb-4">
          However, Berachain&apos;s revenue is a concern—daily figures have dropped to under $10,000, translating to an annualized revenue of $2M–$4M. Despite a total value locked (TVL) of $1.175B–$1.2B and an FDV of $1.4B–$1.6B, its FDV/revenue multiple is an alarming ~350x, far exceeding the ~26x multiples of established networks like Solana and Ethereum at their peaks.
        </p>
        <p className="text-white/80 text-lg">
          This high multiple, driven by incentive-fueled activity and early speculation, suggests overvaluation. Berachain must significantly boost revenue (20x or more) to justify its current FDV, or it risks a valuation correction if growth falters. Meanwhile, HYPE maintains a more reasonable multiple in line with historical peaks of major L1s, suggesting a more sustainable valuation model.
        </p>
      </div>
    </div>
  );
} 