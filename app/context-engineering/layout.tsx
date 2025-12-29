import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Context Engineering | Dave Liew',
  description: 'Learn to architect informational environments where AI understanding emerges. From CLAUDE.md files to hooks and archetypes.',
};

export default function ContextEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
