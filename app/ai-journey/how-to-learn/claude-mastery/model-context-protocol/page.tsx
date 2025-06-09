'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function MCPPage() {
  return (
    <AIJourneySubpageLayout
      title="Model Context Protocol (MCP)"
      description="Build advanced applications using the Model Context Protocol for enhanced AI workflows"
    >
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Universal AI Integration" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Model Context Protocol (MCP) is an open standard that enables seamless integration 
            between AI applications and external data sources, providing a unified way to connect 
            AI models with the tools and information they need.
          </p>
          
          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
            <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">🔗 MCP Resources</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Explore the Model Context Protocol specification and implementations:
            </p>
            <div className="space-x-2">
              <a 
                href="https://modelcontextprotocol.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors"
              >
                MCP Website →
              </a>
              <a 
                href="https://github.com/modelcontextprotocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 