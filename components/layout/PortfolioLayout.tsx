'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-dark-gray text-off-white font-sans">
      <Head>
        <title>David Liew</title>
        <meta name="description" content="David Liew's portfolio, AI journey and life musings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isHomePage={isHomePage} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioLayout;
