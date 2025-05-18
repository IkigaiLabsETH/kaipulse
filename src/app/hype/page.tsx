"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformComparison = [
  { feature: 'Category', hype: 'Onchain Perpetuals, Infrastructure Layer' },
  { feature: 'Stage', hype: 'Pre-token, high-traction protocol' },
  { feature: 'Architecture', hype: 'Custom Layer 1 for trading' },
  { feature: 'Orderbook', hype: 'Fully onchain' },
  { feature: 'Latency', hype: '5-10ms' },
  { feature: 'Dependencies', hype: 'Zero external' },
  { feature: 'Token Status', hype: 'Pre-launch' },
];

const strengths = [
  {
    title: 'Sovereign Trading System',
    highlight: 'Not just a DEX, but a complete trading infrastructure.',
    description: `Hyperliquid is a vertically integrated system built from scratch for low-latency trading. Its custom Layer 1 architecture supports high TPS with full composability, making it more like an "onchain NASDAQ" than a typical DEX.`,
    note: `Builder&apos;s Note: This is infrastructure-level innovation, not just another perp DEX.`
  },
  {
    title: 'Fully Onchain Orderbook',
    highlight: 'No compromises on decentralization.',
    description: `Unlike competitors that rely on offchain sequencers or DA layers, Hyperliquid maintains a fully onchain orderbook. All matching logic and fills happen onchain, ensuring true decentralization without sacrificing performance.`,
    note: `Builder&apos;s Note: This solves the latency vs decentralization tradeoff natively.`
  },
  {
    title: 'Zero External Dependencies',
    highlight: 'Complete ownership of the stack.',
    description: `Hyperliquid owns the entire stack—execution, settlement, and verification. This independence from external dependencies allows for unprecedented control over the trading experience and infrastructure evolution.`,
    note: `Builder&apos;s Note: Full stack ownership means faster iteration and better UX.`
  },
  {
    title: "Developer Ecosystem",
    highlight: 'Building the onchain HFT stack.',
    description: `With public APIs supporting bots, analytics, and agent strategies, Hyperliquid is becoming the go-to infrastructure for DeFi quant vaults and autonomous trading agents.`,
    note: `Builder&apos;s Note: The API ecosystem is a moat that&apos;s hard to replicate.`
  }
];

export default function HyperliquidHonestTake() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      <section className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10">
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder&apos;s Honest Take</Badge>
        <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          The Onchain Trading Layer
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;Hyperliquid isn&apos;t just another perp DEX—it&apos;s building the infrastructure for autonomous, onchain trading.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            While the market&apos;s been focused on token incentives and TVL, Hyperliquid is quietly building the most performant, fully onchain trading infrastructure. This isn&apos;t just another DEX—it&apos;s the future of onchain trading.
          </p>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes Hyperliquid Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Why Hyperliquid Is Different
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {strengths.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20">
              <div className="font-epilogue text-2xl md:text-3xl text-yellow-400 font-bold leading-tight drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">
                {item.title}
              </div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-1 border-l-4 border-yellow-500/60 pl-4">
                {item.highlight}
              </div>
              <div className="font-satoshi text-white/90 text-lg md:text-xl leading-relaxed">
                {item.description}
              </div>
              <div className="font-satoshi text-yellow-500/80 text-base italic mt-2">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Platform Comparison */}
      <section className="max-w-screen-md mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Hyperliquid at a Glance
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
          Hyperliquid&apos;s architecture and features are building something unprecedented in onchain trading. The challenge is understanding the full picture.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Hyperliquid</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row) => (
                <tr key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.hype}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Ecosystem Overview */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          The Hyperliquid Ecosystem
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          A comprehensive financial ecosystem built on Hyperliquid high-performance infrastructure
        </p>

        {/* DeFi Protocols */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">DeFi Protocols</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Lending & Borrowing</h4>
              <ul className="space-y-3 text-white/80">
                <li>• HyperLend - Native lending platform with multiple pool types</li>
                <li>• PrimeFi - Omnichain money-market protocol</li>
                <li>• Keiko Finance - Permissionless CDP protocol</li>
                <li>• Sentiment - Portfolio-based borrowing</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">DEX & Trading</h4>
              <ul className="space-y-3 text-white/80">
                <li>• KittenSwap - ve(3,3) model DEX</li>
                <li>• Sunder Finance - Meta-DEX with vote-escrow</li>
                <li>• Valantis - Modular DEX with custom pools</li>
                <li>• Laminar - Liquidity aggregator</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Stablecoins</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Felix - Over-collateralized feUSD</li>
                <li>• Resolv (USR) - Delta-neutral yield stablecoin</li>
                <li>• Lambda - BTC-collateralized btcUSD</li>
                <li>• USDT0 - Omnichain USDT integration</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Yield & Staking</h4>
              <ul className="space-y-3 text-white/80">
                <li>• StakedHYPE - Official liquid staking</li>
                <li>• Kinetiq - Advanced validator selection</li>
                <li>• LoopedHYPE - Automated yield optimization</li>
                <li>• HyperYield - Next-gen yield aggregator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Infrastructure & Tools */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Infrastructure & Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Bridges & Interoperability</h4>
              <ul className="space-y-3 text-white/80">
                <li>• HyBridge - Native cross-chain bridge aggregator</li>
                <li>• Wormhole - Cross-chain messaging</li>
                <li>• LayerZero - Omnichain interoperability</li>
                <li>• Nitro Router - Cross-VM bridge</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Oracles & Data</h4>
              <ul className="space-y-3 text-white/80">
                <li>• RedStone - High-frequency price feeds</li>
                <li>• Pyth Network - Institutional-grade data</li>
                <li>• Stork Oracle - Flexible data feeds</li>
                <li>• HypeRPC - Premier node service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trading & Analytics */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Trading & Analytics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Trading Tools</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Silhouette - Private trading platform</li>
                <li>• Insilico Terminal - Professional EMS</li>
                <li>• Katoshi - Automated trading layer</li>
                <li>• Tealstreet - Modern trading software</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Analytics & Monitoring</h4>
              <ul className="space-y-3 text-white/80">
                <li>• HyperTerminal - All-in-one analytics</li>
                <li>• HyperStats - Network statistics</li>
                <li>• Hypervisor - Custom dashboards</li>
                <li>• Nansen Integration - On-chain analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Wallets & Identity */}
        <div>
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Wallets & Identity</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Wallets & Payments</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Leap Wallet - Multi-chain integration</li>
                <li>• Tholos - Multi-sig platform</li>
                <li>• Cypher - Crypto payments</li>
                <li>• BasedApp - Visa card integration</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Mobile & Identity</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Mercury - Mobile trading app</li>
                <li>• Lootbase - Mobile DeFi app</li>
                <li>• Liquid Start - Project incubation</li>
                <li>• .hl Domains - Native identity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Farming Opportunities */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Farming Opportunities
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          With 38.9% of $HYPE tokens locked for community rewards and future emissions, discover the best ways to maximize your yield in the Hyperliquid ecosystem.
        </p>

        {/* Entry Points */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Getting Started</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Direct Entry</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Hyperliquid Perp Site - Bridge $USDC (ARB)</li>
                <li>• HyperUnit - Bridge BTC, ETH, SOL</li>
                <li>• Hybridge - Multi-chain bridge with HyPoints</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Staking Options</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Native Staking ($stHYPE)</li>
                <li>• Looped Hype ($LHYPE) - Phase 2 live</li>
                <li>• Magpie Hype ($mHYPE) - Position for $HPP</li>
                <li>• Kinetiq Hype ($kHYPE) - Coming soon</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Yield Strategies */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Advanced Strategies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Yield Aggregators</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Hyperbeat - Multi-asset vaults (5x Upshift Points)</li>
                <li>• MizuLabs - ETH chain deposits</li>
                <li>• Hyperyield - 36.83% APY on USDXL</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Lending & CDPs</h4>
              <ul className="space-y-3 text-white/80">
                <li>• HypurrFi - Supply/borrow + USDXL minting</li>
                <li>• HyperLend - USDe lending</li>
                <li>• Felix - HYPE → feUSD minting</li>
                <li>• Keiko - Asset-backed KEI stablecoin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LP Opportunities */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Liquidity Pools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Kittenswap Pools</h4>
              <ul className="space-y-3 text-white/80">
                <li>• feUSD/USDT0 - 37.5% APY</li>
                <li>• feUSD/USDe - 11.12% APY</li>
                <li>• KEI/USDT0 - 19.03% APY + Keiko points</li>
                <li>• USDT0/USDXL - 46.88% APY + Hypurr points</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Optimization Strategies</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Loop mHYPE on HypurrFi (2x multiplier)</li>
                <li>• HYPE/mHYPE or HYPE/LHYPE pools (10-15x points)</li>
                <li>• Hyperbeat passive deposits (5x Upshift points)</li>
                <li>• Keiko stability pool rewards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20">
          <h4 className="font-epilogue text-xl text-yellow-400 mb-4">Important Considerations</h4>
          <ul className="space-y-3 text-white/80">
            <li>• Hyperbeat deposits are locked for 1 hour before withdrawal</li>
            <li>• 5x Upshift Points available until $750M TVL (currently $335M)</li>
            <li>• Some pools are cap-sensitive - early entry recommended</li>
            <li>• Consider combining multiple strategies for optimal returns</li>
          </ul>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Deep Dive: Understanding Hyperliquid */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Beyond the Surface: Understanding Hyperliquid
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          Hyperliquid represents a fundamental shift in onchain trading infrastructure. Here&apos;s why it&apos;s different.
        </p>

        {/* TVL Composition */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">TVL Composition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Asset Distribution</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Billions in stablecoins</li>
                <li>• Billions in HYPE on EVM</li>
                <li>• Billions in staked HYPE</li>
                <li>• Growing BTC/ETH/SOL positions</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Revenue Distribution</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Millions in daily fees</li>
                <li>• 97/3 split for HLP depositors</li>
                <li>• 100% revenue to token sinks</li>
                <li>• No traditional buybacks needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Superiority */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Technical Edge</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Precompiles & Architecture</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Custom Layer 1 for trading</li>
                <li>• Native precompiles for performance</li>
                <li>• No external dependencies</li>
                <li>• True onchain orderbook</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Beyond Alt L1s</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Not just another EVM chain</li>
                <li>• Purpose-built for trading</li>
                <li>• CEX-level performance</li>
                <li>• Full decentralization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Token Economics */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Token Economics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Token Sinks</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Native staking ($stHYPE)</li>
                <li>• Looped staking ($LHYPE)</li>
                <li>• Magpie staking ($mHYPE)</li>
                <li>• Protocol-owned liquidity</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Revenue Model</h4>
              <ul className="space-y-3 text-white/80">
                <li>• 100% revenue to token sinks</li>
                <li>• No token sales or buybacks</li>
                <li>• HLP depositor rewards</li>
                <li>• Protocol-owned liquidity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Market Position */}
        <div className="mb-16">
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 font-bold">Market Position</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Institutional Interest</h4>
              <ul className="space-y-3 text-white/80">
                <li>• Growing fund pressure</li>
                <li>• Liquid fund demand</li>
                <li>• Fund of funds interest</li>
                <li>• Prop trading adoption</li>
              </ul>
            </div>
            <div className="bg-[#18191c]/80 rounded-2xl p-6 shadow-xl border border-yellow-500/20">
              <h4 className="font-epilogue text-xl text-yellow-400 mb-3">Market Valuation</h4>
              <ul className="space-y-3 text-white/80">
                <li>• No direct comparables</li>
                <li>• Unique value proposition</li>
                <li>• Growing user base</li>
                <li>• Expanding ecosystem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Study */}
        <div className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20">
          <h4 className="font-epilogue text-xl text-yellow-400 mb-4">The Path Forward</h4>
          <p className="text-white/80 text-lg mb-4">
            Hyperliquid represents a fundamental shift in onchain trading infrastructure. With hundreds of thousands of users and millions in daily fees, it&apos;s building something unprecedented in the crypto space.
          </p>
          <p className="text-white/80 text-lg">
            The market has yet to fully understand Hyperliquid&apos;s value proposition. Traditional comparisons fall short, as no other protocol has attempted—let alone achieved—what Hyperliquid is building in real-time.
          </p>
        </div>
      </section>

      <div className="w-full flex justify-center mb-16">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Valuation Comparison & Analysis */}
      <section className="max-w-screen-md mx-auto px-4 mb-24 text-center relative z-10">
        <h3 className="font-epilogue text-3xl md:text-4xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          HYPE Valuation: Context Matters
        </h3>
        <p className="text-lg font-satoshi text-white/80 mb-6">
          If Hype is pushing ~$600M annualized revenue and trading at a ~26.5x FDV multiple, it&apos;s operating in the same valuation range as peak ETH (Nov &lsquo;21) and SOL (Jan &lsquo;25) — but the context and quality of that revenue matters a lot more now.
        </p>
        <div className="w-full flex justify-center mb-8">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
        </div>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-6 mb-8 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Metric</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">HYPE (Est.)</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">SOL (Jan &lsquo;25)</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">ETH (Nov &lsquo;21)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                <td className="py-3 font-epilogue font-semibold text-lg">Annualized Rev ($bn)</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">~$0.60</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">$6.61</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">$21.90</td>
              </tr>
              <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                <td className="py-3 font-epilogue font-semibold text-lg">FDV ($bn)</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">~$15.9</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">$177.00</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">$578.71</td>
              </tr>
              <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                <td className="py-3 font-epilogue font-semibold text-lg">FDV/Revenue Multiple</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">~26.5x</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">26.77x</td>
                <td className="py-3 font-satoshi text-white/80 text-lg">26.42x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-center mb-8">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
        </div>
        <h4 className="font-epilogue text-2xl text-yellow-400 mb-4 font-bold">But Here&apos;s Why It&apos;s More Impressive:</h4>
        <div className="text-left max-w-2xl mx-auto mb-8">
          <ol className="list-decimal list-inside text-white/80 text-lg space-y-3">
            <li>
              <span className="font-bold text-yellow-400">Revenue Quality</span><br />
              Likely more recurring, less speculative vs. gas fee spikes during L1 mania.<br />
              Stickier users + more sustainable use cases = better earnings durability.
            </li>
            <li>
              <span className="font-bold text-yellow-400">Float Dynamics</span><br />
              Lower float &rarr; smaller circulating supply = price impact from marginal demand is more amplified.<br />
              Compare to ETH/SOL where more supply was already unlocked at peak.
            </li>
            <li>
              <span className="font-bold text-yellow-400">Market Regime</span><br />
              ETH/SOL peaked during full-on retail/euphoria; Hype is reaching these multiples in a more selective, fundamentally-aware environment.
            </li>
            <li>
              <span className="font-bold text-yellow-400">Product-Market Fit</span><br />
              Hype feels like it&apos;s operating with a higher PMF / community coherence, which boosts conviction in long-term growth, even if revs are smaller now.
            </li>
          </ol>
        </div>
        <div className="w-full flex justify-center mb-8">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
        </div>
        <h4 className="font-epilogue text-2xl text-yellow-400 mb-4 font-bold">TL;DR</h4>
        <p className="text-lg font-satoshi text-white/80">
          Hype is in the same valuation league as SOL/ETH at peak, but arguably doing it with cleaner revenue, less hype-based demand, and more favorable token economics. That&apos;s structurally bullish.
        </p>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Final Note: On-Chain AI Trading Agents */}
      <section className="max-w-screen-md mx-auto px-4 mb-24 text-center relative z-10">
        <h3 className="font-epilogue text-3xl md:text-4xl font-bold text-yellow-400 mb-6 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Do we really need on-chain AI trading agents?
        </h3>
        <p className="text-lg font-satoshi text-white/80 mb-6">
          We already have solid vault managers on <a href="https://twitter.com/HyperliquidX" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">@HyperliquidX</a>.
        </p>
        <blockquote className="italic text-yellow-400 font-epilogue text-xl mb-6 border-l-4 border-yellow-500/60 pl-4">
          Only the good ones survive—like HYPE and BTC (long).<br />
          Short memes and high mcap alts into the void.
        </blockquote>
        <p className="text-lg font-satoshi text-white/80">
          Save your time. Let them do the heavy lifting.
        </p>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* CTA */}
      <section className="max-w-screen-md mx-auto px-4 mb-40 text-center relative z-10">
        <h2 className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          The Path Forward
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;Hyperliquid today is like buying NASDAQ at launch, or owning the trading infrastructure of the future.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          The story is just getting started. With token launch, ecosystem growth, and autonomous trading on the horizon, Hyperliquid is building the infrastructure for the next generation of onchain trading. If you&apos;re here, you&apos;re early. Let&apos;s build the future together.
        </p>
        <Link href="https://hyperliquid.xyz/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            Hyperliquid Docs <ArrowRight className="ml-4 w-7 h-7" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
