import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Portfolio - David Liew',
  description:
    'Real-world AI implementations and case studies. See how the Three-Hat Framework and Context Engineering principles work in production.',
  alternates: {
    canonical: 'https://daveliew.dev/ai-journey/portfolio',
  },
  openGraph: {
    title: 'AI Portfolio - David Liew',
    description:
      'Real-world AI implementations and case studies from production systems.',
    url: 'https://daveliew.dev/ai-journey/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
