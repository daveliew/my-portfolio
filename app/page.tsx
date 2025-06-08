'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  useEffect(() => {
    // Handle initial page load with hash in URL
    if (typeof window !== 'undefined') {
      // Short timeout to ensure the page is fully loaded
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const elementId = hash.substring(1); // Remove the # character
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dave Liew</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Agentic AI Architect for Purpose-Driven Leaders
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Building intelligent systems that amplify human potential while creating sustainable impact through purposeful technology.
          </p>
        </motion.div>
      </section>

      {/* Now/Current Focus Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Currently Working On</h2>
          <p className="text-lg">
            Architecting agentic AI systems for sustainability initiatives, implementing intelligent automation 
            in purpose-driven businesses, and documenting proven methodologies to help other leaders navigate 
            the AI transformation journey.
          </p>
          <div className="mt-4">
            <Link href="/now" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              See my complete current focus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Three Pillars Preview - Aligned with PLAN.md */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6">My Approach</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pillar 1: Personal - Your Why */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">Personal</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Your &ldquo;Why&rdquo;</p>
            <p className="mb-4">The philosophy and life system that drives purposeful technology. Understanding the meaning behind the work creates sustainable impact.</p>
            <Link href="/personal" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Explore my philosophy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Pillar 2: Work - Your How */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">Work</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Your &ldquo;How&rdquo;</p>
            <p className="mb-4">Skills, experience, and proven methodologies for delivering value through agentic AI systems that solve real business challenges.</p>
            <Link href="/work" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              See my capabilities
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Pillar 3: AI Journey - Your What */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">AI Journey</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Your &ldquo;What&rdquo;</p>
            <p className="mb-4">Continuous learning, building, and exploration in AI. Documenting the path from foundation to advanced agentic systems.</p>
            <Link href="/ai-journey" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Follow my journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Enhanced Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform with Agentic AI?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Whether you're leading sustainability initiatives, scaling purpose-driven businesses, 
          or navigating your AI transformation journey — let's build something meaningful together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition duration-300"
          >
            Start a Conversation
          </Link>
          <Link 
            href="/ai-journey" 
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 dark:border-blue-400 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
          >
            Explore My Methodology
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
