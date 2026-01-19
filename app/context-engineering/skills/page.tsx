import type { Metadata } from 'next';
import SkillsContent from './SkillsContent';

export const metadata: Metadata = {
  title: 'Claude Skills - Reusable Prompt Modules',
  description: 'Reusable prompt modules that encode expertise into callable workflows. Create code-review, deployment-checklist, and custom skills for Claude.',
  keywords: 'Claude skills, prompt modules, reusable workflows, Claude Code, SKILL.md, AI workflows, context engineering',
  openGraph: {
    title: 'Claude Skills - Encode Your Expertise',
    description: 'Create reusable prompt modules that Claude can invoke as callable workflows.',
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
