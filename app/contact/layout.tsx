import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact David Liew - Agentic AI Architect',
  description:
    'Connect with David Liew for AI collaboration, consulting, or to explore how agentic systems can amplify your team. Based in Singapore.',
  alternates: {
    canonical: 'https://daveliew.dev/contact',
  },
  openGraph: {
    title: 'Contact David Liew - Agentic AI Architect',
    description:
      'Connect for AI collaboration, consulting, or to explore agentic systems.',
    url: 'https://daveliew.dev/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
