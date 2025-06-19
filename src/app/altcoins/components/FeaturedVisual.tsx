import Image from 'next/image';

export function FeaturedVisual() {
  return (
    <div className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/altcoins.jpeg"
          alt="Crypto Market Analysis Visualization"
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