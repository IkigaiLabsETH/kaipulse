'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { createThirdwebClient } from "thirdweb"
import { PayEmbed, darkTheme } from "thirdweb/react"
import { base } from "thirdweb/chains"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
})

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 pr-4 md:pr-8 lg:pr-12">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="text-sm uppercase tracking-wider text-yellow-500">EXCLUSIVE ACCESS</h6>
              <h1 className="font-epilogue text-6xl md:text-7xl lg:text-8xl text-yellow-500 font-bold">The Club</h1>
            </motion.div>
            
            <motion.div 
              className="space-y-8 text-lg md:text-xl font-satoshi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-yellow-500/90 font-medium">
                Your entry point into a sovereign future, on-chain and off-grid.
              </p>

              <p className="text-white/90">
                We don&apos;t trade hours for dollars. We ship code that works while we sleep. Our portfolios are designed for resilience through the Bitcoin standard, our lives optimized for optionality. We&apos;re early to the hardest money ever created. We use proof-of-work, not promises.
              </p>

              <p className="text-white/90">
                But sovereignty isn&apos;t just financial. It&apos;s health. It&apos;s taste. It&apos;s surf at sunrise and deep-work at golden hour. It&apos;s fasting like a monk and sprinting like a wolf. We sip Bordeaux and drive Tesla. The good life.
              </p>

              <p className="text-white/90">
                If you&apos;re building in public, stacking in silence, and designing a life worth defending—this is your tribe. Stack sats - stay humble.
              </p>

              <p className="text-yellow-500 font-medium text-2xl">
                Join the Club. Opt out loud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PayEmbed
                client={client}
                payOptions={{
                  metadata: {
                    name: "LTL Membership",
                  },
                  mode: "direct_payment",
                  paymentInfo: {
                    chain: base,
                    sellerAddress: "0x77CAacb4d8D84C68FB8e33baDADFde8a26AA6d25", 
                    amount: "0.01",
                  },
                }}
                connectOptions={{
                  accountAbstraction: {
                    chain: base,
                    sponsorGas: false,
                  },
                }}
                theme={darkTheme({
                  colors: { modalBg: "hsl(228, 12%, 8%)" },
                })}
                className="w-full"
              />
            </motion.div>
          </div>

          <motion.div 
            className="relative h-[600px] md:h-[800px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/background_120.jpeg"
              alt="The Club"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 