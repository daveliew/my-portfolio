'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ClaudeMdPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/context-engineering" className="hover:text-blue-600">Context Engineering</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100">CLAUDE.md</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div
          {...sectionAnimation(0)}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
              Beginner
            </span>
            <span className="text-xs text-green-600 dark:text-green-400">
              📝 No Code Required
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            CLAUDE.md Files
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Give Claude persistent memory about your project. Just a text file—anyone can do this.
          </p>
        </motion.div>

        {/* What Is It */}
        <motion.section
          {...sectionAnimation(0.5)}
          className="mb-12"
        >
          <SectionHeader title="What Is a CLAUDE.md File?" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A CLAUDE.md file is a markdown document at the root of your project that Claude Code reads
              automatically at the start of every session. It&apos;s like a README, but specifically for Claude.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Think of it as <strong>onboarding documentation for your AI collaborator</strong>.
              Just like you&apos;d brief a new team member on project context, conventions, and pitfalls—CLAUDE.md
              does the same for Claude.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Why it matters:</strong> Without context, Claude starts every session from zero.
                With CLAUDE.md, Claude immediately knows your tech stack, conventions, and what to avoid.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* Structure */}
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Recommended Structure" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Keep it under 200 lines. Focus on memory triggers, not verbose explanations.
              Here&apos;s a template that works:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
              <pre>{`# CLAUDE.md

## Quick Reference
**Stack**: [Your tech stack]
**Critical**: [Most important rule]

## Project Context
[1-2 sentences about what this project does]

## Development Commands
- \`npm run dev\` - Start development
- \`npm run build\` - Build for production
- \`npm run lint\` - Check code quality

## Key Patterns
- [Pattern 1: e.g., "Data lives in /data/*.json"]
- [Pattern 2: e.g., "Never hardcode content in components"]
- [Pattern 3: e.g., "Use Radix UI for complex components"]

## Memory Triggers
- "READ FIRST, EDIT SECOND, ALWAYS"
- "lint before commit"
- [Your project-specific reminders]

## Pitfalls to Avoid
- [Common mistake 1]
- [Common mistake 2]`}</pre>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The key is <strong>brevity</strong>. Memory triggers should be one-liners that jog memory,
              not paragraphs that explain everything.
            </p>
          </Card>
        </motion.section>

        {/* Example */}
        <motion.section
          {...sectionAnimation(1.5)}
          className="mb-12"
        >
          <SectionHeader title="Real Example: This Portfolio Site" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here&apos;s a snippet from the CLAUDE.md file for this very website:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
              <pre>{`# CLAUDE.md

## Quick Reference
**Stack**: Next.js 15 + React 19 + TypeScript + Tailwind + Framer Motion
**Philosophy**: Fitzgerald Principle (opposing forces in productive tension)
**Path Alias**: \`@/*\` → root directory
**Critical**: Always run \`npm run pre-deploy\` before committing

## Voice Guidelines
- **Humble explorer**: "Still figuring it out", "happy to share"
- **Direct but warm**: Clear insights without aggressive claims
- **Lead with contrarian insights**: "Most people use AI to do more..."

## Memory Triggers
- "lint before commit - no unescaped entities"
- "Complex UI positioning = Radix first, custom never"
- "READ FIRST, EDIT SECOND, ALWAYS"`}</pre>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Notice how each section is scannable. Claude can quickly find what it needs without
              reading paragraphs of explanation.
            </p>
          </Card>
        </motion.section>

        {/* Levels */}
        <motion.section
          {...sectionAnimation(2)}
          className="mb-12"
        >
          <SectionHeader title="CLAUDE.md at Different Levels" />
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🌍 Global (~/.claude/CLAUDE.md)
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Universal standards that apply to ALL your projects. Git safety, documentation standards,
                your personal conventions.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Example: &quot;NEVER use git add .&quot;, &quot;Always check for existing files before creating new ones&quot;
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                📁 Directory (CODE/CLAUDE.md)
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Workspace-level context. If you organize projects in folders, this provides shared context.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Example: &quot;Foundation projects are long-term strategic initiatives&quot;
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                📦 Project (project/CLAUDE.md)
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Project-specific context. Tech stack, commands, patterns, pitfalls unique to this codebase.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Example: &quot;Stack: Next.js 15 + React 19&quot;, &quot;Run npm run pre-deploy before commits&quot;
              </p>
            </Card>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Claude reads all levels, with more specific files taking precedence. Your project CLAUDE.md
            inherits from global, but can override or extend as needed.
          </p>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          {...sectionAnimation(2.5)}
          className="mb-12"
        >
          <SectionHeader title="Best Practices" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">✓ Do&apos;s</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Keep under 200 lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Use memory triggers (1-liners)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Include critical commands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Document pitfalls to avoid</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Update when patterns change</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">✗ Don&apos;ts</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t write paragraphs of explanation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t duplicate README content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t include sensitive data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t let it grow beyond 300 lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t forget @imports for details</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.section>

        {/* Getting Started */}
        <motion.section
          {...sectionAnimation(3)}
          className="mb-12"
        >
          <SectionHeader title="Get Started in 5 Minutes" />
          <Card className="p-6">
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">1.</span>
                <div>
                  <strong>Create the file</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Create a file called <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">CLAUDE.md</code> at your project root.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">2.</span>
                <div>
                  <strong>Add the basics</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Start with: tech stack, main commands, and one memory trigger.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">3.</span>
                <div>
                  <strong>Start a Claude Code session</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Claude will automatically read your CLAUDE.md and apply the context.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">4.</span>
                <div>
                  <strong>Iterate</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    When you notice Claude making the same mistakes, add a memory trigger.
                    When patterns emerge, document them.
                  </p>
                </div>
              </li>
            </ol>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.section
          {...sectionAnimation(3.5)}
        >
          <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/context-engineering"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              ← Context Engineering
            </Link>
            <Link
              href="/context-engineering/skills"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Next: Skills →
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
