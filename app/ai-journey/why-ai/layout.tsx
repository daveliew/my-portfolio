import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why AI? The S-Curve Framework - David Liew',
  description:
    'Understanding the AI adoption S-curve through Coatue research. Four phases from core infrastructure through edge AI to physical AI.',
  alternates: {
    canonical: 'https://daveliew.com/ai-journey/why-ai',
  },
  openGraph: {
    title: 'Why AI? The S-Curve Framework - David Liew',
    description:
      'Understanding AI adoption through the S-curve: infrastructure, edge, applications, and physical AI.',
    url: 'https://daveliew.com/ai-journey/why-ai',
  },
};

export default function WhyAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
