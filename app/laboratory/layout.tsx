import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Laboratory - David Liew',
  description:
    'Active experiments at the AI, Sustainability, and Robotics convergence. Exploring the $50T+ opportunity where these three megatrends intersect.',
  alternates: {
    canonical: 'https://daveliew.com/laboratory',
  },
  openGraph: {
    title: 'Innovation Laboratory - David Liew',
    description:
      'Active experiments at the AI, Sustainability, and Robotics convergence.',
    url: 'https://daveliew.com/laboratory',
  },
};

// Article structured data for Laboratory page
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Innovation Laboratory - AI, Sustainability & Robotics Convergence',
  description:
    'Active experiments at the AI, Sustainability, and Robotics convergence. Exploring the $50T+ opportunity where these three megatrends intersect.',
  author: {
    '@type': 'Person',
    name: 'David Liew',
    url: 'https://daveliew.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'David Liew',
  },
  mainEntityOfPage: 'https://daveliew.com/laboratory',
  datePublished: '2024-01-01',
  dateModified: '2026-01-22',
};

export default function LaboratoryLayout({
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
      {children}
    </>
  );
}
