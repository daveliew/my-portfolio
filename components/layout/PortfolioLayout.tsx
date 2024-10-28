import React from 'react';
import Image from 'next/image';
import AnimatedContent from '../common/AnimatedContent';
import PortfolioSummary from '../PortfolioSummary';
import ImpactfulStatement from '../common/ImpactfulStatement';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-space-black text-off-white">
      {/* Sidebar */}
      <nav className="
        w-full md:w-[300px] lg:w-[350px] 
        h-auto md:h-screen 
        p-6 
        bg-dark-gray
        md:fixed 
        md:overflow-y-auto
        scrollbar-hide
        border-b md:border-r border-gray-800
      ">
        <div className="flex items-center mb-8">
          <Image
            src="/images/logo.png"
            alt="David Liew Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <h1 className="text-3xl font-bold text-burgundy">daveliew</h1>
        </div>
        <div className="flex flex-col h-[calc(100vh-120px)]">
          <PortfolioSummary />
          <div className="mt-auto pt-8">
            {/* Social media icons */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="
        w-full 
        md:ml-[300px] lg:ml-[350px]
        min-h-screen
        p-6 md:p-8 lg:p-12
        bg-space-black
      ">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <ImpactfulStatement />
            {children}
          </AnimatedContent>
        </div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
