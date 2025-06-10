"use client";

import dynamic from 'next/dynamic';

const BeatbotVideo = dynamic(() => import('./BeatbotVideo'), {
  ssr: false,
  loading: () => (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 animate-pulse" />
  ),
});

export default function BeatbotSection() {
  return (
    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
        Beatbot AquaSense 2 Ultra
      </h3>
      <p className="text-white/80 text-lg mb-8 max-w-2xl">
        Experience the future of pool maintenance with the world&apos;s first AI-powered 5-in-1 robotic pool cleaner. The AquaSense 2 Ultra combines cutting-edge technology with powerful cleaning capabilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Video or Image */}
        <div className="w-full">
          <div className="relative w-full rounded-xl overflow-hidden mb-4 aspect-video bg-black/70">
            <BeatbotVideo />
          </div>
        </div>
        {/* Right: Features and Button */}
        <div className="flex flex-col gap-6 justify-between h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
              <h5 className="text-yellow-400 font-epilogue mb-2 font-semibold">HybridSense™ AI Mapping</h5>
              <p className="text-white/80 text-sm">27 sensors for ultra-precise mapping and full coverage path optimization</p>
            </div>
            <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
              <h5 className="text-yellow-400 font-epilogue mb-2 font-semibold">5-in-1 Cleaning System</h5>
              <p className="text-white/80 text-sm">Comprehensive cleaning for water surface, floor, walls, and waterline</p>
            </div>
            <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
              <h5 className="text-yellow-400 font-epilogue mb-2 font-semibold">Smart Parking</h5>
              <p className="text-white/80 text-sm">Automatic surface parking with app notifications for easy retrieval</p>
            </div>
            <div className="bg-black/50 p-4 rounded-none border border-yellow-500/20">
              <h5 className="text-yellow-400 font-epilogue mb-2 font-semibold">ClearWater Technology</h5>
              <p className="text-white/80 text-sm">Natural clarification system for crystal-clear water, 4x faster than traditional methods</p>
            </div>
          </div>
          <a
            href="https://beatbot.com/products/aquasense-2-ultra"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-yellow-500 text-black px-8 py-3 rounded-none font-semibold hover:bg-yellow-400 transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
} 