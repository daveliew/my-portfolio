import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vibe Coding Handout - Quick Reference Guide | David Liew',
  description: 'Printable quick-start guide for vibe coding. Step-by-step instructions to build your personal site with AI in 30 minutes.',
  keywords: ['vibe coding handout', 'AI coding guide', 'v0.dev tutorial', 'no-code tutorial', 'printable guide'],
  openGraph: {
    title: 'Vibe Coding Handout - Quick Reference Guide',
    description: 'Printable quick-start guide to build your personal site with AI in 30 minutes.',
    type: 'article',
  },
};

export default function HandoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
