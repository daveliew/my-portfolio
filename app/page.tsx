'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Visual Impact */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--deep-purple)]/5 via-transparent to-[var(--teal)]/5 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            {...fadeInUp()}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Dave Liew</h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Most people use AI to do more.<br className="hidden md:block" />
              I use it to do less.
            </p>
            
            {/* Key insight as visual callout */}
            <div className="relative py-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--deep-purple)] to-[var(--teal)]" />
              <blockquote className="pl-6">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent">
                  Time compounds faster than money.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  — learned after Meta, Unity, and a few ventures
                </p>
              </blockquote>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 bg-[var(--hot-pink)]/10 text-[var(--hot-pink)] rounded-full">WhatsApp insights</span>
              <span className="px-3 py-1 bg-[var(--teal)]/10 text-[var(--teal)] rounded-full">Self-thinking dashboards</span>
              <span className="px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full">Smart email systems</span>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Currently helping 3 businesses reclaim their time.<br/>
              Happy to chat about yours.
            </p>
          </motion.div>
          
          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Virtuous Cycle Visual - Properly Aligned */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Center glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[var(--deep-purple)]/10 to-[var(--teal)]/10 rounded-full blur-xl animate-pulse" />
                
                {/* Build Time - Top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--hot-pink)]/20 hover:border-[var(--hot-pink)]/40 transition-colors min-w-[140px] text-center">
                    <p className="text-[var(--hot-pink)] font-semibold text-sm">Build time</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Delete tasks</p>
                  </div>
                </div>
                
                {/* Capture Knowledge - Right */}
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--teal)]/20 hover:border-[var(--teal)]/40 transition-colors min-w-[140px] text-center">
                    <p className="text-[var(--teal)] font-semibold text-sm">Capture knowledge</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Learn patterns</p>
                  </div>
                </div>
                
                {/* Create Value - Bottom */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors min-w-[140px] text-center">
                    <p className="text-[var(--gold)] font-semibold text-sm">Create value</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Build tools</p>
                  </div>
                </div>
                
                {/* Share Freely - Left */}
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-[var(--deep-purple)]/20 hover:border-[var(--deep-purple)]/40 transition-colors min-w-[140px] text-center">
                    <p className="text-[var(--deep-purple)] font-semibold text-sm">Share freely</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Help others</p>
                  </div>
                </div>
                
                {/* Circular flow indicators */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--hot-pink)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--deep-purple)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated circle path */}
                  <circle 
                    cx="160" 
                    cy="160" 
                    r="120" 
                    fill="none" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    className="animate-spin-slow"
                    style={{ transformOrigin: 'center', animationDuration: '20s' }}
                  />
                  
                  {/* Arrows removed for cleaner look */}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
      {/* Combined 3-Hat Method & Framework */}
      <motion.section 
        {...sectionAnimation(0)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">
          How We Think Together: <span className="text-[var(--deep-purple)]">A Human-AI Framework</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Context Engineering through the <span className="text-[#F8B400]">3-Hat Method</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-2 border-[#0CC0DF]/30 bg-gradient-to-br from-[#0CC0DF]/5 to-transparent hover:border-[#0CC0DF]/60 transition-all">
            <div className="text-2xl mb-3">🏗️</div>
            <h3 className="text-lg font-semibold mb-3 text-[#0CC0DF]">Systems Architect Hat</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Step back to see patterns<br/>
              Find what&apos;s really broken<br/>
              Build something simple
            </p>
          </Card>
          
          <Card className="p-6 border-2 border-[#FF0081]/30 bg-gradient-to-br from-[#FF0081]/5 to-transparent hover:border-[#FF0081]/60 transition-all">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-3 text-[#FF0081]">Product Manager Hat</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Figure out what matters<br/>
              Say no to everything else<br/>
              Ship something useful
            </p>
          </Card>
          
          <Card className="p-6 border-2 border-[#F8B400]/30 bg-gradient-to-br from-[#F8B400]/5 to-transparent hover:border-[#F8B400]/60 transition-all">
            <div className="text-2xl mb-3">💻</div>
            <h3 className="text-lg font-semibold mb-3 text-[#F8B400]">Implementation Hat</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Code it myself<br/>
              See if it actually helps<br/>
              Keep improving it
            </p>
          </Card>
        </div>
        
        
        {/* Framework Integration */}
        <div className="max-w-3xl mx-auto mt-8">
          {/* Visual Flow - 3 Phases */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {/* Phase 1: Foundation */}
            <div className="text-center flex-1">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[var(--deep-purple)]/20 to-[var(--hot-pink)]/10 rounded-full flex items-center justify-center mb-2 ring-2 ring-[var(--deep-purple)]/30">
                <span className="text-lg">👁️</span>
              </div>
              <h3 className="font-semibold text-sm text-[var(--deep-purple)]">Foundation</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Human intuition guides</p>
            </div>
            
            <div className="hidden md:block text-gray-400 text-xl">→</div>
            
            {/* Phase 2: Collaboration */}
            <div className="text-center flex-1">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[var(--teal)]/20 to-[var(--emerald)]/10 rounded-full flex items-center justify-center mb-2 ring-2 ring-[var(--teal)]/30">
                <span className="text-lg">🤖</span>
              </div>
              <h3 className="font-semibold text-sm text-[var(--teal)]">Collaboration</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">AI amplifies capabilities</p>
            </div>
            
            <div className="hidden md:block text-gray-400 text-xl">→</div>
            
            {/* Phase 3: Evolution */}
            <div className="text-center flex-1">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[var(--gold)]/20 to-[var(--emerald)]/10 rounded-full flex items-center justify-center mb-2 ring-2 ring-[var(--gold)]/30">
                <span className="text-lg">🌟</span>
              </div>
              <h3 className="font-semibold text-sm text-[var(--gold)]">Evolution</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">New insights emerge</p>
            </div>
          </div>
          
          {/* Core Principle Card */}
          <Card className="p-5 bg-gradient-to-r from-[var(--deep-purple)]/5 to-transparent">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
              I&apos;m learning how to create spaces where human intuition and AI capabilities work together naturally.
            </p>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 italic">
              Context Engineering is the art of designing the informational environment where human intuition and AI capabilities converge.
            </p>
          </Card>
          
          {/* Active Projects Note */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Currently using this approach on <span className="font-semibold text-[#F8B400]">3 active projects</span>
          </p>
        </div>
      </motion.section>

      {/* Live Proof - Real but Protected with Visual Interest */}
      <motion.section 
        {...sectionAnimation(1)}
        className="py-12 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Recent Builds</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-[#0CC0DF] transition-colors">
                  WhatsApp Analytics Tool
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Industry: E-commerce<br/>
                  Result: <span className="text-[#F8B400] font-semibold">10x faster</span> customer insights<br/>
                  Stack: Python, MCP, Claude API
                </p>
                <p className="text-xs text-[var(--deep-purple)] mt-2">
                  <span className="font-semibold">Pattern discovered:</span> 80% of customer insights hide in unstructured WhatsApp data
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Under NDA</span>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-[#FF0081] transition-colors">
                  Business Intelligence Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Industry: Professional Services<br/>
                  Result: <span className="text-[#F8B400] font-semibold">15 hours/week</span> saved<br/>
                  Stack: React, SQL, Custom APIs
                </p>
                <p className="text-xs text-[var(--deep-purple)] mt-2">
                  <span className="font-semibold">Pattern discovered:</span> Manual data reconciliation wastes 3+ hours daily
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Under NDA</span>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow group md:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-2 group-hover:text-[#F8B400] transition-colors">
                  Email Automation System
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Industry: SaaS<br/>
                  Result: <span className="text-[#F8B400] font-semibold">1000+ emails</span> processed daily<br/>
                  Stack: Google Scripts, AI Classification
                </p>
                <p className="text-xs text-[var(--deep-purple)] mt-2">
                  <span className="font-semibold">Pattern discovered:</span> AI can classify intent 50x faster than rules-based systems
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Under NDA</span>
            </div>
          </Card>
        </div>
        
        <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
          Patterns and approaches available for discussion
        </p>
      </motion.section>

      {/* Why I Can Help - Authentic Version */}
      <motion.section 
        {...sectionAnimation(2)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">What I&apos;ve Learned</h2>
        <Card className="p-6">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              After years at different scales - from startups to Meta - I&apos;ve seen the same patterns everywhere.
              Smart people drowning in tasks that should be automated.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-[var(--deep-purple)]">Where I&apos;ve explored</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Meta - learned how things scale</li>
                  <li>• Unity - saw how systems connect</li>
                  <li>• Restaurant tech - discovered simplicity under pressure</li>
                  <li>• Various ventures - found what actually matters</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-[var(--teal)]">What I&apos;m building now</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Tools that understand WhatsApp conversations</li>
                  <li>• Dashboards that think before you ask</li>
                  <li>• Email systems that sort themselves</li>
                  <li>• Still learning something new daily</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 italic">
              The best part? Every business I help teaches me something new to share with the next one.
            </p>
          </div>
        </Card>
      </motion.section>
      
      {/* Gentle CTA */}
      <motion.section 
        {...sectionAnimation(3)}
        className="py-12 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Got a task that takes too long?
        </h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          I&apos;m exploring how AI can help delete it from your day.<br/>
          If something I&apos;ve built might help, let&apos;s chat.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Get in Touch
        </Link>
        
        <div className="mt-8">
          <Link 
            href="/philosophy" 
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0CC0DF] transition-colors"
          >
            Or just explore what I&apos;m learning →
          </Link>
        </div>
      </motion.section>
      </div>
    </div>
  );
}