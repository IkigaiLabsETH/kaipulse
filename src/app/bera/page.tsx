"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformComparison = [
  { feature: 'Primary Asset', bera: 'BERA, HONEY, BGT' },
  { feature: 'Loan Currency', bera: 'HONEY (native)' },
  { feature: 'Collateral Requirement', bera: 'Varies by protocol' },
  { feature: 'Repayment Terms', bera: 'Protocol dependent' },
  { feature: 'Platform Maturity', bera: 'Emerging' },
];

const risks = [
  {
    title: 'Market Volatility',
    description: 'Can affect collateral ratios and trigger liquidations.'
  },
  {
    title: 'Protocol Maturity',
    description: 'Additional risks compared to established chains.'
  },
  {
    title: 'Smart Contract Risk',
    description: 'DeFi protocols carry inherent smart contract risks.'
  },
  {
    title: 'Governance Centralization',
    description: 'Still too much power in too few hands.'
  }
];

const strengths = [
  {
    title: 'Proof-of-Liquidity (PoL)',
    highlight: 'A new consensus for a new era.',
    description: `Berachain's PoL is more than a technical tweak—it's a philosophical bet. Instead of rewarding only stakers, PoL asks: what if the chain's security and its economic engine were one and the same? Validators are forced to care about real liquidity, not just their own bags. It's a bold experiment, and it's already changing the incentives for everyone who builds here.`
  },
  {
    title: 'Tri-Token System',
    highlight: 'Separation of powers, on-chain.',
    description: `BERA (gas), BGT (governance, earned via liquidity), and HONEY (stablecoin) are designed to keep the system honest. No more governance capture by whales, no more stablecoins as an afterthought. If it works, it could set a new standard for EVM chains.`
  },
  {
    title: 'Builder Culture & Community',
    highlight: 'Resilience is the real alpha.',
    description: `Berachain's community is small, but it's the kind that sticks around. The people who survived the bear are here to build, not just speculate. There's a willingness to experiment, to launch new dApps, to create culture—not just chase the latest meta. That's rare, and it's why we're still here.`
  },
  {
    title: 'EVM Compatibility',
    highlight: 'No walls, just bridges.',
    description: `Berachain is EVM-native, so the best ideas from across the ecosystem can migrate here. It's not about maximalism—it's about making it easy for new projects and users to plug in, remix, and push the space forward.`
  }
];

const flaws = [
  {
    title: 'Liquidity Incentives Are Broken',
    pain: `Early TVL was impressive, but much of it was mercenary. When incentives dried up, so did the liquidity. The native DEX and pools are underutilized, and yield is scattered across too many pairs nobody cares about.`,
    solution: `Focus emissions and incentives on a handful of major pools. Make the native DEX the heart of the ecosystem, not just another option. Reward sticky, productive liquidity—not just TVL for the sake of TVL.`
  },
  {
    title: 'Launch Timing & Liquidity Bootstrapping',
    pain: `Mainnet launch felt rushed, likely due to outside pressure. This led to a flood of "dead" liquidity and a lack of organic, grassroots momentum.`,
    solution: `Future upgrades and launches should prioritize community input and gradual, organic growth. Let builders and users lead the narrative, not just investors or hype cycles.`
  },
  {
    title: 'Governance & Decentralization',
    pain: `Despite the rhetoric, governance is still too centralized. Key decisions are made by a small group, and the community's voice is often drowned out.`,
    solution: `Move toward real onchain governance. Give more weight to long-term builders, pre-mainnet contributors, and active users—not just whales or insiders.`
  },
  {
    title: 'Favoritism & Builder Frustration',
    pain: `There's a sense that newcomers and "Build-a-Bera" projects get more attention than those who built through the bear. Pre-mainnet builders feel overlooked, while extractive projects are sometimes celebrated.`,
    solution: `Recognize and reward those who stuck around and shipped through the hard times. Build a culture that values consistency, not just the latest shiny thing.`
  },
  {
    title: 'Ecosystem Insularity',
    pain: `Berachain sometimes feels like an echo chamber. Too much energy is spent on internal drama and not enough on building bridges to other chains, communities, and capital.`,
    solution: `Actively seek out cross-chain partnerships, integrations, and new audiences. The next wave of growth will come from outside the current circle.`
  },
  {
    title: 'Fragmented Yield & User Experience',
    pain: `Yield is fragmented, bribes are confusing, and the average user has no idea where to start. The ecosystem is complex for the sake of complexity.`,
    solution: `Simplify the user journey. Build clear, composable products that make it easy for anyone to participate and earn.`
  },
];

export default function BerachainHonestTake() {
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
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder & Backer Perspective</Badge>
        <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Berachain: Honest Reflections
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;If you want to build something that lasts, you have to be willing to call out the cracks in the foundation.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            After 3+ years building and investing in Berachain, we&apos;re still here—bullish, but not blind. This isn&apos;t a victory lap or a pitch. It&apos;s a builder&apos;s take on what&apos;s working, what&apos;s not, and what needs to change if Berachain is going to matter in the next cycle.
          </p>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes Berachain Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What Makes Berachain Different?
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
          Berachain at a Glance
        </h2>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Berachain</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row) => (
                <tr key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.bera}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Risks & Challenges */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Risks & Challenges
        </h2>
        <div className="grid md:grid-cols-2 gap-14">
          {risks.map((risk) => (
            <div key={risk.title} className="bg-[#18191c]/80 rounded-2xl p-8 mb-2 border-l-4 border-yellow-500/60 shadow-xl">
              <div className="font-epilogue text-2xl text-yellow-400 mb-2 font-bold drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)]">{risk.title}</div>
              <div className="font-satoshi text-white/80 text-lg md:text-xl">{risk.description}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <span className="font-epilogue text-2xl text-yellow-400 italic drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-2">&quot;No chain is perfect. The ones that last are the ones that learn.&quot;</span>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Honest Flaws & Solutions */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What's Broken & How We Fix It
        </h2>
        <div className="space-y-20">
          {flaws.map((item, i) => (
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
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-10 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Where Do We Go From Here?
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;The best chains are built by those who care enough to call bullshit—and then do the work.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          Berachain&apos;s future isn&apos;t guaranteed. But the raw ingredients—tech, talent, and a core of true believers—are here. If we want to write a different story, it&apos;s on us to build, critique, and collaborate with open eyes and open minds.
        </p>
        <Link href="https://docs.berachain.com/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            Berachain Docs <ArrowRight className="ml-4 w-7 h-7" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
