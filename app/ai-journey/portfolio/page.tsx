'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import aiJourneyData from '@/data/ai-journey.json';

interface CaseStudy {
  title: string;
  date: string;
  category?: string;
  status?: string;
  description: string;
  outcomes: string[];
  technologies: string[];
  demoUrl?: string;
  foundationSkillsApplied: string[];
  threeHatFramework?: {
    systemsArchitect: string;
    productManager: string;
    implementation: string;
  };
}

export default function AIPortfolioPage() {
  // Filter to show only hackathon and exploration projects (not client work)
  const voiceProjects = ((aiJourneyData.journey as { casestudies?: CaseStudy[] }).casestudies || []).filter(
    (cs) => cs.category === 'hackathon' || cs.category === 'exploration'
  );

  return (
    <AIJourneySubpageLayout
      title="Voice AI Experiments"
      description="Exploring voice-first AI interaction patterns through hackathons and build-in-public projects. See how real-time reasoning meets voice synthesis."
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800">
          <p className="text-gray-700 dark:text-gray-300">
            Voice interfaces become powerful when paired with real-time reasoning.
            These projects explore how ElevenLabs voice synthesis combined with AI can create
            intuitive, human-centered applications for SMEs.
          </p>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {voiceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h3>
                      {project.category === 'hackathon' && (
                        <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                          🏆 Hackathon
                        </span>
                      )}
                      {project.category === 'exploration' && (
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                          🔬 Exploration
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Demo →
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-green-500 mt-1">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Three-Hat Framework */}
              {project.threeHatFramework && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
                    Three-Hat Framework Applied
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                        🏗️ Systems Architect
                      </h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {project.threeHatFramework.systemsArchitect}
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h5 className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                        📋 Product Manager
                      </h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        {project.threeHatFramework.productManager}
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h5 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">
                        💻 Implementation
                      </h5>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        {project.threeHatFramework.implementation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What&apos;s Next Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
          <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">
            What&apos;s Next: Gemini + Voice
          </h3>
          <p className="text-teal-700 dark:text-teal-300">
            Exploring how Gemini Flash&apos;s speed and multimodal capabilities can enhance voice agent
            architectures. Combining ElevenLabs voice synthesis with Gemini&apos;s reasoning for
            SME applications like customer service, sales qualification, and operational workflows.
          </p>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-between mt-12"
      >
        <Link
          href="/ai-journey/how-to-learn/claude-mastery"
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Claude Mastery
        </Link>
        <Link
          href="/ai-journey"
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          Back to AI Journey
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
}
