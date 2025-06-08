'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
export default function AIPortfolioPage() {

  return (
    <AIJourneySubpageLayout
      title="AI Portfolio & Case Studies"
      description="Exploring real-world applications of agentic AI systems, from sustainability solutions to business automation. See how intelligent systems can amplify human potential."
    >
      {/* Current Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Active Projects & Explorations</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Currently building and documenting agentic AI systems that solve real business challenges 
            while creating sustainable impact. Each project demonstrates different aspects of intelligent automation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🌱 Sustainability AI Agent</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Intelligent system for tracking, analyzing, and optimizing environmental impact across business operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Carbon Tracking</span>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Automation</span>
                <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">Impact Measurement</span>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🤖 Business Operations Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Agentic AI system streamlining workflows in speech therapy and corporate gifting businesses.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Workflow Automation</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Customer Experience</span>
                <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">Decision Support</span>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">📚 Knowledge Management System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                AI-powered system for capturing, organizing, and sharing learning insights across the AI journey.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">RAG Systems</span>
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Content Generation</span>
                <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">Learning Analytics</span>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🎯 AI Strategy Framework</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Systematic approach for evaluating, planning, and implementing agentic AI solutions in organizations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">Strategic Planning</span>
                <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">Risk Assessment</span>
                <span className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded">Implementation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Documentation Approach</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Each project includes detailed documentation of design decisions, implementation challenges, 
              and lessons learned to help other practitioners navigate similar challenges.
            </p>
            <ul className="space-y-2 text-blue-700 dark:text-blue-300">
              <li>• Architecture patterns and design principles</li>
              <li>• Performance metrics and optimization strategies</li>
              <li>• Integration challenges and solutions</li>
              <li>• Business impact and ROI analysis</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-between mt-12"
      >
        <Link 
          href="/ai-journey/how-to-learn/agent-rag" 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Agent & RAG Learning Path
        </Link>
        <Link 
          href="/ai-journey" 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          Back to AI Journey Main
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
} 