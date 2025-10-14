'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ClaudeCodePage() {
  return (
    <AIJourneySubpageLayout
      title="Claude Code"
      description="Agentic coding with Claude from your terminal and IDE - autonomous multi-hour development tasks"
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
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Install Extension →
                </a>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🧩</span>
                  <h5 className="font-semibold">JetBrains IDEs</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Integrated via AI chat in IntelliJ IDEA, PyCharm, WebStorm, and more.
                </p>
                <a
                  href="https://plugins.jetbrains.com/plugin/claude-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Install Plugin →
                </a>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🍎</span>
                  <h5 className="font-semibold">Xcode</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Connect your Claude account to Xcode 26+ for coding intelligence features.
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
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Example:</div>
              <code className="text-xs">
                claude checkpoint create &quot;before refactor&quot;<br/>
                claude checkpoint list<br/>
                claude checkpoint restore abc123
              </code>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">🔄 Multi-file Editing</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude Code can edit multiple files simultaneously, maintaining consistency
              across your entire codebase.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Capabilities:</div>
              <ul className="text-xs space-y-1">
                <li>• Cross-file refactoring</li>
                <li>• Dependency tracking</li>
                <li>• Import management</li>
                <li>• Type propagation</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">💭 Extended Thinking</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For complex tasks, Claude Code can engage extended thinking mode to reason
              deeply about architecture and implementation.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Use Cases:</div>
              <ul className="text-xs space-y-1">
                <li>• System design decisions</li>
                <li>• Performance optimization</li>
                <li>• Security reviews</li>
                <li>• Complex debugging</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">🛠️ Terminal Access</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude Code can execute terminal commands, run tests, install packages,
              and interact with version control.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Examples:</div>
              <ul className="text-xs space-y-1">
                <li>• npm install / yarn add</li>
                <li>• git commit / git push</li>
                <li>• pytest / jest runs</li>
                <li>• Build & deployment</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Composition Patterns */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Composition Patterns" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The real power of Claude Code emerges when composing it with other Anthropic capabilities and tools:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-4 py-2">
              <h5 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">Claude Code + MCP Servers</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Connect Claude Code to MCP servers for autonomous full-stack development with real data access:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• <strong>Filesystem MCP</strong>: Read/write project files directly</li>
                <li>• <strong>Supabase MCP</strong>: Query databases, update schemas, test queries</li>
                <li>• <strong>GitHub MCP</strong>: Create PRs, manage issues, review code</li>
                <li>• <strong>Custom MCPs</strong>: Your business logic, APIs, internal tools</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Claude Code + Prompt Caching</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                For large codebases, prompt caching dramatically reduces costs and latency:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Cache large codebase context (90% cost reduction)</li>
                <li>• Fast iterations on modifications (85% latency reduction)</li>
                <li>• Automatic cache management across sessions</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Claude Code + Extended Thinking + Tools</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                For complex architecture decisions, combine deep reasoning with real data verification:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Think deeply about system design</li>
                <li>• Use tools to verify assumptions (run tests, check APIs)</li>
                <li>• Iterate on implementation with full context</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">Multi-Agent Workflows</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Orchestrate multiple Claude Code instances for parallel development:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Frontend + Backend agents working simultaneously</li>
                <li>• Test generation while feature development continues</li>
                <li>• Documentation updates in parallel with code changes</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Best Practices" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">✓ Do&apos;s</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Start with clear, specific tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use checkpoints before major changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Review changes before committing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Set up quality gates (tests, linting)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Monitor progress and provide feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Leverage MCP servers for data access</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">✗ Don&apos;ts</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t leave autonomous tasks unmonitored</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t skip code review processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t deploy without testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t use on production without safeguards</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t ignore security implications</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Don&apos;t forget to commit checkpoint saves</span>
              </li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Real-World Examples */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Real-World Examples" />
        <Card className="p-6">
          <div className="space-y-6">
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Feature Implementation</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                &quot;Add user authentication with email/password and OAuth, including database migrations,
                API endpoints, and frontend components. Use our existing design system.&quot;
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ⏱️ Typical time: 2-4 hours autonomous | 📝 Output: 15-20 files modified/created
              </div>
            </div>

            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">Bug Fix & Debug</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                &quot;Users report that payment processing fails on mobile Safari. Investigate, reproduce,
                fix the issue, and add tests to prevent regression.&quot;
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ⏱️ Typical time: 1-3 hours | 📝 Output: Root cause analysis + fix + tests
              </div>
            </div>

            <div className="border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Refactoring</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                &quot;Refactor our API layer to use the new repository pattern. Update all controllers,
                add proper error handling, and maintain backward compatibility.&quot;
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ⏱️ Typical time: 4-8 hours | 📝 Output: 30-50 files refactored
              </div>
            </div>

            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Test Generation</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                &quot;Generate comprehensive unit and integration tests for our payment processing module.
                Aim for 90%+ coverage with edge cases and error scenarios.&quot;
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ⏱️ Typical time: 2-3 hours | 📝 Output: 10-15 test files
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Resources */}
      <motion.section
        {...sectionAnimation(6)}
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
                  href="https://docs.claude.com/en/docs/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors text-sm"
                >
                  Documentation →
                </a>
                <a
                  href="https://github.com/anthropics/claude-code-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors text-sm"
                >
                  Examples →
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Related Topics</h5>
              <div className="flex flex-wrap gap-2">
                <a href="/ai-journey/how-to-learn/claude-mastery/model-context-protocol" className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors">
                  MCP Integration →
                </a>
                <a href="/ai-journey/how-to-learn/claude-mastery/tool-use" className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                  Tool Use →
                </a>
                <a href="/ai-journey/how-to-learn/claude-mastery/prompt-engineering" className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  Prompt Engineering →
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}
