import React, { FC } from 'react'
import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '../Button';
import clsx from 'clsx';
import { MicFFT } from '../MicFFT';
import { VoiceToggle } from '../VoiceToggle';

export const Controls:FC = () => {
  const { disconnect, status, micFft } = useVoice();

  return (
    <div
      className={
        clsx(
          "fixed bottom-0 left-0 w-full p-4 flex items-center justify-center z-50",
          "bg-gradient-to-t from-card via-card/90 to-card/0",
        )
      }
    >
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
            className={
              "p-4 border border-border rounded shadow-sm flex items-center gap-4 bg-white"
            }
          >
            <VoiceToggle />

            <div className={"relative grid h-8 w-48 shrink grow-0"}>
              <MicFFT fft={micFft} className={" fill-current"} />
            </div>

            <Button
              className={"flex items-center"}
              onClick={() => {
                disconnect();
              }}
            >
              End Call
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
