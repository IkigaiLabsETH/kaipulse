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
                Accelerate Next.js with Cursor AI & Crypto APIs
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic">Solo devs: build faster with AI and real-time data</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
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
                Cursor is an "AI-first" IDE that integrates a powerful AI assistant directly into the coding workflow. Its features like inline AI prompts, context-aware chat, and multi-file edits allow a single developer to generate and refactor code quickly using natural language. Below, we detail how to maximize Cursor's capabilities in a Next.js/TypeScript/Prisma project.
              </p>
            </div>

            {/* More Section Cards... (repeat for each major section, using the same card style) */}

            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Inline AI Prompting and Code Generation (Composer)</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                One of Cursor's core features is the Inline Composer (Cmd/Ctrl + K), which opens a prompt bar for generating or modifying code via natural language. You can describe a task in plain English and have Cursor write the code for you at the cursor location. For example, highlight a section and prompt: "Convert this callback-based function to async/await", or ask: "Write a Next.js API route that fetches Bitcoin prices from an API." Cursor will suggest code changes, visible in a diff view for review.
              </p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Be Specific:</span> "Create a Prisma model for User with fields id, name, email (unique), createdAt timestamp" yields a precise schema.</li>
                <li><span className="text-yellow-500 font-semibold">Request Refactoring:</span> "Optimize this query using Prisma transactions" returns an editable diff.</li>
                <li><span className="text-yellow-500 font-semibold">Instant Apply:</span> Review and apply changes with one click—the "play" button merges the AI-generated diff into your codebase.</li>
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
                Cursor provides an AI Chat panel (Cmd/Ctrl + L) where you can have a conversation with an AI that is aware of your codebase. This is extremely useful for debugging, getting explanations, or brainstorming implementation approaches without leaving the IDE. The chat is context-aware: it automatically includes the current file and even specific code you've selected in the conversation, so you can ask questions like, "Why am I getting a type error on this Prisma query?" and the AI will examine the code and respond with an explanation or fix suggestion.
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
                Cursor's multi-file context awareness means the AI can understand your entire project structure, not just the file you're editing. You can explicitly bring other files into the conversation using <span className="text-yellow-500 font-mono">@filename</span>. Multi-file editing lets you apply a single instruction to multiple files at once, saving huge amounts of time on refactoring and consistency.
              </p>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Example</span>
                <span className="text-white/90 text-sm">&quot;Rename all occurrences of the Customer model to Client across the codebase.&quot; Cursor will search all files, prepare the changes, and let you review a multi-file diff before applying.</span>
              </div>
              <div className="bg-black border border-yellow-500 shadow-[3px_3px_0px_0px_rgba(234,179,8,0.7)] p-4 mt-4 overflow-x-auto">
                <span className="block text-yellow-500 font-mono text-sm mb-2">Pro Tip</span>
                <span className="text-white/90 text-sm">Use <span className="font-mono">Ctrl + Enter</span> in chat to trigger a codebase-wide query, like "List all files where getServerSideProps is used."</span>
              </div>
            </div>

            {/* Prompt Engineering Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Prompt Engineering Strategies in Cursor</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Be Specific with Tasks:</span> Break down complex tasks into clear, single-purpose prompts. E.g., "Generate a Next.js API route that returns the current Bitcoin price using CoinGecko API."</li>
                <li><span className="text-yellow-500 font-semibold">Use Step-by-Step Instructions:</span> Guide the AI with ordered steps, e.g., "Write tests first, then implement the code to make those tests pass."</li>
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
                <span className="text-white/90 text-sm">Ask Cursor's agent to iterate until done: "Run npm run build and fix any TypeScript errors, then repeat until the build passes."</span>
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
                <span className="text-white/90 text-sm">Enable YOLO mode to let Cursor "just do it"—create files, run commands, and iterate until a goal is reached. Always use version control!</span>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">Summary of API Integration Tips</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mb-4">
                <li><span className="text-yellow-500 font-semibold">Choose the Right API:</span> CoinGecko's free API is an excellent default for price data. For broader info, consider CryptoCompare or blockchain.com for network data.</li>
                <li><span className="text-yellow-500 font-semibold">Avoid Overuse:</span> Respect rate limits and use server-side caching and revalidation.</li>
                <li><span className="text-yellow-500 font-semibold">Secure Your Keys:</span> Keep API keys in .env and never push them to git or expose them client-side.</li>
                <li><span className="text-yellow-500 font-semibold">Test and Handle Errors:</span> Always handle fetch failures and validate external data before saving.</li>
                <li><span className="text-yellow-500 font-semibold">Stay Updated:</span> The crypto world evolves quickly—keep an eye on API docs and use Cursor's web search for alternatives if needed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
