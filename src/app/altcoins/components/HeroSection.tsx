import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="text-center space-y-8">
      <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
        Crypto Markets • Bitcoin • Altcoins
      </p>
      <h1 className="text-center">
        <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
          Altcoins vs Bitcoin
        </span>
      </h1>
      <div className="flex items-center justify-center mt-6">
        <div className="h-px w-24 bg-yellow-500/30"></div>
        <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Navigating the Next Crypto Cycle</p>
        <div className="h-px w-24 bg-yellow-500/30"></div>
      </div>

      {/* Featured Visual */}
      <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <Image
          src="/tesla_s.jpg"
          alt="Crypto Market Analysis: Bitcoin vs Altcoins"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
    </div>
  );
} 