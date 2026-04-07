"use client";

import Link from "next/link";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto max-w-3xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Zap className="h-3 w-3" /> Early Access Phase
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
          The Future of Work <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">is Almost Here.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We are currently in a closed beta as we scale our agent compute. Join the waitlist to be notified when we open public registration.
        </p>

        {/* Email Capture Form */}
        <div className="bg-zinc-950 border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl mb-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          <h2 className="text-2xl font-bold mb-8">Reserve your spot</h2>
          
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full h-14 px-6 rounded-xl bg-black border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-lg"
              required
            />
            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full h-14 bg-white text-black font-bold rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              {status === "loading" ? "Joining..." : status === "success" ? "You're on the list!" : "Join the Waitlist"}
              {status === "idle" && <ArrowRight className="h-5 w-5" />}
            </button>
          </form>
          
          <p className="mt-6 text-sm text-gray-500">
            By joining, you agree to our terms and will receive occasional updates.
          </p>
        </div>

        {/* Features Row */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" /> Secure Data
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" /> Priority Support
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-green-500" /> Custom Roles
          </div>
        </div>
      </div>
    </div>
  );
}
