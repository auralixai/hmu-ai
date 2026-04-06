import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FacilityOps.ai - Autonomous Inspection & Compliance",
  description: "Autonomous Inspection & Compliance for Critical Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-neutral-950 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
            <p>&copy; FacilityOps AI 2026 &bull; Confidential pilots for data centers &amp; bitcoin mining facilities &bull; pilots@facilityops.ai</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
