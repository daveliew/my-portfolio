import type { Metadata } from 'next';
import PatternsContent from './PatternsContent';

export const metadata: Metadata = {
  title: 'AI Agent Patterns Library',
  description: 'Battle-tested patterns for multi-agent orchestration: orchestrator-specialists, pipeline chains, parallel workers, safety patterns, and RAG knowledge systems.',
  keywords: 'agent patterns, multi-agent orchestration, AI safety patterns, RAG, MCP patterns, agent architecture, parallel agents',
  openGraph: {
    title: 'AI Agent Patterns Library - Multi-Agent Orchestration',
    description: 'Reusable patterns for orchestration, safety, productivity, and knowledge systems in AI agents.',
  },
};

export default function PatternsPage() {
  return <PatternsContent />;
}
