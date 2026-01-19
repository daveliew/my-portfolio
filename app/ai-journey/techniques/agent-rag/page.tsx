import type { Metadata } from 'next';
import AgentRagContent from './AgentRagContent';

export const metadata: Metadata = {
  title: 'Agent & RAG Systems',
  description: 'Advanced learning path combining AI agents with Retrieval Augmented Generation. Build intelligent systems that retrieve, reason, and act autonomously.',
  keywords: 'AI agents, RAG, retrieval augmented generation, autonomous AI, agent systems, knowledge retrieval, AI architecture',
  openGraph: {
    title: 'Agent & RAG Systems - Advanced AI Architecture',
    description: 'Build intelligent systems combining AI agents with RAG for autonomous reasoning.',
  },
};

export default function AgentRagPage() {
  return <AgentRagContent />;
}
