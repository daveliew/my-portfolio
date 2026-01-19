'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function OverviewContent() {

  return (
    <AIJourneySubpageLayout
      title="Learn AI Your Way"
      description="Start building with AI today—no coding required. Pick your path based on where you are."
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
      ]}
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Two Paths, Same Destination" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You don&apos;t need to understand how AI works to start using it effectively.
            I learned by building first and understanding later—and that&apos;s the approach I recommend.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Choose your starting point:</strong> Complete beginners start with Vibe Coding (30 minutes to your first project).
            Technical professionals can fast-track through the deeper material.
          </p>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Context Engineering</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              A key insight from my journey: the real skill isn&apos;t prompting—it&apos;s architecting what AI knows before it reasons.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="font-medium text-blue-700 dark:text-blue-400 mr-2">📋 System Prompts:</span>
                <span>CLAUDE.md files that give AI persistent memory and project context</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-pink-700 dark:text-pink-400 mr-2">🔧 Tools & MCP:</span>
                <span>External capabilities that extend what AI can do</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-amber-700 dark:text-amber-400 mr-2">💬 Conversation Design:</span>
                <span>Information flow that shapes how understanding emerges</span>
              </li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* Learning Paths */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Learning Paths" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Technical Deep Dive</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For those who want to understand the technical foundations of how LLMs work, 
              from the mathematical foundations to implementation details.
            </p>
            <Link
              href="/ai-journey/technical-leadership"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Start Technical Path
            </Link>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">Practical Implementation</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn how to handle, deploy, and scale language models in production environments 
              with real-world constraints and considerations.
            </p>
            <Link
              href="/ai-journey/techniques/llm-handling"
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
            >
              Start Implementation Path
            </Link>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">Claude Mastery</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Master Claude&apos;s advanced capabilities including prompt engineering, tool use, 
              computer use, vision, and RAG implementations.
            </p>
            <Link
              href="/ai-journey/claude/overview"
              className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              Start Claude Path
            </Link>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-[var(--deep-purple)] mb-3">AI Agents (2026 Focus)</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build autonomous agent systems with trust engineering, multi-agent orchestration,
              and knowledge patterns like RAG. The future of AI collaboration.
            </p>
            <Link
              href="/agents"
              className="inline-block px-4 py-2 bg-[var(--deep-purple)] hover:opacity-90 text-white rounded transition-opacity"
            >
              Explore Agents
            </Link>
          </Card>
        </div>
      </motion.section>

      {/* Learning Resources */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="General Resources" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beyond the structured learning paths, these resources provide valuable context and deeper understanding of AI concepts:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <a 
                href="https://stanford-cs324.github.io/winter2022/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Stanford CS324: Large Language Models
              </a>
              {" "}(freely available course materials)
            </li>
            <li>
              <a 
                href="https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Andrej Karpathy&apos;s Neural Networks: Zero to Hero
              </a>
              {" "}video series
            </li>
            <li>
              <a 
                href="https://www.coursera.org/specializations/deep-learning" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Andrew Ng&apos;s Deep Learning Specialization
              </a>
              {" "}on Coursera
            </li>
            <li>
              <a 
                href="https://huggingface.co/learn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Hugging Face Course
              </a>
              {" "}and{" "}
              <a 
                href="https://www.anthropic.com/learn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Anthropic Academy
              </a>
              {" "}for hands-on experience
            </li>
            <li>
              <a 
                href="https://fullstackdeeplearning.com/llm-bootcamp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Full Stack LLM Bootcamp
              </a>
              {" "}series from a16z
            </li>
          </ul>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 