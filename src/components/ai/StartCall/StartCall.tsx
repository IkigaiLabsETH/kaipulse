import React, { FC, useState } from 'react'
import { useVoice } from "@humeai/voice-react";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <Button
          size="lg"
          className={cn(
            "relative w-full gap-2 font-medium",
            "bg-primary/10 hover:bg-primary/20",
            "border border-primary/20 hover:border-primary/30",
            "text-primary shadow-[0_0_15px_rgba(0,0,0,0.1)]",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
          onClick={handleConnect}
          disabled={isConnecting}
        >
          <Mic className="w-5 h-5" />
          {isConnecting ? 'Connecting...' : 'Start Voice Call'}
        </Button>
      </motion.div>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-4 px-4 py-3 bg-destructive/10 border border-destructive/30 rounded-md text-destructive text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
}
