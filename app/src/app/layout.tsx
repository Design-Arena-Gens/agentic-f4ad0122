import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberWave Lounge | Premium Cyber Cafe in Nigeria",
  description:
    "Discover CyberWave Lounge, a modern cyber cafe in Nigeria offering blazing-fast internet, secure workspaces, gaming zones, printing, and business lounge amenities.",
  metadataBase: new URL("https://agentic-f4ad0122.vercel.app"),
  openGraph: {
    title: "CyberWave Lounge | Premium Cyber Cafe in Nigeria",
    description:
      "Connect, work, and play with premium internet, secure work pods, gaming suites, and business concierge services in the heart of Lagos.",
    url: "https://agentic-f4ad0122.vercel.app",
    siteName: "CyberWave Lounge",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CyberWave Lounge - Modern Cyber Cafe in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberWave Lounge | Premium Cyber Cafe in Nigeria",
    description:
      "Experience elite connectivity at CyberWave Lounge with fast fibre internet, esports-ready rigs, and private work pods.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
