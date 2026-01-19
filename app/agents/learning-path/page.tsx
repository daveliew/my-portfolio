import type { Metadata } from 'next';
import LearningPathContent from './LearningPathContent';

export const metadata: Metadata = {
  title: 'AI Agents Learning Path',
  description: 'Structured learning path for building AI agent systems. From foundations to multi-agent orchestration - no coding required for early phases.',
  keywords: 'AI agents learning, agent development, Claude Code, MCP servers, trust calibration, multi-agent orchestration, AI automation',
  openGraph: {
    title: 'AI Agents Learning Path - Build Your Own Agent Systems',
    description: 'Structured 4-phase journey from AI foundations to multi-agent orchestration. Practical projects included.',
  },
};

export default function LearningPathPage() {
  return <LearningPathContent />;
}
