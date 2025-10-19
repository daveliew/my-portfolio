'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function VisionMultimodalPage() {
  return (
    <AIJourneySubpageLayout
      title="Vision & Multimodal Inputs"
      description="Harness Claude's vision capabilities to process and analyze visual information alongside text"
    >
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Visual Understanding" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude can analyze images, charts, diagrams, screenshots, and documents, making it a powerful 
            tool for multimodal applications that combine text and visual information.
          </p>
          
          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🖼️ Vision Capabilities</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Learn about Claude&apos;s vision features and implementation:
            </p>
            <a 
              href="https://docs.anthropic.com/claude/docs/vision" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              View Vision Documentation →
            </a>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 