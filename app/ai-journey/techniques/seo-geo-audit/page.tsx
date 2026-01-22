import type { Metadata } from 'next';
import SeoGeoAuditContent from '@/components/content/SeoGeoAuditContent';

export const metadata: Metadata = {
  title: 'SEO/GEO Audit Workflow | AI Techniques',
  description: 'Technical workflow for AI-assisted SEO and GEO auditing using Claude Code, Firecrawl MCP, and Context7. Includes framework, case study, and implementation.',
  keywords: 'SEO audit technique, GEO optimization, AI SEO tools, Firecrawl MCP, Claude Code workflow, llms.txt, AI discoverability',
  openGraph: {
    title: 'SEO/GEO Audit Workflow | AI Techniques',
    description: 'Technical workflow for continuous SEO/GEO optimization with AI assistance.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://daveliew.com/context-engineering/seo-geo-audit',
  },
};

export default function SeoGeoAuditTechniquePage() {
  return <SeoGeoAuditContent variant="techniques" />;
}
