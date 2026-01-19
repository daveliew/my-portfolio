import type { Metadata } from 'next';
import HandoutContent from './HandoutContent';

export const metadata: Metadata = {
  title: 'Vibe Coding Handout',
  description: 'Printable quick start guide for vibe coding. 5-step checklist, prompt templates, and essential tools for building your professional brand with AI.',
  keywords: 'vibe coding handout, quick start guide, AI prompts, v0.dev tutorial, personal branding, no-code guide',
  openGraph: {
    title: 'Vibe Coding Quick Start Handout',
    description: 'Printable guide with prompts and checklists for AI-powered personal branding.',
  },
};

export default function VibeCodingHandoutPage() {
  return <HandoutContent />;
}
