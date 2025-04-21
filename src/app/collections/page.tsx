'use client';

import { Layout } from '@/components/ui';
import { CURATED_COLLECTIONS } from '@/config/collections';
import { Web3ErrorBoundary } from '@/components/web3/Web3ErrorBoundary';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CollectionsPage() {
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
                    Curated<br />Collections
                  </h1>
                  <p className="text-white/80 text-xl sm:text-2xl max-w-2xl font-satoshi pl-2">
                    Explore our handpicked selection of the most iconic NFT collections on Ethereum.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Collections Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-[2000px] mx-auto px-6 pb-32"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {CURATED_COLLECTIONS.map((collection, index) => (
                <motion.div
                  key={collection.address}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="group relative aspect-square cursor-pointer"
                >
                  <Link href={`/collections/${collection.address}`}>
                    {/* Card Container with Hover Effects */}
                    <div className="absolute inset-0 rounded-lg bg-[#1c1f26] overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] border-2 border-yellow-500/30 hover:border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent" />
                      </div>

                      {/* Image Container */}
                      <div className="absolute inset-0 transform transition-transform duration-500">
                        <Image
                          src={collection.image_url || '/images/placeholder-logo.png'}
                          alt={collection.name}
                          fill
                          className="object-cover transform transition-all duration-500 ease-out group-hover:scale-[1.15]"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <h3 className="text-xl font-bold text-yellow-400 font-epilogue tracking-tight mb-2">
                              {collection.name}
                            </h3>
                            {collection.description && (
                              <p className="text-sm text-white/60 line-clamp-2 mb-3 font-satoshi">
                                {collection.description}
                              </p>
                            )}
                            <div className="h-[2px] w-12 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200 origin-left" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Web3ErrorBoundary>
    </Layout>
  );
} 