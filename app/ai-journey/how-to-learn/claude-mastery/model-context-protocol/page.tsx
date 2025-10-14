'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function MCPPage() {
  const popularServers = [
    {
      name: 'Filesystem',
      description: 'Read, write, and navigate local file systems',
      capabilities: ['File operations', 'Directory traversal', 'Search'],
      useCase: 'Local development, file management, documentation'
    },
    {
      name: 'Supabase',
      description: 'Query and manage PostgreSQL databases',
      capabilities: ['SQL queries', 'Schema inspection', 'Data operations'],
      useCase: 'Database development, data analysis, backend integration'
    },
    {
      name: 'GitHub',
      description: 'Interact with GitHub repositories and issues',
      capabilities: ['Repository access', 'Issue management', 'PR operations'],
      useCase: 'Code review, project management, CI/CD workflows'
    },
    {
      name: 'Brave Search',
      description: 'Web search with privacy-focused results',
      capabilities: ['Web search', 'Real-time info', 'Fact checking'],
      useCase: 'Research, fact verification, current events'
    },
    {
      name: 'Puppeteer',
      description: 'Browser automation and web scraping',
      capabilities: ['Page navigation', 'Screenshots', 'Form interaction'],
      useCase: 'Testing, automation, data extraction'
    },
    {
      name: 'Context7',
      description: 'Access up-to-date library documentation',
      capabilities: ['API docs', 'Code examples', 'Framework guides'],
      useCase: 'Development, learning, troubleshooting'
    }
  ];

  return (
    <AIJourneySubpageLayout
      title="Model Context Protocol (MCP)"
      description="Build advanced applications using the Model Context Protocol for enhanced AI workflows"
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Universal AI Integration Standard" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Model Context Protocol (MCP) is an open standard that enables seamless integration
            between AI applications and external data sources, providing a unified way to connect
            AI models with the tools and information they need.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🔌 Resources</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Data sources that AI can read from - databases, APIs, file systems
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🛠️ Tools</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Actions AI can perform - create files, run queries, send messages
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">💬 Prompts</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pre-built templates for common workflows and interactions
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
            <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">🚀 Why MCP Matters</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>Standardization</strong>: One protocol for all AI integrations</li>
              <li>• <strong>Security</strong>: User-controlled permissions and data access</li>
              <li>• <strong>Composability</strong>: Mix and match servers for powerful workflows</li>
              <li>• <strong>Open Source</strong>: Community-driven, vendor-neutral standard</li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* Popular MCP Servers */}
      <motion.section
        {...sectionAnimation(0.5)}
        className="mb-12"
      >
        <SectionHeader title="Popular MCP Servers" />
        <div className="grid md:grid-cols-2 gap-6">
          {popularServers.map((server) => (
            <Card key={server.name} className="p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{server.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{server.description}</p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {server.capabilities.map(cap => (
                    <span key={cap} className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Use Case:</strong> {server.useCase}
              </p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Composition Patterns - KEY SECTION */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="MCP Composition Patterns" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The real power of MCP emerges when you combine multiple servers together. Here are proven patterns
            that unlock exponential capabilities through composition.
          </p>

          <div className="space-y-6">
            {/* Pattern 1: Full-Stack Development */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                🏗️ Full-Stack Development Stack
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Filesystem + Supabase + GitHub + Context7</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Filesystem</strong>: Read/write project files, create components</li>
                <li>• <strong>Supabase</strong>: Query database, update schemas, test queries</li>
                <li>• <strong>GitHub</strong>: Create PRs, manage issues, review code</li>
                <li>• <strong>Context7</strong>: Access latest Next.js/React documentation</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Example workflow</strong>: Claude reads your database schema (Supabase),
                  references latest Next.js docs (Context7), creates components (Filesystem),
                  and opens a PR (GitHub) - all autonomously.
                </p>
              </div>
            </div>

            {/* Pattern 2: Research & Verification */}
            <div className="border-l-4 border-teal-500 pl-4 py-2">
              <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                🔍 Research & Fact Verification Stack
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Brave Search + Puppeteer + Filesystem</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Brave Search</strong>: Find sources and recent information</li>
                <li>• <strong>Puppeteer</strong>: Navigate sites, extract data, take screenshots</li>
                <li>• <strong>Filesystem</strong>: Save findings, create reports</li>
              </ul>
              <div className="mt-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Example workflow</strong>: Claude searches for sources (Brave),
                  visits and extracts specific data (Puppeteer), then compiles a verified
                  report with citations (Filesystem).
                </p>
              </div>
            </div>

            {/* Pattern 3: Data Pipeline */}
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                📊 Data Pipeline Stack
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Puppeteer + Supabase + Filesystem</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Puppeteer</strong>: Extract data from websites</li>
                <li>• <strong>Supabase</strong>: Store structured data in database</li>
                <li>• <strong>Filesystem</strong>: Export reports and analytics</li>
              </ul>
              <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Example workflow</strong>: Claude scrapes competitor pricing (Puppeteer),
                  stores in normalized tables (Supabase), and generates comparison reports (Filesystem).
                </p>
              </div>
            </div>

            {/* Pattern 4: Testing & QA */}
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                🧪 Testing & QA Stack
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Puppeteer + Filesystem + GitHub + Supabase</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Puppeteer</strong>: Run E2E tests, capture screenshots</li>
                <li>• <strong>Supabase</strong>: Verify database state after operations</li>
                <li>• <strong>Filesystem</strong>: Generate test reports, update snapshots</li>
                <li>• <strong>GitHub</strong>: Create issues for failures, comment on PRs</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <strong>Example workflow</strong>: Claude runs UI tests (Puppeteer), verifies
                  data integrity (Supabase), generates coverage reports (Filesystem), and files
                  issues for regressions (GitHub).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💡 Composition Pro Tip</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Start with one MCP server, master its capabilities, then gradually add complementary servers.
              The most powerful workflows emerge from 3-4 well-chosen servers working together, not from
              trying to connect everything at once.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Getting Started */}
      <motion.section
        {...sectionAnimation(1.5)}
        className="mb-12"
      >
        <SectionHeader title="Getting Started with MCP" />
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Installation</h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">1. Install Claude Desktop or Claude Code CLI</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
npm install -g claude-cli</pre>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">2. Add an MCP server (example: Supabase)</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
claude mcp add supabase -s project \
  -e SUPABASE_ACCESS_TOKEN=your_token \
  -- npx -y @supabase/mcp-server-supabase \
  --project-ref=your_project_ref --read-only</pre>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">3. Verify installation</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
claude mcp list</pre>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Security Best Practices</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Start with <code>--read-only</code> flags when possible</li>
              <li>• Use project-level scoping (<code>-s project</code>) for database servers</li>
              <li>• Never commit access tokens to version control</li>
              <li>• Regularly audit MCP server permissions with <code>claude mcp list</code></li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* Resources */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Resources & Community" />
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Official Resources</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    MCP Official Website →
                  </a>
                </li>
                <li>
                  <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    GitHub Organization →
                  </a>
                </li>
                <li>
                  <a href="https://docs.anthropic.com/en/docs/build-with-claude/mcp" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    Anthropic MCP Documentation →
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Popular Server Repositories</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    Official Server Collection →
                  </a>
                </li>
                <li>
                  <a href="https://github.com/supabase/mcp-server-supabase" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    Supabase MCP Server →
                  </a>
                </li>
                <li>
                  <a href="https://github.com/modelcontextprotocol/create-typescript-server" target="_blank" rel="noopener noreferrer"
                     className="text-teal-600 hover:text-teal-700 dark:text-teal-400">
                    Create Your Own Server →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 