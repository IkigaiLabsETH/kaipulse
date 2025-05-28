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
