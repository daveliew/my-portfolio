import React from 'react';
import Link from 'next/link';

const PortfolioSummary = ({ className }: { className?: string }) => {
  return (
    <section className={`w-full max-w-7xl mx-auto ${className || ''}`}>
      <h2 className="text-4xl font-bold text-center mb-8 text-off-white">
        Key Focus Areas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-dark-gray rounded-lg">
          <h4 className="text-xl font-medium mb-2 text-primary-yellow">Digital Innovation</h4>
          <p className="text-gray-300">Leveraging AI to amplify human-driven marketing strategies</p>
        </div>
        
        <div className="p-6 bg-dark-gray rounded-lg">
          <h4 className="text-xl font-medium mb-2 text-primary-yellow">Startup Acceleration</h4>
          <p className="text-gray-300">Balancing entrepreneurial intuition with data-driven decision making</p>
        </div>
        
        <div className="p-6 bg-dark-gray rounded-lg">
          <h4 className="text-xl font-medium mb-2 text-primary-yellow">Strategic Foresight</h4>
          <p className="text-gray-300">Translating complex data into actionable business insights</p>
        </div>
      </div>

      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        I bridge the gap between visionary ideas and technological realities, crafting solutions that harness the best of human ingenuity and artificial intelligence.
      </p>
      
      <div className="flex justify-center">
        <Link 
          href="#experience" 
          className="bg-[var(--primary-yellow)] text-[#0a192f] px-6 py-3 rounded text-lg font-medium hover:bg-[var(--primary-yellow-dark)] transition-colors"
        >
          My Experience
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSummary;
