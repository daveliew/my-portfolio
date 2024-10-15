import { Raleway, Merriweather } from 'next/font/google'
import type { Metadata } from "next";
import '../styles/globals.css';
import PortfolioLayout from "../components/layout/PortfolioLayout";

const raleway = Raleway({ subsets: ['latin'] })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] })

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
    <html lang="en" className={`${raleway.className} ${merriweather.className}`}>
      <head>
        {/* Add any additional meta tags or links here */}
      </head>
      <body>
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
