import type { Metadata } from 'next';
import PersonalSystemsContent from './PersonalSystemsContent';

export const metadata: Metadata = {
  title: 'Personal AI Agent Systems',
  description: 'How I orchestrate AI agents for productivity: Claude Code + MCPs stack, trust patterns, and CLAUDE.md as agent programming.',
  keywords: 'personal AI systems, MCP stack, Claude Code orchestration, Firecrawl, Airtable, ElevenLabs, agent productivity',
  openGraph: {
    title: 'Personal AI Agent Systems - Real-World Orchestration',
    description: 'Claude Code as orchestrator, MCPs as capabilities. No frameworks needed.',
  },
};

export default function PersonalSystemsPage() {
  return <PersonalSystemsContent />;
}
