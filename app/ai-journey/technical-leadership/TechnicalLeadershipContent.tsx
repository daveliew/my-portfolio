'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import aiJourneyData from '@/data/ai-journey.json';

export default function TechnicalLeadershipContent() {
  const techLeadershipPath = aiJourneyData.learningPaths.find(
    path => path.id === 'technical-leadership'
  );

  if (!techLeadershipPath) {
    return <div>Learning path not found</div>;
  }

  return (
    <AIJourneySubpageLayout
      title={techLeadershipPath.title}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
      ]}
      description={techLeadershipPath.description}
    >
      {/* Overview Section */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="Overview" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {techLeadershipPath.overview}
          </p>
          
          {/* Hard-Won Insights */}
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">💡 Hard-Won Insights</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>The 69→10 Tools Lesson:</strong> Complexity explodes without architectural oversight</li>
              <li>• <strong>The $50K stdout Mistake:</strong> Protocol compliance is a business risk, not just technical debt</li>
              <li>• <strong>The 2-Minute Rule:</strong> If users can&apos;t succeed in 2 minutes, the architecture failed</li>
              <li>• <strong>The 10x Question:</strong> Always ask &ldquo;Will this work at 10x scale?&rdquo; before building</li>
            </ul>
          </div>
        </Card>
      </motion.section>

      {/* Learning Objectives */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Learning Objectives" />
        <Card className="p-6">
          <ul className="space-y-3">
            {techLeadershipPath.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-lg">▸</span>
                <span className="text-gray-600 dark:text-gray-300">{objective}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.section>

      {/* Learning Path Phases */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Learning Path Phases" />
        <div className="space-y-8">
          {techLeadershipPath.phases.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {phase.description}
              </p>
              
              <div className="grid md:grid-cols-1 gap-4">
                {phase.modules.map((module, moduleIndex) => (
                  <div 
                    key={moduleIndex} 
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                  >
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                      {module.title}
                    </h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex} 
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Process & Next Steps */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Learning Process" />
        <Card className="p-6">
          <ol className="space-y-3">
            {techLeadershipPath.process.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="font-semibold text-blue-600 dark:text-blue-400 mr-3">
                  {index + 1}.
                </span>
                <span className="text-gray-600 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      </motion.section>

      {/* Metadata */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <Card className="p-6 bg-gray-50 dark:bg-gray-800">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Prerequisites</h4>
              <ul className="space-y-1">
                {techLeadershipPath.metadata.prerequisites.map((prereq, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    • {prereq}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Target Audience</h4>
              <ul className="space-y-1">
                {techLeadershipPath.metadata.targetAudience.map((audience, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    • {audience}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-medium">Level:</span> {techLeadershipPath.metadata.level} | 
              <span className="font-medium ml-4">Duration:</span> {techLeadershipPath.metadata.duration}
            </p>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
}