'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ComputerUsePage() {
  return (
    <AIJourneySubpageLayout
      title="Computer Use Capabilities"
      description="Explore Claude's groundbreaking computer use features for desktop automation and interaction"
    >
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Revolutionary Computer Control" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude&apos;s computer use feature represents a breakthrough in AI capabilities, allowing Claude to 
            interact directly with computer interfaces, navigate applications, and perform complex desktop automation tasks.
          </p>
          
          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">⚠️ Beta Feature</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Computer use is currently in beta. Learn more about capabilities and limitations:
            </p>
            <a 
              href="https://docs.anthropic.com/claude/docs/computer-use" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
            >
              View Documentation →
            </a>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 