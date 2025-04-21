import React from 'react';
import CoreImpactSystems from './CoreImpactSystems'; // Import the new component

const PortfolioSummary = ({ className }: { className?: string }) => {
  // Removed borderColors definition as it's moved to CoreImpactSystems

  return (
    <section className="w-full bg-[var(--space-black-light)] border-t border-b border-gray-800/20 mt-0">
      {/* Reduced top padding py-8 md:py-12 -> py-4 md:py-6 */}
      <div className={`max-w-7xl mx-auto py-4 md:py-6 px-4 ${className || ''}`}>
        <CoreImpactSystems />

      </div>
    </section>
  );
};

export default PortfolioSummary;
