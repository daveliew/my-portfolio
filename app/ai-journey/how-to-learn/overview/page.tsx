'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function LearningOverviewPage() {
  const learningPaths = [
    {
      title: 'LLM Handling Path',
      description: 'Learn how to effectively work with Large Language Models for content generation, summarization, and transformation.',
      skills: ['Prompt Engineering', 'Context Management', 'Output Evaluation', 'Fine-tuning Basics'],
      href: '/ai-journey/how-to-learn/llm-handling',
      level: 'Beginner to Intermediate',
      time: '4-6 weeks'
    },
    {
      title: 'Agent & RAG Path',
      description: 'Build intelligent agents and implement Retrieval Augmented Generation for more capable AI systems.',
      skills: ['Agent Architecture', 'RAG Implementation', 'Tool & API Integration', 'Memory Systems'],
      href: '/ai-journey/how-to-learn/agent-rag',
      level: 'Intermediate to Advanced',
      time: '6-8 weeks'
    },
    {
      title: 'Three-Hat Technical Leadership',
      description: 'Master the integration of systems architecture, product management, and hands-on implementation for comprehensive AI solutions.',
      skills: ['Systems Architecture', 'Product Strategy', 'Quality Engineering', 'Technical Leadership'],
      href: '/ai-journey/how-to-learn/technical-leadership',
      level: 'Intermediate to Advanced',
      time: '8-10 weeks'
    }
  ];

  return (
    <AIJourneySubpageLayout
      title="AI Learning Overview"
      description="Structured paths to develop practical AI skills without getting lost in the hype"
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Learning Philosophy" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My approach to learning AI focuses on building practical capabilities that deliver immediate value while 
            developing a foundation for long-term growth. Rather than trying to master everything at once, I&apos;ve created 
            focused learning paths that build complementary skills.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Each path is designed to take you from theory to practical implementation, with an emphasis on building 
            real-world projects that demonstrate your capabilities.
          </p>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The Three-Hat Framework</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              A key insight from my journey: successful AI implementation requires wearing three distinct hats:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="font-medium text-blue-700 dark:text-blue-400 mr-2">🏗️ Systems Architect:</span>
                <span>Think big picture, prevent technical debt, design for 10x scale</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-green-700 dark:text-green-400 mr-2">📊 Product Manager:</span>
                <span>Optimize for user value, data-driven decisions, business impact</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-purple-700 dark:text-purple-400 mr-2">💻 Implementation:</span>
                <span>Quality gates, developer experience, continuous improvement</span>
              </li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* Learning Paths */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Learning Paths" />
        <div className="grid md:grid-cols-2 gap-6">
          {learningPaths.map((path) => (
            <Card key={path.title} className="overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{path.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map(skill => (
                      <span key={skill} className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Level: {path.level}</span>
                  <span>Time: {path.time}</span>
                </div>
                
                <Link 
                  href={path.href} 
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                >
                  View Path
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Learning Resources */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="General Resources" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beyond the structured learning paths, these resources provide valuable context and deeper understanding of AI concepts:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Stanford CS324: Large Language Models (freely available course materials)</li>
            <li>Andrej Karpathy&apos;s Neural Networks and Transformers videos</li>
            <li>Andrew Ng&apos;s Deep Learning Specialization</li>
            <li>Hands-on experience building projects with Hugging Face, OpenAI, Anthropic and more</li>
            <li>The &quot;Full Stack LLM Bootcamp&quot; series from a16z</li>
          </ul>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 