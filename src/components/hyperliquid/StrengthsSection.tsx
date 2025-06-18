"use client";

export default function StrengthsSection() {
  const strengths = [
    {
      title: 'Sovereign Trading System',
      highlight: 'Not just a DEX, but a complete trading infrastructure.',
      description: `Hyperliquid is a vertically integrated system built from scratch for low-latency trading. Its custom Layer 1 architecture supports high TPS with full composability, making it more like an "onchain NASDAQ" than a typical DEX.`,
      note: `Builder's Note: This is infrastructure-level innovation, not just another perp DEX.`
    },
    {
      title: 'Fully Onchain Orderbook',
      highlight: 'No compromises on decentralization.',
      description: `Unlike competitors that rely on offchain sequencers or DA layers, Hyperliquid maintains a fully onchain orderbook. All matching logic and fills happen onchain, ensuring true decentralization without sacrificing performance.`,
      note: `Builder's Note: This solves the latency vs decentralization tradeoff natively.`
    },
    {
      title: 'Zero External Dependencies',
      highlight: 'Complete ownership of the stack.',
      description: `Hyperliquid owns the entire stack—execution, settlement, and verification. This independence from external dependencies allows for unprecedented control over the trading experience and infrastructure evolution.`,
      note: `Builder's Note: Full stack ownership means faster iteration and better UX.`
    },
    {
      title: "Developer Ecosystem",
      highlight: 'Building the onchain HFT stack.',
      description: `With public APIs supporting bots, analytics, and agent strategies, Hyperliquid is becoming the go-to infrastructure for DeFi quant vaults and autonomous trading agents.`,
      note: `Builder's Note: The API ecosystem is a moat that's hard to replicate.`
    }
  ];

  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        Why Hyperliquid Is Different
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {strengths.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 bg-black/50 p-6 rounded-none border border-yellow-500/20">
            <div className="font-epilogue text-xl text-yellow-400 font-bold leading-tight">
              {item.title}
            </div>
            <div className="font-epilogue text-lg text-yellow-400 italic mb-1 border-l-4 border-yellow-500/60 pl-4">
              {item.highlight}
            </div>
            <div className="font-satoshi text-white/80 text-lg leading-relaxed">
              {item.description}
            </div>
            <div className="font-satoshi text-yellow-500/80 text-base italic mt-2">{item.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 