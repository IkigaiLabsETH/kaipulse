"use client";

import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  PremiumLayout,
  PremiumHero,
  BoxyCard,
  FinancialTable
} from '@/components/sol';

const platformComparison = [
  { Feature: 'Primary Asset', SUI: 'SUI' },
  { Feature: 'Consensus', SUI: 'Narwhal & Bullshark (DAG + BFT)' },
  { Feature: 'Smart Contract Language', SUI: 'Move (Sui flavor)' },
  { Feature: 'Execution Model', SUI: 'Parallel, object-centric' },
  { Feature: 'Transaction Fees', SUI: 'Low, predictable' },
  { Feature: 'Ecosystem Maturity', SUI: 'Growing rapidly' },
  { Feature: 'NFT/DeFi Support', SUI: 'Strong, expanding' },
  { Feature: 'Bitcoin Integration', SUI: 'sBTC (Coming 2025)' }
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
    <>
      <Header />
      <PremiumLayout>
        {/* Hero Section */}
        <PremiumHero
          title="SUI: Cooking Up Traction"
          subtitle="Builder's Honest Take"
        >
          <div className="max-w-2xl mx-auto mt-8">
            <p className="text-xl md:text-2xl text-yellow-500 italic mb-6 border-b-2 border-yellow-500/40 pb-4">
              &quot;Builders at Token2049 were genuinely excited about SUI. The tech is real, the momentum is building, and the vibe is bullish—if you know where to look.&quot;
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-snug">
              SUI surprised a lot of people this year. The traction is real, and the builder energy is strong. Some are still skeptical, but the ones building here are all in. This isn&apos;t a paid shill—just a snapshot of what&apos;s working, what needs work, and why SUI is worth watching right now.
            </p>
          </div>
        </PremiumHero>

        {/* What Makes SUI Special */}
        <BoxyCard title="What Makes SUI Different?">
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-3">
                  {item.title}
                </h4>
                <div className="text-yellow-500 italic mb-3 border-l-4 border-yellow-500/60 pl-4">
                  {item.highlight}
                </div>
                <div className="text-gray-300 mb-3 leading-relaxed">
                  {item.description}
                </div>
                <div className="text-yellow-500/80 text-sm italic">{item.note}</div>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* Platform Comparison */}
        <BoxyCard title="SUI at a Glance">
          <p className="text-lg text-gray-300 mb-8 text-center">
            SUI&apos;s features are starting to stand out. But traction comes from real usage, not just tech. The challenge is to turn potential into practice.
          </p>
          <FinancialTable 
            headers={['Feature', 'SUI']}
            rows={platformComparison}
          />
        </BoxyCard>

        {/* Who is SUI For Now? */}
        <BoxyCard title="Who Is SUI For Now?">
          <p className="text-lg text-gray-300 mb-8 text-center">
            SUI&apos;s next chapter is about:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-3">{pillar.title}</h4>
                <p className="text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* Honest Flaws & Solutions */}
        <BoxyCard title="What's Broken & How We Fix It">
          <div className="space-y-6">
            {flaws.map((item) => (
              <div
                key={item.title}
                className="bg-yellow-500/5 p-6 rounded border border-yellow-500/20 border-l-4 border-l-yellow-500"
              >
                <h4 className="text-xl text-yellow-500 font-bold mb-4">{item.title}</h4>
                <div className="mb-4">
                  <div className="text-yellow-500 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Pain Point</div>
                  <div className="text-gray-300 mb-4">{item.pain}</div>
                </div>
                <div>
                  <div className="text-yellow-500 italic mb-2 border-l-4 border-yellow-500/60 pl-4">Possible Direction</div>
                  <div className="text-gray-300">{item.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </BoxyCard>

        {/* Call to Action */}
        <BoxyCard title="Where Do We Go From Here?">
          <div className="text-center space-y-6">
            <p className="text-xl text-yellow-500 italic border-b-2 border-yellow-500/40 pb-4 max-w-2xl mx-auto">
              &quot;The best chains are built by those who care enough to call out the flaws—and then do the work.&quot;
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              SUI&apos;s story is just getting started. If you&apos;re building, you&apos;re early. Let&apos;s keep the momentum going, support each other, and make SUI a chain worth building on. If you&apos;re here, you matter. Let&apos;s write the next chapter together.
            </p>
            <div className="pt-4">
              <Link href="https://docs.sui.io/" target="_blank">
                <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-bold px-12 py-6 rounded-2xl shadow-[0_8px_32px_0_rgba(247,181,0,0.18)] hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 tracking-tight text-xl">
                  SUI Docs <ArrowRight className="ml-4 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </BoxyCard>
      </PremiumLayout>
    </>
  );
}
