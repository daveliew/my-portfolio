'use client';

import { useState } from 'react';
import Image from 'next/image';
import journeyData from '../../data/ai-journey.json';
import { AIJourneyData } from '../../types/ai-journey';
import { SkillsMatrix, RoadmapTimeline, CaseStudyCard, FoundationSkills, CombinedCapabilities } from '../../components/skills';

export default function AIJourneyPage() {
  const [activeTab, setActiveTab] = useState<string>('roadmap');
  const { journey } = journeyData as AIJourneyData;

  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">{journey.title}</h1>
        <p className="text-off-white text-lg">{journey.description}</p>
      </div>

      {/* Coatue Framework Image */}
      <div className="mb-10 bg-dark-gray p-6 rounded-lg">
        <div className="relative">
          <Image 
            src="/images/coatue_framework.png" 
            alt="Coatue Framework for AI S-Curve" 
            width={800} 
            height={450}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-sm text-gray-400 text-center mt-3">
          Source: Coatue opinion and analysis as of June 2024. For illustrative purposes only.
        </p>
        <p className="text-off-white mt-4">
          My journey is currently at the intersection of <span className="text-burgundy font-medium">Phase 2 (Edge AI)</span> and 
          <span className="text-burgundy font-medium"> Phase 3 (AI Applications)</span>, focusing on building practical AI solutions 
          that deliver immediate business value while understanding the technology deeply enough to adapt as it evolves.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-gray-700">
        <nav className="flex flex-wrap space-x-4 md:space-x-6">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'roadmap'
                ? 'border-b-2 border-burgundy text-burgundy'
                : 'text-off-white hover:text-burgundy-light'
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={() => setActiveTab('foundation')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'foundation'
                ? 'border-b-2 border-burgundy text-burgundy'
                : 'text-off-white hover:text-burgundy-light'
            }`}
          >
            Foundation Skills
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'skills'
                ? 'border-b-2 border-burgundy text-burgundy'
                : 'text-off-white hover:text-burgundy-light'
            }`}
          >
            AI Skills Matrix
          </button>
          <button
            onClick={() => setActiveTab('combined')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'combined'
                ? 'border-b-2 border-burgundy text-burgundy'
                : 'text-off-white hover:text-burgundy-light'
            }`}
          >
            Combined Capabilities
          </button>
          <button
            onClick={() => setActiveTab('casestudies')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'casestudies'
                ? 'border-b-2 border-burgundy text-burgundy'
                : 'text-off-white hover:text-burgundy-light'
            }`}
          >
            Case Studies
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'roadmap' && (
          <div>
            <h2 className="text-2xl font-bold text-burgundy mb-4">Learning Roadmap</h2>
            <RoadmapTimeline milestones={journey.roadmap} />
          </div>
        )}

        {activeTab === 'foundation' && (
          <div>
            <h2 className="text-2xl font-bold text-burgundy mb-4">Foundation Skills</h2>
            <p className="text-off-white mb-6">
              My journey in AI builds upon a foundation of business and technical skills developed over years of experience.
              These core competencies provide the platform from which I&apos;m developing specialized AI capabilities.
            </p>
            <FoundationSkills foundationSkills={journey.foundationSkills} />
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2 className="text-2xl font-bold text-burgundy mb-4">AI Skills Matrix</h2>
            <p className="text-off-white mb-6">
              Core skills needed across Cloud Infrastructure, Data Management, Workflow Implementation, and AI Applications.
            </p>
            <SkillsMatrix skillsMap={journey.skillsMap} />
          </div>
        )}

        {activeTab === 'combined' && (
          <div>
            <h2 className="text-2xl font-bold text-burgundy mb-4">Combined Capabilities</h2>
            <p className="text-off-white mb-6">
              By combining my foundation skills with AI-specific expertise, I&apos;ve developed these unique capabilities
              that position me to deliver value across multiple phases of the AI S-curve.
            </p>
            <CombinedCapabilities combinedCapabilities={journey.combinedCapabilities} />
          </div>
        )}

        {activeTab === 'casestudies' && (
          <div>
            <h2 className="text-2xl font-bold text-burgundy mb-4">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journey.casestudies.map((study, index) => (
                <CaseStudyCard key={index} casestudy={study} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 