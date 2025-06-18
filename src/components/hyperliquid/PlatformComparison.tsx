"use client";

export default function PlatformComparison() {
  const platformComparison = [
    { feature: 'Category', hype: 'Onchain Perpetuals, Infrastructure Layer' },
    { feature: 'Stage', hype: 'Pre-token, high-traction protocol' },
    { feature: 'Architecture', hype: 'Custom Layer 1 for trading' },
    { feature: 'Orderbook', hype: 'Fully onchain' },
    { feature: 'Latency', hype: '5-10ms' },
    { feature: 'Dependencies', hype: 'Zero external' },
    { feature: 'Token Status', hype: 'Pre-launch' },
  ];

  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Hyperliquid at a Glance
      </h3>
      <p className="text-lg font-satoshi text-white/80 mb-8">
        Hyperliquid&apos;s architecture and features are building something unprecedented in onchain trading. The challenge is understanding the full picture.
      </p>
      <div className="overflow-x-auto rounded-2xl bg-black/50 p-6 mb-4 border border-yellow-500/20">
        <table className="w-full font-epilogue text-white/90 text-lg">
          <thead>
            <tr className="border-b border-yellow-500/40">
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
              <th className="text-left py-3 text-yellow-500 font-bold text-xl">Hyperliquid</th>
            </tr>
          </thead>
          <tbody>
            {platformComparison.map((row, index) => (
              <tr key={index} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">{row.hype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 