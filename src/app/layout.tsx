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
  title: {
    default: "hmu.ai - AI Workforce for Solopreneurs",
    template: "%s | hmu.ai"
  },
  description: "Scale your business with 24/7 AI agents: Architect, Builder, Money, Operator. Powered by OpenClaw.",
  openGraph: {
    title: "hmu.ai - Your AI Workforce",
    description: "Build your empire with specialized AI employees.",
    url: "https://hmu.ai",
    siteName: "hmu.ai",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hmu.ai - AI Workforce",
    description: "Scale solo with AI agents.",
    images: ["/og.png"],
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