import React, { FC, useState } from 'react'
import { useVoice } from "@humeai/voice-react";
import { Button } from '../Button';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

export const StartCall: FC = () => {
  const { connect, status } = useVoice();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      await connect();
      // Connection successful - the VoiceProvider will handle the connected state
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to voice service');
    } finally {
      setIsConnecting(false);
    }
  };

  // Don't show the button if already connected
  if (status?.value === 'connected') {
    return null;
  }

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          variant="solid"
          color="yellow"
          className="px-8 py-4 text-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black font-medium shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 rounded-sm flex items-center gap-3"
          onClick={handleConnect}
          disabled={isConnecting}
          loading={isConnecting}
        >
          <Mic className="w-5 h-5" />
          {isConnecting ? 'Connecting...' : 'Start Voice Call'}
        </Button>
      </motion.div>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-3 px-4 py-2 bg-black/70 backdrop-blur-sm border border-red-500/30 rounded-sm text-red-400 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
}
