import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h6 className="text-sm uppercase tracking-wider text-yellow-500">EXCLUSIVE ACCESS</h6>
                <h1 className="font-epilogue text-6xl md:text-7xl lg:text-8xl text-yellow-500 font-bold">The Club</h1>
              </motion.div>
            </div>
            
            <motion.div 
              className="prose prose-lg max-w-none text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Welcome to the Club, where financial sovereignty meets exclusive opportunity. 
                Our members gain privileged access to market insights, 
                and a community of visionary investors reshaping the future of wealth.
              </p>
              <p>
                Join an elite circle of forward-thinking individuals who understand that true financial freedom 
                comes from being early to the greatest monetary revolution in history.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/join">
                <Button className="bg-[#1c1f26] border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-bold text-xl px-8 py-6 rounded-xl transition-all duration-300">
                  Join the Club
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="relative h-[600px] md:h-[800px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/background_120.jpeg"
              alt="The Club"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 