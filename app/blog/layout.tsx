import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Dave Liew',
  description: 'Exploring agentic engineering, AI-human collaboration, and systematic approaches to becoming a better AI engineer.',
  openGraph: {
    title: 'Blog - Dave Liew',
    description: 'Exploring agentic engineering, AI-human collaboration, and systematic approaches to becoming a better AI engineer.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
