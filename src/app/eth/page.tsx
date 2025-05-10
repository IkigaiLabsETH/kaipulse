"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformComparison = [
  { feature: 'Primary Asset', eth: 'ETH' },
  { feature: 'Consensus', eth: 'Proof of Stake (PoS)' },
  { feature: 'Smart Contract Language', eth: 'Solidity' },
  { feature: 'Execution Model', eth: 'Sequential, account-based' },
  { feature: 'Transaction Fees', eth: 'Variable, based on demand' },
  { feature: 'Ecosystem Maturity', eth: 'Most mature in crypto' },
  { feature: 'NFT/DeFi Support', eth: 'Industry standard' },
];

const strengths = [
  {
    title: 'Settlement Layer',
    highlight: 'The foundation for global financial infrastructure.',
    description: `Ethereum isn't just another Layer 1—it's becoming the settlement layer for the entire internet. With Pectra upgrade bringing 60M gas limits, it's cementing its role as productive digital infrastructure.`,
    note: `Builder's Note: The upgrade cycle is real—each one makes ETH more valuable.`
  },
  {
    title: 'Yield-Bearing Digital Bond',
    highlight: 'Native yield + deflationary mechanics.',
    description: `With $100B+ staked, ETH is already one of the largest distributed "fixed income" instruments. It offers native yield via staking (3-5%) while being deflationary, making it attractive to institutions.`,
    note: `Builder's Note: Staked ETH ETFs are coming—BlackRock knows what's up.`
  },
  {
    title: 'Tokenization Base Layer',
    highlight: 'Everything gets tokenized, everything settles on ETH.',
    description: `From RWAs to DAOs, stablecoins to L2s, everything routes back to Ethereum. The L2 ecosystem explosion only strengthens ETH's position as the settlement layer.`,
    note: `Builder's Note: The more L2s we get, the more ETH we need.`
  },
  {
    title: "Vitalik's Vision",
    highlight: 'The roadmap is clear and on track.',
    description: `From the Merge to Danksharding, Purge, and Scourge—Ethereum's evolution is methodical. The endgame? A fully verifiable, ZK-proven chain with 10,000+ TPS on L1.`,
    note: `Builder's Note: The technical roadmap is the most credible in crypto.`
  }
];

const flaws = [
  {
    title: 'L1 Scaling Challenges',
    pain: `Despite L2s, base layer congestion and fees can still be high during peak usage.`,
    solution: `Pectra upgrade and Danksharding will significantly improve this, but L2 adoption remains crucial.`
  },
  {
    title: 'Complexity for New Users',
    pain: `The ecosystem can be overwhelming for newcomers, with many technical concepts to grasp.`,
    solution: `Better UX, more intuitive wallets, and gas abstraction layers are making it easier.`
  },
  {
    title: 'Regulatory Uncertainty',
    pain: `The regulatory landscape for ETH and DeFi remains unclear in many jurisdictions.`,
    solution: `Clear guidance is emerging, and institutional adoption is helping establish precedents.`
  },
  {
    title: 'Competition from Alt-L1s',
    pain: `New chains often promise better performance or lower fees.`,
    solution: `ETH's network effects, security, and upgrade path make it hard to displace.`
  }
];

const pillars = [
  {
    title: "Institutional Adoption",
    description: "ETH's combination of yield, deflation, and programmability makes it the perfect institutional asset. ETFs are just the beginning."
  },
  {
    title: "Tokenization Infrastructure",
    description: "As everything gets tokenized, ETH becomes the settlement layer for RWAs, stablecoins, and digital assets of all kinds."
  },
  {
    title: "L2 Ecosystem Growth",
    description: "The explosion of L2s doesn't compete with ETH—it makes it more valuable as the settlement and security layer."
  }
];

export default function EthHonestTake() {
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
          The Settlement Layer
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-epilogue text-yellow-400 italic mb-6 drop-shadow-[0_2px_16px_rgba(247,181,0,0.18)] border-b-2 border-yellow-500/40 pb-4">
            &quot;Ethereum isn&apos;t just another Layer 1—it&apos;s the settlement layer of the internet, and it&apos;s been hiding in plain sight.&quot;
          </p>
          <p className="text-lg md:text-xl font-satoshi text-white/90 leading-snug mb-6">
            While the market&apos;s been distracted by memecoins and modular hype cycles, ETH is quietly laying the rails for the global financial and data infrastructure of the 21st century. This isn&apos;t speculation—it&apos;s infrastructure.
          </p>
        </div>
      </section>

      {/* Custom section divider */}
      <div className="w-full flex justify-center mb-20">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* What Makes ETH Special */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-14 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Why ETH Is Different
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
          ETH at a Glance
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-8 text-center">
          ETH&apos;s features and upgrades are building something unprecedented. The challenge is understanding the full picture.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-[#18191c]/80 p-10 mb-4 shadow-xl border border-yellow-500/20">
          <table className="w-full font-epilogue text-white/90 text-lg">
            <thead>
              <tr className="border-b border-yellow-500/40">
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">Feature</th>
                <th className="text-left py-3 text-yellow-500 font-bold text-xl">ETH</th>
              </tr>
            </thead>
            <tbody>
              {platformComparison.map((row) => (
                <tr key={row.feature} className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors">
                  <td className="py-3 font-epilogue font-semibold text-lg">{row.feature}</td>
                  <td className="py-3 font-satoshi text-white/80 text-lg">{row.eth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mb-24">
        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent rounded-full shadow-lg" />
      </div>

      {/* Who is ETH For Now? */}
      <section className="max-w-screen-lg mx-auto px-4 mb-32 relative z-10">
        <h2 className="font-epilogue text-4xl md:text-5xl font-bold text-yellow-400 mb-12 tracking-tight text-center leading-tight drop-shadow-[0_2px_32px_rgba(247,181,0,0.18)]">
          Who Is ETH For Now?
        </h2>
        <p className="text-lg font-satoshi text-white/80 mb-10 text-center max-w-3xl mx-auto">
          ETH&apos;s next chapter is about:
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
          &quot;ETH today is like buying AWS at launch, or owning TCP/IP.&quot;
        </p>
        <p className="text-lg md:text-xl font-satoshi text-white/80 mb-12 max-w-2xl mx-auto">
          The story is just getting started. With Pectra, Danksharding, and institutional adoption on the horizon, ETH is building the infrastructure for the next century. If you&apos;re here, you&apos;re early. Let&apos;s build the future together.
        </p>
        <Link href="https://ethereum.org/en/" target="_blank">
          <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 font-epilogue tracking-tight text-2xl focus:ring-4 focus:ring-yellow-500/40">
            ETH Docs <ArrowRight className="ml-4 w-7 h-7" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
