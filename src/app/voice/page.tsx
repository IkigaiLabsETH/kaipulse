'use client'

import { VoiceProvider } from "@humeai/voice-react"
import { useEffect, useState } from "react"
import { handleToolCallMessage } from "../api/ai/cryptoPriceTool"
import { Hume } from "hume"
import { VoiceToggle } from "@/components/ai/VoiceToggle"
import { Loader } from "@/components/ai/Loader"

export default function VoicePage() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchToken = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/hume')
        const data = await response.json()
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch access token')
        }
        
        setAccessToken(data.accessToken)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize voice interface. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchToken()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader color="yellow" />
      </div>
    )
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-yellow-500 text-center max-w-md px-4">
          <p className="text-xl font-medium mb-4">😕 Oops!</p>
          <p>{error || 'Unable to initialize voice interface. Please check your connection and try again.'}</p>
        </div>
      </div>
    )
  }

  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId="ccb6fd91-52cd-4f8c-bcc5-763f647407b5"
      onToolCall={(message: Hume.empathicVoice.ToolCallMessage) => handleToolCallMessage(message)}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 tracking-tight">
            Call Satoshi
          </h1>
          <div className="flex flex-col items-center gap-4">
            <VoiceToggle />
            <p className="text-yellow-500/60 text-sm">
              Click the microphone to start talking with Satoshi
            </p>
          </div>
        </div>
      </div>
    </VoiceProvider>
  )
}
