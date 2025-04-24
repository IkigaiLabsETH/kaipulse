'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { VoiceProvider } from "@humeai/voice-react";
import { Hume } from "hume";
import { CloseEvent as HumeCloseEvent } from 'hume/core/websocket/events';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { clientLogger } from "@/utils/clientLogger";
import { handleToolCallMessage } from "@/services/voice/tools";
import { Chat } from "@/components/ai/Chat";
import { VoiceToggle } from "@/components/ai/VoiceToggle";
import { Loader } from "@/components/ai/Loader";
import { MicFFT } from "@/components/ai/MicFFT";

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
          const initialHeight = Math.random() * 25 + 15; // Random initial height
          
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
  const [currentView, setCurrentView] = useState<'dialogue' | 'visual'>('dialogue');

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
      <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
        {/* Art Gallery Background */}
        <div className="absolute inset-0 z-0">
          {/* Magazine style header line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/5 to-black opacity-90"></div>
          
          {/* Bitcoin-inspired pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 35.6c-3 0-5.6-2.6-5.6-5.6s2.6-5.6 5.6-5.6 5.6 2.6 5.6 5.6-2.5 5.6-5.6 5.6zm-.7-9.8v1.5c-1 0-1.7.3-1.9.6-.3.4-.1 1 .3 1.9l1.3-.5c-.2-.4-.2-.8-.1-.9 0 0 .2-.1.5-.1v2.1l-.4.1c-.7.2-1.3.5-1.6.9-.3.4-.4.9-.3 1.4.1.5.4.9.8 1.1.4.3.9.4 1.5.4v.9h.9v-.9c1.2-.1 2-1 2.4-1.9l-1.4-.6c-.2.5-.5.8-.9.9v-1.9c.7-.2 1.2-.4 1.6-.7.3-.2.6-.5.7-.9.1-.3.1-.7 0-1.1-.1-.4-.4-.7-.7-.9-.3-.2-.8-.3-1.3-.4v-1.5h-.9zm0 6.5c-.4 0-.6-.3-.6-.5 0-.2.1-.3.2-.4.1-.1.2-.1.5-.2v1.1h-.1zm.9-3.1v-1c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .1 0 .2-.1.3 0 .1-.1.1-.2.2-.2-.1-.3 0-.4-.1z' fill='%23F7B500' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}></div>
          
          {/* Gallery frame */}
          <div className="absolute top-0 left-0 w-full h-full flex">
            <div className="absolute bottom-0 h-1 w-[80%] mx-auto left-[10%] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          </div>
        </div>

        {/* Gallery Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 py-10 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Audio Experience • AI Curator • Voice Interaction</p>
              <h1 className="text-center">
                <span className="text-5xl md:text-6xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                  Voice Gallery
                </span>
              </h1>
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-16 bg-yellow-500/30"></div>
                <p className="mx-6 text-lg text-white/70 font-light italic">A Sonic Experience</p>
                <div className="h-px w-16 bg-yellow-500/30"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button 
                onClick={() => setCurrentView('dialogue')}
                className={`px-5 py-2 relative transition-all ${
                  currentView === 'dialogue' ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
              >
                {currentView === 'dialogue' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-sm z-0" 
                  />
                )}
                <span className="relative z-10 text-yellow-500 font-medium tracking-wide">Dialogue</span>
              </button>
              <button 
                onClick={() => setCurrentView('visual')}
                className={`px-5 py-2 relative transition-all ${
                  currentView === 'visual' ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                }`}
              >
                {currentView === 'visual' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-sm z-0" 
                  />
                )}
                <span className="relative z-10 text-yellow-500 font-medium tracking-wide">Visual</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Gallery Content */}
        <div className="flex-1 flex flex-col relative z-10 px-6">
          <AnimatePresence mode="wait">
            {currentView === 'dialogue' ? (
              <motion.div
                key="dialogue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col items-center justify-center"
              >
                {/* Exhibition description */}
                {messages.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                  >
                    <div className="relative inline-block mb-8">
                      <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20 blur-lg rounded-full"></div>
                      <div className="relative py-3 px-8 bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded">
                        <h2 className="text-yellow-500/90 text-xl font-light tracking-wide">
                          Welcome to the <span className="font-bold">Conversational Arts Exhibition</span>
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-white/70 text-lg leading-relaxed">
                        In this interactive installation, you&apos;ll engage in a dialogue with an AI curator that responds to your voice.
                      </p>
                      <p className="text-white/50 text-base">
                        Each conversation creates a unique auditory experience, carefully analyzed for emotional resonance.
                      </p>
                    </div>
                    <div className="h-px w-24 bg-yellow-500/30 mx-auto mt-8"></div>
                  </motion.div>
                )}
                
                {/* Chat Messages */}
                <div className="w-full max-w-4xl mx-auto overflow-hidden mb-8">
                  <Chat messages={messages} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="visual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex items-center justify-center py-8"
              >
                <div className="w-full max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Premium gold border with enhanced glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                      <div className="absolute inset-0.5 bg-black/80 backdrop-blur-sm rounded-sm"></div>
                    </div>
                    
                    <div className="p-8 relative z-10 rounded-sm">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-yellow-500 tracking-tight uppercase">Voice Spectrum</h3>
                        <p className="text-white/60 mt-2">
                          An artistic visualization of your audio input, rendered in real-time
                        </p>
                      </div>
                      <div className="aspect-[16/9] bg-black/70 rounded-sm overflow-hidden relative group">
                        {/* Audio corner accents */}
                        <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-yellow-500/30"></div>
                        <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-yellow-500/30"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* @ts-expect-error - Component props are correctly defined but TypeScript has issues with the imported component */}
                          <MicFFT isActive={isActive} className="" />
                        </div>
                        <div className="absolute bottom-4 left-4 text-xs text-yellow-500/40">
                          {isActive ? 'Visualizing live input' : 'Waiting for input...'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Voice Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-auto py-10 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Premium gold border with enhanced glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                <div className="absolute inset-0.5 bg-black/80 backdrop-blur-sm rounded-sm"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="flex-1 flex flex-col items-center md:items-start gap-4">
                    <div className="uppercase tracking-[0.2em] text-white/60 text-sm font-satoshi">
                      <span>{isActive ? 'LISTENING' : 'READY'}</span>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 blur-lg rounded-full group-hover:from-yellow-500/30 group-hover:via-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300" />
                      <VoiceToggle onActiveChange={setIsActive} />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-auto flex-1 flex flex-col items-center gap-4">
                    {isActive && <GalleryVisualizer isRecording={isActive} />}
                  </div>
                  
                  <div className="w-full md:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 hover:from-yellow-500/20 hover:to-yellow-600/20 text-yellow-500 border border-yellow-500/30 hover:border-yellow-500/50 h-12 px-8 transition-all duration-300"
                      onClick={handleEndCall}
                    >
                      Leave Exhibition
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Nameplate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative z-10 pt-4 pb-8 text-center"
        >
          <div className="h-px w-24 bg-yellow-500/30 mx-auto mb-4"></div>
          <p className="text-white/40 uppercase tracking-widest text-xs font-light font-satoshi">
            MSTY Voice Gallery • Powered by Hume AI • 2023
          </p>
        </motion.div>
      </div>
    </VoiceProvider>
  );
} 