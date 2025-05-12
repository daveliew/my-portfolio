'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SkillsExperiencePage() {
  // This would ideally come from a data file in the future
  const data = {
    philosophy: {
      title: "My Philosophy",
      description: "I believe in building a balanced life system that harmonizes technology with humanity. My approach combines technical expertise with human-centered thinking, driven by three core principles:",
      principles: [
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
      ]
    },
    skills: [
      {
        category: "AI & Machine Learning",
        items: [
          { name: "Agentic AI Systems", level: 85 },
          { name: "LLM Prompt Engineering", level: 90 },
          { name: "ML Model Development", level: 75 },
          { name: "Retrieval Augmented Generation", level: 80 }
        ]
      },
      {
        category: "Software Development",
        items: [
          { name: "Frontend (React/Next.js)", level: 85 },
          { name: "Backend (Node.js, Python)", level: 80 },
          { name: "TypeScript/JavaScript", level: 88 },
          { name: "API Integration", level: 90 }
        ]
      },
      {
        category: "Business & Strategy",
        items: [
          { name: "Business Model Design", level: 80 },
          { name: "Product Management", level: 85 },
          { name: "Sustainability Strategy", level: 88 },
          { name: "Stakeholder Management", level: 92 }
        ]
      }
    ],
    experience: [
      {
        title: "AI Engineer & Sustainability Consultant",
        company: "Freelance",
        period: "2022 - Present",
        description: "Building agentic AI systems for sustainability-focused organizations and businesses. Consulting on AI implementation strategies that align with ESG goals.",
        achievements: [
          "Developed resource-matching AI system for non-profit organizations",
          "Created automated reporting tool for sustainability metrics",
          "Advised 5+ organizations on AI strategy and implementation"
        ]
      },
      {
        title: "Founder & CEO",
        company: "Speech Therapy Practice",
        period: "2018 - Present",
        description: "Founded and scaled a specialized speech therapy practice, integrating AI solutions for operational efficiency and personalized care.",
        achievements: [
          "Grew practice to serve 100+ clients monthly",
          "Implemented AI-powered patient management system",
          "Reduced administrative overhead by 40% through automation"
        ]
      },
      {
        title: "Co-founder",
        company: "Corporate Gifting Business",
        period: "2016 - Present",
        description: "Co-founded a corporate gifting business with a focus on sustainable products and efficient operations through technology integration.",
        achievements: [
          "Established partnerships with 20+ sustainable product vendors",
          "Built custom inventory and order management system",
          "Achieved 30% year-over-year growth"
        ]
      }
    ]
  };

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
          {data.philosophy.title}
        </h2>
        
        <p className="text-lg mb-8">
          {data.philosophy.description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {data.philosophy.principles.map((principle, index) => (
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

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Skills
        </h2>
        
        <div className="space-y-12">
          {data.skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skillCategory.category}</h3>
              
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
          {data.experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{job.period}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company}</p>
                <p className="mb-4">{job.description}</p>
                
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Interested in Collaboration?</h2>
        <p className="mb-6">I'm always looking to connect with like-minded professionals and organizations.</p>
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