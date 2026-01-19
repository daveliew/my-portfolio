import type { Metadata } from 'next';
import TrustEngineeringContent from './TrustEngineeringContent';

export const metadata: Metadata = {
  title: 'Trust Engineering for AI Agents',
  description: 'Calibrating AI agent autonomy: trust levels 0-4 framework, reversibility, blast radius, and verification speed factors.',
  keywords: 'trust engineering, AI autonomy, agent trust levels, AI safety, human-in-the-loop, agent calibration, AI oversight',
  openGraph: {
    title: 'Trust Engineering - Calibrating AI Agent Autonomy',
    description: 'The key differentiator: systematically deciding how much autonomy to grant AI agents.',
  },
};

export default function TrustEngineeringPage() {
  return <TrustEngineeringContent />;
}
