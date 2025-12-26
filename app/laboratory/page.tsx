'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout, CrossPollinationStudio } from '@/components/common';
import TableOfContents from '@/components/common/TableOfContents';
import { sectionAnimation } from '@/utils/animations';
import { themeColors, themeUtilities } from '@/styles/theme';
import type { TOCHeading } from '@/types/blog';

// Import data
import sustainabilityData from '@/data/sustainability.json';

export default function LaboratoryPage() {
  // Table of Contents structure
  const headings: TOCHeading[] = [
    { id: 'convergence', text: 'The Convergence', level: 2 },
    { id: 'thesis', text: 'The Thesis', level: 3 },
    { id: 'cross-pollination', text: 'Cross-Pollination Studio', level: 3 },
    { id: 'experiments', text: 'Active Experiments', level: 2 },
    { id: 'sustainable-ai', text: 'AI Scaling Literacy', level: 3 },
    { id: 'sustainability-lab', text: 'Sustainability Laboratory', level: 3 },
    { id: 'attention', text: 'Where I\'m Building Expertise', level: 2 },
  ];

  return (
    <PageLayout
      title="Innovation Laboratory"
      description="Most businesses don't know where AI is heading or how to use it effectively. This laboratory builds the literacy and frameworks to navigate that complexity."
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
          {/* The Convergence */}
          <div id="convergence" className="mb-12">
            {/* Hero Section - The Three Unstoppable Trends */}
            <motion.section
              {...sectionAnimation(0)}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed">
                  Three unstoppable trends are reshaping everything: AI automation, sustainability imperatives, and robotic systems.
                  Most businesses don&apos;t know where AI ends up or how to make it useful without fundamental AI literacy and computational thinking.
                </p>
                <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed font-semibold">
                  This laboratory tracks convergence trends and experiments with translating them into practical business implementations.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  This work is grounded in the <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">Fitzgerald Principle</Link>—holding
                  opposing ideas (growth + sustainability, automation + humanity) in productive tension.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className={`${themeUtilities.cards.knowledge} p-6 text-center border-l-4 ${themeColors.border.knowledge}`}>
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>AI Revolution</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    Exponential capabilities in reasoning, automation, and human-AI collaboration systems
                  </p>
                </div>

                <div className={`${themeUtilities.cards.time} p-6 text-center border-l-4 ${themeColors.border.time}`}>
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>Sustainability</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    Climate urgency driving massive capital allocation toward green technology and circular systems
                  </p>
                </div>

                <div className={`${themeUtilities.cards.wealth} p-6 text-center border-l-4 ${themeColors.border.wealth}`}>
                  <div className="text-4xl mb-4">🦾</div>
                  <h3 className={`text-xl font-semibold ${themeColors.text.wealth} mb-3`}>Robotics</h3>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    Physical automation reaching cost parity with human labor across manufacturing and services
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
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Convergence Creates Exponential Opportunity</h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                    The intersection of AI, sustainability, and robotics creates the largest investment and innovation
                    opportunity in human history. Each trend amplifies the others:
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.knowledge}`}>•</span>
                      <span className="text-[var(--text-primary)]">AI optimizes robotic systems for sustainable manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.time}`}>•</span>
                      <span className="text-[var(--text-primary)]">Sustainability constraints drive AI efficiency innovation</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.wealth}`}>•</span>
                      <span className="text-[var(--text-primary)]">Robotics enables circular economy at unprecedented scale</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Laboratory Focus</h3>
                  <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                    I track these convergence trends to help businesses develop AI literacy and navigate complexity through practical implementation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.knowledge} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">AI literacy & computational thinking</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.time} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">Convergence trend navigation</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${themeColors.background.wealth} mr-3`}></div>
                      <span className="text-base text-[var(--text-primary)]">Practical business implementation</span>
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
                Exploring the intersection points where AI, sustainability, and robotics amplify each other.
              </p>
              <CrossPollinationStudio />
            </motion.section>
          </div>

          {/* Active Experiments */}
          <div id="experiments" className="mb-12">
            {/* AI Scaling Literacy */}
            <motion.section
              id="sustainable-ai"
              {...sectionAnimation(5)}
              className="mb-12"
            >
              <SectionHeader title="AI Scaling Literacy" />
              <Card className="p-6 border-l-4 border-purple-500">
                <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                  Understanding AI scaling constraints (energy, chips, data) to help businesses make informed decisions about model selection,
                  workload optimization, and infrastructure trade-offs. Not building datacenters—guiding practical business choices.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Target</p>
                    <p className={`font-semibold text-lg ${themeColors.text.time}`}>87% energy reduction vs GPT-4</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Hypothesis</p>
                    <p className="font-semibold text-lg text-[var(--text-primary)]">Domain tasks: +15% performance</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Exploring</p>
                    <p className="font-semibold text-lg text-[var(--text-primary)]">Manufacturing automation</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Why This Matters:</strong> Businesses need to understand AI scaling constraints (not just capabilities) to make smart decisions.
                    Smaller specialized models may outperform larger ones for specific tasks while using 90% less energy. This knowledge helps guide practical model selection and cost optimization.
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Sustainability Laboratory */}
            <motion.section
              id="sustainability-lab"
              {...sectionAnimation(6)}
              className="mb-12"
            >
              <SectionHeader title="Sustainability Laboratory" />

              <div className="mb-8">
                <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-4">Mission</h3>
                  <p className="text-lg">{sustainabilityData.mission}</p>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {sustainabilityData.currentProjects.map((project, index) => (
                  <Card key={index} className="p-6 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-lg font-semibold ${themeColors.text.time}`}>{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.status === 'Research Phase'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                      }`}>
                        {project.status === 'Research Phase' ? 'Exploring 2025 Q1' : 'Hypothesizing 2025 Q1'}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>

                    <div className="border-t border-[var(--dark-grey-secondary)]/20 pt-3">
                      <p className="text-xs text-[var(--text-secondary)] mb-2">Convergence Opportunities:</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] px-2 py-1 rounded">AI</span>
                        <span className="text-xs bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] px-2 py-1 rounded">Sustainability</span>
                        {project.title.includes('Resource') && (
                          <span className="text-xs bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)] px-2 py-1 rounded">Robotics</span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {sustainabilityData.keyLearnings.map((learning, index) => (
                  <Card key={index} className="p-4">
                    <h4 className="font-semibold mb-2">{learning.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{learning.description}</p>
                  </Card>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Where I'm Building Expertise */}
          <div id="attention" className="mb-12">
            <motion.section
              {...sectionAnimation(7)}
              className="mb-12"
            >
              <Card className="p-6 mb-8 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Three Focus Areas</h3>
                <p className="text-[var(--text-secondary)] mb-6 text-base leading-relaxed">
                  Building expertise where businesses need guidance most: understanding AI trends, developing literacy, and implementing practical solutions.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.knowledge} ${themeColors.background.knowledge}`}>
                    <h4 className={`font-semibold ${themeColors.text.knowledge} mb-2 text-lg`}>1. AI Literacy & Computational Thinking</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• Developing mental models for AI capabilities</li>
                      <li>• Understanding trade-offs (cost, speed, quality)</li>
                      <li>• Bridging strategy and implementation</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Core specialization: Helping businesses think clearly about AI
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.time} ${themeColors.background.time}`}>
                    <h4 className={`font-semibold ${themeColors.text.time} mb-2 text-lg`}>2. Convergence Trend Navigation</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• AI scaling constraints (energy, chips, data)</li>
                      <li>• Robotics + AI integration patterns</li>
                      <li>• Understanding where the puck is going</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Positioning: Tracking trends to guide business decisions
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg border-2 ${themeColors.border.wealth} ${themeColors.background.wealth}`}>
                    <h4 className={`font-semibold ${themeColors.text.wealth} mb-2 text-lg`}>3. Practical Implementation</h4>
                    <ul className="text-sm space-y-2 text-[var(--text-primary)]">
                      <li>• Context Engineering implementation</li>
                      <li>• Voice-first AI applications</li>
                      <li>• Systems thinking + execution</li>
                    </ul>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                      Differentiation: Not just insights—actual delivery
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-4">My Competitive Advantage</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.knowledge}`}>🧠</span>
                      <div>
                        <p className="font-medium text-sm">Context Engineering</p>
                        <p className="text-xs text-[var(--text-secondary)]">Architecting what AI knows before it reasons</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.time}`}>⚡</span>
                      <div>
                        <p className="font-medium text-sm">Voice-First AI</p>
                        <p className="text-xs text-[var(--text-secondary)]">Real-time reasoning with voice synthesis</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.wealth}`}>🎯</span>
                      <div>
                        <p className="font-medium text-sm">Navigator/Interpreter Role</p>
                        <p className="text-xs text-[var(--text-secondary)]">Translate trends into actionable business insights</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold mb-4">What I Help Businesses With</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Typical Challenges</h4>
                      <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                        <li>• &quot;AI costs are exploding—how do we optimize?&quot;</li>
                        <li>• &quot;Where is AI heading? What should we prepare for?&quot;</li>
                        <li>• &quot;How do we make AI useful without advanced technical expertise?&quot;</li>
                        <li>• &quot;Need to understand trade-offs: model selection, infrastructure, costs&quot;</li>
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
            className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Join the Laboratory</h2>
            <p className="mb-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Interested in collaborating on experiments at the intersection of AI, sustainability, and robotics?
              Exploring similar questions about neurodivergent-AI collaboration?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-pink-600 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm"
              >
                Collaborate
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-pink-600 text-pink-600 bg-transparent hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors duration-200"
              >
                About Dave
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
