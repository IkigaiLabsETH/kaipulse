import React, { FC } from 'react'
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '../Button';
import { MicFFT } from '../MicFFT';
import { VoiceToggle } from '../VoiceToggle';
import { cn } from '@/common/utils';

export const Controls: FC = () => {
  const { disconnect, status, micFft } = useVoice();

  return (
    <AnimatePresence>
      {status.value === "connected" ? (
        <motion.div
          initial={{
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: "100%",
            opacity: 0,
          }}
          className={cn(
            "fixed bottom-0 left-0 w-full p-6 flex items-center justify-center z-50",
            "bg-gradient-to-t from-black/90 via-black/50 to-transparent",
          )}
        >
          <div className="relative max-w-3xl w-full mx-auto">
            {/* Premium gold border with enhanced glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
              <div className="absolute inset-0.5 bg-black/80 backdrop-blur-sm rounded-sm"></div>
            </div>
            
            <div className="p-6 relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <VoiceToggle />
                
                <div className="uppercase tracking-[0.2em] text-yellow-500 text-sm">
                  <span className="font-semibold">LISTENING</span>
                </div>
              </div>

              <div className="w-full md:w-48 h-16 relative">
                <MicFFT fft={micFft} className="fill-yellow-500" />
              </div>

              <Button
                variant="outline"
                color="white"
                className="px-6 py-3 border-2 border-yellow-500/40 hover:border-yellow-500/60 bg-black hover:bg-yellow-950/30 text-yellow-500"
                onClick={() => disconnect()}
              >
                Leave Exhibition
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
