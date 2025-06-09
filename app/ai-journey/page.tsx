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
  const [activeTab, setActiveTab] = useState<string>('combined');
  const typedJourneyData = journeyData as AIJourneyData;
  const { journey } = typedJourneyData;

  return (
    <PageLayout
      title="Human-AI Collaboration Journey"
      description="Pioneering complementary intelligence systems through real-world experimentation and framework development"
      maxWidth="5xl"
    >

      {/* AI Journey Navigation */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Human-AI Collaboration Framework" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-journey/why-ai">
            <Card hover className="p-4 h-full">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Why Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">The case for complementarity over replacement in AI implementation</p>
            </Card>
          </Link>
          
          <Card className="p-4">
            <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Learning Frameworks</h3>
            <div className="space-y-2 mt-2">
              <Link href="/ai-journey/how-to-learn/overview" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Framework Overview
              </Link>
              <Link href="/ai-journey/how-to-learn/llm-handling" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Human-AI Communication
              </Link>
              <Link href="/ai-journey/how-to-learn/agent-rag" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Complementary Intelligence
              </Link>
              <Link href="/ai-journey/how-to-learn/technical-leadership" className="block text-gray-600 dark:text-gray-300 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                • Three-Hat Leadership
              </Link>
            </div>
          </Card>
          
          <Link href="/ai-journey/portfolio">
            <Card hover className="p-4 h-full">
              <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Living Lab Results</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Real implementations demonstrating human-AI collaboration models</p>
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
          My collaboration experiments span <span className="text-blue-600 dark:text-blue-400 font-medium">Phase 2 (Edge AI)</span> and 
          <span className="text-blue-600 dark:text-blue-400 font-medium"> Phase 3 (AI Applications)</span>, pioneering complementary intelligence systems 
          where human wisdom and AI capabilities create value greater than the sum of their parts.
        </p>
        </Card>
      </motion.section>

      {/* Tab Navigation */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-8"
      >
        <SectionHeader title="Collaboration Framework Details" />
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap space-x-4 md:space-x-6">
            <button
              onClick={() => setActiveTab('combined')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'combined'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Collaboration Models
            </button>
            <button
              onClick={() => setActiveTab('casestudies')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'casestudies'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Living Lab Results
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'roadmap'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Experiment Pipeline
            </button>
            <button
              onClick={() => setActiveTab('foundation')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'foundation'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Human Foundation
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`py-2 px-1 -mb-px font-medium text-sm ${
                activeTab === 'skills'
                  ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Technical Capabilities
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'combined' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Human-AI Collaboration Models</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Developed frameworks that demonstrate how human wisdom and AI capabilities can create complementary 
                intelligence systems, including the breakthrough Three-Hat Framework for technical leadership.
              </p>
              <CombinedCapabilities combinedCapabilities={journey.combinedCapabilities} />
            </Card>
          )}

          {activeTab === 'casestudies' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Living Lab Results</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Real-world implementations that prove complementary intelligence models work. Each case study shows 
                how the Three-Hat Framework prevents technical debt while optimizing for human-AI collaboration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {journey.casestudies.map((study: CaseStudy, index: number) => (
                  <CaseStudyCard key={index} casestudy={study} />
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'roadmap' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Experiment Pipeline</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Planned experiments to further develop human-AI collaboration models. Each milestone tests new 
                hypotheses about complementary intelligence and builds toward frameworks our children will need.
              </p>
              <RoadmapTimeline milestones={journey.roadmap} />
            </Card>
          )}

          {activeTab === 'foundation' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Human Foundation Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The distinctly human capabilities that form the foundation for effective AI collaboration—pattern recognition, 
                strategic thinking, moral agency, and embodied wisdom that AI cannot replicate.
              </p>
              <FoundationSkills foundationSkills={journey.foundationSkills} />
            </Card>
          )}

          {activeTab === 'skills' && (
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Technical Implementation Capabilities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Technical skills that enable rapid prototyping and testing of human-AI collaboration models across 
                infrastructure, applications, and edge deployment scenarios.
              </p>
              <SkillsMatrix skillsMap={journey.skillsMap} />
            </Card>
          )}
        </div>
      </motion.section>
    </PageLayout>
  );
} 