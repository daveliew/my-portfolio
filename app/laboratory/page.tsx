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
    { id: 'three-hat', text: 'Three-Hat Framework', level: 3 },
    { id: 'adhd-ai', text: 'ADHD-AI Workflows', level: 3 },
    { id: 'sustainable-ai', text: 'AI Scaling Literacy', level: 3 },
    { id: 'sustainability-lab', text: 'Sustainability Laboratory', level: 3 },
    { id: 'attention', text: 'Where I\'m Directing Attention', level: 2 },
  ];

  return (
    <PageLayout
      title="Innovation Laboratory"
      description="Where the unstoppable forces of AI, sustainability, and robotics converge: Experiments in technology that creates value while preserving our future."
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
          {/* CHAPTER 1: THE CONVERGENCE */}
          <div id="convergence" className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 1: THE CONVERGENCE
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Three unstoppable trends reshaping everything
              </p>
            </div>

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

          {/* CHAPTER 2: ACTIVE EXPERIMENTS */}
          <div id="experiments" className="mb-12">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-8 border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 2: ACTIVE EXPERIMENTS
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-world testing of frameworks and hypotheses
              </p>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Real-world testing of the <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">Fitzgerald Principle</Link> and
              human-AI collaboration frameworks.
            </p>

            {/* Three-Hat Framework */}
            <motion.section
              id="three-hat"
              {...sectionAnimation(3)}
              className="mb-12"
            >
              <SectionHeader title="Three-Hat Framework Implementation" />
              <Card className="p-6 border-l-4 border-purple-500">
                <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                  Testing rapid context switching between Systems Architect, Product Manager, and Implementation roles
                  in real client projects. Measuring decision quality and delivery speed.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</p>
                    <p className={`font-semibold text-lg ${themeColors.text.time}`}>Active Testing</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Projects</p>
                    <p className="font-semibold text-lg text-[var(--text-primary)]">3 Client Engagements</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Key Metric</p>
                    <p className="font-semibold text-lg text-[var(--text-primary)]">Context switch &lt;15min</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Hypothesis:</strong> Rapid role-switching creates better decisions than staying in a single perspective.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    Validated across Foundation Labs projects: ROJ (healthcare), TSS (sustainability), Winborne (local business).
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* ADHD-AI Workflows - EXPANDED SECTION */}
            <motion.section
              id="adhd-ai"
              {...sectionAnimation(4)}
              className="mb-12"
            >
              <SectionHeader title="ADHD-Optimized AI Workflows" />
              <Card className="p-6 mb-6 border-l-4 border-purple-500">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  <strong>Strong Opinion:</strong> ADHD cognitive patterns + AI augmentation = competitive advantage in the information age.
                </p>

                {/* The Productive Tension */}
                <div className="mb-8 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">The Fitzgerald Tension</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Opposing Force 1: Neurodivergent Patterns</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• Hyperfocus cycles (2-4 hour deep work bursts)</li>
                        <li>• Rapid context switching (5-15 min transitions)</li>
                        <li>• Working memory limits (3-4 concurrent concepts)</li>
                        <li>• Dopamine-driven curiosity (explore &gt; exploit)</li>
                        <li>• Non-linear thinking (parallel pattern recognition)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Opposing Force 2: Traditional Productivity</h4>
                      <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                        <li>• Sustained linear focus (8-hour workdays)</li>
                        <li>• Single-task completion before switching</li>
                        <li>• Memory-based task management</li>
                        <li>• Planned schedules (resist exploration)</li>
                        <li>• Sequential reasoning (step-by-step logic)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-purple-600 dark:text-purple-400">Productive Tension:</strong> AI systems designed to work WITH neurodivergent patterns
                      rather than forcing neurotypical workflows. The &quot;bug&quot; becomes a feature when AI handles memory, context preservation, and task resumption.
                    </p>
                  </div>
                </div>

                {/* Core Hypothesis */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">The Hypothesis</h3>
                  <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 dark:bg-pink-900/20">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      ADHD brains + AI augmentation outperform neurotypical productivity systems in knowledge work.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Why? Because the future of work increasingly resembles ADHD cognitive patterns:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-pink-600 dark:text-pink-400 mr-2">✓</span>
                        <span><strong>Rapid context switching:</strong> Modern work requires jumping between projects, clients, technologies. ADHD brains do this naturally.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-600 dark:text-pink-400 mr-2">✓</span>
                        <span><strong>Pattern recognition over memorization:</strong> AI handles recall; humans provide connections. Non-linear thinking is an asset.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-600 dark:text-pink-400 mr-2">✓</span>
                        <span><strong>Hyperfocus as competitive advantage:</strong> When AI removes friction, ADHD hyperfocus produces 4-hour deep work sessions that rival 8-hour neurotypical days.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-600 dark:text-pink-400 mr-2">✓</span>
                        <span><strong>Curiosity-driven exploration:</strong> Dopamine-seeking becomes research superpower when AI can track, synthesize, and retrieve explorations.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Specific Patterns Being Explored */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Specific Patterns I&apos;m Exploring</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">1. Hyperfocus + AI Task Batching</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Pattern:</strong> Use AI to batch similar cognitive tasks into 2-4 hour blocks that align with natural hyperfocus cycles.
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Testing: Claude Code for code sessions, Claude Desktop for research synthesis, separate context windows for different energy states.
                      </p>
                    </div>

                    <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">2. Context Switching as Three-Hat Superpower</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Pattern:</strong> Rapid role switching (Architect → PM → Implementation) isn&apos;t a bug—it&apos;s the ADHD workflow made systematic.
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Testing: 15-minute sprints with AI handling context preservation between switches. Each role gets dedicated tools and prompts.
                      </p>
                    </div>

                    <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">3. Working Memory Limits + External Cognition</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Pattern:</strong> Offload ALL memory to AI systems. Use ADHD strength (pattern recognition) while AI handles ADHD weakness (recall).
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Testing: Living documentation (CLAUDE.md), protocol libraries, automated memory triggers. Never rely on biological memory for retrievable information.
                      </p>
                    </div>

                    <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">4. Dopamine-Driven Exploration + AI Research Acceleration</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Pattern:</strong> Follow curiosity rabbit holes but use AI to synthesize, track, and connect explorations into actionable insights.
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Testing: Web search + AI synthesis workflows, research session summaries, automated connection-finding across disparate topics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Living Experiment Status */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Living Experiment Status</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Exploration Phase</p>
                      <p className="font-semibold text-purple-600 dark:text-purple-400">2025 Q1-Q2</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Daily Testing</p>
                      <p className="font-semibold text-purple-600 dark:text-purple-400">Personal workflows + 3 client projects</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Next Milestone</p>
                      <p className="font-semibold text-purple-600 dark:text-purple-400">Publish findings 2025 Q3</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    <strong>Note:</strong> This is exploratory research grounded in daily practice. I&apos;m not claiming proven results—I&apos;m documenting
                    an active experiment in neurodivergent-AI collaboration that might transform how ADHD professionals work.
                  </p>
                </div>
              </Card>
            </motion.section>

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

          {/* CHAPTER 3: WHERE I'M DIRECTING ATTENTION */}
          <div id="attention" className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg p-6 mb-8 border border-orange-200 dark:border-orange-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 3: WHERE I&apos;M BUILDING EXPERTISE
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The capabilities I&apos;m developing to help businesses navigate AI convergence
              </p>
            </div>

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
                      <li>• Three-Hat Framework application</li>
                      <li>• ADHD-optimized workflows</li>
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
                        <p className="font-medium text-sm">Three-Hat Framework</p>
                        <p className="text-xs text-[var(--text-secondary)]">Rapid context switching: Systems → Product → Implementation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className={`mr-2 ${themeColors.text.time}`}>⚡</span>
                      <div>
                        <p className="font-medium text-sm">ADHD-Optimized Workflows</p>
                        <p className="text-xs text-[var(--text-secondary)]">Neurodivergent patterns as collaboration advantage</p>
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
