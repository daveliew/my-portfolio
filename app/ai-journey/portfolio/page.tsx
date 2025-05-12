'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import portfolioData from '@/data/ai-journey-portfolio.json';

export default function AIPortfolioPage() {
  const { portfolio } = portfolioData;

  return (
    <AIJourneySubpageLayout
      title={portfolio.title}
      description={portfolio.description}
    >
      {/* Coming Soon Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{portfolio.comingSoon.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {portfolio.comingSoon.description}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The portfolio will include:
          </p>
          <ul className="inline-block text-left space-y-3 mb-8">
            {portfolio.comingSoon.willInclude.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
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
          href={portfolio.links.previous} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Agent & RAG Learning Path
        </Link>
        <Link 
          href={portfolio.links.backToMain} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          Back to AI Journey Main
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
} 