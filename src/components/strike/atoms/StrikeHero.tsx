"use client";
import { motion } from 'framer-motion'

export default function StrikeHero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center p-3 sm:p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12)_0%,rgba(0,0,0,0)_70%)] z-0" />
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.1] mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">
          Bitcoin-Backed Loans
        </h1>
        <p className="text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed text-white/90 mb-6 sm:mb-8 px-2 sm:px-4">
          At Bitcoin 2025, Jack Mallers walked onto a glowing yellow stage with fire in his voice and conviction in his message. His keynote wasn&apos;t just a product reveal—it was a manifesto for a new financial era where Bitcoiners no longer need to sell their BTC to access liquidity.
        </p>
        <blockquote className="text-[clamp(1.25rem,2vw,2rem)] italic text-yellow-400 my-6 sm:my-8 px-3 sm:px-4 border-l-4 border-yellow-500">
          &ldquo;Freedom isn&apos;t found in a destination, it&apos;s in the way you travel. With Bitcoin, you move on your own terms, fund your own story, and live the good life.&rdquo;
        </blockquote>
      </motion.div>
    </section>
  )
} 