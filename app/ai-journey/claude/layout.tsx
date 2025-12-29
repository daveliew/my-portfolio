import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Mastery - David Liew',
  description:
    'Comprehensive Claude mastery curriculum. 8 modules covering Claude Code, tool use, computer use, MCP, vision, and 2026 predictions.',
  alternates: {
    canonical: 'https://daveliew.com/ai-journey/claude',
  },
  openGraph: {
    title: 'Claude Mastery - David Liew',
    description:
      '8-module curriculum for mastering Claude: Code, tools, computer use, MCP, vision, and future predictions.',
    url: 'https://daveliew.com/ai-journey/claude',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daveliew.com' },
    { '@type': 'ListItem', position: 2, name: 'AI Journey', item: 'https://daveliew.com/ai-journey' },
    { '@type': 'ListItem', position: 3, name: 'Claude Mastery', item: 'https://daveliew.com/ai-journey/claude' },
  ],
};

export default function ClaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
