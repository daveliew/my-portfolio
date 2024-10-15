import React from 'react';
import Image from 'next/image';
import AnimatedContent from './AnimatedContent';
import PortfolioSummary from './PortfolioSummary';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-space-black text-off-white">
      <nav className="md:w-1/4 lg:w-1/5 p-6 md:fixed md:h-screen md:overflow-hidden bg-dark-gray">
        <div className="flex items-center mb-4">
          <Image
            src="/images/logo.png"
            alt="David Liew Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <h1 className="text-4xl font-bold text-burgundy">daveliew</h1>
        </div>
        <div className="h-full overflow-y-auto scrollbar-hide">
          <PortfolioSummary />
          <div className="mt-auto pt-20">
            {/* Add social media icons here */}
          </div>
        </div>
      </nav>
      <main className="md:w-3/4 lg:w-4/5 md:ml-[25%] lg:ml-[20%] p-6 overflow-y-auto bg-space-black">
        <AnimatedContent>
          {children}
        </AnimatedContent>
      </main>
    </div>
  );
};

export default PortfolioLayout;
