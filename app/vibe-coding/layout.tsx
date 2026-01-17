import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vibe Coding - Build Without Code | David Liew',
  description: 'Learn vibe coding: describe what you want, AI builds it. Your first taste of context engineering. No programming experience needed.',
  keywords: ['vibe coding', 'no-code', 'AI development', 'context engineering', 'v0.dev', 'beginner friendly'],
  openGraph: {
    title: 'Vibe Coding - Build Without Code',
    description: 'Describe what you want, AI builds it. Your first taste of context engineering.',
    type: 'article',
  },
};

export default function VibeCodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
