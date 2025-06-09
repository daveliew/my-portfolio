'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout, Card, SectionHeader, CTAButton } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';
import { SustainabilityData } from '@/types/sustainability';
import sustainabilityData from '@/data/sustainability.json';

export default function SustainabilityPage() {
  const data = sustainabilityData as SustainabilityData;
  const { mission, vision, currentProjects, keyLearnings, nextSteps } = data;

  return (
    <PageLayout
      title="Sustainability"
      description={mission}
    >

      {/* Vision */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
        <p className="text-lg">{vision}</p>
      </motion.section>

      {/* Current Projects */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="Current Projects" />
        
        <div className="space-y-8">
          {currentProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-64 h-48 relative bg-gray-200 dark:bg-gray-700">
                  {/* Uncomment when you have actual images */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                  {/* Placeholder for now */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-4">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Key Learnings" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {keyLearnings.map((learning, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-3">{learning.title}</h3>
              <p>{learning.description}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Next Steps" />
        
        <ul className="list-disc pl-6 space-y-3">
          {nextSteps.map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ul>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        {...sectionAnimation(4)}
        className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center"
      >
        <h2 className="text-xl font-semibold mb-4">Interested in Sustainability & AI?</h2>
        <p className="mb-6">I&apos;m always looking for collaborators, advisors, or just fellow enthusiasts to discuss ideas and potential projects.</p>
        <CTAButton href="/contact" className="bg-green-600 hover:bg-green-700">
          Get in Touch
        </CTAButton>
      </motion.section>
    </PageLayout>
  );
} 