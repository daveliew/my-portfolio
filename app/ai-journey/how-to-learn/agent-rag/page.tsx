'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import learningPathsData from '@/data/ai-journey-learning-paths.json';

export default function AgentRagPage() {
  // Find the Agent & RAG learning path from the data
  const agentRagPath = learningPathsData.learningPaths.find(path => path.id === 'agent-rag');

  if (!agentRagPath) {
    return <div>Error loading learning path data</div>;
  }

  return (
    <AIJourneySubpageLayout
      title={agentRagPath.title}
      description={agentRagPath.description}
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
            By the end of this advanced learning path, you will be able to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {agentRagPath.objectives.map((objective, index) => (
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
                <li><span className="font-medium">Level:</span> {agentRagPath.metadata.level}</li>
                <li><span className="font-medium">Duration:</span> {agentRagPath.metadata.duration}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {agentRagPath.metadata.prerequisites.map((prereq, index) => (
                  <li key={index} className="pl-2">
                    <span className="pl-2">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">Target Audience</h3>
            <div className="flex flex-wrap gap-2">
              {agentRagPath.metadata.targetAudience.map((audience, index) => (
                <span key={index} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                  {audience}
                </span>
              ))}
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
          {agentRagPath.phases.map((phase, phaseIndex) => (
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
            For best results with this advanced learning path:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {agentRagPath.process.map((step, index) => (
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
          href={agentRagPath.links.previous} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← LLM Handling Path
        </Link>
        <Link 
          href={agentRagPath.links.next} 
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          AI Portfolio →
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
} 