import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent Design Patterns - David Liew',
  description:
    'Proven patterns for building effective AI agents. Delegation strategies, multi-agent orchestration, and cognitive architecture for autonomous systems.',
  alternates: {
    canonical: 'https://daveliew.dev/agents/patterns',
  },
  openGraph: {
    title: 'Agent Design Patterns - David Liew',
    description:
      'Proven patterns for building effective AI agents and multi-agent systems.',
    url: 'https://daveliew.dev/agents/patterns',
  },
};

export default function PatternsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
