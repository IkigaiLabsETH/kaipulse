"use client";

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'

const stats = [
  { value: '$6B+', label: '2024 Volume' },
  { value: '600%', label: 'YoY Growth' },
  { value: '85%', label: 'Gross Margin' },
  { value: '$0', label: 'CAC' },
  { value: '1,500', label: 'BTC in Treasury' },
  { value: '21%', label: 'Adjusted EBITDA' },
  { value: '75', label: 'Team Members' }
]

export default function StrikeStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-10 md:py-16 px-2 md:px-4 bg-transparent">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
        The Numbers Don&apos;t Lie
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] bg-[#1c1f26] text-white p-4 md:p-6 mb-0">
              <div className="text-xl md:text-2xl font-bold mb-1 text-yellow-500">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/90 text-center">
                {stat.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 