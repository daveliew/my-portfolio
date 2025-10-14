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
              I&apos;m exploring how to do less—systematically.
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
              Currently testing these approaches with 3 businesses.<br/>
              Here&apos;s what I&apos;m discovering.
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
              I&apos;m systematically exploring how to create spaces where human intuition and AI capabilities work together naturally.
            </p>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 italic">
              Context Engineering is the art of designing the informational environment where human intuition and AI capabilities converge.
            </p>
          </Card>
          
          {/* Active Projects Note */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Currently testing this approach on <span className="font-semibold text-[#F8B400]">3 live projects</span>
          </p>
        </div>
      </motion.section>

      {/* What I'm Building - Living Proof */}
      <motion.section
        {...sectionAnimation(1)}
        className="py-12 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-3 text-center">See How I Work</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Rather than tell you what I can do, here&apos;s what I&apos;m actually building.
          You&apos;re looking at one of them right now.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* This Website - The Meta Example */}
          <Card className="p-6 hover:shadow-lg transition-shadow group md:col-span-2 border-2 border-[#0CC0DF]/30">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold group-hover:text-[#0CC0DF] transition-colors">
                This Portfolio Site (Meta Example)
              </h3>
              <span className="text-xs text-[#0CC0DF] px-2 py-1 bg-[#0CC0DF]/10 rounded font-medium">Live Now</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You&apos;re looking at it. Built to embody the Fitzgerald Principle - holding opposing ideas
              (simple surface + rich depth) in productive tension.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium mb-2 text-[var(--deep-purple)]">What&apos;s Interesting:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Next.js 15 + React 19 (upgraded today!)</li>
                  <li>• Philosophy validation scripts that score design decisions</li>
                  <li>• Zero hardcoded content (all JSON-driven)</li>
                  <li>• Automated quality gates before deploy</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-[var(--teal)]">Still Figuring Out:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• How to improve philosophy score (currently 7%)</li>
                  <li>• Better ways to showcase technical depth</li>
                  <li>• Balance between showing code and keeping it clean</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">Next.js 15</span>
              <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">React 19</span>
              <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">TypeScript</span>
              <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">Framer Motion</span>
              <span className="px-2 py-1 bg-[#0CC0DF]/10 text-[#0CC0DF] rounded">Philosophy Automation</span>
            </div>
          </Card>

          {/* WhatsApp MCP Server */}
          <Card className="p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold group-hover:text-[#FF0081] transition-colors">
                WhatsApp MCP Server
              </h3>
              <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Active</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Created an MCP server that turns WhatsApp exports into insights.
              Turns out I was missing patterns in thousands of client messages.
            </p>

            <p className="text-xs text-[var(--deep-purple)] mb-3">
              <span className="font-medium">Discovery:</span> Most valuable insights came from messages
              I thought weren&apos;t important at the time.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Python</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">MCP Protocol</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Claude API</span>
            </div>
          </Card>

          {/* Client Projects - Honest */}
          <Card className="p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold group-hover:text-[#F8B400] transition-colors">
                3 Client Projects
              </h3>
              <span className="text-xs text-[#F8B400] px-2 py-1 bg-[#F8B400]/10 rounded font-medium">Learning Mode</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Working with 3 businesses on AI-powered automation. Can&apos;t share details yet,
              but here&apos;s what I&apos;m discovering:
            </p>

            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-3">
              <li>• Most &quot;AI projects&quot; fail because they automate the wrong things</li>
              <li>• Time-to-first-success &lt; 2 minutes is make-or-break</li>
              <li>• Simpler systems win, even when they feel too simple</li>
            </ul>

            <p className="text-xs text-[var(--deep-purple)] italic">
              Each project teaches me something for the next one. Still figuring out the patterns.
            </p>
          </Card>
        </div>

        <p className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
          Building and learning in public. If something I&apos;m exploring helps you, that&apos;s enough for me.
        </p>
      </motion.section>

      {/* Why I Can Help - Authentic Version */}
      <motion.section 
        {...sectionAnimation(2)}
        className="py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">What I&apos;ve Discovered</h2>
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
              The best part? Every business I work with teaches me something new to explore with the next one.
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
          If something I&apos;m discovering might help, let&apos;s compare notes.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Compare Notes
        </Link>
        
        <div className="mt-8">
          <Link 
            href="/philosophy" 
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0CC0DF] transition-colors"
          >
            Or explore what I&apos;m discovering →
          </Link>
        </div>
      </motion.section>
      </div>
    </div>
  );
}