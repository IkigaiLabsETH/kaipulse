'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { VoiceProvider } from "@humeai/voice-react";
import { Hume } from "hume";
import { CloseEvent as HumeCloseEvent } from 'hume/core/websocket/events';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { clientLogger } from "@/utils/clientLogger";
import { handleToolCallMessage } from "@/services/voice/tools";
import { Chat } from "@/components/ai/Chat";
import { VoiceToggle } from "@/components/ai/VoiceToggle";
import { Loader } from "@/components/ai/Loader";

// Refined voice visualizer with gallery aesthetics
const GalleryVisualizer = ({ isRecording }: { isRecording: boolean }) => {
  const width = 300;
  const height = 80;
  const bars = 32;

  return (
    <div className="relative w-[300px] h-[80px]">
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full"
      >
        {Array.from({ length: bars }).map((_, index) => {
          const initialHeight = Math.random() * 25 + 15;
          
          return (
            <motion.rect
              key={`wave-bar-${index}`}
              initial={{ height: 2 }}
              animate={isRecording ? {
                height: [initialHeight, initialHeight + 30, initialHeight],
                y: [height/2 - initialHeight/2, height/2 - (initialHeight + 30)/2, height/2 - initialHeight/2]
              } : {
                height: 2,
                y: height/2 - 1
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.03,
                ease: "easeInOut"
              }}
              width={5}
              x={(index * width) / bars}
              fill="rgb(234 179 8)"
              opacity={0.8}
              rx={2}
            />
          );
        })}
      </motion.svg>
    </div>
  );
};

// Audio queue hook
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

  return { addToQueue, clearQueue, isPlaying };
};

// Configure constants
const RECONNECT_DELAY_MS = 3000;
const ABNORMAL_CLOSE_CODES = new Set([1006, 1011, 1012, 1013, 1014]);
const MAX_TOKEN_RETRIES = 3;

interface ChatMessage {
  role: Hume.empathicVoice.Role;
  timestamp: string;
  content: string;
  scores: { emotion: string; score: string }[];
}

interface HumeMessage {
  type: string;
  models?: {
    prosody?: {
      scores: Record<string, number>;
    };
  };
  message?: {
    role: Hume.empathicVoice.Role;
    content: string;
  };
  data?: string;
  error?: string;
  chatGroupId?: string;
}

interface VoiceGalleryProps {
  configId: string;
  onEndCall?: () => void;
}

export function VoiceGallery({ configId, onEndCall }: VoiceGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [shouldBeConnected, setShouldBeConnected] = useState(false);
  const [chatGroupId, setChatGroupId] = useState<string | undefined>();
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { addToQueue, clearQueue } = useAudioQueue();
  const tokenRetryCount = useRef(0);

  // Check for pipeline URLs and redirect
  useEffect(() => {
    if (pathname?.includes('/pipeline')) {
      clientLogger.warn('Pipeline URL detected in VoiceGallery, redirecting to home');
      router.replace('/');
      return;
    }
  }, [pathname, router]);

  // Clear reconnection timer
  const clearReconnectTimer = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  // Handle errors safely
  const handleError = useCallback((err: unknown, context: string) => {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    const errorStack = err instanceof Error ? err.stack : undefined;
    
    clientLogger.error(`Voice ${context} error:`, err);
    setError(errorMessage);
    
    if (errorStack) {
      setErrorDetails(errorStack);
    }
    
    return errorMessage;
  }, []);

  // Fetch access token with validation
  const fetchToken = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setErrorDetails(null);
      
      const response = await fetch('/api/hume');
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: 'Failed to parse response' }));
        throw new Error(data.error || `Failed to fetch access token: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.accessToken || typeof data.accessToken !== 'string' || data.accessToken === 'undefined') {
        throw new Error('Invalid access token received from server');
      }

      // Reset retry count on successful token fetch
      tokenRetryCount.current = 0;
      clientLogger.info('Successfully initialized voice interface');
      setAccessToken(data.accessToken);
      setShouldBeConnected(true);
    } catch (err) {
      handleError(err, 'initialization');
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
  }, [clearReconnectTimer, handleError]);

  // Handle WebSocket close with improved error handling
  const handleWebSocketClose = useCallback((event: HumeCloseEvent) => {
    clientLogger.info(`WebSocket closed with code: ${event.code}`);
    clearQueue();
    
    if (shouldBeConnected && ABNORMAL_CLOSE_CODES.has(event.code)) {
      clientLogger.warn(`Unexpected closure (${event.code}). Attempting to reconnect...`);
      fetchToken();
    }
  }, [shouldBeConnected, clearQueue, fetchToken]);

  // Handle cleanup and navigation
  const handleEndCall = useCallback(async () => {
    // Cleanup
    setShouldBeConnected(false);
    clearReconnectTimer();
    clearQueue();
    
    try {
      if (onEndCall) {
        onEndCall();
      } else {
        await router.replace('/');
      }
    } catch (err) {
      clientLogger.error('Navigation error:', err);
      // Fallback to window.location if router fails
      window.location.replace('/');
    }
  }, [clearReconnectTimer, clearQueue, router, onEndCall]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setShouldBeConnected(false);
      clearReconnectTimer();
      clearQueue();
    };
  }, [clearReconnectTimer, clearQueue]);

  // Initial token fetch
  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  // Handle active state changes
  useEffect(() => {
    if (!isActive) {
      clearQueue();
    }
  }, [isActive, clearQueue]);

  // Extract top three emotions from message
  const extractTopThreeEmotions = (message: HumeMessage): { emotion: string; score: string }[] => {
    const scores = message.models?.prosody?.scores || {};
    return Object.entries(scores)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 3)
      .map(([emotion, score]) => ({
        emotion,
        score: Number(score).toFixed(2)
      }));
  };

  // Handle Hume messages
  const handleHumeMessage = useCallback(async (message: Hume.empathicVoice.SubscribeEvent) => {
    try {
      const humeMessage = message as unknown as HumeMessage;
      
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
            if (!humeMessage.data) {
              clientLogger.warn('Empty audio data received');
              return;
            }
            
            // Convert base64 audio to blob and add to queue
            const audioData = atob(humeMessage.data);
            const arrayBuffer = new ArrayBuffer(audioData.length);
            const view = new Uint8Array(arrayBuffer);
            for (let i = 0; i < audioData.length; i++) {
              view[i] = audioData.charCodeAt(i);
            }
            
            // Create audio blob and add to queue
            const audioBlob = new Blob([arrayBuffer], { type: 'audio/webm;codecs=opus' });
            addToQueue(audioBlob);
            
          } catch (err) {
            handleError(err, 'audio');
          }
          break;
          
        case 'user_interruption':
          clearQueue();
          break;
          
        case 'error':
          const errorMsg = 'error' in humeMessage ? humeMessage.error : 'Unknown error';
          handleError(new Error(errorMsg), 'voice');
          break;
      }
    } catch (err) {
      handleError(err, 'message handling');
    }
  }, [addToQueue, clearQueue, handleError]);

  const handleRetry = useCallback(async () => {
    setError(null);
    setErrorDetails(null);
    tokenRetryCount.current = 0;
    try {
      const response = await fetch('/api/hume');
      if (!response.ok) {
        throw new Error(`Failed to fetch access token: ${response.status}`);
      }
      const data = await response.json();
      if (!data.accessToken) {
        throw new Error('Invalid access token received');
      }
      setAccessToken(data.accessToken);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to initialize voice';
      clientLogger.error('Voice init error:', message);
      setError(message);
    }
  }, []);

  // Don't render anything if we detect a pipeline URL
  if (pathname?.includes('/pipeline')) {
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900/90 to-yellow-950/20">
        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full animate-pulse" />
          <Loader color="yellow" />
        </div>
      </div>
    );
  }

  // Error state
  if (error || !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900/90 to-yellow-950/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-500 text-center max-w-md px-8 py-12 backdrop-blur-lg bg-black/40 rounded-2xl border border-yellow-500/10 shadow-2xl"
        >
          <p className="text-2xl font-medium mb-4">Exhibition Unavailable</p>
          <p className="mb-4 text-yellow-500/80">{error || 'Unable to initialize voice interface. Please check your connection and try again.'}</p>
          <Button
            variant="outline"
            onClick={handleEndCall}
            className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 mt-4"
          >
            Return to Gallery Entrance
          </Button>
          {errorDetails && (
            <pre className="text-xs text-yellow-500/60 mt-4 text-left whitespace-pre-wrap p-4 bg-black/40 rounded-lg">
              {errorDetails}
            </pre>
          )}
        </motion.div>
      </div>
    );
  }

  // Main UI
  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId={configId}
      onMessage={handleHumeMessage}
      onToolCall={(message: unknown) => handleToolCallMessage(message)}
      hostname="api.hume.ai"
      debug={false}
      verboseTranscription={true}
      onClose={handleWebSocketClose}
      resumedChatGroupId={chatGroupId}
    >
      <div className="relative min-h-screen bg-black">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-luminosity" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Voice Gallery</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-boska font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Interactive
              </span>
              <span className="text-white"> Voice Experience</span>
            </h1>
          </motion.div>

          {/* Main Content */}
          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center py-12"
            >
              <div className="relative mt-8">
                <div className="absolute -inset-4 bg-yellow-400/10 blur-2xl rounded-full animate-pulse"></div>
                <Loader color="yellow" />
              </div>
            </motion.div>
          ) : error ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12"
            >
              <div className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                  <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Connection Error</span>
                </div>
                <p className="mb-6 text-xl font-satoshi leading-relaxed text-zinc-300">{error}</p>
                {errorDetails && (
                  <p className="text-sm text-zinc-400 mb-6">{errorDetails}</p>
                )}
                <Button
                  onClick={handleRetry}
                  className="group inline-flex items-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  Retry Connection
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chat Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                    <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Dialogue</span>
                  </div>
                </div>
                <Chat messages={messages} />
              </motion.div>

              {/* Controls Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                    <span className="ml-4 text-sm uppercase tracking-widest text-yellow-400 font-epilogue">Controls</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-8">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative">
                      <VoiceToggle onActiveChange={setIsActive} />
                    </div>
                  </div>
                  
                  <div className="h-20 flex flex-col items-center justify-center gap-4">
                    {isActive && (
                      <>
                        <GalleryVisualizer isRecording={isActive} />
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse" />
                          <span className="text-yellow-400/80 text-sm font-light tracking-wider font-epilogue">LISTENING...</span>
                        </motion.div>
                      </>
                    )}
                  </div>
                  
                  <Button
                    onClick={handleEndCall}
                    className="group inline-flex items-center gap-3 rounded-lg bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] px-8 py-4 text-xl font-semibold text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    End Call
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </VoiceProvider>
  );
} 