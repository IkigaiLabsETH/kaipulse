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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto px-6 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
            <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Initializing</span>
          </div>
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-yellow-400/10 blur-2xl rounded-full animate-pulse"></div>
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
          className="w-full max-w-5xl mx-auto px-6"
        >
          <div className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Connection Error</span>
            </div>
            <p className="mb-6 text-xl font-satoshi leading-relaxed text-zinc-300">{error || 'Unable to initialize voice interface'}</p>
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
        <div className="relative overflow-hidden">
          {/* Premium Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-luminosity" />
          </div>
          
          <motion.div 
            className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Accent Line */}
            <div className="flex items-center mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Voice Experience</span>
            </div>

            <motion.h1 
              className="text-4xl md:text-7xl font-boska font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Voice
              </span>
              <span className="text-white"> Call</span>
            </motion.h1>

            <motion.div 
              className="prose prose-xl prose-invert max-w-none mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl md:text-4xl font-satoshi mb-4 leading-relaxed text-zinc-300">
                A sonic experience that transcends traditional communication.
              </p>
            </motion.div>

            {/* Main Voice Interface */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative mb-16"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-sm opacity-50"></div>
              <div className="relative bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-xl p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/3"></div>
                <StartCall />
              </div>
            </motion.div>

            {/* Controls Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-20"
            >
              <div className="flex items-center mb-6">
                <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                <span className="ml-4 text-2xl font-boska font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Voice Controls</span>
              </div>
              <div className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-8">
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
              <p className="text-zinc-500 text-sm font-satoshi tracking-wider">
                MSTY Voice Gallery • Powered by Hume AI
              </p>
            </motion.div>
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
