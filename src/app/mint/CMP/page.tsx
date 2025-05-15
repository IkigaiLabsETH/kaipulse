"use client";

import { useEffect, useState, useMemo } from "react";
import { CMPC } from "@/components/mint/CMPC";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdwebClient";
import { ethereum } from "thirdweb/chains";
import { getERC1155Info } from "@/lib/erc1155";
import Head from "next/head";

// Default values for development
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CMP_CONTRACT_ADDRESS || "0x3cf279b3248E164F3e5C341826B878d350EC6AB1";
// const CONTRACT_CHAIN_ID = process.env.NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID || "11155111"; // Removed unused variable
const CONTRACT_TOKEN_ID = process.env.NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID || "1";

export default function CMPPage() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC1155Info>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const contract = useMemo(() => getContract({
    client,
    chain: ethereum,
    address: CONTRACT_ADDRESS,
  }), []);

  useEffect(() => {
    let didCancel = false;
    async function fetchInfo() {
      try {
        setLoading(true);
        const tokenId = BigInt(CONTRACT_TOKEN_ID);
        const info = await getERC1155Info(contract, tokenId);
        if (!didCancel) {
          setNftInfo(info);
          setError(null);
        }
      } catch (err) {
        if (!didCancel) {
          setError(`Failed to load contract info: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
      } finally {
        if (!didCancel) setLoading(false);
      }
    }
    fetchInfo();
    return () => { didCancel = true; };
  }, [contract]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Mint | Ethereal Visions</title>
        <meta name="description" content="Mint your Chromo-Mythic Pop NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && (
        <div role="alert" className="flex items-center justify-center min-h-[40vh] text-red-500 text-lg">{error}</div>
      )}
      {loading && !error && (
        <div className="flex items-center justify-center min-h-[40vh] text-yellow-500 text-lg">Loading...</div>
      )}
      {!loading && !error && nftInfo && (
        <CMPC
          contract={contract}
          displayName={nftInfo.displayName}
          description={nftInfo.description}
          contractImage={nftInfo.contractImage}
          pricePerToken={nftInfo.pricePerToken}
          currencySymbol={nftInfo.currencySymbol}
          tokenId={CONTRACT_TOKEN_ID}
        />
      )}
    </div>
  );
} 