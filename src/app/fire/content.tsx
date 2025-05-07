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

export default function FireContent() {
  return (
    <motion.main 
      className="min-h-screen bg-black font-satoshi relative overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.0)_0%,_rgba(0,0,0,0.7)_100%)]" />
      <SparkleBG />
      <div className="container relative max-w-4xl mx-auto px-6 py-28 z-20 flex flex-col items-center justify-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-24 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold font-boska text-yellow-400 drop-shadow-xl mb-6 tracking-wider leading-tight animate-fade-in relative text-left" style={{letterSpacing: '0.04em'}}>
              ₿ Retirement
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
              The fiat world sold you a dream.
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
            <div className="space-y-6 text-xl md:text-2xl font-satoshi text-white/90 animate-fade-in">
              <p>Work 9–5 for 40 years.</p>
              <p>Buy things you don&apos;t need.</p>
              <p>Then maybe—maybe—retire at 65.</p>
              <p>But by then, your spark&apos;s gone. Your edge dulled. Your art forgotten.</p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="space-y-14 text-left">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold font-boska text-yellow-400 leading-tight mb-12 animate-fade-in transition-all duration-300 hover:drop-shadow-[0_4px_32px_rgba(247,181,0,0.25)] hover:scale-[1.025] text-left uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              The Bitcoin Way
            </motion.h2>

            <div className="space-y-6 text-xl md:text-2xl font-satoshi text-white/90">
              <p>At LiveTheLife.TV, we&apos;ve exited that simulation.</p>
              <p>Bitcoin taught us that freedom isn&apos;t found at the end—it&apos;s mined daily.</p>
              <p>Through proof-of-work. Through radical ownership. Through living now.</p>
              <p>Ask the fighters who spiraled after the belt.</p>
              <p>Or the founders who sold the company and lost the mission.</p>
              <p>That &quot;goal&quot; they chased? Fiat illusion.</p>
              <p>Because the climb—the purpose—was the only thing real.</p>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="space-y-24 mt-24 text-left">
            <section>
              <motion.h3
                className="text-2xl md:text-3xl font-bold font-boska text-yellow-400 mb-6 animate-fade-in transition-all duration-300 hover:text-yellow-300 hover:drop-shadow-[0_2px_12px_rgba(247,181,0,0.18)] hover:scale-[1.02] text-left relative group uppercase tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                The Block Height Rises
                <span className="absolute left-0 -bottom-2 w-12 h-0.5 bg-yellow-400/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-300" />
              </motion.h3>
              <div className="space-y-6 text-lg text-white/80 font-satoshi">
                <p>Bitcoiners know this in their bones.</p>
                <p>The block height rises. The mission continues.</p>
                <p>No off switch. No bailouts. No retirement party.</p>
                <p>Just constant iteration. Signal through noise. Block after block.</p>
                <p>We live like that.</p>
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
                The Call to Action
              </motion.h3>
              <div className="space-y-6 text-lg text-white/80 font-satoshi">
                <p>Whether it&apos;s shooting film in Cape Town&apos;s golden hour</p>
                <p>or building a Lightning-enabled app from a surf shack in Biarritz,</p>
                <p>we&apos;re not waiting for permission.</p>
                <p>We&apos;re living the life—on purpose, off-grid, on-chain.</p>
                <p>Our AI agents?</p>
                <p>They don&apos;t grow obsolete.</p>
                <p>They evolve. Learn. Meme. Stack cultural blocks like satoshis.</p>
                <p>And so should you.</p>
                <p>Because in this post-fiat world, retirement is a rugpull.</p>
                <p>But purpose? Purpose is antifragile.</p>
                <p>So pick your mountain.</p>
                <p>Maybe it&apos;s code. Maybe it&apos;s a camera.</p>
                <p>Maybe it&apos;s orange-pilling your city.</p>
                <p>Now climb.</p>
                <p>With conviction. With creativity. With curiosity.</p>
                <p>And when you reach the summit?</p>
                <p>You already know:</p>
                <p className="font-extrabold text-yellow-400 font-boska text-3xl md:text-4xl mt-10 mb-2 animate-fade-in">
                  ⛏ Build a weirder one.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
} 