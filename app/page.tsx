'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CTAButton } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

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
          {...fadeInUp()}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dave Liew</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Systems Implementation Pioneer
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Architecting the bridge between human wisdom and artificial intelligence for the next generation.
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Building complementary human-AI systems where moral agency, creativity, and embodied wisdom remain our greatest assets.
          </p>
        </motion.div>
      </section>

      {/* Now/Current Focus Section */}
      <motion.section 
        {...sectionAnimation(0)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Pioneering in Progress</h2>
          <p className="text-lg">
            Creating living laboratories for human-AI collaboration through real-world implementations. 
            Testing complementarity models, documenting wisdom frameworks, and building the playbooks 
            my children will need to thrive in an AI-inhabited world.
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
        {...sectionAnimation(1)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6">The Triangle Foundation</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Foundation 1: Self-Discovery */}
          <Card hover className="p-6">
            <h3 className="text-xl font-semibold mb-3">Self-Discovery</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Understanding My Nature</p>
            <p className="mb-4">Working with ADHD patterns, embodied wisdom, and moral agency. The foundation for authentic human-AI collaboration starts with knowing yourself.</p>
            <Link href="/personal" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              Explore my philosophy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
          
          {/* Foundation 2: Family/Legacy */}
          <Card hover className="p-6">
            <h3 className="text-xl font-semibold mb-3">Family Generation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Building for Tomorrow</p>
            <p className="mb-4">Modeling adaptive strategies for an AI-inhabited world. Every system I build is a lesson for the next generation.</p>
            <Link href="/ai-journey" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              See the journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
          
          {/* Foundation 3: Wealth Generation */}
          <Card hover className="p-6">
            <h3 className="text-xl font-semibold mb-3">Wealth Generation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Funding the Exploration</p>
            <p className="mb-4">Creating multiple resilient revenue streams to fund the exploration into human-AI collaboration models and civilizational wisdom.</p>
            <Link href="/work" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
              See my work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Card>
        </div>
      </motion.section>
      
      {/* Enhanced Call to Action */}
      <motion.section 
        {...sectionAnimation(2)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Join the Human-AI Collaboration Experiment</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Ready to pioneer complementary intelligence systems? Let&apos;s build the frameworks 
          our children will need to thrive in an AI-inhabited world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/contact">
            Join the Lab
          </CTAButton>
          <CTAButton href="/ai-journey" variant="secondary">
            See the Experiments
          </CTAButton>
        </div>
      </motion.section>
    </div>
  );
}
