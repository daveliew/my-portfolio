import type { Metadata } from 'next';
import ArchetypesContent from './ArchetypesContent';

export const metadata: Metadata = {
  title: 'Context Engineering Archetypes',
  description: 'Work mode bundles composing CLAUDE.md, Skills, and Hooks into coherent operating modes. Strategist, Engineer, Operator, and Advisor patterns.',
  keywords: 'context engineering, archetypes, work modes, AI workflows, Claude modes, Strategist, Engineer, Operator, Advisor',
  openGraph: {
    title: 'Context Engineering Archetypes',
    description: 'Work mode bundles for different types of AI-assisted work.',
  },
};

export default function ArchetypesPage() {
  return <ArchetypesContent />;
}
