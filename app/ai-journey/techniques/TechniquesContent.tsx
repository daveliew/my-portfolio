'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

const techniques = [
  {
    title: 'Prompt Engineering',
    href: '/ai-journey/techniques/prompt-engineering',
    description: 'Master effective prompt crafting for Claude: structured formats, context provision, and techniques for consistent responses.',
    level: 'Foundation',
    icon: '✏️',
  },
  {
    title: 'Tool Use',
    href: '/ai-journey/techniques/tool-use',
    description: 'Function calling and API integration patterns. Connect Claude to external systems and data sources.',
    level: 'Intermediate',
    icon: '🔧',
  },
  {
    title: 'RAG (Retrieval Augmented Generation)',
    href: '/ai-journey/techniques/rag',
    description: 'Architecture for grounding LLM responses in your data. Vector databases, embeddings, and retrieval strategies.',
    level: 'Intermediate',
    icon: '🔍',
  },
  {
    title: 'SEO/GEO Audit Workflow',
    href: '/ai-journey/techniques/seo-geo-audit',
    description: 'AI-assisted auditing using Claude Code + Firecrawl + Context7. Continuous, research-backed SEO and AI discoverability optimization.',
    level: 'Intermediate',
    icon: '🔎',
  },
  {
    title: 'LLM Handling',
    href: '/ai-journey/techniques/llm-handling',
    description: 'Production deployment patterns: rate limiting, error handling, cost optimization, and scaling strategies.',
    level: 'Advanced',
    icon: '⚙️',
  },
  {
    title: 'Agent RAG',
    href: '/ai-journey/techniques/agent-rag',
    description: 'Combining autonomous agents with retrieval systems. Multi-step reasoning with dynamic knowledge access.',
    level: 'Advanced',
    icon: '🤖',
  },
];

const levelColors: Record<string, string> = {
  Foundation: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  Intermediate: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  Advanced: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
};

export default function TechniquesContent() {
  return (
    <AIJourneySubpageLayout
      title="Techniques Reference"
      description="Technical patterns for AI development. From prompt basics to production agent systems."
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
      ]}
    >
      {/* Learning Path Recommendation */}
      <motion.section {...sectionAnimation(0)} className="mb-12">
        <Card className="p-6 bg-gradient-to-r from-[var(--accent-secondary)]/10 to-[var(--accent-tertiary)]/10">
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Recommended Learning Path</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Start with <strong>Prompt Engineering</strong> to build your foundation, then progress to <strong>Tool Use</strong> and <strong>RAG</strong> for real-world integrations.
                <strong> LLM Handling</strong> and <strong>Agent RAG</strong> are for production deployments.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Techniques Grid */}
      <motion.section {...sectionAnimation(1)} className="mb-12">
        <SectionHeader title="All Techniques" />
        <div className="grid md:grid-cols-2 gap-6">
          {techniques.map((technique) => (
            <Link key={technique.href} href={technique.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{technique.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent-secondary)] transition-colors">
                        {technique.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors[technique.level]}`}>
                        {technique.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {technique.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Context Engineering Link */}
      <motion.section {...sectionAnimation(2)}>
        <Card className="p-6 border-l-4 border-[var(--accent-primary)]">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Looking for the bigger picture?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                These techniques are tools within a broader discipline. <strong>Context Engineering</strong> is about architecting
                the informational environment where AI understanding emerges—prompts are just one part.
              </p>
              <Link
                href="/context-engineering"
                className="inline-flex items-center text-sm font-medium text-[var(--accent-primary)] hover:underline"
              >
                Explore Context Engineering →
              </Link>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}
