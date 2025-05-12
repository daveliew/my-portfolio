'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Image import removed as it's not being used
import { 
  SkillsSection, 
  RoadmapTimeline, 
  SkillsMatrix, 
  FoundationSkills, 
  CombinedCapabilities 
} from '@/components/skills';

// Import experience and skills data from data files
import experienceData from '@/data/experiences.json';
import skillsData from '@/data/skills.json';
import aiJourneyData from '@/data/ai-journey.json';
import { Skill } from '@/types/skills';

export default function SkillsExperiencePage() {
  // Convert skills data to the proper format for SkillsSection
  const formattedSkills: Skill[] = skillsData.skills.map(skill => ({
    name: skill.name,
    // Convert the subskills object to the required Record format
    subskills: Object.fromEntries(
      Object.entries(skill.subskills).map(([key, value]) => [key, value])
    ),
    description: skillsData.advancedCapabilities.find(cap => 
      cap.intersection.includes(skill.name)
    )?.evidence.description || ""
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Skills & Experience</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
          My journey spans technology, business, and sustainability, combining technical expertise with a purpose-driven approach.
        </p>
      </motion.div>

      {/* Philosophy/Life System Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          My Philosophy
        </h2>
        
        <p className="text-lg mb-8">
          I believe in building a balanced life system that harmonizes technology with humanity. My approach combines technical expertise with human-centered thinking, driven by three core principles:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Purpose-Driven Technology",
              description: "Technology should solve real problems and enhance human lives. Every tool I build aims to address a genuine need or create meaningful value."
            },
            {
              title: "Continuous Learning",
              description: "The AI landscape evolves rapidly, requiring constant adaptation and growth. I commit to ongoing experimentation and knowledge sharing."
            },
            {
              title: "Sustainable Impact",
              description: "Long-term thinking guides my work. I design solutions that not only solve immediate challenges but contribute to sustainable systems and positive futures."
            }
          ].map((principle, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills Matrix Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Skills Matrix
        </h2>
        
        <SkillsMatrix skillsMap={aiJourneyData.journey.skillsMap} />
      </motion.section>

      {/* Skills Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Core Skills
        </h2>
        
        <SkillsSection data={formattedSkills} />
      </motion.section>

      {/* Foundation Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Foundation Skills
        </h2>
        
        <FoundationSkills foundationSkills={aiJourneyData.journey.foundationSkills} />
      </motion.section>

      {/* Combined Capabilities Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Combined Capabilities
        </h2>
        
        <CombinedCapabilities combinedCapabilities={aiJourneyData.journey.combinedCapabilities} />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experienceData.professionalAreas.slice(0, 2).flatMap(area => 
            area.experiences.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company || "Independent"}</p>
                  
                  <h4 className="font-medium mb-2">Key Highlights:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.keySkills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.section>

      {/* Roadmap Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Learning Roadmap
        </h2>
        
        <RoadmapTimeline milestones={aiJourneyData.journey.roadmap} />
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Interested in Collaboration?</h2>
        <p className="mb-6">I&apos;m always looking to connect with like-minded professionals and organizations.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition duration-300"
          >
            Get in Touch
          </Link>
          <a 
            href="/dave-liew-resume.pdf" 
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-sm transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* Return Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
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