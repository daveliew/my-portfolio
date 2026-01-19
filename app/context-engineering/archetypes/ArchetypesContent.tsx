'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ArchetypesContent() {
  const archetypes = [
    {
      name: 'Strategist',
      tagline: 'Ship the right thing',
      color: 'blue',
      emoji: '🧭',
      signals: ['Ambiguous requirements', 'Greenfield projects', '"What should we build?"'],
      skills: ['Requirements analysis', 'Architecture decisions', 'Trade-off evaluation'],
    },
    {
      name: 'Engineer',
      tagline: 'Ship it right',
      color: 'purple',
      emoji: '⚙️',
      signals: ['Code review requests', 'Security concerns', 'Quality focus'],
      skills: ['Code review', 'Testing strategy', 'Performance optimization'],
    },
    {
      name: 'Operator',
      tagline: 'Ship it reliably',
      color: 'teal',
      emoji: '🚀',
      signals: ['Deploy requests', 'Timeline discussions', 'Launch planning'],
      skills: ['Deployment checklist', 'Scope tracking', 'Timeline management'],
    },
    {
      name: 'Advisor',
      tagline: 'Ship it valuably',
      color: 'amber',
      emoji: '💼',
      signals: ['Client communications', 'Proposals needed', 'Difficult conversations'],
      skills: ['Client communication', 'Scope negotiation', 'Value articulation'],
    },
  ];

  const projectDefaults = [
    { type: 'Client work', archetypes: 'Operator + Advisor', reason: 'Delivery and relationship focus' },
    { type: 'Foundation work', archetypes: 'Engineer + Operator', reason: 'Quality and delivery focus' },
    { type: 'Learning work', archetypes: 'Engineer', reason: 'Experimentation focus' },
  ];

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
            <li className="text-gray-900 dark:text-gray-100">Archetypes</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.div
          {...sectionAnimation(0)}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
              Advanced
            </span>
            <span className="text-xs text-amber-600 dark:text-amber-400">
              ⚙️ Code Required
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-400">
              🧪 Experimental
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Archetypes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Work mode bundles that compose CLAUDE.md, Skills, and Hooks into coherent operating modes for different types of work.
          </p>
        </motion.div>

        {/* Still Evolving Notice */}
        <motion.section
          {...sectionAnimation(0.3)}
          className="mb-12"
        >
          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-start">
              <span className="text-3xl mr-4">🧪</span>
              <div>
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">This Is Still Evolving</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  I&apos;m still figuring out the best patterns for work mode archetypes. The framework below is my
                  current working theory, but it changes as I use it. What I&apos;m sharing is a snapshot of an
                  ongoing experiment, not a finished system.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  If you&apos;re exploring similar patterns, I&apos;d love to hear what&apos;s working for you.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Are Archetypes */}
        <motion.section
          {...sectionAnimation(0.5)}
          className="mb-12"
        >
          <SectionHeader title="What Are Archetypes?" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Archetypes are <strong>work mode bundles</strong> that compose everything you&apos;ve learned so far:
              CLAUDE.md context, Skills workflows, and Hooks automation—into coherent operating modes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The idea: different types of work require different mindsets. Client delivery work needs
              scope awareness and clear communication. Foundation work needs quality focus. Learning work
              needs room for experimentation.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>The question archetypes answer:</strong> Given the type of work I&apos;m doing,
                what context should Claude have, what skills should be active, and what guardrails should be in place?
              </p>
            </div>
          </Card>
        </motion.section>

        {/* The Four Archetypes */}
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="The Four Archetypes" />
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            These map roughly to the project lifecycle: <strong>Discover → Build → Deliver → Relate</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {archetypes.map((archetype) => (
              <Card key={archetype.name} className={`p-6 border-l-4 ${
                archetype.color === 'blue' ? 'border-blue-500' :
                archetype.color === 'purple' ? 'border-purple-500' :
                archetype.color === 'teal' ? 'border-teal-500' :
                'border-amber-500'
              }`}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{archetype.emoji}</span>
                  <div>
                    <h4 className={`font-semibold ${
                      archetype.color === 'blue' ? 'text-blue-800 dark:text-blue-300' :
                      archetype.color === 'purple' ? 'text-purple-800 dark:text-purple-300' :
                      archetype.color === 'teal' ? 'text-teal-800 dark:text-teal-300' :
                      'text-amber-800 dark:text-amber-300'
                    }`}>{archetype.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">&quot;{archetype.tagline}&quot;</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Signals:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {archetype.signals.map((signal, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Typical skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {archetype.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Project Defaults */}
        <motion.section
          {...sectionAnimation(1.5)}
          className="mb-12"
        >
          <SectionHeader title="Project-Type Defaults" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In my setup, a SessionStart hook detects the project type from the path and suggests
              appropriate archetypes:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Project Type</th>
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Default Archetypes</th>
                    <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Why</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  {projectDefaults.map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-medium">{row.type}</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">{row.archetypes}</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              The hook suggests, but doesn&apos;t force. You can always override: &quot;switch to Engineer&quot;,
              &quot;activate Advisor&quot;, or just tell Claude what mode you need.
            </p>
          </Card>
        </motion.section>

        {/* How It Works */}
        <motion.section
          {...sectionAnimation(2)}
          className="mb-12"
        >
          <SectionHeader title="How It Works" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here&apos;s the flow when you open a project:
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-bold text-orange-600 dark:text-orange-400 mr-3">1.</span>
                <div>
                  <strong className="text-gray-700 dark:text-gray-300">SessionStart hook fires</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Detects project type from path (CLIENT_WORK/, FOUNDATION/, LEARNING/)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-orange-600 dark:text-orange-400 mr-3">2.</span>
                <div>
                  <strong className="text-gray-700 dark:text-gray-300">Suggests appropriate archetypes</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    &quot;This looks like Operator + Advisor territory. Activate?&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-orange-600 dark:text-orange-400 mr-3">3.</span>
                <div>
                  <strong className="text-gray-700 dark:text-gray-300">User confirms or adjusts</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    &quot;Yes&quot; / &quot;Switch to Engineer&quot; / Just start working
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-orange-600 dark:text-orange-400 mr-3">4.</span>
                <div>
                  <strong className="text-gray-700 dark:text-gray-300">Skills load, constraints activate</strong>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Relevant skills become active, appropriate guardrails engage
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* The Stack */}
        <motion.section
          {...sectionAnimation(2.5)}
          className="mb-12"
        >
          <SectionHeader title="The Full Stack" />
          <Card className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Archetypes sit at the top of the Context Engineering stack:
            </p>

            <div className="space-y-2">
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-orange-800 dark:text-orange-300">Archetypes</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Work modes</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Bundle everything below into coherent operating modes</p>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <div className="flex justify-between items-center">
                  <Link href="/context-engineering/hooks" className="font-medium text-purple-800 dark:text-purple-300 hover:underline">Hooks</Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Automation</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Detect context, trigger skills, enforce gates</p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-center">
                  <Link href="/context-engineering/skills" className="font-medium text-blue-800 dark:text-blue-300 hover:underline">Skills</Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Workflows</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Reusable prompt modules encoding expertise</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <Link href="/context-engineering/claude-md" className="font-medium text-green-800 dark:text-green-300 hover:underline">CLAUDE.md</Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Context</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Project-specific knowledge and memory</p>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* What I'm Still Figuring Out */}
        <motion.section
          {...sectionAnimation(3)}
          className="mb-12"
        >
          <SectionHeader title="What I&apos;m Still Figuring Out" />
          <Card className="p-6">
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span><strong>Multi-archetype blending:</strong> When work needs both Engineer and Advisor, how do skills compose?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span><strong>Archetype transitions:</strong> When should Claude suggest switching modes mid-session?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span><strong>Skill conflicts:</strong> What happens when two active skills give contradictory guidance?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span><strong>Right level of automation:</strong> Where&apos;s the line between helpful and over-engineered?</span>
              </li>
            </ul>
          </Card>
        </motion.section>

        {/* Navigation */}
        <motion.section
          {...sectionAnimation(3.5)}
        >
          <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/context-engineering/hooks"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              ← Hooks
            </Link>
            <Link
              href="/context-engineering"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Overview
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
