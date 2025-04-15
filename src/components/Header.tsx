'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'CALCULATOR', href: '/calculator' },
    { name: 'BITCOIN', href: '/platforms/msty/bitcoin' },
    { name: 'MSTR', href: '/platforms/msty/mstr' },
    { name: 'MSTY', href: '/platforms/msty' },
    { name: 'BROKERS', href: '/platforms/msty/brokers' },
    { name: 'BITWISE', href: '/platforms/bitwise' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-500/20"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center space-x-2 min-w-0">
              <img
                src="/IKIGAI_LABS_logo.svg"
                alt="IKIGAI Labs Logo"
                width={32}
                height={32}
                className="w-8 h-8 flex-shrink-0"
              />
              <span className="text-yellow-400 font-bold text-xl truncate">IKIGAI</span>
            </Link>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-bold transition-colors hover:text-yellow-400",
                  pathname === item.href ? "text-yellow-400" : "text-yellow-100/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-black/95 rounded shadow-lg border border-yellow-500/10">
            <div className="flex flex-col py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-base font-bold transition-colors hover:text-yellow-400 hover:bg-yellow-900/20",
                    pathname === item.href ? "text-yellow-400" : "text-yellow-100/80"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
} 