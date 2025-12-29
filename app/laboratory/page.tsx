'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout, CrossPollinationStudio } from '@/components/common';
import TableOfContents from '@/components/common/TableOfContents';
import { sectionAnimation } from '@/utils/animations';
import { themeColors, themeUtilities } from '@/styles/theme';
import type { TOCHeading } from '@/types/content';

// Import data
import voiceData from '@/data/voice-experiments.json';
import agentData from '@/data/agent-experiments.json';
import sustainabilityData from '@/data/sustainability.json';

export default function LaboratoryPage() {
  // Table of Contents structure
  const headings: TOCHeading[] = [
    { id: 'convergence', text: 'The New Convergence', level: 2 },
    { id: 'thesis', text: 'The Thesis', level: 3 },
    { id: 'cross-pollination', text: 'Cross-Pollination Studio', level: 3 },
    { id: 'experiments', text: 'Active Experiments', level: 2 },
    { id: 'voice-lab', text: 'Voice AI Laboratory', level: 3 },
    { id: 'agents-lab', text: 'AI Agents Laboratory', level: 3 },
    { id: 'context-engineering', text: 'Context Engineering', level: 3 },
    { id: 'sustainability', text: 'Sustainability (Keeping Warm)', level: 3 },
    { id: 'expertise', text: 'Building Expertise', level: 2 },
  ];

  return (
    <PageLayout
      title="Innovation Laboratory"
      description="Three streams reshaping human-AI collaboration: Voice interfaces that speak naturally, Agents that work autonomously, and Context that shapes intelligence."
      maxWidth="6xl"
      gradientTitle
    >
      <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
        {/* Table of Contents - Desktop Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* The New Convergence */}
          <div id="convergence" className="mb-12">
            {/* Hero Section - The Three Pillars */}
            <motion.section
              {...sectionAnimation(0)}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed">
                  Three streams are reshaping how I work and what I&apos;m building: Voice interfaces that remove friction,
                  AI agents that work alongside me, and context engineering that makes it all effective.
                </p>
                <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed font-semibold">
                  This laboratory tracks my exploration and experiments - building up expertise in public.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  This work is grounded in the <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">Fitzgerald Principle</Link>—holding
                  opposing ideas (automation + humanity, voice + text, agents + control) in productive tension.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className={`${themeUtilities.cards.knowledge} p-6 text-center border-l-4 ${themeColors.border.knowledge}`}>
                  <div className="text-4xl mb-4">🎙️</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>Voice UI</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    Voice is the next interface - real-time, accessible, human. No typing, no screens, just conversation.
                  </p>
                </div>

                <div className={`${themeUtilities.cards.time} p-6 text-center border-l-4 ${themeColors.border.time}`}>
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>AI Agents</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    From prompts to orchestrated workflows - systems that work alongside you, not just tools you use.
                  </p>
                </div>

                <div className={`${themeUtilities.cards.wealth} p-6 text-center border-l-4 ${themeColors.border.wealth}`}>
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.wealth} mb-3`}>Context Engineering</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    Architecting what AI knows before it reasons - the meta-skill that makes Voice + Agents effective.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* The Thesis */}
            <motion.section
              id="thesis"
              {...sectionAnimation(1)}
              className="mb-12"
            >
              <SectionHeader title="The Thesis" />
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Voice + Agents + Context = Exponential Leverage</h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                    These three streams amplify each other. Each layer makes the others more powerful:
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.knowledge}`}>•</span>
                      <span className="text-[var(--text-primary)]">Voice makes agents accessible - no coding, just talking</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.time}`}>•</span>
                      <span className="text-[var(--text-primary)]">Agents multiply what voice can accomplish</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.wealth}`}>•</span>
                      <span className="text-[var(--text-primary)]">Context engineering makes both reliable and effective</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Laboratory Focus</h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                    Building expertise through hands-on exploration and shipping experiments.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.knowledge} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">ElevenLabs full platform mastery</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.time} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">Claude Code workflow expertise</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.wealth} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">Context architecture patterns</span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.section>

            {/* Cross-Pollination Studio */}
            <motion.section
              id="cross-pollination"
              {...sectionAnimation(2)}
              className="mb-12"
            >
              <SectionHeader title="Cross-Pollination Studio" />
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Exploring where Voice, Agents, and Context intersect with business domains and creative applications.
              </p>
              <CrossPollinationStudio />
            </motion.section>
          </div>

          {/* Active Experiments */}
          <div id="experiments" className="mb-12">
            {/* Voice AI Laboratory */}
            <motion.section
              id="voice-lab"
              {...sectionAnimation(3)}
              className="mb-12"
            >
              <SectionHeader title="Voice AI Laboratory" />
              <Card className={`p-6 border-l-4 ${themeColors.border.knowledge}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${themeColors.text.knowledge}`}>{voiceData.pillar}</h3>
                    <p className="text-sm text-gray-500">{voiceData.status}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                    Active Learning
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed italic">
                  &quot;{voiceData.thesis}&quot;
                </p>

                {/* Experiments */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {voiceData.experiments.map((experiment, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-semibold mb-2">{experiment.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{experiment.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {experiment.tools?.map((tool, i) => (
                          <span key={i} className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Capabilities */}
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">Platform Capabilities Exploring:</p>
                  <div className="flex flex-wrap gap-2">
                    {voiceData.capabilities.map((cap, i) => (
                      <span key={i} className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border border-teal-200 dark:border-teal-700">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learnings */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm font-semibold mb-2">Key Learnings:</p>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    {voiceData.learnings.map((learning, i) => (
                      <li key={i}>• {learning}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.section>

            {/* AI Agents Laboratory */}
            <motion.section
              id="agents-lab"
              {...sectionAnimation(4)}
              className="mb-12"
            >
              <SectionHeader title="AI Agents Laboratory" />
              <Card className={`p-6 border-l-4 ${themeColors.border.time}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${themeColors.text.time}`}>{agentData.pillar}</h3>
                    <p className="text-sm text-gray-500">{agentData.status}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300">
                    Daily Practice
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed italic">
                  &quot;{agentData.thesis}&quot;
                </p>

                {/* Experiments */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {agentData.experiments.map((experiment, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{experiment.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          experiment.status === 'Active - Daily Use'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {experiment.status}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{experiment.description}</p>
                      {experiment.validated && (
                        <div className="flex flex-wrap gap-1">
                          {experiment.validated.map((item, i) => (
                            <span key={i} className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">
                              ✓ {item}
                            </span>
                          ))}
                        </div>
                      )}
                      {experiment.exploring && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {experiment.exploring.map((item, i) => (
                            <span key={i} className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-0.5 rounded">
                              → {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Capabilities */}
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">Agent Capabilities Building:</p>
                  <div className="flex flex-wrap gap-2">
                    {agentData.capabilities.map((cap, i) => (
                      <span key={i} className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border border-pink-200 dark:border-pink-700">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learnings */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm font-semibold mb-2">Key Learnings:</p>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                    {agentData.learnings.map((learning, i) => (
                      <li key={i}>• {learning}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.section>

            {/* Context Engineering */}
            <motion.section
              id="context-engineering"
              {...sectionAnimation(5)}
              className="mb-12"
            >
              <SectionHeader title="Context Engineering" />
              <Card className={`p-6 border-l-4 ${themeColors.border.wealth}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${themeColors.text.wealth}`}>The Meta-Skill</h3>
                    <p className="text-sm text-gray-500">Architecting what AI knows before it reasons</p>
                  </div>
                  <Link
                    href="/ai-journey/how-to-learn/overview"
                    className={`text-xs px-3 py-1.5 rounded ${themeColors.background.wealth} text-white hover:opacity-90 transition-opacity`}
                  >
                    Deep Dive →
                  </Link>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                  Context Engineering is not &quot;prompt engineering&quot; - it&apos;s the broader discipline of architecting the informational environment where AI understanding emerges. This makes both Voice UI and Agent workflows effective.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">For Voice</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Context shapes how voice agents understand intent and maintain conversation flow
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">For Agents</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Context determines what agents know, how they reason, and when they hand off
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">For Systems</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Context engineering creates reliable, predictable AI behavior at scale
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>My Approach:</strong> Three-Hat Framework (Systems Architect / Product Manager / Implementation) for rapid context switching - validated across 3 client projects.
                    <Link href="/ai-journey/how-to-learn/overview" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      Learn more →
                    </Link>
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Sustainability - Keeping Warm */}
            <motion.section
              id="sustainability"
              {...sectionAnimation(6)}
              className="mb-12"
            >
              <SectionHeader title="Sustainability (Keeping Warm)" />
              <Card className="p-6 border-l-4 border-green-500 opacity-80">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">{sustainabilityData.pillar}</h3>
                    <p className="text-sm text-gray-500">{sustainabilityData.tagline}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    {sustainabilityData.status}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 text-sm">
                  {sustainabilityData.summary}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold mb-2 text-gray-500">Watching:</p>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                      {sustainabilityData.watchingAreas.map((area, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">👀</span> {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-gray-500">Key Insights (Still Valid):</p>
                    {sustainabilityData.keyInsights.map((insight, i) => (
                      <div key={i} className="mb-2">
                        <p className="text-sm font-medium">{insight.title}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{insight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic border-t border-gray-200 dark:border-gray-700 pt-3">
                  {sustainabilityData.futureExploration}
                </p>
              </Card>
            </motion.section>
          </div>

          {/* Where I&apos;m Building Expertise */}
          <div id="expertise" className="mb-12">
            <motion.section
              {...sectionAnimation(7)}
              className="mb-12"
            >
              <Card className="p-6 mb-8 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Three Focus Areas</h3>
                <p className="text-[var(--text-secondary)] mb-6 text-base leading-relaxed">
                  Building expertise where the future is heading: Voice interfaces, autonomous agents, and the context that makes them work.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.knowledge} ${themeColors.background.knowledge}`}>
                    <h4 className={`font-semibold ${themeColors.text.knowledge} mb-2 text-lg`}>1. Voice UI Mastery</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• ElevenLabs full platform exploration</li>
                      <li>• Voice synthesis and cloning</li>
                      <li>• Conversational AI agents</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Building up: Vibecoding voice-first prototypes
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.time} ${themeColors.background.time}`}>
                    <h4 className={`font-semibold ${themeColors.text.time} mb-2 text-lg`}>2. AI Agent Workflows</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• Claude Code daily practice</li>
                      <li>• Multi-agent orchestration patterns</li>
                      <li>• MCP tool integration</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Validated: Three-Hat Framework across 3 projects
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.wealth} ${themeColors.background.wealth}`}>
                    <h4 className={`font-semibold ${themeColors.text.wealth} mb-2 text-lg`}>3. Context Engineering</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• Information architecture for AI</li>
                      <li>• CLAUDE.md patterns</li>
                      <li>• Knowledge systems design</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Meta-skill: Makes Voice + Agents effective
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-4">My Competitive Advantage</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.knowledge}`}>🎙️</span>
                      <div>
                        <p className="font-medium text-sm">Voice-First AI</p>
                        <p className="text-xs text-[var(--text-secondary)]">Real-time synthesis with ElevenLabs full stack</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.time}`}>🤖</span>
                      <div>
                        <p className="font-medium text-sm">Agent Orchestration</p>
                        <p className="text-xs text-[var(--text-secondary)]">Claude Code mastery with multi-agent patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.wealth}`}>🧠</span>
                      <div>
                        <p className="font-medium text-sm">Context Engineering</p>
                        <p className="text-xs text-[var(--text-secondary)]">Architecting what AI knows before it reasons</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-4">What I&apos;m Exploring</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Current Questions</h4>
                      <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                        <li>• How do voice + agents combine for real workflows?</li>
                        <li>• What context patterns make agents reliable?</li>
                        <li>• Where does vibecoding create the most leverage?</li>
                        <li>• How do specialized agents hand off effectively?</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.section>
          </div>

          {/* Call to Action */}
          <motion.section
            {...sectionAnimation(8)}
            className="bg-gradient-to-r from-pink-50 to-teal-50 dark:from-pink-900/20 dark:to-teal-900/20 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Join the Laboratory</h2>
            <p className="mb-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Interested in Voice AI experiments? Building with agents? Exploring context engineering patterns?
              I&apos;m learning in public and happy to share what I&apos;m discovering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-pink-600 text-white hover:bg-teal-600 transition-colors duration-200 shadow-sm"
              >
                Collaborate
              </Link>
              <Link
                href="/ai-journey/how-to-learn/overview"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-teal-600 text-teal-600 bg-transparent hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200"
              >
                Explore AI Journey
              </Link>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Table of Contents - Mobile Floating Button */}
      <div className="lg:hidden">
        <TableOfContents headings={headings} />
      </div>
    </PageLayout>
  );
}
