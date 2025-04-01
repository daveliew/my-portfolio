'use client';

import Link from 'next/link';

export default function LLMHandlingPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">LLM Handling Learning Path</h1>
        <p className="text-off-white text-lg mb-6">
          A comprehensive roadmap for mastering large language models in practical applications
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Objectives</h2>
        <p className="text-off-white mb-6">
          By the end of this learning path, you will be able to:
        </p>
        <ul className="list-disc list-inside text-off-white space-y-2 mb-8">
          <li>Effectively communicate with AI models through well-crafted prompts</li>
          <li>Integrate AI capabilities into existing applications and workflows</li>
          <li>Understand LLM limitations and implement appropriate guardrails</li>
          <li>Design hybrid human-AI workflows that maximize the strengths of both</li>
          <li>Evaluate and select the right models for specific use cases</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Path Structure</h2>
        
        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 1: Fundamentals</h3>
            <p className="text-off-white mb-4">
              Build a solid foundation in understanding how LLMs work and how to interact with them effectively.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Understanding LLMs</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Basic concepts: tokens, parameters, temperature, context window</li>
                  <li>Model capabilities and limitations</li>
                  <li>Different model architectures and their strengths</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Prompt Engineering Basics</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Crafting clear instructions</li>
                  <li>Using examples (few-shot learning)</li>
                  <li>Basic prompt patterns and templates</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Suggested Resources</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>OpenAI Documentation</li>
                  <li>Prompt Engineering Guide by Anthropic</li>
                  <li>Learn Prompting website</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 2: Integration & Application</h3>
            <p className="text-off-white mb-4">
              Learn how to incorporate LLMs into applications and existing workflows.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">API Integration</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Setting up API access to various models</li>
                  <li>Managing API costs and rate limits</li>
                  <li>Error handling and fallback strategies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Building Basic AI Features</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Content generation capabilities</li>
                  <li>Data extraction and summarization</li>
                  <li>Conversation management</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Suggested Projects</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Build a simple chatbot</li>
                  <li>Create a content summarization tool</li>
                  <li>Implement a simple data extraction system</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 3: Advanced Techniques</h3>
            <p className="text-off-white mb-4">
              Master advanced techniques for optimizing LLM performance in complex scenarios.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Advanced Prompt Engineering</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Chain-of-thought prompting</li>
                  <li>ReAct pattern implementation</li>
                  <li>System and user message design</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Enhancing Reliability</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Output validation and correction</li>
                  <li>Implementing guardrails</li>
                  <li>Handling hallucinations and misinformation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Model Fine-tuning</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>When and why to fine-tune models</li>
                  <li>Creating effective training datasets</li>
                  <li>Evaluating fine-tuned models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Process</h2>
        <p className="text-off-white mb-6">
          This learning path is designed to be self-paced but structured. For optimal results:
        </p>
        <ol className="list-decimal list-inside text-off-white space-y-2">
          <li>Spend 1-2 weeks on each phase</li>
          <li>Complete at least one project in each phase before moving on</li>
          <li>Document your learnings and challenges</li>
          <li>Join communities like Hugging Face and AI Discord servers to share experiences</li>
        </ol>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/ai-journey/how-to-learn/overview" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          ← Learning Overview
        </Link>
        <Link href="/ai-journey/how-to-learn/agent-rag" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          Agent & RAG Path →
        </Link>
      </div>
    </div>
  );
} 