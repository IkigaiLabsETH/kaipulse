'use client'

import dynamic from 'next/dynamic';
import HumeService from "@/services/hume";
import { Loader } from '@/components/ai/Loader';
import { StartCall } from '@/components/ai/StartCall';
import { VoiceProvider } from "@humeai/voice-react";
import { clientLogger } from '@/utils/clientLogger';
import { useState, useEffect } from 'react';

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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader color="yellow" />
      </div>
    );
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-md p-6 rounded-lg bg-zinc-900">
          <p className="text-red-500 mb-4">{error || 'Unable to initialize voice interface'}</p>
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="w-full max-w-md p-6">
          <StartCall />
          <div className="mt-8">
            <Controls />
          </div>
        </div>
      </div>
    </VoiceProvider>
  );
}

export default function VoicePage() {
  return <VoiceExperience />;
}
