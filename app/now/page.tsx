'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NowPage() {
  // Life System / Virtuous Cycle content
  const virtuousCycle = {
    title: 'The Virtuous Cycle',
    subtitle: 'Build Time → Capture Knowledge → Create Wealth → Reinvest',
    description: 'A virtuous cycle that compounds across seasons in life',
    influences: `This cycle mirrors philosophical influences like Jocko Willink\'s \"Discipline Equals Freedom\", Naval Ravikant\'s leverage concepts, and Charlie Munger\'s mental models – each system representing a different form of leverage.`,
    systems: [
      {
        title: 'Time Multiplier',
        color: 'text-yellow-500',
        border: 'border-yellow-500',
        items: ['AI Agents', 'Automation Flows', 'Cloud Infrastructure'],
        impact: 'Each hour invested = 10+ hours returned',
      },
      {
        title: 'Knowledge Amplifier',
        color: 'text-green-500',
        border: 'border-green-500',
        items: ['Knowledge Management', 'Content Creation', 'AI Enhancement'],
        impact: 'Insights reach 100x more people',
      },
      {
        title: 'Wealth Multiplier',
        color: 'text-blue-500',
        border: 'border-blue-500',
        items: ['Digital Products', 'Automated Marketing', 'Passive Distribution'],
        impact: 'Financial freedom for meaning over obligation',
      },
    ],
  };

  // Current focus areas
  const focusAreas = [
    {
      title: 'Sustainability Non-Profit',
      description: 'Developing an agentic AI system to match resources and needs for sustainability initiatives.',
      system: 'Time Multiplier',
      progress: 'Research phase, building proof-of-concept.',
    },
    {
      title: 'Business Innovation',
      description: 'Implementing AI in speech therapy and corporate gifting businesses for automation and growth.',
      system: 'Wealth Multiplier',
      progress: 'Automating customer communication and operations.',
    },
    {
      title: 'Tech Education',
      description: 'Documenting my AI journey and building resources for the next generation of builders.',
      system: 'Knowledge Amplifier',
      progress: 'Building portfolio site and planning tutorials.',
    },
  ];

  // Learning roadmap (example)
  const roadmap = [
    {
      quarter: 'Q2 2025',
      title: 'Build Agent-based Research Assistant',
      description: 'Implement a system of autonomous agents for market research and compiling findings.',
      requiredSkills: ['Autonomous Agents', 'AI Workflow Integration', 'Data Management'],
      foundationSkills: ['Pattern Recognition', 'Strategic Thinking', 'Technical Skills'],
      progress: 20,
      status: 'In Progress',
    },
    {
      quarter: 'Q3 2025',
      title: 'Develop AI Strategy Workshop',
      description: 'Create a workshop framework to help businesses identify and implement AI opportunities.',
      requiredSkills: ['AI Workflow Integration', 'Business Process Analysis', 'Strategic Planning'],
      foundationSkills: ['Stakeholder Engagement', 'System Design', 'Team Collaboration'],
      progress: 0,
      status: 'Planning',
    },
  ];

  // Recent updates
  const recentUpdates = [
    {
      date: 'June 15, 2023',
      title: 'Portfolio Site Redesign',
      description: 'Reorganized my portfolio to combine philosophy and current work for better clarity.',
    },
    {
      date: 'June 10, 2023',
      title: 'Sustainability Agent Research',
      description: 'Completed initial research on agentic AI for sustainability resource matching.',
    },
    {
      date: 'June 5, 2023',
      title: 'Business Process Analysis',
      description: 'Mapped business processes and identified AI integration opportunities in my speech therapy practice.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero/Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Now & Life System</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My work is guided by a virtuous cycle: building time, capturing knowledge, creating wealth, and reinvesting for sustainable impact. Here\'s how my philosophy shapes what I\'m working on right now.
        </p>
      </motion.div>

      {/* Virtuous Cycle / Life System */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">{virtuousCycle.title}</h2>
        <p className="text-lg text-center mb-2">{virtuousCycle.subtitle}</p>
        <p className="italic text-center text-gray-500 dark:text-gray-400 mb-4">{virtuousCycle.description}</p>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">{virtuousCycle.influences}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {virtuousCycle.systems.map((system, idx) => (
            <div key={system.title} className={`rounded-lg border-t-4 ${system.border} bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col items-center`}>
              <h3 className={`text-xl font-semibold mb-4 ${system.color}`}>{system.title}</h3>
              <div className="space-y-2 w-full">
                {system.items.map(item => (
                  <div key={item} className="bg-gray-900/80 dark:bg-gray-700 text-white rounded px-4 py-2 text-center text-base font-medium">{item}</div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 font-medium text-center"><span className="font-bold">Impact:</span> {system.impact}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Current Focus Areas */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Current Focus</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, idx) => (
            <div key={area.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">{area.description}</p>
              <span className="text-xs font-medium mb-1 text-gray-500">System: <span className="font-semibold">{area.system}</span></span>
              <span className="text-xs font-medium mb-1 text-gray-500">Progress: <span className="font-semibold">{area.progress}</span></span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Learning Roadmap */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Learning Roadmap</h2>
        <div className="space-y-8">
          {roadmap.map((item, idx) => (
            <div key={item.title} className="bg-gray-900/80 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <span className="text-sm text-gray-400 font-medium mb-2 md:mb-0">{item.quarter}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-700 text-white font-semibold">{item.status}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
              <p className="mb-2 text-gray-300">{item.description}</p>
              <div className="mb-2">
                <span className="font-semibold text-red-300">Required Skills: </span>
                {item.requiredSkills.map(skill => (
                  <span key={skill} className="inline-block bg-gray-700 text-white rounded px-2 py-1 text-xs mr-2 mb-1">{skill}</span>
                ))}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-blue-300">Foundation Skills Utilized: </span>
                {item.foundationSkills.map(skill => (
                  <span key={skill} className="inline-block bg-gray-700 text-white rounded px-2 py-1 text-xs mr-2 mb-1">{skill}</span>
                ))}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
              </div>
              <div className="text-right text-xs text-gray-400 mt-1">{item.progress}%</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Recent Updates */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Recent Updates</h2>
        <div className="space-y-4">
          {recentUpdates.map((update, idx) => (
            <div key={update.title} className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">{update.date}</p>
              <h3 className="font-medium mb-1">{update.title}</h3>
              <p>{update.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Return Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </motion.div>
    </div>
  );
} 