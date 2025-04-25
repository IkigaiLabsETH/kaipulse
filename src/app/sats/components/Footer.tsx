'use client';

import { Heart, Zap, Lock, Camera } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-black/50 backdrop-blur-sm border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <Heart className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-epilogue text-lg font-semibold mb-2 text-yellow-500">Direct Support</h3>
            <p className="font-satoshi text-zinc-300">
              Support creators instantly with Bitcoin Lightning. No middlemen, no delays.
            </p>
          </div>
          <div className="text-center">
            <Camera className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-epilogue text-lg font-semibold mb-2 text-yellow-500">Creator Freedom</h3>
            <p className="font-satoshi text-zinc-300">
              Photographers own their earnings, audience, and artistic destiny.
            </p>
          </div>
          <div className="text-center">
            <Lock className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-epilogue text-lg font-semibold mb-2 text-yellow-500">Real Engagement</h3>
            <p className="font-satoshi text-zinc-300">
              No fake likes. No shadowbans. Just genuine connections.
            </p>
          </div>
        </div>

        {/* Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-yellow-500/20">
          <div>
            <h4 className="font-epilogue text-lg font-semibold mb-4 text-yellow-500">For Creators</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Apply to Join</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Creator Dashboard</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Reward System</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-epilogue text-lg font-semibold mb-4 text-yellow-500">For Supporters</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Browse Photos</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Lightning Wallet</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Rewards Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-epilogue text-lg font-semibold mb-4 text-yellow-500">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">How It Works</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-epilogue text-lg font-semibold mb-4 text-yellow-500">About</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="font-satoshi text-zinc-300 hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-satoshi text-zinc-300 mb-4 md:mb-0">
            © 2024 Satsnap. Supporting photographers with Bitcoin Lightning.
          </p>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="font-satoshi text-zinc-300">Powered by Lightning Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 