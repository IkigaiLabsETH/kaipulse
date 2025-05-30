"use client";

import { motion } from 'framer-motion'

type PositionStyle = React.CSSProperties;

const steps = [
  {
    number: 1,
    text: "Borrow Fiat, Keep BTC Off Market",
    position: { top: '0%', left: '50%', transform: 'translateX(-50%)' }
  },
  {
    number: 2,
    text: "Accelerate Fiat Debasement",
    position: { bottom: '25%', right: '0%' }
  },
  {
    number: 3,
    text: "Increase Bitcoin Utility",
    position: { bottom: '25%', left: '0%' }
  },
  {
    number: 4,
    text: "Repeat",
    position: { bottom: '0%', left: '50%', transform: 'translateX(-50%)' }
  }
]

function FlywheelStep({ number, text, position, index }: { number: number; text: string; position: PositionStyle; index: number }) {
  return (
    <motion.div
      className="absolute w-[150px] sm:w-[180px] md:w-[200px] p-4 sm:p-6 md:p-8 bg-[rgba(255,140,0,0.1)] border border-[rgba(255,140,0,0.2)] rounded-xl backdrop-blur-sm"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      aria-label={`Step ${number}: ${text}`}
    >
      <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-[#FF8C00]">
        {number}
      </div>
      <div className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
        {text}
      </div>
    </motion.div>
  )
}

export default function StrikeFlywheel() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4 md:px-8 overflow-hidden" aria-labelledby="flywheel-title">
      <h2 id="flywheel-title" className="text-[clamp(1.75rem,3vw,3rem)] font-bold text-center mb-8 sm:mb-12 text-[#FF8C00]">
        The Bitcoin Flywheel
      </h2>
      <div className="max-w-7xl mx-auto relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] border-2 border-[rgba(255,140,0,0.3)] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        {steps.map((step, index) => (
          <FlywheelStep key={index} {...step} index={index} />
        ))}
      </div>
    </section>
  )
} 