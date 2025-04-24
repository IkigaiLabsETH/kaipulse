import React, { FC, useState } from 'react'
import { useVoice } from "@humeai/voice-react";
import { Button } from '../Button';
import { motion } from 'framer-motion';

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
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          variant="solid"
          color="yellow"
          className="px-6 py-3 text-lg bg-yellow-500 text-black hover:bg-yellow-400 transition-colors shadow-lg"
          onClick={handleConnect}
          disabled={isConnecting}
          loading={isConnecting}
        >
          {isConnecting ? 'Connecting...' : 'Enter the Exhibition'}
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
