"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function MaldivesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Assets • Financial Innovation • Economic Growth</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Maldives
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A New Era of Financial Innovation</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Visual */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image 
                src="/maldives.jpg" 
                alt="Malé Skyline" 
                width={1200} 
                height={675} 
                className="w-full h-full object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The MIFC Vision
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                The Maldives International Financial Centre (MIFC) represents an $8.8 billion initiative to transform Malé into a global blockchain and digital asset hub. This ambitious project aims to triple the nation&apos;s economy while establishing a new paradigm for financial innovation in the region.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>No corporate taxes</li>
                  <li>No residency requirements</li>
                  <li>Tax-free inheritance</li>
                  <li>Full ownership rights</li>
                  <li>Renewable energy powered</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">💎</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Digital Assets
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Blockchain Innovation
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🏢</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Smart Offices
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Modern Infrastructure
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌱</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Sustainability
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Green Technology
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Project Scope
            </h3>
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Development & Infrastructure</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Spanning 830,000 square meters in Malé, the MIFC will accommodate 6,500 residents and create approximately 16,000 jobs. The district will be powered entirely by renewable energy and feature smart offices, climate-resilient infrastructure, and advanced digital banking and offshore services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Key Metrics:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>830,000 sqm development</li>
                        <li>6,500 residents</li>
                        <li>16,000 new jobs</li>
                        <li>100% renewable energy</li>
                        <li>2030 completion target</li>
                        <li>$1B+ annual revenue</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Investment:</h5>
                      <p className="text-white/80 font-satoshi">$8.8 billion total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="https://www.mifc.gov.mv/" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Visit Official MIFC Site
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
