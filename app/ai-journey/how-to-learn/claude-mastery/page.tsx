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
      href: '/ai-journey/how-to-learn/claude-mastery/prompt-engineering',
      level: 'Beginner to Intermediate',
      time: '2-3 hours'
    },
    {
      title: 'Anthropic Cookbook Examples',
      description: 'Explore working code examples and implementations from Anthropic\'s comprehensive cookbook.',
      skills: ['Code Patterns', 'API Integration', 'Real-world Applications', 'Best Practices'],
      href: '/ai-journey/how-to-learn/claude-mastery/cookbook-examples',
      level: 'Intermediate',
      time: '3-4 hours'
    },
    {
      title: 'Developer Console & Workbench',
      description: 'Learn to use Anthropic\'s Developer Console and Workbench for experimentation and development.',
      skills: ['Console Navigation', 'Workbench Features', 'Testing & Evaluation', 'Prompt Testing'],
      href: '/ai-journey/how-to-learn/claude-mastery/developer-console',
      level: 'Beginner',
      time: '1-2 hours'
    }
  ];

  const advancedFeatures = [
    {
      title: 'Tool Use & Function Calling',
      description: 'Implement Claude\'s tool use capabilities to extend functionality with external APIs and functions.',
      skills: ['Function Calling', 'API Integration', 'Tool Definition', 'Error Handling'],
      href: '/ai-journey/how-to-learn/claude-mastery/tool-use',
      level: 'Intermediate to Advanced',
      time: '4-5 hours'
    },
    {
      title: 'Computer Use Capabilities',
      description: 'Explore Claude\'s groundbreaking computer use features for desktop automation and interaction.',
      skills: ['Desktop Automation', 'UI Interaction', 'Computer Vision', 'Action Planning'],
      href: '/ai-journey/how-to-learn/claude-mastery/computer-use',
      level: 'Advanced',
      time: '3-4 hours'
    },
    {
      title: 'Vision & Multimodal Inputs',
      description: 'Harness Claude\'s vision capabilities to process and analyze visual information alongside text.',
      skills: ['Image Analysis', 'Chart Reading', 'Document Processing', 'Visual Question Answering'],
      href: '/ai-journey/how-to-learn/claude-mastery/vision-multimodal',
      level: 'Intermediate',
      time: '2-3 hours'
    },
    {
      title: 'Model Context Protocol (MCP)',
      description: 'Build advanced applications using the Model Context Protocol for enhanced AI workflows.',
      skills: ['MCP Architecture', 'Context Management', 'Workflow Integration', 'Server Setup'],
      href: '/ai-journey/how-to-learn/claude-mastery/model-context-protocol',
      level: 'Advanced',
      time: '4-6 hours'
    },
    {
      title: 'Retrieval Augmented Generation (RAG)',
      description: 'Implement RAG systems to enhance Claude\'s responses with external knowledge bases.',
      skills: ['Vector Databases', 'Embedding Models', 'Retrieval Systems', 'Context Integration'],
      href: '/ai-journey/how-to-learn/claude-mastery/retrieval-augmented-generation',
      level: 'Intermediate to Advanced',
      time: '5-6 hours'
    }
  ];

  return (
    <AIJourneySubpageLayout
      title="Claude Mastery"
      description="Comprehensive learning path for mastering Claude's capabilities and Anthropic's ecosystem"
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
                <span>200K+ token context window for complex applications</span>
              </li>
            </ul>
          </div>
        </Card>
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