'use client';

import Link from 'next/link';

export default function HowToLearnOverviewPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">How to Learn AI</h1>
        <p className="text-off-white text-lg mb-6">
          A structured approach to developing AI expertise for different career paths
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Pathways</h2>
        <p className="text-off-white mb-6">
          I&apos;ve developed these learning pathways based on my own journey and extensive research into effective approaches for 
          developing AI expertise. The pathways are designed to provide both breadth and depth, depending on your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-dark-gray p-6 rounded-lg hover:shadow-md transition-all border border-gray-700 hover:border-burgundy">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Broad LLM Handling</h3>
            <p className="text-off-white mb-4">
              This pathway focuses on developing general skills for working with large language models across a variety of applications. 
              It&apos;s ideal for professionals who need to incorporate AI capabilities into existing workflows or products.
            </p>
            <ul className="list-disc list-inside text-off-white mb-6 space-y-1.5">
              <li>Prompt engineering fundamentals</li>
              <li>API integrations with popular models</li>
              <li>Fine-tuning for specific use cases</li>
              <li>Building augmented workflows</li>
            </ul>
            <Link href="/ai-journey/how-to-learn/llm-handling" className="inline-block px-4 py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-light transition-colors">
              Explore LLM Handling Path
            </Link>
          </div>

          <div className="bg-dark-gray p-6 rounded-lg hover:shadow-md transition-all border border-gray-700 hover:border-burgundy">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">AI Agent & RAG Development</h3>
            <p className="text-off-white mb-4">
              This advanced pathway focuses on building autonomous agents and retrieval-augmented generation (RAG) systems. 
              It&apos;s designed for developers who want to create more sophisticated AI applications.
            </p>
            <ul className="list-disc list-inside text-off-white mb-6 space-y-1.5">
              <li>Agent architecture design</li>
              <li>Vector database implementation</li>
              <li>Knowledge retrieval systems</li>
              <li>Multi-agent communication</li>
            </ul>
            <Link href="/ai-journey/how-to-learn/agent-rag" className="inline-block px-4 py-2 bg-burgundy text-white rounded-md hover:bg-burgundy-light transition-colors">
              Explore Agent & RAG Path
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Core Learning Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Learn by Building</h3>
            <p className="text-off-white">
              The most effective way to learn AI is through practical application. Focus on building real projects that solve actual problems.
            </p>
          </div>
          
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Understand the Fundamentals</h3>
            <p className="text-off-white">
              While you don&apos;t need to know everything about how models work, having a solid conceptual understanding will make you more effective.
            </p>
          </div>
          
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Iterative Improvement</h3>
            <p className="text-off-white">
              Start simple, then progressively enhance your projects as you learn more. This iterative approach builds confidence and skills.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/ai-journey/why-ai" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          ← Why AI Matters
        </Link>
        <Link href="/ai-journey/portfolio" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          My AI Portfolio →
        </Link>
      </div>
    </div>
  );
} 