'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function PersonalPage() {
  // Life System / Virtuous Cycle content
  const virtuousCycle = {
    title: 'The Virtuous Cycle',
    subtitle: 'Build Time → Capture Knowledge → Create Wealth → Reinvest',
    description: 'A virtuous cycle that compounds across seasons in life',
    influences: `This cycle mirrors philosophical influences like Jocko Willink's "Discipline Equals Freedom", Naval Ravikant's leverage concepts, and Charlie Munger's mental models – each system representing a different form of leverage.`,
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Life System</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My work is guided by a virtuous cycle: building time, capturing knowledge, creating wealth, and reinvesting for sustainable impact. This philosophy shapes my approach to life and work.
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
          {virtuousCycle.systems.map((system) => (
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
    </div>
  );
} 