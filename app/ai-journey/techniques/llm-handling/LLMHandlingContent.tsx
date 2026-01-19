'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import learningPathsData from '@/data/ai-journey-learning-paths.json';

export default function LLMHandlingContent() {
  // Find the LLM Handling learning path from the data
  const llmPath = learningPathsData.learningPaths.find(path => path.id === 'llm-handling');

  if (!llmPath) {
    return <div>Error loading learning path data</div>;
  }

  return (
    <AIJourneySubpageLayout
      title={llmPath.title}
      description={llmPath.description}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
        { href: '/ai-journey/techniques', label: 'Techniques' },
      ]}
    >
      {/* Learning Objectives */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Learning Objectives</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By the end of this learning path, you will be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {llmPath.objectives.map((objective, index) => (
              <li key={index} className="pl-2">
                <span className="pl-2">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Path Metadata */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Path Information</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">Details</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><span className="font-medium">Level:</span> {llmPath.metadata.level}</li>
                <li><span className="font-medium">Duration:</span> {llmPath.metadata.duration}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {llmPath.metadata.prerequisites.map((prereq, index) => (
                  <li key={index} className="pl-2">
                    <span className="pl-2">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Learning Path Structure */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Learning Path Structure</h2>
        
        <div className="space-y-8">
          {llmPath.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-3">{phase.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{phase.description}</p>
              
              <div className="space-y-4">
                {phase.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex}>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{module.title}</h4>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600 dark:text-gray-300">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="pl-2">
                          <span className="pl-2">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      
      {/* Learning Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Learning Process</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This learning path is designed to be self-paced but structured. For optimal results:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {llmPath.process.map((step, index) => (
              <li key={index} className="pl-2">
                <span className="pl-2">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-between mt-12"
      >
        <Link 
          href={llmPath.links.previous} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Learning Overview
        </Link>
        <Link 
          href={llmPath.links.next} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          Agent & RAG Path →
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
} 