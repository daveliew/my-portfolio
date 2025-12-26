import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Engineering for AI Agents - David Liew',
  description:
    'Building AI agents you can actually trust. Progressive autonomy patterns, verification systems, and the psychology of human-agent collaboration.',
  alternates: {
    canonical: 'https://daveliew.dev/agents/trust-engineering',
  },
  openGraph: {
    title: 'Trust Engineering for AI Agents - David Liew',
    description:
      'Building AI agents you can actually trust through progressive autonomy patterns.',
    url: 'https://daveliew.dev/agents/trust-engineering',
  },
};

export default function TrustEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
