'use client'

import HumeService from "@/services/hume";
import { Loader } from '@/components/ai/Loader';
import dynamic from 'next/dynamic';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-yellow-950/20">
    <div className="relative">
      <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse" />
      <Loader color="yellow" />
    </div>
  </div>
);

// Dynamic import for the VoiceGallery component
const VoiceGallery = dynamic(() => import('@/components/voice/VoiceGallery').then(mod => mod.VoiceGallery), {
  loading: LoadingFallback,
  ssr: false,
});

export default function VoicePage() {
  return (
    <VoiceGallery configId={HumeService.defaultVoiceConfig.configId} />
  );
}
