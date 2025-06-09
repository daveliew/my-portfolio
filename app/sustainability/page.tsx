'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SustainabilityPage() {
  // This would ideally come from a CMS or data file in the future
  const sustainabilityData = {
    mission: "To leverage agentic AI in creating sustainable solutions that address environmental challenges and promote responsible resource usage.",
    vision: "A world where technology and sustainability work in harmony, with AI systems that help us make better environmental decisions and optimize resource allocation.",
    currentProjects: [
      {
        title: "Resource Matching Agent",
        description: "An AI system that connects excess resources from one organization with the needs of another, reducing waste and promoting circular economy principles.",
        status: "Research Phase",
        image: "/images/resource-matching.jpg" // You'll need to add this image
      },
      {
        title: "Environmental Impact Dashboard",
        description: "A real-time data visualization tool that helps organizations understand and reduce their environmental footprint.",
        status: "Planning",
        image: "/images/impact-dashboard.jpg" // You'll need to add this image
      }
    ],
    keyLearnings: [
      {
        title: "AI Model Efficiency",
        description: "Discovered that fine-tuning smaller models for specific sustainability tasks often yields better results than using general-purpose large models, while consuming less energy."
      },
      {
        title: "Data Challenges",
        description: "Environmental data is often siloed, inconsistent, or incomplete. Building reliable data pipelines is crucial for effective sustainability AI applications."
      },
      {
        title: "Stakeholder Engagement",
        description: "Technology alone isn't enough – successful sustainability initiatives require early and continuous engagement with all stakeholders to ensure adoptions and impact."
      }
    ],
    nextSteps: [
      "Build a proof-of-concept for the Resource Matching Agent",
      "Establish partnerships with 2-3 organizations for initial testing",
      "Develop a sustainability AI assessment framework to evaluate impact"
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Sustainability</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          {sustainabilityData.mission}
        </p>
      </motion.div>

      {/* Vision */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
        <p className="text-lg">{sustainabilityData.vision}</p>
      </motion.section>

      {/* Current Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Current Projects</h2>
        
        <div className="space-y-8">
          {sustainabilityData.currentProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
            </div>
          ))}
        </div>
      </motion.section>

      {/* Key Learnings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Key Learnings</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {sustainabilityData.keyLearnings.map((learning, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">{learning.title}</h3>
              <p>{learning.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Next Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Next Steps</h2>
        
        <ul className="list-disc pl-6 space-y-3">
          {sustainabilityData.nextSteps.map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ul>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center"
      >
        <h2 className="text-xl font-semibold mb-4">Interested in Sustainability & AI?</h2>
        <p className="mb-6">I&apos;m always looking for collaborators, advisors, or just fellow enthusiasts to discuss ideas and potential projects.</p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-sm transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.section>

      {/* Return Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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