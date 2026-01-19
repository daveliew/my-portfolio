import type { Metadata } from 'next';
import AgentsContent from './AgentsContent';

export const metadata: Metadata = {
  title: 'AI Agents',
  description: 'Building AI teams for 2026: Agent orchestration, trust engineering, and multi-agent patterns. From prompt engineering to Context Engineering to agent orchestration.',
  keywords: 'AI agents, agent orchestration, trust engineering, multi-agent systems, Claude Code, MCP, AI teams',
  openGraph: {
    title: 'AI Agents - Building AI Teams for 2026',
    description: 'Agent orchestration, trust engineering, and multi-agent patterns for the next generation.',
  },
};

export default function AgentsPage() {
  return <AgentsContent />;
}
