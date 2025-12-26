import PageLayout from '@/components/common/PageLayout';
import SectionHeader from '@/components/common/SectionHeader';
import Card from '@/components/common/Card';

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      description="Exploring agentic engineering, AI-human collaboration, and systematic approaches to becoming a better AI engineer"
      backLink={{ href: '/', text: 'Back to home' }}
      gradientTitle
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Agentic Engineering Series" />

        <Card className="mt-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I&apos;m preparing a series on agentic engineering - from the evolution of AI agents to practical implementation patterns.
            </p>
            <div className="text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Planned Series: Agentic Engineering
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• The Evolution of Agentic AI: From Prompts to Orchestration</li>
                <li>• Agency &gt; Intelligence: Why Control Matters More Than Capability</li>
                <li>• Context Engineering: Beyond Prompt Engineering</li>
                <li>• The Three-Hat Framework: Systems, Product, Implementation</li>
                <li>• Building AI Systems That Scale: ODO Case Study</li>
                <li>• ADHD as an Agentic Advantage</li>
                <li>• The Sustainability Convergence: AI + Climate + Robotics</li>
                <li>• From Coaching to Orchestration</li>
                <li>• The 10,000-Hour Fallacy in the Age of AI</li>
                <li>• Building Your Agentic Engineering Practice</li>
              </ul>
            </div>
            <p className="text-gray-500 dark:text-gray-500 mt-6 text-sm">
              First post launching soon. Follow along on{' '}
              <a
                href="https://www.linkedin.com/in/daveliew/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-time)] hover:text-[var(--color-knowledge)] underline"
              >
                LinkedIn
              </a>
              {' '}for updates.
            </p>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
