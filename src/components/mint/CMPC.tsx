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
import { getActiveClaimCondition } from "thirdweb/extensions/erc1155";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GasStats } from './GasStats';

type Props = {
  contract: ThirdwebContract;
  displayName: string;
  description: string;
  contractImage: string;
  pricePerToken: number | null;
  currencySymbol: string | null;
  isERC1155: boolean;
  tokenId: string;
  onMinted?: (tokenId: string) => void;
  onCelebration?: () => void;
};

type MinimalClaimCondition = {
  startTimestamp?: string | number | bigint;
  maxClaimablePerWallet?: number | bigint;
};

// Utility to convert ipfs:// URLs to https://ipfs.io/ipfs/
function ipfsToHttp(url?: string | null): string {
  if (!url) return '';
  if (url.startsWith('ipfs://')) {
    return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
  }
  return url;
}

export function CMPC(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const account = useActiveAccount();
  const [claimCondition, setClaimCondition] = useState<Awaited<ReturnType<typeof getActiveClaimCondition>> | null | undefined>(undefined);
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

  // Only fetch claim condition on mount or when contract/tokenId changes, with debounce
  useEffect(() => {
    let didCancel = false;
    let timeout: NodeJS.Timeout | null = null;

    timeout = setTimeout(() => {
      async function fetchClaimCondition() {
        setClaimCondition(undefined); // loading
        try {
          const tokenId = props.tokenId.toString().trim();
          const condition = await getActiveClaimCondition({
            contract: props.contract,
            tokenId: BigInt(tokenId),
          });
          if (!didCancel) setClaimCondition(condition);
        } catch {
          if (!didCancel) setClaimCondition(null);
        }
      }
      fetchClaimCondition();
    }, 200);

    return () => {
      didCancel = true;
      if (timeout) clearTimeout(timeout);
    };
  }, [props.contract, props.tokenId]);

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
    if (
      ('maxClaimablePerWallet' in claimCondition) &&
      ((claimCondition as MinimalClaimCondition).maxClaimablePerWallet === 0)
    ) {
      return false;
    }
    return true;
  }

  // Fetch NFT metadata from local API after mint
  async function fetchMintedImage(tokenId: string) {
    setMintedImageLoading(true);
    setMintedImageError(false);
    try {
      const res = await fetch(`/api/collections/${props.contract.address}/${tokenId}`);
      const data = await res.json();
      const imageUrl = data.nft?.image_url || null;
      if (imageUrl) setMintedImageUrl(imageUrl);
      else setMintedImageError(true);
    } catch {
      setMintedImageUrl(null);
      setMintedImageError(true);
    }
    setMintedImageLoading(false);
  }

  // Helper to fetch latest NFT from OpenSea via backend proxy
  async function fetchLatestMintedNFT(accountAddress: string, contractAddress: string): Promise<string | null> {
    try {
      const res = await fetch(`/api/opensea/latest-nft?account=${accountAddress}&contract=${contractAddress}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.token_id || null;
    } catch {
      return null;
    }
  }

  // Loading state
  if (claimCondition === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-yellow-400 text-xl font-bold">
        Loading mint info...
      </div>
    );
  }

  // Graceful error state if no claim condition
  if (claimCondition === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500 text-xl font-bold">
        Minting is not available yet. Please check back soon.
      </div>
    );
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
        <div className="mb-4 text-xs tracking-widest text-gray-400 font-semibold uppercase font-epilogue">CHROMO-MYTHIC POP</div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 font-epilogue text-black dark:text-white leading-tight">Ethereal Visions</h1>
        <p className="text-lg md:text-xl text-black dark:text-white mb-8 font-satoshi">
          Color is the new language.<br />
          Symbol is the new scripture.<br />
          The canvas is no longer still.
        </p>

        {/* Manifesto Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="mb-6 w-full bg-black/10 hover:bg-black/20 text-white border-yellow-500/50 hover:border-yellow-500 transition-colors"
            >
              Read the Manifesto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black/95 border-yellow-500/50 text-white">
            <DialogHeader>
              <DialogTitle className="text-3xl font-epilogue text-yellow-400 mb-6">CHROMO-MYTHIC POP</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 font-satoshi">
              <p className="text-xl text-yellow-400/90 font-semibold">A New Visual Religion For The Digital Age</p>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Chromo-Mythic Pop</strong> isn&apos;t just an art movement—it&apos;s a call to reawaken meaning through modern myth. In a world oversaturated with content, this is the return of the sacred <em>image</em>.
                </p>
                <p className="text-lg">
                  We&apos;ve taken the bold clarity of Pop Art and charged it with the spiritual depth of the masters. Think Warhol with soul. Klimt with attitude. Basquiat with balance. Rothko with rhythm.
                </p>
                <p className="text-lg font-semibold text-yellow-400">This is the First Incantation.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-epilogue text-yellow-400">WE BELIEVE</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>That color is a portal.</li>
                  <li>That symbols are alive.</li>
                  <li>That fractured faces hold entire histories.</li>
                  <li>That repetition is not redundancy, but ritual.</li>
                  <li>That modern myths must be created consciously.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  Each Chromo-Mythic artwork is a <strong>living glyph</strong>—a visual incantation encoded with pop culture energy, spiritual resonance, and layered storytelling.
                </p>
                <p className="text-lg">
                  You are not just collecting art. You are invoking a fragment of the <strong>New Myth</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-epilogue text-yellow-400">WHAT YOU RECEIVE</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>A vibrant, animated artwork in the Chromo-Mythic Pop style.</li>
                  <li>Unlockable Manifesto PDF: the full philosophy, design language, and symbols.</li>
                  <li>Early access to drops + the upcoming <strong>Glyph Generator</strong>.</li>
                  <li>Entry into a myth-building collective. On-chain and IRL.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-epilogue text-yellow-400">MINTING NOW</h3>
                <p className="text-lg">Mint the First Incantation. Become a Mythkeeper.</p>
              </div>

              <blockquote className="border-l-4 border-yellow-500/50 pl-4 py-2 italic">
                &ldquo;We speak in shapes. We shout in color. We remember what was forgotten.&rdquo;
                <footer className="mt-2 text-yellow-400/80">Chromo-Mythic Pop // 2025</footer>
              </blockquote>
            </div>
          </DialogContent>
        </Dialog>

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
                  celebrationTimeout.current = setTimeout(async () => {
                    setShowCelebration(false);
                    if (props.isERC1155 && account?.address) {
                      let latestTokenId = null;
                      for (let attempt = 0; attempt < 3; attempt++) {
                        latestTokenId = await fetchLatestMintedNFT(account.address, props.contract.address);
                        if (latestTokenId) break;
                        await new Promise(res => setTimeout(res, 1000));
                      }
                      if (latestTokenId) {
                        fetchMintedImage(latestTokenId);
                        setMintedTokenId(latestTokenId);
                        if (props.onMinted) props.onMinted(latestTokenId);
                      }
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
                <div className="mt-6">
                  <GasStats />
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
                src={ipfsToHttp(props.contractImage) || "/arty.png"}
                alt={props.displayName}
                width={800}
                height={1000}
                className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain blur-sm opacity-70"
                unoptimized={true}
              />
            )}
            {/* Fade in the minted image if available and not loading/error */}
            {!mintedImageLoading && !mintedImageError && mintedImageUrl && (
              <motion.div
                key={mintedImageUrl}
                initial={{ opacity: 0, scale: 0.95, boxShadow: '0 0 0px #F7B500' }}
                animate={{ opacity: 1, scale: 1, boxShadow: '0 0 60px #F7B50088' }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="w-full h-full"
                style={{ position: 'absolute', inset: 0, zIndex: 10 }}
              >
                <Image
                  src={ipfsToHttp(mintedImageUrl)}
                  alt={props.displayName}
                  width={800}
                  height={1000}
                  className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                  unoptimized={true}
                />
              </motion.div>
            )}
            {/* Default: contract image if nothing else */}
            {!mintedImageLoading && !mintedImageError && !mintedImageUrl && (
              <Image
                src={ipfsToHttp(props.contractImage) || "/arty.png"}
                alt={props.displayName}
                width={800}
                height={1000}
                className="bg-[#181818] rounded-2xl shadow-2xl border-4 border-yellow-500 p-2 w-full h-full object-contain"
                unoptimized={true}
              />
            )}
          </div>
        </div>
        {/* OpenSea link always shown if mintedTokenId is set */}
        {mintedTokenId && (
          <>
            {/* View NFT Details link (to our own app) */}
            <div className="mt-6 flex justify-center">
              <a
                href={`/collections/${props.contract.address}/${mintedTokenId}`}
                className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-500 transition border-2 border-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                View NFT Details
                <svg className="ml-2" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 17L17 7M17 7H7m10 0v10"/></svg>
              </a>
            </div>
            {/* View All Minted NFTs link */}
            <div className="mt-4 flex justify-center">
              <a
                href="/collections/0x1dd24550890ced98f4166968fca1d5e7bf5dea77"
                className="inline-flex items-center px-4 py-2 bg-black text-yellow-400 font-bold rounded-lg shadow hover:bg-yellow-500 hover:text-black transition border-2 border-yellow-400"
              >
                View All Minted NFTs
                <svg className="ml-2" width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 17L17 7M17 7H7m10 0v10"/></svg>
              </a>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
} 