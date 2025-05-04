'use client'

import { useEffect, useState } from "react";
import { Header } from '@/components/Header'
import { MintPage } from "@/components/mint/mintpage";
import { getERC721Info } from "@/lib/erc721";
import { contract } from "@/lib/constants";
import Head from "next/head";

export default function Mint() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC721Info>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
          <MintPage
            contract={contract}
            displayName={nftInfo.displayName}
            description={nftInfo.description}
            contractImage={nftInfo.contractImage}
            pricePerToken={nftInfo.pricePerToken}
            currencySymbol={nftInfo.currencySymbol}
            isERC1155={false}
            isERC721={true}
            tokenId={"1"}
          />
        )}
      </div>
    </>
  )
}
