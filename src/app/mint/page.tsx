'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/thirdwebClient"

export default function Mint() {
  // Example NFT data (replace with real data as needed)
  const displayName = "Cloud In a Bottle";
  const description = `A surreal still life that captures the impossible—a cumulus cloud, weightless and dreamlike, suspended within the confines of a clear glass bottle. The cork, casually resting beside it, suggests recent containment or release. Set against a soft, gradient blue backdrop and a simple wooden surface, the scene evokes serenity, restraint, and the yearning to capture freedom in form. The reflection on the bottle’s surface subtly hints at an unseen window, layering the idea of the outside world looking in. This artwork is deeply aligned with the aesthetic and conceptual DNA of LiveTheLife.TV—a sanctuary where high-art sensibilities meet digital transcendence. It speaks to a collector’s instinct to preserve beauty, but also to the melancholic futility of trying to contain the ethereal. A metaphor for bottled dreams, passing moments, or the tension between control and chaos—this piece belongs in a world where art is not just seen, but felt.`;
  const contractImage = "/arty.png";
  const pricePerToken = 0.01;
  const currencySymbol = "ETH";
  // Example minting phase data
  const mintPhases = [
    { phase: "Presale", price: "0.008 ETH", status: "Ended" },
    { phase: "Public Mint", price: "0.01 ETH", status: "Live" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Title, Description, Connect Button, Price, Mint Phases */}
          <motion.div
            className="space-y-8 pr-4 md:pr-8 lg:pr-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="uppercase tracking-widest text-gray-400 text-xs mb-2">AI ART by LTL</div>
            <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-white mb-4">{displayName}</h1>
            <p className="text-lg text-gray-200 whitespace-pre-line mb-8">{description}</p>
            <div className="space-y-4">
              <ConnectButton
                client={client}
                connectButton={{
                  style: {
                    backgroundColor: '#F7B500',
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    borderRadius: 8,
                    padding: '18px 32px',
                    boxShadow: '0 4px 0 #000',
                    marginBottom: 8,
                  },
                  label: 'Connect Wallet',
                }}
              />
              <div className="text-xl font-bold text-yellow-500">
                {pricePerToken} {currencySymbol}
              </div>
              <div className="space-y-2 mt-4">
                {mintPhases.map((phase, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="text-base font-semibold text-white/80 w-28">{phase.phase}</span>
                    <span className="text-base text-yellow-500 font-bold">{phase.price}</span>
                    <span className={`text-xs px-2 py-1 rounded ${phase.status === 'Live' ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-gray-300'}`}>{phase.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Right Side: NFT Image */}
          <motion.div
            className="relative h-[400px] md:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src={contractImage}
              alt={displayName}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
