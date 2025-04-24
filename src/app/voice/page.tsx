'use client'

import { VoiceProvider } from "@humeai/voice-react"
import { useEffect, useState, useRef, useCallback } from "react"
import { handleToolCallMessage } from "../api/ai/cryptoPriceTool"
import { Hume } from "hume"
import { CloseEvent as HumeCloseEvent } from 'hume/core/websocket/events'
import { VoiceToggle } from "@/components/ai/VoiceToggle"
import { Loader } from "@/components/ai/Loader"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { clientLogger } from "@/utils/clientLogger"
import { Chat } from "@/components/ai/Chat"

// Constants
const RECONNECT_DELAY_MS = 3000
const ABNORMAL_CLOSE_CODES = new Set([1006, 1011, 1012, 1013, 1014])

interface ChatMessage {
  role: Hume.empathicVoice.Role;
  timestamp: string;
  content: string;
  scores: { emotion: string; score: string }[];
}

type HumeMessage = Hume.empathicVoice.SubscribeEvent & {
  models?: {
    prosody?: {
      scores: Record<string, number>;
    };
  };
  message?: {
    role: Hume.empathicVoice.Role;
    content: string;
  };
  type: string;
  data?: string;
  error?: string;
  chatGroupId?: string;
};

const WaveVisualizer = ({ isRecording }: { isRecording: boolean }) => {
  const width = 200;
  const height = 60;
  const bars = 24;

  return (
    <div className="relative w-[200px] h-[60px]">
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full"
      >
        {Array.from({ length: bars }).map((_, index) => {
          const initialHeight = Math.random() * 20 + 10; // Random initial height between 10 and 30
          
          return (
            <motion.rect
              key={`wave-bar-${index}`}
              initial={{ height: 2 }}
              animate={isRecording ? {
                height: [initialHeight, initialHeight + 20, initialHeight],
                y: [height/2 - initialHeight/2, height/2 - (initialHeight + 20)/2, height/2 - initialHeight/2]
              } : {
                height: 2,
                y: height/2 - 1
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.05,
                ease: "easeInOut"
              }}
              width={4}
              x={(index * width) / bars}
              fill="rgb(234 179 8)"
              opacity={0.6}
              rx={2}
            />
          );
        })}
      </motion.svg>
    </div>
  );
};

// Audio playback queue management
const useAudioQueue = () => {
  const [audioQueue, setAudioQueue] = useState<Blob[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const addToQueue = (audioBlob: Blob) => {
    setAudioQueue(prev => [...prev, audioBlob]);
    playNextInQueue();
  };

  const playNextInQueue = () => {
    if (isPlaying || audioQueue.length === 0) return;

    setIsPlaying(true);
    const audioBlob = audioQueue[0];
    const audioUrl = URL.createObjectURL(audioBlob);
    
    const audio = new Audio(audioUrl);
    currentAudioRef.current = audio;

    audio.onended = () => {
      URL.revokeObjectURL(audioUrl);
      setAudioQueue(prev => prev.slice(1));
      setIsPlaying(false);
      currentAudioRef.current = null;
      playNextInQueue();
    };

    audio.onerror = () => {
      clientLogger.error('Error playing audio');
      URL.revokeObjectURL(audioUrl);
      setAudioQueue(prev => prev.slice(1));
      setIsPlaying(false);
      currentAudioRef.current = null;
      playNextInQueue();
    };

    audio.play().catch(error => {
      clientLogger.error('Failed to play audio', error);
      setIsPlaying(false);
      currentAudioRef.current = null;
    });
  };

  const clearQueue = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      if (currentAudioRef.current.src) {
        URL.revokeObjectURL(currentAudioRef.current.src);
      }
    }
    setAudioQueue([]);
    setIsPlaying(false);
    currentAudioRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        if (currentAudioRef.current.src) {
          URL.revokeObjectURL(currentAudioRef.current.src);
        }
      }
    };
  }, []);

  return { addToQueue, clearQueue };
};

export default function VoicePage() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [shouldBeConnected, setShouldBeConnected] = useState(false)
  const [chatGroupId, setChatGroupId] = useState<string | undefined>()
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { addToQueue, clearQueue } = useAudioQueue()
  const tokenRetryCount = useRef(0)
  const MAX_TOKEN_RETRIES = 3

  // Clear reconnection timer
  const clearReconnectTimer = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
      reconnectTimeoutRef.current = null
    }
  }, [])

  // Fetch access token with validation
  const fetchToken = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setErrorDetails(null);
      
      const response = await fetch('/api/hume');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch access token');
      }
      
      if (!data.accessToken || typeof data.accessToken !== 'string' || data.accessToken === 'undefined') {
        throw new Error('Invalid access token received from server');
      }

      // Reset retry count on successful token fetch
      tokenRetryCount.current = 0;
      clientLogger.info('Successfully initialized voice interface');
      setAccessToken(data.accessToken);
      setShouldBeConnected(true);
    } catch (err) {
      clientLogger.error('Voice interface initialization failed:', err);
      const error = err instanceof Error ? err.message : 'Failed to initialize voice interface';
      setError(error);
      if (err instanceof Error && err.stack) {
        setErrorDetails(err.stack);
      }
      setShouldBeConnected(false);
      
      // Schedule reconnect with exponential backoff
      clearReconnectTimer();
      const backoffTime = Math.min(RECONNECT_DELAY_MS * Math.pow(2, tokenRetryCount.current), 30000); // Max 30s
      
      if (tokenRetryCount.current < MAX_TOKEN_RETRIES) {
        reconnectTimeoutRef.current = setTimeout(() => {
          clientLogger.info(`Attempting to reconnect... (Attempt ${tokenRetryCount.current + 1}/${MAX_TOKEN_RETRIES})`);
          tokenRetryCount.current += 1;
          fetchToken();
        }, backoffTime);
      } else {
        setError('Maximum reconnection attempts reached. Please refresh the page.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [clearReconnectTimer]);

  // Handle WebSocket close with improved error handling
  const handleWebSocketClose = useCallback((event: HumeCloseEvent) => {
    clientLogger.info(`WebSocket closed with code: ${event.code}`)
    clearQueue()
    
    if (shouldBeConnected && ABNORMAL_CLOSE_CODES.has(event.code)) {
      clientLogger.warn(`Unexpected closure (${event.code}). Attempting to reconnect...`)
      fetchToken()
    }
  }, [shouldBeConnected, clearQueue, fetchToken])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearReconnectTimer()
      clearQueue()
      setShouldBeConnected(false)
      tokenRetryCount.current = 0
    }
  }, [clearReconnectTimer, clearQueue])

  // Initial token fetch
  useEffect(() => {
    fetchToken()
  }, [fetchToken])

  // Handle active state changes
  useEffect(() => {
    if (!isActive) {
      clearQueue()
    }
  }, [isActive, clearQueue])

  // Extract top three emotions from message
  const extractTopThreeEmotions = (message: HumeMessage): { emotion: string; score: string }[] => {
    const scores = message.models?.prosody?.scores || {}
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([emotion, score]) => ({
        emotion,
        score: Number(score).toFixed(2)
      }))
  }

  // Handle Hume messages
  const handleHumeMessage = async (message: Hume.empathicVoice.SubscribeEvent) => {
    const humeMessage = message as HumeMessage;
    switch (humeMessage.type) {
      case 'chat_metadata':
        if (humeMessage.chatGroupId) {
          setChatGroupId(humeMessage.chatGroupId);
        }
        break;
        
      case 'user_message':
      case 'assistant_message':
        if (humeMessage.message) {
          const { role, content } = humeMessage.message;
          const topEmotions = extractTopThreeEmotions(humeMessage);
          const newMessage: ChatMessage = {
            role,
            content: content || '',
            timestamp: new Date().toLocaleTimeString(),
            scores: topEmotions
          };
          setMessages(prev => [...prev, newMessage]);
        }
        break;

      case 'audio_output':
        try {
          // Convert base64 audio to blob and add to queue
          const audioData = atob(humeMessage.data || '');
          const arrayBuffer = new ArrayBuffer(audioData.length);
          const view = new Uint8Array(arrayBuffer);
          for (let i = 0; i < audioData.length; i++) {
            view[i] = audioData.charCodeAt(i);
          }
          
          // Try different audio formats in order of preference
          const formats = [
            { type: 'audio/webm;codecs=opus' },
            { type: 'audio/webm' },
            { type: 'audio/mp4' },
            { type: 'audio/mpeg' },
            { type: 'audio/ogg;codecs=opus' },
            { type: 'audio/ogg' },
            { type: 'audio/wav' },
            { type: 'audio/wave' }
          ];
          
          let audioBlob = null;
          let supportedFormat = null;
          
          // First, check which format is supported
          const audio = new Audio();
          for (const format of formats) {
            const canPlay = audio.canPlayType(format.type);
            if (canPlay === 'probably' || canPlay === 'maybe') {
              supportedFormat = format;
              break;
            }
          }
          
          if (!supportedFormat) {
            throw new Error('No supported audio format found');
          }
          
          // Create blob with supported format
          audioBlob = new Blob([arrayBuffer], supportedFormat);
          
          // Verify the blob can be played
          const testAudio = new Audio();
          testAudio.src = URL.createObjectURL(audioBlob);
          
          // Wait for metadata to load to confirm format is valid
          await new Promise((resolve, reject) => {
            testAudio.onloadedmetadata = resolve;
            testAudio.onerror = () => reject(new Error('Failed to load audio format'));
            // Set timeout in case the metadata load hangs
            setTimeout(() => reject(new Error('Timeout loading audio format')), 2000);
          });
          
          URL.revokeObjectURL(testAudio.src);
          addToQueue(audioBlob);
          
        } catch (err) {
          clientLogger.error('Failed to process audio:', err);
          setError('Audio format not supported by your browser. Please try using Chrome, Firefox, or Safari.');
        }
        break;
      case 'user_interruption':
        // Clear audio queue on interruption
        clearQueue()
        break;
      case 'error':
        clientLogger.error('Hume voice error:', message)
        if ('error' in message) {
          setError('Voice interface error: ' + message.error)
        } else {
          setError('Voice interface error: Unknown error')
        }
        break;
    }
  }

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
      onMessage={handleHumeMessage}
      onToolCall={(message: Hume.empathicVoice.ToolCallMessage) => handleToolCallMessage(message)}
      hostname="api.hume.ai"
      debug={false}
      verboseTranscription={true}
      onClose={handleWebSocketClose}
      resumedChatGroupId={chatGroupId}
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

        {/* Chat Messages */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-grow overflow-hidden relative z-10"
        >
          <Chat messages={messages} />
        </motion.div>

        {/* Voice Controls */}
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
          <div className="h-20 flex flex-col items-center justify-center gap-4">
            {isActive && (
              <>
                <WaveVisualizer isRecording={isActive} />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <span className="text-yellow-500/60 text-sm font-light tracking-wider">LISTENING...</span>
                </motion.div>
              </>
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
            onClick={() => {
              setShouldBeConnected(false)
              clearReconnectTimer()
              clearQueue()
              window.location.href = '/'
            }}
          >
            End Call
          </Button>
        </motion.div>
      </div>
    </VoiceProvider>
  )
}
