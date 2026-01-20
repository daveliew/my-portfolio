import type { Metadata } from 'next';
import TechniquesContent from './TechniquesContent';

export const metadata: Metadata = {
  title: 'AI Techniques Reference | David Liew',
  description: 'Technical reference for AI development: prompt engineering, tool use, RAG, LLM handling, and agent patterns.',
  keywords: ['AI techniques', 'prompt engineering', 'RAG', 'tool use', 'LLM', 'agent patterns'],
  openGraph: {
    title: 'AI Techniques Reference',
    description: 'Technical reference for AI development patterns and best practices.',
    type: 'article',
  },
};

export default function TechniquesPage() {
  return <TechniquesContent />;
}
