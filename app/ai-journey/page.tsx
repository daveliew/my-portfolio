'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PageLayout, Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import journeyData from '@/data/ai-journey.json';
import { AIJourneyData, CaseStudy } from '@/types/ai-journey';
import { SkillsMatrix, RoadmapTimeline, CaseStudyCard, FoundationSkills, CombinedCapabilities } from '../../components/skills';

export default function AIJourneyPage() {
  const [activeTab, setActiveTab] = useState<string>('roadmap');
  const typedJourneyData = journeyData as AIJourneyData;
  const { journey } = typedJourneyData;

  return (
    <PageLayout
      title={journey.title}
      description={journey.description}
      maxWidth="5xl"
    >

      {/* AI Journey Navigation */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="AI Journey Navigation" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-journey/why-ai">
            <Card hover className="p-4 h-full">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Why AI</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Understanding the AI S-curve and why AI matters</p>
            </Card>
          </Link>
          
          <Card className="p-4">
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
          </Card>
          
          <Link href="/ai-journey/portfolio">
            <Card hover className="p-4 h-full">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">My AI Portfolio</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Showcase of my AI projects and implementations</p>
            </Card>
          </Link>
        </div>
      </motion.section>

      {/* Coatue Framework Image */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <Card className="p-6 bg-gray-50 dark:bg-gray-800">
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
        </Card>
      </motion.section>

      {/* Tab Navigation */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-8"
      >
        <SectionHeader title="Journey Details" />
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
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Learning Roadmap</h3>
              <RoadmapTimeline milestones={journey.roadmap} />
            </Card>
          )}

          {activeTab === 'foundation' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Foundation Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in AI builds upon a foundation of business and technical skills developed over years of experience.
                These core competencies provide the platform from which I&apos;m developing specialized AI capabilities.
              </p>
              <FoundationSkills foundationSkills={journey.foundationSkills} />
            </Card>
          )}

          {activeTab === 'skills' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">AI Skills Matrix</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Core skills needed across Cloud Infrastructure, Data Management, Workflow Implementation, and AI Applications.
              </p>
              <SkillsMatrix skillsMap={journey.skillsMap} />
            </Card>
          )}

          {activeTab === 'combined' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Combined Capabilities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                By combining my foundation skills with AI-specific expertise, I&apos;ve developed these unique capabilities
                that position me to deliver value across multiple phases of the AI S-curve.
              </p>
              <CombinedCapabilities combinedCapabilities={journey.combinedCapabilities} />
            </Card>
          )}

          {activeTab === 'casestudies' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {journey.casestudies.map((study: CaseStudy, index: number) => (
                  <CaseStudyCard key={index} casestudy={study} />
                ))}
              </div>
            </Card>
          )}
        </div>
      </motion.section>
    </PageLayout>
  );
} 