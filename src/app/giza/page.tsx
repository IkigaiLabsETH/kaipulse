"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GizaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">DeFi • AI • Autonomous Agents</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Gizatech
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Pioneering Autonomous DeFi Solutions</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Revolutionizing DeFi with AI
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Gizatech is at the forefront of autonomous blockchain solutions, developing cutting-edge infrastructure for DeFi through AI-driven agents. With ARMA as its flagship product, Gizatech is transforming how users interact with decentralized finance, making it more accessible and efficient than ever before.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>$1M in autonomous capital managed</li>
                  <li>55.9% surge in $GIZA token value</li>
                  <li>Strategic partnership with Re7 Capital</li>
                  <li>$3M seed funding from leading investors</li>
                  <li>Integration with major DeFi protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Advanced Technology Stack
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Core Technologies</h4>
                  <ul className="text-white/80 font-satoshi space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Zero-Knowledge Proofs (ZKML)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Machine Learning Algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Cairo Programming Language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Smart Contract Automation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Open Source Projects</h4>
                  <ul className="text-white/80 font-satoshi space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>LuminAIR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Rekommender</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>NumerAIR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>ARMA Documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  ARMA Platform
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Autonomous Yield Optimization
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔒</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Smart Security
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Zero-Knowledge Technology
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  DeFi Integration
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Multi-Protocol Support
              </p>
            </div>
          </div>

          {/* ARMA Platform Details */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              ARMA: Autonomous Yield Optimization
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Platform Overview</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    ARMA is Gizatech&apos;s flagship product, operating on the Base network to optimize yields for stablecoins like USDC and USDT. The platform automatically allocates funds to the highest-yielding lending protocols, including AAVE V3, Morpho Blue, and others, while maintaining full asset ownership through smart accounts.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Features:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Minimum 50 USDC/USDT deposit</li>
                        <li>Automatic yield optimization</li>
                        <li>Smart account ownership</li>
                        <li>Multi-protocol integration</li>
                        <li>Real-time monitoring</li>
                        <li>Secure transactions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Supported Protocols:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>AAVE V3 (3.57% APR)</li>
                        <li>Morpho Blue (7.67% APR)</li>
                        <li>Moonwell (7.48% APR)</li>
                        <li>Seamless (9.13% APR)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Performance & Backtesting</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Backtesting Results:</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li>83.45% higher APR vs competitors</li>
                        <li>Based on DEFILLAMA USDC data</li>
                        <li>$10,000 example: $1,031.86 earned</li>
                        <li>10.31% daily average APR</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Transaction Volume:</h5>
                      <ul className="text-white/80 font-satoshi space-y-2">
                        <li>$5.4M volume on Base</li>
                        <li>4-week performance period</li>
                        <li>Continuous optimization</li>
                        <li>Real-time monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Resources */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Community & Resources
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Community Channels</h4>
                  <ul className="text-white/80 font-satoshi space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Discord Community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Telegram Group</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>X (Twitter) Updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>GitHub Repository</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Documentation</h4>
                  <ul className="text-white/80 font-satoshi space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Technical Documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>API References</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Security Audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Integration Guides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Developments */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Recent Developments
            </h3>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Growth & Partnerships</h4>
                <ul className="text-white/80 font-satoshi space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span>Strategic partnership with Re7 Capital announced on May 29, 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span>$GIZA token listed on KuCoin, enabling broader trading access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span>Successfully managing $1M in autonomous capital across networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span>Phase 2 of $GIZA airdrop launched on Galxe platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              asChild
            >
              <Link href="https://arma.xyz" target="_blank" rel="noopener noreferrer">
                Explore ARMA Platform
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
