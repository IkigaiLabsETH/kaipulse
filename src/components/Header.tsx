'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-500/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-yellow-400 font-bold text-xl">
              MSTY Freedom
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-yellow-400",
                pathname === "/" ? "text-yellow-400" : "text-yellow-100/80"
              )}
            >
              Calculator
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-yellow-400",
                pathname === "/about" ? "text-yellow-400" : "text-yellow-100/80"
              )}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
} 