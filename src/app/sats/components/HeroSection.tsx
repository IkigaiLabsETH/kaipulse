'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-boska text-8xl md:text-8xl mb-6">
            A like that actually{" "}
            <span className="text-yellow-500">means something</span>
          </h1>
          <p className="font-satoshi text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Imagine supporting photographers with Bitcoin Lightning micropayments? 
            What if every like sends sats directly to creators.
          </p>
          <Button 
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 font-epilogue text-lg"
          >
            Start Supporting Creators
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 