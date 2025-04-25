'use client';

import { motion, Variants, TargetAndTransition, VariantLabels } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  initial?: boolean | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
}

export function MotionContainer({ children, variants, className, initial, animate }: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, variants, className }: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 