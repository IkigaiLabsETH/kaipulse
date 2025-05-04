"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import type { ThirdwebContract } from "thirdweb";
import {
  ClaimButton,
  ConnectButton,
  MediaRenderer,
  NFTProvider,
  NFTMedia,
  useActiveAccount,
  NFTName,
  NFTDescription,
} from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";
import React from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { getActiveClaimCondition } from "thirdweb/extensions/erc721";
import { safeStringify } from "@/utils/safeStringify";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="absolute top-4 right-4">
        <ConnectButton client={client} />
      </div>
      <Card className="w-full max-w-md">
        {account ? (
          <>
            <CardContent className="pt-6">
              <div className="aspect-square overflow-hidden rounded-lg mb-4 relative">
                {props.isERC1155 ? (
                  <NFTProvider contract={props.contract} tokenId={tokenIdBigInt}>
                    <NFTMedia
                      loadingComponent={<Skeleton className="w-full h-full object-cover" />}
                      className="w-full h-full object-cover"
                    />
                    <div className="mt-2">
                      <NFTName className="text-lg font-semibold dark:text-white" />
                      <NFTDescription className="text-gray-600 dark:text-gray-300 text-sm mt-1" />
                    </div>
                  </NFTProvider>
                ) : (
                  <MediaRenderer
                    client={client}
                    className="w-full h-full object-cover"
                    alt=""
                    src={props.contractImage || "/placeholder.svg?height=400&width=400"}
                  />
                )}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {props.pricePerToken} {props.currencySymbol}/each
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 dark:text-white">{props.displayName}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{props.description}</p>
              {claimCondition && (
                <div className="mt-4 p-4 bg-gray-800 rounded-lg text-white space-y-1">
                  {claimCondition.maxClaimableSupply && (
                    <div>Max Supply: {claimCondition.maxClaimableSupply.toString()}</div>
                  )}
                  {/* Fallback: show all claimCondition as JSON for debugging */}
                  <pre className="text-xs text-gray-300 bg-gray-900 rounded p-2 overflow-x-auto">{safeStringify(claimCondition)}</pre>
                </div>
              )}
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
            </CardContent>
            <CardFooter>
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
                Collect Art{quantity > 1 ? ` (${quantity})` : ""}
              </ClaimButton>
            </CardFooter>
          </>
        ) : (
          <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
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
          </CardContent>
        )}
      </Card>
      {/* Toast notification can be conditionally rendered based on your logic */}
    </div>
  );
}
