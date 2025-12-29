import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Journey Overview - David Liew',
  description:
    'Learning philosophy and path options for human-AI collaboration. Choose between technical deep dives or Claude mastery tracks.',
  alternates: {
    canonical: 'https://daveliew.com/ai-journey/overview',
  },
  openGraph: {
    title: 'AI Journey Overview - David Liew',
    description:
      'Learning philosophy and path options for mastering human-AI collaboration.',
    url: 'https://daveliew.com/ai-journey/overview',
  },
};

export default function AIJourneyOverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
