'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function CapabilitiesContent() {
  const capabilities = [
    {
      title: 'Vision',
      emoji: '👁️',
      description: 'Claude can analyze images, screenshots, and documents. Useful for UI analysis, document extraction, and visual content understanding.',
      useCases: ['Document analysis', 'UI screenshot review', 'Chart/graph interpretation', 'Photo content description'],
      link: 'https://docs.anthropic.com/en/docs/build-with-claude/vision',
      color: 'blue',
    },
    {
      title: 'Computer Use',
      emoji: '🖥️',
      description: 'Beta feature enabling Claude to interact with computer interfaces. Enables desktop automation and UI testing scenarios.',
      useCases: ['Desktop automation', 'UI testing', 'Form filling', 'Application interaction'],
      link: 'https://docs.anthropic.com/en/docs/agents-and-tools/computer-use',
      color: 'purple',
      beta: true,
    },
    {
      title: 'Developer Console',
      emoji: '🔧',
      description: 'The Anthropic Console is a web-based playground for testing prompts, managing API keys, and monitoring usage.',
      useCases: ['Prompt testing', 'API key management', 'Usage monitoring', 'Model comparison'],
      link: 'https://console.anthropic.com/',
      color: 'teal',
    },
    {
      title: 'Cookbook',
      emoji: '📚',
      description: 'Practical code examples and patterns for working with Claude. Community-contributed recipes for common tasks.',
      useCases: ['Code examples', 'Integration patterns', 'Best practices', 'Quick start guides'],
      link: 'https://github.com/anthropics/anthropic-cookbook',
      color: 'amber',
    },
  ];

  return (
    <AIJourneySubpageLayout
      title="Capabilities Reference"
      description="Quick reference for Claude&apos;s key capabilities with links to official documentation"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
        { href: '/ai-journey/claude', label: 'Claude' },
      ]}
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude has powerful built-in capabilities that Anthropic documents thoroughly.
            Rather than duplicate their excellent documentation, this page serves as a quick
            reference with links to the official sources.
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>My focus:</strong> I spend most of my energy on{' '}
              <Link href="/context-engineering" className="text-blue-600 dark:text-blue-400 hover:underline">
                Context Engineering
              </Link>{' '}
              - architecting the environment where Claude can use these capabilities effectively.
              The capabilities are already impressive; the skill is in setting up the right context.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Capabilities Grid */}
      <motion.section
        {...sectionAnimation(0.5)}
        className="mb-12"
      >
        <SectionHeader title="Capabilities Overview" />
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <Card
              key={cap.title}
              className={`p-6 border-l-4 ${
                cap.color === 'blue' ? 'border-blue-500' :
                cap.color === 'purple' ? 'border-purple-500' :
                cap.color === 'teal' ? 'border-teal-500' :
                'border-amber-500'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{cap.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {cap.title}
                    </h3>
                    {cap.beta && (
                      <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                        Beta
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {cap.description}
              </p>

              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Useful for:</p>
                <div className="flex flex-wrap gap-1">
                  {cap.useCases.map((useCase, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cap.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-medium ${
                  cap.color === 'blue' ? 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' :
                  cap.color === 'purple' ? 'text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300' :
                  cap.color === 'teal' ? 'text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300' :
                  'text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300'
                }`}
              >
                View Documentation →
              </a>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* What I Focus On Instead */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Where I Spend My Energy" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The capabilities above are powerful, but they&apos;re already well-documented by Anthropic.
            What I find more interesting is the layer on top - <strong>Context Engineering</strong>:
            how do you set up the environment so Claude can use these capabilities effectively for your
            specific workflows?
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/context-engineering/claude-md" className="block">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                <h4 className="font-medium text-green-800 dark:text-green-300 mb-1">CLAUDE.md Files</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Project context and memory</p>
              </div>
            </Link>

            <Link href="/context-engineering/skills" className="block">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">Skills</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Reusable workflow modules</p>
              </div>
            </Link>

            <Link href="/context-engineering/hooks" className="block">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-1">Hooks</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Event-based automation</p>
              </div>
            </Link>

            <Link href="/context-engineering/archetypes" className="block">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                <h4 className="font-medium text-orange-800 dark:text-orange-300 mb-1">Archetypes</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Work mode bundles</p>
              </div>
            </Link>
          </div>
        </Card>
      </motion.section>

      {/* Navigation */}
      <motion.section
        {...sectionAnimation(1.5)}
      >
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/ai-journey/claude/code"
              className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              Claude Code →
            </Link>
            <Link
              href="/ai-journey/claude/mcp"
              className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors"
            >
              Model Context Protocol →
            </Link>
            <Link
              href="/context-engineering"
              className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            >
              Context Engineering →
            </Link>
          </div>
        </div>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}
