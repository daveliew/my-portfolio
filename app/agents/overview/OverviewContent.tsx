'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

const agentDefinitions = [
  {
    term: 'AI Agent',
    definition: 'Software that can perceive its environment, make decisions, and take actions to achieve goals—with varying degrees of autonomy.',
    colorClass: 'text-[var(--deep-purple)]',
    borderClass: 'border-[var(--deep-purple)]'
  },
  {
    term: 'Orchestration',
    definition: 'Coordinating multiple agents or tools to accomplish complex tasks. The conductor, not the instruments.',
    colorClass: 'text-[var(--teal)]',
    borderClass: 'border-[var(--teal)]'
  },
  {
    term: 'Trust Engineering',
    definition: 'Calibrating how much autonomy to grant an agent based on task risk, reversibility, and verification capability.',
    colorClass: 'text-[var(--hot-pink)]',
    borderClass: 'border-[var(--hot-pink)]'
  },
  {
    term: 'MCP (Model Context Protocol)',
    definition: 'A standard for connecting AI models to external tools and data sources. Think USB for AI capabilities.',
    colorClass: 'text-[var(--gold)]',
    borderClass: 'border-[var(--gold)]'
  }
];

const whyNow = [
  {
    year: '2023',
    milestone: 'Chat interfaces become mainstream',
    implication: 'AI as conversation partner'
  },
  {
    year: '2024',
    milestone: 'Tool use and function calling mature',
    implication: 'AI can take actions, not just talk'
  },
  {
    year: '2025',
    milestone: 'Multi-agent orchestration emerges',
    implication: 'AI teams, not just individuals'
  },
  {
    year: '2026',
    milestone: 'Autonomous agent workflows',
    implication: 'AI colleagues with trust boundaries'
  }
];

export default function OverviewContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link href="/agents" className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block">
          ← Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-4">What Are AI Agents?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Understanding the shift from AI tools to AI colleagues
        </p>
      </motion.div>

      {/* Core insight */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--teal)]/10 border-l-4 border-[var(--deep-purple)]">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            The paradigm shift isn&apos;t about AI doing more work.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            It&apos;s about AI becoming a capable colleague who understands context,
            takes initiative within boundaries, and can be trusted with increasing autonomy.
          </p>
        </Card>
      </motion.section>

      {/* Definitions */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Concepts</h2>
        <div className="space-y-4">
          {agentDefinitions.map((item, i) => (
            <Card key={i} className={`p-4 border-l-4 ${item.borderClass}`}>
              <h3 className={`font-semibold ${item.colorClass} mb-1`}>{item.term}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.definition}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Why 2026 */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why 2026 Is the Year</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--teal)] to-[var(--deep-purple)]" />

          <div className="space-y-6">
            {whyNow.map((item, i) => (
              <div key={i} className="relative pl-12">
                {/* Timeline dot */}
                <div className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 ${
                  item.year === '2026'
                    ? 'bg-[var(--deep-purple)] border-[var(--deep-purple)]'
                    : 'bg-white dark:bg-gray-900 border-[var(--teal)]'
                }`} />

                <Card className={`p-4 ${item.year === '2026' ? 'ring-2 ring-[var(--deep-purple)]/30' : ''}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-bold ${item.year === '2026' ? 'text-[var(--deep-purple)]' : 'text-[var(--teal)]'}`}>
                      {item.year}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm font-medium">{item.milestone}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.implication}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The trust bottleneck */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">The Real Bottleneck</h2>
        <Card className="p-6">
          <div className="text-center mb-4">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              &quot;Models are no longer the limitation.&quot;
            </p>
            <p className="text-2xl font-bold text-[var(--hot-pink)] mt-2">
              YOU and I are.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">The old question</p>
              <p className="font-medium">&quot;Can AI do this?&quot;</p>
            </div>
            <div className="text-center p-4 bg-[var(--deep-purple)]/5 rounded-lg">
              <p className="text-sm text-[var(--deep-purple)] mb-1">The new question</p>
              <p className="font-medium">&quot;How much do I trust AI to do this?&quot;</p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Next steps */}
      <motion.section {...sectionAnimation(4)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ready to explore how I apply these concepts?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/personal-systems"
            className="px-6 py-2 bg-[var(--hot-pink)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            See My Personal Systems
          </Link>
          <Link
            href="/agents/trust-engineering"
            className="px-6 py-2 border border-[var(--deep-purple)] text-[var(--deep-purple)] rounded-md hover:bg-[var(--deep-purple)]/5 transition-colors"
          >
            Learn Trust Engineering
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
