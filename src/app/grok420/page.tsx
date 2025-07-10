'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

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
      const response = await fetch('/api/grok4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          systemPrompt: _systemPrompt,
          temperature: _temperature,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from Grok4');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const _clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      {/* Background with DNA yellow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,199,0,0.15),rgba(0,0,0,0))] opacity-30 backdrop-blur-[200px]" />
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center flex-grow mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
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
          </motion.div>
          <p className="text-yellow-400/80 text-lg max-w-2xl mx-auto">
            Chat with Grok4, powered by xAI. Experience the future of AI conversation.
          </p>
        </div>

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
                            <p className="text-white/90 whitespace-pre-wrap">{message.content}</p>
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
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 text-black font-bold px-6 py-3 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
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
