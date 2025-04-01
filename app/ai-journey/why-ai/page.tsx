'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhyAIPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">Why AI</h1>
        <p className="text-off-white text-lg mb-6">
          Understanding the transformative potential of artificial intelligence and where we are on the adoption curve
        </p>
      </div>

      {/* S-Curve Explanation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">The AI S-Curve</h2>
        
        <div className="bg-dark-gray p-6 rounded-lg mb-8">
          <div className="relative">
            <Image 
              src="/images/coatue_framework.png" 
              alt="Coatue Framework for AI S-Curve" 
              width={800} 
              height={450}
              className="rounded-lg mx-auto"
            />
          </div>
          <p className="text-sm text-gray-400 text-center mt-3">
            Source: Coatue opinion and analysis as of June 2024. For illustrative purposes only.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-burgundy-light mb-2">Phase 1: AI Core Infrastructure</h3>
            <p className="text-off-white">
              This foundation phase represents the development of key technologies powering AI: cloud computing infrastructure, 
              specialized hardware (GPUs, TPUs), fundamental models, and essential data management systems. This phase enables 
              all subsequent AI innovation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-burgundy-light mb-2">Phase 2: Edge AI</h3>
            <p className="text-off-white">
              As AI becomes more accessible, we see increased implementation of AI capabilities in existing business systems. 
              This includes API-based integrations with models like ChatGPT, Anthropic Claude, and others. Businesses are 
              finding ways to enhance their operations with AI capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-burgundy-light mb-2">Phase 3: AI Applications</h3>
            <p className="text-off-white">
              The next evolution involves building software applications with AI at their core. These solutions are designed 
              from the ground up with AI capabilities, rather than simply adding AI to existing systems. We're seeing the rise 
              of copilots, autonomous agents, and AI-native applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-burgundy-light mb-2">Phase 4+: Physical AI</h3>
            <p className="text-off-white">
              The frontier of AI development involves bridging the digital and physical worlds. This includes robotics, 
              autonomous vehicles, industrial automation, and other areas where AI directly controls or interacts with 
              physical systems and environments.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Why AI Matters Now</h2>
        <p className="text-off-white mb-4">
          We are at a critical inflection point in the AI S-curve, transitioning from early infrastructure to widespread 
          application. This creates unprecedented opportunities for those who can effectively leverage these technologies.
        </p>
        <ul className="list-disc list-inside text-off-white space-y-2">
          <li>AI is becoming increasingly accessible to non-specialists</li>
          <li>The economic impact of AI is beginning to accelerate across industries</li>
          <li>Early adopters are gaining significant competitive advantages</li>
          <li>The skills gap between AI-proficient and non-proficient professionals is widening</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/ai-journey/how-to-learn/overview" className="px-6 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-light transition-colors">
          Learn How to Master AI →
        </Link>
      </div>
    </div>
  );
} 