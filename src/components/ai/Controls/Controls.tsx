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
            y: 20,
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1
            }
          }}
          exit={{
            y: 20,
            opacity: 0,
            scale: 0.95
          }}
          className={cn(
            "fixed bottom-0 left-0 w-full p-6 flex items-center justify-center z-50",
            "bg-gradient-to-t from-background via-background/50 to-transparent",
          )}
        >
          <div className="relative max-w-3xl w-full mx-auto">
            {/* Premium border with brand shadow */}
            <div className="absolute -inset-0.5 bg-accent rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <div className="absolute inset-0.5 bg-card/90 backdrop-blur-sm rounded-lg"></div>
            </div>
            
            <div className="p-6 relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <VoiceToggle />
                
                <div className="uppercase tracking-[0.2em] text-accent font-satoshi">
                  <span className="font-semibold">LISTENING</span>
                </div>
              </div>

              <div className="w-full md:w-48 h-16 relative">
                <MicFFT fft={micFft} className="fill-accent" />
              </div>

              <Button
                variant="outline"
                className={cn(
                  "px-6 py-3 border-2 border-accent/40 hover:border-accent",
                  "bg-card hover:bg-accent/10 text-accent",
                  "transition-all duration-300 ease-out",
                  "shadow-[3px_3px_0px_0px_rgba(234,179,8,0.4)]",
                  "hover:shadow-[5px_5px_0px_0px_rgba(234,179,8,0.6)]"
                )}
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
