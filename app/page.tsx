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
          
          {/* Fitzgerald Quote - Intellectual Signature */}
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-3 text-center">
              &ldquo;The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.&rdquo;
            </blockquote>
            <footer className="text-center text-gray-500 dark:text-gray-400 text-sm mb-3">
              — F. Scott Fitzgerald
            </footer>
            <p className="text-center text-blue-700 dark:text-blue-300 font-medium">
              This is my operating system for pioneering human-AI collaboration.
            </p>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Architecting the bridge between human wisdom and artificial intelligence for the next generation.
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Building complementary human-AI systems where moral agency, creativity, and embodied wisdom remain our greatest assets.
          </p>
        </motion.div>
      </section>


      {/* What I'm Building - Simple & Powerful */}
      <motion.section 
        {...sectionAnimation(0)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">What I&apos;m Building</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card hover className="p-6 text-center">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Philosophy</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">The intellectual framework for human-AI collaboration</p>
            <Link href="/philosophy" className="text-blue-600 dark:text-blue-400 hover:underline">
              See the framework →
            </Link>
          </Card>
          
          <Card hover className="p-6 text-center">
            <div className="text-3xl mb-4">🧪</div>
            <h3 className="text-xl font-semibold mb-3">Laboratory</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Live experiments in complementary intelligence systems</p>
            <Link href="/laboratory" className="text-blue-600 dark:text-blue-400 hover:underline">
              See the experiments →
            </Link>
          </Card>
          
          <Card hover className="p-6 text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">AI Journey</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Learning frameworks for the next generation</p>
            <Link href="/ai-journey" className="text-blue-600 dark:text-blue-400 hover:underline">
              See the journey →
            </Link>
          </Card>
        </div>
      </motion.section>

      {/* Live Proof - Simplified */}
      <motion.section 
        {...sectionAnimation(1)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Live Proof</h2>
        <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">⚡ Three-Hat Framework</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Testing rapid context switching: Systems Architect → Product Manager → Implementation
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Active on 3 client projects
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">🧠 ADHD-AI Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Hypothesis: ADHD cognitive patterns match AI processing speed
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                In development
              </p>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Professional Experience - Quick Overview */}
      <motion.section 
        {...sectionAnimation(2)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Professional Foundation</h2>
        <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20 border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+ Years</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Building ventures from 0→1</p>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">S$1M+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Revenue growth delivered</p>
            </div>
            
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">4 Ventures</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Co-founded & scaled</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Meta</strong> • <strong>Unity Technologies</strong> • <strong>Michelin-recognized restaurant</strong> • <strong>Education startups</strong>
            </p>
            <Link 
              href="/laboratory#professional-background" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              See full professional background →
            </Link>
          </div>
        </Card>
      </motion.section>
      
      {/* Simple, Powerful CTA */}
      <motion.section 
        {...sectionAnimation(3)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Pioneer?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Let&apos;s build the frameworks our children will need to thrive with AI.
        </p>
        <CTAButton href="/contact">
          Join the Experiment
        </CTAButton>
      </motion.section>
    </div>
  );
}
