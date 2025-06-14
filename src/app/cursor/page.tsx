'use client';

import { useEffect } from 'react';

export default function CursorPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light">AI Coding • Next.js • Crypto APIs</p>
            <h1 className="text-center">
              <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                Cursor & Crypto APIs
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic">Solo devs: build faster with AI and real-time data</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* The New Game Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">The New Game: AI, BTC, and Time</h2>
            <p className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed mb-10">
              You now operate with three core currencies: <span className="text-yellow-500 font-semibold">AI (Knowledge)</span>, <span className="text-yellow-500 font-semibold">BTC (Money)</span>, and <span className="text-yellow-500 font-semibold">Time (which remains finite)</span>. The strategy is simple: when you lack one, leverage the other two to acquire it.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* AI Card */}
                <div className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-left">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-3">Not enough AI?</h3>
                    <p className="text-white/80">Spend time training it. Spend BTC to fine-tune it.</p>
                </div>
                {/* BTC Card */}
                <div className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-left">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-3">Not enough BTC?</h3>
                    <p className="text-white/80">Offer your AI services. Trade your time for sats.</p>
                </div>
                {/* Time Card */}
                <div className="bg-[#1c1f26] p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-left">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-3">Not enough Time?</h3>
                    <p className="text-white/80">Automate with AI. Buy back your time with BTC.</p>
                </div>
            </div>
            <div className="mt-12">
              <div className="h-px w-32 bg-yellow-500/30 mx-auto"></div>
              <p className="mt-6 text-xl text-white/90 font-light italic">
                The old game was to trade time for money.<br/> The new game is to <span className="font-bold text-yellow-500">build AI</span>, <span className="font-bold text-yellow-500">stack sats</span>, and <span className="font-bold text-yellow-500">reclaim time</span>.
              </p>
              <div className="h-px w-32 bg-yellow-500/30 mx-auto mt-6"></div>
            </div>
          </div>

          {/* Main Content Cards */}
          <div className="space-y-12">
            {/* Intro Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Overview</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Solo developers can dramatically speed up their Next.js application development by leveraging AI-powered tools and up-to-date data sources. This guide explores advanced workflows in the Cursor AI code editor—inline chat, multi-file editing, prompt engineering—and how these features can turbocharge productivity. It also covers best practices for integrating free Crypto/Web3 APIs (for real-time crypto, Web3, and Bitcoin data) into a Next.js + TypeScript + Prisma stack, with practical tips and code snippets.
              </p>
            </div>

            {/* Section Card Example */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Cursor IDE Workflows for Solo Developers</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Cursor is an &quot;AI-first&quot; IDE that integrates a powerful AI assistant directly into the coding workflow. Its features like inline AI prompts, context-aware chat, and multi-file edits allow a single developer to generate and refactor code quickly using natural language. Below, we detail how to maximize Cursor&apos;s capabilities in a Next.js/TypeScript/Prisma project.
              </p>
            </div>

            {/* More Section Cards... (repeat for each major section, using the same card style) */}

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Inline AI Prompting and Code Generation (Composer)</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                One of Cursor&apos;s core features is the Inline Composer (Cmd/Ctrl + K), which opens a prompt bar for generating or modifying code via natural language. You can describe a task in plain English and have Cursor write the code for you at the cursor location. For example, highlight a section and prompt: &quot;Convert this callback-based function to async/await&quot;, or ask: &quot;Write a Next.js API route that fetches Bitcoin prices from an API.&quot; Cursor will suggest code changes, visible in a diff view for review.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Be Specific:</span> &quot;Create a Prisma model for User with fields id, name, email (unique), createdAt timestamp&quot; yields a precise schema.</li>
                <li><span className="text-yellow-500 font-semibold">Request Refactoring:</span> &quot;Optimize this query using Prisma transactions&quot; returns an editable diff.</li>
                <li><span className="text-yellow-500 font-semibold">Instant Apply:</span> Review and apply changes with one click—the &quot;play&quot; button merges the AI-generated diff into your codebase.</li>
              </ul>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Prompt Example</span>
                <span className="text-white/90 text-sm">&quot;Write a Next.js API route in /pages/api/prices.js that fetches the top 10 cryptocurrency prices from CoinGecko and stores them in our Prisma database.&quot;</span>
              </div>
            </div>

            {/* AI Chat Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">AI Chat: In-IDE Assistant for Debugging and Q&A</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Cursor provides an AI Chat panel (Cmd/Ctrl + L) where you can have a conversation with an AI that is aware of your codebase. This is extremely useful for debugging, getting explanations, or brainstorming implementation approaches without leaving the IDE. The chat is context-aware: it automatically includes the current file and even specific code you&apos;ve selected in the conversation, so you can ask questions like, &quot;Why am I getting a type error on this Prisma query?&quot; and the AI will examine the code and respond with an explanation or fix suggestion.
              </p>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Tip</span>
                <span className="text-white/90 text-sm">Switch to Agent mode (Cmd/Ctrl + I) to let Cursor perform multi-step code changes and even run commands for you, while you review each diff.</span>
              </div>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Workflow</span>
                <span className="text-white/90 text-sm">Use inline Ctrl + K for quick edits, and Agent chat for multi-step or cross-file tasks. Highlight code or errors and open chat to include them as context.</span>
              </div>
            </div>

            {/* Multi-File Context Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Multi-File Context and Refactoring at Scale</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Cursor&apos;s multi-file context awareness means the AI can understand your entire project structure, not just the file you&apos;re editing. You can explicitly bring other files into the conversation using <span className="text-yellow-500 font-mono">@filename</span>. Multi-file editing lets you apply a single instruction to multiple files at once, saving huge amounts of time on refactoring and consistency.
              </p>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Example</span>
                <span className="text-white/90 text-sm">&quot;Rename all occurrences of the Customer model to Client across the codebase.&quot; Cursor will search all files, prepare the changes, and let you review a multi-file diff before applying.</span>
              </div>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Pro Tip</span>
                <span className="text-white/90 text-sm">Use <span className="font-mono">Ctrl + Enter</span> in chat to trigger a codebase-wide query, like &quot;List all files where getServerSideProps is used.&quot;</span>
              </div>
            </div>

            {/* Prompt Engineering Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Prompt Engineering Strategies in Cursor</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Be Specific with Tasks:</span> Break down complex tasks into clear, single-purpose prompts. E.g., &quot;Generate a Next.js API route that returns the current Bitcoin price using CoinGecko API.&quot;</li>
                <li><span className="text-yellow-500 font-semibold">Use Step-by-Step Instructions:</span> Guide the AI with ordered steps, e.g., &quot;Write tests first, then implement the code to make those tests pass.&quot;</li>
                <li><span className="text-yellow-500 font-semibold">Leverage Project Context:</span> Remind the AI of relevant context, libraries, or conventions in your prompt.</li>
              </ul>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Prompt Templates</span>
                <ul className="list-disc pl-6 text-white/90 text-sm space-y-1">
                  <li>&quot;Explain why I am getting [X error] in this file and suggest a fix.&quot;</li>
                  <li>&quot;Refactor this function to be more modular and readable.&quot;</li>
                  <li>&quot;Add JSDoc comments to the following function.&quot;</li>
                  <li>&quot;Optimize the database calls in this API route for performance.&quot;</li>
                  <li>&quot;Create a Prisma schema for a Post model with fields: id (string, ID), title (string), content (string), authorId (relation to User).&quot;</li>
                </ul>
              </div>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Multi-Step Fixes</span>
                <span className="text-white/90 text-sm">Ask Cursor&apos;s agent to iterate until done: &quot;Run npm run build and fix any TypeScript errors, then repeat until the build passes.&quot;</span>
              </div>
            </div>

            {/* Additional Features Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Additional Cursor Features to Leverage</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Autocompletion and Imports:</span> AI-powered autocomplete generates multi-line code suggestions and auto-imports modules as you type.</li>
                <li><span className="text-yellow-500 font-semibold">AI-Generated Tests & Docs:</span> Instantly generate unit tests and doc comments for your functions.</li>
                <li><span className="text-yellow-500 font-semibold">YOLO Mode (Autonomous Coding):</span> Let the AI execute changes without manual approval for each diff—great for rapid prototyping (use with caution).</li>
              </ul>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Pro Tip</span>
                <span className="text-white/90 text-sm">Enable YOLO mode to let Cursor &quot;just do it&quot;—create files, run commands, and iterate until a goal is reached. Always use version control!</span>
              </div>
            </div>

            {/* AI Models Introduction */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Understanding Cursor&apos;s AI Model Ecosystem</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Cursor AI is an AI-powered code editor that supports various large language models (LLMs) to assist with coding, reasoning, and other tasks. Each model has unique strengths, making it suitable for different purposes like coding, creative writing, or research. Below, we explore the models available in Cursor and recommend which to use based on your needs.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500/90 mt-6 mb-3">Key Points</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li>Research suggests Cursor AI integrates models like Anthropic&apos;s Claude, DeepSeek, Google&apos;s Gemini, and its own Cursor Small, each excelling in coding and related tasks.</li>
                <li>It seems likely that Claude 4 Opus is great for complex coding and reasoning, while Claude 3.5 Sonnet suits general coding and creative writing.</li>
                <li>The evidence leans toward DeepSeek models being efficient for technical coding and AI research, and Gemini 2.5 Pro for large-scale, multimodal tasks.</li>
                <li>Cursor Small appears ideal for basic, lightweight coding assistance, given its low cost and small size.</li>
              </ul>
            </div>

            {/* Detailed Model Analysis */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Survey Note: Detailed Analysis of AI Models</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                This survey note provides an in-depth exploration of the AI models integrated within Cursor AI, an AI-powered code editor, focusing on their strengths, capabilities, and specific use cases for tasks like coding, creative writing, and research. The analysis is grounded in recent research and benchmarks, reflecting the state of AI as of June 14, 2025.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-yellow-500/90 mt-6 mb-3">Anthropic Models (Claude)</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Anthropic&apos;s Claude family is prominently featured in Cursor, with models ranging from lightweight to highly capable. They are known for their depth over breadth, prioritizing deep reasoning and specialized capabilities like code generation.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Claude 4 Opus/Sonnet:</span> High-performance models for agentic tasks, complex coding, and reasoning. Opus is the most capable for highly complex problems.</li>
                <li><span className="text-yellow-500 font-semibold">Claude 3.7 Sonnet:</span> Balances capability and performance, optimized for real-world applications like instruction following.</li>
                <li><span className="text-yellow-500 font-semibold">Claude 3.5 Sonnet:</span> A great all-rounder for most tasks, excelling in coding, multistep workflows, and chart interpretation.</li>
                <li><span className="text-yellow-500 font-semibold">Claude 3.5 Haiku & Claude 3 Opus:</span> Lighter-weight, cost-effective models for quick, efficient tasks or those needing deep reasoning on a smaller scale.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-yellow-500/90 mt-6 mb-3">DeepSeek Models</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                DeepSeek models are known for their efficiency and high performance, particularly in technical coding, AI research, and multilingual support. They use a Mixture of Experts (MoE) architecture to reduce computational costs.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">DeepSeek V3 & R1:</span> Excel in reasoning, coding, and logical inference, rivaling top models at a lower cost.</li>
                <li><span className="text-yellow-500 font-semibold">DeepSeek-Coder-V2:</span> A coding-focused model supporting 338 languages, ideal for multilingual projects.</li>
                <li><span className="text-yellow-500 font-semibold">DeepSeek-VL2:</span> A competitive multimodal model for tasks involving text and images.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-yellow-500/90 mt-6 mb-3">Google Models (Gemini)</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Google&apos;s Gemini models are integrated for their large context windows and strong multimodal capabilities, making them ideal for handling extensive documents or codebases.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Gemini 2.5 Pro:</span> A powerful model with up to a 1M token context window, excelling at agentic tasks and reasoning over large-scale, complex information.</li>
                <li><span className="text-yellow-500 font-semibold">Gemini 2.5 Flash:</span> A faster, high-throughput model also with a 1M context window.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-yellow-500/90 mt-6 mb-3">Cursor Proprietary Models</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Cursor develops its own models optimized for the platform.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Cursor Small:</span> A lightweight, free model likely optimized for basic coding assistance, autocompletion, and other quick, in-editor tasks.</li>
              </ul>
            </div>

            {/* Comparative Analysis Table */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Comparative Analysis</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Model</th>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Provider</th>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Context Window</th>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Capabilities</th>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Cost Efficiency</th>
                                <th className="border-b-2 border-yellow-500/50 p-2 text-yellow-500">Best For</th>
                            </tr>
                        </thead>
                        <tbody className="text-white/80">
                            <tr>
                                <td className="border-b border-yellow-500/20 p-2">Claude 4 Opus</td>
                                <td className="border-b border-yellow-500/20 p-2">Anthropic</td>
                                <td className="border-b border-yellow-500/20 p-2">200k</td>
                                <td className="border-b border-yellow-500/20 p-2">Complex reasoning, coding</td>
                                <td className="border-b border-yellow-500/20 p-2">Moderate</td>
                                <td className="border-b border-yellow-500/20 p-2">Advanced coding, deep analysis</td>
                            </tr>
                            <tr>
                                <td className="border-b border-yellow-500/20 p-2">Claude 3.5 Sonnet</td>
                                <td className="border-b border-yellow-500/20 p-2">Anthropic</td>
                                <td className="border-b border-yellow-500/20 p-2">75k/200k</td>
                                <td className="border-b border-yellow-500/20 p-2">General coding, creative writing</td>
                                <td className="border-b border-yellow-500/20 p-2">High</td>
                                <td className="border-b border-yellow-500/20 p-2">General tasks, content creation</td>
                            </tr>
                            <tr>
                                <td className="border-b border-yellow-500/20 p-2">Claude 3.5 Haiku</td>
                                <td className="border-b border-yellow-500/20 p-2">Anthropic</td>
                                <td className="border-b border-yellow-500/20 p-2">60k</td>
                                <td className="border-b border-yellow-500/20 p-2">Lightweight, fast tasks</td>
                                <td className="border-b border-yellow-500/20 p-2">Very High</td>
                                <td className="border-b border-yellow-500/20 p-2">Quick, efficient coding</td>
                            </tr>
                            <tr>
                                <td className="border-b border-yellow-500/20 p-2">DeepSeek V3</td>
                                <td className="border-b border-yellow-500/20 p-2">DeepSeek</td>
                                <td className="border-b border-yellow-500/20 p-2">60k</td>
                                <td className="border-b border-yellow-500/20 p-2">Reasoning, coding, multimodal</td>
                                <td className="border-b border-yellow-500/20 p-2">Very High</td>
                                <td className="border-b border-yellow-500/20 p-2">AI research, technical coding</td>
                            </tr>
                             <tr>
                                <td className="border-b border-yellow-500/20 p-2">DeepSeek R1</td>
                                <td className="border-b border-yellow-500/20 p-2">DeepSeek</td>
                                <td className="border-b border-yellow-500/20 p-2">60k</td>
                                <td className="border-b border-yellow-500/20 p-2">Logical inference, math</td>
                                <td className="border-b border-yellow-500/20 p-2">High</td>
                                <td className="border-b border-yellow-500/20 p-2">Problem-solving, precise reasoning</td>
                            </tr>
                             <tr>
                                <td className="border-b border-yellow-500/20 p-2">Gemini 2.5 Pro</td>
                                <td className="border-b border-yellow-500/20 p-2">Google</td>
                                <td className="border-b border-yellow-500/20 p-2">120k/1M</td>
                                <td className="border-b border-yellow-500/20 p-2">Large-scale, multimodal tasks</td>
                                <td className="border-b border-yellow-500/20 p-2">Moderate</td>
                                <td className="border-b border-yellow-500/20 p-2">Extensive research, complex coding</td>
                            </tr>
                             <tr>
                                <td className="p-2">Cursor Small</td>
                                <td className="p-2">Cursor</td>
                                <td className="p-2">60k</td>
                                <td className="p-2">Basic coding assistance</td>
                                <td className="p-2">Very High (Free)</td>
                                <td className="p-2">Lightweight edits, autocomplete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recommendations Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Recommendations for Specific Tasks</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Based on the strengths outlined, here are detailed recommendations for which model to use for your specific task in Cursor.
              </p>
              
              <h3 className="text-xl font-bold text-yellow-500/90 mt-6 mb-3">Coding</h3>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">General-Purpose Coding:</span> Use <span className="font-mono">Claude 3.5 Sonnet</span> for its balance of capability and efficiency.</li>
                <li><span className="text-yellow-500 font-semibold">Complex Projects:</span> Choose <span className="font-mono">Claude 4 Opus</span> for its deep reasoning and precision.</li>
                <li><span className="text-yellow-500 font-semibold">Multilingual Coding:</span> Opt for <span className="font-mono">DeepSeek-Coder-V2</span>, which supports over 300 languages.</li>
                <li><span className="text-yellow-500 font-semibold">Lightweight Edits:</span> Try <span className="font-mono">Cursor Small</span> or <span className="font-mono">Claude 3.5 Haiku</span> for quick, cost-effective tasks.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-yellow-500/90 mt-6 mb-3">Creative Writing</h3>
               <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Long-Form Content:</span> Use <span className="font-mono">Gemini 2.5 Pro</span> for its large context window to maintain coherence.</li>
                <li><span className="text-yellow-500 font-semibold">Shorter Pieces:</span> <span className="font-mono">Claude 3.5 Sonnet</span> is a versatile and cost-effective option.</li>
              </ul>

              <h3 className="text-xl font-bold text-yellow-500/90 mt-6 mb-3">Research & Analysis</h3>
               <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Extensive Documents:</span> <span className="font-mono">Gemini 2.5 Pro</span> is ideal for its ability to process large amounts of information.</li>
                <li><span className="text-yellow-500 font-semibold">Accuracy-Critical Tasks:</span> Use <span className="font-mono">DeepSeek R1</span> for its strength in logical inference.</li>
              </ul>

              <h3 className="text-xl font-bold text-yellow-500/90 mt-6 mb-3">Multimodal & Technical Tasks</h3>
               <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Multimedia Applications:</span> <span className="font-mono">Gemini 2.5 Pro</span> and <span className="font-mono">DeepSeek-VL2</span> support multimodal inputs.</li>
                <li><span className="text-yellow-500 font-semibold">AI Research & Technical Coding:</span> <span className="font-mono">DeepSeek V3</span> offers performance rivaling top models with high efficiency.</li>
              </ul>

              <p className="text-white/80 leading-relaxed mt-6">
                This analysis, based on recent research and benchmarks as of June 14, 2025, suggests that the choice of model in Cursor depends on the task&apos;s complexity, cost considerations, and required capabilities. These recommendations aim to guide users in leveraging Cursor&apos;s diverse model ecosystem effectively for coding, creative writing, research, and beyond.
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Summary of API Integration Tips</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Choose the Right API:</span> CoinGecko&apos;s free API is an excellent default for price data. For broader info, consider CryptoCompare or blockchain.com for network data.</li>
                <li><span className="text-yellow-500 font-semibold">Avoid Overuse:</span> Respect rate limits and use server-side caching and revalidation.</li>
                <li><span className="text-yellow-500 font-semibold">Secure Your Keys:</span> Keep API keys in .env and never push them to git or expose them client-side.</li>
                <li><span className="text-yellow-500 font-semibold">Test and Handle Errors:</span> Always handle fetch failures and validate external data before saving.</li>
                <li><span className="text-yellow-500 font-semibold">Stay Updated:</span> The crypto world evolves quickly—keep an eye on API docs and use Cursor&apos;s web search for alternatives if needed.</li>
              </ul>
            </div>

            {/* Final Section: Cursor Instructions */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Current Cursor Instructions</h2>
              <pre className="text-xs md:text-sm bg-black rounded-none border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 text-white whitespace-pre overflow-x-auto">
{`# ─── Core Architecture ──────────────────────────────────────────────────────
- USE Next.js 14+, React functional components (TSX), strict TypeScript, and Prisma ORM (db code in /lib/db).
- FOLLOW atomic-design folders (atoms/ molecules/ organisms/ templates/ pages); separate presentation, logic, data.
- ENFORCE progressive-enhancement: site must render core content without JS; layer JS features afterward.
- WRITE semantic HTML5 + ARIA; meet WCAG 2.1 AA.

# ─── Styling & Design System ────────────────────────────────────────────────
- STYLE with styled-components; expose theme + design-tokens (colors, spacing, typography) via ThemeProvider.
- DEFINE mobile-first breakpoints: 375 px, 768 px, 1024 px, 1440 px.
- EXPORT critical CSS above-the-fold; lazy-load non-critical styles.

# ─── Performance Targets ───────────────────────────────────────────────────
- HIT Lighthouse ≥ 90; Core Web Vitals LCP &lt; 2.5 s, INP/FID &lt; 100 ms, CLS &lt; 0.1, TTFB &lt; 200 ms.
- SPLIT code with dynamic imports + route-based chunking; enable React.lazy + Suspense where possible.
- LAZY-LOAD below-the-fold images; serve AVIF/WEBP; generate &lt;source&gt; sets automatically.
- ADD resource hints (preconnect, preload hero assets, dns-prefetch APIs); apply immutable cache-control headers.

# ─── Conversion UX ──────────────────────────────────────────────────────────
- USE F- or Z-pattern hierarchy; primary CTA ≥ 60 px touch area, contrast ≥ 3:1.
- PROVIDE inline form validation + real-time feedback; microcopy next to inputs.
- ANIMATE key conversion elements with Intersection Observer; 200 ms ease-out, prefers-reduced-motion respected.
- SHOW social-proof blocks with quantifiable metrics (e.g., &quot;10 k users&quot;).

# ─── Analytics & Tracking ──────────────────────────────────────────────────
- FIRE event-based tracking (GA4) for every user interaction; define micro vs. macro funnels.
- HANDLE UTMs server-side; enable cross-domain + enhanced ecommerce where relevant.

# ─── Security Hardening ────────────────────────────────────────────────────
- SET strict Content-Security-Policy, X-Frame-Options, HSTS, and granular CORS allowlist.
- SANITIZE &amp; validate all inputs; enable CSRF tokens; RATE-LIMIT form posts (&le; 5/min/IP).

# ─── SEO Essentials ────────────────────────────────────────────────────────
- ADD canonical &lt;link&gt;, meta tags, and JSON-LD (Website, Organization, Product).
- AUTO-GENERATE sitemap.xml (lastmod) &amp; robots.txt; maintain h1-h6 hierarchy.

# ─── Deployment / CI-CD ────────────────────────────────────────────────────
- ISOLATE env vars (local | staging | prod); secrets via Vercel.
- RUN pre-commit lint, test, type-check; fail pipeline on error.
- OPTIMIZE build: tree-shaking, source-map-extraction, bundle-analyzer when NODE_ENV=analyze.
- LOG errors to Sentry; configure 308 redirects for legacy URLs.

# ─── Crypto / Web3 Data Layer ──────────────────────────────────────────────
- FETCH live crypto prices &amp; news from CoinGecko (no-key) or CryptoCompare/NewsData (key) in server routes.
- CACHE responses in Prisma; revalidate ISR pages every 60 s.
- EXPOSE /api/prices &amp; /api/news endpoints; front-end consumes via SWR.

# ─── Deliverables ──────────────────────────────────────────────────────────
- DOCUMENT exported functions with JSDoc/TSdoc; auto-generate typed API docs.
- INCLUDE README (setup, env vars, architecture rationale), Lighthouse report, breakpoint screenshots.
`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
