"use client";

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function StrikeContent() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      {/* Punchy Intro Line */}
      <div className="w-full flex justify-center mb-3 sm:mb-4">
        <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border-2 border-yellow-500 bg-black/60 shadow-[0_2px_16px_0_rgba(247,181,0,0.10)] backdrop-blur font-satoshi font-semibold text-yellow-500 text-base sm:text-lg tracking-wide uppercase">
          <Image src="/bitcoin/coin-bitcoin.svg" alt="Bitcoin" width={22} height={22} className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" priority />
          Bitcoin-First Lifestyle
        </span>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-3 sm:px-5 lg:px-12 pt-8 sm:pt-12 pb-4 relative">
        <div className="mb-8 sm:mb-12 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi mb-3 sm:mb-4 uppercase">
            How to Run a Bitcoin-Centric LLC with No Promises and Full Conviction
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi max-w-2xl mx-auto mb-4 sm:mb-6">
            No seed round.<br />
            No roadmap.<br />
            No token.<br />
            Just vibes, Bitcoin, and complete sovereignty.<br /><br />
            LiveTheLifeTV is not a startup.<br />
            We&apos;re not &quot;building.&quot;<br />
            We&apos;re living—fully, freely, and off a base layer of hard money.<br /><br />
            Our LLC doesn&apos;t need equity dilution, VC oversight, or quarterly milestones. We hold Bitcoin. We borrow against it when necessary. We optimize for time, optionality, and culture—not market cycles or exit events.<br /><br />
            This is a low-time-preference treasury strategy for sovereign creators and cultural minimalists. Inspired by MicroStrategy, adapted for lifestyle operators.
          </p>
        </div>
      </div>

      {/* Featured Video Section */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-12 sm:mb-16">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4 sm:mb-6 font-epilogue uppercase tracking-wide">🎥 The Bitcoin Lifestyle</h2>
            <div className="relative w-full aspect-video mb-3 sm:mb-4">
              <iframe
                src="https://www.youtube.com/embed/JR9b-JJ6Uv0?start=21436"
                title="LiveTheLifeTV: Bitcoin Lifestyle"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-2 border-yellow-500"
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi">
              Live the Bitcoin lifestyle—no selling, just pure conviction and freedom.
            </p>
          </div>
        </Card>
      </div>

      {/* Animated Divider */}
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-yellow-500/30 rounded-full animate-pulse" />
      </div>


      {/* Animated Divider */}
      <div className="w-full flex justify-center my-12">
        <div className="h-1 w-32 bg-yellow-500/30 rounded-full animate-pulse" />
      </div>

      {/* One-Liner Strategy */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">🎯 The Asset That Frees You</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
              There are two kinds of entities in Web3:<br />
              1. Those selling their asset to fund growth.<br />
              2. Those holding their asset and using Strike to live without selling.<br /><br />
              We&apos;re the second kind.<br /><br />
              We&apos;re aligned with the Saylor strategy—acquire BTC, never sell it—but sized for small operators, not public companies. LiveTheLifeTV doesn&apos;t need billion-dollar liquidity. We need just enough liquidity to live luxuriously and sovereignly—without sacrificing long-term conviction.
            </p>
          </div>
        </Card>
      </div>

      {/* Operating Model */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">🔐 The Stack We Use</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
              We&apos;ve designed a clean and modern financial backbone, minimal and modular, but fully Bitcoin-native.<br /><br />
              1. BTC on Balance Sheet<br />
              Bitcoin is the core treasury asset of the LLC. Not ETH. Not stablecoins. Not yield-chasing DeFi tokens.<br />
              BTC sits in cold storage. It doesn&apos;t move unless it&apos;s being posted as collateral.<br /><br />
              2. Strike for Access, Not Exit<br />
              When we need liquidity, we tap into Strike&apos;s Bitcoin-backed loans:<br />
              • Starting at $10K, with no maximums<br />
              • Up to 3 active loans at once<br />
              • 9.5%–13% APR, depending on size<br />
              • Interest-only, with no origination, early repayment, or credit checks<br />
              • BTC held securely, not rehypothecated<br />
              • Fully managed in-app<br /><br />
              3. LLC Formation via Otonomos<br />
              We&apos;ve set up our entity through <a 
                href="/otonomos" 
                className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
              >
                Otonomos
                <ArrowRight className="h-5 w-5" />
              </a>—a platform that allows us to create a legally compliant LLC with crypto-native DNA.<br /><br />
              4. Cap Table via Fairmint<br />
              We use Fairmint to tokenize and automate our equity—not because we&apos;re raising money, but because we want the option to reward contributors dynamically without losing control.
            </p>
          </div>
        </Card>
      </div>

      {/* Strike Integration */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">⚡ The Treasury Engine</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
              LiveTheLifeTV is poised to leverage Strike Business to transform its Bitcoin treasury into a dynamic tool for real estate development, cultural curation, and lifestyle sovereignty.<br /><br />

              <span className="text-yellow-500 font-semibold">🏛️ Structuring a Bitcoin-Native Real Estate Treasury</span><br />
              By establishing a U.S.-based LLC, LiveTheLifeTV can utilize Strike Business to manage its Bitcoin holdings effectively. This structure allows for:<br />
              • Bitcoin-backed loans: Access cash liquidity without selling BTC, enabling investment in real estate projects like smarthomes and cultural hubs.<br />
              • Asset protection: Mitigate Bitcoin volatility by securing loans against BTC holdings, preserving long-term value.<br /><br />

              <span className="text-yellow-500 font-semibold">🧾 Operational Benefits</span><br />
              Strike Business offers features that align with LiveTheLifeTV&apos;s operational needs:<br />
              • Unlimited Bitcoin transactions: Facilitate large-scale purchases and sales to support real estate acquisitions.<br />
              • Fiat integration: Seamlessly convert between BTC and USD, simplifying vendor payments and operational expenses.<br />
              • Enterprise-grade custody: Ensure secure storage of digital assets, reducing counterparty risks.<br /><br />

              <span className="text-yellow-500 font-semibold">🌐 Enhancing Global Reach</span><br />
              With Strike&apos;s API, LiveTheLifeTV can:<br />
              • Integrate Bitcoin and Lightning payments: Enable fast, low-cost transactions for clients and partners worldwide.<br />
              • Automate financial processes: Streamline operations through programmatic executions between fiat and Bitcoin.<br /><br />

              <span className="text-yellow-500 font-semibold">🧭 Strategic Alignment</span><br />
              This approach aligns with LiveTheLifeTV&apos;s mission to:<br />
              • Curate and develop unique living spaces: Invest in properties that reflect cultural and lifestyle values.<br />
              • Maintain financial sovereignty: Utilize Bitcoin as a core treasury asset, avoiding traditional financial system constraints.<br />
              • Promote a Bitcoin-first lifestyle: Demonstrate practical applications of Bitcoin in real estate and lifestyle sectors.
            </p>
          </div>
        </Card>
      </div>

      {/* What We Actually Do */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">🧬 What We Actually Do</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
              We don&apos;t ship features.<br />
              We don&apos;t raise rounds.<br />
              We don&apos;t follow roadmaps.<br /><br />
              We curate spaces to Live The Life—and we&apos;ve been doing it for over two decades.<br />
              Our core business has always been the same:<br />
              Produce stories. Curate places. Capture culture.<br /><br />
              Now, we&apos;re evolving the mission.<br /><br />
              • We build smarthomes<br />
              • We collect rare architecture<br />
              • We document life inside it<br />
              • We host, travel, photograph, and write<br />
              • We borrow against BTC—not beliefs<br /><br />
              Our real estate isn&apos;t a pivot.<br />
              It&apos;s the physical embodiment of our ethos:<br />
              high-conviction living, backed by hard money.<br /><br />
              The LLC is our vessel.<br />
              The homes are our headquarters.<br />
              The Bitcoin is our treasury.<br /><br />
              We don&apos;t sell the asset that sets us free.<br />
              We use it to create sanctuaries where sovereignty becomes tangible.<br /><br />
              We&apos;re not scaling a startup.<br />
              We&apos;re scaling a lifestyle.<br /><br />
              <a 
                href="/smarthome" 
                className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
              >
                → Explore our Smarthome vision
                <ArrowRight className="h-5 w-5" />
              </a>
            </p>
          </div>
        </Card>
      </div>

      {/* The Vibe */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">🌐 Creative Operating System</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
              Bitcoin isn&apos;t our hedge. It&apos;s our operating system.<br />
              • It governs our time preference.<br />
              • It disciplines our treasury.<br />
              • It powers our liquidity via Strike.<br />
              • It keeps our books clean and our minds clearer.<br />
              • It ensures we never have to sell the thing we believe in most.<br /><br />
              We don&apos;t bet on Bitcoin.<br />
              We live on it.
            </p>
          </div>
        </Card>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
        <Card className="border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] rounded-none relative overflow-hidden p-0">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-2 sm:mb-3 font-epilogue uppercase tracking-wide">📜 Our Mission</h2>
            <blockquote className="text-yellow-500 italic border-l-4 border-yellow-500 pl-3 sm:pl-4 mb-3 sm:mb-4 font-epilogue">&quot;LiveTheLifeTV exists to show how you can opt out—quietly, elegantly, and without compromise. Bitcoin is our reserve. Sovereignty is our product. The life is the yield.&quot;</blockquote>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi">
              We don&apos;t sell JPEGs.<br />
              We don&apos;t sell tokens.<br />
              We don&apos;t even sell you on Bitcoin.<br /><br />
              We just live it—and document the path.
            </p>
          </div>
        </Card>
      </div>

      {/* Final Thought & CTA */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 mb-12 sm:mb-20 flex flex-col items-center">
        <motion.div 
          className="py-6 sm:py-10 text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-3 sm:mb-4 font-epilogue uppercase tracking-wide">🏁 Final Thought</h2>
          <p className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold leading-relaxed font-epilogue mb-3 sm:mb-4">
            If Saylor had a taste for wine, art, and five-star hotels, he might have done this instead. We&apos;re not here to scale. We&apos;re here to show what happens when you use the best monetary asset on earth to fund a life with no external dependencies.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi mb-3 sm:mb-4">
            No roadmap.<br />
            No dilution.<br />
            No decks.<br />
            Just vibes.<br />
            Just Bitcoin.
          </p>
          <div className="h-0.5 w-16 bg-yellow-500/50 mx-auto mt-6 sm:mt-8"></div>
          {/* CTA Card-style clickable frame */}
          <a
            href="/fairmint"
            className="group block max-w-3xl mx-auto mt-6 sm:mt-8"
            aria-label="Read More about Fairmint"
          >
            <div className="relative border-2 border-yellow-500 bg-[#181818] shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none px-4 sm:px-6 py-4 sm:py-6 md:py-8 flex flex-col items-center transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 font-epilogue uppercase tracking-wide text-center mb-2">
                Want to copy the playbook?
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 font-satoshi text-center mb-3 sm:mb-4">
                Step 1: Form your LLC.<br />
                Step 2: Stack BTC.<br />
                Step 3: Use Strike when you need to.<br />
                Step 4: Live the life.
              </div>
              <div className="flex items-center gap-2 mt-2 group-hover:underline group-hover:text-yellow-500 transition-all duration-200 text-lg sm:text-xl font-semibold font-satoshi">
                Read More about Fairmint.
                <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7 text-yellow-500 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
              {/* Yellow bar at the bottom */}
              <div className="absolute left-0 right-0 bottom-0 h-2 bg-yellow-500 pointer-events-none" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 