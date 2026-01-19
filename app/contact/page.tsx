import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with David Liew on LinkedIn, GitHub, or through Agentic Brewery for AI implementation projects and business collaborations.',
  keywords: 'contact, David Liew, LinkedIn, GitHub, AI consulting, Agentic Brewery',
  openGraph: {
    title: 'Contact David Liew',
    description: 'Connect on LinkedIn, GitHub, or Agentic Brewery for AI projects and collaborations.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
