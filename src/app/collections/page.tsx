'use client';

import { Layout } from '@/components/ui';
import { Web3ErrorBoundary } from '@/components/web3/Web3ErrorBoundary';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Normalized NFT type from /api/floor-nfts
interface FloorNFT {
  collectionName: string;
  collectionAddress: string;
  collectionImage: string;
  nftName: string | null;
  nftImage: string | null;
  priceEth: number | null;
  priceUsd: number | null;
  listingUrl: string | null;
  fromCache: boolean;
  error?: string | null;
}

export default function CollectionsPage() {
  const [nfts, setNfts] = useState<FloorNFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNFTs() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/floor-nfts');
        const data = await res.json();
        setNfts(data.floorNFTs || []);
      } catch {
        setError('Failed to load NFTs.');
      } finally {
        setLoading(false);
      }
    }
    fetchNFTs();
  }, []);

  return (
    <Layout>
      <Web3ErrorBoundary>
        <div className="min-h-screen bg-black relative">
          {/* Ambient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
          </div>

          {/* Hero Section */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-[2000px] mx-auto px-6 pt-24 pb-20"
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-500 rounded-full mix-blend-overlay filter blur-xl opacity-20" />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <h1 className="relative text-7xl sm:text-8xl md:text-9xl font-bold text-yellow-400 mb-8 tracking-tight font-epilogue">
                    Featured
                  </h1>
                  <p className="text-white/80 text-xl sm:text-2xl max-w-2xl font-satoshi pl-2">
                    The best deals on the floor from our handpicked NFT collections.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* NFT Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-[2000px] mx-auto px-6 pb-32"
          >
            {loading ? (
              <div className="text-white text-xl py-20 text-center">Loading floor NFTs...</div>
            ) : error ? (
              <div className="text-red-500 text-xl py-20 text-center">{error}</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {nfts.map((nft, i) => (
                  <div
                    key={nft.listingUrl || nft.nftName || i}
                    className="bg-white border border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,0.8)] rounded-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(247,181,0,0.7)]"
                  >
                    <div className="relative aspect-square w-full bg-gray-100">
                      {nft.nftImage ? (
                        <Image
                          src={nft.nftImage}
                          alt={nft.nftName || nft.collectionName}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="font-bold text-lg mb-1 font-epilogue">
                          {nft.nftName || <span className="italic text-gray-400">No Name</span>}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">{nft.collectionName}</div>
                        {nft.priceEth && (
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-bold text-2xl">Ξ {nft.priceEth}</span>
                            {nft.priceUsd && (
                              <span className="text-xs text-gray-500">${nft.priceUsd}</span>
                            )}
                          </div>
                        )}
                        {nft.error && (
                          <div className="text-xs text-red-500 mt-2">{nft.error}</div>
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        {nft.listingUrl ? (
                          <Link
                            href={nft.listingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-500 transition"
                          >
                            View on OpenSea →
                          </Link>
                        ) : (
                          <span className="text-xs text-gray-400">Not for sale</span>
                        )}
                        <span className="ml-2 text-xs bg-black text-white px-2 py-1 rounded font-mono">
                          {nft.nftName?.split('#')[0] || nft.collectionName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </Web3ErrorBoundary>
    </Layout>
  );
} 