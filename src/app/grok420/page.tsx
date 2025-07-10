'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles, Image as ImageIcon, Copy, Info } from 'lucide-react';
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
  const [lastImagePrompt, setLastImagePrompt] = useState('');
  const [isPolling, setIsPolling] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [mainImageIdx] = useState(imageHistory.length - 1);
  const [showImagePreview, setShowImagePreview] = useState(false);

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
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to get response from Grok4';
        try {
          const errorData = await response.json();
          if (errorData.details) {
            errorMsg += `\n${errorData.details}`;
          }
          // Show the full error object for debugging
          errorMsg += `\n${JSON.stringify(errorData)}`;
        } catch (e) {
          errorMsg += `\n${e}`;
        }
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
        // After streaming, check for empty content
        if (!assistantContent.trim()) {
          setMessages(prev => prev.map(m =>
            m.id === assistantMessage.id ? { ...m, content: 'No response from Grok4 (empty or unexpected error).' } : m
          ));
        }
      } else {
        // Fallback: non-streaming
        const data = await response.json();
        const content = data.content && data.content.trim() ? data.content : (data.error || 'Grok4 did not return a response.');
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content,
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
          ? `Grok4 is having a Satoshi moment—${error.message}`
          : 'Grok4 is having a Satoshi moment—please try again soon.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      // Show error details in a big, obvious way if present
      if (error instanceof Error && error.message && error.message.includes('{')) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: `<pre style='color: #ff3333; background: #1a0000; font-size: 1.1em; padding: 1em; border-radius: 8px; margin-top: 1em; overflow-x: auto;'>${error.message}</pre>`,
          timestamp: new Date(),
        }]);
      }
    } finally {
      setIsLoading(false);
      setIsPolling(false);
    }
  };

  const handleImageGenerate = async (e: React.FormEvent, customPrompt?: string) => {
    e.preventDefault();
    const promptToUse = customPrompt || imagePrompt;
    if (!promptToUse.trim() || isImageLoading) return;
    setShowImageDialog(false);
    setIsImageLoading(true);
    setLastImagePrompt(promptToUse);
    try {
      const response = await fetch('/api/grok4/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptToUse }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error + (data.details ? `\n${data.details}` : ''));
      const id = (Date.now() + 2).toString();
      const newImage: ImageHistoryItem = {
        id,
        url: data.imageUrl,
        prompt: data.prompt,
        revisedPrompt: data.revisedPrompt, // camelCase only
        size: '1024x1024', // Default size since xAI doesn't support size selection
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
                <div class='w-full max-w-full px-2 flex justify-center'>
                  <img src='${data.imageUrl}' alt='Generated art' class='rounded-lg border-2 border-yellow-500 max-w-full w-full h-auto mx-auto ${data.moderation ? 'blur-md' : ''}' />
                </div>
                <div class='text-yellow-400 text-sm mt-2 font-bold'>Original Prompt:</div>
                <div class='text-yellow-400 text-xs mb-1'>${data.prompt}</div>
                ${data.revisedPrompt ? `<div class='text-yellow-300 text-sm font-bold mt-1'>Revised Prompt:</div><div class='text-yellow-300 text-xs mb-2'>${data.revisedPrompt}</div>` : ''}
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
        content: `My creative circuits glitched! Couldn't generate your Bitcoin masterpiece.` + (err instanceof Error ? `\n${err.message.replace('Unexpected token', 'Looks like I got HTML instead of art. Try again soon!')}` : ''),
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

  const handleCopyMessage = async (content: string, id: string) => {
    try {
      // Extract prompt text from HTML content if it's an image message
      let textToCopy = content;
      
      // If content contains image HTML, extract the original prompt
      if (content.includes('Original Prompt:') && content.includes('Generated art')) {
        const promptMatch = content.match(/Original Prompt:<\/div>\s*<div[^>]*>([^<]+)<\/div>/);
        if (promptMatch) {
          textToCopy = promptMatch[1].trim();
        }
      }
      
      await navigator.clipboard.writeText(textToCopy);
      setCopiedMessageId(id);
      setTimeout(() => setCopiedMessageId(null), 1200);
    } catch {}
  };

  const _clearChat = () => {
    setMessages([]);
  };

  const handleResetContext = () => {
    setShowResetDialog(true);
  };
  const confirmResetContext = () => {
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

  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  // Modal keyboard navigation and swipe
  useEffect(() => {
    if (!showImagePreview || modalIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowImagePreview(false);
      if (e.key === 'ArrowLeft' && modalIdx > 0) setModalIdx(modalIdx - 1);
      if (e.key === 'ArrowRight' && modalIdx < imageHistory.length - 1) setModalIdx(modalIdx + 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showImagePreview, modalIdx, imageHistory.length]);

  // Modal swipe-to-close and swipe-to-switch (mobile)
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0 && modalIdx! > 0) setModalIdx(modalIdx! - 1);
      if (dx < 0 && modalIdx! < imageHistory.length - 1) setModalIdx(modalIdx! + 1);
    } else if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx)) {
      setShowImagePreview(false);
    }
    touchStart.current = null;
  };

  // Modal zoom/pan handlers
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(z => Math.max(1, Math.min(4, z - e.deltaY * 0.002)));
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };
  const handleMouseUp = () => setDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !dragStart) return;
    setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleModalOpen = (idx: number) => {
    setModalIdx(idx);
    setShowImagePreview(true);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

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
                          } relative`}>
                            <button
                              className="absolute top-2 right-2 p-1 rounded bg-yellow-500/10 hover:bg-yellow-500/30 transition-colors"
                              title="Copy message"
                              onClick={() => handleCopyMessage(message.content, message.id)}
                            >
                              <Copy className="h-4 w-4 text-yellow-400" />
                            </button>
                            {copiedMessageId === message.id && (
                              <span className="absolute top-2 right-10 text-xs text-yellow-400 bg-black/80 px-2 py-1 rounded shadow">Copied!</span>
                            )}
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
                    <div className="text-yellow-400/60 text-xs mb-4 text-center">
                      xAI generates images at 1024x1024 resolution
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
              {showImagePreview && modalIdx !== null && imageHistory[modalIdx] && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50 bg-black/90"
                  style={{ touchAction: 'none' }}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="bg-[#222] border-2 border-yellow-500 rounded-2xl p-6 shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative flex flex-col items-center">
                    <button
                      onClick={() => setShowImagePreview(false)}
                      className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 text-3xl font-bold z-10"
                      title="Close"
                    >×</button>
                    <div
                      className="flex-1 flex items-center justify-center w-full h-full relative overflow-hidden"
                      style={{ minHeight: 400 }}
                      onWheel={handleWheel}
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseUp}
                    >
                      <Image
                        src={imageHistory[modalIdx]?.url || ''}
                        alt={imageHistory[modalIdx]?.prompt || ''}
                        width={1024}
                        height={1024}
                        style={{
                          transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
                          transition: dragging ? 'none' : 'transform 0.2s',
                          cursor: zoom > 1 ? 'grab' : 'zoom-in',
                          maxWidth: '90vw',
                          maxHeight: '80vh',
                          borderRadius: 16,
                          boxShadow: '0 8px 32px 0 rgba(247,181,0,0.25)',
                          border: '2px solid #F7B500',
                          background: '#111',
                        }}
                        draggable={false}
                        onDoubleClick={() => { setZoom(zoom === 1 ? 2 : 1); setOffset({ x: 0, y: 0 }); }}
                        unoptimized
                      />
                    </div>
                    <div className="flex gap-4 mt-4 items-center">
                      <button
                        onClick={() => modalIdx! > 0 && setModalIdx(modalIdx! - 1)}
                        disabled={modalIdx === 0}
                        className="px-3 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors text-lg disabled:opacity-40"
                        title="Previous image"
                      >←</button>
                      <span className="text-yellow-400 text-xs">{modalIdx + 1} / {imageHistory.length}</span>
                      <button
                        onClick={() => modalIdx! < imageHistory.length - 1 && setModalIdx(modalIdx! + 1)}
                        disabled={modalIdx === imageHistory.length - 1}
                        className="px-3 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors text-lg disabled:opacity-40"
                        title="Next image"
                      >→</button>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-6 mt-6">
                      <div className="flex-1">
                        <div className="font-bold text-yellow-400 mb-1">Original Prompt:</div>
                        <div className="text-xs text-yellow-400/80 bg-black/40 p-2 rounded border border-yellow-500/20 break-words">{imageHistory[modalIdx]?.prompt}</div>
                      </div>
                      {imageHistory[modalIdx]?.revisedPrompt && (
                        <div className="flex-1">
                          <div className="font-bold text-yellow-400 mb-1">Revised Prompt:</div>
                          <div className="text-xs text-yellow-400/60 bg-black/40 p-2 rounded border border-yellow-500/20 break-words">{imageHistory[modalIdx]?.revisedPrompt}</div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3 mt-6 flex-wrap justify-center">
                      <a href={imageHistory[modalIdx]?.url || '#'} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Open</a>
                      <a href={imageHistory[modalIdx]?.url || '#'} download className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Download</a>
                    </div>
                    <div className="text-xs text-yellow-400/60 mt-4 text-center">
                      Size: {imageHistory[modalIdx]?.size?.replace('x', ' × ')} | Created: {imageHistory[modalIdx]?.timestamp?.toLocaleString()}
                      {imageHistory[modalIdx]?.moderation && (
                        <span className="text-red-400 ml-2">• NSFW/Moderation</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/* Regenerate and History */}
              {imageHistory.length > 0 && mainImageIdx >= 0 && imageHistory[mainImageIdx] && (
                <div className="w-full flex flex-col items-center mb-12">
                  {/* Main Image Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-black/60 backdrop-blur-lg border-2 border-yellow-500 shadow-[0_8px_32px_0_rgba(247,181,0,0.25)] rounded-2xl p-8 flex flex-col items-center max-w-2xl w-full mb-8 group hover:shadow-yellow-500/40 hover:border-yellow-400 transition-all cursor-pointer"
                    onClick={() => handleModalOpen(mainImageIdx)}
                    title="Click to view full size"
                  >
                    <div className="w-full flex justify-center">
                      {imageHistory[mainImageIdx] && (
                        <Image
                          src={imageHistory[mainImageIdx].url}
                          alt={imageHistory[mainImageIdx].prompt}
                          width={512}
                          height={512}
                          className={`rounded-xl border-2 border-yellow-500 shadow-lg max-w-full h-auto transition-all duration-300 ${imageHistory[mainImageIdx].moderation ? 'blur-md' : ''} group-hover:scale-105`}
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-6 mt-6">
                      <div className="flex-1">
                        <div className="font-bold text-yellow-400 mb-1">Original Prompt:</div>
                        <div className="text-xs text-yellow-400/80 bg-black/40 p-2 rounded border border-yellow-500/20 break-words">{imageHistory[mainImageIdx]?.prompt}</div>
                      </div>
                      {imageHistory[mainImageIdx]?.revisedPrompt && (
                        <div className="flex-1">
                          <div className="font-bold text-yellow-400 mb-1">Revised Prompt:</div>
                          <div className="text-xs text-yellow-400/60 bg-black/40 p-2 rounded border border-yellow-500/20 break-words">{imageHistory[mainImageIdx]?.revisedPrompt}</div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3 mt-6 flex-wrap justify-center">
                      <button
                        onClick={e => { e.stopPropagation(); handleCopyPrompt(imageHistory[mainImageIdx]?.prompt || ''); }}
                        className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors flex items-center gap-2 text-xs"
                      >
                        <Copy className="h-4 w-4" /> Copy Original
                      </button>
                      {imageHistory[mainImageIdx]?.revisedPrompt && (
                        <button
                          onClick={e => { e.stopPropagation(); handleCopyPrompt(imageHistory[mainImageIdx]?.revisedPrompt || ''); }}
                          className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors flex items-center gap-2 text-xs"
                        >
                          <Copy className="h-4 w-4" /> Copy Revised
                        </button>
                      )}
                      <a href={imageHistory[mainImageIdx]?.url || '#'} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Open</a>
                      <a href={imageHistory[mainImageIdx]?.url || '#'} download className="px-4 py-2 bg-yellow-500 text-black rounded font-bold hover:bg-yellow-400 transition-colors text-xs">Download</a>
                      <button
                        onClick={e => { e.stopPropagation(); handleRegenerateImage(); }}
                        className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 rounded font-bold hover:bg-yellow-500/40 transition-colors text-xs"
                      >
                        Regenerate
                      </button>
                    </div>
                    <div className="text-xs text-yellow-400/60 mt-4 text-center">
                      Size: {imageHistory[mainImageIdx]?.size?.replace('x', ' × ')} | Created: {imageHistory[mainImageIdx]?.timestamp?.toLocaleString()}
                      {imageHistory[mainImageIdx]?.moderation && (
                        <span className="text-red-400 ml-2">• NSFW/Moderation</span>
                      )}
                    </div>
                    <div className="absolute top-2 right-4 text-yellow-400/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
                  </motion.div>
                  {/* Horizontal Gallery */}
                  {imageHistory.length > 1 && (
                    <div className="w-full max-w-2xl overflow-x-auto flex gap-4 py-2 px-1 scrollbar-thin scrollbar-thumb-yellow-500/30 scrollbar-track-transparent">
                      {imageHistory.map((img, idx) => (
                        <div
                          key={img.id}
                          className={`flex-shrink-0 rounded-lg border-2 transition-all duration-200 cursor-pointer ${mainImageIdx === idx ? 'border-yellow-500 shadow-lg scale-105' : 'border-yellow-700 opacity-70 hover:opacity-100 hover:scale-105'}`}
                          style={{ width: 80, height: 80 }}
                          onClick={() => handleModalOpen(idx)}
                          title={img.prompt}
                        >
                          <Image
                            src={img.url}
                            alt={img.prompt}
                            width={80}
                            height={80}
                            className={`rounded-lg w-full h-full object-cover ${img.moderation ? 'blur-md' : ''}`}
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  )}
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
