"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Epilogue } from 'next/font/google';
import type { OpenSeaNFT, Collection } from '@/services/opensea/types';
import { motion } from 'framer-motion';

const epilogue = Epilogue({ subsets: ['latin'], weight: ['400', '700', '900'], display: 'swap' });

export default function NFTContent({ nft, collection }: { nft: OpenSeaNFT; collection: Collection }) {
  const [copied, setCopied] = useState(false);
  const processImageUrl = (url: string | undefined | null): string => {
    if (!url || url === '/images/nft-placeholder.png') {
      return '/images/placeholder-nft.svg';
    }
    try {
      if (url.startsWith('ipfs://')) {
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      }
      new URL(url);
      return url;
    } catch {
      return '/images/placeholder-nft.svg';
    }
  };

  const imageUrl = processImageUrl(nft.image_url);
  const alt = nft.name ? `${nft.name} | ${collection.name}` : `${collection.slug} #${nft.identifier}`;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white antialiased">
      {/* Main Content */}
      <div className="relative flex flex-col-reverse md:flex-row w-full min-h-[80vh]">
        {/* Left: Info (on mobile, below image) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 py-8 md:py-0 max-w-xl md:max-w-2xl lg:max-w-3xl z-10 mt-0 md:mt-24 ${epilogue.className} items-start`}
        >
          <div className="flex items-center w-full mb-2 gap-3">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-yellow-400 leading-tight mt-2" style={{ fontFamily: 'Epilogue, sans-serif', letterSpacing: '-0.01em' }}
            >
              {nft.name || collection.name}
            </h1>
            {/* Share button */}
            <button
              onClick={handleShare}
              className="ml-2 p-2 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors cursor-pointer"
              aria-label="Copy link to clipboard"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" />
              </svg>
            </button>
            {copied && <span className="text-xs text-yellow-400 ml-2">Copied!</span>}
          </div>
          <div className="h-1 w-16 bg-yellow-400 rounded-full mb-6"></div>
          <h2 className="text-base md:text-lg font-semibold text-yellow-400 uppercase mb-2 tracking-widest" style={{ letterSpacing: '0.15em' }}>About this work</h2>
          <p className="text-white/90 text-base md:text-lg font-light mb-6 max-w-prose" style={{lineHeight: 1.7}}>{nft.description || collection.description}</p>
          {/* NFT Traits as tags */}
          {nft.traits && nft.traits.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {nft.traits.slice(0, 8).map((trait, i) => (
                <span key={i} className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                  {trait.trait_type}: {trait.value}
                </span>
              ))}
            </div>
          )}
          <div className="mt-2 flex flex-col items-start gap-0 w-full">
            <a
              href={`https://opensea.io/assets/ethereum/${nft.contract}/${nft.identifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-all duration-200 underline underline-offset-4 hover:underline cursor-pointer text-base md:text-lg font-medium mb-6"
            >
              View on OpenSea
            </a>
            <a
              href={`/collections/${collection.slug || nft.collection || nft.contract || ''}`}
              className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs md:text-sm uppercase tracking-widest hover:text-yellow-300 transition-all duration-200 underline underline-offset-4 hover:underline cursor-pointer mt-8"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back to Collection
            </a>
          </div>
        </motion.div>
        {/* Right: NFT Image (on mobile, on top) */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center relative min-h-[400px] md:min-h-0 md:static mt-0 md:mt-24"
        >
          <div className="relative w-screen h-screen md:absolute md:top-0 md:right-0 md:w-1/2 md:h-screen">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain', borderRadius: 0 }}
              className="w-full h-full shadow-2xl shadow-yellow-900/10"
              priority
              placeholder="blur"
              blurDataURL="/images/placeholder-nft-blur.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 