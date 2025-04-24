'use client'

import { VoiceProvider } from "@humeai/voice-react"
import { useEffect, useState } from "react"
import { handleToolCallMessage } from "../api/ai/cryptoPriceTool"
import { Hume } from "hume"
import { VoiceToggle } from "@/components/ai/VoiceToggle"
import { Loader } from "@/components/ai/Loader"
import { Button } from "@/components/ui/button"

export default function VoicePage() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)

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
        const error = err instanceof Error ? err.message : 'Failed to initialize voice interface'
        setError(error)
        if (err instanceof Error && err.stack) {
          setErrorDetails(err.stack)
        }
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
          <p className="mb-4">{error || 'Unable to initialize voice interface. Please check your connection and try again.'}</p>
          {errorDetails && (
            <pre className="text-xs text-yellow-500/60 mt-4 text-left whitespace-pre-wrap">
              {errorDetails}
            </pre>
          )}
        </div>
      </div>
    )
  }

  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId="ccb6fd91-52cd-4f8c-bcc5-763f647407b5"
      onToolCall={(message: Hume.empathicVoice.ToolCallMessage) => handleToolCallMessage(message)}
      hostname="api.hume.ai"
      debug={false}
      verboseTranscription={true}
    >
      <div className="min-h-screen flex flex-col items-center justify-between bg-black p-8">
        <div /> {/* Spacer */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-yellow-500/20 blur-lg rounded-full" />
            <VoiceToggle onActiveChange={setIsActive} />
          </div>
          <div className="h-8 flex items-center">
            {isActive && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-yellow-500/60 text-sm">Listening...</span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full max-w-sm">
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg h-14 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => window.location.href = '/'}
          >
            End Call
          </Button>
        </div>
      </div>
    </VoiceProvider>
  )
}
