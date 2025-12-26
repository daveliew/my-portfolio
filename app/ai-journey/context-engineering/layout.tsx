import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Context Engineering - David Liew',
  description:
    'Beyond prompt engineering: architecting informational environments where understanding emerges. The discipline of designing what AI knows before it reasons.',
  alternates: {
    canonical: 'https://daveliew.dev/ai-journey/context-engineering',
  },
  openGraph: {
    title: 'Context Engineering - David Liew',
    description:
      'Beyond prompt engineering: architecting informational environments where understanding emerges.',
    url: 'https://daveliew.dev/ai-journey/context-engineering',
  },
};

export default function ContextEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
