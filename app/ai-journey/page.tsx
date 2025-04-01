'use client';

import { useState } from 'react';
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
    <div className="min-h-screen bg-depth-gradient">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-tech-burgundy mb-2">{journey.title}</h1>
        <p className="text-warm-sand text-lg">{journey.description}</p>
      </div>

      {/* AI Journey Navigation */}
      <div className="mb-10 bg-deep-navy p-6 rounded-lg shadow-ambient reflective-surface">
        <h2 className="text-xl font-semibold text-cool-mint mb-4">AI Journey Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/ai-journey/why-ai" className="p-4 border border-light-glow rounded-lg hover:border-vibrant-teal hover:shadow-hover-glow transition-all duration-300 directional-light">
            <h3 className="text-lg font-medium text-vibrant-teal mb-1">Why AI</h3>
            <p className="text-warm-sand text-sm">Understanding the AI S-curve and why AI matters</p>
          </Link>
          
          <div className="p-4 border border-light-glow rounded-lg reflective-surface">
            <h3 className="text-lg font-medium text-vibrant-teal mb-1">How to Learn AI</h3>
            <div className="space-y-2 mt-2">
              <Link href="/ai-journey/how-to-learn/overview" className="block text-warm-sand text-sm hover:text-cool-mint transition-colors">
                • Learning Overview
              </Link>
              <Link href="/ai-journey/how-to-learn/llm-handling" className="block text-warm-sand text-sm hover:text-cool-mint transition-colors">
                • LLM Handling Path
              </Link>
              <Link href="/ai-journey/how-to-learn/agent-rag" className="block text-warm-sand text-sm hover:text-cool-mint transition-colors">
                • Agent & RAG Path
              </Link>
            </div>
          </div>
          
          <Link href="/ai-journey/portfolio" className="p-4 border border-light-glow rounded-lg hover:border-vibrant-teal hover:shadow-hover-glow transition-all duration-300 directional-light">
            <h3 className="text-lg font-medium text-vibrant-teal mb-1">My AI Portfolio</h3>
            <p className="text-warm-sand text-sm">Showcase of my AI projects and implementations</p>
          </Link>
        </div>
      </div>

      {/* Coatue Framework Image */}
      <div className="mb-10 bg-deep-navy p-6 rounded-lg shadow-ambient section-highlight">
        <div className="relative directional-light">
          <Image 
            src="/images/coatue_framework.png" 
            alt="Coatue Framework for AI S-Curve" 
            width={800} 
            height={450}
            className="rounded-lg mx-auto"
          />
        </div>
        <p className="text-sm text-cool-mint text-center mt-3">
          Source: Coatue opinion and analysis as of June 2024. For illustrative purposes only.
        </p>
        <p className="text-warm-sand mt-4">
          My journey is currently at the intersection of <span className="text-vibrant-teal font-medium">Phase 2 (Edge AI)</span> and 
          <span className="text-vibrant-teal font-medium"> Phase 3 (AI Applications)</span>, focusing on building practical AI solutions 
          that deliver immediate business value while understanding the technology deeply enough to adapt as it evolves.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 border-b border-twilight-purple">
        <nav className="flex flex-wrap space-x-4 md:space-x-6">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'roadmap'
                ? 'border-b-2 border-vibrant-teal text-vibrant-teal'
                : 'text-warm-sand hover:text-cool-mint'
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={() => setActiveTab('foundation')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'foundation'
                ? 'border-b-2 border-vibrant-teal text-vibrant-teal'
                : 'text-warm-sand hover:text-cool-mint'
            }`}
          >
            Foundation Skills
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'skills'
                ? 'border-b-2 border-vibrant-teal text-vibrant-teal'
                : 'text-warm-sand hover:text-cool-mint'
            }`}
          >
            AI Skills Matrix
          </button>
          <button
            onClick={() => setActiveTab('combined')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'combined'
                ? 'border-b-2 border-vibrant-teal text-vibrant-teal'
                : 'text-warm-sand hover:text-cool-mint'
            }`}
          >
            Combined Capabilities
          </button>
          <button
            onClick={() => setActiveTab('casestudies')}
            className={`py-2 px-1 -mb-px font-medium text-sm ${
              activeTab === 'casestudies'
                ? 'border-b-2 border-vibrant-teal text-vibrant-teal'
                : 'text-warm-sand hover:text-cool-mint'
            }`}
          >
            Case Studies
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'roadmap' && (
          <div className="section-highlight p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-vibrant-teal mb-4">Learning Roadmap</h2>
            <RoadmapTimeline milestones={journey.roadmap} />
          </div>
        )}

        {activeTab === 'foundation' && (
          <div className="section-highlight p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-vibrant-teal mb-4">Foundation Skills</h2>
            <p className="text-warm-sand mb-6">
              My journey in AI builds upon a foundation of business and technical skills developed over years of experience.
              These core competencies provide the platform from which I&apos;m developing specialized AI capabilities.
            </p>
            <FoundationSkills foundationSkills={journey.foundationSkills} />
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="section-highlight p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-vibrant-teal mb-4">AI Skills Matrix</h2>
            <p className="text-warm-sand mb-6">
              Core skills needed across Cloud Infrastructure, Data Management, Workflow Implementation, and AI Applications.
            </p>
            <SkillsMatrix skillsMap={journey.skillsMap} />
          </div>
        )}

        {activeTab === 'combined' && (
          <div className="section-highlight p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-vibrant-teal mb-4">Combined Capabilities</h2>
            <p className="text-warm-sand mb-6">
              By combining my foundation skills with AI-specific expertise, I&apos;ve developed these unique capabilities
              that position me to deliver value across multiple phases of the AI S-curve.
            </p>
            <CombinedCapabilities combinedCapabilities={journey.combinedCapabilities} />
          </div>
        )}

        {activeTab === 'casestudies' && (
          <div className="section-highlight p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-vibrant-teal mb-4">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journey.casestudies.map((study: CaseStudy, index: number) => (
                <CaseStudyCard key={index} casestudy={study} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 