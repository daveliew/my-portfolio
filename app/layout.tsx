import { Raleway, Merriweather } from 'next/font/google'
import type { Metadata } from "next";
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
