'use client'

import dynamic from 'next/dynamic';
import HumeService from "@/services/hume";
import { Loader } from '@/components/ai/Loader';
import { motion } from 'framer-motion';

// Premium loading component inspired by the bio page
const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
    {/* Art Magazine Header Element */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-6xl mx-auto px-5 text-center"
    >
      <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">MSTY Voice Gallery</p>
      <div className="relative mt-8">
        <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse"></div>
        <Loader color="yellow" />
      </div>
      <p className="text-white/60 mt-8 text-sm tracking-wider">Loading audio experience...</p>
    </motion.div>
    
    {/* Artistic background elements */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
  </div>
);

// Dynamically import the VoiceGallery to avoid SSR issues with browser APIs
const VoiceGallery = dynamic(
  () => import('@/components/voice/VoiceGallery').then(mod => mod.VoiceGallery),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

export default function VoicePage() {
  return (
    <VoiceGallery configId={HumeService.defaultVoiceConfig.configId} />
  );
}
