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
                  <span>Morpho</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
            <a 
              href="https://app.euler.finance/borrow?collateralAsset=WBTC&sorting=liquidity-desc&network=berachain"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-12 py-6 text-2xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span>Berachain</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
            <a 
              href="https://origami.finance/vaults/80094-0x69f1E971257419B1E9C405A553f252c64A29A30a/info"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-12 py-6 text-2xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <span>Origami</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </a>
          </div>
          {/* Burve Teaser */}
          <div className="max-w-6xl mx-auto mt-20 mb-10">
            <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
              <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
              <div className="p-8 md:p-10">
                <h3 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-4 font-epilogue">Burve: Unified BTC Liquidity, Giga Yield</h3>
                <div className="text-white/90 text-lg space-y-4 font-satoshi">
                  <p>
                    Imagine being able to provide liquidity for all of these BTC pairs with only one deposit. That would already be great, right? Burve goes one step further and deposits your idle liquidity into money markets like <span className="text-yellow-400">Dolomite</span>, <span className="text-yellow-400">Euler</span>, and <span className="text-yellow-400">Morpho</span>, giving you extra yield on top of the swap fees. Alright, that sounds amazing, right? It gets crazier though, because since we&apos;re on <span className="text-yellow-400">Berachain</span>, both the Burve LP and those deposits on money markets can generate <span className="text-yellow-400">BGT</span>. So you are getting <span className="font-semibold text-yellow-400">giga boosted yield</span> from LPing multiple pairs at once + lending yield + BGT from both of these things.
                  </p>
                  <p className="text-white/70">
                    Please check out the docs and see it for yourself, there&apos;s a bunch of things I didn&apos;t even mention —{' '}
                    <a href="https://docs.burve.fi" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">https://docs.burve.fi</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-sm text-white/60 font-satoshi">
              Not Financial Advice. NFA. DYOR.
            </p>
            <p className="text-sm text-white/40 font-satoshi">
              Always do your own research and understand the risks before using any DeFi protocol.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lombard Finance Section */}
      <div className="max-w-6xl mx-auto mt-20 mb-10">
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <h3 className="text-yellow-500 font-bold text-2xl md:text-3xl mb-4 font-epilogue">Lombard: Liquid Staking for Bitcoin, Unlocked</h3>
            <div className="text-white/90 text-lg space-y-4 font-satoshi">
              <p>
                Lombard Finance is redefining Bitcoin&apos;s role in decentralized finance. By launching <span className="text-yellow-400 font-semibold">LBTC</span>, the first yield-bearing, liquid Bitcoin staking token, Lombard allows Bitcoin holders to earn rewards while keeping their BTC liquid and DeFi-ready. Built on Babylon&apos;s Bitcoin restaking layer and secured by a decentralized consortium, LBTC transforms idle BTC into productive capital across multiple chains like Ethereum, Base, and Sui.
              </p>
              <p>
                Unlike traditional wrapped BTC products, LBTC is 1:1 backed and actively generates yield from Bitcoin-secured networks, creating new opportunities for DeFi integration without compromising Bitcoin&apos;s security ethos. Lombard already leads the Bitcoin liquid staking market, with over $2 billion in LBTC supply and integrations across top DeFi protocols. As Bitcoin liquidity increasingly flows into DeFi, Lombard stands at the forefront, bridging the world&apos;s hardest asset into the onchain economy.
              </p>
              <div className="mt-6">
                <a
                  href="https://lombard.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-md hover:bg-yellow-400 transition-colors border-2 border-yellow-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
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

      {/* Solv Finance Section */}
      <motion.div 
        className="max-w-6xl mx-auto mt-20 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="border-4 border-yellow-500 rounded-md bg-[#18191c] shadow-xl">
          <div className="h-2 w-full bg-yellow-500 rounded-t-md" />
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <span className="font-bold text-yellow-500 text-2xl md:text-3xl">Solv Finance: Fixed-Yield NFTs Meet DeFi</span>
            </div>
            <div className="text-white/90 text-lg space-y-6 font-satoshi">
              <div>
                Solv Finance bridges the gap between traditional fixed-income products and DeFi by transforming crypto deposits into NFTs with guaranteed yields. This innovative approach brings the predictability of term deposits to the blockchain while maintaining the liquidity advantages of tokenized assets.
              </div>
              <div>
                <b className="text-yellow-500">Core Mechanics</b>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Lock USDC or wBTC to mint SolvUSDC or SolvBTC NFTs</li>
                  <li>Fixed maturity date with predetermined yield</li>
                  <li>NFTs are freely tradable on secondary markets</li>
                  <li>Yield sourced from established lending protocols</li>
                  <li>Non-custodial design with direct protocol integration</li>
                </ul>
              </div>
              <div>
                <b className="text-yellow-500">Token Economics</b>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><b>SOLV Token:</b> Governance rights over fees, vault parameters, and protocol direction</li>
                  <li><b>Solv Points:</b> Loyalty system rewarding long-term stakers with SOLV tokens or fee reductions</li>
                </ul>
              </div>
              <div>
                <b className="text-yellow-500">Strategic Partnerships</b><br/>
                Integration with DeFi blue chips like Aave and Compound, plus emerging platforms in the Berachain ecosystem, creates a robust yield foundation and ensures deep secondary market liquidity for Solv NFTs.
              </div>
              <div>
                <b className="text-yellow-500">Risk Considerations</b>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Smart contract vulnerabilities in vault mechanics</li>
                  <li>NFT market liquidity constraints</li>
                  <li>Underlying protocol dependencies</li>
                  <li>Yield source diversification needs</li>
                </ul>
              </div>
              <div>
                <b className="text-yellow-500">Why It Matters</b><br/>
                Solv Finance represents a crucial evolution in DeFi by merging fixed-income principles with NFT technology. This innovation serves multiple stakeholders:
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Investors seeking predictable yields without leaving Web3</li>
                  <li>Builders looking for novel collateral types</li>
                  <li>Traders wanting bond-like instruments with NFT liquidity</li>
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="https://solv.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-md hover:bg-yellow-400 transition-colors border-2 border-yellow-500"
                >
                  Start Minting
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
