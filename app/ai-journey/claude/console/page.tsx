'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function DeveloperConsolePage() {
  return (
    <AIJourneySubpageLayout
      title="Developer Console & Workbench"
      description="Learn to use Anthropic's Developer Console and Workbench for experimentation and development"
    >
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Access the Console" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Anthropic Developer Console provides a web-based interface for experimenting with Claude, 
            managing API keys, and testing prompts without writing code.
          </p>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🚀 Developer Console</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Start experimenting with Claude directly in your browser:
            </p>
            <a 
              href="https://console.anthropic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Open Console →
            </a>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">💡 Workbench Features</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Interactive prompt testing</li>
              <li>• Model comparison tools</li>
              <li>• Parameter adjustment</li>
              <li>• Response analysis</li>
              <li>• Export to code functionality</li>
            </ul>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 