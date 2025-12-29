import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents Overview - David Liew',
  description:
    'Understanding AI agents, orchestration, and trust engineering. Definitions, emergence timeline, and the paradigm shift from tools to colleagues.',
  alternates: {
    canonical: 'https://daveliew.com/agents/overview',
  },
  openGraph: {
    title: 'AI Agents Overview - David Liew',
    description:
      'Understanding AI agents, orchestration, and the shift from tools to colleagues.',
    url: 'https://daveliew.com/agents/overview',
  },
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
