"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              FacilityOps.ai
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="#why" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Why It Matters</Link>
              <Link href="#technology" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Technology</Link>
              <Link href="#book" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Book a Call</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={() => setIsOpen(false)} href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="#why" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Why It Matters</Link>
            <Link onClick={() => setIsOpen(false)} href="#technology" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Technology</Link>
            <Link onClick={() => setIsOpen(false)} href="#book" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Book a Call</Link>
          </div>
        </div>
      )}
    </header>
  );
}
