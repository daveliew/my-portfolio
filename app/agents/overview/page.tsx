import type { Metadata } from 'next';
import OverviewContent from './OverviewContent';

export const metadata: Metadata = {
  title: 'What Are AI Agents?',
  description: 'Understanding AI agents, orchestration, trust engineering, and MCP. The shift from AI tools to AI colleagues in 2026.',
  keywords: 'AI agents, agent orchestration, trust engineering, MCP, Model Context Protocol, autonomous AI, AI colleagues',
  openGraph: {
    title: 'What Are AI Agents? - From Tools to Colleagues',
    description: 'Understanding the paradigm shift from AI tools to AI colleagues. Key concepts for 2026.',
  },
};

export default function AgentsOverviewPage() {
  return <OverviewContent />;
}
