'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, SectionHeader, PageLayout } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import { themeColors, themeUtilities } from '@/styles/theme';

// Import data
import sustainabilityData from '@/data/sustainability.json';

export default function LaboratoryPage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <PageLayout
      title="Innovation Laboratory"
      description="Where the unstoppable forces of AI, sustainability, and robotics converge: Experiments in technology that creates value while preserving our future."
    >
      {/* Hero Section - The Three Unstoppable Trends */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">The Convergence</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-3xl mx-auto leading-relaxed">
            Three unstoppable trends are reshaping everything: AI automation, sustainability imperatives, and robotic systems. 
            The laboratory explores where these forces intersect to create exponential value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className={`${themeUtilities.cards.knowledge} p-6 text-center`}>
            <div className="text-4xl mb-4">🤖</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>AI Revolution</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Exponential capabilities in reasoning, automation, and human-AI collaboration systems
            </p>
          </div>
          
          <div className={`${themeUtilities.cards.time} p-6 text-center`}>
            <div className="text-4xl mb-4">🌱</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>Sustainability</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Climate urgency driving massive capital allocation toward green technology and circular systems
            </p>
          </div>
          
          <div className={`${themeUtilities.cards.wealth} p-6 text-center`}>
            <div className="text-4xl mb-4">🦾</div>
            <h3 className={`text-xl font-semibold ${themeColors.text.wealth} mb-3`}>Robotics</h3>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Physical automation reaching cost parity with human labor across manufacturing and services
            </p>
          </div>
        </div>

        {/* Navigation for different views */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--background-secondary)] rounded-lg p-2 flex space-x-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'experiments', label: 'Active Experiments' },
              { id: 'sustainability', label: 'Sustainability Lab' },
              { id: 'investments', label: 'Investment Thesis' },
              { id: 'insights', label: 'Insights' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-[var(--accent-primary)] text-[var(--off-white)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">The Thesis</h3>
              <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                The intersection of AI, sustainability, and robotics creates the largest investment and innovation 
                opportunity in human history. Each trend amplifies the others:
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start">
                  <span className={`mr-2 ${themeColors.text.knowledge}`}>•</span>
                  <span className="text-[var(--text-primary)]">AI optimizes robotic systems for sustainable manufacturing</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 ${themeColors.text.time}`}>•</span>
                  <span className="text-[var(--text-primary)]">Sustainability constraints drive AI efficiency innovation</span>
                </li>
                <li className="flex items-start">
                  <span className={`mr-2 ${themeColors.text.wealth}`}>•</span>
                  <span className="text-[var(--text-primary)]">Robotics enables circular economy at unprecedented scale</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Laboratory Focus</h3>
              <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                We experiment with human-AI-robot collaboration systems that create value while 
                preserving resources and expanding human potential.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${themeColors.background.knowledge} mr-3`}></div>
                  <span className="text-base text-[var(--text-primary)]">Complementary intelligence systems</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${themeColors.background.time} mr-3`}></div>
                  <span className="text-base text-[var(--text-primary)]">Resource optimization algorithms</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${themeColors.background.wealth} mr-3`}></div>
                  <span className="text-base text-[var(--text-primary)]">Scalable automation frameworks</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Active Experiments Section */}
      {activeSection === 'experiments' && (
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Active Experiments" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>
                Three-Hat Framework Implementation
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                Testing rapid context switching between Systems Architect, Product Manager, and Implementation roles 
                in real client projects. Measuring decision quality and delivery speed.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Current Status:</span>
                  <span className={`font-medium ${themeColors.text.time}`}>Active</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Projects Testing:</span>
                  <span className="font-medium text-[var(--text-primary)]">3</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Key Metric:</span>
                  <span className="font-medium text-[var(--text-primary)]">Context switch time &lt;15min</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-xl font-semibold ${themeColors.text.knowledge} mb-3`}>
                ADHD-Optimized AI Workflows
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-base leading-relaxed">
                Designing AI agent systems that work WITH neurodivergent cognitive patterns rather than against them. 
                Building productivity systems that leverage hyperfocus cycles.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Current Status:</span>
                  <span className={`font-medium ${themeColors.text.wealth}`}>In Development</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Focus Areas:</span>
                  <span className="font-medium text-[var(--text-primary)]">Energy peaks, Task switching</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-[var(--text-primary)]">Hypothesis:</span>
                  <span className="font-medium text-[var(--text-primary)]">ADHD = AI-speed advantage</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-xl font-semibold ${themeColors.text.time} mb-3`}>
                Sustainable AI Model Training
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Exploring energy-efficient training methods for domain-specific models. Testing whether smaller, 
                specialized models can outperform general-purpose LLMs while using 90% less energy.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Energy Reduction:</span>
                  <span className={`font-medium ${themeColors.text.time}`}>87% vs GPT-4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Performance:</span>
                  <span className="font-medium">Domain tasks: +15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Current Focus:</span>
                  <span className="font-medium">Sustainability assessment</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-xl font-semibold ${themeColors.text.wealth} mb-3`}>
                Human-Robot Collaboration UX
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Designing interfaces for seamless human-robot collaboration in manufacturing and service contexts. 
                Focus on intuitive control systems and safety protocols.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Status:</span>
                  <span className={`font-medium ${themeColors.text.knowledge}`}>Prototype Phase</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Test Scenarios:</span>
                  <span className="font-medium">Assembly, Quality Control</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Key Insight:</span>
                  <span className="font-medium">Gesture &gt; Voice &gt; Touch</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Sustainability Lab Section */}
      {activeSection === 'sustainability' && (
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Sustainability Laboratory" />
          
          <div className="mb-8">
            <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-lg">{sustainabilityData.mission}</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {sustainabilityData.currentProjects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-semibold ${themeColors.text.time}`}>{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Research Phase' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                
                {/* Add convergence indicators */}
                <div className="border-t border-[var(--dark-grey-secondary)]/20 pt-3">
                  <p className="text-xs text-[var(--text-secondary)] mb-2">Convergence Opportunities:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] px-2 py-1 rounded">AI</span>
                    <span className="text-xs bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] px-2 py-1 rounded">Sustainability</span>
                    {project.title.includes('Resource') && (
                      <span className="text-xs bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)] px-2 py-1 rounded">Robotics</span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {sustainabilityData.keyLearnings.map((learning, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold mb-2">{learning.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{learning.description}</p>
              </Card>
            ))}
          </div>
        </motion.section>
      )}

      {/* Investment Thesis Section */}
      {activeSection === 'investments' && (
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Investment Thesis" />
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">The Opportunity Matrix</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-base leading-relaxed">
                $50+ trillion in capital will be deployed over the next decade across these three unstoppable trends. 
                The highest returns come from their intersection points.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`p-4 rounded-lg border-2 ${themeColors.border.knowledge} ${themeColors.background.knowledge}`}>
                  <h4 className={`font-semibold ${themeColors.text.knowledge} mb-2 text-lg`}>AI Infrastructure</h4>
                  <ul className="text-base space-y-1 text-[var(--text-primary)]">
                    <li>• Edge computing for robotics</li>
                    <li>• Efficient model architectures</li>
                    <li>• Human-AI interface design</li>
                  </ul>
                </div>
                
                <div className={`p-4 rounded-lg border-2 ${themeColors.border.time} ${themeColors.background.time}`}>
                  <h4 className={`font-semibold ${themeColors.text.time} mb-2 text-lg`}>Green Technology</h4>
                  <ul className="text-base space-y-1 text-[var(--text-primary)]">
                    <li>• Circular economy platforms</li>
                    <li>• Carbon capture automation</li>
                    <li>• Renewable energy optimization</li>
                  </ul>
                </div>
                
                <div className={`p-4 rounded-lg border-2 ${themeColors.border.wealth} ${themeColors.background.wealth}`}>
                  <h4 className={`font-semibold ${themeColors.text.wealth} mb-2 text-lg`}>Robotic Systems</h4>
                  <ul className="text-base space-y-1 text-[var(--text-primary)]">
                    <li>• Manufacturing automation</li>
                    <li>• Service robotics</li>
                    <li>• Agricultural technology</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current Portfolio Focus</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Active Investments</h4>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                      <li>• Energy-efficient AI hardware startups</li>
                      <li>• Human-robot collaboration software</li>
                      <li>• Circular economy marketplaces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Research & Development</h4>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                      <li>• Sustainable AI training methods</li>
                      <li>• Neurodivergent-optimized interfaces</li>
                      <li>• Resource optimization algorithms</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Investment Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className={`mr-2 ${themeColors.text.knowledge}`}>🎯</span>
                    <div>
                      <p className="font-medium text-sm">Convergence Play</p>
                      <p className="text-xs text-[var(--text-secondary)]">Sits at intersection of 2+ trends</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className={`mr-2 ${themeColors.text.time}`}>⚡</span>
                    <div>
                      <p className="font-medium text-sm">Exponential Scalability</p>
                      <p className="text-xs text-[var(--text-secondary)]">Software-like scaling with hardware impact</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className={`mr-2 ${themeColors.text.wealth}`}>🤝</span>
                    <div>
                      <p className="font-medium text-sm">Human-Centric Design</p>
                      <p className="text-xs text-[var(--text-secondary)]">Enhances rather than replaces human capabilities</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.section>
      )}

      {/* Insights Section */}
      {activeSection === 'insights' && (
        <motion.section
          {...sectionAnimation(1)}
          className="mb-12"
        >
          <SectionHeader title="Laboratory Insights" />
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className={`text-lg font-semibold ${themeColors.text.time} mb-3`}>
                💡 The Convergence Multiplier Effect
              </h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Projects that integrate all three trends (AI + sustainability + robotics) show 10x higher success rates 
                than single-trend initiatives. The constraint of sustainability forces innovation in AI efficiency, 
                which unlocks new robotic applications.
              </p>
              <div className="text-sm text-[var(--text-secondary)]">
                <strong>Insight:</strong> Constraints drive exponential innovation when systems are properly architected.
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-lg font-semibold ${themeColors.text.knowledge} mb-3`}>
                ⚡ The 2-Minute Rule Discovery
              </h3>
              <p className="text-[var(--text-secondary)] mb-3">
                If users can&apos;t achieve first success within 2 minutes, the architecture has failed. 
                This became the north star metric for all human-AI interface design, and now extends to human-robot collaboration.
              </p>
              <div className="text-sm text-[var(--text-secondary)]">
                <strong>Insight:</strong> Time-to-first-success trumps feature completeness across all automation domains.
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-lg font-semibold ${themeColors.text.wealth} mb-3`}>
                🎯 The Mortality Advantage
              </h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Human mortality creates urgency and meaning that immortal AI systems cannot replicate. 
                This &ldquo;bug&rdquo; in human design is actually our greatest feature for creative decision-making and long-term sustainability thinking.
              </p>
              <div className="text-sm text-[var(--text-secondary)]">
                <strong>Insight:</strong> Our finite nature is a competitive advantage, not a limitation to overcome.
              </div>
            </Card>

            <Card className="p-6">
              <h3 className={`text-lg font-semibold ${themeColors.text.time} mb-3`}>
                🌱 The Efficiency Paradox
              </h3>
              <p className="text-[var(--text-secondary)] mb-3">
                Sustainability constraints initially seem to limit AI capabilities, but actually drive breakthrough 
                innovations in model efficiency. Our energy-constrained models now outperform larger models on specific tasks.
              </p>
              <div className="text-sm text-[var(--text-secondary)]">
                <strong>Insight:</strong> Environmental limits accelerate rather than hinder technological progress.
              </div>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Professional Background */}
      <motion.section
        {...sectionAnimation(4)}
        id="professional-background"
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-gray-100">Professional Background</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          10+ years of hands-on experience building ventures from 0→1, implementing AI solutions, and scaling operations across diverse industries.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Technology & AI Implementation */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Technology & AI Implementation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Technical Solutions Consultant, Meta</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022-2024</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Implemented AdTech solutions for enterprise clients, developed technical solutions for business challenges</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Full Stack Developer Bootcamp, General Assembly</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">480-hour intensive program, mastered JavaScript, Python, and modern web technologies</p>
              </div>
            </div>
          </Card>

          {/* Venture Building & Operations */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Venture Building & Operations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Co-Founder, Labyrinth Restaurant</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2013-present</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Built from concept to Michelin recognition, led team through rapid growth and COVID pivot</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Head of Business, SG Code Campus</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2017-2020</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Early team member, contributed to growth from S$100K to S$1M+ in three years</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategic Growth & Analytics */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">Strategic Growth & Analytics</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Alpha Growth Ops Associate, Nansen</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2021-2022</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Early employee in web3 analytics platform, contributed to 35% revenue growth</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Business Analyst, Unity Technologies</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">2013-2014</p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Developed strategic transition to SaaS revenue model, collaborated with global stakeholders</p>
              </div>
            </div>
          </Card>

          {/* Key Achievements */}
          <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <h3 className="text-lg font-semibold mb-4 text-amber-700 dark:text-amber-300">Key Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300">S$1M+ revenue growth across multiple ventures</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300">4 ventures co-founded and scaled</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300">Michelin restaurant recognition achieved</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300">35% revenue growth in web3 analytics platform</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        {...sectionAnimation(5)}
        className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Join the Laboratory</h2>
        <p className="mb-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Interested in collaborating on experiments at the intersection of AI, sustainability, and robotics? 
          Looking for investment opportunities in the convergence space?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-pink-600 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm"
          >
            Collaborate
          </Link>
          <Link 
            href="/ai-journey" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-pink-600 text-pink-600 bg-transparent hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors duration-200"
          >
            Explore AI Journey
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}