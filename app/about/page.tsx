'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function AboutPage() {
  return (
    <PageLayout
      title="About Dave Liew"
      description="AI Engineer & Builder with 10+ years building ventures from 0→1, implementing AI solutions, and scaling operations"
      gradientTitle
    >
      {/* Hero Section */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I&apos;m Dave Liew—an AI Engineer and Builder exploring how humans and AI can work together naturally,
            not through replacement, but through thoughtful collaboration that amplifies what makes us uniquely human.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Builder</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                4 ventures co-founded, S$1M+ in revenue growth, Michelin recognition
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">AI Engineer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implementing human-AI collaboration systems across 3 active client projects
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Explorer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Testing frameworks for the next generation navigating AI cohabitation
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Current Focus */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Current Focus" />
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Context Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designing informational environments where human intuition and AI capabilities converge naturally.
                The art isn&apos;t in the prompts—it&apos;s in architecting the space where understanding emerges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Voice-First AI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exploring voice interfaces paired with real-time reasoning.
                2nd place at ElevenLabs hackathon. Building toward latency-optimized SME applications.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Professional Journey Timeline */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Professional Journey" />

        <div className="space-y-6">
          {/* Technology & AI Implementation */}
          <Card className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-full bg-blue-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Technology & AI Implementation</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Technical Solutions Consultant</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2022-2024</span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">Meta</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Implemented AdTech solutions for enterprise clients, developed technical solutions for complex business challenges.
                      Bridged gap between product teams and client needs.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Full Stack Developer Bootcamp</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2021</span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">General Assembly</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      480-hour intensive program. Mastered JavaScript, Python, React, Node.js, and modern web technologies.
                      Career pivot from business operations to hands-on technical implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Venture Building & Operations */}
          <Card className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-full bg-green-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Venture Building & Operations</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Co-Founder</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2013-present</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">Labyrinth Restaurant</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Built from concept to Michelin recognition. Led team through rapid growth phase and successful COVID pivot.
                      Experience in operations, team management, and resilient business systems.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Head of Business</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2017-2020</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">SG Code Campus</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Early team member during critical growth phase. Contributed to revenue growth from S$100K to S$1M+ in three years.
                      Built operations systems and business development processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Strategic Growth & Analytics */}
          <Card className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-2 h-full bg-purple-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">Strategic Growth & Analytics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Alpha Growth Ops Associate</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2021-2022</span>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Nansen</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Early employee in web3 analytics platform. Contributed to 35% revenue growth through operational improvements
                      and growth initiatives. Exposure to data-driven decision making.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Business Analyst</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2013-2014</span>
                    </div>
                    <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Unity Technologies</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Developed strategic transition to SaaS revenue model. Collaborated with global stakeholders across
                      product, engineering, and business teams. First exposure to tech at scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Key Achievements */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Key Achievements" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-2">S$1M+</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Revenue growth contributed across multiple ventures</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">4</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ventures co-founded and scaled from inception</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">Michelin</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Restaurant recognition achieved and maintained</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">35%</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Revenue growth in web3 analytics platform</p>
          </Card>
        </div>
      </motion.section>

      {/* What I Bring */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="What I Bring" />
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Technical Depth</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Full-stack development (Next.js, React, TypeScript, Python)</li>
                <li>• AI implementation & prompt engineering</li>
                <li>• System architecture & design</li>
                <li>• Database design & optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">Business Acumen</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• 0→1 venture building experience</li>
                <li>• Operations & growth strategy</li>
                <li>• Product development & iteration</li>
                <li>• Revenue growth & sustainability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Unique Perspective</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Human-AI complementarity design</li>
                <li>• Context engineering frameworks</li>
                <li>• Philosophical depth in technical work</li>
                <li>• ADHD-optimized workflows</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        {...sectionAnimation(5)}
        className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Let&apos;s Collaborate</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          If you&apos;re exploring how AI can augment human capabilities rather than replace them, or if you&apos;re
          building systems that require thoughtful human-AI collaboration, let&apos;s compare notes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Get in Touch
          </Link>
          <Link
            href="/ai-journey"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
          >
            Explore AI Journey
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
