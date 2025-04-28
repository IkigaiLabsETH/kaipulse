"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SafeImage } from "@/components/ui/SafeImage";

const coinbaseLogo =
  "/coinbase-v2.svg"; 

export default function CoinbasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Featured Video Section */}
      <div className="pt-20" />
      <div className="text-center mb-6">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-2 font-light font-satoshi">Featured Video</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi mb-2">Coinbase Platform</h2>
      </div>
      <div className="flex justify-center pb-12">
        <div className="relative w-full max-w-3xl aspect-video border-2 border-yellow-500 rounded-xl shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/Gxr-ViBuHB8"
            title="Coinbase Featured Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-row items-center justify-center gap-8 mb-8 pt-8">
            <SafeImage
              src={coinbaseLogo}
              alt="Coinbase Logo"
              className="w-32 h-32 object-contain rounded-full border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-white"
              priority
            />
            <h1 className="font-epilogue text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
              Coinbase Overview
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
            Coinbase Global, Inc. is a leading U.S. cryptocurrency exchange and digital asset services platform. Founded in 2012, it has grown into the largest U.S. crypto exchange, serving millions of users and institutions worldwide.
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Company Overview
              </h2>
              <p className="text-white/80 font-satoshi mb-2">
                Coinbase was founded in 2012 by Brian Armstrong and Fred Ehrsam, headquartered in San Francisco. By its Nasdaq direct listing in April 2021, it was the largest U.S. crypto exchange, with 56 million users and $223B in customer assets. Early backers included NYSE owner Intercontinental Exchange, BBVA, and former Citigroup CEO Vikram Pandit. As a public company (NASDAQ: COIN), Coinbase became one of the first crypto-native firms to reach mainstream capital markets, reflecting its rapid growth during the 2017 and 2020–21 crypto booms.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Key Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Key Services
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>Retail crypto trading (Coinbase.com & Coinbase Pro)</li>
                <li>Coinbase Wallet (self-custody mobile wallet)</li>
                <li>Visa debit card for spending crypto</li>
                <li>Coinbase Commerce (merchant crypto payments)</li>
                <li>Coinbase Prime (institutional trading & custody)</li>
                <li>Staking, custody, and USDC stablecoin services</li>
                <li>Coinbase Earn educational programs</li>
                <li>NFT marketplace (launched 2022–2023)</li>
                <li>Base (Ethereum Layer-2 network for DeFi, launched 2023)</li>
                <li>Coinbase Ventures (blockchain startup investments)</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Revenue Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Revenue Model
              </h2>
              <p className="text-white/80 font-satoshi mb-2">
                Coinbase&apos;s revenue is split between transaction fees (trading) and subscription/services. In 2024, revenue more than doubled to $6.6B, driven by booming crypto prices and volumes. Q4 2024 saw $2.3B in revenue (88% increase QoQ), with transaction revenue of $1.6B (up 172% QoQ) and subscription/services of $641M. The company ended 2024 with $2.6B in net income and $3.3B in adjusted EBITDA, reflecting two straight years of profitability after prior losses.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Recent Financials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Recent Financials
              </h2>
              <p className="text-white/80 font-satoshi mb-2">
                Q4 2024 results (reported Feb 2025) showed net income of $1.3B and a cash-rich balance sheet ($9.3B in USD resources). These results mirror the crypto market rally: Bitcoin hit new highs late in 2024 and early 2025, driving trading activity. New products and services (like Coinbase One subscriptions and Base network) contributed to growth, with deepening institutional adoption of crypto.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Ecosystem and Innovations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Ecosystem & Innovations
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>Base Layer-2 network for DeFi (launched 2023)</li>
                <li>Coinbase Learn & market research</li>
                <li>Co-creator of USDC stablecoin (with Circle)</li>
                <li>Point-of-sale tools for businesses</li>
                <li>Custodian for major Bitcoin ETF issuers (e.g., BlackRock IBIT)</li>
                <li>Strategic partnerships with asset managers</li>
                <li>Coinbase Ventures: hundreds of blockchain startup investments</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Recent Developments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Recent Developments
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>SEC lawsuit in June 2023 for alleged unregistered securities exchange</li>
                <li>Regulatory challenges and market volatility</li>
                <li>Approval to offer crypto futures trading to retail investors (late 2023)</li>
                <li>Launch of institutional lending platform (2023)</li>
                <li>Strong 2024 growth driven by new products and institutional adoption</li>
                <li>Expansion into global markets and policy engagement</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Bitcoin Yield Fund Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Coinbase Institutional Bitcoin Yield Fund (CBYF)
              </h2>
              <p className="text-white/80 font-satoshi mb-4">
                On April 28, 2025, Coinbase announced the Coinbase Bitcoin Yield Fund (CBYF), targeting non-U.S. institutional clients seeking 4–8% net annual BTC yield. The fund uses a conservative cash-and-carry basis trade, with monthly subscriptions/redemptions, capped at ~$1B AUM, and assets held with qualified custodians. CBYF is only open to non-U.S. institutional investors, seeded by Aspen Digital (Abu Dhabi), and aims to meet growing demand for regulated, institutional-grade Bitcoin yield products.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>4–8% net annual BTC yield target</li>
                <li>Monthly subscriptions/redemptions, $1B AUM cap</li>
                <li>Assets held with qualified custodians</li>
                <li>Cash-and-carry basis trade strategy (spot vs. futures)</li>
                <li>Open to non-U.S. institutional investors only</li>
                <li>Seeded by Aspen Digital (Abu Dhabi)</li>
                <li>Designed for asset managers, hedge funds, family offices, pensions</li>
                <li>Focus on risk management, no high-interest lending or aggressive options selling</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Expert Commentary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Expert Commentary & Reactions
              </h2>
              <p className="text-white/80 font-satoshi mb-2">
                Analysts view the Bitcoin Yield Fund as a timely response to institutional demand for BTC yield. Coinbase&apos;s reputation and compliance give it an edge over smaller or unregulated venues. The fund&apos;s conservative strategy appeals to risk-averse allocators, but experts note that basis-trade returns depend on market conditions and regulatory uncertainty remains, especially for U.S. investors.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>Addresses institutional demand for yield-bearing crypto products</li>
                <li>Coinbase&apos;s compliance and custody network seen as competitive advantages</li>
                <li>Basis-trade strategy can underperform in backwardated markets</li>
                <li>Regulatory uncertainty for U.S. market remains a challenge</li>
                <li>May spur competitors to launch similar products</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Market Implications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 mb-24"
        >
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-yellow-500 font-epilogue mb-4">
                Market Implications
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-satoshi">
                <li>Strengthens Coinbase&apos;s institutional franchise and asset management ambitions</li>
                <li>May increase BTC demand and market liquidity</li>
                <li>Could spur competitors to launch similar yield products</li>
                <li>Signals growing institutional adoption of crypto</li>
                <li>Success could pave the way for more complex institutional crypto strategies</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
