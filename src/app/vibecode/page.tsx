'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VibeCodePage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Vibe Coding?",
      a: (
        <span>
          Vibe Coding is a philosophy that combines the precision of software development with the fluidity of artistic expression. It&apos;s about understanding that while tools and technologies change, the human element of creativity and intuition remains constant. The term was popularized by Rick Rubin, who adapted Lao-Tzu&apos;s Tao Te Ching principles to modern software development.
        </span>
      ),
    },
    {
      q: "How does Vibe Coding differ from traditional development?",
      a: (
        <span>
          Vibe Coding emphasizes:
          <br /><br />
          • Flowing with the dataset rather than fighting it
          <br />
          • Balancing technical precision with creative intuition
          <br />
          • Embracing constraints as opportunities for innovation
          <br />
          • Focusing on the human element in AI-driven development
          <br />
          • Building experiences that resonate emotionally
        </span>
      ),
    },
    {
      q: "What role does AI play in Vibe Coding?",
      a: (
        <span>
          AI is viewed as another tool in the artist&apos;s toolkit, not a replacement for human creativity. While AI can generate code and content, the vibe coder&apos;s role is to provide the tension, taste, and Tao - the human elements that make technology meaningful and resonant.
        </span>
      ),
    },
    {
      q: "How can I develop my Vibe Coding practice?",
      a: (
        <span>
          Key practices include:
          <br /><br />
          • Daily silent commits for reflection
          <br />
          • Weekly jam-sessions for creative exploration
          <br />
          • Quarterly strange-idea sprints
          <br />
          • Balancing technical knowledge with intuitive understanding
          <br />
          • Embracing constraints as creative opportunities
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Tao • Terminal • Technology</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Vibe Coding
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Where Tao Meets Terminal</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            {/* Featured Video */}
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <iframe
                src="https://www.youtube.com/embed/7s9C92Pkcc0"
                title="Vibe Coding: Where Tao Meets Terminal"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Philosophy of Vibe Coding
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Software once felt like a precise language of logic, but the rise of large-scale generative models has revealed a softer current beneath the syntax: vibe. In The Way of Code, Rick Rubin remixes Lao-Tzu&apos;s Tao Te Ching into a manifesto for anyone who shapes reality with prompts and pull requests.
              </p>
              <p className="text-lg">
                The original text urged flowing with the Dao; Rubin urges flowing with the dataset —but he doesn&apos;t confuse the stream for the source. Tools morph, therefore the coder&apos;s mindset becomes the only durable interface.
              </p>
            </div>
          </div>

          {/* Key Principles Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎵</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Flow
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Embrace the Dataset
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🎨</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Creativity
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Human Element
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Innovation
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Future-Forward
              </p>
            </div>
          </div>

          {/* Practice Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Practice of Vibe Coding
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Vibe coding demands less obsession with deterministic roadmaps and more sensitivity to ambient energy—of your team, your users, your own intuition. It asks engineers to read the room like DJs, pivot features like improvising jazz players, and embrace constraints the way ancient poets embraced meter.
              </p>
              <p className="text-lg">
                Paradoxically, that looseness births sharper differentiation: when the baseline cost of shipping software trends toward zero, the only premium product is experience. The vibe is the moat.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]"
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="text-xl font-semibold text-yellow-500">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-yellow-500 transition-transform",
                      open === index ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                {open === index && (
                  <div className="px-8 pb-6 text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
