import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Journey - David Liew',
  description:
    'Pioneering human-AI collaboration for the next generation. Learn frameworks for building AI colleagues, from fundamentals to advanced Claude mastery.',
  alternates: {
    canonical: 'https://daveliew.com/ai-journey',
  },
  openGraph: {
    title: 'AI Journey - David Liew',
    description:
      'Pioneering human-AI collaboration for the next generation.',
    url: 'https://daveliew.com/ai-journey',
  },
};

export default function AIJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
