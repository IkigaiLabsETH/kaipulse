import React, { FC } from 'react'
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MicFFT } from '../MicFFT';
import { VoiceToggle } from '../VoiceToggle';
import { Phone } from "lucide-react";
import { cn } from '@/lib/utils';

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
              <div className="uppercase tracking-[0.2em] text-[#F7B500] font-satoshi">
                <span className="font-semibold">LISTENING</span>
              </div>
            </div>

            <div className="w-full md:w-48 h-16 relative">
              <MicFFT fft={micFft} className="fill-[#F7B500]" />
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                onClick={() => disconnect()}
                className={cn(
                  "relative gap-3 font-semibold text-base py-6 px-6",
                  "bg-gradient-to-r from-black via-zinc-900 to-black",
                  "hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500]",
                  "text-[#F7B500] hover:text-black",
                  "transition-all duration-300 ease-out",
                  "border border-[#F7B500]",
                  "shadow-[5px_5px_0px_0px_#F7B500]",
                  "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
                  "disabled:opacity-70 disabled:cursor-not-allowed",
                  "rounded-md"
                )}
              >
                <Phone className="w-4 h-4" />
                End Call
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
