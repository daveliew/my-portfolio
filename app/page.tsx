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
            AI Strategist & Consultant
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Crafting agentic AI that transforms operations, empowers teams, and delights customers.
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
            Building agentic AI for sustainability initiatives, implementing AI solutions in my businesses, 
            and documenting my technical journey to help others navigate the AI landscape.
          </p>
          <div className="mt-4">
            <Link href="/now" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              See more about what I&apos;m doing now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Three Pillars Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6">My Work</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pillar 1: Sustainability */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="mb-4">Using agentic AI to drive environmental impact and sustainable practices through innovative technology solutions.</p>
            <Link href="/sustainability" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Pillar 2: Business */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">Business</h3>
            <p className="mb-4">Applying AI innovation to transform speech therapy and corporate gifting businesses with streamlined operations and enhanced customer experiences.</p>
            <Link href="/business" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Pillar 3: Tech Ed */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3">Tech Education</h3>
            <p className="mb-4">Sharing my AI journey, facilitating alumni connections, and building resources for the next generation of AI engineers and builders.</p>
            <Link href="/tech-ed" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Interested in Collaborating?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          I&apos;m always open to discussing new projects, collaborative opportunities, 
          or just exchanging ideas about AI and technology.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
}
