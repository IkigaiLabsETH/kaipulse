import React, { FC } from 'react'
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MicFFT } from '../MicFFT';
import { VoiceToggle } from '../VoiceToggle';
import { Phone } from "lucide-react";

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
          className="fixed bottom-0 left-0 w-full p-6 flex items-center justify-center z-50 bg-gradient-to-t from-background via-background/50 to-transparent"
        >
          <Card className="relative max-w-3xl w-full mx-auto p-4 border border-border/40 shadow-sm bg-background/95 backdrop-blur-sm flex items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <VoiceToggle />
              <div className="uppercase tracking-[0.2em] text-yellow-500 font-satoshi">
                <span className="font-semibold">LISTENING</span>
              </div>
            </div>

            <div className="w-full md:w-48 h-16 relative">
              <MicFFT fft={micFft} className="fill-yellow-500" />
            </div>

            <Button
              variant="default"
              onClick={() => disconnect()}
              className="relative px-6 py-2 text-base bg-background text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-background transition-all duration-300 rounded-lg flex items-center gap-2 font-medium"
            >
              <Phone className="w-4 h-4" />
              End Call
            </Button>
          </Card>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
