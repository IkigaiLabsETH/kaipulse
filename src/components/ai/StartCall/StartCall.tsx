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
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl blur-sm opacity-75"></div>
        <Button
          variant="solid"
          color="yellow"
          className="relative px-10 py-6 text-xl bg-black text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-xl flex items-center gap-3 font-medium shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]"
          onClick={handleConnect}
          disabled={isConnecting}
          loading={isConnecting}
        >
          <Mic className="w-6 h-6" />
          {isConnecting ? 'Connecting...' : 'Start Voice Call'}
        </Button>
      </motion.div>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-4 px-4 py-3 bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
}
