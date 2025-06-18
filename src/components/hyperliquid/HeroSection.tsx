"use client";

export default function HeroSection() {
  return (
    <div className="text-center space-y-8">
      <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Onchain Trading • Infrastructure Layer • DeFi Innovation</p>
      <h1 className="text-center">
        <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
          Hyperliquid
        </span>
      </h1>
      <div className="flex items-center justify-center mt-6">
        <div className="h-px w-24 bg-yellow-500/30"></div>
        <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The Onchain Trading Layer</p>
        <div className="h-px w-24 bg-yellow-500/30"></div>
      </div>
      
      {/* Featured Visual */}
      <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <iframe
          src="https://v2.hybridge.xyz/?widget=1&referralFee=0.01&referralAddress=0x7B8B70e1C57F9dD0FE5eb2Fa84CCE710c21D0164&primary=%23F7B500&text-colour=%23FFFFFF&border-radius=16px&paper-bg=%2318191C&border-width=1px&border-colour=%23F7B500&input-bg=%230A0A0A&font-family=epilogue"
          title="Hyperliquid Bridge"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
} 