'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout, Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import { NowData } from '@/types/now';
import nowData from '@/data/now.json';

export default function NowPage() {
  const data = nowData as NowData;
  const { focusAreas, roadmap, recentUpdates, lastUpdated } = data;

  return (
    <PageLayout
      title="Now"
      description="What I'm working on and learning right now. This page is a living record of my current focus, projects, and learning journey."
      maxWidth="5xl"
      lastUpdated={lastUpdated}
    >

      {/* Current Focus Areas */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-16"
      >
        <SectionHeader title="Current Focus" />
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <Card key={area.title} className="p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">{area.description}</p>
              <span className="text-xs font-medium mb-1 text-gray-500">System: <span className="font-semibold">{area.system}</span></span>
              <span className="text-xs font-medium mb-1 text-gray-500">Progress: <span className="font-semibold">{area.progress}</span></span>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Learning Roadmap */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-16"
      >
        <SectionHeader title="Learning Roadmap" />
        <div className="space-y-8">
          {roadmap.map((item) => (
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
        {...sectionAnimation(2)}
      >
        <SectionHeader title="Recent Updates" />
        <div className="space-y-4">
          {recentUpdates.map((update) => (
            <div key={update.title} className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">{update.date}</p>
              <h3 className="font-medium mb-1">{update.title}</h3>
              <p>{update.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

    </PageLayout>
  );
} 