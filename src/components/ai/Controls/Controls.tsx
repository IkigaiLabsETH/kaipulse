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
          className="fixed bottom-0 left-0 w-full pb-6 sm:pb-8 px-4 sm:px-6 flex items-end justify-center z-50"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent" />

          <Card className="relative z-10 max-w-3xl w-full mx-auto p-4 sm:p-4 bg-transparent">
            <div className="flex flex-col items-center gap-12">
              {/* Middle Section - Visualization */}
              <div className="w-full sm:w-48 h-12 sm:h-16 relative">
                <MicFFT fft={micFft} className="fill-[#F7B500]" />
              </div>

              {/* Controls Section */}
              <div className="flex flex-col items-center gap-8">
                {/* Mute Button */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#F7B500]/10 rounded-full blur-lg group-hover:bg-[#F7B500]/20 animate-pulse"></div>
                  <VoiceToggle />
                </div>

                {/* End Call Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={() => disconnect()}
                    className={cn(
                      "relative gap-3 font-semibold text-base py-4 sm:py-6",
                      "bg-gradient-to-r from-black via-zinc-900 to-black",
                      "hover:bg-[#F7B500] hover:from-[#F7B500] hover:via-[#F7B500] hover:to-[#F7B500]",
                      "text-[#F7B500] hover:text-black",
                      "transition-all duration-300 ease-out",
                      "border border-[#F7B500]",
                      "shadow-[5px_5px_0px_0px_#F7B500]",
                      "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
                      "disabled:opacity-70 disabled:cursor-not-allowed",
                      "rounded-md",
                      "w-full sm:w-auto"
                    )}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    End Call
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
