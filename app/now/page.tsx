'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NowPage() {
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
      date: 'May 28, 2025',
      title: 'Portfolio Site Redesign',
      description: 'Completed major portfolio refresh with three content pillars: Personal, Work, and AI Journey.',
    },
    {
      date: 'May 20, 2025',
      title: 'Sustainability Agent Research',
      description: 'Completed initial research on agentic AI for sustainability resource matching.',
    },
    {
      date: 'May 15, 2025',
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Now</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          What I'm working on and learning right now. This page is a living record of my current focus, projects, and learning journey.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Last updated: May 2025
        </p>
      </motion.div>

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