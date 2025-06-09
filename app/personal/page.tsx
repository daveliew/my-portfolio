'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout, Card } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import { PersonalData } from '@/types/personal';
import personalData from '@/data/personal.json';

export default function PersonalPage() {
  const data = personalData as PersonalData;
  const { virtuousCycle } = data;
  
  // Color mappings for phases
  const colorMappings = {
    time: { text: 'text-yellow-500', border: 'border-yellow-500' },
    knowledge: { text: 'text-green-500', border: 'border-green-500' },
    wealth: { text: 'text-blue-500', border: 'border-blue-500' },
  };

  return (
    <PageLayout
      title="Life System"
      description="My work is guided by a virtuous cycle: building time, capturing knowledge, creating wealth, and reinvesting for sustainable impact. This philosophy shapes my approach to life and work."
      maxWidth="5xl"
    >

      {/* Virtuous Cycle Overview */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">{virtuousCycle.title}</h2>
        <p className="text-lg text-center mb-2">{virtuousCycle.subtitle}</p>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{virtuousCycle.description}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {virtuousCycle.phases.map((phase) => {
            const colors = colorMappings[phase.color];
            return (
              <Card key={phase.title} className={`border-t-4 ${colors.border} p-6 flex flex-col items-center`}>
                <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>{phase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">{phase.description}</p>
                <div className="space-y-2 w-full">
                  {phase.examples.map(example => (
                    <div key={example} className="bg-gray-100 dark:bg-gray-700 rounded px-3 py-2 text-center text-sm">{example}</div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </motion.section>
    </PageLayout>
  );
} 