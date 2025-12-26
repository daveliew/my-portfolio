'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BackLink from './BackLink';
import { pageHeaderAnimation, footerAnimation } from '@/utils/animations';

interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  gradientTitle?: boolean;
  backLink?: {
    href: string;
    text: string;
  };
  lastUpdated?: string;
}

export default function PageLayout({
  title,
  description,
  children,
  maxWidth = '4xl',
  gradientTitle = false,
  backLink = { href: '/', text: 'Back to home' },
  lastUpdated
}: PageLayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 py-12`}>
      {/* Header */}
      <motion.div
        {...pageHeaderAnimation}
        className="mb-12 text-center"
      >
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${gradientTitle ? 'bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent' : ''}`}>
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
        {lastUpdated && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: {lastUpdated}
          </p>
        )}
      </motion.div>

      {/* Main Content */}
      {children}

      {/* Back Link */}
      <div className="mt-12">
        <BackLink 
          href={backLink.href} 
          text={backLink.text} 
          animation={footerAnimation}
        />
      </div>
    </div>
  );
}