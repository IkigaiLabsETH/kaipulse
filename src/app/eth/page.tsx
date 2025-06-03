"use client";

import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PriceTicker from '@/components/AltCoinsBeta';

export default function EthHonestTake() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Trust Commodity • Digital Oil • Settlement Layer</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Ethereum
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Foundation of Web3 Infrastructure</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Live Market Data */}
          <PriceTicker />

          {/* Market Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Overview
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Ethereum today sits at the crossroads of decentralized trust and digital infrastructure. As the leading smart-contract platform, Ether serves as a &quot;base layer of computing&quot; underpinning vast DeFi, NFT and Web3 applications. Regulators explicitly treat ETH as a commodity (the CFTC has affirmed Ether is a commodity under US law), reinforcing its role as neutral &quot;trust engine&quot; money.
              </p>
              <p className="text-lg">
                Investors and builders often call ETH &quot;digital oil&quot;, since every transaction and smart contract execution is paid for with gas fees in Ether – analogous to how oil fuels an economy. These metaphors capture Ethereum&apos;s evolving identity: a global trust network and computational backplane whose security and utility give Ether intrinsic value.
              </p>
            </div>
          </div>

          {/* Market Cycles Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Market Cycles: ETH vs. Bitcoin Dynamics
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Ethereum has historically lagged Bitcoin in bull markets, setting up a catch-up narrative today. After Bitcoin&apos;s recent run, ETH/BTC hit multi-year lows. A weekly chart shows the ETH/BTC ratio in a clear downtrend since late 2021. For example, from Sept 2022 to now BTC/USD climbed ~470% vs. ETH/USD ~170%, dragging ETH/BTC from ~0.06 to ~0.026.
              </p>
              <p className="text-lg">
                This prolonged underperformance reflects capital flowing first into Bitcoin (e.g. via the new spot BTC ETFs) and only later into altcoins. Indeed, on-chain analytics show Bitcoin investors reached &quot;euphoria&quot; metrics long before Ethereum traders did, and recent inflows into crypto ETFs have favored BTC so far.
              </p>
              <p className="text-lg">
                Institutional rotation is now turning. Market analysts note a breakout in ETH/BTC: Ethereum has &quot;decisively outperformed Bitcoin after lagging throughout the whole cycle&quot;. The recent Pectra upgrade (proto-danksharding) and ETH&apos;s rebound above key levels have renewed interest.
              </p>
            </div>
          </div>

          {/* Trust Foundation Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Trust Foundation
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Ethereum secures a massive on-chain economy (over ~$400 billion in assets) as a neutral settlement layer. Its Proof-of-Stake consensus now leverages ~800K validators, making Ethereum one of crypto&apos;s most secure and decentralized platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Security Metrics</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>~800K active validators</li>
                    <li>~$400B secured value</li>
                    <li>90% reduced issuance post-Merge</li>
                    <li>CFTC-regulated commodity status</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Initiatives</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Trillion Dollar Security initiative</li>
                    <li>Global financial infrastructure</li>
                    <li>Institutional-grade security</li>
                    <li>Regulatory clarity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tokenomics Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Post-Merge Tokenomics
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Ethereum&apos;s supply dynamics flipped after The Merge (Sep 2022) and EIP-1559. Issuance plunged by ~90% – from ~15,000 ETH/day to ~1,500 ETH/day – an event dubbed the &quot;triple halvening&quot;. At the same time, the London hard fork (Aug 2021) introduced fee-burning. Today ~85% of all transaction fees are burned, effectively acting as a network-wide &quot;buyback&quot; for ETH holders.
              </p>
              <p className="text-lg">
                Dune/ultrasound data confirm the impact: since the Merge the network has issued ~6.5M new ETH and burned ~3.5M. That implies annualized issuance ~580K ETH vs. burn 1.75M ETH (today&apos;s gas levels). In other words, at recent activity levels Ethereum&apos;s net supply growth is slightly negative (–1.0% per year).
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Issuance</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>~580K ETH/year</li>
                    <li>~0.5% inflation</li>
                    <li>90% reduction post-Merge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Burn</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>~1.7M ETH/year</li>
                    <li>~0.98% of supply</li>
                    <li>Usage-driven deflation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Net Effect</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Mildly deflationary</li>
                    <li>Supply shrunk ~350K ETH</li>
                    <li>Dynamic supply curve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Usage & Growth Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Usage & Growth
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The base-fee burn depends on how people use Ethereum. Notably, DeFi dominates Ethereum activity – over 90% of all decentralized finance volume occurs on Ethereum and its Layer-2s. Major DeFi apps (AMMs, lending, etc.) drive significant gas usage and fees.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Primary Drivers</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>DeFi TVL peaking ~$150B</li>
                    <li>NFT trading and minting</li>
                    <li>Layer-2 rollup growth</li>
                    <li>Stablecoin transfers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Future Growth</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pectra/Blobs upgrade</li>
                    <li>L2 fee optimization</li>
                    <li>RWA tokenization</li>
                    <li>Gaming/metaverse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 2024-25 Catalysts Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              2024-25 Catalysts
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Looking ahead, several macro and structural factors could catalyze Ethereum:
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Catalysts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bitcoin Halving (Apr 2024)</li>
                    <li>ETH ETFs & Institutional Flows</li>
                    <li>3-5% Staking Yields</li>
                    <li>RWA Tokenization Growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Technical Catalysts</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Pectra Upgrade</li>
                    <li>EIP-4844 (Blobs)</li>
                    <li>L2 Ecosystem Expansion</li>
                    <li>Enterprise Adoption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment Perspective
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                In summary, Ethereum combines robust fundamentals with timely catalysts. It is both a base-layer trust asset and a usage-driven monetary asset. The post-Merge economics have tilted ETH toward deflation when the network is busy, a feature unique among blockchains.
              </p>
              <p className="text-lg">
                After years of trailing Bitcoin, ETH now sits undervalued by some measures. The ETH/BTC ratio bottom and renewed ETH-specific narratives suggest we may be entering a &quot;late-cycle&quot; run for altcoins. Institutional flows (including ETF capital) are beginning to rotate into Ethereum, and upcoming demand drivers (crypto adoption, innovation) could push ETH higher.
              </p>
              <p className="text-lg">
                From a research standpoint, Ethereum&apos;s thesis rests on its evolving identity: a &quot;digital oil&quot; powering a world-computer, and a trust layer securing trillions in value. This dual narrative — coupled with negative net issuance under heavy use — provides a strong case for Ethereum as a long-term store of value and growth asset.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8">
            <Link href="https://ethereum.org/en/" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold px-12 py-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:bg-yellow-400 transition-all duration-300 font-satoshi tracking-tight text-2xl">
                ETH Docs <ArrowRight className="ml-4 w-7 h-7" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
