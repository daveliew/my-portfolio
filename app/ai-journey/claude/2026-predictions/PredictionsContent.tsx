'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function PredictionsContent() {
  return (
    <AIJourneySubpageLayout
      title="Claude 2026: What to Expect"
      description="Research-backed predictions for Claude's capabilities and the future of agentic AI"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
        { href: '/ai-journey/claude', label: 'Claude' },
      ]}
    >
      {/* TL;DR Quick Summary */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
          <div className="flex items-start mb-3">
            <span className="text-3xl mr-3">⚡</span>
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">TL;DR: The 30-Second Forecast</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            By late 2026, Claude will likely reach <strong>90%+ SWE-bench performance</strong> (human-level coding),
            handle <strong>50-100+ hour autonomous operations</strong> (multi-day development sprints), and power an
            ecosystem of <strong>200+ MCP servers</strong> enabling agentic workflows far beyond coding.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            This isn&apos;t speculation — it&apos;s extrapolation from 18 months of documented improvements and
            Anthropic&apos;s Early Experience learning paradigm.
          </p>
        </div>
      </motion.section>

      {/* 2026 Quarterly Timeline */}
      <motion.section
        {...sectionAnimation(0.05)}
        className="mb-12"
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">📅 2026 Quarterly Roadmap</h3>
          <div className="space-y-4">
            {/* Q1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300">Q1</span>
              </div>
              <div className="flex-1 border-l-2 border-blue-300 dark:border-blue-700 pl-4">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400">Jan - Mar 2026</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• <strong>Opus 4.5 release</strong> — Current flagship, ~81% SWE-bench</li>
                  <li>• Extended thinking enables deeper reasoning chains</li>
                  <li>• Infrastructure scaling (Google TPU, Azure capacity doubling)</li>
                </ul>
              </div>
            </div>

            {/* Q2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-sm font-bold text-teal-700 dark:text-teal-300">Q2</span>
              </div>
              <div className="flex-1 border-l-2 border-teal-300 dark:border-teal-700 pl-4">
                <h4 className="font-semibold text-teal-700 dark:text-teal-400">Apr - Jun 2026</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• <strong>Multi-agent coordination</strong> matures — specialized agents collaborate</li>
                  <li>• MCP ecosystem expands to 50-100 servers</li>
                  <li>• SWE-bench likely reaches 85%+ threshold</li>
                </ul>
              </div>
            </div>

            {/* Q3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-sm font-bold text-purple-700 dark:text-purple-300">Q3</span>
              </div>
              <div className="flex-1 border-l-2 border-purple-300 dark:border-purple-700 pl-4">
                <h4 className="font-semibold text-purple-700 dark:text-purple-400">Jul - Sep 2026</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• <strong>50+ hour autonomous operations</strong> — multi-day sprints</li>
                  <li>• Domain expansion: legal, scientific, financial research</li>
                  <li>• Dario Amodei&apos;s &quot;powerful AI&quot; predictions approaching</li>
                </ul>
              </div>
            </div>

            {/* Q4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-sm font-bold text-green-700 dark:text-green-300">Q4</span>
              </div>
              <div className="flex-1 border-l-2 border-green-300 dark:border-green-700 pl-4">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Oct - Dec 2026</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• <strong>SWE-bench ~90%</strong> — approaching human-level coding</li>
                  <li>• 200+ MCP servers, enterprise &quot;AI employee&quot; deployments</li>
                  <li>• Agent monitoring &amp; interpretability advances</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic">
            Based on Anthropic research direction, Dario Amodei&apos;s &quot;Machines of Loving Grace&quot; essay, and documented performance trends.
          </p>
        </Card>
      </motion.section>

      {/* Looking Ahead: Opus 5 */}
      <motion.section
        id="opus-5"
        {...sectionAnimation(0.08)}
        className="mb-12"
      >
        <Card className="p-6 border-l-4 border-purple-500">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🔮</span>
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">
                Looking Ahead: Opus 5 / Claude 5
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Expected Q2-Q3 2026</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            While Anthropic hasn&apos;t announced Opus 5, historical patterns suggest a major release every ~6 months:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-2">Release Pattern</h5>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Claude 3 Opus → 3.5 Sonnet: ~4 months</li>
                <li>• Claude 4 Sonnet → Opus 4.5: ~5 months</li>
                <li>• Opus 4.5 (Nov 2025) → <strong>Opus 5: ~May-Jun 2026</strong></li>
              </ul>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-2">Expected Capabilities</h5>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>• SWE-bench: 90%+ (approaching human-level)</li>
                <li>• Context: 500K-1M tokens likely</li>
                <li>• Multi-modal: Enhanced vision + audio</li>
                <li>• Memory: Persistent cross-session learning</li>
              </ul>
            </div>
          </div>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
            <p className="text-xs text-gray-700 dark:text-gray-300">
              <strong>Speculation level:</strong> Medium confidence (60-70%). Based on release cadence patterns and competitive pressure from GPT-5.
              Community prediction markets show 75-80% probability for Q1-Q2 2026 release.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* Table of Contents */}
      <motion.section
        {...sectionAnimation(0.1)}
        className="mb-16"
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">📑 Jump to Section</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <a href="#opus-5" className="text-purple-600 dark:text-purple-400 hover:underline">🔮 Opus 5 / Claude 5</a>
            <a href="#trajectory" className="text-blue-600 dark:text-blue-400 hover:underline">📊 Performance Trajectory</a>
            <a href="#high-confidence" className="text-blue-600 dark:text-blue-400 hover:underline">🎯 High Confidence Predictions</a>
            <a href="#medium-confidence" className="text-blue-600 dark:text-blue-400 hover:underline">💡 Medium Confidence Predictions</a>
            <a href="#paradigm-shift" className="text-blue-600 dark:text-blue-400 hover:underline">🚀 The Paradigm Shift</a>
            <a href="#wild-cards" className="text-blue-600 dark:text-blue-400 hover:underline">⚡ Wild Cards & Uncertainties</a>
            <a href="#career" className="text-blue-600 dark:text-blue-400 hover:underline">💼 Career Implications</a>
            <a href="#methodology" className="text-blue-600 dark:text-blue-400 hover:underline">📚 Methodology</a>
          </div>
        </Card>
      </motion.section>

      {/* Introduction */}
      <motion.section
        id="trajectory"
        {...sectionAnimation(0.2)}
        className="mb-16"
      >
        <SectionHeader title="The Trajectory Pattern" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Based on Anthropic&apos;s research direction, documented performance improvements, and the Early Experience
            learning paradigm, we can make informed predictions about Claude&apos;s capabilities in 2026. This isn&apos;t
            speculation - it&apos;s extrapolation from measurable trends.
          </p>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📊 The 18-Month Performance Evolution</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Early 2024: Claude 3 Opus</span>
                <span className="font-mono">38% agentic coding</span>
              </div>
              <div className="flex justify-between">
                <span>Mid 2024: Claude 3.5 Sonnet</span>
                <span className="font-mono">64% (69% improvement)</span>
              </div>
              <div className="flex justify-between">
                <span>Early 2025: Claude 4 Sonnet</span>
                <span className="font-mono">72.7% SWE-bench</span>
              </div>
              <div className="flex justify-between">
                <span>Sep 2025: Claude Sonnet 4.5</span>
                <span className="font-mono">82.0% SWE-bench</span>
              </div>
              <div className="flex justify-between">
                <span>Jan 2026: Claude Opus 4.5</span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">Current flagship model</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-blue-300 dark:border-blue-700">
                <span className="italic">Extrapolated Dec 2026:</span>
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400">90-95% (human-level)</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">4x</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Autonomous operation improvement (7 → 30+ hours in 12 months)
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">45%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                OSWorld improvement in just 4 months (42.2% → 61.4%)
              </div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">4-6</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Months between major capability releases (consistent pattern)
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* High Confidence Predictions */}
      <motion.section
        id="high-confidence"
        {...sectionAnimation(1)}
        className="mb-16"
      >
        <SectionHeader title="High Confidence Predictions (80%+)" />
        <div className="space-y-6">
          <Card className="p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  SWE-bench Reaches 85-90%
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Q2-Q3 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Following the current improvement trajectory, Claude will handle 85-90% of real-world software engineering
              tasks. This is the &quot;good enough for most work&quot; threshold where adoption explodes.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Why this matters:</strong> At 90%, developers can rely on Claude for the majority of coding work,
                not just 10-20% like today. This shifts Claude from &quot;helpful assistant&quot; to &quot;primary teammate.&quot;
              </p>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⏰</span>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  Autonomous Operation: 50-100+ Hours
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">H1 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Current 4x/year improvement rate (7 hours → 30+ hours) suggests Claude Code will handle
              multi-day development sprints autonomously. Start it Friday evening, return Monday to completed features.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Enabled by:</strong> Early Experience paradigm + verifiable feedback from tests/builds means
                Claude learns from mistakes without human supervision at every step.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔗</span>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  MCP Ecosystem Explosion
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Throughout 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              From 6 popular MCP servers today to hundreds by end of 2026. Community-built MCPs for every major tool,
              API, and database. MCP marketplace with pre-configured stacks for common workflows.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded text-sm">
                <strong>Current (2025):</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Filesystem, Supabase, GitHub</li>
                  <li>• Puppeteer, Brave Search, Context7</li>
                  <li>• ~10-15 community servers</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
                <strong>Predicted (2026):</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• 200+ community MCP servers</li>
                  <li>• Enterprise-specific MCPs</li>
                  <li>• No-code MCP builders</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🧠</span>
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                  Persistent Memory & Personalization
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Q1-Q2 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Claude already has &quot;memory across conversations&quot; (Opus 4.5). Natural evolution is persistent,
              project-specific memory that improves with usage. Learns your coding style, project architecture, team conventions.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Expected capabilities:</strong>
              </p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Remembers project context across weeks/months</li>
                <li>• Adapts to your preferences without explicit instruction</li>
                <li>• Shared team memory for consistent behavior across developers</li>
                <li>• Learning from corrections compounds over time</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Medium Confidence Predictions */}
      <motion.section
        id="medium-confidence"
        {...sectionAnimation(2)}
        className="mb-16"
      >
        <SectionHeader title="Medium Confidence Predictions (50-70%)" />
        <div className="space-y-6">
          <Card className="p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">👥</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                  Multi-Agent Coordination
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Q2-Q3 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Multiple specialized Claude instances working together: Frontend agent + Backend agent + Testing agent +
              Documentation agent collaborating on complex projects simultaneously.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Built-in coordination primitives:</strong>
              </p>
              <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Handoff protocols between agents</li>
                <li>• Shared state management</li>
                <li>• Conflict resolution for parallel edits</li>
                <li>• Orchestration dashboards for monitoring</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔬</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                  Early Experience Beyond Coding
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">H2 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Early Experience paradigm (verifiable feedback enables scalable learning) extends to domains beyond software:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                <strong>Legal Research:</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Citation verification (true/false)</li>
                  <li>• Precedent checking (applies/doesn&apos;t apply)</li>
                  <li>• Document analysis with verifiable claims</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                <strong>Scientific Research:</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Experiment design validation</li>
                  <li>• Result verification (reproducible/not)</li>
                  <li>• Literature review with citation checking</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                <strong>Financial Analysis:</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Calculation verification (correct/incorrect)</li>
                  <li>• Data accuracy checks</li>
                  <li>• Anomaly detection with clear signals</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                <strong>Content Creation:</strong>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Fact-checking (true/false)</li>
                  <li>• Source verification (valid/invalid)</li>
                  <li>• Claim validation with evidence</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-3">
              Note: Anthropic&apos;s 45-minute Deep Research mode (announced 2025) is the foundation for these applications.
            </p>
          </Card>

          <Card className="p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔍</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
                  Interpretable Agent Reasoning
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Q3-Q4 2026</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As agents become more autonomous, understanding their decision-making becomes critical. Anthropic&apos;s research
              on agent monitoring (hierarchical summarization, surfacing concerning behaviors) points toward interpretable reasoning.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Expected capabilities:</strong>
              </p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Complete audit trails of autonomous agent actions</li>
                <li>• Justification for each decision with evidence</li>
                <li>• Constitutional constraints (user-defined principles agents follow)</li>
                <li>• Monitoring dashboards showing agent reasoning in real-time</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* The Paradigm Shift */}
      <motion.section
        id="paradigm-shift"
        {...sectionAnimation(3)}
        className="mb-16"
      >
        <SectionHeader title="The Big Picture: 2026 as an Inflection Point" />
        <Card className="p-6">
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800 mb-6">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">
              🚀 From &quot;Cool Demo&quot; to &quot;Primary Way People Work&quot;
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              2026 will likely be remembered as the year agentic AI transitioned from impressive demonstrations
              to the primary way knowledge workers accomplish tasks. Not because the technology suddenly appeared,
              but because capabilities crossed critical thresholds of reliability and usefulness.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">What Changes in 2026</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="font-semibold text-red-600 dark:text-red-400 mb-2">Before (2025)</div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Claude assists with 10-20% of coding work</li>
                    <li>• Developers supervise every step</li>
                    <li>• Limited to single tasks/files</li>
                    <li>• Impressive but not transformative</li>
                  </ul>
                </div>
                <div className="p-4 border border-green-500 rounded-lg bg-green-50/50 dark:bg-green-900/10">
                  <div className="font-semibold text-green-600 dark:text-green-400 mb-2">After (2026)</div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Claude handles 50-70% of coding work</li>
                    <li>• Autonomous for days/weeks with checkpoints</li>
                    <li>• Multi-file, cross-repository capabilities</li>
                    <li>• Fundamentally changes how development works</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Who This Impacts</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-1">Developers</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Role shifts from &quot;writing code&quot; to &quot;orchestrating agents + reviewing output.&quot;
                    Senior developers become force multipliers, managing multiple autonomous agent teams.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                  <h5 className="font-semibold text-teal-700 dark:text-teal-400 mb-1">Researchers</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Deep research agents handle literature review, citation checking, and experimental validation.
                    Researchers focus on hypothesis generation and interpretation.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-1">Enterprise Teams</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Deploy domain-specific Claude instances with company knowledge. Custom MCP servers for proprietary
                    tools. Agent monitoring dashboards for compliance and safety.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h5 className="font-semibold text-green-700 dark:text-green-400 mb-1">Non-Technical Users</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    No-code agent builders make agentic workflows accessible. Custom research agents, data analysis agents,
                    content verification agents - all without programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Wild Cards */}
      <motion.section
        id="wild-cards"
        {...sectionAnimation(4)}
        className="mb-16"
      >
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                ⚡ Wild Cards & Uncertainties
              </h3>
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </div>
          </summary>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
              Factors that could significantly accelerate or slow the predicted timeline:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">⚡ Could Accelerate Timeline</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">1.</span>
                <div>
                  <strong>Context length breakthrough:</strong> 200K → 1M+ tokens means entire codebases in context.
                  Eliminates need for clever context management.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">2.</span>
                <div>
                  <strong>Hardware improvements:</strong> Faster inference = more exploration cycles = faster learning
                  via Early Experience paradigm.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">3.</span>
                <div>
                  <strong>Regulatory clarity:</strong> Clear AI safety standards enable faster enterprise deployment
                  and adoption.
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">⚠️ Could Slow Timeline</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">1.</span>
                <div>
                  <strong>Safety incidents:</strong> If autonomous agents cause harm (security breach, data loss),
                  industry-wide slowdown likely.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">2.</span>
                <div>
                  <strong>Diminishing returns:</strong> Improvements from 80% → 95% may be significantly harder
                  than 40% → 80% was.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-bold">3.</span>
                <div>
                  <strong>Competition dynamics:</strong> If competitors surge ahead, Anthropic may shift strategy
                  rather than continue current path.
                </div>
              </li>
            </ul>
          </Card>
            </div>
          </div>
        </details>
      </motion.section>

      {/* Career Implications */}
      <motion.section
        id="career"
        {...sectionAnimation(5)}
        className="mb-16"
      >
        <SectionHeader title="Career Implications: What This Means for You" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If these predictions hold, 2026 will see fundamental shifts in valuable skills and career opportunities:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                Skill Evolution: From Coding to Orchestration
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Less Valuable (2026):</p>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Writing boilerplate code</li>
                    <li>• Syntax memorization</li>
                    <li>• Individual contributor coding speed</li>
                    <li>• Single-language expertise</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">More Valuable (2026):</p>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Agent orchestration skills</li>
                    <li>• Composition pattern mastery</li>
                    <li>• System design & architecture</li>
                    <li>• Multi-agent coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-4 py-2">
              <h4 className="font-semibold text-teal-700 dark:text-teal-400 mb-2">
                New Career Paths Emerging
              </h4>
              <div className="space-y-3 mt-3 text-sm">
                <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded">
                  <strong>Agent Orchestration Specialists:</strong> Design and manage multi-agent workflows.
                  Understand composition patterns, monitoring, safety constraints.
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <strong>MCP Server Developers:</strong> Build custom MCP servers for enterprise tools and APIs.
                  Bridge AI capabilities with proprietary systems.
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <strong>AI Safety Engineers:</strong> Implement monitoring, audit trails, constitutional constraints.
                  Ensure autonomous agents operate safely.
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <strong>Domain + AI Hybrids:</strong> Legal + AI, Scientific + AI, Financial + AI expertise becomes
                  extremely valuable as agents expand beyond coding.
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                For Anthropic Career Seekers Specifically
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                By mid-2026, Anthropic will likely be hiring for roles that don&apos;t exist today:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Research → Product translation:</strong> Turn Early Experience papers into product features</li>
                <li>• <strong>Agent safety specialists:</strong> Constitutional AI implementation and monitoring</li>
                <li>• <strong>Ecosystem growth:</strong> MCP platform development and community management</li>
                <li>• <strong>Enterprise solutions:</strong> Custom Claude instances for regulated industries</li>
              </ul>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 italic">
                Demonstrating deep understanding of the Early Experience paradigm, composition patterns, and safety-conscious
                AI development will be differentiating factors.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Methodology Note */}
      <motion.section
        id="methodology"
        {...sectionAnimation(6)}
        className="mb-12"
      >
        <details className="group">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                📚 Methodology & Confidence Levels
              </h3>
              <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </div>
          </summary>
          <div className="mt-4">
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            These predictions are based on:
          </p>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-start">
              <span className="font-bold text-blue-600 dark:text-blue-400 mr-2">1.</span>
              <div>
                <strong>Documented performance trajectories:</strong> 18 months of SWE-bench, OSWorld, autonomous operation improvements
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-blue-600 dark:text-blue-400 mr-2">2.</span>
              <div>
                <strong>Anthropic&apos;s research direction:</strong> Constitutional AI, agent monitoring, Early Experience paradigm
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-blue-600 dark:text-blue-400 mr-2">3.</span>
              <div>
                <strong>Announced capabilities:</strong> Deep Research mode, GitHub Actions integration, global expansion
              </div>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-blue-600 dark:text-blue-400 mr-2">4.</span>
              <div>
                <strong>Theoretical foundations:</strong> Verifiable feedback enables scalable autonomous learning
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Predictions Are Not Guarantees</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              AI development is inherently uncertain. Safety concerns, technical challenges, or strategic shifts could
              alter this trajectory. These predictions represent informed extrapolation from current trends, not certainty
              about the future. Use them to inform your learning and career planning, not as investment advice.
            </p>
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> January 2026 | <strong>Confidence Levels:</strong> Very High (80%+),
              High (60-80%), Medium (40-60%), Speculation (&lt;40%) | <strong>Data Sources:</strong> Anthropic public
              announcements, research papers, benchmark results, industry analysis
            </p>
          </div>
        </Card>
          </div>
        </details>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}
