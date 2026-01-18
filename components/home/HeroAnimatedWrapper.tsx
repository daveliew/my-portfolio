'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/utils/animations';

interface HeroAnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Client wrapper for hero animations - content renders immediately via SSR
export function HeroTextAnimation({ children, className = '' }: HeroAnimatedWrapperProps) {
  return (
    <motion.div {...fadeInUp()} className={className}>
      {children}
    </motion.div>
  );
}

export function HeroVisualAnimation({ children, className = '' }: HeroAnimatedWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionAnimationProps {
  children: ReactNode;
  className?: string;
  index: number;
}

export function SectionAnimation({ children, className = '', index }: SectionAnimationProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
