import React from 'react';
import Link from 'next/link';

const PortfolioSummary = () => {
  return (
    <div className="text-off-white text-sm">
      <h2 className="text-xl font-medium mb-4">Building Tomorrow&apos;s World with Human Creativity and AI Precision</h2>

      <h3 className="text-lg font-medium mb-2">Key Focus Areas:</h3>

      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li><b>Digital Innovation:</b> Leveraging AI to amplify human-driven marketing strategies</li>
        <li><b>Startup Acceleration:</b> Balancing entrepreneurial intuition with data-driven decision making</li>
        <li><b>Strategic Foresight:</b> Translating complex data into actionable business insights</li>
      </ul>
      
      <p className="mb-4">My approach: Transforming technological potential into tangible market success, responsibly and ethically.</p>
      
      <p className="mb-4">Ready to shape the future of your business? Let&apos;s collaborate.</p>
      
      <div className="flex space-x-4">
        <Link href="/projects" className="bg-[var(--primary-yellow)] text-[#0a192f] px-4 py-2 rounded text-sm font-medium hover:bg-[var(--primary-yellow-dark)] transition-colors">
          Explore Projects
        </Link>
        <Link href="/contact" className="bg-transparent border border-[var(--primary-yellow)] text-[var(--primary-yellow)] px-4 py-2 rounded text-sm font-medium hover:bg-[var(--primary-yellow-10)] transition-colors">
          Connect
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSummary;
