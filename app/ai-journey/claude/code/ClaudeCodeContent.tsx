'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ClaudeCodeContent() {
  return (
    <AIJourneySubpageLayout
      title="Claude Code"
      description="Agentic coding with Claude from your terminal and IDE - autonomous multi-hour development tasks"
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
        <SectionHeader title="What is Claude Code?" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Claude Code is a command-line tool that brings Claude&apos;s agentic coding capabilities directly to your terminal and IDE.
            It can work autonomously for hours on complex, multi-step development tasks while you maintain oversight and control.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🚀 Key Capabilities</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• 30+ hour autonomous operation</li>
                <li>• Multi-file editing & refactoring</li>
                <li>• Checkpoints & instant rollback</li>
                <li>• Extended thinking integration</li>
                <li>• Real-time IDE integration</li>
                <li>• Tool use & terminal access</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💡 Perfect For</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Feature implementation</li>
                <li>• Bug fixing & debugging</li>
                <li>• Code refactoring</li>
                <li>• Test generation</li>
                <li>• Documentation writing</li>
                <li>• Dependency updates</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">⚡ Powered by Sonnet 4.5</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Claude Code uses Sonnet 4.5, the world&apos;s best coding model (77.2% SWE-bench, 82% with parallel compute).
              It can maintain context and focus over extended sessions while making steady, incremental progress.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Installation & Setup */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Installation & Setup" />
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Command Line Installation</h4>
            <div className="bg-gray-900 p-4 rounded-lg mb-4">
              <pre className="text-sm text-green-400 overflow-x-auto">
{`# Install via npm
npm install -g @anthropic-ai/claude-code

# Or via Homebrew
brew install anthropic/tap/claude-code

# Verify installation
claude --version`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Requires an Anthropic API key with access to Claude Sonnet 4.5. Set via <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">ANTHROPIC_API_KEY</code> environment variable.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">IDE Integrations</h4>
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">💻</span>
                  <h5 className="font-semibold">VS Code Extension</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Native VS Code integration with dedicated sidebar panel and inline diffs.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🧩</span>
                  <h5 className="font-semibold">JetBrains IDEs</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Integrated via AI chat in IntelliJ IDEA, PyCharm, WebStorm, and more.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Core Features */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Core Features" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-4">💾 Checkpoints & Rollback</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude Code automatically saves progress at key points. If something goes wrong,
              instantly rollback to any previous checkpoint.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">🔄 Multi-file Editing</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude Code can edit multiple files simultaneously, maintaining consistency
              across your entire codebase.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">💭 Extended Thinking</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For complex tasks, Claude Code can engage extended thinking mode to reason
              deeply about architecture and implementation.
            </p>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">🛠️ Terminal Access</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude Code can execute terminal commands, run tests, install packages,
              and interact with version control.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Resources */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Learn More" />
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Official Resources</h5>
              <div className="space-x-3">
                <a
                  href="https://www.anthropic.com/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
                >
                  Claude Code Site →
                </a>
                <a
                  href="https://docs.anthropic.com/en/docs/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors text-sm"
                >
                  Documentation →
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Related Topics</h5>
              <div className="flex flex-wrap gap-2">
                <a href="/ai-journey/claude/mcp" className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors">
                  MCP Integration →
                </a>
                <a href="/context-engineering/claude-md" className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                  CLAUDE.md Files →
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}
