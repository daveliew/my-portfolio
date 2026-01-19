'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

const mcpStack = [
  { category: 'Research', name: 'Firecrawl', useCase: 'Web scraping, search (with safety protocols)', colorClass: 'border-[var(--hot-pink)]' },
  { category: 'Research', name: 'Context7', useCase: 'Library docs for current implementation', colorClass: 'border-[var(--hot-pink)]' },
  { category: 'Data', name: 'Airtable', useCase: 'Structured data, CRM, tracking', colorClass: 'border-[var(--teal)]' },
  { category: 'Data', name: 'Filesystem', useCase: 'Local file operations', colorClass: 'border-[var(--teal)]' },
  { category: 'Comms', name: 'WhatsApp', useCase: 'Messaging integration (my own MCP!)', colorClass: 'border-[var(--gold)]' },
  { category: 'Media', name: 'ElevenLabs', useCase: 'Voice/audio for content creation', colorClass: 'border-[var(--deep-purple)]' },
  { category: 'Media', name: 'Puppeteer', useCase: 'Browser automation, screenshots', colorClass: 'border-[var(--deep-purple)]' },
  { category: 'Dev', name: 'IDE', useCase: 'VS Code diagnostics, Jupyter', colorClass: 'border-[var(--teal)]' },
];

const trustPatterns = [
  {
    pattern: 'READ FIRST, EDIT SECOND',
    description: 'Never work from assumptions about code. Always read actual files before suggesting changes.',
    level: 'Critical'
  },
  {
    pattern: 'Explicit File Staging',
    description: 'Never use git add . in parallel environments. Stage only the exact files you modified.',
    level: 'Critical'
  },
  {
    pattern: 'Scope Locks',
    description: 'Agents operate within defined file boundaries. Out-of-scope requests require explicit approval.',
    level: 'High'
  },
  {
    pattern: 'Firecrawl Safety Protocol',
    description: 'More than 10 URLs = script mode, not manual MCP calls. Prevents context overflow crashes.',
    level: 'Medium'
  }
];

export default function PersonalSystemsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div {...fadeInUp()} className="mb-12">
        <Link href="/agents" className="text-sm text-[var(--teal)] hover:underline mb-4 inline-block">
          ← Back to Agents
        </Link>
        <h1 className="text-4xl font-bold mb-4">Personal Systems</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Level 1: How I orchestrate AI agents for my own productivity
        </p>
      </motion.div>

      {/* Architecture overview */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">The Architecture</h2>
        <Card className="p-6 bg-gradient-to-r from-[var(--deep-purple)]/5 to-[var(--teal)]/5">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-[var(--deep-purple)]">Claude Code as Orchestrator</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">MCPs as Specialized Capabilities</p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            No CrewAI. No LangChain. No complex frameworks.<br/>
            Just Claude Code + MCPs + well-designed CLAUDE.md files.
          </p>
        </Card>
      </motion.section>

      {/* MCP Stack */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">My MCP Stack</h2>
        <div className="space-y-3">
          {mcpStack.map((mcp, i) => (
            <Card key={i} className={`p-4 border-l-4 ${mcp.colorClass}`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{mcp.category}</span>
                  <h3 className="font-semibold">{mcp.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-right max-w-xs">
                  {mcp.useCase}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          Key insight: Claude Code + MCPs = Your agent architecture.<br/>
          No separate framework needed—this IS the pattern.
        </p>
      </motion.section>

      {/* Trust Patterns */}
      <motion.section {...sectionAnimation(2)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Trust Patterns I Use Daily</h2>
        <div className="space-y-4">
          {trustPatterns.map((tp, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-[var(--hot-pink)]">{tp.pattern}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  tp.level === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                  tp.level === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                  'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {tp.level}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tp.description}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CLAUDE.md as orchestration */}
      <motion.section {...sectionAnimation(3)} className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">CLAUDE.md as Orchestration</h2>
        <Card className="p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            My CLAUDE.md files aren&apos;t just documentation—they&apos;re agent programming.
            They define:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• <strong>Memory triggers</strong> - Short phrases that activate specific behaviors</li>
            <li>• <strong>Safety protocols</strong> - What agents can and cannot do</li>
            <li>• <strong>Trust boundaries</strong> - When to ask permission vs proceed</li>
            <li>• <strong>File dependencies</strong> - Exact deliverables, not vague completion states</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
            <span className="text-gray-500"># Example memory trigger:</span><br/>
            <span className="text-[var(--hot-pink)]">&quot;READ FIRST, EDIT SECOND, ALWAYS&quot;</span><br/>
            <span className="text-gray-500"># This single line prevents hours of debugging</span>
          </div>
        </Card>
      </motion.section>

      {/* Next steps */}
      <motion.section {...sectionAnimation(4)} className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Want to build your own agent systems?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/agents/learning-path"
            className="px-6 py-2 bg-[var(--teal)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Start Learning Path
          </Link>
          <Link
            href="/agents/trust-engineering"
            className="px-6 py-2 border border-[var(--deep-purple)] text-[var(--deep-purple)] rounded-md hover:bg-[var(--deep-purple)]/5 transition-colors"
          >
            Explore Trust Engineering
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
