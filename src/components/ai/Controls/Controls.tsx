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

          <Card className="relative z-10 max-w-3xl w-full mx-auto p-4 sm:p-4 border-0 sm:border border-[#F7B500]/20 shadow-sm bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6">
              {/* Left Section */}
              <div className="flex items-center justify-center w-full sm:w-auto">
                <div className="flex items-center gap-4">
                  <VoiceToggle />
                  <span className="uppercase tracking-[0.15em] text-[#F7B500]/70 font-satoshi font-medium text-sm">
                    Listening
                  </span>
                </div>
              </div>

              {/* Middle Section - Visualization */}
              <div className="w-full sm:w-48 h-12 sm:h-16 relative order-first sm:order-none">
                <MicFFT fft={micFft} className="fill-[#F7B500]" />
              </div>

              {/* Right Section - Button */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    onClick={() => disconnect()}
                    className={cn(
                      "relative gap-3 font-semibold text-base py-4 px-6",
                      "bg-black",
                      "hover:bg-[#F7B500]",
                      "text-[#F7B500] hover:text-black",
                      "transition-all duration-300 ease-out",
                      "border-2 border-[#F7B500]",
                      "shadow-[5px_5px_0px_0px_rgba(247,181,0,1)]",
                      "hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
                      "disabled:opacity-70 disabled:cursor-not-allowed",
                      "rounded-md",
                      "w-full sm:w-auto"
                    )}
                  >
                    <Phone className="w-4 h-4" />
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
