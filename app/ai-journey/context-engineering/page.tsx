'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ContextEngineeringPage() {
  return (
    <AIJourneySubpageLayout
      title="Context Engineering"
      description="The real skill isn&apos;t prompting—it&apos;s architecting what AI knows before it reasons."
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
      ]}
    >
      {/* Core Insight */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
            Beyond Prompt Engineering
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Most AI tutorials focus on crafting better prompts. But prompts are just one input to the AI&apos;s reasoning process.
            <strong className="text-blue-700 dark:text-blue-400"> Context Engineering</strong> is the discipline of architecting
            the entire informational environment where understanding emerges.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            &ldquo;The prompt is the question. The context is the classroom.&rdquo;
          </p>
        </div>
      </motion.section>

      {/* Three Pillars */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="The Three Pillars" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">📋</span>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">System Prompts</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Persistent instructions that shape AI behavior across an entire session or project.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>• <strong>CLAUDE.md files</strong> - Project context and memory</li>
              <li>• <strong>Role definitions</strong> - Expert personas and constraints</li>
              <li>• <strong>Output formats</strong> - Structured response patterns</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🔧</span>
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">Tools & MCP</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              External capabilities that extend what AI can perceive and do in the world.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>• <strong>Model Context Protocol</strong> - Standardized tool integration</li>
              <li>• <strong>File operations</strong> - Read, write, search codebases</li>
              <li>• <strong>External APIs</strong> - Web, databases, services</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">💬</span>
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400">Conversation Design</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The flow of information that shapes how understanding develops over time.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>• <strong>Information sequence</strong> - What to reveal when</li>
              <li>• <strong>Feedback loops</strong> - Iterative refinement patterns</li>
              <li>• <strong>Context windows</strong> - Managing what AI remembers</li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Practical Example */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Context Engineering in Practice" />
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            The CLAUDE.md Pattern
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Every project I work on has a CLAUDE.md file at its root. This isn&apos;t just documentation—it&apos;s
            the AI&apos;s persistent memory and operating manual for that specific context.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
            <pre>{`# CLAUDE.md

## Project Context
This is a Next.js 15 portfolio site...

## Critical Patterns
- Always run \`npm run pre-deploy\` before commits
- Use Radix UI for complex components
- Data lives in /data/*.json, never hardcoded

## Memory Triggers
- "READ FIRST, EDIT SECOND, ALWAYS"
- "lint before commit - no unescaped entities"`}</pre>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            This context shapes every interaction. The AI knows the tech stack, the conventions,
            the pitfalls to avoid. <strong>The context does the heavy lifting so the prompts can stay simple.</strong>
          </p>
        </Card>
      </motion.section>

      {/* Why It Matters */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Why Context Engineering Matters" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Consistency Over Cleverness</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A well-engineered context produces reliable results with simple prompts.
              You don&apos;t need prompt wizardry when the AI already understands your world.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-teal-500">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Compounding Knowledge</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Context engineering creates reusable assets. A good CLAUDE.md file
              saves hours across hundreds of future interactions.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Trust Through Structure</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Clear constraints and patterns build trust. When the AI knows its boundaries,
              you can give it more autonomy with confidence.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-amber-500">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">From Tools to Colleagues</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Context engineering is the bridge from &ldquo;AI as tool&rdquo; to &ldquo;AI as capable colleague.&rdquo;
              It&apos;s how you onboard an AI the way you&apos;d onboard a team member.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        {...sectionAnimation(4)}
        className="flex justify-between mt-12"
      >
        <Link
          href="/ai-journey/why-ai"
          className="px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors"
        >
          ← Why Human-AI Collaboration
        </Link>
        <Link
          href="/ai-journey/claude/overview"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Claude Mastery →
        </Link>
      </motion.div>
    </AIJourneySubpageLayout>
  );
}
