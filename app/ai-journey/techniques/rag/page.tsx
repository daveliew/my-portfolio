'use client';

import { motion } from 'framer-motion';
import AIJourneySubpageLayout from '@/components/ai-journey/SubpageLayout';
import { Card, SectionHeader } from '@/components/common';
import { sectionAnimation } from '@/utils/animations';

export default function RAGPage() {
  return (
    <AIJourneySubpageLayout
      title="Retrieval Augmented Generation (RAG)"
      description="Implement RAG systems to enhance Claude's responses with external knowledge bases"
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/ai-journey', label: 'AI Journey' },
        { href: '/ai-journey/techniques', label: 'Techniques' },
      ]}
    >
      {/* Introduction */}
      <motion.section
        {...sectionAnimation(0)}
        className="mb-12"
      >
        <SectionHeader title="What is RAG?" />
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Retrieval Augmented Generation (RAG) combines Claude&apos;s generative capabilities with external 
            knowledge retrieval. Instead of relying solely on training data, RAG systems dynamically 
            fetch relevant information from external sources to provide more accurate, up-to-date, and 
            contextually relevant responses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Benefits</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Access to real-time information</li>
                <li>• Domain-specific knowledge integration</li>
                <li>• Reduced hallucinations</li>
                <li>• Improved factual accuracy</li>
                <li>• Scalable knowledge updates</li>
                <li>• Source attribution and transparency</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Common Applications</h4>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• Customer support chatbots</li>
                <li>• Technical documentation Q&A</li>
                <li>• Research assistants</li>
                <li>• Legal document analysis</li>
                <li>• Medical information systems</li>
                <li>• Enterprise knowledge bases</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* RAG Architecture */}
      <motion.section
        {...sectionAnimation(1)}
        className="mb-12"
      >
        <SectionHeader title="RAG Architecture" />
        <Card className="p-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border-2 border-blue-200 dark:border-blue-800 rounded-lg text-center">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">1. Indexing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Process and store documents as embeddings in a vector database</p>
              </div>
              <div className="p-4 border-2 border-green-200 dark:border-green-800 rounded-lg text-center">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">2. Retrieval</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Find relevant documents based on query similarity</p>
              </div>
              <div className="p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg text-center">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">3. Generation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Use retrieved context to generate informed responses</p>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Detailed Workflow</h4>
              <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-blue-600 dark:text-blue-400">1.</span>
                  <span><strong>Document Processing:</strong> Split documents into chunks, generate embeddings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-green-600 dark:text-green-400">2.</span>
                  <span><strong>Query Processing:</strong> Convert user query into embedding vector</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-purple-600 dark:text-purple-400">3.</span>
                  <span><strong>Similarity Search:</strong> Find most relevant document chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-orange-600 dark:text-orange-400">4.</span>
                  <span><strong>Context Injection:</strong> Combine retrieved content with user query</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 text-red-600 dark:text-red-400">5.</span>
                  <span><strong>Response Generation:</strong> Claude generates response using retrieved context</span>
                </li>
              </ol>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Implementation Stack */}
      <motion.section
        {...sectionAnimation(2)}
        className="mb-12"
      >
        <SectionHeader title="Technology Stack" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Vector Databases</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Supabase + pgvector</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">PostgreSQL extension with vector support</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Pinecone</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Managed vector database service</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Weaviate</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Open-source vector search engine</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">ChromaDB</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Lightweight embedding database</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">Embedding Models</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">OpenAI Ada v2</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Popular choice for general text embeddings</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Sentence Transformers</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Open-source models for specialized domains</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Cohere Embed</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">Multilingual embedding capabilities</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-3">
                <h5 className="font-medium text-gray-800 dark:text-gray-200">Voyage AI</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">High-performance embedding models</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Implementation Example */}
      <motion.section
        {...sectionAnimation(3)}
        className="mb-12"
      >
        <SectionHeader title="Implementation Example" />
        <Card className="p-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Basic RAG System with Supabase</h4>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">1. Database Setup</h5>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`-- Enable pgvector extension
create extension vector;

-- Create documents table
create table documents (
  id bigserial primary key,
  content text,
  metadata jsonb,
  embedding vector(1536)
);

-- Create index for similarity search
create index on documents 
using ivfflat (embedding vector_cosine_ops)
with (lists = 100);`}
              </pre>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">2. Document Indexing (Python)</h5>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import openai
from supabase import create_client
import tiktoken

class DocumentIndexer:
    def __init__(self, supabase_url, supabase_key, openai_key):
        self.supabase = create_client(supabase_url, supabase_key)
        openai.api_key = openai_key
        self.encoder = tiktoken.get_encoding("cl100k_base")
    
    def chunk_text(self, text, chunk_size=500, overlap=50):
        &quot;&quot;&quot;Split text into overlapping chunks&quot;&quot;&quot;
        tokens = self.encoder.encode(text)
        chunks = []
        
        for i in range(0, len(tokens), chunk_size - overlap):
            chunk_tokens = tokens[i:i + chunk_size]
            chunk_text = self.encoder.decode(chunk_tokens)
            chunks.append(chunk_text)
            
        return chunks
    
    def get_embedding(self, text):
        &quot;&quot;&quot;Generate embedding for text&quot;&quot;&quot;
        response = openai.Embedding.create(
            input=text,
            model=&quot;text-embedding-ada-002&quot;
        )
        return response[&apos;data&apos;][0][&apos;embedding&apos;]
    
    def index_document(self, content, metadata=None):
        &quot;&quot;&quot;Index a document into the vector database&quot;&quot;&quot;
        chunks = self.chunk_text(content)
        
        for i, chunk in enumerate(chunks):
            embedding = self.get_embedding(chunk)
            
            doc_metadata = {
                **(metadata or {}),
                &quot;chunk_index&quot;: i,
                &quot;total_chunks&quot;: len(chunks)
            }
            
            self.supabase.table(&apos;documents&apos;).insert({
                &apos;content&apos;: chunk,
                &apos;metadata&apos;: doc_metadata,
                &apos;embedding&apos;: embedding
            }).execute()`}
              </pre>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Retrieval and Generation */}
      <motion.section
        {...sectionAnimation(4)}
        className="mb-12"
      >
        <SectionHeader title="Retrieval and Generation" />
        <Card className="p-6">
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">RAG Query System</h5>
              <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
{`import anthropic

class RAGSystem:
    def __init__(self, supabase_client, anthropic_key):
        self.supabase = supabase_client
        self.claude = anthropic.Anthropic(api_key=anthropic_key)
    
    def retrieve_documents(self, query, limit=5):
        &quot;&quot;&quot;Retrieve relevant documents for a query&quot;&quot;&quot;
        # Generate embedding for query
        query_embedding = self.get_embedding(query)
        
        # Perform similarity search
        result = self.supabase.rpc(
            &apos;match_documents&apos;,
            {
                &apos;query_embedding&apos;: query_embedding,
                &apos;match_threshold&apos;: 0.7,
                &apos;match_count&apos;: limit
            }
        ).execute()
        
        return result.data
    
    def generate_response(self, query, retrieved_docs):
        &quot;&quot;&quot;Generate response using Claude with retrieved context&quot;&quot;&quot;
        # Construct context from retrieved documents
        context = "\n\n".join([
            f&quot;Source: {doc[&apos;metadata&apos;].get(&apos;title&apos;, &apos;Unknown&apos;)}\n{doc[&apos;content&apos;]}&quot;
            for doc in retrieved_docs
        ])
        
        prompt = f&quot;&quot;&quot;Based on the following context, please answer the user&apos;s question. 
If the context doesn&apos;t contain enough information to answer the question, 
please say so and explain what information would be needed.

Context:
{context}

Question: {query}

Please provide a helpful and accurate response based on the context provided.&quot;&quot;&quot;

        message = self.claude.messages.create(
            model=&quot;claude-3-5-sonnet-20241022&quot;,
            max_tokens=1000,
            messages=[{
                &quot;role&quot;: &quot;user&quot;,
                &quot;content&quot;: prompt
            }]
        )
        
        return message.content[0].text
    
    def query(self, question):
        &quot;&quot;&quot;Complete RAG workflow&quot;&quot;&quot;
        # Step 1: Retrieve relevant documents
        retrieved_docs = self.retrieve_documents(question)
        
        # Step 2: Generate response with context
        response = self.generate_response(question, retrieved_docs)
        
        return {
            &quot;answer&quot;: response,
            &quot;sources&quot;: [doc[&apos;metadata&apos;] for doc in retrieved_docs],
            &quot;context_used&quot;: len(retrieved_docs)
        }`}
              </pre>
            </div>
          </div>
        </Card>
      </motion.section>

      {/* Advanced Techniques */}
      <motion.section
        {...sectionAnimation(5)}
        className="mb-12"
      >
        <SectionHeader title="Advanced RAG Techniques" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-4">Hybrid Search</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Combine semantic similarity with keyword search for better results.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Implementation:</div>
              <ul className="text-xs space-y-1">
                <li>• Vector similarity (semantic)</li>
                <li>• BM25 keyword matching</li>
                <li>• Weighted score combination</li>
                <li>• Reranking algorithms</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-4">Query Expansion</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enhance queries to improve retrieval accuracy.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Techniques:</div>
              <ul className="text-xs space-y-1">
                <li>• Synonym expansion</li>
                <li>• Query rewriting with Claude</li>
                <li>• Multi-query approaches</li>
                <li>• Context-aware expansion</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-4">Contextual Compression</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Compress retrieved content to include only relevant information.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Benefits:</div>
              <ul className="text-xs space-y-1">
                <li>• Reduced token usage</li>
                <li>• Improved focus</li>
                <li>• Better context utilization</li>
                <li>• Faster processing</li>
              </ul>
            </div>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">Multi-Agent RAG</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Use multiple specialized agents for complex queries.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded text-sm">
              <div className="text-green-600 dark:text-green-400 mb-2">Agents:</div>
              <ul className="text-xs space-y-1">
                <li>• Query router</li>
                <li>• Domain specialists</li>
                <li>• Fact checker</li>
                <li>• Response synthesizer</li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Best Practices */}
      <motion.section
        {...sectionAnimation(6)}
        className="mb-12"
      >
        <SectionHeader title="Best Practices" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-4">Do&apos;s ✓</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Optimize chunk size for your domain</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Include metadata for better filtering</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Implement relevance scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Use clear source attribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Monitor and evaluate performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Handle missing context gracefully</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-4">Don&apos;ts ✗</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Ignore document quality and preprocessing</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Use overly large or small chunks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Skip relevance threshold tuning</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Overwhelm context with irrelevant data</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Neglect embedding model selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Forget to update stale documents</span>
              </li>
            </ul>
          </Card>
        </div>
      </motion.section>

      {/* Practice Projects */}
      <motion.section
        {...sectionAnimation(7)}
        className="mb-12"
      >
        <SectionHeader title="Practice Projects" />
        <Card className="p-6">
          <div className="space-y-4">
            <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Project 1: Documentation Q&A</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Build a RAG system for technical documentation that can answer user questions about APIs, 
                setup instructions, and troubleshooting.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Skills: Document processing, embedding generation, similarity search
              </div>
            </div>
            
            <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg">
              <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">Project 2: Research Assistant</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Create a research assistant that can search through academic papers, extract relevant 
                information, and provide evidence-based answers.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Skills: Academic paper processing, citation handling, multi-document synthesis
              </div>
            </div>
            
            <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg">
              <h5 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Project 3: Customer Support Bot</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Develop a customer support system that can access company knowledge bases, 
                product manuals, and FAQ documents to provide accurate support responses.
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Skills: Multi-modal content, conversation context, escalation handling
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </AIJourneySubpageLayout>
  );
} 