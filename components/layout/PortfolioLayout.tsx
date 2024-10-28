import React from 'react';
import Image from 'next/image';
import AnimatedContent from '../common/AnimatedContent';
import PortfolioSummary from '../PortfolioSummary';
import ImpactfulStatement from '../common/ImpactfulStatement';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-space-black text-off-white relative">
      {/* Sidebar */}
      <nav className="
        w-full md:w-[300px] lg:w-[350px] 
        h-auto md:h-screen 
        py-4 md:py-6
        px-6 md:px-6
        bg-dark-gray
        md:fixed 
        md:overflow-y-auto
        scrollbar-hide
        border-b md:border-r border-gray-800
      ">
        {/* Logo and title container */}
        <div className="flex items-center mb-4 md:mb-8">
          <Image
            src="/images/logo.png"
            alt="David Liew Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <h1 className="text-xl md:text-3xl font-bold text-burgundy">daveliew</h1>
        </div>

        {/* Portfolio Summary */}
        <div className="md:flex md:flex-col md:h-[calc(100vh-240px)]">
          <PortfolioSummary />
        </div>

        {/* Section Navigation */}
        <div className="mt-8">
          <ul className="space-y-4">
            <li>
              <a href="#about" className="text-off-white hover:text-burgundy transition-colors duration-300 flex items-center">
                <span className="text-sm">About</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="text-off-white hover:text-burgundy transition-colors duration-300 flex items-center">
                <span className="text-sm">Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="text-off-white hover:text-burgundy transition-colors duration-300 flex items-center">
                <span className="text-sm">Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="
        w-full 
        md:ml-[300px] lg:ml-[350px]
        min-h-screen
        px-6 md:p-8 lg:p-12
        pt-4 md:pt-8
        bg-space-black
        relative
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
