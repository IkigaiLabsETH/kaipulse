import React, { FC } from 'react'
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MicFFT } from '../MicFFT';
import { VoiceToggle } from '../VoiceToggle';
import { cn } from '@/lib/utils';

export const Controls: FC = () => {
  const { disconnect, status, micFft } = useVoice();

  return (
    <AnimatePresence>
      {status.value === "connected" ? (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
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
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          className="fixed bottom-0 left-0 w-full p-6 flex items-center justify-center z-50 bg-gradient-to-t from-background via-background/50 to-transparent"
        >
          <Card className="relative max-w-3xl w-full mx-auto p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
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
                size="lg"
                onClick={() => disconnect()}
                className={cn(
                  "text-accent hover:text-accent-foreground",
                  "border-2 border-accent/40 hover:border-accent",
                  "bg-card hover:bg-accent/10"
                )}
              >
                Leave Exhibition
              </Button>
            </div>
          </Card>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
