'use client'

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
}

// Simple sparkle/particle effect for hero
function SparkleBG() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {[...Array(24)].map((_, i) => (
        <span
          key={i}
          className="absolute block w-1.5 h-1.5 rounded-full bg-yellow-400/70 blur-[2px] animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.7 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  )
}

export default function AIContent() {
  return (
    <motion.main 
      className="min-h-screen bg-black font-satoshi relative overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Radial background gradient for depth, inspired by @voice */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black pointer-events-none" />
      {/* Soft vignette/radial overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.0)_0%,_rgba(0,0,0,0.7)_100%)]" />
      {/* Sparkle/particle effect */}
      <SparkleBG />
      <div className="container relative max-w-4xl mx-auto px-6 py-28 z-20 flex flex-col items-center justify-center">
        <div className="w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-24 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold font-boska text-yellow-400 drop-shadow-xl mb-6 tracking-wider leading-tight animate-fade-in relative text-left" style={{letterSpacing: '0.04em'}}>
               AI, agents, and culture are rewriting the rules.
              {/* Animated shimmer accent bar with gradient */}
              <motion.div
                className="ml-0 w-28 h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 rounded-full mb-10 shadow-[0_0_24px_6px_rgba(247,181,0,0.18)] relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full w-1/3 bg-yellow-100/70 blur-[2px] animate-shimmer"
                  initial={{ x: -80 }}
                  animate={{ x: 96 }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                />
              </motion.div>
            </h1>
            <motion.p
              className="text-xl md:text-2xl font-satoshi text-white/90 max-w-2xl mb-8 animate-fade-in text-left font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              A new era for founders, builders, and dreamers.
            </motion.p>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            className="mb-24 p-0 max-w-3xl mx-auto text-left border-l-2 border-yellow-400/20 pl-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-epilogue text-yellow-400 mb-8 animate-fade-in">The $1M Bitcoin Era</h2>
            <div className="space-y-4 text-xl md:text-2xl font-satoshi text-white/90 animate-fade-in">
              <p>If you&apos;re reading this, you&apos;re living in the era where Bitcoin breaks gravity—$1 million per coin is just the beginning.</p>
              <p>You&apos;ve stumbled onto the closest thing to a cheat code this simulation offers: the knowledge, the tools, and the timing to act.</p>
              <p>What you do with it is entirely up to you.</p>
              <p>You now command a digital legion—coders, creators, analysts—ready to build, write, and strategize for you, 24/7, no sleep required.</p>
              <p>This is the greatest moment in history for anyone with vision and drive.</p>
              <p>For millennia, humans lived and died without ever seeing a lightbulb, a rocket launch, or a message sent across the world in an instant.</p>
              <p>But you? You&apos;re here for the birth of perfect, unstoppable Internet money—an invention that will let us coordinate, build, and dream on a scale our ancestors couldn&apos;t imagine.</p>
              <p>You&apos;re also here for the end of intelligence as a bottleneck. AI is now your co-pilot, your research assistant, your creative partner.</p>
              <p>Soon, even physical labor will be optional. The only limit left is your imagination.</p>
              <p>One day, you&apos;ll look back and realize: this was the window of impossible opportunity.</p>
              <p>It&apos;s like the dawn of the Internet—multiplied by a hundred.</p>
              <p className="mt-6 font-satoshi">So what&apos;s actually in your hands?</p>
              <ul className="list-disc pl-8 space-y-1 font-satoshi">
                <li>How you spend your time in this once-in-history moment.</li>
                <li>How boldly you choose to imagine the future.</li>
              </ul>
              <p>The future isn&apos;t set in stone. It&apos;s not even written in pencil.</p>
              <p>Your future is shaped by what you do right now.</p>
              <p>And you&apos;ve never had access to bigger, more powerful levers than you do today.</p>
              <p>Levers that can turn your wildest vision into reality—faster than you think.</p>
              <motion.p 
                className="font-extrabold text-yellow-400 font-boska text-3xl md:text-4xl mt-10 mb-2 animate-fade-in"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 12 }}
              >
                Will you pull them?
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="space-y-14 text-left">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold font-boska text-yellow-400 leading-tight mb-12 animate-fade-in transition-all duration-300 hover:drop-shadow-[0_4px_32px_rgba(247,181,0,0.25)] hover:scale-[1.025] text-left uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              The Startup Playbook Has Been Rewritten—Forever
            </motion.h2>

            <p className="text-2xl font-satoshi text-white/80">
              Let&apos;s not sugarcoat it. The old startup playbook is dead. Long live the weird, modular, agent-powered, meme-led, micro-app-driven new world. The rules have changed—not just slightly, but at a cellular level. And the founders who understand this aren&apos;t just adapting. They&apos;re building from first principles in a new reality, one where small teams wield infinite leverage and identity is the product.
            </p>

            <p className="text-2xl font-satoshi text-white/80">
              This isn&apos;t a &quot;pivot.&quot; This is a paradigm shift.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} className="space-y-24 mt-24 text-left">
            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in transition-all duration-300 hover:text-yellow-300 hover:drop-shadow-[0_2px_12px_rgba(247,181,0,0.18)] hover:scale-[1.02] text-left relative group uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🧠 Your Team Is Not a Team. It&apos;s a Network.
                <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-yellow-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-300" />
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi mb-4">
                You no longer need an office full of full-time employees. Your real team looks like:
              </p>
              <ul className="list-none space-y-2 text-lg text-white/80 font-satoshi">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> 1 founder
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> 3 part-time contractors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> 7 creators
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> 12 agents running 24/7 in the background
                </li>
              </ul>
              <p className="text-lg text-white/80 font-satoshi mt-4">
                Your brand designer is on five other projects. Your customer support is a single human backed by five Lindy-trained AI agents. Your blog? It writes itself from transcripts, support tickets, and user reviews. Welcome to the modular startup, where flexibility isn&apos;t a perk—it&apos;s the point.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                💸 Niches Print Millions. Culture Prints Billions.
              </motion.h3>
              <div className="space-y-4 text-lg text-white/80 font-satoshi">
                <p>
                  The first million comes from going deep—serving a niche so hard it hurts. But the next ten? That comes from scaling tastefully. Not more features. Not broader appeal. Just better storytelling and sharper aesthetics.
                </p>
                <p>
                  Your product doesn&apos;t go viral because it solves a problem. It goes viral because it looks good in a meme. It gets shared because it feels like belonging.
                </p>
                <p>
                  The best products are portals into subcultures. They don&apos;t just solve pain—they offer transformation. Identity upgrade included.
                </p>
              </div>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                📺 Startups Are the New QVC
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                But this time, you own the channel. And the product. And the voiceover.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                Founders are becoming creators. Creators are becoming founders. Your product demo is a TikTok. Your sales funnel is a Twitter thread. Your landing page rewrites itself depending on who&apos;s watching—powered by Claude or GPT-4o and real-time session data.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                Launch day? Dead. It&apos;s about the leak. Let the community speculate, remix, and pre-order the hoodie before the beta even drops.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                ✨ Growth Isn&apos;t a Department. It&apos;s a Loop.
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                Your onboarding isn&apos;t a form. It&apos;s a text conversation with a friendly agent.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                Your growth isn&apos;t an afterthought. It&apos;s baked into every interaction:
              </p>
              <ul className="list-none space-y-2 text-lg text-white/80 font-satoshi">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Invite loops driven by AI agents
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Personalized outbound intros crafted in your sleep
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Referral engines built on curiosity and culture
                </li>
              </ul>
              <p className="text-lg text-white/80 font-satoshi">
                You don&apos;t chase virality. You build something so weirdly specific it spreads organically. If it doesn&apos;t spark curiosity in two seconds, it&apos;s invisible.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🧩 Micro Over Mega. Specific Over General.
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                The most overbuilt SaaS tools will collapse under their own bloat. The winners? They&apos;ll do one weird thing stupidly well. They&apos;ll be micro-apps that solve hyper-specific problems with taste and soul.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                Think &quot;tiny empires&quot;—one founder, one audience, a constellation of AI-powered tools orbiting their insight.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🎨 Taste Is Distribution
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                If your homepage looks like a generic ShadCN template, you&apos;ve already lost.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                Your homepage should feel like walking into a scene. Your brand? A vibe people want to wear. Your creative director isn&apos;t a luxury—they&apos;re your growth engine. Taste is the moat.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                And distribution? It&apos;s not something you find. It&apos;s something you own.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🛠 Agents Are the New Stack
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                Product feedback loops are now instant:
              </p>
              <ul className="list-none space-y-2 text-lg text-white/80 font-satoshi">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Users speak &rarr; Agents summarize, prioritize, and mock UI changes.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Support tickets &rarr; Tagged, triaged, and visualized before a dev touches them.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Churned users &rarr; Winback campaigns tailored to their exit story.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Your CRM &rarr; Updated and summarized before the call ends.
                </li>
              </ul>
              <p className="text-lg text-white/80 font-satoshi">
                This is not automation. This is orchestration.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                👟 Not Finished Until They Wear the Hoodie
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                The new pricing model: $0 to play, $X to unlock identity.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                You don&apos;t sell software anymore. You sell outcomes. Transformations. Belonging.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                The product is what they buy. But the hoodie? That&apos;s what they believe in.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🪩 IRL Is the Final Unlock
              </motion.h3>
              <p className="text-lg text-white/80 font-satoshi">
                Founders are becoming event planners. Meetups, not webinars. Scene energy, not sales decks.
              </p>
              <p className="text-lg text-white/80 font-satoshi">
                The future isn&apos;t just digital. It&apos;s deeply human. Presence is leverage.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section className="space-y-4">
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                🧬 The New Playbook, Summarized
              </motion.h3>
              <ul className="list-none space-y-3 text-lg text-white/80 font-satoshi">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Default alive = low burn, small team, high-leverage systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Distribution &gt; cofounder
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Taste &gt; features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Specific &gt; general
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Memes &gt; marketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Identity &gt; utility
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span> Infinite leverage &gt; infinite funding
                </li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

            <section className="space-y-4 text-lg text-white/80 font-satoshi">
              <p>
                You don&apos;t need permission to build like this. You don&apos;t need a seed round or a growth team or even a launch date.
              </p>
              <p>
                You just need to start.
              </p>
              <p>
                Most people will ignore this.
              </p>
              <p>
                But this is the new reality.
              </p>
              <p>
                Small teams. Infinite leverage. Culture as code.
              </p>
              <p>
                If this felt like a glimpse into the future, that&apos;s because it is.
              </p>
              <p>
                So don&apos;t bookmark this.
              </p>
              <p>
                Send it to someone weird enough to believe it too.
              </p>
              <p className="font-satoshi text-yellow-400">
                Happy building.
              </p>
              <p className="font-satoshi text-yellow-400">
                I&apos;m rooting for you.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
} 