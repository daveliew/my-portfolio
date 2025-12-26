'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageLayout, CTAButton } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';
import AIJourneyTabs from '@/components/ai-journey/AIJourneyTabs';

export default function AIJourneyPage() {
  return (
    <PageLayout
      title="AI Journey"
      description="Pioneering Human-AI Collaboration for the Next Generation"
      maxWidth="4xl"
      gradientTitle
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <motion.div
          {...fadeInUp()}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Human-AI Collaboration
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Building the frameworks our children will need to thrive with AI—where human wisdom and artificial intelligence create value greater than the sum of their parts.
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation - WHY / HOW / WHAT */}
      <motion.section
        {...sectionAnimation(0)}
        className="border-t border-gray-200 dark:border-gray-700"
      >
        <AIJourneyTabs />
      </motion.section>

      {/* CTA */}
      <motion.section
        {...sectionAnimation(1)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Pioneer?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Start your journey into human-AI collaboration. Every framework here is battle-tested and ready to implement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/ai-journey/why-ai">
            Start with Why AI
          </CTAButton>
          <Link
            href="/ai-journey/claude/overview"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Dive into Claude Mastery
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}