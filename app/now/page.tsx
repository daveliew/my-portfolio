'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NowPage() {
  // This would ideally come from a CMS or data file in the future
  const nowData = {
    lastUpdated: "June 2023",
    focusAreas: [
      {
        title: "Sustainability Non-Profit",
        description: "Working on developing an agentic AI system to help match resources and needs for sustainability initiatives.",
        progress: "Currently in the research phase, exploring existing solutions and identifying key requirements.",
        nextSteps: "Building a proof-of-concept prototype for initial testing with potential users."
      },
      {
        title: "Business Innovation",
        description: "Implementing AI solutions in my speech therapy and corporate gifting businesses.",
        progress: "Have completed initial analysis of operational bottlenecks and identified opportunities for automation.",
        nextSteps: "Developing an agentic system for customer communication and personalized recommendations."
      },
      {
        title: "Tech Education",
        description: "Documenting my journey learning and implementing agentic AI technologies.",
        progress: "Building this portfolio site to share insights and progress.",
        nextSteps: "Planning a series of tutorials and case studies based on my experiments."
      }
    ],
    recentUpdates: [
      {
        date: "June 15, 2023",
        title: "Portfolio Site Redesign",
        description: "Started reorganizing my portfolio site to better showcase the three pillars of my work and make my journey more accessible to others."
      },
      {
        date: "June 10, 2023",
        title: "Sustainability Agent Research",
        description: "Completed initial research on using agentic AI for resource matching in sustainability contexts. Identified key challenges and potential solutions."
      },
      {
        date: "June 5, 2023",
        title: "Business Process Analysis",
        description: "Mapped current business processes and identified opportunities for AI integration in my speech therapy practice."
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Now</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A snapshot of what I'm focused on right now. Last updated: {nowData.lastUpdated}
        </p>
      </motion.div>

      {/* Current Focus Areas */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Current Focus Areas</h2>
        
        <div className="space-y-8">
          {nowData.focusAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="mb-4">{area.description}</p>
              
              <div className="mb-3">
                <span className="font-medium">Current Progress:</span>
                <p className="ml-0 mt-1">{area.progress}</p>
              </div>
              
              <div>
                <span className="font-medium">Next Steps:</span>
                <p className="ml-0 mt-1">{area.nextSteps}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Recent Updates */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Recent Updates</h2>
        
        <div className="space-y-4">
          {nowData.recentUpdates.map((update, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
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
        transition={{ duration: 0.5, delay: 0.4 }}
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