'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageLayout, Card, CTAButton } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

export default function AIJourneyPage() {
  return (
    <PageLayout
      title="AI Journey"
      description="Pioneering Human-AI Collaboration for the Next Generation"
      maxWidth="4xl"
      gradientTitle
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <motion.div 
          {...fadeInUp()}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Human-AI Collaboration
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Building the frameworks our children will need to thrive with AI—where human wisdom and artificial intelligence create value greater than the sum of their parts.
          </p>
          
          {/* Fitzgerald Connection */}
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-700 dark:text-blue-300 font-medium">
              Applying the Fitzgerald Principle to AI: holding the opposing ideas of human irreplaceability AND AI capabilities simultaneously.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What Makes This Different */}
      <motion.section 
        {...sectionAnimation(0)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">What Makes This Approach Different</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Complementarity Over Replacement</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI doesn&apos;t replace humans—it amplifies our unique capabilities: moral agency, creativity, and embodied wisdom.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Three-Hat Framework</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Rapid context switching: Systems Architect → Product Manager → Implementation. Live-tested across 3+ client projects.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Living Lab Validation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every framework is tested in real implementations. Proof over promises, experiments over theories.
            </p>
          </Card>
        </div>
      </motion.section>

      {/* Choose Your Path */}
      <motion.section 
        {...sectionAnimation(1)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Learning Path</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Different entry points based on your current experience and goals. All paths lead to the same destination: effective human-AI collaboration.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* New to AI */}
          <Card hover className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🌱</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">New to AI?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Start with the philosophical foundation and gradually build technical skills.
                </p>
                <div className="space-y-2">
                  <Link 
                    href="/ai-journey/why-ai" 
                    className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    1. Why Human-AI Collaboration →
                  </Link>
                  <Link
                    href="/ai-journey/overview"
                    className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    2. Three-Hat Framework Overview →
                  </Link>
                  <Link
                    href="/ai-journey/techniques/llm-handling"
                    className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    3. Start with LLM Communication →
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Background */}
          <Card hover className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🚀</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Technical Background?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Jump straight into advanced implementations and leadership frameworks.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/ai-journey/technical-leadership"
                    className="block text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    1. Three-Hat Technical Leadership →
                  </Link>
                  <Link
                    href="/ai-journey/claude/overview"
                    className="block text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    2. Claude Mastery Deep Dive →
                  </Link>
                  <Link
                    href="/ai-journey/techniques/agent-rag"
                    className="block text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    3. Agent & RAG Systems →
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Featured Highlights */}
      <motion.section 
        {...sectionAnimation(2)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Claude Mastery */}
          <Card hover className="p-6">
            <div className="text-2xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-3">Claude Mastery Program</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              8 comprehensive modules covering everything from prompt engineering to computer use capabilities.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              📚 Prompt Engineering • 🛠️ Tool Use • 🖥️ Computer Use • 👁️ Vision & Multimodal
            </div>
            <Link
              href="/ai-journey/claude/overview"
              className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
            >
              Explore Claude Mastery →
            </Link>
          </Card>

          {/* Three-Hat Framework */}
          <Card hover className="p-6">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-3">Three-Hat Framework</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Breakthrough methodology for technical leadership in AI projects. Currently active on 3 client projects.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              🏗️ Systems Architecture • 📊 Product Management • 💻 Implementation
            </div>
            <Link
              href="/ai-journey/technical-leadership"
              className="text-orange-600 dark:text-orange-400 hover:underline text-sm font-medium"
            >
              See Framework in Action →
            </Link>
          </Card>

          {/* Living Lab */}
          <Card hover className="p-6">
            <div className="text-2xl mb-3">🧪</div>
            <h3 className="text-lg font-semibold mb-3">Living Lab Results</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Real implementations proving that human-AI collaboration creates value greater than the sum of parts.
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              📊 Case Studies • 🔬 Active Experiments • 📈 Measurable Results
            </div>
            <Link 
              href="/ai-journey/portfolio" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              View Live Results →
            </Link>
          </Card>
        </div>
      </motion.section>

      {/* Current Experiments */}
      <motion.section 
        {...sectionAnimation(3)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Current Experiments</h2>
        
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">⚡ ADHD-AI Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                Hypothesis: ADHD cognitive patterns provide natural advantages for AI collaboration speed and context switching.
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                Status: Active research with preliminary validation
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">🎯 2-Minute Rule for AI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                If users can&apos;t achieve first success within 2 minutes, the AI architecture has failed. Now testing across domains.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Status: Proven in 3 implementations
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* CTA */}
      <motion.section 
        {...sectionAnimation(4)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Pioneer?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Start your journey into human-AI collaboration. Every framework here is battle-tested and ready to implement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/ai-journey/why-ai">
            Start with Why AI
          </CTAButton>
          <Link
            href="/ai-journey/claude/overview"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Dive into Claude Mastery
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}