'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Lock, Shield, Wallet, ChartBar } from 'lucide-react';

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + (i * 0.1),
      duration: 0.5,
    }
  })
};

export default function DefiPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Art Magazine Header Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-4 relative">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Bitcoin • DeFi • Financial Freedom</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Bitcoin DeFi
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Future of Decentralized Finance</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
      </div>

      {/* Main Platforms Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left Platform */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-3 z-0">
              <div className="absolute inset-0 rotate-[2deg] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
            </div>
            
            <Card className="relative z-10 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-epilogue text-3xl">Coinbase x Morpho</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                      <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
                    </div>
                    <div className="p-4 relative z-10">
                      <p className="font-satoshi text-lg text-white/90">
                        Borrow up to $100,000 in USDC
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "1:1 Bitcoin to cbBTC conversion",
                      "Flexible repayment schedules",
                      "133% minimum collateral ratio"
                    ].map((feature, index) => (
                      <motion.div 
                        key={feature}
                        className="flex items-start gap-4"
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="w-6 h-6 mt-1">
                          <ArrowRight className="text-yellow-500" />
                        </div>
                        <p className="font-satoshi text-white/90">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Platform */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-3 z-0">
              <div className="absolute inset-0 rotate-[-2deg] bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
            </div>
            
            <Card className="relative z-10 bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="font-epilogue text-3xl">Berachain Ecosystem</h2>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 rounded-sm shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                      <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
                    </div>
                    <div className="p-4 relative z-10">
                      <p className="font-satoshi text-lg text-white/90">
                        Innovative yield strategies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Multiple DeFi protocols integration",
                      "Proof-of-Liquidity mechanism",
                      "Diverse yield opportunities"
                    ].map((feature, index) => (
                      <motion.div 
                        key={feature}
                        className="flex items-start gap-4"
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="w-6 h-6 mt-1">
                          <ArrowRight className="text-yellow-500" />
                        </div>
                        <p className="font-satoshi text-white/90">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { label: "Loan Capacity", value: "$100K", icon: Wallet },
            { label: "Min Collateral", value: "133%", icon: Shield },
            { label: "Protocols", value: "3+", icon: ChartBar },
            { label: "Lock Period", value: "90d", icon: Lock }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/90 backdrop-blur-sm rounded-sm"></div>
              </div>
              <div className="relative z-10 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  {stat.icon && <stat.icon className="w-6 h-6 text-yellow-500" />}
                </div>
                <p className="text-yellow-500 font-bold text-3xl tracking-wide font-satoshi">{stat.value}</p>
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mt-2 font-satoshi">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi">Platform Comparison</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-yellow-500 to-transparent ml-6"></div>
          </div>

          <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full font-satoshi">
                  <thead>
                    <tr className="border-b-2 border-yellow-500">
                      <th className="text-left py-4 text-yellow-500">Feature</th>
                      <th className="text-left py-4 text-yellow-500">Coinbase x Morpho</th>
                      <th className="text-left py-4 text-yellow-500">Berachain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-yellow-500/20">
                    {[
                      ["Primary Asset", "Bitcoin (cbBTC)", "Wrapped Bitcoin (WBTC)"],
                      ["Loan Currency", "USDC", "HONEY (native)"],
                      ["Collateral Requirement", "133% minimum", "Varies by protocol"],
                      ["Repayment Terms", "Flexible", "Protocol dependent"],
                      ["Platform Maturity", "Established", "Emerging"]
                    ].map(([feature, morpho, bera], index) => (
                      <motion.tr 
                        key={feature}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        className="hover:bg-yellow-500/5 transition-colors"
                      >
                        <td className="py-4 font-medium">{feature}</td>
                        <td className="py-4 text-white/80">{morpho}</td>
                        <td className="py-4 text-white/80">{bera}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Risk Considerations */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 tracking-tight uppercase font-satoshi">Risk Considerations</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-yellow-500 to-transparent ml-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Market Volatility",
                description: "Can affect collateral ratios and trigger liquidations"
              },
              {
                icon: Lock,
                title: "Lock-up Periods",
                description: "Minimum commitment periods may affect liquidity"
              },
              {
                icon: TrendingUp,
                title: "Protocol Maturity",
                description: "Additional risks compared to established ones"
              },
              {
                icon: ChartBar,
                title: "Smart Contract Risk",
                description: "DeFi protocols carry inherent smart contract risks"
              }
            ].map((risk, index) => (
              <motion.div
                key={risk.title}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-sm">
                  <div className="absolute inset-0.5 bg-black/90 rounded-sm"></div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <risk.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-epilogue text-xl mb-2 text-white/90">{risk.title}</h3>
                      <p className="font-satoshi text-white/60">{risk.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="font-epilogue text-4xl mb-6">Start Your DeFi Journey</h2>
          <p className="font-satoshi text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Strategies to put your Bitcoin to work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap max-w-4xl mx-auto">
            <a 
              href="https://app.morpho.org/base/market/0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836/cbbtc-usdc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-12 py-6 text-2xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span>Borrow on Morpho</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
            <a 
              href="https://app.berachain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-12 py-6 text-2xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span>Lend on Berachain</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
            <a 
              href="https://app.infrared.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-12 py-6 text-2xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span>Farm on Infrared</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-sm text-white/60 font-satoshi">
              Current APR on Infrared WBTC vaults: up to 90%
            </p>
            <p className="text-sm text-white/40 font-satoshi">
              Always do your own research and understand the risks before using any DeFi protocol. NFA.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Berachain Deep Dive */}
      <div className="max-w-6xl mx-auto mt-20 mb-10">
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🐻</span>
              <span className="font-bold text-yellow-500 text-2xl md:text-3xl">Berachain: Proof of Liquidity & Tri-Token Innovation</span>
            </div>
            <div className="text-white/90 text-lg space-y-6 font-satoshi">
              <div>
                <b className="text-yellow-500">What Sets Berachain Apart?</b> Berachain isn&apos;t just another PoS chain—it&apos;s a DeFi-first ecosystem built to solve capital inefficiency. Its tri-token model and Proof of Liquidity (PoL) mechanism realign incentives between validators, users, and dApps.
              </div>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Tri-Token System:</b> <b>BERA</b> (gas), <b>BGT</b> (governance, earned via liquidity), <b>HONEY</b> (stablecoin).</li>
                <li><b>POL:</b> Validators direct rewards to dApps and liquidity pools, not just stakers—aligning security with ecosystem growth.</li>
                <li><b>Unified DeFi Hub:</b> AMMs, perps, lending, NFTs, and SocialFi all live on one chain, with EVM compatibility for easy migration.</li>
                <li><b>Dynamic Community:</b> Rapid dApp launches, NFT culture, and a builder-first ethos drive innovation and engagement.</li>
              </ul>
              <div>
                <b className="text-yellow-500">Challenges & Opportunities</b>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><b>Tokenomics:</b> High BERA inflation and VC allocations, but PoL and BGT mechanics aim to balance growth and rewards.</li>
                  <li><b>Exchange Dynamics:</b> Success depends on building credibility and liquidity, not just hype—exchanges and market trust are key.</li>
                  <li><b>TVL & Ecosystem Growth:</b> Early TVL is strong, but more dApps and sticky incentives are needed to attract and retain users.</li>
                  <li><b>Builder Culture:</b> The chain attracts unconventional, creative devs—turning challenges into opportunities for new DeFi primitives.</li>
                </ul>
              </div>
              <div>
                <b className="text-yellow-500">The Road Ahead</b> Berachain is betting on PoL, unified liquidity, and a vibrant community to become DeFi&apos;s next powerhouse. The journey is just beginning—will its bold model set a new standard, or will market headwinds prove too strong?
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OlympusDAO Deep Dive */}
      <div className="max-w-6xl mx-auto mt-20 mb-10">
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🐻</span>
              <span className="font-bold text-yellow-500 text-2xl md:text-3xl">OlympusDAO: Money as Software</span>
            </div>
            <div className="text-white/90 text-lg space-y-6 font-satoshi">
              <div>
                <b className="text-yellow-500">Core Idea:</b> Olympus is an on-chain monetary computer: it programs supply, stability, credit, and liquidity. Unlike Bitcoin&apos;s fixed-supply gold, OHM aims for a crypto-native unit of account with full-stack monetary policy.
              </div>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Treasury-Backed:</b> Every OHM is backed by liquid assets (DAI), giving it a real floor value and yield.</li>
                <li><b>Protocol-Owned Liquidity:</b> Olympus owns its own LPs, ensuring deep, stable markets and fee income.</li>
                <li><b>Range-Bound Stability:</b> Automated market ops keep OHM price within a band, smoothing volatility.</li>
                <li><b>Cooler Loans:</b> Borrow DAI against gOHM at low fixed rates—native credit, no selling required.</li>
              </ul>
              <div className="flex gap-8 mt-4">
                <div>
                  <span className="text-yellow-500 font-semibold">+ Pros:</span>
                  <ul className="list-disc ml-5">
                    <li>Intrinsic yield, credible policy, native credit</li>
                  </ul>
                </div>
                <div>
                  <span className="text-yellow-500 font-semibold">- Cons:</span>
                  <ul className="list-disc ml-5">
                    <li>Complex, regulatory risk, relies on DeFi liquidity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Provocation: Zeus's Critique */}
      <div className="max-w-6xl mx-auto mt-16 mb-10">
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-2">
              <span className="font-bold text-yellow-500 text-xl md:text-2xl">The Provocation: Zeus&apos;s Critique</span>
            </div>
            <div className="text-white/90 text-lg space-y-3 font-satoshi">
              <p>
                <b>Zeus (@ohmzeus)</b> argues crypto lost its way: instead of building true financial freedom, most projects just made Wall Street more efficient. He says tokens lack real monetary design, and DeFi is at risk of becoming just better rails for the same old system.
              </p>
              <a
                href="https://x.com/ohmzeus/status/1916190873425219735"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 underline text-base"
              >
                Read the full thread by Zeus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bitcoin Counter-argument */}
      <div className="max-w-6xl mx-auto mt-16 mb-10">
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🐻</span>
              <span className="font-bold text-yellow-500 text-2xl md:text-3xl">Bitcoin Didn&apos;t Fail—It&apos;s Winning on Its Own Terms</span>
            </div>
            <div className="text-white/90 text-lg space-y-6 font-satoshi">
              <p>
                ZEUS isn&apos;t wrong about crypto&apos;s lost plot, but Bitcoin&apos;s design is a feature, not a flaw. Here&apos;s how it answers the core critique:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <b>Hard-Money Bedrock, Then Layers:</b> Bitcoin deliberately separates base-layer monetary policy (21M cap, no discretion) so higher-layer software can add credit, yield, and stability—without compromising sovereignty. Minimalism is defense-in-depth.
                </li>
                <li>
                  <b>Integration ≠ Capitulation:</b> ETFs now warehouse 1.14M BTC (~5.5% of supply, $108B) in cold custody—not IOUs—under Bitcoin&apos;s rules. TradFi bends; the protocol doesn&apos;t. Every ETF coin removed from float tightens supply.
                </li>
                <li>
                  <b>Censorship Resistance in the Wild:</b> Bitcoin rails moved value out of Argentina, Nigeria, and Russia when banks froze wires. Tether blacklisted 1,299 addresses in 2024 alone. Freedom tech is measured by what you can&apos;t stop.
                </li>
                <li>
                  <b>Path to Unit-of-Account Still Open:</b> El Salvador&apos;s Lightning usage is early but real; merchant acceptance &gt;30% of population. Dollar dominance is temporary—circular Bitcoin economies already show price discovery in sats.
                </li>
              </ul>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-base text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-yellow-500">
                      <th className="pr-4">Metric</th>
                      <th className="pr-4">2020</th>
                      <th className="pr-4">Today</th>
                      <th className="pr-4">Δ</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr>
                      <td>Lightning capacity</td>
                      <td>~1,100 BTC</td>
                      <td>5,300 BTC</td>
                      <td>+384%</td>
                      <td>Spendability</td>
                    </tr>
                    <tr>
                      <td>ETF AUM</td>
                      <td>$0</td>
                      <td>$108B</td>
                      <td>massive</td>
                      <td>Deep liquidity</td>
                    </tr>
                    <tr>
                      <td>Nodes (LN)</td>
                      <td>≈8,000</td>
                      <td>11,500</td>
                      <td>+44%</td>
                      <td>Network health</td>
                    </tr>
                    <tr>
                      <td>Frozen BTC txs</td>
                      <td>0</td>
                      <td>0</td>
                      <td>unchanged</td>
                      <td>Censorship-proof</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <b className="text-yellow-500">Why This Answers ZEUS:</b>
                <ul className="list-disc ml-6 mt-2 space-y-2 text-base">
                  <li><b>&quot;BTC surrendered; ETFs = absorption.&quot;</b> ETFs can&apos;t print coins; they shrink float and cement the 21M rule.</li>
                  <li><b>&quot;Primitive monetary design.&quot;</b> Monetary functions migrate to permissionless layers where competition is free-market, not protocol politics.</li>
                  <li><b>&quot;Stablecoins prove dollar hegemony.&quot;</b> They&apos;re bridge tech. As Lightning matures, BTC-denominated credit undercuts USD reliance.</li>
                  <li><b>&quot;Utility pricing doom loop.&quot;</b> Bitcoin captures value via monetary premium, not fee rent. Gold never needed TPS to outlast fiat.</li>
                </ul>
              </div>
              <p className="mt-6 text-yellow-200 font-semibold">
                The cypher-punk fire that lit Bitcoin still burns: we joined this movement not to trim a few basis points from wire fees but to tear down the gates entirely, handing the keys back to ordinary people. Money was meant to answer to math, not ministries, and that mission loses its edge every time we celebrate dollar-pegged rails or regulatory hugs. Faster blocks and cheaper gas are hollow trophies if the token underneath can&apos;t stand alone as censorship-resistant cash. ETFs and bank-issued stablecoins may prove Bitcoin&apos;s allure, but they also show how easily a revolution can be absorbed if we confuse institutional applause with victory. Tokens priced purely as &quot;utility&quot; will bleed value until someone remembers to design actual sovereign money. The window to finish that job is still open—and the next chapter belongs to builders who refuse to trade freedom for comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bitcoin Magazine Footer */}
      <div className="relative py-24 mt-20 overflow-hidden">
        {/* Bitcoin pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-6"></div>
            <p className="text-white/40 uppercase tracking-widest text-xs font-light font-satoshi">
              BITCOIN MAXI SINCE 2013 • DEFI LOVER SINCE 2017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
