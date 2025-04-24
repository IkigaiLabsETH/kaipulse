'use client'

import React from 'react'
import { useVoice } from "@humeai/voice-react"
import { Mic, MicOff } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

interface HumeVoiceContext {
  isMuted: boolean;
  mute: () => void;
  unmute: () => void;
}

export const VoiceToggle: React.FC = () => {
  const voice = useVoice() as unknown as HumeVoiceContext

  const toggleRecording = async () => {
    try {
      if (!voice.isMuted) {
        voice.mute()
      } else {
        // Request microphone permission explicitly
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        stream.getTracks().forEach(track => track.stop()) // Clean up the test stream
        voice.unmute()
      }
    } catch (error) {
      // Error handling could be done through a toast notification or UI state
      throw error
    }
  }

  return (
    <Toggle
      pressed={!voice.isMuted}
      onPressedChange={toggleRecording}
      variant="outline"
      className={cn(
        "rounded-full w-16 h-16 transition-all duration-300 ease-in-out",
        "border-2 hover:bg-yellow-500/10",
        !voice.isMuted ? "border-red-500 text-red-500" : "border-yellow-500 text-yellow-500"
      )}
    >
      {!voice.isMuted ? (
        <MicOff className="h-8 w-8" />
      ) : (
        <Mic className="h-8 w-8" />
      )}
    </Toggle>
  )
} 