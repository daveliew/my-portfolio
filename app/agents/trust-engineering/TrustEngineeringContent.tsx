'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

const trustLevels = [
  {
    level: 0,
    name: 'No Trust',
    description: 'Human does everything. AI is informational only.',
    example: 'AI explains a concept, human implements entirely',
    autonomy: 0,
    bgClass: 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
    barClass: 'bg-gray-400'
  },
  {
    level: 1,
    name: 'Draft Mode',
    description: 'AI suggests, human executes. Human reviews before any action.',
    example: 'AI writes code, human copies and runs it',
    autonomy: 25,
    bgClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    barClass: 'bg-blue-500'
  },
  {
    level: 2,
    name: 'Review Mode',
    description: 'AI executes, human approves. Pre-execution confirmation required.',
    example: 'AI stages changes, human approves commit',
    autonomy: 50,
    bgClass: 'bg-[var(--teal)]/10 text-[var(--teal)]',
    barClass: 'bg-[var(--teal)]'
  },
  {
    level: 3,
    name: 'Autonomous Mode',
    description: 'AI executes, human audits. Post-execution review.',
    example: 'AI commits changes, human reviews in PR',
    autonomy: 75,
    bgClass: 'bg-[var(--gold)]/10 text-[var(--gold)]',
    barClass: 'bg-[var(--gold)]'
  },
  {
    level: 4,
    name: 'Self-Improving',
    description: 'AI optimizes its own processes. Human sets boundaries.',
    example: 'AI updates its own CLAUDE.md patterns based on outcomes',
    autonomy: 90,
    bgClass: 'bg-[var(--deep-purple)]/10 text-[var(--deep-purple)]',
    barClass: 'bg-[var(--deep-purple)]'
  }
];

const trustFactors = [
  {
    factor: 'Reversibility',
    question: 'Can this action be undone easily?',
    high: 'Git commit (revert), draft edit (undo)',
    low: 'Database delete, sent email, production deploy'
  },
  {
    factor: 'Blast Radius',
    question: 'How much could go wrong?',
    high: 'Typo in docs, style change',
    low: 'Auth system change, financial calculation'
  },
  {
    factor: 'Verification Speed',
    question: 'How quickly can I verify the output?',
    high: '5-second visual check, automated test',
    low: 'Requires domain expert, multi-day testing'
  },
  {
    factor: 'Agent Track Record',
    question: 'How often has this agent succeeded at this task?',
    high: 'Repeated similar tasks with 95%+ accuracy',
    low: 'First time, new domain, complex edge cases'
  }
];

const calibrationExamples = [
  {
    task: 'Fix typo in README',
    trustLevel: 3,
    reasoning: 'Low risk, easily verified, fully reversible'
  },
  {
    task: 'Refactor authentication flow',
    trustLevel: 1,
    reasoning: 'High blast radius, security-critical, needs careful review'
  },
  {
    task: 'Generate test data',
    trustLevel: 2,
    reasoning: 'Medium risk, should verify data quality before use'
  },
  {
    task: 'Send email to client',
    trustLevel: 1,
    reasoning: 'Irreversible, reputation risk, human must review'
  },
  {
    task: 'Format code with Prettier',
    trustLevel: 3,
    reasoning: 'Deterministic, easily reversible, well-tested tool'
  },
  {
    task: 'Write database migration',
    trustLevel: 1,
    reasoning: 'Potentially destructive, requires domain knowledge review'
  }
];

export default function TrustEngineeringContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link href="/agents" className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block">
          ← Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-4">Trust Engineering</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The key differentiator: calibrating how much to trust your agents
        </p>
      </motion.div>

      {/* Core insight */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/10 to-[var(--hot-pink)]/10 border-l-4 border-[var(--deep-purple)]">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            The question isn&apos;t &quot;Can AI do this?&quot;
          </p>
          <p className="text-2xl font-bold text-[var(--deep-purple)]">
            It&apos;s &quot;How much should I trust AI to do this?&quot;
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Trust engineering is the practice of systematically deciding how much autonomy to grant agents
            based on task characteristics, not gut feeling.
          </p>
        </Card>
      </motion.section>

      {/* Trust levels */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Trust Levels Framework</h2>
        <div className="space-y-4">
          {trustLevels.map((level) => (
            <Card key={level.level} className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${level.bgClass}`}>
                  {level.level}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{level.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{level.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Autonomy</div>
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${level.barClass}`}
                      style={{ width: `${level.autonomy}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span className="font-medium">Example: </span>{level.example}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Trust factors */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How to Calibrate Trust</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Four factors to evaluate for any task:
        </p>
        <div className="space-y-4">
          {trustFactors.map((factor, i) => (
            <Card key={i} className="p-4">
              <h3 className="font-semibold text-[var(--teal)] mb-1">{factor.factor}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">{factor.question}</p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                  <span className="font-medium text-green-700 dark:text-green-400">Higher Trust: </span>
                  <span className="text-gray-600 dark:text-gray-400">{factor.high}</span>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  <span className="font-medium text-red-700 dark:text-red-400">Lower Trust: </span>
                  <span className="text-gray-600 dark:text-gray-400">{factor.low}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Calibration examples */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Calibration Examples</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          How I calibrate trust for common tasks:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 px-3">Task</th>
                <th className="text-center py-2 px-3">Trust Level</th>
                <th className="text-left py-2 px-3">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              {calibrationExamples.map((example, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-3 font-medium">{example.task}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      example.trustLevel === 1 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      example.trustLevel === 2 ? 'bg-[var(--teal)]/10 text-[var(--teal)]' :
                      'bg-[var(--gold)]/10 text-[var(--gold)]'
                    }`}>
                      {example.trustLevel}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-600 dark:text-gray-400">{example.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Key insight */}
      <motion.section {...sectionAnimation(4)} className="mb-12">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">The Fundamental Principle</h2>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Trust is not binary. It&apos;s a dial, not a switch.
            </p>
            <p className="text-lg font-medium text-[var(--hot-pink)]">
              Start with lower trust. Increase based on evidence.
            </p>
          </div>
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>The mistake:</strong> Giving agents too much autonomy too quickly, then losing trust entirely when they fail.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <strong>The solution:</strong> Progressive trust building. Let agents earn autonomy through repeated success.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section {...sectionAnimation(5)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Trust engineering is how I manage my own agent systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/personal-systems"
            className="px-6 py-2 bg-[var(--hot-pink)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            See My Systems
          </Link>
          <Link
            href="/agents/patterns"
            className="px-6 py-2 border border-[var(--gold)] text-[var(--gold)] rounded-md hover:bg-[var(--gold)]/5 transition-colors"
          >
            View All Patterns
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
