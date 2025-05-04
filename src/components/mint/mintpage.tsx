"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import type { ThirdwebContract } from "thirdweb";
import {
  ClaimButton,
  ConnectButton,
  MediaRenderer,
  useActiveAccount,
} from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";
import React from "react";
import { toast } from "sonner";
import { getActiveClaimCondition } from "thirdweb/extensions/erc721";
import { motion } from "framer-motion";

type Props = {
  contract: ThirdwebContract;
  displayName: string;
  description: string;
  contractImage: string;
  pricePerToken: number | null;
  currencySymbol: string | null;
  isERC1155: boolean;
  isERC721: boolean;
  tokenId: string;
};

export function MintPage(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const account = useActiveAccount();
  const [claimCondition, setClaimCondition] = useState<Awaited<ReturnType<typeof getActiveClaimCondition>> | null>(null);
  const tokenIdBigInt = BigInt(props.tokenId);

  useEffect(() => {
    async function fetchClaimCondition() {
      try {
        const condition = await getActiveClaimCondition({ contract: props.contract });
        setClaimCondition(condition);
      } catch {
        setClaimCondition(null);
      }
    }
    fetchClaimCondition();
  }, [props.contract]);

  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!Number.isNaN(value)) setQuantity(Math.max(1, value));
  };

  if (props.pricePerToken === null || props.pricePerToken === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-[#111]">
      {/* Left column */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-8 py-12 max-w-xl mx-auto"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="mb-4 text-xs tracking-widest text-gray-400 font-semibold uppercase">Eliza Edition</div>
        <h1 className="text-6xl font-extrabold mb-6 font-serif text-black dark:text-white">{props.displayName}</h1>
        <p className="text-lg text-black dark:text-white mb-8">{props.description}</p>
        {!account ? (
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
                width: '100%'
              },
              label: 'Connect Wallet',
            }}
          />
        ) : (
          <>
            <div className="flex items-center justify-between mb-4 mt-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-28 text-center rounded-none border-x-0 pl-6"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-base pr-1 font-semibold dark:text-white">
                Total: {props.pricePerToken * quantity} {props.currencySymbol}
              </div>
            </div>
            <ClaimButton
              theme={"light"}
              contractAddress={props.contract.address}
              chain={props.contract.chain}
              client={props.contract.client}
              claimParams={
                props.isERC1155
                  ? {
                      type: "ERC1155",
                      tokenId: tokenIdBigInt,
                      quantity: BigInt(quantity),
                      to: account.address,
                      from: account.address,
                    }
                  : props.isERC721
                  ? {
                      type: "ERC721",
                      quantity: BigInt(quantity),
                      to: account.address,
                      from: account.address,
                    }
                  : {
                      type: "ERC20",
                      quantity: String(quantity),
                      to: account.address,
                      from: account.address,
                    }
              }
              style={{
                backgroundColor: "#F7B500",
                color: "black",
                width: "100%",
                fontWeight: 700,
                fontSize: 18,
                borderRadius: 8,
                padding: "18px 32px",
                boxShadow: "0 4px 0 #000",
                marginBottom: 8,
              }}
              disabled={false}
              onTransactionSent={() => toast.info("Minting NFT")}
              onTransactionConfirmed={() => toast.success("Minted successfully")}
              onError={(err) => toast.error(err.message)}
            >
              Mint{quantity > 1 ? ` (${quantity})` : ""}
            </ClaimButton>
            {claimCondition && (
              <div className="mt-6 bg-[#181818] border border-yellow-500/40 rounded-lg px-6 py-4 text-white max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Max Supply</span>
                  <span className="text-lg font-bold text-yellow-400">
                    {claimCondition.maxClaimableSupply ? Number(claimCondition.maxClaimableSupply.toString()).toLocaleString() : '—'}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black font-semibold">
                    Minting Live
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
      {/* Right column */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-transparent p-8"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <MediaRenderer
          client={client}
          className="rounded-lg object-cover w-full max-w-lg aspect-[4/3] shadow-lg"
          alt={props.displayName}
          src={props.contractImage || "/arty.png"}
        />
      </motion.div>
    </div>
  );
}
