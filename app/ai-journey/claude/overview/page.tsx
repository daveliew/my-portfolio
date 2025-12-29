'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function ClaudeMasteryPage() {
  const handsOnResources = [
    {
      title: 'Prompt Engineering',
      description: 'Master the art of crafting effective prompts for Claude, including advanced techniques and best practices.',
      skills: ['Prompt Structure', 'Few-shot Learning', 'Chain of Thought', 'Prompt Optimization'],
      href: '/ai-journey/techniques/prompt-engineering',
      level: 'Beginner to Intermediate',
      time: '2-3 hours'
    },
    {
      title: 'Capabilities Reference',
      description: 'Quick reference for Claude\'s key capabilities including Vision, Computer Use, Console, and Cookbook with links to official docs.',
      skills: ['Vision', 'Computer Use', 'Console', 'Cookbook Examples'],
      href: '/ai-journey/claude/capabilities',
      level: 'All Levels',
      time: '30 min'
    },
    {
      title: 'Claude Code',
      description: 'Agentic coding with Claude from your terminal and IDE - build features autonomously with 30+ hour operation.',
      skills: ['Autonomous Coding', 'IDE Integration', 'Multi-file Editing', 'Checkpoints & Rollback'],
      href: '/ai-journey/claude/code',
      level: 'Intermediate to Advanced',
      time: '3-4 hours'
    }
  ];

  const advancedFeatures = [
    {
      title: 'Tool Use & Function Calling',
      description: 'Implement Claude\'s tool use capabilities to extend functionality with external APIs and functions.',
      skills: ['Function Calling', 'API Integration', 'Tool Definition', 'Error Handling'],
      href: '/ai-journey/techniques/tool-use',
      level: 'Intermediate to Advanced',
      time: '4-5 hours'
    },
    {
      title: 'Context Engineering',
      description: 'Architect the informational environment where Claude\'s understanding emerges. CLAUDE.md files, Skills, Hooks, and Archetypes.',
      skills: ['CLAUDE.md', 'Skills', 'Hooks', 'Archetypes'],
      href: '/context-engineering',
      level: 'Beginner to Advanced',
      time: '2-4 hours'
    },
    {
      title: 'Model Context Protocol (MCP)',
      description: 'Build advanced applications using the Model Context Protocol for enhanced AI workflows.',
      skills: ['MCP Architecture', 'Context Management', 'Workflow Integration', 'Server Setup'],
      href: '/ai-journey/claude/mcp',
      level: 'Advanced',
      time: '4-6 hours'
    },
    {
      title: 'Retrieval Augmented Generation (RAG)',
      description: 'Implement RAG systems to enhance Claude\'s responses with external knowledge bases.',
      skills: ['Vector Databases', 'Embedding Models', 'Retrieval Systems', 'Context Integration'],
      href: '/ai-journey/techniques/rag',
      level: 'Intermediate to Advanced',
      time: '5-6 hours'
    },
    {
      title: 'Hooks (Deep Dive)',
      description: 'Event-based automation that encodes your judgment into executable code. Part of the Context Engineering stack.',
      skills: ['Hook Architecture', 'Context Injection', 'Workflow Automation', 'HITL Reduction'],
      href: '/context-engineering/hooks',
      level: 'Advanced',
      time: '2-3 hours'
    }
  ];

  return (
    <AIJourneySubpageLayout
      title="Claude Mastery"
      description="Comprehensive learning path for mastering Claude's capabilities and Anthropic's ecosystem"
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
        <SectionHeader title="Learning Approach" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This learning path provides structured, hands-on experience with Claude&apos;s advanced capabilities. 
            Each module combines theoretical understanding with practical implementation, ensuring you can 
            effectively leverage Claude&apos;s features in real-world applications.
          </p>
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Why Claude Mastery?</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">🛡️</span>
                <span>Enterprise-grade security and reliability</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">🧠</span>
                <span>Advanced reasoning and complex task handling</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">🔧</span>
                <span>Comprehensive tooling and integration capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">📊</span>
                <span>Up to 200K token context with intelligent caching</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">⚡</span>
                <span>Extended thinking for deep reasoning on complex problems</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">💻</span>
                <span>Claude Code for autonomous multi-hour coding tasks</span>
              </li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* 2025 Breakthroughs */}
      <motion.section
        {...sectionAnimation(0.5)}
        className="mb-12"
      >
        <SectionHeader title="Latest Breakthroughs (2025)" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-purple-200 dark:border-purple-800">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🚀</span>
              <div>
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Claude Sonnet 4.5</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">September 2025</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Best coding model: 77.2% SWE-bench (82% with parallel compute)</li>
              <li>• 30+ hour autonomous operation (vs 7 hours previously)</li>
              <li>• 61.4% OSWorld computer use accuracy</li>
              <li>• Enhanced parallel tool calling</li>
              <li>• Memory across conversations</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💻</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Claude Code</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025 - Now GA</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Agentic coding from terminal & IDE</li>
              <li>• VS Code, JetBrains, Xcode integration</li>
              <li>• Checkpoints & instant rollback</li>
              <li>• Multi-file autonomous editing</li>
              <li>• Extended thinking integration</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-teal-200 dark:border-teal-800">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💭</span>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">Extended Thinking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Claude 3.7+</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Toggle-able deep reasoning mode</li>
              <li>• Visible thinking process</li>
              <li>• Thinking budget control</li>
              <li>• Tool use during reasoning</li>
              <li>• Hybrid instant + deep modes</li>
            </ul>
          </Card>

          <Card className="p-6 border-2 border-green-200 dark:border-green-800">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡</span>
              <div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">Prompt Caching</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">GA December 2024</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Up to 90% cost reduction</li>
              <li>• Up to 85% latency reduction</li>
              <li>• Automatic longest prefix reuse</li>
              <li>• Perfect for RAG & large contexts</li>
              <li>• Cache reads don&apos;t count toward ITPM</li>
            </ul>
          </Card>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎯 Composition is Key</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            The real power emerges when combining Claude&apos;s capabilities together:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Claude Code + MCP servers</strong> = Autonomous full-stack development with real data access</li>
            <li><strong>Extended Thinking + Tool Use</strong> = Deep research with verified factual grounding</li>
            <li><strong>Prompt Caching + RAG</strong> = Cost-effective knowledge systems with instant retrieval</li>
            <li><strong>Memory + Multi-turn</strong> = Persistent intelligent agents that remember context</li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 dark:from-green-900/20 dark:via-teal-900/20 dark:to-blue-900/20 rounded-lg border-2 border-teal-300 dark:border-teal-700">
          <div className="flex items-start">
            <span className="text-4xl mr-4">🔮</span>
            <div className="flex-1">
              <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-2">What&apos;s Coming in 2026?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Based on Anthropic&apos;s research trajectory and the Early Experience learning paradigm, we can make
                informed predictions about Claude&apos;s capabilities next year. From 90%+ SWE-bench performance to
                multi-agent coordination, see what the data suggests.
              </p>
              <Link
                href="/ai-journey/claude/2026-predictions"
                className="inline-block px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors text-sm font-medium"
              >
                Read 2026 Predictions →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hands-on Resources */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Hands-on Resources" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {handsOnResources.map((resource) => (
            <Card key={resource.title} className="overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resource.skills.map(skill => (
                      <span key={skill} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Level: {resource.level}</span>
                  <span>Time: {resource.time}</span>
                </div>
                
                <Link 
                  href={resource.href} 
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  Start Learning
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Advanced Features */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Advanced Features" />
        <div className="grid md:grid-cols-2 gap-6">
          {advancedFeatures.map((feature) => (
            <Card key={feature.title} className="overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.skills.map(skill => (
                      <span key={skill} className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Level: {feature.level}</span>
                  <span>Time: {feature.time}</span>
                </div>
                
                <Link 
                  href={feature.href} 
                  className="inline-block w-full text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
                >
                  Start Learning
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Learning Path Overview */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Recommended Learning Sequence" />
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Start with Hands-on Resources</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build foundational understanding with prompt engineering and console usage</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Progress to Advanced Features</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Explore specialized capabilities like tool use, vision, and RAG</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Apply in Real Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Combine learned skills in comprehensive applications</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 