'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function CookbookExamplesPage() {
  return (
    <AIJourneySubpageLayout
      title="Anthropic Cookbook Examples"
      description="Explore working code examples and implementations from Anthropic's comprehensive cookbook"
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="About the Cookbook" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Anthropic Cookbook provides practical, working examples of how to use Claude in real-world scenarios. 
            These examples cover everything from basic API usage to complex multi-step workflows and integrations.
          </p>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🔗 Official Cookbook</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Access the complete collection of examples and tutorials directly from Anthropic:
            </p>
            <a 
              href="https://github.com/anthropics/anthropic-cookbook" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Visit Anthropic Cookbook →
            </a>
          </div>
        </Card>
      </motion.section>

      {/* Coming Soon */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Curated Examples (Coming Soon)" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We're currently curating and organizing the best examples from the Anthropic Cookbook, 
            with detailed explanations and learning objectives for each implementation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Planned Categories</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Basic API usage patterns</li>
                <li>• Text analysis and processing</li>
                <li>• Creative content generation</li>
                <li>• Data extraction and transformation</li>
                <li>• Multi-step reasoning workflows</li>
                <li>• Integration with external services</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Learning Features</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Step-by-step code walkthrough</li>
                <li>• Common patterns explained</li>
                <li>• Error handling examples</li>
                <li>• Performance optimization tips</li>
                <li>• Testing and validation approaches</li>
                <li>• Production deployment guidance</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 