"use client";

import { useEffect, useState } from 'react';

export default function BeatbotVideo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/ckYhWibOE8A"
      title="Beatbot AquaSense 2 Ultra Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
} 