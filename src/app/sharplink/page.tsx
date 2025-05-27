'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function SharpLinkAnalysis() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Ethereum Treasury • Gaming Technology • Blockchain Integration</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                SharpLink Gaming&apos;s $425M Ethereum Treasury Initiative
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Comprehensive Analysis</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Deal Size
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                $425M Private Placement
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">📈</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Market Reaction
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                +420% Stock Surge
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🔗</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Strategic Partner
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                ConsenSys & Joseph Lubin
              </p>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="structure">Deal Structure</TabsTrigger>
              <TabsTrigger value="investors">Key Investors</TabsTrigger>
              <TabsTrigger value="strategy">Long-term Strategy</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="bg-[#1c1f26] border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-yellow-500">Introduction</CardTitle>
                  <CardDescription className="text-white/70">May 27, 2025 - A Transformative Moment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <p className="mb-4 text-lg">
                      On May 27, 2025, SharpLink Gaming, Inc. (NASDAQ: SBET) announced a landmark $425 million private placement to fund an Ethereum-based treasury strategy. This move transforms SharpLink – traditionally an online marketing partner for sports betting and iGaming – into one of the first U.S. public companies to adopt Ethereum (ETH) as a primary reserve asset. The following report delves into the deal&apos;s structure and terms, the key investors backing it, legal and regulatory considerations, comparisons to other crypto treasury adopters, market reactions, and SharpLink&apos;s long-term strategy for its Ethereum exposure.
                    </p>
                    <Separator className="my-4 bg-yellow-500/30" />
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Key Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>$425 million private placement via PIPE deal</li>
                      <li>69.1 million new shares at $6.15 per share</li>
                      <li>Joseph Lubin (Ethereum co-founder) joining as Chairman</li>
                      <li>Stock price surged 420% on announcement</li>
                      <li>Strategic partnership with ConsenSys</li>
                      <li>Transformative shift in corporate treasury strategy</li>
                      <li>Integration of blockchain technology into core business</li>
                    </ul>
                    <Separator className="my-4 bg-yellow-500/30" />
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Market Impact</h2>
                    <p className="mb-4 text-lg">
                      The announcement triggered an immediate and dramatic market response, with SharpLink&apos;s stock price surging 420% in pre-market trading. This unprecedented jump reflects strong market approval of the company&apos;s strategic pivot and the credibility brought by high-profile crypto investors. The stock&apos;s performance suggests investors are pricing SharpLink not just as a marketing company, but as a high-growth crypto proxy with substantial Ethereum exposure.
                    </p>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure">
              <Card className="bg-[#1c1f26] border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-yellow-500">Deal Structure & Terms</CardTitle>
                  <CardDescription className="text-white/70">Private Investment in Public Equity (PIPE)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Financing Details</h3>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>69.1 million new shares of common stock</li>
                          <li>$6.15 per share (executives at $6.72)</li>
                          <li>Gross proceeds: $425 million</li>
                          <li>Expected closing: May 29, 2025</li>
                          <li>PIPE deal structure via securities purchase agreements</li>
                          <li>At-the-market or slight premium pricing</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Use of Proceeds</h3>
                        <p className="mb-4 text-lg">
                          The bulk of funds will be deployed to purchase Ethereum (ETH), making it the company&apos;s primary treasury reserve asset. A portion may be retained for working capital and general corporate needs. This represents a significant strategic shift in how SharpLink manages its corporate reserves.
                        </p>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Securities Details</h3>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>Sold under Section 4(a)(2) / Reg D exemption</li>
                          <li>Restricted shares until resale registration</li>
                          <li>Registration rights agreement in place</li>
                          <li>Sole placement agent: A.G.P./Alliance Global Partners</li>
                          <li>Legal advisors involved for all parties</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Leadership Changes</h3>
                        <p className="mb-4 text-lg">
                          Joseph Lubin, Ethereum&apos;s co-founder and CEO of ConsenSys, will join SharpLink&apos;s board as Chairman upon closing. This governance change indicates the strategic nature of the investment and provides direct access to Ethereum ecosystem expertise at the highest level.
                        </p>
                      </section>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investors">
              <Card className="bg-[#1c1f26] border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-yellow-500">Key Investors & Their Roles</CardTitle>
                  <CardDescription className="text-white/70">Strategic Partnership Network</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Lead Investor: ConsenSys</h3>
                        <p className="mb-4 text-lg">
                          Led by Joseph Lubin, ConsenSys is a leading Ethereum software and infrastructure company. Lubin will become SharpLink&apos;s Board Chairman, providing strategic guidance on blockchain implementation. ConsenSys brings deep technical expertise and ecosystem connections.
                        </p>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Major Participants</h3>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>ParaFi Capital - DeFi expertise and yield strategies</li>
                          <li>Electric Capital - Developer ecosystem and technical integration</li>
                          <li>Pantera Capital - Crypto market expertise and trading</li>
                          <li>Galaxy Digital - Institutional-grade insight and custody</li>
                          <li>Arrington Capital - Innovation focus and Web3 strategy</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Additional Investors</h3>
                        <p className="mb-4 text-lg">
                          The round includes Ondo Finance, White Star Capital, GSR, Hivemind Capital, Hypersphere Ventures, Primitive Ventures, and Republic Crypto. This diverse group brings expertise in:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>On-chain financial products (Ondo Finance)</li>
                          <li>Liquidity provision and market making (GSR)</li>
                          <li>DeFi and Web3 project development</li>
                          <li>Institutional crypto investment strategies</li>
                        </ul>
                      </section>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy">
              <Card className="bg-[#1c1f26] border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-yellow-500">Long-term Strategy</CardTitle>
                  <CardDescription className="text-white/70">Integration, Custody & Risk Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Business Integration</h3>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>Blockchain-based gaming platforms with smart contracts</li>
                          <li>NFT and fan engagement initiatives</li>
                          <li>Crypto payment integration for betting platforms</li>
                          <li>Ethereum staking participation (4% annual yield)</li>
                          <li>Web3 betting products development</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Security & Custody</h3>
                        <p className="mb-4 text-lg">
                          Implementation of institutional-grade custody solutions with multiple custodians, cold storage, and multi-signature requirements. The strategy includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>Multiple regulated custodians for risk distribution</li>
                          <li>Cold storage implementation</li>
                          <li>Multi-signature wallet requirements</li>
                          <li>Insurance coverage for digital assets</li>
                          <li>Regular security audits and monitoring</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Risk Management</h3>
                        <ul className="list-disc pl-6 space-y-2 text-lg">
                          <li>Price volatility management and hedging strategies</li>
                          <li>Regulatory compliance monitoring</li>
                          <li>Liquidity planning and reserve management</li>
                          <li>Accounting strategy for crypto assets</li>
                          <li>Network upgrade and protocol change monitoring</li>
                        </ul>
                      </section>
                      <Separator className="bg-yellow-500/30" />
                      <section>
                        <h3 className="text-xl font-semibold mb-3 text-yellow-500">Strategic Partnership with ConsenSys</h3>
                        <p className="mb-4 text-lg">
                          Joseph Lubin&apos;s role as Chairman will be pivotal in shaping SharpLink&apos;s Ethereum strategy. ConsenSys will provide technical infrastructure, ecosystem connections, and regulatory guidance, ensuring SharpLink&apos;s successful integration into the Ethereum ecosystem.
                        </p>
                      </section>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
