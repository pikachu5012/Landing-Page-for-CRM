import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Landing Page",
  description: "A landing page for CRM",};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} antialiased min-h-screen w-full overflow-x-hidden`}>
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
