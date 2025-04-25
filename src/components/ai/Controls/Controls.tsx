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

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl blur-sm opacity-75"></div>
                  <Button
                    variant="default"
                    onClick={() => disconnect()}
                    className="relative px-10 py-6 text-xl bg-black text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-xl flex items-center gap-3 font-medium shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]"
                  >
                    <Phone className="w-5 h-5" />
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
