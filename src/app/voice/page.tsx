'use client'

import dynamic from 'next/dynamic';
import HumeService from "@/services/hume";
import { Loader } from '@/components/ai/Loader';
import { StartCall } from '@/components/ai/StartCall';
import { VoiceProvider } from "@humeai/voice-react";
import { clientLogger } from '@/utils/clientLogger';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dynamic import for Controls component to avoid SSR issues
const Controls = dynamic(
  () => import('@/components/ai/Controls').then(mod => mod.Controls),
  { ssr: false }
);

function VoiceExperience() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        <div className="relative z-10">
          <Loader color="yellow" />
        </div>
      </div>
    );
  }

  if (error || !accessToken) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        <div className="relative z-10 max-w-md p-8 rounded-lg bg-black/50 backdrop-blur-xl border border-[#F7B500]/10">
          <p className="text-red-500 mb-6 text-center">{error || 'Unable to initialize voice interface'}</p>
          <StartCall />
        </div>
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
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        
        {/* Animated Circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#F7B500]/10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#F7B500]/10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#F7B500]/10"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-center mb-8 text-2xl font-semibold tracking-tight text-[#F7B500]">
              Voice Interface
            </h1>
            <StartCall />
          </motion.div>
          <div className="mt-8">
            <Controls />
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </VoiceProvider>
  );
}

export default function VoicePage() {
  return <VoiceExperience />;
}
