"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformComparison = [
  { feature: 'Primary Asset', sui: 'SUI' },
  { feature: 'Consensus', sui: 'Narwhal & Bullshark (DAG + BFT)' },
  { feature: 'Smart Contract Language', sui: 'Move (Sui flavor)' },
  { feature: 'Execution Model', sui: 'Parallel, object-centric' },
  { feature: 'Transaction Fees', sui: 'Low, predictable' },
  { feature: 'Ecosystem Maturity', sui: 'Growing rapidly' },
  { feature: 'NFT/DeFi Support', sui: 'Strong, expanding' },
  { feature: 'Bitcoin Integration', sui: 'sBTC (Coming 2025)' },
];

const strengths = [
  {
    title: 'Parallel Execution',
    highlight: 'Speed without sacrificing security.',
    description: `SUI's parallel transaction execution enables high throughput and low latency, making it ideal for both DeFi and gaming. This is a real differentiator versus most EVM chains.`,
    note: `Builder's Note: The tech is legit—devs are starting to notice the speed.`
  },
  {
    title: 'Bitcoin DeFi Integration',
    highlight: 'Bringing $1.6T of BTC into DeFi.',
    description: `SUI's upcoming sBTC integration positions it as a major player in Bitcoin DeFi. With a $96M market cap and full BTC backing, sBTC enables trustless DeFi while maintaining Bitcoin's security.`,
    note: `Builder's Note: This is a game-changer for BTC holders looking to participate in DeFi.`
  },
  {
    title: 'Move Language',
    highlight: 'Asset-oriented, secure by design.',
    description: `Move's resource model makes asset management safer and more intuitive. SUI's flavor of Move is attracting new devs who want to avoid Solidity's pitfalls.`,
    note: `Builder's Note: Move onboarding is a hurdle, but the long-term benefits are real.`
  },
  {
    title: 'Ecosystem Momentum',
    highlight: 'Builders are showing up.',
    description: `Recent traction is real—more dapps, more users, and more attention from VCs and agencies. SUI is no longer just a tech demo.`,
    note: `Builder's Note: The vibe at Token2049 was bullish—people are paying attention.`
  }
];

const flaws = [
  {
    title: 'Ecosystem Still Young',
    pain: `Despite the hype, SUI's ecosystem is still maturing. Liquidity is growing but not yet deep, and some infra is still in beta.`,
    solution: `Keep supporting core infra, incentivize sticky liquidity, and attract flagship dapps to anchor the ecosystem.`
  },
  {
    title: 'Move Onboarding Curve',
    pain: `Move is powerful, but it's new for most devs. The learning curve is real, and tooling is still catching up to Solidity.`,
    solution: `Invest in better docs, more tutorials, and grants for Move-native tooling. Make onboarding as smooth as possible.`
  },
  {
    title: 'Bitcoin DeFi Competition',
    pain: `The Bitcoin DeFi space is heating up with competitors like Cardano also entering the space. SUI needs to differentiate its offering.`,
    solution: `Leverage SUI's technical advantages in speed and scalability to provide the best BTC DeFi experience.`
  },
  {
    title: 'CEX/DEX Liquidity',
    pain: `Liquidity on SUI pairs is improving but still lags behind SOL and ETH. Some users report slippage and thin books.`,
    solution: `Work with market makers, incentivize deep books, and make bridging from other chains seamless.`
  }
];

const pillars = [
  {
    title: "Bitcoin DeFi Builders",
    description: "SUI's sBTC integration opens up $1.6T of BTC for DeFi. Builders can create innovative products for Bitcoin holders while maintaining BTC's security."
  },
  {
    title: "NFT & Gaming Creators",
    description: "SUI's object model and parallel execution make it a natural fit for NFT projects and on-chain games that need scale and flexibility."
  },
  {
    title: "New User Onboarding",
    description: "Low fees, fast finality, and improving wallet UX make SUI a great entry point for crypto newcomers."
  }
];

export default function SuiHonestTake() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle background gradient and pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18191c] via-black to-[#0a0a0a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      </div>
      <Header />
      <section className="max-w-screen-lg mx-auto pt-32 pb-14 px-4 text-center relative z-10">
        <Badge className="bg-yellow-500 text-black text-sm mb-6 font-satoshi tracking-wide shadow-md">Builder&apos;s Honest Take</Badge>
        <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-yellow-400 mb-8 tracking-tight leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          SUI: Cooking Up Traction
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;Builders at Token2049 were genuinely excited about SUI. The tech is real, the momentum is building, and the vibe is bullish—if you know where to look.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            SUI surprised a lot of people this year. The traction is real, and the builder energy is strong. Some are still skeptical, but the ones building here are all in. This isn&apos;t a paid shill—just a snapshot of what&apos;s working, what needs work, and why SUI is worth watching right now.
          </p>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes SUI Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          What Makes SUI Different?
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
          SUI at a Glance
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
          SUI&apos;s features are starting to stand out. But traction comes from real usage, not just tech. The challenge is to turn potential into practice.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">SUI</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row) => (
                <tr key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.sui}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Who is SUI For Now? */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Who Is SUI For Now?
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          SUI&apos;s next chapter is about:
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
          Where Do We Go From Here?
        </h2>
        <p className="font-epilogue text-2xl text-yellow-400 italic mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
          &quot;The best chains are built by those who care enough to call out the flaws—and then do the work.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          SUI&apos;s story is just getting started. If you&apos;re building, you&apos;re early. Let&apos;s keep the momentum going, support each other, and make SUI a chain worth building on. If you&apos;re here, you matter. Let&apos;s write the next chapter together.
        </p>
        <Link href="https://docs.sui.io/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            SUI Docs <ArrowRight className="ml-4 w-7 h-7" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
