'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout, CrossPollinationStudio } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import { themeColors, themeUtilities } from '@/styles/theme';

// Import data
import sustainabilityData from '@/data/sustainability.json';

export default function LaboratoryPage() {
  return (
    <PageLayout
      title="Innovation Laboratory"
      description="Where the unstoppable forces of AI, sustainability, and robotics converge: Experiments in technology that creates value while preserving our future."
    >
      {/* Hero Section - The Three Unstoppable Trends */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">The Convergence</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed">
            Three unstoppable trends are reshaping everything: AI automation, sustainability imperatives, and robotic systems.
            The laboratory explores where these forces intersect to create exponential value.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This work is grounded in the <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">Fitzgerald Principle</Link>—holding
            opposing ideas (growth + sustainability, automation + humanity) in productive tension.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`${themeUtilities.cards.knowledge} p-6 text-center`}>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>AI Revolution</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Exponential capabilities in reasoning, automation, and human-AI collaboration systems
            </p>
          </div>

          <div className={`${themeUtilities.cards.time} p-6 text-center`}>
            <div className="text-4xl mb-4">🌱</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>Sustainability</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Climate urgency driving massive capital allocation toward green technology and circular systems
            </p>
          </div>

          <div className={`${themeUtilities.cards.wealth} p-6 text-center`}>
            <div className="text-4xl mb-4">🦾</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.wealth} mb-3`}>Robotics</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Physical automation reaching cost parity with human labor across manufacturing and services
            </p>
          </div>
        </div>
      </motion.section>

      {/* Overview - The Thesis */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="The Thesis" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
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

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Laboratory Focus</h3>
            <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
              We experiment with human-AI-robot collaboration systems that create value while
              preserving resources and expanding human potential.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${themeColors.background.knowledge} mr-3`}></div>
                <span className="text-base text-[var(--text-primary)]">Complementary intelligence systems</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${themeColors.background.time} mr-3`}></div>
                <span className="text-base text-[var(--text-primary)]">Resource optimization algorithms</span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${themeColors.background.wealth} mr-3`}></div>
                <span className="text-base text-[var(--text-primary)]">Scalable automation frameworks</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Cross-Pollination Studio */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Cross-Pollination Studio" />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Exploring the intersection points where AI, sustainability, and robotics amplify each other.
        </p>
        <CrossPollinationStudio />
      </motion.section>

      {/* Active Experiments */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Active Experiments" />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Real-world testing of the <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">Fitzgerald Principle</Link> and
          human-AI collaboration frameworks.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>
              Three-Hat Framework Implementation
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
              Testing rapid context switching between Systems Architect, Product Manager, and Implementation roles
              in real client projects. Measuring decision quality and delivery speed.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Current Status:</span>
                <span className={`font-medium ${themeColors.text.time}`}>Active</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Projects Testing:</span>
                <span className="font-medium text-[var(--text-primary)]">3</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Key Metric:</span>
                <span className="font-medium text-[var(--text-primary)]">Context switch time &lt;15min</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>
              ADHD-Optimized AI Workflows
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
              Designing AI agent systems that work WITH neurodivergent cognitive patterns rather than against them.
              Building productivity systems that leverage hyperfocus cycles.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Current Status:</span>
                <span className={`font-medium ${themeColors.text.wealth}`}>In Development</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Focus Areas:</span>
                <span className="font-medium text-[var(--text-primary)]">Energy peaks, Task switching</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-[var(--text-primary)]">Hypothesis:</span>
                <span className="font-medium text-[var(--text-primary)]">ADHD = AI-speed advantage</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>
              Sustainable AI + Robotics Integration
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
              Exploring energy-efficient AI training combined with robotic automation. Testing whether smaller,
              specialized models can match performance while using 90% less energy.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Energy Reduction:</span>
                <span className={`font-medium ${themeColors.text.time}`}>87% vs GPT-4</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Performance:</span>
                <span className="font-medium">Domain tasks: +15%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Current Focus:</span>
                <span className="font-medium">Manufacturing automation</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Sustainability Lab */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Sustainability Laboratory" />

        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-lg">{sustainabilityData.mission}</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {sustainabilityData.currentProjects.map((project, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className={`text-lg font-semibold ${themeColors.text.time}`}>{project.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === 'Research Phase'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                }`}>
                  {project.status}
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

      {/* Investment Thesis */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Investment Thesis" />

        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">The Opportunity Matrix</h3>
          <p className="text-[var(--text-secondary)] mb-6 text-base leading-relaxed">
            $50+ trillion in capital will be deployed over the next decade across these three unstoppable trends.
            The highest returns come from their intersection points.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg border-2 ${themeColors.border.knowledge} ${themeColors.background.knowledge}`}>
              <h4 className={`font-semibold ${themeColors.text.knowledge} mb-2 text-lg`}>AI Infrastructure</h4>
              <ul className="text-base space-y-1 text-[var(--text-primary)]">
                <li>• Edge computing for robotics</li>
                <li>• Efficient model architectures</li>
                <li>• Human-AI interface design</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg border-2 ${themeColors.border.time} ${themeColors.background.time}`}>
              <h4 className={`font-semibold ${themeColors.text.time} mb-2 text-lg`}>Green Technology</h4>
              <ul className="text-base space-y-1 text-[var(--text-primary)]">
                <li>• Circular economy platforms</li>
                <li>• Carbon capture automation</li>
                <li>• Renewable energy optimization</li>
              </ul>
            </div>

            <div className={`p-4 rounded-lg border-2 ${themeColors.border.wealth} ${themeColors.background.wealth}`}>
              <h4 className={`font-semibold ${themeColors.text.wealth} mb-2 text-lg`}>Robotic Systems</h4>
              <ul className="text-base space-y-1 text-[var(--text-primary)]">
                <li>• Manufacturing automation</li>
                <li>• Service robotics</li>
                <li>• Agricultural technology</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Investment Criteria</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className={`mr-2 ${themeColors.text.knowledge}`}>🎯</span>
                <div>
                  <p className="font-medium text-sm">Convergence Play</p>
                  <p className="text-xs text-[var(--text-secondary)]">Sits at intersection of 2+ trends</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className={`mr-2 ${themeColors.text.time}`}>⚡</span>
                <div>
                  <p className="font-medium text-sm">Exponential Scalability</p>
                  <p className="text-xs text-[var(--text-secondary)]">Software-like scaling with hardware impact</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className={`mr-2 ${themeColors.text.wealth}`}>🤝</span>
                <div>
                  <p className="font-medium text-sm">Human-Centric Design</p>
                  <p className="text-xs text-[var(--text-secondary)]">Enhances rather than replaces human capabilities</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Current Focus Areas</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-sm">Active Research</h4>
                <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                  <li>• Energy-efficient AI hardware</li>
                  <li>• Human-robot collaboration software</li>
                  <li>• Sustainable AI training methods</li>
                  <li>• Resource optimization algorithms</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        {...sectionAnimation(6)}
        className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Join the Laboratory</h2>
        <p className="mb-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Interested in collaborating on experiments at the intersection of AI, sustainability, and robotics?
          Looking for investment opportunities in the convergence space?
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
    </PageLayout>
  );
}
