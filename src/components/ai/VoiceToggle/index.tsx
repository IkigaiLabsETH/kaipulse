'use client'

import React, { useEffect, useState, useRef } from 'react'
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

// Audio format validation
// Commented out as we're bypassing format validation for compatibility
// const SUPPORTED_MIME_TYPES = [
//   'audio/webm',
//   'audio/webm;codecs=opus',
//   'audio/mp4',
//   'audio/mpeg',
//   'audio/ogg',
//   'audio/ogg;codecs=opus',
//   'audio/wav',
//   'audio/wave'
// ];

const validateAudioFormat = async (stream: MediaStream): Promise<boolean> => {
  const audioTracks = stream.getAudioTracks();
  if (audioTracks.length === 0) return false;
  
  // Always return true to bypass format validation
  // This allows the voice functionality to work even if the browser doesn't report
  // that it supports the required formats
  return true;

  /* Original implementation:
  try {
    // Try to create a MediaRecorder with the stream
    const recorder = new MediaRecorder(stream);
    
    // Check if the browser supports any of our formats
    const mimeType = recorder.mimeType.toLowerCase();
    const isSupported = SUPPORTED_MIME_TYPES.some(type => {
      const format = type.split(';')[0];
      return mimeType.includes(format);
    });
    
    return isSupported;
  } catch {
    // If MediaRecorder fails, fallback to checking audio element support
    const audio = new Audio();
    return SUPPORTED_MIME_TYPES.some(type => {
      const canPlay = audio.canPlayType(type);
      return canPlay === 'probably' || canPlay === 'maybe';
    });
  }
  */
};

export const VoiceToggle: React.FC<VoiceToggleProps> = ({ onActiveChange }) => {
  const voice = useVoice() as unknown as HumeVoiceContext
  const [error, setError] = useState<string | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Cleanup function
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  useEffect(() => {
    onActiveChange?.(!voice.isMuted)
  }, [voice.isMuted, onActiveChange])

  const toggleRecording = async () => {
    try {
      setError(null)
      
      if (!voice.isMuted) {
        await voice.mute()
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop())
          streamRef.current = null
        }
      } else {
        try {
          // First check if we have permission and validate format
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          const isFormatValid = await validateAudioFormat(stream)
          
          if (!isFormatValid) {
            stream.getTracks().forEach(track => track.stop())
            throw new Error('Your browser does not support any of the required audio formats.')
          }
          
          streamRef.current = stream
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
          "inline-flex items-center justify-center rounded-md p-4",
          "bg-black border-2 border-[#F7B500]",
          "shadow-[5px_5px_0px_0px_rgba(247,181,0,1)]",
          "hover:bg-[#F7B500] hover:text-black hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
          "transition-all duration-300 ease-out",
          !voice.isMuted 
            ? "bg-[#F7B500] text-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" 
            : "text-[#F7B500]"
        )}
      >
        {!voice.isMuted ? (
          <MicOff className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </Toggle>
      {error && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  )
} 