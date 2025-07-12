'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/common';
import { fadeInUp, sectionAnimation } from '@/utils/animations';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section - Authentic Voice */}
      <section className="py-12 md:py-20">
        <motion.div 
          {...fadeInUp()}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dave Liew</h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Most people use AI to do more. I use it to do less.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-400">
            <p>
              After working at Meta, Unity, and co-founding a few ventures,<br/>
              I learned something: <span className="text-[var(--deep-purple)] font-semibold">Time compounds faster than money.</span>
            </p>
            
            <p>
              So I build tools that delete tasks instead of adding them.<br/>
              WhatsApp insights. Self-thinking dashboards. Emails that sort themselves.
            </p>
            
            <div className="py-4">
              <p className="text-base mb-2">The pattern I&apos;m exploring:</p>
              <p className="text-[var(--hot-pink)]">
                Build time → <span className="text-[var(--teal)]">Capture knowledge</span> → <span className="text-[var(--gold)]">Create value</span> → <span className="text-[var(--deep-purple)]">Share freely</span>
              </p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Currently helping 3 businesses reclaim their time. Happy to chat about yours.
            </p>
          </div>
        </motion.div>
      </section>

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
  );
}