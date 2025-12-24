'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function LearningOverviewPage() {

  return (
    <AIJourneySubpageLayout
      title="AI Learning Overview"
      description="Structured paths to develop practical AI skills without getting lost in the hype"
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
        <SectionHeader title="Learning Philosophy" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My approach to learning AI focuses on building practical capabilities that deliver immediate value while 
            developing a foundation for long-term growth. Rather than trying to master everything at once, I&apos;ve created 
            focused learning paths that build complementary skills.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Each path is designed to take you from theory to practical implementation, with an emphasis on building 
            real-world projects that demonstrate your capabilities.
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
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">Agent & RAG Systems</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build sophisticated AI agents and RAG systems that can interact with external 
              tools, databases, and APIs to solve complex real-world problems.
            </p>
            <Link
              href="/ai-journey/techniques/agent-rag"
              className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
            >
              Start Agent Path
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