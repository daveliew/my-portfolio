import { Raleway, Merriweather } from 'next/font/google'
import type { Metadata } from "next";
import '../styles/globals.css';
import PortfolioLayout from "../components/layout/PortfolioLayout";
import Navigation from '@/components/Navigation'

const raleway = Raleway({ subsets: ['latin'] })
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-merriweather'  // Add this line
})

export const metadata: Metadata = {
  title: "daveliew.com",
  description: "Human Creativity fused with Tomorrow's Technology",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={merriweather.variable}>  
      <body className={raleway.className}>
        <Navigation/>
        <PortfolioLayout>
          <main>
            {children}
          </main>
        </PortfolioLayout>
      </body>
    </html>
  );
}
