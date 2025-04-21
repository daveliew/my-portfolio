'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
          <Link 
            href="/" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              // Update URL without the hash
              window.history.pushState({}, '', '/');
            }}
          >
            <Image
              src="/images/logo.png"
              alt="David Liew Logo"
              width={28}
              height={28}
              className="mr-2"
            />
            <h1 className="text-xl md:text-2xl font-bold text-burgundy">daveliew</h1>
          </Link>

          <div className="flex space-x-6 md:space-x-10">
            <Link 
              href="/#skills" 
              className="text-off-white hover:text-burgundy transition-colors duration-300"
              onClick={(e) => {
                // Only use custom scroll behavior if already on the homepage
                if (isHomePage) {
                  e.preventDefault();
                  const skillsSection = document.getElementById('skills');
                  if (skillsSection) {
                    skillsSection.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', '/#skills');
                  }
                }
              }}
            >
              <span className="text-sm md:text-base">Skills</span>
            </Link>
            <Link 
              href="/#experience" 
              className="text-off-white hover:text-burgundy transition-colors duration-300"
              onClick={(e) => {
                // Only use custom scroll behavior if already on the homepage
                if (isHomePage) {
                  e.preventDefault();
                  const experienceSection = document.getElementById('experience');
                  if (experienceSection) {
                    experienceSection.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', '/#experience');
                  }
                }
                // If not on homepage, default behavior will navigate to /#experience
              }}
            >
              <span className="text-sm md:text-base">Experience</span>
            </Link>
            <Link href="/ai-journey" className="text-off-white hover:text-burgundy transition-colors duration-300">
              <span className="text-sm md:text-base">AI Journey</span>
            </Link>
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
        bg-gradient-to-b from-[var(--space-black-light)] to-[var(--space-black)]
      ">

        {children}
      </main>
    </div>
  );
};

export default PortfolioLayout;
