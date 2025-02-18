import React from 'react';
import Link from 'next/link';

const PortfolioSummary = ({ className }: { className?: string }) => {
  return (
    <div className={`text-off-white ${className || ''}`}>
      <h3 className="text-xl font-medium mb-4 text-center">Key Focus Areas</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-dark-gray rounded-lg">
          <h4 className="font-bold mb-2 text-primary-yellow">Digital Innovation</h4>
          <p className="text-sm">Leveraging AI to amplify human-driven marketing strategies</p>
        </div>
        
        <div className="p-4 bg-dark-gray rounded-lg">
          <h4 className="font-bold mb-2 text-primary-yellow">Startup Acceleration</h4>
          <p className="text-sm">Balancing entrepreneurial intuition with data-driven decision making</p>
        </div>
        
        <div className="p-4 bg-dark-gray rounded-lg">
          <h4 className="font-bold mb-2 text-primary-yellow">Strategic Foresight</h4>
          <p className="text-sm">Translating complex data into actionable business insights</p>
        </div>
      </div>

      <p className="mt-6 mb-8 text-center max-w-2xl mx-auto">
        I bridge the gap between visionary ideas and technological realities, crafting solutions that harness the best of human ingenuity and artificial intelligence.
      </p>
      
      <div className="flex justify-center">
        <Link href="#experience" className="bg-[var(--primary-yellow)] text-[#0a192f] px-6 py-2 rounded text-sm font-medium hover:bg-[var(--primary-yellow-dark)] transition-colors">
          My Experience
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSummary;
