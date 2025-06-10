"use client";

import { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  if (!showVideo) return null;

  return (
    <iframe
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
      src="https://www.youtube.com/embed/epSMgDLOZzA?autoplay=1&mute=1&loop=1&playlist=epSMgDLOZzA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
      title="Luxury Pool Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
} 