'use client'

import dynamic from 'next/dynamic';
import HumeService from "@/services/hume";
import { Loader } from '@/components/ai/Loader';
import { motion } from 'framer-motion';
import { StartCall } from '@/components/ai/StartCall';
import { VoiceProvider } from "@humeai/voice-react";
import { clientLogger } from '@/utils/clientLogger';
import { useState, useEffect } from 'react';

// Dynamic import for Controls component to avoid SSR issues
const Controls = dynamic(
  () => import('@/components/ai/Controls').then(mod => mod.Controls),
  { ssr: false }
);

// Premium loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
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
    
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
  </div>
);

// Main Voice Experience Component
function VoiceExperience() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch token on page load
  useEffect(() => {
    const fetchToken = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/hume');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch access token: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.accessToken) {
          throw new Error('Invalid access token received');
        }
        
        setAccessToken(data.accessToken);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to initialize voice';
        clientLogger.error('Voice init error:', message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) {
    return <LoadingFallback />;
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900/90 to-yellow-950/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-500 text-center max-w-md px-8 py-12 backdrop-blur-lg bg-black/40 rounded-sm border border-yellow-500/10 shadow-2xl"
        >
          <p className="text-2xl font-medium mb-4">Connection Error</p>
          <p className="mb-4 text-white/70">{error || 'Unable to initialize voice interface'}</p>
          <motion.div 
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StartCall />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId={HumeService.defaultVoiceConfig.configId}
      hostname="api.hume.ai"
      debug={true}
      verboseTranscription={true}
    >
      <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
        {/* Art Gallery Background */}
        <div className="absolute inset-0 z-0">
          {/* Magazine style header line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black opacity-90"></div>
          
          {/* Bitcoin-inspired pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}></div>
        </div>

        {/* Gallery Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 py-10 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Audio Experience • AI Curator</p>
              <h1 className="text-center">
                <span className="text-5xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  Voice Gallery
                </span>
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-16 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic">A Sonic Experience</p>
                <div className="h-px w-16 bg-yellow-500/30"></div>
              </div>
            </div>
            
            <div className="flex justify-center py-8">
              <div className="relative p-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 blur-lg rounded-full"></div>
                <StartCall />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Gallery Content */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-2xl mx-auto text-center"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20 blur-lg rounded-full"></div>
              <div className="relative py-3 px-8 bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded">
                <h2 className="text-yellow-500/90 text-xl font-light tracking-wide">
                  Welcome to the <span className="font-bold">Conversational Arts Exhibition</span>
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-white/70 text-lg leading-relaxed">
                In this interactive installation, you&apos;ll engage in a dialogue with an AI curator that responds to your voice.
              </p>
              <p className="text-white/50 text-base">
                Each conversation creates a unique auditory experience, carefully analyzed for emotional resonance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Controls component will appear when voice is active */}
        <Controls />

        {/* Gallery Nameplate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 pb-4 text-center mt-auto"
        >
          <p className="text-white/40 text-xs font-light font-satoshi">
            MSTY Voice Gallery • Powered by Hume AI
          </p>
        </motion.div>
      </div>
    </VoiceProvider>
  );
}

// Main page component
export default function VoicePage() {
  return <VoiceExperience />;
}
