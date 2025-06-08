'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Start Building Your AI Future</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Ready to transform your organization with intelligent systems? Whether you&apos;re launching 
          sustainability initiatives, scaling purpose-driven businesses, or navigating AI transformation, 
          let&apos;s explore how agentic AI can amplify your impact.
        </p>
      </motion.div>

      {/* Project Types */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">How I Can Help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">AI Strategy & Architecture</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Agentic AI system design & implementation</li>
              <li>• Intelligent automation workflows</li>
              <li>• AI transformation roadmaps</li>
              <li>• Technology stack recommendations</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Purpose-Driven Solutions</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Sustainability-focused AI applications</li>
              <li>• Social impact measurement systems</li>
              <li>• Educational technology platforms</li>
              <li>• Community-driven initiatives</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Business Transformation</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Operations automation & optimization</li>
              <li>• Customer experience enhancement</li>
              <li>• Data-driven decision systems</li>
              <li>• Scalable growth platforms</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Learning & Development</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AI capability building workshops</li>
              <li>• Team training & upskilling</li>
              <li>• Knowledge management systems</li>
              <li>• Innovation methodology guidance</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Direct Email</h3>
              <a 
                href="mailto:dave@agenticbrewery.ai" 
                className="text-lg hover:underline block mb-2"
              >
                dave@agenticbrewery.ai
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                For project inquiries, collaborations, and strategic discussions
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Location & Availability</h3>
              <p className="mb-2">Singapore (GMT+8)</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Available for local meetings and global remote collaborations
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/daveliew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/daveliew" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Ready to Start?</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Strategic Consultation</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                45-minute discovery call to explore your AI transformation opportunities
              </p>
              <a 
                href="mailto:dave@agenticbrewery.ai?subject=Strategic Consultation Request&body=I'm interested in discussing AI transformation opportunities for my organization."
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Project Collaboration</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                Have a specific project in mind? Let&apos;s discuss scope and approach
              </p>
              <a 
                href="mailto:dave@agenticbrewery.ai?subject=Project Collaboration Inquiry&body=I have a project that could benefit from agentic AI solutions."
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Discuss Project
              </a>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Learning Exchange</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                Interested in knowledge sharing, speaking, or community building?
              </p>
              <a 
                href="mailto:dave@agenticbrewery.ai?subject=Learning Exchange&body=I'd like to explore opportunities for knowledge sharing and collaboration."
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Connect & Learn
              </a>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              <strong>Response Time:</strong> I aim to respond to all inquiries within 24-48 hours.
              For urgent matters, please mention it in your subject line.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 