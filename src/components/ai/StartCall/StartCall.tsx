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
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative"
      >
        <Button
          size="lg"
          className={cn(
            "relative w-full gap-3 font-semibold text-base py-6",
            "bg-gradient-to-r from-black via-zinc-900 to-black",
            "hover:from-zinc-900 hover:via-black hover:to-zinc-900",
            "text-[#F7B500]",
            "transition-all duration-300 ease-out",
            "border-2 border-[#F7B500]",
            "shadow-[0_0_20px_rgba(247,181,0,0.15)]",
            "hover:shadow-[0_0_30px_rgba(247,181,0,0.25)]",
            "disabled:opacity-70 disabled:cursor-not-allowed",
            "rounded-xl"
          )}
          onClick={handleConnect}
          disabled={isConnecting}
        >
          <Mic className="w-5 h-5 animate-pulse" />
          {isConnecting ? 'Connecting...' : 'Start Voice Call'}
        </Button>
      </motion.div>
      {error && (
        <div className="absolute top-full left-0 right-0 mt-4 px-4 py-3 bg-black/80 border border-[#F7B500]/30 rounded-xl text-[#F7B500] text-sm text-center font-medium backdrop-blur-sm">
          {error}
        </div>
      )}
    </div>
  )
}
