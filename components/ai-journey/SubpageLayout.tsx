'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Breadcrumb {
  href: string;
  label: string;
}

interface SubpageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  lastUpdated?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function AIJourneySubpageLayout({
  title,
  description,
  children,
  lastUpdated = 'May 2025',
  breadcrumbs,
}: SubpageLayoutProps) {
  // Default breadcrumbs if not provided
  const defaultBreadcrumbs: Breadcrumb[] = [
    { href: '/', label: 'Home' },
    { href: '/ai-journey', label: 'AI Journey' },
  ];

  const displayBreadcrumbs = breadcrumbs || defaultBreadcrumbs;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{description}</p>
        {lastUpdated && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: {lastUpdated}
          </p>
        )}
      </motion.div>

      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 flex-wrap">
          {displayBreadcrumbs.map((crumb) => (
            <React.Fragment key={crumb.href}>
              <Link href={crumb.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                {crumb.label}
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </React.Fragment>
          ))}
          <span className="text-gray-700 dark:text-gray-300">{title}</span>
        </nav>
      </motion.div>

      {/* Main Content */}
      {children}

      {/* Return to AI Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link 
          href="/ai-journey" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to AI Journey
        </Link>
      </motion.div>
    </div>
  );
} 