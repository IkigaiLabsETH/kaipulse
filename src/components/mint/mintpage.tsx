"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import type { ThirdwebContract } from "thirdweb";
import {
  ClaimButton,
  ConnectButton,
  useActiveAccount,
} from "thirdweb/react";
import { client } from "@/lib/thirdwebClient";
import React from "react";
import { toast } from "sonner";
import { getActiveClaimCondition } from "thirdweb/extensions/erc721";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  contract: ThirdwebContract;
  displayName: string;
  description: string;
  contractImage: string;
  pricePerToken: number | null;
  currencySymbol: string | null;
  isERC1155: boolean;
  isERC721: boolean;
  tokenId?: string;
  onMinted?: (tokenId: string) => void;
  onCelebration?: () => void;
};

type MinimalClaimCondition = {
  startTimestamp?: string | number | bigint;
  maxClaimablePerWallet?: number | bigint;
};

export function MintPage(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const account = useActiveAccount();
  const [claimCondition, setClaimCondition] = useState<Awaited<ReturnType<typeof getActiveClaimCondition>> | null>(null);
  const tokenIdBigInt = props.isERC1155 && props.tokenId ? BigInt(props.tokenId) : undefined;
  const [showCelebration, setShowCelebration] = useState(false);
  const celebrationTimeout = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showGlowPulse, setShowGlowPulse] = useState(false);
  const [mintedImageUrl, setMintedImageUrl] = useState<string | null>(null);
  const [mintedImageLoading, setMintedImageLoading] = useState(false);
  const [mintedImageError, setMintedImageError] = useState(false);
  const [mintedTokenId, setMintedTokenId] = useState<string | null>(null);

  // Countdown logic for claim phase
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);
  function getCountdown(ts: string | number | bigint | undefined) {
    if (!ts) return null;
    const diff = Number(ts) * 1000 - now;
    if (diff <= 0) return null;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return `${d > 0 ? d + 'd ' : ''}${h}h ${m}m ${s}s`;
  }

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

  useEffect(() => {
    return () => {
      if (celebrationTimeout.current) clearTimeout(celebrationTimeout.current);
    };
  }, []);

  // Track user interaction for autoplay policy
  useEffect(() => {
    const handler = () => setUserInteracted(true);
    window.addEventListener('pointerdown', handler, { once: true });
    return () => window.removeEventListener('pointerdown', handler);
  }, []);

  // Play sound when celebration starts
  useEffect(() => {
    if (showCelebration && userInteracted && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [showCelebration, userInteracted]);

  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!Number.isNaN(value)) setQuantity(Math.max(1, value));
  };

  // Helper functions for claim phase status and formatting
  function formatDate(ts: string | number | bigint | undefined) {
    if (!ts) return null;
    const date = new Date(Number(ts.toString()) * 1000);
    return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  }
  function isLive(condition: MinimalClaimCondition) {
    const now = Date.now() / 1000;
    return (!condition.startTimestamp || now >= Number(condition.startTimestamp));
  }
  function isUpcoming(condition: MinimalClaimCondition) {
    const now = Date.now() / 1000;
    return !!condition.startTimestamp && now < Number(condition.startTimestamp);
  }

  // Helper: is claimable
  function isClaimable() {
    if (!claimCondition) return false;
    // If maxClaimablePerWallet is 0, or claimCondition is null, or other logic
    if (
      ('maxClaimablePerWallet' in claimCondition) &&
      ((claimCondition as MinimalClaimCondition).maxClaimablePerWallet === 0)
    ) {
      return false;
    }
    // Add more checks as needed (e.g., sold out, phase ended, etc.)
    return true;
  }

  // Fetch NFT metadata from OpenSea after mint
  async function fetchMintedImage(tokenId: string) {
    setMintedImageLoading(true);
    setMintedImageError(false);
    try {
      const res = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/contract/${props.contract.address}/nfts/${tokenId}`);
      const data = await res.json();
      const imageUrl = data.nft?.metadata?.image_url || data.nft?.metadata?.image || null;
      if (imageUrl) setMintedImageUrl(imageUrl);
      else setMintedImageError(true);
    } catch {
      setMintedImageUrl(null);
      setMintedImageError(true);
    }
    setMintedImageLoading(false);
  }

  if (props.pricePerToken === null || props.pricePerToken === undefined) {
    return null;
  }

  return (
    <div className={`flex flex-col-reverse md:flex-row min-h-screen bg-white dark:bg-[#111] transition-colors duration-200`}>
      {/* Left column: Mint UI only, no image/media */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-4 md:px-8 py-8 md:py-12 max-w-xl mx-auto"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="mb-4 text-xs tracking-widest text-gray-400 font-semibold uppercase font-epilogue">AI ART by LTL</div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 font-epilogue text-black dark:text-white leading-tight">{props.displayName}</h1>
        <p className="text-lg md:text-xl text-black dark:text-white mb-8 font-satoshi">{props.description}</p>
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
            <div className="flex flex-col gap-4 mb-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-lg overflow-hidden border border-gray-700 bg-black/10">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="rounded-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-0 bg-transparent font-bold text-lg focus:ring-0"
                    min="1"
                    aria-label="Mint quantity"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                    className="rounded-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-base md:text-lg pr-1 font-semibold dark:text-white font-satoshi">
                  Total: {props.pricePerToken * quantity} {props.currencySymbol}
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 6px 0 #000' }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative"
            >
              {/* Golden Glow Pulse */}
              {showGlowPulse && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{ opacity: [0.7, 0.4, 0.7], scale: [1, 1.15, 1.25] }}
                  exit={{ opacity: 0, scale: 1.4 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  style={{
                    background: 'radial-gradient(circle, rgba(247,181,0,0.35) 0%, rgba(247,181,0,0.18) 60%, transparent 100%)',
                    filter: 'blur(16px)',
                    borderRadius: 16,
                  }}
                />
              )}
              <ClaimButton
                theme={"light"}
                contractAddress={props.contract.address}
                chain={props.contract.chain}
                client={props.contract.client}
                claimParams={
                  props.isERC1155 && tokenIdBigInt !== undefined
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
                  borderRadius: 12,
                  padding: "20px 32px",
                  boxShadow: "0 4px 0 #000",
                  marginBottom: 8,
                  outline: 'none',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                disabled={!isClaimable()}
                onTransactionSent={() => {
                  setShowGlowPulse(true);
                  toast.info("Minting NFT");
                }}
                onTransactionConfirmed={async () => {
                  toast.success("Minted successfully");
                  setShowGlowPulse(false);
                  setShowCelebration(true);
                  if (celebrationTimeout.current) clearTimeout(celebrationTimeout.current);
                  // Hide celebration after 2 seconds, then fetch NFT image
                  celebrationTimeout.current = setTimeout(async () => {
                    setShowCelebration(false);
                    // Fetch latest NFT for user (ERC721 only)
                    if (props.isERC721 && account?.address) {
                      try {
                        const res = await fetch(`https://api.opensea.io/api/v2/chain/ethereum/account/${account.address}/nfts?contractAddress=${props.contract.address}&limit=1&orderBy=acquired_at&orderDirection=desc`);
                        const data = await res.json();
                        const latest = data.nfts?.[0];
                        if (latest && latest.token_id) {
                          fetchMintedImage(latest.token_id);
                          setMintedTokenId(latest.token_id); // Store token ID for OpenSea link
                          if (props.onMinted) props.onMinted(latest.token_id);
                        }
                      } catch {}
                    }
                  }, 2000);
                }}
                onError={(err) => {
                  setShowGlowPulse(false);
                  toast.error(err.message);
                }}
              >
                {!isClaimable() ? "Sold out" : `Mint${quantity > 1 ? ` (${quantity})` : ""}`}
              </ClaimButton>
              {/* User feedback if not claimable */}
              {!isClaimable() && (
                <div className="mt-2 text-yellow-400 text-sm font-satoshi">Sold out or you have already minted this NFT.</div>
              )}
            </motion.div>
            {claimCondition && (
              <div className="mt-12 max-w-md">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-epilogue font-bold tracking-widest uppercase text-gray-400">Mint Phase</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-semibold align-middle ml-1 ${isLive(claimCondition) ? 'bg-green-500 text-black' : isUpcoming(claimCondition) ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'}`}>{isLive(claimCondition) ? 'Live' : isUpcoming(claimCondition) ? 'Upcoming' : 'Ended'}</span>
                  {isUpcoming(claimCondition) && claimCondition.startTimestamp && (
                    <span className="ml-2 text-xs text-yellow-400 font-satoshi">Starts in {getCountdown(claimCondition.startTimestamp)}</span>
                  )}
                </div>
                <div className="space-y-1 font-satoshi text-base text-white/90">
                  {claimCondition.startTimestamp && (
                    <div className="pt-2 flex items-center gap-2">
                      <span className="font-semibold text-white font-epilogue flex items-center"><svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 6v6l4 2"/></svg>Start:</span>{' '}
                      {formatDate(claimCondition.startTimestamp)}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white font-epilogue flex items-center"><svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M18 6L6 18"/><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/></svg>Price:</span>{' '}
                    {props.pricePerToken} {props.currencySymbol}
                  </div>
                  {('maxClaimablePerWallet' in claimCondition) &&
                    (typeof (claimCondition as MinimalClaimCondition).maxClaimablePerWallet === 'number' || typeof (claimCondition as MinimalClaimCondition).maxClaimablePerWallet === 'bigint') ? (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white font-epilogue flex items-center"><svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"/></svg>Per Wallet:</span>{' '}
                      {(claimCondition as MinimalClaimCondition).maxClaimablePerWallet!.toString()}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
      {/* Right column: Art and cinematic effects */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-transparent p-4 md:p-8"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative max-w-2xl w-full h-[50vh] md:h-[70vh] flex items-center justify-center group pt-24 md:pt-0">
            {/* Audio for cinematic effect */}
            <audio ref={audioRef} src="/sounds/camera-shutter-mint.mp3" preload="auto" tabIndex={-1} aria-hidden="true" />
            {/* Soft yellow glow/gradient behind art */}
            <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10 blur-2xl" />
            {/* Cinematic celebration animation */}
            {showCelebration && (
              <>
                {/* Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,200,0.32) 50%, rgba(255,255,255,0.18) 60%, transparent 100%)',
                    filter: 'blur(12px)',
                  }}
                />
                {/* Minted! Text Overlay */}
                <motion.div
                  className="absolute inset-0 z-30 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ pointerEvents: 'none' }}
                >
                  <span className="text-5xl md:text-7xl font-epilogue font-extrabold text-yellow-400 drop-shadow-lg tracking-wide animate-pulse">
                    Minted!
                  </span>
                </motion.div>
              </>
            )}
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
                src={props.contractImage || "/arty.png"}
                alt={props.displayName}
                width={800}
                height={1000}
                className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain blur-sm opacity-70"
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
                  alt={props.displayName}
                  width={800}
                  height={1000}
                  className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                />
                {/* OpenSea link below the image */}
                {mintedTokenId && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href={`https://opensea.io/assets/ethereum/${props.contract.address}/${mintedTokenId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition"
                    >
                      View on OpenSea
                    </a>
                  </div>
                )}
              </motion.div>
            )}
            {/* Default: contract image if nothing else */}
            {!mintedImageLoading && !mintedImageError && !mintedImageUrl && (
              <Image
                src={props.contractImage || "/arty.png"}
                alt={props.displayName}
                width={800}
                height={1000}
                className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
