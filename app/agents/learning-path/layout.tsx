import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent Learning Path - David Liew',
  description:
    'A structured learning path for building AI agents. From foundations through first projects to multi-agent orchestration and trust calibration.',
  alternates: {
    canonical: 'https://daveliew.com/agents/learning-path',
  },
  openGraph: {
    title: 'Agent Learning Path - David Liew',
    description:
      'Structured learning path for building AI agents from foundations to multi-agent systems.',
    url: 'https://daveliew.com/agents/learning-path',
  },
};

export default function LearningPathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
