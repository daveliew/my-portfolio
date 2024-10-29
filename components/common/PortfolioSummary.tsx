import React from 'react';
import Link from 'next/link';

const PortfolioSummary = () => {
  return (
    <div className="text-off-white text-sm">
      

      <h3 className="text-lg font-medium mb-2 bold underline">Key Focus Areas</h3>

      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li><b>Digital Innovation:</b> Leveraging AI to amplify human-driven marketing strategies</li>
        <li><b>Startup Acceleration:</b> Balancing entrepreneurial intuition with data-driven decision making</li>
        <li><b>Strategic Foresight:</b> Translating complex data into actionable business insights</li>
      </ul>
      
      <p className="mb-4">I bridge the gap between visionary ideas and technological realities, crafting solutions that harness the best of human ingenuity and artificial intelligence.</p>
      
      <div className="flex space-x-4">
        <Link href="#experience" className="bg-[var(--primary-yellow)] text-[#0a192f] px-4 py-2 rounded text-sm font-medium hover:bg-[var(--primary-yellow-dark)] transition-colors">
          My Experience
        </Link>
        {/* <Link href="/contact" className="bg-transparent border border-[var(--primary-yellow)] text-[var(--primary-yellow)] px-4 py-2 rounded text-sm font-medium hover:bg-[var(--primary-yellow-10)] transition-colors">
          Connect
        </Link> */}
      </div>
    </div>
  );
};

export default PortfolioSummary;
