import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Laboratory - David Liew',
  description:
    'Active experiments at the AI, Sustainability, and Robotics convergence. Exploring the $50T+ opportunity where these three megatrends intersect.',
  alternates: {
    canonical: 'https://daveliew.dev/laboratory',
  },
  openGraph: {
    title: 'Innovation Laboratory - David Liew',
    description:
      'Active experiments at the AI, Sustainability, and Robotics convergence.',
    url: 'https://daveliew.dev/laboratory',
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
    url: 'https://daveliew.dev',
  },
  publisher: {
    '@type': 'Person',
    name: 'David Liew',
  },
  mainEntityOfPage: 'https://daveliew.dev/laboratory',
  datePublished: '2024-01-01',
  dateModified: '2025-12-01',
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
