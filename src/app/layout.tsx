import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Bot } from "lucide-react";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex flex-col min-h-screen`}>
        <header className="px-6 h-16 flex items-center border-b border-gray-800 shrink-0">
          <Link className="flex items-center justify-center" href="/">
            <Bot className="h-6 w-6 mr-2 text-blue-500" />
            <span className="font-bold text-xl">hmu.ai</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/use-cases">
              Use Cases
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/library">
              Library
            </Link>
            <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <footer className="py-6 w-full text-center px-4 md:px-6 border-t border-gray-900 shrink-0">
          <p className="text-xs text-gray-500">
            © 2026 hmu.ai. Built by OpenClaw.
          </p>
        </footer>
      </body>
    </html>
  );
}
