"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SolEth from '@/components/SolEth';

const platformComparison = [
  { feature: 'Primary Asset', sol: 'SOL' },
  { feature: 'Consensus', sol: 'Proof of History + Proof of Stake' },
  { feature: 'Smart Contract Language', sol: 'Rust, C, C++' },
  { feature: 'Execution Model', sol: 'Parallel, single-threaded' },
  { feature: 'Transaction Fees', sol: 'Ultra-low, sub-penny' },
  { feature: 'Ecosystem Maturity', sol: 'Highly developed' },
  { feature: 'NFT/DeFi Support', sol: 'Extensive, market-leading' },
  { feature: 'Traditional Finance', sol: 'Strong integration (Superstate)' },
];

const strengths = [
  {
    title: 'Institutional Adoption',
    highlight: 'ETF momentum building.',
    description: `With a 90% probability of ETF approval in 2025 and major institutions like Fidelity filing applications, Solana is becoming increasingly attractive to institutional investors.`,
    note: `Builder's Note: The ETF narrative is real—institutions are paying attention.`
  },
  {
    title: 'Traditional Finance Bridge',
    highlight: 'Superstate&apos;s Opening Bell platform.',
    description: `The launch of "Opening Bell" enables SEC-registered public equities trading on Solana, bridging traditional finance with blockchain technology.`,
    note: `Builder's Note: This is a game-changer for traditional finance integration.`
  },
  {
    title: 'Network Resilience',
    highlight: 'Proven under extreme conditions.',
    description: `Handling $10B+ in 24-hour trading volume during the memecoin frenzy demonstrated Solana's ability to maintain functionality under extreme network stress.`,
    note: `Builder's Note: The network held up impressively during peak activity.`
  },
  {
    title: 'Ecosystem Growth',
    highlight: 'Mature and expanding rapidly.',
    description: `Solana's ecosystem continues to grow with strong DeFi, NFT, and gaming projects, supported by low fees and high throughput.`,
    note: `Builder's Note: The developer community is thriving and building.`
  }
];

const flaws = [
  {
    title: 'Network Congestion',
    pain: `Despite improvements, network congestion can still occur during extreme activity spikes, affecting user experience.`,
    solution: `Continued infrastructure upgrades and optimization to handle increasing demand.`
  },
  {
    title: 'Regulatory Uncertainty',
    pain: `While ETF prospects are promising, regulatory clarity remains a key consideration for institutional adoption.`,
    solution: `Active engagement with regulators and compliance-focused development.`
  },
  {
    title: 'Competition in DeFi',
    pain: `Other chains are catching up with their own scaling solutions and ecosystem development.`,
    solution: `Focus on unique advantages like low fees and established ecosystem.`
  },
  {
    title: 'Technical Complexity',
    pain: `The technical sophistication of Solana can be challenging for new developers.`,
    solution: `Enhanced documentation and developer tooling to lower the entry barrier.`
  }
];

const pillars = [
  {
    title: "Institutional Investors",
    description: "With ETF prospects and traditional finance integration, Solana is becoming increasingly attractive to institutional players."
  },
  {
    title: "DeFi & NFT Builders",
    description: "Low fees and high throughput make Solana ideal for DeFi and NFT projects requiring scale and efficiency."
  },
  {
    title: "Traditional Finance",
    description: "Superstate's Opening Bell platform positions Solana as a bridge between traditional and decentralized finance."
  }
];

export default function SolanaHonestTake() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder&apos;s Honest Take</Badge>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          The Institutional Frontier
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            The bridge between traditional finance and blockchain, with ETF prospects and institutional adoption reaching new heights.
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            Solana has evolved beyond its technical roots to become a serious contender in institutional finance. The combination of ETF momentum, traditional finance integration, and proven network resilience makes it a compelling platform for builders and investors alike.
          </p>
        </motion.div>
      </motion.section>

      {/* SOL/ETH Chart */}
      <SolEth />

      {/* ETH vs SOL Comparison */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Ethereum vs Solana
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#18191c]/80 rounded-2xl p-8 border border-yellow-500/20"
          >
            <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">The Ethereum Odyssey</h3>
            <p className="text-white/80">
              Ethereum&apos;s rollup-centric roadmap aims for synchronous composability and lightning-fast confirmations through innovations like shared sequencing, preconfirmations, and real-time SNARKs. While ambitious, this vision faces challenges in resolving fundamental trade-offs, with a timeline extending potentially to 2028.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#18191c]/80 rounded-2xl p-8 border border-yellow-500/20"
          >
            <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">The Solana Sprint</h3>
            <p className="text-white/80">
              Solana prioritizes speed and performance through centralized block production and ordering, aiming for a globally distributed network with multiple concurrent block producers. While offering impressive speed, this approach faces scrutiny regarding its preconfirmation process and economic security model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#18191c]/80 rounded-2xl p-8 border border-yellow-500/20"
          >
            <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">Philosophical Divergence</h3>
            <p className="text-white/80">
              Ethereum represents a vision with a business—prioritizing long-term security and scalability. Solana is a business with a vision—focusing on immediate performance and efficiency. Each platform serves different needs: Ethereum for trustless access and high security, Solana for high-performance execution and builder ecosystem.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Metrics & Insights Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Network Metrics & Economic Model
        </motion.h2>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: 'Current Supply',
              value: '551M',
              description: 'SOL in circulation'
            },
            {
              label: 'Inflation Rate',
              value: '6.017%',
              description: 'Tapering 15% annually'
            },
            {
              label: 'Staking Rate',
              value: '88.9%',
              description: 'Of total supply staked'
            },
            {
              label: '60-Day Volume',
              value: '1.4B',
              description: 'Transactions processed'
            }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#18191c]/80 rounded-xl p-6 border border-yellow-500/20"
            >
              <div className="text-yellow-500/60 text-sm mb-2">{metric.label}</div>
              <div className="font-epilogue text-3xl text-yellow-400 mb-2">{metric.value}</div>
              <div className="text-white/60 text-sm">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Economic Model Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#18191c]/80 rounded-2xl p-8 border border-yellow-500/20"
          >
            <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">Supply & Inflation</h3>
            <div className="space-y-4">
              <p className="text-white/80">
                Projected to reach 720M SOL by 2030, with inflation stabilizing at 1.45% annually. Current burn rate of 0.067% per year against 6% inflation creates an interesting dynamic for long-term holders.
              </p>
              <div className="bg-yellow-500/10 rounded-lg p-4">
                <p className="text-yellow-400/80 text-sm">
                  &quot;60-day fee collection: 122,975 SOL (50% burned)&quot;
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#18191c]/80 rounded-2xl p-8 border border-yellow-500/20"
          >
            <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">Staking Dynamics</h3>
            <div className="space-y-4">
              <p className="text-white/80">
                With 88.9% of SOL staked, non-stakers face a 5.62% annual loss in network share, while stakers gain equivalently. This high staking rate ensures robust network security and validates the emission schedule.
              </p>
              <div className="bg-yellow-500/10 rounded-lg p-4">
                <p className="text-yellow-400/80 text-sm">
                  &quot;Contrasts with ETH&apos;s 22.96% stake rate&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sustainability Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent rounded-2xl p-8 border border-yellow-500/20"
        >
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-4">Towards Sustainability</h3>
          <p className="text-white/80">
            The path to becoming a deflationary asset requires increased network adoption, higher transaction volume, and strategic fee adjustments. The potential for dynamic and localized fee structures could enhance the economic model, making it more attractive for developers and users alike.
          </p>
        </motion.div>
      </motion.section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes Solana Special */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          What Makes Solana Different?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col gap-4 bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20"
            >
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Platform Comparison */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-md mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Solana at a Glance
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg font-satoshi text-white/80 mb-8 text-center"
        >
          Solana&apos;s features have matured significantly, making it a robust platform for both traditional and decentralized finance applications.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20"
        >
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Solana</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors"
                >
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.sol}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Who is Solana For Now? */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Who Is Solana For Now?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto"
        >
          Solana&apos;s next chapter is about:
        </motion.p>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-[#18191c]/80 rounded-2xl p-8 shadow-xl border border-yellow-500/20 flex flex-col gap-3"
            >
              <div className="font-epilogue text-2xl text-yellow-400 font-bold">{pillar.title}</div>
              <div className="font-satoshi text-white/90 text-lg">{pillar.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Honest Flaws & Solutions */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          What&apos;s Broken &amp; How We Fix It
        </motion.h2>
        <div className="space-y-20">
          {flaws.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-[#18191c]/80 rounded-2xl p-10 border-l-4 border-yellow-500/80 mb-2 shadow-xl"
            >
              <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">{item.title}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
              <div className="font-satoshi text-white/80 text-lg mb-4">{item.pain}</div>
              <div className="font-epilogue text-lg text-yellow-400 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
              <div className="font-satoshi text-white/90 text-lg">{item.solution}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Ecosystem Watchlist */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Ecosystem Watchlist
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg font-satoshi text-white/80 mb-12 text-center max-w-3xl mx-auto"
        >
          The Solana ecosystem is thriving with innovative projects across multiple sectors. Here are the ones worth watching.
        </motion.p>

        {/* DeFi Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 border-l-4 border-yellow-500/60 pl-4">DeFi</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Jupiter Exchange',
                symbol: '$JUP',
                description: 'Leading aggregator for Solana, offering the best prices for token swaps.',
                growth: 'Primary DEX aggregator on Solana, poised for ecosystem growth.'
              },
              {
                name: 'Jito',
                symbol: '$JITO',
                description: 'Optimizes Solana\'s validator performance through advanced MEV strategies.',
                growth: 'Enhancing validator rewards and network efficiency.'
              },
              {
                name: 'Raydium Protocol',
                symbol: '$RAY',
                description: 'Automated market maker and liquidity provider for Serum DEX.',
                growth: 'Cornerstone of Solana\'s DeFi landscape with first-mover advantage.'
              },
              {
                name: 'Orca',
                symbol: '$ORCA',
                description: 'User-friendly AMM known for simplicity and efficient token swaps.',
                growth: 'Focus on user experience driving mass adoption.'
              },
              {
                name: 'Drift Protocol',
                symbol: '$DRIFT',
                description: 'Decentralized perpetual swap exchange on Solana.',
                growth: 'Well-positioned in the lucrative perpetual swaps market.'
              },
              {
                name: 'Kamino Finance',
                symbol: '$KMNO',
                description: 'Yield optimizer automating farming strategies for users.',
                growth: 'Crucial tool for DeFi investors seeking maximum returns.'
              }
            ].map((project, index) => (
              <motion.div
                key={project.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#18191c]/80 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-epilogue text-xl text-yellow-400">{project.name}</h4>
                  <span className="font-mono text-yellow-500/80">{project.symbol}</span>
                </div>
                <p className="text-white/80 mb-3">{project.description}</p>
                <div className="text-sm text-yellow-500/60 italic">{project.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 border-l-4 border-yellow-500/60 pl-4">Infrastructure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Pyth Network',
                symbol: '$PYTH',
                description: 'Next-generation oracle solution providing real-time market data.',
                growth: 'Essential for ecosystem integrity with high-fidelity data feeds.'
              },
              {
                name: 'Wormhole',
                symbol: '$W',
                description: 'Cross-chain bridge for asset and data transfer between blockchains.',
                growth: 'Critical infrastructure for blockchain interoperability.'
              },
              {
                name: 'Render Network',
                symbol: '$RENDER',
                description: 'Decentralized GPU rendering platform leveraging idle computing power.',
                growth: 'Growing demand for rendering services in AI and graphics.'
              }
            ].map((project, index) => (
              <motion.div
                key={project.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#18191c]/80 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-epilogue text-xl text-yellow-400">{project.name}</h4>
                  <span className="font-mono text-yellow-500/80">{project.symbol}</span>
                </div>
                <p className="text-white/80 mb-3">{project.description}</p>
                <div className="text-sm text-yellow-500/60 italic">{project.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emerging Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-epilogue text-2xl text-yellow-400 mb-6 border-l-4 border-yellow-500/60 pl-4">Emerging Sectors</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Tensor',
                symbol: '$TNSR',
                description: 'Marketplace and toolset for NFT trading on Solana.',
                growth: 'Comprehensive platform for the growing NFT market.'
              },
              {
                name: 'Parcl',
                symbol: '$PARCL',
                description: 'Real estate tokenization platform for fractional property ownership.',
                growth: 'Revolutionizing property investment accessibility.'
              },
              {
                name: 'Whales Market',
                symbol: '$WHALES',
                description: 'Platform for trading loyalty points and rewards.',
                growth: 'Innovative approach to the vast loyalty points market.'
              }
            ].map((project, index) => (
              <motion.div
                key={project.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#18191c]/80 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-epilogue text-xl text-yellow-400">{project.name}</h4>
                  <span className="font-mono text-yellow-500/80">{project.symbol}</span>
                </div>
                <p className="text-white/80 mb-3">{project.description}</p>
                <div className="text-sm text-yellow-500/60 italic">{project.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <div className="w-full flex justify-center mb-28">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-md mx-auto px-4 mb-40 text-center relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-epilogue text-5xl md:text-8xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]"
        >
          Where Do We Go From Here?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4"
        >
          &quot;The future of finance is being built on Solana, bridging traditional and decentralized worlds.&quot;
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Solana&apos;s journey is accelerating with institutional adoption and traditional finance integration. The platform is maturing, and the opportunities for builders and investors are expanding.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="https://docs.solana.com/" target="_blank">
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
              Solana Docs <ArrowRight className="ml-4 w-7 h-7" />
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
