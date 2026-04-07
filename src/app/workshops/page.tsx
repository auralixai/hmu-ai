"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Users, MapPin, Zap, CheckCircle } from "lucide-react";

export default function Workshops() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: "workshop" }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-32">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-20 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 text-blue-400" /> Houston, TX (Cypress / Champions)
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8">
            Sell the Magic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Cut 15 Hours of Weekly Admin.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            An exclusive, 1-day executive briefing for local business owners. Demystify AI, witness a live autonomous pipeline deployment, and map your company's digital workforce.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 border border-gray-800 rounded-3xl bg-zinc-950 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Duration</h3>
            <p className="text-gray-400">1-Day Intensive (4-6 Hours)</p>
          </div>
          <div className="p-8 border border-gray-800 rounded-3xl bg-zinc-950 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Exclusivity</h3>
            <p className="text-gray-400">Strictly limited to 10 participants.</p>
          </div>
          <div className="p-8 border border-gray-800 rounded-3xl bg-zinc-950 flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">Investment</h3>
            <p className="text-gray-400">$997 Per Seat</p>
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">The Executive Itinerary</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start p-8 border border-gray-800 rounded-3xl bg-zinc-950">
              <div className="flex-shrink-0 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">01</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Demystifying Consumer AI</h3>
                <p className="text-gray-400 leading-relaxed">We cut through the noise of ChatGPT and generic tools. Understand exactly how language models actually work beneath the surface, and why businesses fail when they try to use chatbots as employees.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start p-8 border border-gray-800 rounded-3xl bg-zinc-950">
              <div className="flex-shrink-0 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600">02</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">The "Magic Trick"</h3>
                <p className="text-gray-400 leading-relaxed">Watch a live, real-time deployment of a custom OpenClaw autonomous pipeline. We will build, deploy, and execute a multi-agent system right in front of you, automating a 10-hour workload in 60 seconds.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start p-8 border border-gray-800 rounded-3xl bg-zinc-950">
              <div className="flex-shrink-0 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">03</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Boardroom Q&A & Mapping</h3>
                <p className="text-gray-400 leading-relaxed">Open floor session to discuss your specific operations. Leave with a high-level architectural map of exactly where an AI workforce can replace overhead in your specific company.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 border border-blue-500/30 rounded-3xl bg-blue-500/5 relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-all"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to automate your operations?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Seats are extremely limited to ensure an intimate, high-value boardroom experience. Reserve yours today.</p>
          <button 
            onClick={handleCheckout} 
            disabled={loading}
            className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-black shadow-lg shadow-white/10 transition-all hover:bg-gray-200 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Apply for a Seat ($997)"} <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
