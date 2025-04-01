'use client';

import Link from 'next/link';

export default function AgentRAGPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-burgundy mb-2">AI Agent & RAG Development Path</h1>
        <p className="text-off-white text-lg mb-6">
          Advanced training for building autonomous agents and retrieval-augmented generation systems
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Objectives</h2>
        <p className="text-off-white mb-6">
          Upon completing this specialized learning path, you will be able to:
        </p>
        <ul className="list-disc list-inside text-off-white space-y-2 mb-8">
          <li>Design and implement autonomous AI agents with specific capabilities</li>
          <li>Create effective retrieval systems that augment LLM knowledge</li>
          <li>Build multi-agent systems that can collaborate on complex tasks</li>
          <li>Implement effective memory and context management systems</li>
          <li>Develop architectures that balance autonomy with appropriate safeguards</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Learning Path Structure</h2>
        
        <div className="space-y-8">
          {/* Prerequisites */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Prerequisites</h3>
            <p className="text-off-white mb-4">
              Before starting this advanced path, ensure you have:
            </p>
            <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
              <li>Solid understanding of LLM fundamentals (see the LLM Handling path)</li>
              <li>Basic programming skills (Python preferred)</li>
              <li>Familiarity with API integrations</li>
              <li>Understanding of vector embeddings concepts</li>
            </ul>
          </div>
          
          {/* Phase 1 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 1: Retrieval-Augmented Generation Fundamentals</h3>
            <p className="text-off-white mb-4">
              Master the core concepts and implementation of RAG systems.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Vector Embeddings</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Understanding embeddings and vector spaces</li>
                  <li>Selecting and implementing embedding models</li>
                  <li>Optimizing embeddings for specific domains</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Vector Databases</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Setting up and configuring vector databases (Chroma, Pinecone, etc.)</li>
                  <li>Indexing strategies for different content types</li>
                  <li>Optimizing search performance and relevance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Retrieval Mechanisms</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Query formulation and processing</li>
                  <li>Hybrid search techniques</li>
                  <li>Reranking and relevance scoring</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Project: Simple RAG System</h4>
                <p className="text-off-white ml-4">
                  Build a basic RAG system that indexes a collection of documents and answers questions based on their content.
                </p>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 2: Agent Fundamentals</h3>
            <p className="text-off-white mb-4">
              Learn how to build autonomous agents with specific capabilities.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Agent Architecture</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Core components of an AI agent</li>
                  <li>Planning and reasoning mechanisms</li>
                  <li>Tool use and function calling</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Memory Systems</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Short-term and conversational memory</li>
                  <li>Long-term knowledge storage</li>
                  <li>Memory retrieval and relevance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Tool Integration</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Designing and implementing agent tools</li>
                  <li>API and external service connections</li>
                  <li>Result processing and incorporation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Project: Task-specific Agent</h4>
                <p className="text-off-white ml-4">
                  Build an agent that can perform a specific task autonomously, such as gathering information from the web or analyzing data.
                </p>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="bg-dark-gray p-6 rounded-lg">
            <h3 className="text-xl font-medium text-burgundy-light mb-3">Phase 3: Advanced Agent & RAG Integration</h3>
            <p className="text-off-white mb-4">
              Combine agents and RAG systems into powerful, knowledge-aware autonomous systems.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">RAG-Enhanced Agents</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Integrating retrieval capabilities into agents</li>
                  <li>Dynamic knowledge acquisition</li>
                  <li>Self-updating knowledge bases</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Multi-Agent Systems</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Agent communication protocols</li>
                  <li>Role specialization and task delegation</li>
                  <li>Orchestrating multiple agents with frameworks like CrewAI</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Reliability and Safety</h4>
                <ul className="list-disc list-inside text-off-white ml-4 space-y-1">
                  <li>Implementing guardrails and safety measures</li>
                  <li>Error handling and recovery mechanisms</li>
                  <li>Monitoring and logging agent activities</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-burgundy-light/90 mb-1">Capstone Project</h4>
                <p className="text-off-white ml-4">
                  Build a multi-agent system with RAG capabilities that can solve complex, open-ended problems by combining information retrieval, reasoning, and specific domain tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-burgundy mb-4">Recommended Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Agent Frameworks</h3>
            <ul className="list-disc list-inside text-off-white space-y-1">
              <li>LangChain</li>
              <li>CrewAI</li>
              <li>AutoGPT</li>
              <li>LlamaIndex</li>
            </ul>
          </div>
          
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Vector Databases</h3>
            <ul className="list-disc list-inside text-off-white space-y-1">
              <li>Pinecone</li>
              <li>Chroma</li>
              <li>Weaviate</li>
              <li>Qdrant</li>
            </ul>
          </div>
          
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">LLM Providers</h3>
            <ul className="list-disc list-inside text-off-white space-y-1">
              <li>OpenAI (GPT-4, GPT-3.5)</li>
              <li>Anthropic (Claude)</li>
              <li>Mistral AI</li>
              <li>Google (Gemini)</li>
            </ul>
          </div>
          
          <div className="bg-dark-gray p-5 rounded-lg">
            <h3 className="text-lg font-medium text-burgundy-light mb-2">Development Tools</h3>
            <ul className="list-disc list-inside text-off-white space-y-1">
              <li>Python</li>
              <li>Jupyter Notebooks</li>
              <li>FastAPI/Flask</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/ai-journey/how-to-learn/llm-handling" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          ← LLM Handling Path
        </Link>
        <Link href="/ai-journey/portfolio" className="px-4 py-2 border border-burgundy text-burgundy rounded-md hover:bg-burgundy hover:text-white transition-colors">
          My AI Portfolio →
        </Link>
      </div>
    </div>
  );
} 