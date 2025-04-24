'use client'

import { VoiceProvider } from "@humeai/voice-react"
import { useEffect, useState } from "react"
import { handleToolCallMessage } from "../api/ai/cryptoPriceTool"
import { Hume } from "hume"
import { VoiceToggle } from "@/components/ai/VoiceToggle"
import { Loader } from "@/components/ai/Loader"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-yellow-950/20">
        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-full animate-pulse" />
          <Loader color="yellow" />
        </div>
      </div>
    )
  }

  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-yellow-950/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-500 text-center max-w-md px-8 py-12 backdrop-blur-lg bg-black/40 rounded-2xl border border-yellow-500/10 shadow-2xl"
        >
          <p className="text-2xl font-medium mb-4">😕 Oops!</p>
          <p className="mb-4 text-yellow-500/80">{error || 'Unable to initialize voice interface. Please check your connection and try again.'}</p>
          {errorDetails && (
            <pre className="text-xs text-yellow-500/60 mt-4 text-left whitespace-pre-wrap p-4 bg-black/40 rounded-lg">
              {errorDetails}
            </pre>
          )}
        </motion.div>
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
      <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-black via-black/95 to-yellow-950/20 p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-12"
        >
          <h1 className="font-satoshi text-yellow-500/90 text-2xl font-bold tracking-wider mb-2 text-center uppercase">MSTY Call</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8 relative z-10"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 blur-lg rounded-full group-hover:from-yellow-500/30 group-hover:via-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300" />
            <VoiceToggle onActiveChange={setIsActive} />
          </div>
          <div className="h-8 flex items-center">
            {isActive && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                <span className="text-yellow-500/60 text-sm font-light tracking-wider">LISTENING...</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-sm relative z-10 mb-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium text-lg h-14 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 border-0"
            onClick={() => window.location.href = '/'}
          >
            End Call
          </Button>
        </motion.div>
      </div>
    </VoiceProvider>
  )
}
