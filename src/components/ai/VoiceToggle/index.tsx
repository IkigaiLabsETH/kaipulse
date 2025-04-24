'use client'

import React from 'react'
import { useVoice, VoiceContextType } from "@humeai/voice-react"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"

export const VoiceToggle: React.FC = () => {
  const voice = useVoice() as VoiceContextType & {
    isRecording: boolean;
    startRecording: () => void;
    stopRecording: () => void;
  }

  const toggleRecording = () => {
    if (voice.isRecording) {
      voice.stopRecording()
    } else {
      voice.startRecording()
    }
  }

  return (
    <Button
      onClick={toggleRecording}
      size="icon"
      variant={voice.isRecording ? "destructive" : "default"}
      className="rounded-full w-16 h-16 transition-all duration-300 ease-in-out"
    >
      {voice.isRecording ? (
        <MicOff className="h-8 w-8" />
      ) : (
        <Mic className="h-8 w-8" />
      )}
    </Button>
  )
} 