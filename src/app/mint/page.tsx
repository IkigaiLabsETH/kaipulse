'use client'

import { useEffect, useState } from "react";
import { Header } from '@/components/Header'
import { MintPage } from "@/components/mint/mintpage";
import { getERC721Info } from "@/lib/erc721";
import { contract } from "@/lib/constants";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Mint() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC721Info>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mintedTokenId, setMintedTokenId] = useState<string | null>(null);
  const [mintedImageUrl, setMintedImageUrl] = useState<string | null>(null);
  const [mintedImageLoading, setMintedImageLoading] = useState(false);
  const [mintedImageError, setMintedImageError] = useState(false);

  useEffect(() => {
    async function fetchInfo() {
      try {
        setLoading(true);
        const info = await getERC721Info(contract);
        setNftInfo(info);
        setError(null);
      } catch {
        setError("Failed to load contract info. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchInfo();
  }, []);

  // Helper to fetch NFT metadata from OpenSea
  async function fetchMintedImage(tokenId: string) {
    setMintedImageLoading(true);
    setMintedImageError(false);
    try {
      const res = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/contract/${contract.address}/nfts/${tokenId}`);
      const data = await res.json();
      // OpenSea v2 returns metadata.image_url or metadata.image
      const imageUrl = data.nft?.metadata?.image_url || data.nft?.metadata?.image || null;
      if (imageUrl) setMintedImageUrl(imageUrl);
      else setMintedImageError(true);
    } catch {
      setMintedImageUrl(null);
      setMintedImageError(true);
    }
    setMintedImageLoading(false);
  }

  // Update onMinted callback to fetch image
  const handleMinted = (tokenId: string) => {
    setMintedTokenId(tokenId);
    fetchMintedImage(tokenId);
  };

  return (
    <>
      <Head>
        <title>{nftInfo?.displayName || "Mint NFT"} | LIVETHELIFETV</title>
        <meta name="description" content={nftInfo?.description || "Mint your NFT on LIVETHELIFETV."} />
        <meta property="og:title" content={`${nftInfo?.displayName || "Mint NFT"} | LIVETHELIFETV`} />
        <meta property="og:description" content={nftInfo?.description || "Mint your NFT on LIVETHELIFETV."} />
        <meta property="og:image" content={nftInfo?.contractImage || "/arty.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Header />
        {error && (
          <div className="flex items-center justify-center min-h-[40vh] text-red-500 text-lg">{error}</div>
        )}
        {loading && !error && (
          <div className="flex items-center justify-center min-h-[40vh] text-yellow-500 text-lg">Loading...</div>
        )}
        {!loading && !error && nftInfo && (
          <div className="flex flex-col-reverse md:flex-row min-h-screen bg-white dark:bg-[#111] transition-colors duration-200">
            {/* Left column: Mint UI */}
            <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-8 md:py-12 max-w-xl mx-auto">
              <MintPage
                contract={contract}
                displayName={nftInfo.displayName}
                description={nftInfo.description}
                contractImage={nftInfo.contractImage}
                pricePerToken={nftInfo.pricePerToken}
                currencySymbol={nftInfo.currencySymbol}
                isERC1155={false}
                isERC721={true}
                onMinted={handleMinted}
              />
            </div>
            {/* Right column: Art and View NFT link */}
            <div className="flex-1 flex flex-col items-center justify-center bg-transparent p-4 md:p-8">
              <div className="relative max-w-2xl w-full h-[50vh] md:h-[70vh] flex items-center justify-center group pt-24 md:pt-0">
                {/* Cinematic shimmer/pulse while loading minted image */}
                {mintedImageLoading && (
                  <motion.div
                    className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl"
                    initial={{ opacity: 0.7, scale: 1 }}
                    animate={{ opacity: [0.7, 0.4, 0.7], scale: [1, 1.08, 1.15] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    style={{
                      background: 'radial-gradient(circle, rgba(247,181,0,0.25) 0%, rgba(247,181,0,0.12) 60%, transparent 100%)',
                      filter: 'blur(18px)',
                      borderRadius: 16,
                    }}
                  />
                )}
                {/* Fallback: blurred contract image if error */}
                {mintedImageError && (
                  <Image
                    src={nftInfo.contractImage || "/arty.png"}
                    alt={nftInfo.displayName}
                    width={800}
                    height={1000}
                    className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain blur-sm opacity-70"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                )}
                {/* Fade in the minted image if available and not loading/error */}
                {!mintedImageLoading && !mintedImageError && mintedImageUrl && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full h-full"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image
                      src={mintedImageUrl}
                      alt={nftInfo.displayName}
                      width={800}
                      height={1000}
                      className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                      onLoadingComplete={() => setMintedImageLoading(false)}
                      onError={() => setMintedImageError(true)}
                    />
                  </motion.div>
                )}
                {/* Default: contract image if nothing else */}
                {!mintedImageLoading && !mintedImageError && !mintedImageUrl && (
                  <Image
                    src={nftInfo.contractImage || "/arty.png"}
                    alt={nftInfo.displayName}
                    width={800}
                    height={1000}
                    className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                )}
              </div>
              {/* View your NFT link under the image */}
              {mintedTokenId && (
                <a
                  href={`https://opensea.io/assets/${contract.address}/${mintedTokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-yellow-400 font-bold underline text-2xl font-epilogue hover:text-yellow-300 transition-colors"
                >
                  View your NFT
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
