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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-xl text-white/70">Initializing Voice Interface</p>
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse"></div>
            <Loader color="yellow" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="relative p-8 bg-zinc-900/40 rounded-xl border border-yellow-500/10">
            <p className="text-2xl font-bold mb-4 text-yellow-500">Connection Error</p>
            <p className="mb-6 text-white/80">{error || 'Unable to initialize voice interface'}</p>
            <StartCall />
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
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-yellow-500">Voice</span> Call
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A Sonic Experience
            </p>
          </motion.div>

          {/* Main Voice Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full mb-16 rounded-xl overflow-hidden group"
          >
            <div className="absolute inset-0 border-4 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
            
            <div className="relative z-20 p-12 flex flex-col items-center justify-center">
              <StartCall />
            </div>
          </motion.div>

          {/* Controls Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-yellow-500">Voice Controls</h2>
              <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
            </div>
            <div className="space-y-4 text-white/80 bg-zinc-900/40 p-6 rounded-xl border border-yellow-500/10">
              <Controls />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-white/40 text-sm font-light tracking-wider">
              MSTY Voice Gallery • Powered by Hume AI
            </p>
          </motion.div>
        </div>
      </div>
    </VoiceProvider>
  );
}

// Main page component
export default function VoicePage() {
  return <VoiceExperience />;
}
