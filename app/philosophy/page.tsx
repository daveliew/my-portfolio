'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function PhilosophyPage() {
  return (
    <PageLayout
      title="The Fitzgerald Principle"
      description="First-rate intelligence through productive tensions: My operating system for pioneering human-AI collaboration"
    >
      {/* The Fitzgerald Principle - Core Operating System */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="My Intellectual Operating System" />
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
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
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="The Meta-Mission" />
        <Card className="p-6">
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

      {/* The Triangle Foundation - A Fitzgerald Application */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="The Triangle Foundation" />
        <Card className="p-6 mb-6">
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

      {/* The Collaborator Model vs Others */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="The Collaborator Model" />
        <Card className="p-6">
          <p className="text-lg mb-6">
            Where others see replacement, I design for complementarity.
          </p>
          
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

      {/* Philosophy in Practice */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Philosophy in Practice" />
        <Card className="p-6 mb-6">
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
          Visit the <Link href="/laboratory" className="text-blue-600 dark:text-blue-400 hover:underline">Laboratory</Link> to see these experiments in detail.
        </p>
      </motion.section>

      {/* Guiding Philosophy */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Guiding Philosophy for an AI Age" />
        <div className="space-y-6">
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Wisdom is the Human Edge</h4>
            <p className="text-gray-600 dark:text-gray-400">
              My value lies where knowledge ends and wisdom begins: in applied experience, judgment under uncertainty, 
              moral agency, and purpose-driven creativity.
            </p>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Embrace the Beginner&apos;s Humility</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I approach this uncharted territory with the confidence of my accumulated wisdom and the humility 
              of a novice. We are all new here.
            </p>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">Architect for Collaboration, Not Automation</h4>
            <p className="text-gray-600 dark:text-gray-400">
              The goal isn&apos;t just to automate tasks, but to create systems where human and AI capabilities are 
              complementary, making the whole greater than the sum of its parts.
            </p>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">Our Mortality is Our Meaning</h4>
            <p className="text-gray-600 dark:text-gray-400">
              The finite, poignant nature of human life gives our creativity and decisions a depth that immortal 
              systems cannot replicate. This is a feature, not a bug, of our intelligence.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Seeking Truth in the AI Age */}
      <motion.section
        {...sectionAnimation(6)}
        className="mb-12"
      >
        <SectionHeader title="Seeking Truth in the AI Age" />
        <Card className="p-6 mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            As a parent navigating an AI-integrated childhood, I face a question deeper than &quot;how do my kids use AI safely?&quot;
            The real question is: <strong>How do we seek truth when AI hallucinates confidently, algorithms radicalize subtly,
            and information moves faster than human verification?</strong>
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 mb-8 border-l-4 border-indigo-500">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong className="text-indigo-600 dark:text-indigo-400">The Fitzgerald Challenge:</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              Hold &quot;AI is revolutionary&quot; AND &quot;AI hallucinates confidently&quot; simultaneously—while still
              retaining the ability to function. This requires systematic epistemology, not just intuition.
            </p>
          </div>

          {/* Three Productive Tensions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Three Productive Tensions in Truth-Seeking</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Speed ↔ Accuracy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Opposing Forces:</strong> AI gives instant answers ↔ Truth requires verification and time
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <strong>Productive Tension:</strong> Teach kids to value &quot;I don&apos;t know yet, let&apos;s verify&quot;
                  over instant certainty. Speed for exploration, accuracy for decisions.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Authority ↔ Verification</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Opposing Forces:</strong> Expert consensus matters ↔ Independent thinking is essential
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <strong>Productive Tension:</strong> Default to established knowledge while maintaining intellectual independence.
                  &quot;Smart people can be wrong, but I should understand why they believe it before dismissing it.&quot;
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50 dark:bg-teal-900/20 rounded-r-lg">
                <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-1">Confidence ↔ Calibration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Opposing Forces:</strong> AI outputs with certainty ↔ Expressing probabilistic uncertainty
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <strong>Productive Tension:</strong> Model calibrated confidence: &quot;I&apos;m 95% sure Earth is round vs.
                  30% sure this approach will work.&quot; Changing your mind based on evidence is strength, not weakness.
                </p>
              </div>
            </div>
          </div>

          {/* Seven-Layer Framework */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">The Seven-Layer Truth-Seeking Framework</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
              A living artifact: This framework evolves as the world changes and my children grow. It synthesizes
              Charlie Munger&apos;s epistemic humility, Nassim Taleb&apos;s antifragility, and Karl Popper&apos;s
              falsifiability—made practical for the AI age.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">1. Epistemic Humility</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Start with &quot;What do I NOT know?&quot; Rate confidence explicitly. Update when proven wrong.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">2. Bayesian Updating</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Truth is probabilistic. Prior belief + new evidence → updated belief. Weight by quality.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">3. Source Triangulation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  One source = hypothesis. Three independent quality sources = probably true. Treat AI as quaternary until verified.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">4. Falsifiability Test</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ask: &quot;What evidence would change my mind?&quot; If a claim can&apos;t be proven wrong, it&apos;s not useful.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">5. Cui Bono Analysis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Who benefits if I believe this? Follow the incentives. LLMs optimized for engagement, not truth.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">6. Steel Man Test</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explain opposing views so well their proponents would accept it. If you can&apos;t, you don&apos;t understand it.
                </p>
              </div>

              <div className="border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 bg-white dark:bg-gray-800">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">7. Antifragile Information Diet</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Read what survives time. Follow people who change their minds. Seek disconfirming evidence deliberately.
                </p>
              </div>
            </div>
          </div>

          {/* Teaching Framework for Kids */}
          <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">For My Kids: The Three-Question Protocol</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              The seven layers distilled into three simple questions they can ask about any claim—from AI outputs to playground rumors:
            </p>

            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">1. Who said it?</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (Source quality: Is it someone who studies this? How do they make money?)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">2. How do they know?</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (Evidence check: Can they show proof? Do others say the same thing?)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">3. What if they&apos;re wrong?</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (Falsifiability: How could we test it? What would prove it false?)
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
              We practice on low-stakes topics first. The goal isn&apos;t perfect answers—it&apos;s building the habit of systematic questioning.
            </p>
          </div>

          {/* Digital AI Guardian Vision */}
          <div className="border-l-4 border-indigo-500 pl-4 py-3">
            <Link href="/laboratory" className="block hover:opacity-80 transition-opacity">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Future Direction: The Digital AI Guardian → Laboratory
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Vision:</strong> A master-of-experts agentic system—like Big Hero 6&apos;s Baymax for information verification—that
                families can pilot together. Not replacing parental judgment, but augmenting truth-seeking with real-time epistemic tools.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Why:</strong> The world evolves too quickly for humans to make sense of alone. We need collaborative AI systems
                that help us refine our epistemology as fast as the information environment changes.
              </p>
            </Link>
          </div>

          {/* Meta-Teaching Moment */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>The Framework IS the Love:</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Building this systematic approach isn&apos;t cold or overly rational—it&apos;s how I love my children through complexity.
              When they encounter information (from AI, from peers, from family members with different beliefs), they&apos;ll have
              a framework that helps them navigate with both confidence and humility.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              This is living documentation. As the world changes and they grow, we&apos;ll refine these tools together.
              No one has the answers, but we can all improve our way of seeking truth.
            </p>
          </div>
        </Card>
      </motion.section>

      {/* What I'm Building */}
      <motion.section
        {...sectionAnimation(7)}
        className="mb-12"
      >
        <SectionHeader title="What I'm Building" />
        <Card className="p-6">
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
    </PageLayout>
  );
}