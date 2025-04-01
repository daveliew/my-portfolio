'use client';

import Link from 'next/link';

export default function AIPortfolioPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">AI Portfolio</h1>
        <p className="text-off-white text-lg mb-6">
          Showcasing my AI projects and implementations
        </p>
      </div>

      <div className="bg-dark-gray p-8 rounded-lg mb-10 text-center">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Coming Soon</h2>
        <p className="text-off-white mb-6">
          This section will contain a showcase of my AI projects, implementations, and case studies.
          Check back later for a comprehensive portfolio of my work in this space.
        </p>
        <p className="text-off-white mb-6">
          The portfolio will include:
        </p>
        <ul className="list-disc inline-block text-left text-off-white space-y-2 mb-8">
          <li>AI agent implementations</li>
          <li>RAG systems for specialized knowledge domains</li>
          <li>LLM-powered workflow automation examples</li>
          <li>Business process transformation case studies</li>
          <li>Code repositories and technical documentation</li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/ai-journey/how-to-learn/agent-rag" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          ← Agent & RAG Learning Path
        </Link>
        <Link href="/ai-journey" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          Back to AI Journey Main
        </Link>
      </div>
    </div>
  );
} 