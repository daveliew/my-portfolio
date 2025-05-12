'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import journeyData from '@/data/ai-journey.json';
import { AIJourneyData, CaseStudy } from '@/types/ai-journey';
import { SkillsMatrix, RoadmapTimeline, CaseStudyCard, FoundationSkills, CombinedCapabilities } from '../../components/skills';

export default function AIJourneyPage() {
  const [activeTab, setActiveTab] = useState<string>('roadmap');
  const typedJourneyData = journeyData as AIJourneyData;
  const { journey } = typedJourneyData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{journey.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{journey.description}</p>
      </motion.div>

      {/* AI Journey Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">AI Journey Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-journey/why-ai" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Why AI</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Understanding the AI S-curve and why AI matters</p>
          </Link>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">How to Learn AI</h3>
            <div className="space-y-2 mt-2">
              <Link href="/ai-journey/how-to-learn/overview" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Learning Overview
              </Link>
              <Link href="/ai-journey/how-to-learn/llm-handling" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • LLM Handling Path
              </Link>
              <Link href="/ai-journey/how-to-learn/agent-rag" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Agent & RAG Path
              </Link>
            </div>
          </div>
          
          <Link href="/ai-journey/portfolio" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">My AI Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Showcase of my AI projects and implementations</p>
          </Link>
        </div>
      </motion.div>

      {/* Coatue Framework Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="relative">
          <Image 
            src="/images/coatue_framework.png" 
            alt="Coatue Framework for AI S-Curve" 
            width={800} 
            height={450}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
          Source: Coatue opinion and analysis as of June 2024. For illustrative purposes only.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          My journey is currently at the intersection of <span className="text-blue-600 dark:text-blue-400 font-medium">Phase 2 (Edge AI)</span> and 
          <span className="text-blue-600 dark:text-blue-400 font-medium"> Phase 3 (AI Applications)</span>, focusing on building practical AI solutions 
          that deliver immediate business value while understanding the technology deeply enough to adapt as it evolves.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Journey Details</h2>
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap space-x-4 md:space-x-6">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'roadmap'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => setActiveTab('foundation')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'foundation'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Foundation Skills
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'skills'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              AI Skills Matrix
            </button>
            <button
              onClick={() => setActiveTab('combined')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'combined'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Combined Capabilities
            </button>
            <button
              onClick={() => setActiveTab('casestudies')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'casestudies'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Case Studies
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'roadmap' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Learning Roadmap</h3>
              <RoadmapTimeline milestones={journey.roadmap} />
            </div>
          )}

          {activeTab === 'foundation' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Foundation Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in AI builds upon a foundation of business and technical skills developed over years of experience.
                These core competencies provide the platform from which I&apos;m developing specialized AI capabilities.
              </p>
              <FoundationSkills foundationSkills={journey.foundationSkills} />
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">AI Skills Matrix</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Core skills needed across Cloud Infrastructure, Data Management, Workflow Implementation, and AI Applications.
              </p>
              <SkillsMatrix skillsMap={journey.skillsMap} />
            </div>
          )}

          {activeTab === 'combined' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Combined Capabilities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                By combining my foundation skills with AI-specific expertise, I&apos;ve developed these unique capabilities
                that position me to deliver value across multiple phases of the AI S-curve.
              </p>
              <CombinedCapabilities combinedCapabilities={journey.combinedCapabilities} />
            </div>
          )}

          {activeTab === 'casestudies' && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {journey.casestudies.map((study: CaseStudy, index: number) => (
                  <CaseStudyCard key={index} casestudy={study} />
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Return Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </motion.div>
    </div>
  );
} 