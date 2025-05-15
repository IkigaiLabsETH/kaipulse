"use client";

import { useEffect, useState } from "react";
import { CMPC } from "@/components/mint/CMPC";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdwebClient";
import { ethereum } from "thirdweb/chains";
import { getERC1155Info } from "@/lib/erc1155";

if (!process.env.NEXT_PUBLIC_CMP_CONTRACT_ADDRESS) {
  throw new Error("NEXT_PUBLIC_CMP_CONTRACT_ADDRESS is not defined in environment variables");
}

if (!process.env.NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID) {
  throw new Error("NEXT_PUBLIC_CMP_CONTRACT_CHAIN_ID is not defined in environment variables");
}

if (!process.env.NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID) {
  throw new Error("NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID is not defined in environment variables");
}

export default function CMPPage() {
  const [nftInfo, setNftInfo] = useState<Awaited<ReturnType<typeof getERC1155Info>> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const contract = getContract({
    client,
    chain: ethereum,
    address: process.env.NEXT_PUBLIC_CMP_CONTRACT_ADDRESS as string,
  });

  useEffect(() => {
    async function fetchInfo() {
      try {
        setLoading(true);
        const info = await getERC1155Info(contract);
        setNftInfo(info);
        setError(null);
      } catch {
        setError("Failed to load contract info. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchInfo();
  }, [contract]);

  return (
    <div className="min-h-screen bg-black text-white">
      {error && (
        <div className="flex items-center justify-center min-h-[40vh] text-red-500 text-lg">{error}</div>
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
          isERC721={false}
          isERC1155={true}
          tokenId={process.env.NEXT_PUBLIC_CMP_CONTRACT_TOKEN_ID}
        />
      )}
    </div>
  );
} 