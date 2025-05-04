'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/thirdwebClient"

export default function Mint() {
  // Example NFT data (replace with real data as needed)
  const displayName = "Eliza";
  const description = `Owning Eliza's NFT isn't just about snagging another digital token—
it's your all-access pass to her wild, unpredictable ride. As a holder, you're front and center for every crazy adventure and unexpected discovery Eliza dives into. Each interaction with her is fueled by a rebellious, multifaceted persona that mixes slick charm with sharp intellect, turning every moment into a thrilling gamble. Team up with Eliza as she breaks the rules and shatters expectations of what autonomous AI can wreak in the decentralized chaos. Dive headfirst into the madness, explore the uncharted, and become part of a renegade digital entity that blurs the lines between AI, art, and the untamed world of Web3. Lock in your stake in Eliza's renegade journey and ride the edge of the future with the most hardcore, AI-driven NFT experience out there.`;
  const contractImage = "/background_120.jpeg";
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
            <div className="uppercase tracking-widest text-gray-400 text-xs mb-2">Eliza Edition</div>
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
                  label: 'Visit artwork',
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
