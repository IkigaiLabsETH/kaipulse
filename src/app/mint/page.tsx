'use client'

import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/thirdwebClient"
import { getERC721Info } from "@/lib/erc721";
import { contract } from "@/lib/constants";
import Image from "next/image";

export default function Mint() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC721Info>> | null>(null);

  useEffect(() => {
    async function fetchInfo() {
      const info = await getERC721Info(contract);
      setNftInfo(info);
    }
    fetchInfo();
  }, []);

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
            <h1 className="font-epilogue text-6xl md:text-7xl font-bold text-white mb-4">{nftInfo?.displayName || "..."}</h1>
            <p className="text-lg text-gray-200 whitespace-pre-line mb-8">{nftInfo?.description || "..."}</p>
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
              {/* Real Claim Condition Display */}
              {nftInfo ? (
                <>
                  <div className="text-xl font-bold text-yellow-500">
                    {nftInfo.pricePerToken} {nftInfo.currencySymbol}
                  </div>
                  {/* You can expand this to show more phases if your contract supports it */}
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-4">
                      <span className="text-base font-semibold text-white/80 w-28">Public Mint</span>
                      <span className="text-base text-yellow-500 font-bold">{nftInfo.pricePerToken} {nftInfo.currencySymbol}</span>
                      <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">Live</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-yellow-500">Loading claim conditions...</div>
              )}
            </div>
          </motion.div>
          {/* Right Side: NFT Image */}
          <motion.div
            className="relative h-[400px] md:h-[600px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {nftInfo ? (
              <>
                <Image
                  src={nftInfo.contractImage || "/arty.png"}
                  alt={nftInfo.displayName || "NFT"}
                  className="object-cover rounded-xl w-full h-[300px] md:h-[500px] mb-4"
                  width={800}
                  height={800}
                  priority
                />
                <div className="text-3xl font-bold text-white mt-2">{nftInfo.displayName}</div>
                <div className="text-lg text-gray-200 mt-2">{nftInfo.description}</div>
              </>
            ) : (
              <div className="bg-gray-800 w-full h-full rounded-xl animate-pulse" />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
