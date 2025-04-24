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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto px-5 text-center"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Voice Experience</p>
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse"></div>
            <Loader color="yellow" />
          </div>
          <p className="text-white/60 mt-8 text-sm tracking-wider font-satoshi">Loading audio experience...</p>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>
    );
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute -inset-3 z-0">
            <div className="absolute inset-0 rotate-[2deg] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
          </div>
          <div className="relative z-10 text-yellow-500 text-center max-w-md px-8 py-12 bg-[#1c1f26] rounded-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] hover:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] transition-all duration-300">
            <p className="text-2xl font-medium mb-4 font-epilogue">Connection Error</p>
            <p className="mb-4 text-white/70 font-satoshi">{error || 'Unable to initialize voice interface'}</p>
            <motion.div 
              className="mt-6"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <StartCall />
            </motion.div>
          </div>
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
        {/* Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 py-10 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Audio Experience</p>
              <h1 className="text-center">
                <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  Voice Call
                </span>
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-24 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Sonic Experience</p>
                <div className="h-px w-24 bg-yellow-500/30"></div>
              </div>
            </div>
            
            <div className="flex justify-center py-16">
              <motion.div 
                className="relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Premium gold frame with subtle glow */}
                <div className="absolute -inset-3 z-0">
                  <div className="absolute inset-0 rotate-[2deg] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_30px_rgba(234,179,8,0.2)]"></div>
                </div>
                
                {/* Inner frame with glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm z-10 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                  <div className="absolute inset-0.5 bg-black rounded-sm"></div>
                </div>

                {/* Bitcoin corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 z-20 flex items-center justify-center">
                  <div className="text-yellow-500 text-xl font-bold">₿</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 z-20 flex items-center justify-center">
                  <div className="text-yellow-500 text-xl font-bold">₿</div>
                </div>

                <div className="relative z-10">
                  <StartCall />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Controls */}
        <Controls />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 pb-4 text-center mt-auto"
        >
          <p className="text-white/40 text-xs font-light font-satoshi tracking-wider">
            MSTY Voice Gallery • Powered by Hume AI
          </p>
        </motion.div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      </div>
    </VoiceProvider>
  );
}

// Main page component
export default function VoicePage() {
  return <VoiceExperience />;
}
