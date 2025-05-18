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

const flaws = [
  {
    title: 'Pseudonymous Team',
    pain: `The protocol and team are pseudonymous, which limits traditional BD and governance traction in the short term.`,
    solution: `Focus on protocol metrics and technical execution rather than traditional BD. The pseudonymous nature hasn't hindered technical progress.`
  },
  {
    title: 'Limited Roadmap Transparency',
    pain: `The lack of public roadmap can make it difficult to assess long-term direction.`,
    solution: `Focus on delivered features and technical execution. The team's track record of shipping speaks for itself.`
  },
  {
    title: 'Pre-Token Stage',
    pain: `No token yet means limited governance and potential uncertainty around token mechanics.`,
    solution: `The upcoming token launch presents an opportunity for early positioning. The points system provides a proxy for future distribution.`
  },
  {
    title: 'Competition from CEXs',
    pain: `Established CEXs have significant market share and resources.`,
    solution: `Hyperliquid's fully onchain nature and superior composability provide unique advantages that CEXs can't match.`
  }
];

const pillars = [
  {
    title: "Onchain HFT Infrastructure",
    description: "Hyperliquid is building the infrastructure for the next generation of onchain trading bots and autonomous agents."
  },
  {
    title: "Sovereign Trading Layer",
    description: "As a fully onchain system, Hyperliquid offers unprecedented control and composability for trading strategies."
  },
  {
    title: "Developer Ecosystem",
    description: "The growing API ecosystem and developer tools make Hyperliquid the go-to platform for onchain trading innovation."
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

      {/* Who is Hyperliquid For Now? */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Who Is Hyperliquid For Now?
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          Hyperliquid&apos;s next chapter is about:
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20 flex flex-col gap-3">
              <div className="font-epilogue text-2xl text-yellow-400 font-bold">{pillar.title}</div>
              <div className="font-satoshi text-white/90 text-lg">{pillar.description}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Honest Flaws & Solutions */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What&apos;s Broken &amp; How We Fix It
        </h2>
        <div className="space-y-20">
          {flaws.map((item) => (
            <div key={item.title} className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl">
              <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">{item.title}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
              <div className="font-satoshi text-white/80 text-lg mb-4">{item.pain}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
              <div className="font-satoshi text-white/90 text-lg">{item.solution}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex justify-center mb-28">
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
