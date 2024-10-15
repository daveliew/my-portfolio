import type { Metadata } from "next";
import '../styles/globals.css';
import '../styles/fonts.css';
import PortfolioLayout from "../components/PortfolioLayout";

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
    <html lang="en">
      <head>
        {/* Add any additional meta tags or links here */}
      </head>
      <body>
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
