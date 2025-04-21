'use client';

import { Layout } from '@/components/ui';
import { CURATED_COLLECTIONS } from '@/config/collections';
import { Web3ErrorBoundary } from '@/components/web3/Web3ErrorBoundary';
import Image from 'next/image';

export default function CollectionsPage() {
  return (
    <Layout>
      <Web3ErrorBoundary>
        <div className="min-h-screen bg-[#111111] relative">
          {/* Ambient Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] bg-[radial-gradient(circle_at_50%_50%,_#F7B500_0%,_transparent_25%)] opacity-[0.03] blur-3xl" />
          </div>

          {/* Hero Section */}
          <div className="relative">
            <div className="max-w-[2000px] mx-auto px-6 pt-24 pb-20">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#F7B500] rounded-full mix-blend-overlay filter blur-xl opacity-20" />
                <h1 className="relative text-8xl md:text-9xl font-bold text-[#F7B500] mb-8 tracking-tight">
                  Curated<br />Collections
                </h1>
                <p className="text-gray-400 text-2xl max-w-2xl font-light pl-2">
                  Explore our handpicked selection of the most iconic NFT collections on Ethereum.
                </p>
              </div>
            </div>
          </div>

          {/* Collections Grid */}
          <div className="max-w-[2000px] mx-auto px-6 pb-32">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {CURATED_COLLECTIONS.map((collection) => (
                <div
                  key={collection.address}
                  className="group relative aspect-square cursor-pointer"
                >
                  {/* Card Container with Hover Effects */}
                  <div className="absolute inset-0 rounded-2xl bg-[#1A1A1A] overflow-hidden transform perspective-1000 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(247,181,0,0.15)]">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F7B500]/20 to-transparent" />
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/60 to-[#111111]/90 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {collection.name}
                          </h3>
                          {collection.description && (
                            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                              {collection.description}
                            </p>
                          )}
                          <div className="h-[2px] w-12 bg-[#F7B500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200 origin-left" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle Border */}
                    <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Web3ErrorBoundary>
    </Layout>
  );
} 