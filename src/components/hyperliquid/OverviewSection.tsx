"use client";

export default function OverviewSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
        The Onchain Trading Infrastructure
      </h3>
      <div className="space-y-4 text-gray-300">
        <p className="text-lg">
          Hyperliquid isn&apos;t just another perp DEX—it&apos;s building the infrastructure for autonomous, onchain trading. While the market&apos;s been focused on token incentives and TVL, Hyperliquid is quietly building the most performant, fully onchain trading infrastructure. This isn&apos;t just another DEX—it&apos;s the future of onchain trading.
        </p>
        <div className="mt-6">
          <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Differentiators:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Sovereign trading system with custom Layer 1 architecture</li>
            <li>Fully onchain orderbook with zero external dependencies</li>
            <li>5-10ms latency with complete decentralization</li>
            <li>Developer ecosystem for onchain HFT and autonomous trading</li>
            <li>Infrastructure-level innovation, not just another perp DEX</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 