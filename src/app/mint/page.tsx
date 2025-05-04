'use client'

import { useEffect, useState } from "react";
import { Header } from '@/components/Header'
import { MintPage } from "@/components/mint/mintpage";
import { getERC721Info } from "@/lib/erc721";
import { contract } from "@/lib/constants";
import Head from "next/head";
import Image from "next/image";

export default function Mint() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC721Info>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mintedTokenId, setMintedTokenId] = useState<string | null>(null);

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
                onMinted={setMintedTokenId}
              />
            </div>
            {/* Right column: Art and View NFT link */}
            <div className="flex-1 flex flex-col items-center justify-center bg-transparent p-4 md:p-8">
              <div className="relative max-w-2xl w-full h-[50vh] md:h-[70vh] flex items-center justify-center group pt-24 md:pt-0">
                <Image
                  src={nftInfo.contractImage || "/arty.png"}
                  alt={nftInfo.displayName}
                  width={800}
                  height={1000}
                  className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
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
