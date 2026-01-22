'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function SkillsContent() {
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
            <li className="text-gray-900 dark:text-gray-100">Skills</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div
          {...sectionAnimation(0)}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
              Intermediate
            </span>
            <span className="text-xs text-green-600 dark:text-green-400">
              📝 No Code Required
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Reusable prompt modules that encode your expertise into callable workflows. Still just text.
          </p>
        </motion.div>

        {/* What Are Skills */}
        <motion.section
          {...sectionAnimation(0.5)}
          className="mb-12"
        >
          <SectionHeader title="What Are Skills?" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Skills are markdown files that define reusable workflows Claude can invoke.
              They&apos;re like recipes or checklists that encode your expertise into a format Claude can follow.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Instead of explaining your code review process every time, you create a
              <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded mx-1">code-review</code> skill.
              Claude invokes it with <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">/code-review</code>
              and follows your exact process.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>The key insight:</strong> Skills let you encode &quot;how I do things&quot; once,
                then apply that expertise consistently across all future work.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* Anatomy of a Skill */}
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Anatomy of a Skill File" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Skills live in <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">~/.claude/skills/[skill-name]/SKILL.md</code>.
              Here&apos;s the structure:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
              <pre>{`---
name: quality-check
description: Automated quality audit for projects. Checks CLAUDE.md
  compliance, folder structure, git safety, and dev environment.
allowed-tools: Read, Grep, Glob, Bash
---

# Quality Check Skill

Run automated quality checks following my protocols.

## When to Activate
- Opening a project with CLAUDE.md
- User asks to "check quality" or "audit"
- Before major commits or deployments

## Checks Performed

### 1. CLAUDE.md Compliance
- **Line count**: Target <200 lines
- **Memory triggers**: Brief 1-liners, not paragraphs
- **@imports**: External references for detail

### 2. Folder Structure
- **3-5 files per folder**: Flag folders with >5 files
- **Archive READMEs**: Every archive folder needs context

## Output Format
[Define the expected output structure]

## Quick Commands
\`\`\`bash
# Count CLAUDE.md lines
wc -l CLAUDE.md
\`\`\`
`}</pre>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Frontmatter</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Name, description, and which tools the skill can use.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">When to Activate</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Trigger phrases or situations that invoke this skill.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Process/Checks</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  The actual steps Claude should follow.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Output Format</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  How results should be structured and presented.
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Example Skills */}
        <motion.section
          {...sectionAnimation(1.5)}
          className="mb-12"
        >
          <SectionHeader title="Example Skills" />
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🔍 code-review
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Systematic code review for quality, correctness, and maintainability.
                Covers logic, error handling, type safety, patterns, and performance.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Trigger: <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">/code-review</code> or
                &quot;review this code&quot;
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🚀 deployment-checklist
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Pre-deployment verification for production releases. Build verification,
                environment parity, performance baselines, rollback planning.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Trigger: <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">/deployment-checklist</code> or
                before deploying
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                📊 estimating-time
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Estimate time and cost for development tasks. Uses historical data
                and client-type pricing from your portfolio.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Trigger: <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">/estimating-time</code> or
                &quot;how long will this take&quot;
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                📋 tracking-scope
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Detect and flag scope creep in client projects. Compares requests
                against agreed baselines, suggests handling approaches.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Trigger: Phrases like &quot;can we also&quot;, &quot;quick change&quot;, &quot;while you&apos;re at it&quot;
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Creating Your Own */}
        <motion.section
          {...sectionAnimation(2)}
          className="mb-12"
        >
          <SectionHeader title="Creating Your Own Skill" />
          <Card className="p-6">
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">1.</span>
                <div>
                  <strong>Identify a repeating workflow</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    What do you explain to Claude over and over? That&apos;s a skill candidate.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">2.</span>
                <div>
                  <strong>Create the directory</strong>
                  <div className="bg-gray-900 rounded p-2 text-sm font-mono text-green-400 mt-1">
                    mkdir -p ~/.claude/skills/my-skill
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">3.</span>
                <div>
                  <strong>Write SKILL.md</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add frontmatter (name, description, tools), activation triggers,
                    steps to follow, and output format.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 dark:text-blue-400 mr-3">4.</span>
                <div>
                  <strong>Test it</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Invoke with <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">/my-skill</code>
                    and iterate on the process.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Claude Code 2.1 Tip:</strong> Skills now support hot-reload - edit your SKILL.md file
                and changes apply immediately without restarting your session.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* Skills vs CLAUDE.md */}
        <motion.section
          {...sectionAnimation(2.5)}
          className="mb-12"
        >
          <SectionHeader title="Skills vs CLAUDE.md" />
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Aspect</th>
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">CLAUDE.md</th>
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Skills</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr>
                    <td className="p-3 border border-gray-200 dark:border-gray-700 font-medium">Purpose</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Passive context</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Active workflows</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 dark:border-gray-700 font-medium">When loaded</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Always, at session start</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">On-demand, when invoked</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 dark:border-gray-700 font-medium">Scope</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Project-specific</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Cross-project reusable</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 dark:border-gray-700 font-medium">Content</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Context, conventions, memory</td>
                    <td className="p-3 border border-gray-200 dark:border-gray-700">Processes, checklists, workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <strong>Think of it this way:</strong> CLAUDE.md is &quot;what Claude should know&quot;.
              Skills are &quot;what Claude should do&quot;.
            </p>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.section
          {...sectionAnimation(3)}
        >
          <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/context-engineering/claude-md"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              ← CLAUDE.md
            </Link>
            <Link
              href="/context-engineering/hooks"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Next: Hooks →
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
