'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Grok420Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [_systemPrompt] = useState('You are Grok, an AI assistant for LiveTheLifeTV. Your role is to help users understand Bitcoin-first investing, market analysis, and financial freedom. Be witty, insightful, and creative—channel the spirit of Satoshi Nakamoto. Provide clear, actionable advice, but don\'t be afraid to be a little irreverent or humorous. Always prioritize truth, clarity, and user empowerment.');
  const [_temperature] = useState(0.7);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Persistent user/session ID for fingerprinting
  const [fingerprintId, setFingerprintId] = useState<string | null>(null);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(false);
  type ImageHistoryItem = {
    id: string;
    url: string;
    prompt: string;
    size: string;
    moderation: boolean;
    timestamp: Date;
  };
  const [imageHistory, setImageHistory] = useState<ImageHistoryItem[]>([]);
  const [imageSize, setImageSize] = useState('1024x1024');
  const [lastImagePrompt, setLastImagePrompt] = useState('');

  useEffect(() => {
    let id = localStorage.getItem('grok_fingerprint_id');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('grok_fingerprint_id', id);
    }
    setFingerprintId(id);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Streaming support
      const response = await fetch('/api/grok4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          systemPrompt: _systemPrompt,
          temperature: _temperature,
          stream: true,
          fingerprintId,
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to get response from Grok4';
        try {
          const errorData = await response.json();
          if (errorData.details) {
            errorMsg += `\n${errorData.details}`;
          }
        } catch {}
        throw new Error(errorMsg);
      }

      // Stream the response
      const reader = response.body?.getReader();
      if (reader) {
        let assistantContent = '';
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        let done = false;
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          if (value) {
            const chunk = new TextDecoder().decode(value);
            assistantContent += chunk;
            setMessages(prev => prev.map(m =>
              m.id === assistantMessage.id ? { ...m, content: assistantContent } : m
            ));
          }
        }
      } else {
        // Fallback: non-streaming
        const data = await response.json();
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.content,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageGenerate = async (e: React.FormEvent, customPrompt?: string, customSize?: string) => {
    e.preventDefault();
    const promptToUse = customPrompt || imagePrompt;
    const sizeToUse = customSize || imageSize;
    if (!promptToUse.trim() || isImageLoading) return;
    setShowImageDialog(false);
    setIsImageLoading(true);
    setLastImagePrompt(promptToUse);
    try {
      const response = await fetch('/api/grok4/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptToUse, fingerprintId, size: sizeToUse }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error + (data.details ? `\n${data.details}` : ''));
      const id = (Date.now() + 2).toString();
      setImageHistory(prev => [
        ...prev,
        {
          id,
          url: data.imageUrl,
          prompt: data.prompt,
          size: sizeToUse,
          moderation: !!data.moderation,
          timestamp: new Date(),
        },
      ]);
      setMessages(prev => [...prev, {
        id,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      }]);
      setMessages(prev => prev.map(m =>
        m.id === id
          ? {
              ...m,
              content: `<div class='flex flex-col items-center gap-2'>
                <img src='${data.imageUrl}' alt='Generated art' class='rounded-lg border-2 border-yellow-500 max-w-full h-auto mx-auto ${data.moderation ? 'blur-md' : ''}' />
                <div class='text-yellow-400 text-sm mt-2'>${data.prompt}</div>
                <div class='flex gap-2 mt-2'>
                  <a href='${data.imageUrl}' target='_blank' rel='noopener noreferrer' class='px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors'>Open</a>
                  <a href='${data.imageUrl}' download class='px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors'>Download</a>
                </div>
                ${data.moderation ? "<div class='text-red-400 text-xs mt-2'>NSFW/Moderation: This image may contain sensitive content.</div>" : ''}
              </div>`
            }
          : m
      ));
    } catch (err) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Sorry, image generation failed.' + (err instanceof Error ? `\n${err.message}` : ''),
        timestamp: new Date(),
      }]);
    } finally {
      setIsImageLoading(false);
      setImagePrompt('');
    }
  };
  const handleRegenerateImage = () => {
    if (lastImagePrompt) {
      setShowImageDialog(true);
      setImagePrompt(lastImagePrompt);
    }
  };

  const _clearChat = () => {
    setMessages([]);
  };

  const handleResetContext = () => {
    setShowResetDialog(true);
  };
  const confirmResetContext = () => {
    localStorage.removeItem('grok_fingerprint_id');
    setShowResetDialog(false);
    setResetMessage('Context has been reset. Grok will treat you as a new user.');
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };
  const cancelResetContext = () => {
    setShowResetDialog(false);
  };

  const samplePrompts = [
    'Bitcoin city skyline at sunset, digital art',
    'Satoshi Nakamoto as a renaissance painting',
    'Futuristic Bitcoin mining farm, neon colors',
    'Bitcoin logo in Van Gogh style',
    'A golden Bitcoin in outer space',
    'A cyberpunk trader with Bitcoin glasses',
    'Bitcoin as a physical coin on a treasure map',
    'A surreal landscape with Bitcoin-shaped mountains',
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      {/* Background with DNA yellow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center flex-grow mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Sparkles className="h-8 w-8 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Grok420
            </h1>
            <button
              onClick={handleResetContext}
              className="ml-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded-lg font-medium hover:bg-yellow-500/30 transition-colors text-sm"
              title="Reset Grok context"
            >
              Reset Context
            </button>
          </motion.div>
          <p className="text-yellow-400/80 text-lg max-w-2xl mx-auto">
            Chat with Grok4, powered by xAI. Experience the future of AI conversation.
          </p>
          {resetMessage && (
            <div className="mt-4 text-green-400 font-medium">{resetMessage}</div>
          )}
        </div>
        {/* Confirmation Dialog */}
        {showResetDialog && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
            <div className="bg-[#222] border-2 border-yellow-500 rounded-lg p-8 shadow-lg flex flex-col items-center">
              <p className="text-lg text-yellow-400 mb-6">Are you sure you want to reset your Grok context?<br/>This will make Grok treat you as a new user.</p>
              <div className="flex gap-4">
                <button
                  onClick={confirmResetContext}
                  className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={cancelResetContext}
                  className="px-6 py-2 bg-gray-700 text-yellow-400 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-center">
          {/* Settings Panel is hidden, but state is preserved for systemPrompt and temperature */}

          {/* Chat Interface */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1c1f26] backdrop-blur-sm border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-lg p-6 h-[70vh] flex flex-col w-full max-w-7xl mx-auto">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-yellow-500/20 scrollbar-track-transparent">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="inline-block p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                        <Bot className="h-8 w-8 text-yellow-500" />
                      </div>
                      <p className="text-yellow-400/80 text-lg font-bold">Talk to Satoshi</p>
                      <p className="text-white/50 text-sm mt-2">“If you don&#39;t believe it or don&#39;t get it, I don&#39;t have the time to try to convince you, sorry.”</p>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-yellow-500/20' : 'bg-yellow-500/10'}`}>
                            {message.role === 'user' ? (
                              <User className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <Bot className="h-4 w-4 text-yellow-500" />
                            )}
                          </div>
                          <div className={`p-4 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-yellow-500/20 border border-yellow-500/30' 
                              : 'bg-black/40 border border-yellow-500/20'
                          }`}>
                            <p className="text-white/90 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.content }} />
                            <p className="text-xs text-yellow-400/50 mt-2">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="flex gap-3 max-w-[80%]">
                      <div className="p-2 rounded-full bg-yellow-500/10">
                        <Bot className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div className="p-4 rounded-lg bg-black/40 border border-yellow-500/20">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 text-yellow-500 animate-spin" />
                          <span className="text-yellow-400/80">Grok4 is thinking...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Grok4 anything..."
                  className="flex-1 bg-black/60 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-yellow-400/50 focus:border-yellow-500 focus:outline-none"
                  disabled={isLoading || isImageLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 text-black font-bold px-6 py-3 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowImageDialog(true)}
                  disabled={isImageLoading}
                  className="bg-yellow-500/20 hover:bg-yellow-400/30 text-yellow-500 font-bold px-4 py-3 rounded-lg border border-yellow-500/30 transition-colors disabled:cursor-not-allowed flex items-center justify-center"
                  title="Generate image with art direction prompt"
                >
                  <ImageIcon className="h-5 w-5" />
                </button>
              </form>
              {/* Image Prompt Dialog */}
              {showImageDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
                  <form onSubmit={e => handleImageGenerate(e)} className="bg-[#222] border-2 border-yellow-500 rounded-lg p-8 shadow-lg flex flex-col items-center w-full max-w-md">
                    <h2 className="text-xl font-bold text-yellow-500 mb-4">Generate Art</h2>
                    <div className="flex flex-wrap gap-2 mb-4 w-full">
                      {samplePrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setImagePrompt(prompt)}
                          className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded-lg text-xs hover:bg-yellow-500/40 transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                    <textarea
                      value={imagePrompt}
                      onChange={e => setImagePrompt(e.target.value)}
                      className="w-full h-24 bg-black/60 border border-yellow-500/30 rounded-lg p-3 text-white text-sm resize-none focus:border-yellow-500 focus:outline-none mb-4"
                      placeholder="Describe the art direction..."
                      autoFocus
                    />
                    <div className="flex gap-4 w-full mb-4">
                      <label className="text-yellow-400 text-sm flex items-center gap-2">
                        <input
                          type="radio"
                          name="size"
                          value="1024x1024"
                          checked={imageSize === '1024x1024'}
                          onChange={() => setImageSize('1024x1024')}
                          className="accent-yellow-500"
                        />
                        Square
                      </label>
                      <label className="text-yellow-400 text-sm flex items-center gap-2">
                        <input
                          type="radio"
                          name="size"
                          value="1024x1792"
                          checked={imageSize === '1024x1792'}
                          onChange={() => setImageSize('1024x1792')}
                          className="accent-yellow-500"
                        />
                        Portrait
                      </label>
                      <label className="text-yellow-400 text-sm flex items-center gap-2">
                        <input
                          type="radio"
                          name="size"
                          value="1792x1024"
                          checked={imageSize === '1792x1024'}
                          onChange={() => setImageSize('1792x1024')}
                          className="accent-yellow-500"
                        />
                        Landscape
                      </label>
                    </div>
                    <div className="flex gap-4 w-full justify-end">
                      <button
                        type="button"
                        onClick={() => setShowImageDialog(false)}
                        className="px-6 py-2 bg-gray-700 text-yellow-400 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isImageLoading || !imagePrompt.trim()}
                        className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50"
                      >
                        {isImageLoading ? 'Generating...' : 'Generate'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {/* Show loading indicator for image generation */}
              {isImageLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
                  <div className="bg-[#222] border-2 border-yellow-500 rounded-lg p-8 shadow-lg flex flex-col items-center">
                    <Loader2 className="h-8 w-8 text-yellow-500 animate-spin mb-4" />
                    <p className="text-yellow-400">Generating image...</p>
                  </div>
                </div>
              )}
              {/* Regenerate and History */}
              {imageHistory.length > 0 && (
                <div className="mt-8 w-full max-w-2xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 font-bold">Image History</span>
                    <button
                      onClick={handleRegenerateImage}
                      className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition-colors text-sm"
                      title="Regenerate last image"
                    >
                      Regenerate Last
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {imageHistory.map(img => (
                      <div key={img.id} className="bg-[#1c1f26] border-2 border-yellow-500 rounded-lg p-4 flex flex-col items-center">
                        <img
                          src={img.url}
                          alt={img.prompt}
                          className={`rounded-lg border-2 border-yellow-500 max-w-full h-auto mx-auto ${img.moderation ? 'blur-md' : ''}`}
                        />
                        <div className="text-yellow-400 text-sm mt-2 text-center">{img.prompt}</div>
                        <div className="text-xs text-yellow-400 mt-1">{img.size.replace('x', ' × ')}</div>
                        <div className="flex gap-2 mt-2">
                          <a href={img.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors">Open</a>
                          <a href={img.url} download className="px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors">Download</a>
                        </div>
                        {img.moderation && (
                          <div className="text-red-400 text-xs mt-2">NSFW/Moderation: This image may contain sensitive content.</div>
                        )}
                        <div className="text-yellow-400 text-xs mt-2">{img.timestamp.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #F7B500;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #F7B500;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
