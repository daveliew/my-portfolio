import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fitzgerald Principle - David Liew',
  description:
    'Holding two opposed ideas in productive tension. A philosophy for human-AI collaboration that embraces complexity without seeking premature resolution.',
  alternates: {
    canonical: 'https://daveliew.com/philosophy',
  },
  openGraph: {
    title: 'The Fitzgerald Principle - David Liew',
    description:
      'Holding two opposed ideas in productive tension. A philosophy for human-AI collaboration.',
    url: 'https://daveliew.com/philosophy',
  },
};

// Article + FAQPage structured data for Philosophy page
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Fitzgerald Principle - Holding Opposed Ideas in Productive Tension',
  description:
    'A philosophy for human-AI collaboration that embraces complexity without seeking premature resolution.',
  author: {
    '@type': 'Person',
    name: 'David Liew',
    url: 'https://daveliew.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'David Liew',
  },
  mainEntityOfPage: 'https://daveliew.com/philosophy',
  datePublished: '2024-01-01',
  dateModified: '2025-12-01',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Fitzgerald Principle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Fitzgerald Principle is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function. In AI collaboration, this means embracing both AI capabilities and human agency without forcing premature resolution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Fitzgerald Principle apply to AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It applies to AI collaboration by embracing productive tensions: simple surfaces with rich depth, technical rigor with human warmth, and AI augmentation while preserving human agency.',
      },
    },
  ],
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
