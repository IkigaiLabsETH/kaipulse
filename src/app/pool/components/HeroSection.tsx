

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {showVideo && (
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
            src="https://www.youtube.com/embed/epSMgDLOZzA?autoplay=1&mute=1&loop=1&playlist=epSMgDLOZzA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Luxury Pool Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
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