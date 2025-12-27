import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents 2026 - David Liew',
  description:
    'The year AI agents become colleagues. Explore trust engineering, agent patterns, and personal AI systems that amplify human capabilities.',
  alternates: {
    canonical: 'https://daveliew.com/agents',
  },
  openGraph: {
    title: 'AI Agents 2026 - David Liew',
    description:
      'The year AI agents become colleagues. Explore trust engineering and agent patterns.',
    url: 'https://daveliew.com/agents',
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
