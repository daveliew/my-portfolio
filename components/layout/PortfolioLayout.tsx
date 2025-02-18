import React from 'react';
import Image from 'next/image';
import PortfolioSummary from '../common/PortfolioSummary';
import ImpactfulStatement from '../common/ImpactfulStatement';
import Link from 'next/link';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-space-black text-off-white">
      {/* Mobile-first Navigation */}
      <nav className="
        w-full
        bg-dark-gray
        border-b border-gray-800
        sticky top-0 z-50
        py-3 px-4 md:py-6 md:px-6
      ">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="David Liew Logo"
              width={28}
              height={28}
              className="mr-2"
            />
            <h1 className="text-xl md:text-2xl font-bold text-burgundy">daveliew</h1>
          </Link>

          <div className="flex space-x-8 md:space-x-12">
            <a href="#top" className="text-off-white hover:text-burgundy transition-colors duration-300">
              <span className="text-sm md:text-base">About</span>
            </a>
            <a href="#skills" className="text-off-white hover:text-burgundy transition-colors duration-300">
              <span className="text-sm md:text-base">Skills</span>
            </a>
            <a href="#experience" className="text-off-white hover:text-burgundy transition-colors duration-300">
              <span className="text-sm md:text-base">Experience</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="
        flex-1
        w-full
        px-4 py-6
        md:px-8 md:py-8
        lg:px-12 lg:py-10
        bg-space-black
      ">
        <div className="max-w-4xl mx-auto">
          <ImpactfulStatement />
          <PortfolioSummary className="mt-8 md:mt-12" />
          {children}
        </div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
