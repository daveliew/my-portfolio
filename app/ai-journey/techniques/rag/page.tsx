import type { Metadata } from 'next';
import RAGContent from './RAGContent';

export const metadata: Metadata = {
  title: 'Retrieval Augmented Generation (RAG)',
  description: 'Implement RAG systems to enhance Claude with external knowledge. Reduce hallucinations, improve accuracy, and enable real-time information access.',
  keywords: 'RAG, retrieval augmented generation, knowledge retrieval, vector databases, embeddings, Claude RAG, semantic search',
  openGraph: {
    title: 'RAG Systems - Enhance AI with External Knowledge',
    description: 'Build RAG systems for accurate, up-to-date AI responses with external knowledge bases.',
  },
};

export default function RAGPage() {
  return <RAGContent />;
}
