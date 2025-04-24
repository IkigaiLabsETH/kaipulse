'use client'

import { VoiceProvider } from "@humeai/voice-react"
import { useEffect, useState } from "react"
import { getHumeAccessToken } from "../api/ai/ai"
import { handleToolCallMessage } from "../api/ai/cryptoPriceTool"
import { Hume } from "hume"
import { VoiceToggle } from "@/components/ai/VoiceToggle"

export default function VoicePage() {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getHumeAccessToken()
      setAccessToken(token)
    }
    fetchToken()
  }, [])

  if (!accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-pulse text-yellow-500">Loading...</div>
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
