"use client";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="relative z-10 text-center space-y-8 py-20">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Luxury Pool • Premium Construction • Natural Stone</p>
        <h1 className="text-center">
          <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
            11x6m Pool
          </span>
        </h1>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Masterpiece of Aquatic Luxury</p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </div>
    </div>
  );
} 