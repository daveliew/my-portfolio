'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ContextEngineeringPage() {
  const learningLadder = [
    {
      level: 'Beginner',
      title: 'CLAUDE.md Files',
      description: 'Start here. Just a text file that gives Claude persistent memory about your project.',
      codeRequired: false,
      href: '/context-engineering/claude-md',
      color: 'green',
    },
    {
      level: 'Intermediate',
      title: 'Skills',
      description: 'Reusable prompt modules that encode your expertise into callable workflows.',
      codeRequired: false,
      href: '/context-engineering/skills',
      color: 'blue',
    },
    {
      level: 'Advanced',
      title: 'Hooks',
      description: 'Event-based automation that runs on session start, prompt submit, or tool use.',
      codeRequired: true,
      href: '/context-engineering/hooks',
      color: 'purple',
    },
    {
      level: 'Advanced',
      title: 'Archetypes',
      description: 'Work mode bundles that compose skills and hooks for different project types.',
      codeRequired: true,
      href: '/context-engineering/archetypes',
      color: 'orange',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">Context Engineering</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div
          {...sectionAnimation(0)}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Context Engineering
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            The real skill isn&apos;t prompting—it&apos;s architecting what AI knows before it reasons.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Most AI tutorials focus on crafting better prompts. But prompts are just one input to the AI&apos;s reasoning process.
              <strong className="text-blue-700 dark:text-blue-400"> Context Engineering</strong> is the discipline of architecting
              the entire informational environment where understanding emerges.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm italic">
              &ldquo;The prompt is the question. The context is the classroom.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Non-Tech Starter Note */}
        <motion.section
          {...sectionAnimation(0.5)}
          className="mb-12"
        >
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🌱</span>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">You Don&apos;t Need to Code to Start</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  I didn&apos;t start as a developer. The first two levels—CLAUDE.md files and Skills—are just text.
                  No programming required. You can get significant value before writing a single line of code.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  The progression is designed to scaffold upward. Start where you&apos;re comfortable.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Learning Ladder */}
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="The Learning Ladder" />
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Build your Context Engineering skills progressively. Each level builds on the previous:
          </p>

          <div className="space-y-4">
            {learningLadder.map((item, index) => (
              <Link key={item.title} href={item.href} className="block">
                <Card className={`p-6 border-l-4 hover:shadow-lg transition-all ${
                  item.color === 'green' ? 'border-green-500 hover:border-green-600' :
                  item.color === 'blue' ? 'border-blue-500 hover:border-blue-600' :
                  item.color === 'purple' ? 'border-purple-500 hover:border-purple-600' :
                  'border-orange-500 hover:border-orange-600'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          item.color === 'green' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                          item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                          item.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                          'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'
                        }`}>
                          {item.level}
                        </span>
                        <span className={`text-xs ${item.codeRequired ? 'text-amber-600 dark:text-amber-400' : 'text-green-600 dark:text-green-400'}`}>
                          {item.codeRequired ? '⚙️ Code Required' : '📝 No Code Required'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-gray-400 ml-4">→</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Three Pillars */}
        <motion.section
          {...sectionAnimation(1.5)}
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

        {/* Why It Matters */}
        <motion.section
          {...sectionAnimation(2)}
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

        {/* CTA */}
        <motion.section
          {...sectionAnimation(2.5)}
          className="mb-12"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Ready to Start?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Begin with CLAUDE.md files. No code required. Just a text file that transforms
              how Claude understands your projects.
            </p>
            <Link
              href="/context-engineering/claude-md"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Start with CLAUDE.md →
            </Link>
          </Card>
        </motion.section>

        {/* Related Links */}
        <motion.section
          {...sectionAnimation(3)}
        >
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="/ai-journey/claude/code" className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                Claude Code →
              </Link>
              <Link href="/ai-journey/claude/mcp" className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors">
                Model Context Protocol →
              </Link>
              <Link href="/ai-journey" className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                AI Journey →
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
