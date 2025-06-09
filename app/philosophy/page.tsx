'use client';

import { motion } from 'framer-motion';
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

      {/* Guiding Philosophy */}
      <motion.section
        {...sectionAnimation(4)}
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

      {/* What I'm Building */}
      <motion.section
        {...sectionAnimation(5)}
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