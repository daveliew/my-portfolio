'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function HooksContent() {
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
            <li className="text-gray-900 dark:text-gray-100">Hooks</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div
          {...sectionAnimation(0)}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
              Advanced
            </span>
            <span className="text-xs text-amber-600 dark:text-amber-400">
              ⚙️ Code Required
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hooks
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Event-based automation that encodes your judgment into executable code. Your expertise runs before Claude even responds.
          </p>
        </motion.div>

        {/* Core Insight */}
        <motion.section
          {...sectionAnimation(0.5)}
          className="mb-12"
        >
          <SectionHeader title="What Are Hooks?" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Most developers configure Claude session-by-session: &quot;This is a client project, watch for scope creep&quot;,
              &quot;Remember to run lint before commits&quot;. Every session starts from zero.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hooks are scripts that run automatically based on Claude Code events. Instead of repeating instructions,
              your past decisions apply themselves.
            </p>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">The Core Insight</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hooks let you <strong>encode your judgment once</strong> and have it apply automatically forever.
                You&apos;re building a context-aware operating system where your expertise runs as executable code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Without Hooks</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• You: &quot;This is a client project...&quot;</li>
                  <li>• You: &quot;Watch for scope creep...&quot;</li>
                  <li>• You: &quot;Run lint before commits...&quot;</li>
                  <li className="text-red-600 dark:text-red-400 font-medium pt-2">Every. Single. Session.</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">With Hooks</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Hook detects: client project</li>
                  <li>• Hook flags: &quot;can we also...&quot;</li>
                  <li>• Hook blocks: commit without lint</li>
                  <li className="text-green-600 dark:text-green-400 font-medium pt-2">Automatically. Every time.</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Hook Types */}
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Hook Types" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Claude Code supports four hook types, each triggered at different points in the workflow:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">🚀</span>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">SessionStart</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Runs when Claude Code starts in a directory. Perfect for detecting project type and injecting context.
                </p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">💬</span>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">UserPromptSubmit</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Runs before Claude processes your message. Ideal for scope creep detection and warning injection.
                </p>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">🔧</span>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300">PreToolUse</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Runs before Claude uses a specific tool. Quality gates before commits, dangerous operation checks.
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-3">✅</span>
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Stop</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Runs when Claude finishes a task. Completion checks, summaries, cleanup tasks.
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Code Examples */}
        <motion.section
          {...sectionAnimation(1.5)}
          className="mb-12"
        >
          <SectionHeader title="Example: Scope Creep Detection" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here&apos;s a practical example: a UserPromptSubmit hook that flags scope creep phrases
              before Claude processes your message.
            </p>

            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
              <pre>{`#!/usr/bin/env python3
import json, sys, re

input_data = json.load(sys.stdin)
prompt = input_data.get("prompt", "")

# Scope creep triggers
triggers = ["can we also", "while you're at it", "quick change"]
pattern = "|".join(triggers)

result = {"continue": True}
if re.search(pattern, prompt, re.IGNORECASE):
    result["systemMessage"] = "⚠️ SCOPE ALERT: Is this in scope?"

print(json.dumps(result))`}</pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Input</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Reads user prompt from stdin as JSON
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Output</h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Returns JSON with continue flag and optional systemMessage
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Configuration */}
        <motion.section
          {...sectionAnimation(2)}
          className="mb-12"
        >
          <SectionHeader title="Configuration" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hooks are configured in <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">~/.claude/settings.json</code>:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-gray-300 mb-4 overflow-x-auto">
              <pre>{`{
  "hooks": {
    "SessionStart": [{
      "matcher": "*",
      "hooks": [{
        "type": "command",
        "command": "python3 ~/.claude/hooks/session-start.py",
        "timeout": 5
      }]
    }],
    "UserPromptSubmit": [{
      "matcher": "*",
      "hooks": [{
        "type": "command",
        "command": "python3 ~/.claude/hooks/prompt-submit.py",
        "timeout": 3
      }]
    }]
  }
}`}</pre>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Key fields:</strong> <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded">matcher</code> controls which directories trigger the hook.
                <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded mx-1">timeout</code> prevents slow hooks from blocking Claude.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* Getting Started */}
        <motion.section
          {...sectionAnimation(2.5)}
          className="mb-12"
        >
          <SectionHeader title="Getting Started" />
          <Card className="p-6">
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-purple-600 dark:text-purple-400 mr-3">1.</span>
                <div>
                  <strong>Create the hooks directory</strong>
                  <div className="bg-gray-900 rounded p-2 text-sm font-mono text-green-400 mt-1">
                    mkdir -p ~/.claude/hooks
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 dark:text-purple-400 mr-3">2.</span>
                <div>
                  <strong>Create a hook script</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Python or Bash script that reads stdin (JSON) and prints JSON to stdout.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 dark:text-purple-400 mr-3">3.</span>
                <div>
                  <strong>Configure settings.json</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add your hook to the appropriate event type in ~/.claude/settings.json
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 dark:text-purple-400 mr-3">4.</span>
                <div>
                  <strong>Test it</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Start a new Claude Code session and trigger the hook to verify it works.
                  </p>
                </div>
              </li>
            </ol>
          </Card>
        </motion.section>

        {/* Best Practices */}
        <motion.section
          {...sectionAnimation(3)}
          className="mb-12"
        >
          <SectionHeader title="Best Practices" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">✓ Do&apos;s</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Keep hooks fast (&lt;5 seconds)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Always return valid JSON</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Test scripts standalone first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Start simple, add complexity gradually</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">✗ Don&apos;ts</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t make hooks that take &gt;10 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t store secrets in hook scripts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t block everything - be selective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Don&apos;t over-engineer - solve real problems</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 mt-6">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ Security Note</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hooks run with your user permissions. Review hook scripts before using them,
                just like you would review any executable code you add to your system.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* Connection to Bigger Picture */}
        <motion.section
          {...sectionAnimation(3.5)}
          className="mb-12"
        >
          <SectionHeader title="Hooks in Context" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hooks are powerful on their own, but they&apos;re part of a bigger system:
            </p>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
              <div className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                <div className="flex items-center flex-wrap gap-2">
                  <Link href="/context-engineering/claude-md" className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors">CLAUDE.md</Link>
                  <span>+</span>
                  <Link href="/context-engineering/skills" className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Skills</Link>
                  <span>+</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded font-bold">Hooks</span>
                  <span>=</span>
                  <Link href="/context-engineering/archetypes" className="px-2 py-1 bg-orange-100 dark:bg-orange-900 rounded hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors">Archetypes</Link>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              CLAUDE.md provides passive context. Skills encode reusable workflows.
              Hooks automate when those workflows activate. Archetypes bundle everything into coherent work modes.
            </p>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.section
          {...sectionAnimation(4)}
        >
          <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/context-engineering/skills"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              ← Skills
            </Link>
            <Link
              href="/context-engineering/archetypes"
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Next: Archetypes →
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
