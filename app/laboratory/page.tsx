'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

// Import data
import aiJourneyData from '@/data/ai-journey.json';

export default function LaboratoryPage() {
  return (
    <PageLayout
      title="The Laboratory"
      description="Current experiments in human-AI collaboration, proof points from real implementations, and insights from the frontier of complementary intelligence systems."
    >
      {/* Current Experiments */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Current Experiments" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Three-Hat Framework Implementation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Testing rapid context switching between Systems Architect, Product Manager, and Implementation roles 
              in real client projects. Measuring decision quality and delivery speed.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Status:</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Projects Testing:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Key Metric:</span>
                <span className="font-medium">Context switch time &lt;15min</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              ADHD-Optimized AI Workflows
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Designing AI agent systems that work WITH neurodivergent cognitive patterns rather than against them. 
              Building productivity systems that leverage hyperfocus cycles.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Status:</span>
                <span className="font-medium text-orange-600">In Development</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Focus Areas:</span>
                <span className="font-medium">Energy peaks, Task switching</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hypothesis:</span>
                <span className="font-medium">ADHD = AI-speed advantage</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Case Studies - Proof Points */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Case Studies - Collaboration Models in Action" />
        <div className="space-y-8">
          {aiJourneyData.journey.casestudies.map((study, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  {study.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {study.date}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {study.description}
              </p>

              {/* Three-Hat Framework Application */}
              {study.threeHatFramework && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                    Three-Hat Framework Applied:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-blue-700 dark:text-blue-400">🏗️ Systems Architect:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{study.threeHatFramework.systemsArchitect}</span>
                    </div>
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-400">📊 Product Manager:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{study.threeHatFramework.productManager}</span>
                    </div>
                    <div>
                      <span className="font-medium text-purple-700 dark:text-purple-400">💻 Implementation:</span>
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{study.threeHatFramework.implementation}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Outcomes */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Outcomes:</h4>
                <ul className="space-y-1">
                  {study.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start text-sm">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Learning Insights */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Learning Insights" />
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
              💡 The 69→10 Tools Lesson
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Discovered that without architectural oversight, AI tool complexity explodes exponentially. 
              What started as 3 core tools became 69 disconnected scripts before implementing the 
              Pareto principle for tool consolidation.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Insight:</strong> The Systems Architect hat must be worn FIRST, not last.
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">
              ⚡ The 2-Minute Rule Discovery
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              If users can&apos;t achieve first success within 2 minutes, the architecture has failed. 
              This became the north star metric for all human-AI interface design.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Insight:</strong> Time-to-first-success trumps feature completeness.
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
              🎯 The Mortality Advantage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Human mortality creates urgency and meaning that immortal AI systems cannot replicate. 
              This &ldquo;bug&rdquo; in human design is actually our greatest feature for creative decision-making.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Insight:</strong> Our finite nature is a competitive advantage, not a limitation.
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Methodologies Developed */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Methodologies Developed" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Triangle Foundation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Personal stability framework balancing Self-Discovery, Family Generation, and Wealth Generation. 
              Each point strengthens the others.
            </p>
            <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              View full framework →
            </Link>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Three-Hat Framework</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Professional implementation framework for seamless context switching between Systems Architect, 
              Product Manager, and Implementation roles.
            </p>
            <Link href="/ai-journey/how-to-learn/technical-leadership" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Learn the framework →
            </Link>
          </Card>
        </div>
      </motion.section>

      {/* Join the Experiment */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Join the Experiment?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            These aren&apos;t just case studies—they&apos;re active experiments in building the future of human-AI collaboration. 
            Every project teaches us something new about complementary intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition duration-300"
            >
              Join the Lab
            </Link>
            <Link 
              href="/philosophy" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-sm transition duration-300"
            >
              See the Philosophy
            </Link>
          </div>
        </Card>
      </motion.section>
    </PageLayout>
  );
}