import type { Metadata } from 'next';
import PromptEngineeringContent from './PromptEngineeringContent';

export const metadata: Metadata = {
  title: 'Prompt Engineering for Claude',
  description: 'Master effective prompt crafting for Claude: structured formats, context provision, and advanced techniques for consistent AI responses.',
  keywords: 'prompt engineering, Claude prompts, AI prompting, effective prompts, prompt techniques, Claude best practices',
  openGraph: {
    title: 'Prompt Engineering for Claude',
    description: 'Advanced techniques for crafting effective prompts with Claude.',
  },
};

export default function PromptEngineeringPage() {
  return <PromptEngineeringContent />;
}
