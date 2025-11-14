'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import TableOfContents from '@/components/common/TableOfContents';
import { sectionAnimation } from '@/utils/animations';
import type { TOCHeading } from '@/types/blog';

export default function PhilosophyPage() {
  // Table of Contents structure
  const headings: TOCHeading[] = [
    { id: 'foundation', text: 'The Foundation', level: 2 },
    { id: 'operating-system', text: 'Intellectual Operating System', level: 3 },
    { id: 'meta-mission', text: 'The Meta-Mission', level: 3 },
    { id: 'frameworks', text: 'The Frameworks', level: 2 },
    { id: 'triangle', text: 'Triangle Foundation', level: 3 },
    { id: 'truth-seeking', text: 'Truth-Seeking Framework', level: 3 },
    { id: 'practice', text: 'Philosophy in Practice', level: 2 },
    { id: 'collaborator', text: 'Collaborator Model', level: 3 },
    { id: 'practice-examples', text: 'Practice Examples', level: 3 },
    { id: 'building', text: 'What I\'m Building', level: 3 },
  ];

  return (
    <PageLayout
      title="The Fitzgerald Principle"
      description="First-rate intelligence through productive tensions: My operating system for pioneering human-AI collaboration"
    >
      <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12">
        {/* Table of Contents - Desktop Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents headings={headings} />
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* CHAPTER 1: THE FOUNDATION */}
          <div id="foundation" className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-8 border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 1: THE FOUNDATION
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Core philosophy and mission
              </p>
            </div>

            {/* The Fitzgerald Principle - Core Operating System */}
            <motion.section
              id="operating-system"
              {...sectionAnimation(0)}
              className="mb-12"
            >
              <SectionHeader title="My Intellectual Operating System" />
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500">
                <blockquote className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 text-center">
                  &ldquo;The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.&rdquo;
                </blockquote>
                <footer className="text-center text-gray-500 dark:text-gray-400 mb-6">— F. Scott Fitzgerald</footer>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-blue-300 dark:border-blue-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    <strong>This is my operating system for everything:</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Immediate practical value AND long-term civilizational contribution</strong><br/>
                    <strong>Personal family focus AND public knowledge building</strong><br/>
                    <strong>Business success AND philosophical advancement</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    These aren&apos;t contradictions to resolve—they&apos;re the productive tensions that create value in the AI era.
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Meta-Mission Flows From Fitzgerald */}
            <motion.section
              id="meta-mission"
              {...sectionAnimation(1)}
              className="mb-12"
            >
              <SectionHeader title="The Meta-Mission" />
              <Card className="p-6 border-l-4 border-blue-500">
                <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;My children will inherit a world co-inhabited by a new form of intelligence. My mission is to pioneer
                  and model the wisdom needed to thrive in this collaboration.&rdquo;
                </blockquote>
                <p className="text-gray-600 dark:text-gray-400">
                  This mission embodies the Fitzgerald Principle perfectly: demonstrating how uniquely human qualities—like
                  purpose-driven creativity, moral agency, and even the profound understanding of our own mortality—remain
                  our greatest assets while building practical AI systems today.
                </p>
              </Card>
            </motion.section>
          </div>

          {/* CHAPTER 2: THE FRAMEWORKS */}
          <div id="frameworks" className="mb-12">
            <div className="bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 rounded-lg p-6 mb-8 border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 2: THE FRAMEWORKS
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Structured methodologies for navigating complexity
              </p>
            </div>

            {/* The Triangle Foundation - A Fitzgerald Application */}
            <motion.section
              id="triangle"
              {...sectionAnimation(2)}
              className="mb-12"
            >
              <SectionHeader title="Triangle Foundation" />
              <Card className="p-6 mb-6 border-l-4 border-purple-500">
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                  The Triangle Foundation is the Fitzgerald Principle applied to life design: three opposing forces that strengthen each other.
                </p>

                <div className="text-center mb-8">
                  <div className="inline-block">
                    <div className="text-lg font-mono mb-4">
                      <div className="mb-2">Self-Discovery</div>
                      <div className="mb-2">/\</div>
                      <div className="mb-2">/  \</div>
                      <div className="mb-2">/    \</div>
                      <div>Family ——— Wealth</div>
                      <div className="mt-2">Generation</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Self-Discovery</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Understanding and working with my nature (ADHD patterns, embodied wisdom, moral agency).
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3">Family Generation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Building legacy and modeling adaptive strategies for a world co-inhabited by AI.
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Wealth Generation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Creating multiple, resilient revenue streams to fund this exploration.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    <strong>Fitzgerald Principle Applied:</strong> Each point creates productive tension with the others. No single point can stand alone.
                  </p>
                </div>
              </Card>
            </motion.section>

            {/* Seeking Truth in the AI Age - CONDENSED */}
            <motion.section
              id="truth-seeking"
              {...sectionAnimation(3)}
              className="mb-12"
            >
              <SectionHeader title="Truth-Seeking Framework" />
              <Card className="p-6 mb-6 border-l-4 border-purple-500">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  As a parent navigating an AI-integrated childhood, I face a question deeper than &quot;how do my kids use AI safely?&quot;
                  The real question is: <strong>How do we seek truth when AI hallucinates confidently, algorithms radicalize subtly,
                  and information moves faster than human verification?</strong>
                </p>

                {/* Three Productive Tensions */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Three Productive Tensions in Truth-Seeking</h3>

                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-sm mb-1">Speed ↔ Accuracy</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        AI gives instant answers ↔ Truth requires verification. Teach kids to value &quot;I don&apos;t know yet, let&apos;s verify&quot;.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 text-sm mb-1">Authority ↔ Verification</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Expert consensus matters ↔ Independent thinking is essential. Default to established knowledge while maintaining intellectual independence.
                      </p>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-r-lg">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400 text-sm mb-1">Confidence ↔ Calibration</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        AI outputs with certainty ↔ Expressing probabilistic uncertainty. Model calibrated confidence and update beliefs with evidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seven-Layer Framework - Condensed */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Seven-Layer Framework</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 italic">
                    Synthesizing Munger&apos;s epistemic humility, Taleb&apos;s antifragility, and Popper&apos;s falsifiability for the AI age.
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">1. Epistemic Humility</strong> — Start with uncertainty, update with evidence
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">2. Bayesian Updating</strong> — Prior + Evidence → Updated belief
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">3. Source Triangulation</strong> — 3+ independent sources = likely true
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">4. Falsifiability Test</strong> — Can it be proven wrong?
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">5. Cui Bono Analysis</strong> — Who benefits? Follow incentives
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1">
                      <strong className="text-indigo-600 dark:text-indigo-400">6. Steel Man Test</strong> — Understand opposing views deeply
                    </div>
                    <div className="border-l-2 border-indigo-300 pl-3 py-1 md:col-span-2">
                      <strong className="text-indigo-600 dark:text-indigo-400">7. Antifragile Information Diet</strong> — Read what survives time, seek disconfirming evidence
                    </div>
                  </div>
                </div>

                {/* Teaching Framework for Kids - KEPT IN FULL */}
                <div className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">For My Kids: The Three-Question Protocol</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    The seven layers distilled into three simple questions for any claim—from AI outputs to playground rumors:
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-400">1. Who said it?</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">(Source quality: Is it someone who studies this? How do they make money?)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-400">2. How do they know?</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">(Evidence check: Can they show proof? Do others say the same thing?)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-400">3. What if they&apos;re wrong?</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">(Falsifiability: How could we test it? What would prove it false?)</p>
                    </div>
                  </div>
                </div>

                {/* Digital AI Guardian Vision */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2 mb-4">
                  <Link href="/laboratory" className="block hover:opacity-80 transition-opacity">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1 text-sm">
                      Future Direction: The Digital AI Guardian → Laboratory
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      A master-of-experts agentic system—like Big Hero 6&apos;s Baymax for information verification—that
                      families can pilot together. Not replacing parental judgment, but augmenting truth-seeking with real-time epistemic tools.
                    </p>
                  </Link>
                </div>

                {/* Meta-Teaching Moment */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>The Framework IS the Love:</strong>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    This systematic approach isn&apos;t cold or overly rational—it&apos;s how I love my children through complexity.
                    This is living documentation that evolves as the world changes and they grow.
                  </p>
                </div>
              </Card>
            </motion.section>
          </div>

          {/* CHAPTER 3: PHILOSOPHY IN PRACTICE */}
          <div id="practice" className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-green-900/20 dark:to-orange-900/20 rounded-lg p-6 mb-8 border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                CHAPTER 3: PHILOSOPHY IN PRACTICE
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Applications, positioning, and future directions
              </p>
            </div>

            {/* The Collaborator Model vs Others */}
            <motion.section
              id="collaborator"
              {...sectionAnimation(4)}
              className="mb-12"
            >
              <SectionHeader title="Collaborator Model" />
              <Card className="p-6 border-l-4 border-green-500">
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Where others see replacement, I design for complementarity.</strong>
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Four Guiding Principles</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Wisdom is the Human Edge</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        My value lies where knowledge ends and wisdom begins: applied experience, judgment under uncertainty, moral agency.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">Embrace Beginner&apos;s Humility</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        I approach this uncharted territory with accumulated wisdom and the humility of a novice. We are all new here.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Architect for Collaboration</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The goal isn&apos;t just automation, but creating systems where human and AI capabilities are complementary.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h5 className="font-semibold text-red-600 dark:text-red-400 mb-2">Our Mortality is Our Meaning</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The finite nature of human life gives our creativity and decisions a depth immortal systems cannot replicate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Techno-Optimists</h4>
                    <p className="text-sm text-red-600 dark:text-red-300">&ldquo;AI will replace everything!&rdquo;</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Human-Centric</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">&ldquo;We must protect human jobs!&rdquo;</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Collaborator Model</h4>
                    <p className="text-sm text-green-600 dark:text-green-300">&ldquo;Design for complementarity&rdquo;</p>
                  </div>
                </div>
              </Card>
            </motion.section>

            {/* Philosophy in Practice Examples */}
            <motion.section
              id="practice-examples"
              {...sectionAnimation(5)}
              className="mb-12"
            >
              <SectionHeader title="Practice Examples" />
              <Card className="p-6 mb-6 border-l-4 border-green-500">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  The Fitzgerald Principle isn&apos;t just philosophy—it&apos;s a working methodology tested across real projects.
                  Here&apos;s how holding opposing ideas in productive tension creates actual value:
                </p>

                <div className="space-y-6">
                  {/* Three-Hat Framework */}
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <Link href="/laboratory" className="block hover:opacity-80 transition-opacity">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        Three-Hat Framework → Laboratory
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Opposing Forces:</strong> Systems Architect (think holistically) ↔ Product Manager (ship quickly) ↔ Implementation (code it yourself)
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Productive Tension:</strong> Context switching between these opposing perspectives in &lt;15 minutes creates better decisions
                        than staying in any single mode. Currently testing across 3 client projects.
                      </p>
                    </Link>
                  </div>

                  {/* ADHD-AI Workflows */}
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <Link href="/laboratory" className="block hover:opacity-80 transition-opacity">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
                        ADHD as Feature, Not Bug → Laboratory
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Opposing Forces:</strong> Neurodivergent cognitive patterns (rapid context switching, hyperfocus cycles) ↔ Traditional productivity systems (linear workflows)
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Productive Tension:</strong> AI agents designed to work WITH ADHD patterns actually outperform neurotypical workflows.
                        The &quot;bug&quot; becomes a speed advantage in human-AI collaboration.
                      </p>
                    </Link>
                  </div>

                  {/* Sustainable AI */}
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <Link href="/laboratory" className="block hover:opacity-80 transition-opacity">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                        Sustainability as Innovation Driver → Laboratory
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Opposing Forces:</strong> AI capability (more compute = better results) ↔ Environmental constraints (limited energy budgets)
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Productive Tension:</strong> Energy constraints force breakthrough innovations in model efficiency.
                        Our constrained models now outperform larger models on specific tasks (87% energy reduction, +15% performance).
                      </p>
                    </Link>
                  </div>

                  {/* This Website */}
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      This Portfolio Website
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Opposing Forces:</strong> Simple, clean surface ↔ Rich technical depth and philosophy scoring
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Productive Tension:</strong> Automated philosophy validation scripts score design decisions against
                      the Fitzgerald Principle. The tension between &quot;keep it simple&quot; and &quot;show technical depth&quot;
                      creates better outcomes than choosing either extreme.
                    </p>
                  </div>

                  {/* Mortality & Meaning */}
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                      Mortality as Competitive Advantage
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Opposing Forces:</strong> Human mortality (finite time) ↔ AI immortality (infinite processing)
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Productive Tension:</strong> Our awareness of death creates urgency and meaning that immortal systems
                      cannot replicate. This &quot;limitation&quot; is actually our greatest asset for creative decision-making
                      and long-term thinking. Building for my children&apos;s future matters precisely because it&apos;s finite.
                    </p>
                  </div>
                </div>
              </Card>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic">
                Visit the <Link href="/laboratory" className="text-green-600 dark:text-green-400 hover:underline">Laboratory</Link> to see these experiments in detail.
              </p>
            </motion.section>

            {/* What I'm Building */}
            <motion.section
              id="building"
              {...sectionAnimation(6)}
              className="mb-12"
            >
              <SectionHeader title="What I'm Building" />
              <Card className="p-6 border-l-4 border-green-500">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Living Laboratories</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Human-AI Collaboration Models</li>
                      <li>• Financial Antifragility Systems</li>
                      <li>• Metacognitive Frameworks</li>
                      <li>• Legacy Wisdom Documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">For the Next Generation</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Patterns for human judgment</li>
                      <li>• Complementarity architectures</li>
                      <li>• Meaning-making frameworks</li>
                      <li>• Thriving strategies for AI cohabitation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Table of Contents - Mobile Floating Button */}
      <div className="lg:hidden">
        <TableOfContents headings={headings} />
      </div>
    </PageLayout>
  );
}
