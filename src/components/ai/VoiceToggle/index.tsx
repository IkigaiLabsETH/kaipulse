'use client'

import React, { useEffect, useState } from 'react'
import { useVoice } from "@humeai/voice-react"
import { Mic, MicOff } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

interface HumeVoiceContext {
  isMuted: boolean;
  mute: () => void;
  unmute: () => void;
}

interface VoiceToggleProps {
  onActiveChange?: (isActive: boolean) => void;
}

export const VoiceToggle: React.FC<VoiceToggleProps> = ({ onActiveChange }) => {
  const voice = useVoice() as unknown as HumeVoiceContext
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    onActiveChange?.(!voice.isMuted)
  }, [voice.isMuted, onActiveChange])

  const toggleRecording = async () => {
    try {
      setError(null)
      
      if (!voice.isMuted) {
        await voice.mute()
      } else {
        try {
          // First check if we have permission
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          // Stop the test stream immediately
          stream.getTracks().forEach(track => track.stop())
          // Now try to unmute
          await voice.unmute()
        } catch (err) {
          if (err instanceof Error) {
            if (err.name === 'NotAllowedError') {
              setError('Please allow microphone access to use voice features.')
            } else if (err.name === 'NotFoundError') {
              setError('No microphone found. Please check your device settings.')
            } else {
              setError(`Microphone error: ${err.message}`)
            }
          } else {
            setError('An unknown error occurred while accessing the microphone.')
          }
          throw err
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div className="relative">
      <Toggle
        pressed={!voice.isMuted}
        onPressedChange={toggleRecording}
        variant="outline"
        className={cn(
          "rounded-full w-20 h-20 transition-all duration-300 ease-in-out",
          "border-[3px] hover:scale-105 hover:shadow-lg",
          !voice.isMuted 
            ? "border-yellow-500 text-yellow-500 bg-yellow-500/10" 
            : "border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
        )}
      >
        {!voice.isMuted ? (
          <MicOff className="h-10 w-10" />
        ) : (
          <Mic className="h-10 w-10" />
        )}
      </Toggle>
      {error && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 bg-red-500/10 border border-red-500 rounded-md text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
} 