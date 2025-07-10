'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles, Image as ImageIcon, Copy, Eye, Info } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

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
    revisedPrompt?: string;
    size: string;
    moderation: boolean;
    timestamp: Date;
  };
  const [imageHistory, setImageHistory] = useState<ImageHistoryItem[]>([]);
  const [imageSize, setImageSize] = useState('1024x1024');
  const [lastImagePrompt, setLastImagePrompt] = useState('');
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [previewImage, setPreviewImage] = useState<ImageHistoryItem | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);

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
    setIsPolling(false);

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
        if (data.polling) {
          setIsPolling(true);
        }
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
        content: error instanceof Error
          ? `Grok4 is having a Satoshi moment—${error.message.replace('Failed to get fingerprint token from xAI', 'Network hiccup! Couldn’t verify your identity. Try again in a few blocks.')}`
          : 'Grok4 is having a Satoshi moment—please try again soon.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsPolling(false);
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
      const newImage: ImageHistoryItem = {
        id,
        url: data.imageUrl,
        prompt: data.prompt,
        revisedPrompt: data.revised_prompt,
        size: sizeToUse,
        moderation: !!data.moderation,
        timestamp: new Date(),
      };
      setImageHistory(prev => [...prev, newImage]);
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
        content: `My creative circuits glitched! Couldn’t generate your Bitcoin masterpiece.` + (err instanceof Error ? `\n${err.message.replace('Unexpected token', 'Looks like I got HTML instead of art. Try again soon!')}` : ''),
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

  const handlePreviewImage = (image: ImageHistoryItem) => {
    setPreviewImage(image);
    setShowImagePreview(true);
  };

  const handleCopyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      // You could add a toast notification here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = prompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
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
              onClick={() => setShowInfoDialog(true)}
              className="ml-2 p-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 hover:bg-yellow-500/20 transition-colors"
              title="WTF is Grok 4?"
            >
              <Info className="h-6 w-6 text-yellow-400" />
            </button>
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
        {showInfoDialog && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
            <div className="bg-[#181818] border-2 border-yellow-500 rounded-xl p-8 shadow-2xl max-w-lg w-full relative">
              <button
                onClick={() => setShowInfoDialog(false)}
                className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 text-2xl font-bold"
                title="Close"
              >×</button>
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-7 w-7 text-yellow-400" />
                <span className="text-2xl font-bold text-yellow-400">What is Grok 4?</span>
              </div>
              <div className="text-yellow-300 text-md leading-relaxed space-y-3">
                <div className="font-bold text-yellow-400 text-lg mb-2">🚀 Insane AI DeFi Energy 🚀</div>
                <div>
                  <span className="font-bold text-yellow-500">Elon did it again.</span> Grok 4 just absolutely <span className="font-bold text-yellow-400">nuked</span> the AI leaderboard. This isn’t just another LLM—this is the giga-brain, meme-fueled, degen-coded, Satoshi-approved AI that’s here to <span className="underline">liquidate the competition</span>.
                </div>
                <ul className="list-disc pl-6 text-yellow-200 text-sm space-y-1">
                  <li>🧠 <b>Post-training RL spend = pretraining spend</b> (Elon just YOLO’d the budget)</li>
                  <li>💸 <b>$3/M input toks, $15/M output toks</b> (256k context, 2x price after 128k—max bag size)</li>
                  <li>🏆 <b>#1 on Humanity’s Last Exam</b> (44.4%—next best is 26.9%)</li>
                  <li>🎓 <b>#1 on GPQA (grad problems)</b> 88.9% (next best 86.4%)</li>
                  <li>🧮 <b>#1 on AIME 2025 (Math)</b> 100% (next best 98.4%)</li>
                  <li>🧑‍🎓 <b>#1 on Harvard MIT Math</b> 96.7% (next best 82.5%)</li>
                  <li>🇺🇸 <b>#1 on USAMO25 (Math)</b> 61.9% (next best 49.4%)</li>
                  <li>🤖 <b>#1 on ARC-AGI-2</b> (15.9%—next best 8.6%)</li>
                  <li>💻 <b>#1 on LiveCodeBench</b> (79.4%—next best 75.8%)</li>
                </ul>
                <div className="mt-3 text-yellow-400 text-sm">
                  Grok 4 is <span className="font-bold">potentially better than PhD level in every subject</span>—no exceptions. It’s fast, it’s cheap, and it’s here to <span className="font-bold">wreak havoc</span> in the AI wars. <span className="italic">Elon has entered the chat.</span>
                </div>
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
                
                {isPolling && (
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
                          <span className="text-yellow-400/80">Grok4 is still thinking... (live result pending)</span>
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

              {/* Image Preview Dialog */}
              {showImagePreview && previewImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-[#222] border-2 border-yellow-500 rounded-lg p-6 shadow-lg max-w-4xl max-h-[90vh] overflow-y-auto"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-yellow-500">Image Preview</h3>
                      <button
                        onClick={() => setShowImagePreview(false)}
                        className="text-yellow-400 hover:text-yellow-300 text-2xl font-bold"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <Image
                          src={previewImage.url}
                          alt={previewImage.prompt}
                          width={800}
                          height={800}
                          className={`rounded-lg border-2 border-yellow-500 w-full h-auto ${previewImage.moderation ? 'blur-md' : ''}`}
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-yellow-400 font-bold mb-2">Original Prompt:</h4>
                          <p className="text-white/90 text-sm bg-black/40 p-3 rounded border border-yellow-500/20">
                            {previewImage.prompt}
                          </p>
                        </div>
                        {previewImage.revisedPrompt && (
                          <div>
                            <h4 className="text-yellow-400 font-bold mb-2">Revised Prompt:</h4>
                            <p className="text-white/70 text-sm bg-black/40 p-3 rounded border border-yellow-500/20">
                              {previewImage.revisedPrompt}
                            </p>
                          </div>
                        )}
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() => handleCopyPrompt(previewImage.prompt)}
                            className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors flex items-center gap-2"
                          >
                            <Copy className="h-4 w-4" />
                            Copy Original
                          </button>
                          {previewImage.revisedPrompt && (
                            <button
                              onClick={() => handleCopyPrompt(previewImage.revisedPrompt!)}
                              className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors flex items-center gap-2"
                            >
                              <Copy className="h-4 w-4" />
                              Copy Revised
                            </button>
                          )}
                          <a href={previewImage.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors">
                            Open Full Size
                          </a>
                          <a href={previewImage.url} download className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors">
                            Download
                          </a>
                        </div>
                        <div className="text-xs text-yellow-400/60">
                          Size: {previewImage.size.replace('x', ' × ')} | 
                          Created: {previewImage.timestamp.toLocaleString()}
                          {previewImage.moderation && (
                            <span className="text-red-400 ml-2">• NSFW/Moderation</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#1c1f26] border-2 border-yellow-500 rounded-lg p-4 flex flex-col items-center"
                      >
                        <div className="relative group cursor-pointer" onClick={() => handlePreviewImage(img)}>
                          <Image
                            src={img.url}
                            alt={img.prompt}
                            width={512}
                            height={512}
                            className={`rounded-lg border-2 border-yellow-500 max-w-full h-auto mx-auto transition-all duration-300 ${img.moderation ? 'blur-md' : ''} group-hover:scale-105`}
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <Eye className="h-8 w-8 text-yellow-500" />
                          </div>
                        </div>
                        <div className="text-yellow-400 text-sm mt-2 text-center max-w-full">
                          <div className="font-medium">Original Prompt:</div>
                          <div className="text-xs text-yellow-400/80 break-words">{img.prompt}</div>
                          {img.revisedPrompt && (
                            <>
                              <div className="font-medium mt-2">Revised Prompt:</div>
                              <div className="text-xs text-yellow-400/60 break-words">{img.revisedPrompt}</div>
                            </>
                          )}
                        </div>
                        <div className="text-xs text-yellow-400 mt-1">{img.size.replace('x', ' × ')}</div>
                        <div className="flex gap-2 mt-2 flex-wrap justify-center">
                          <button
                            onClick={() => handleCopyPrompt(img.prompt)}
                            className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors text-xs flex items-center gap-1"
                            title="Copy prompt"
                          >
                            <Copy className="h-3 w-3" />
                            Copy
                          </button>
                          <a href={img.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Open</a>
                          <a href={img.url} download className="px-3 py-1 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Download</a>
                        </div>
                        {img.moderation && (
                          <div className="text-red-400 text-xs mt-2">NSFW/Moderation: This image may contain sensitive content.</div>
                        )}
                        <div className="text-yellow-400 text-xs mt-2">{img.timestamp.toLocaleString()}</div>
                      </motion.div>
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
