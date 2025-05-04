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
          {/* On mobile, image on top; on desktop, image on right */}
          <motion.div
            className="order-1 md:order-2 relative flex flex-col items-center justify-center h-[40vh] md:h-[80vh] w-full md:w-[50vw]"
            style={{ minHeight: '300px', height: '100%', width: '100%' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {nftInfo ? (
              <Image
                src={nftInfo.contractImage || "/arty.png"}
                alt={nftInfo.displayName || "NFT"}
                className="object-cover rounded-xl w-full h-full"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="bg-gray-800 w-full h-full rounded-xl animate-pulse" />
            )}
          </motion.div>
          <motion.div
            className="order-2 md:order-1 space-y-8 pr-4 md:pr-8 lg:pr-12 flex flex-col justify-center h-full"
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
              {/* Mint Phase Price Only */}
              {nftInfo ? (
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-4">
                    <span className="text-base font-semibold text-white/80 w-28">Public Mint</span>
                    <span className="text-base text-yellow-500 font-bold">{nftInfo.pricePerToken} {nftInfo.currencySymbol}</span>
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">Live</span>
                  </div>
                </div>
              ) : (
                <div className="text-yellow-500">Loading claim conditions...</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
