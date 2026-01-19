'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

const learningPhases = [
  {
    phase: 1,
    title: 'Foundations',
    duration: '2-4 weeks',
    bgClass: 'bg-[var(--teal)]',
    borderClass: 'border-[var(--teal)]',
    skills: [
      'Understanding what agents are (and aren&apos;t)',
      'Basic prompt engineering for agent behaviors',
      'Introduction to Claude and conversation design'
    ],
    outcome: 'You can have productive AI conversations and understand agent concepts'
  },
  {
    phase: 2,
    title: 'First Agent Projects',
    duration: '4-6 weeks',
    bgClass: 'bg-[var(--gold)]',
    borderClass: 'border-[var(--gold)]',
    skills: [
      'Setting up Claude Code as your orchestrator',
      'Installing and using your first MCPs',
      'Creating basic automation workflows'
    ],
    outcome: 'You have working agents handling real tasks in your daily workflow'
  },
  {
    phase: 3,
    title: 'Trust Calibration',
    duration: '6-8 weeks',
    bgClass: 'bg-[var(--hot-pink)]',
    borderClass: 'border-[var(--hot-pink)]',
    skills: [
      'Understanding trust levels (0-4)',
      'Designing safety boundaries',
      'When to grant autonomy vs require approval'
    ],
    outcome: 'You can confidently delegate tasks to agents with appropriate oversight'
  },
  {
    phase: 4,
    title: 'Multi-Agent Orchestration',
    duration: 'Ongoing',
    bgClass: 'bg-[var(--deep-purple)]',
    borderClass: 'border-[var(--deep-purple)]',
    skills: [
      'Coordinating multiple specialized agents',
      'Creating handoff protocols between agents',
      'Building agent teams for complex workflows'
    ],
    outcome: 'You orchestrate AI teams that handle sophisticated multi-step tasks'
  }
];

const firstProjects = [
  {
    name: 'Research Assistant',
    difficulty: 'Beginner',
    tools: ['Claude', 'Firecrawl'],
    description: 'An agent that researches topics, summarizes findings, and saves to your preferred format.'
  },
  {
    name: 'Documentation Helper',
    difficulty: 'Beginner',
    tools: ['Claude Code', 'Filesystem'],
    description: 'An agent that reads your code and generates clear documentation with examples.'
  },
  {
    name: 'Data Organizer',
    difficulty: 'Intermediate',
    tools: ['Claude', 'Airtable', 'Filesystem'],
    description: 'An agent that extracts, transforms, and organizes data from various sources.'
  },
  {
    name: 'Content Pipeline',
    difficulty: 'Intermediate',
    tools: ['Claude', 'Firecrawl', 'ElevenLabs'],
    description: 'An agent that researches, writes, and optionally converts content to audio.'
  }
];

export default function LearningPathContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link href="/agents" className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block">
          ← Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-4">Learning Path</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Level 2: For curious professionals ready to build their own agent systems
        </p>
      </motion.div>

      {/* Who this is for */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--teal)]/5 to-[var(--gold)]/5">
          <h2 className="text-lg font-semibold mb-4">Who This Is For</h2>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• <strong>Professionals</strong> who want AI literacy to level up their work</li>
            <li>• <strong>Curious learners</strong> who see AI as an opportunity, not a threat</li>
            <li>• <strong>Early adopters</strong> ready to invest time in learning agent systems</li>
            <li>• <strong>No coding required</strong> for early phases—technical depth optional</li>
          </ul>
        </Card>
      </motion.section>

      {/* Learning phases */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">The Learning Journey</h2>
        <div className="space-y-6">
          {learningPhases.map((phase) => (
            <Card key={phase.phase} className={`p-6 border-l-4 ${phase.borderClass}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full ${phase.bgClass} text-white flex items-center justify-center font-bold text-sm`}>
                    {phase.phase}
                  </span>
                  <h3 className="font-semibold text-lg">{phase.title}</h3>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {phase.duration}
                </span>
              </div>

              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                {phase.skills.map((skill, i) => (
                  <li key={i}>• <span dangerouslySetInnerHTML={{ __html: skill }} /></li>
                ))}
              </ul>

              <div className="text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
                <span className="font-medium">Outcome: </span>
                {phase.outcome}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* First projects */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Starter Projects</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Practical projects to build your first agents. Start with Beginner, progress to Intermediate.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {firstProjects.map((project, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{project.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  project.difficulty === 'Beginner'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {project.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tools.map((tool, j) => (
                  <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Prerequisites */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Before You Start</h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[var(--teal)] mb-3">Recommended</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Comfort with ChatGPT or Claude conversations</li>
                <li>• Basic understanding of how AI works (conceptually)</li>
                <li>• Willingness to experiment and iterate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--hot-pink)] mb-3">Not Required</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Programming experience (helpful but not essential)</li>
                <li>• Technical background</li>
                <li>• Previous AI/ML knowledge</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Next steps */}
      <motion.section {...sectionAnimation(4)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Want to see how these concepts look in practice?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/personal-systems"
            className="px-6 py-2 bg-[var(--hot-pink)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            See Real Examples
          </Link>
          <Link
            href="/ai-journey/claude/overview"
            className="px-6 py-2 border border-[var(--teal)] text-[var(--teal)] rounded-md hover:bg-[var(--teal)]/5 transition-colors"
          >
            Claude Mastery Course
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
