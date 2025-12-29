import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Techniques - David Liew',
  description:
    'Technical implementation paths for AI systems. Prompt engineering, tool use, LLM handling, RAG systems, and agent architectures.',
  alternates: {
    canonical: 'https://daveliew.com/ai-journey/techniques',
  },
  openGraph: {
    title: 'AI Techniques - David Liew',
    description:
      'Technical implementation paths: prompting, tool use, RAG, and agent architectures.',
    url: 'https://daveliew.com/ai-journey/techniques',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://daveliew.com' },
    { '@type': 'ListItem', position: 2, name: 'AI Journey', item: 'https://daveliew.com/ai-journey' },
    { '@type': 'ListItem', position: 3, name: 'Techniques', item: 'https://daveliew.com/ai-journey/techniques' },
  ],
};

export default function TechniquesLayout({
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
