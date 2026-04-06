"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Eye, BarChart3, CheckCircle2 } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      {/* A. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 max-w-5xl mx-auto leading-tight">
              Autonomous Inspection & Compliance for Critical Infrastructure
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Data centers and bitcoin mining facilities are running blind between sensor logs and human walk-throughs. We close the gap — delivering <strong className="text-white">70–90% fewer missed inspections</strong> and <strong className="text-white">$180k+ annual savings</strong> per site.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#book" className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)]">
                Book a 15-Min Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#why" className="px-8 py-4 text-base font-semibold text-gray-300 hover:text-white transition-colors">
                See the ROI in 60 Seconds
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* B. The Problem Section */}
      <section id="problem" className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">The Status Quo is Failing</h2>
              <p className="text-3xl font-semibold text-gray-200">
                Current inspection methods are manual, error-prone, and too slow for modern 24/7 facilities.
              </p>
            </motion.div>
            
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, text: "$1M+ unplanned downtime", sub: "Annual industry average" },
                { icon: BarChart3, text: "40–60% inspection time wasted", sub: "On manual data entry" },
                { icon: Shield, text: "Compliance gaps exposed in audits", sub: "Due to missing records" },
                { icon: Eye, text: "Zero proof-of-coverage", sub: "For critical blind spots" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-black border border-white/10 hover:border-orange-500/50 transition-colors">
                  <item.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.text}</h3>
                  <p className="text-gray-500 text-sm">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* C. Why FacilityOps / ROI Teaser */}
      <section id="why" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: ROI Box */}
            <motion.div variants={fadeInUp} className="relative p-1 rounded-3xl bg-gradient-to-b from-orange-500/30 to-white/5">
              <div className="bg-neutral-950 p-8 sm:p-12 rounded-[22px] h-full">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Typical Site Results</h3>
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1 mr-4" />
                    <div>
                      <p className="text-3xl font-black text-white">70–90%</p>
                      <p className="text-gray-400 mt-1">gap reduction in coverage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1 mr-4" />
                    <div>
                      <p className="text-3xl font-black text-white">$180k+</p>
                      <p className="text-gray-400 mt-1">saved per year, per site</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1 mr-4" />
                    <div>
                      <p className="text-3xl font-black text-white">1–3 hrs</p>
                      <p className="text-gray-400 mt-1">tech time freed per shift</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {[
                { title: "Non-Invasive Deployment", desc: "Installs in hours with zero disruption to existing critical infrastructure." },
                { title: "Route Intelligence + Proof-of-Miss", desc: "Dynamic pathing that automatically flags and records skipped areas." },
                { title: "Closed-Loop Operations", desc: "Integrates directly with your CMMS/EAM to generate actionable work orders." },
                { title: "Audit-Grade Compliance", desc: "Immutable inspection logs for ISO, SOC, and internal compliance readiness." }
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* D. The Technology Tease */}
      <section id="technology" className="py-24 bg-neutral-900 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Zap className="w-12 h-12 text-orange-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold text-white mb-8">Unfair Technological Advantage</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              Our platform combines advanced kinematics, real-time thermal acquisition, and AI-driven audit logs into a single inspection system of record. The exact architecture and integration details are shown only on a private demo call.
            </p>
            <a href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-full bg-white/10 hover:bg-white/20 border border-white/20">
              Request Technology Brief
            </a>
          </motion.div>
        </div>
      </section>

      {/* E. GTM Positioning Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Stop managing sensor noise. Start acting on verified thermal anomalies.",
              "We don't replace your technicians. We give them eyes everywhere at once.",
              "Proof-of-coverage isn't a luxury; it's your defense against compliance failures.",
              "Reduce your facility walk-throughs by 80% without losing a single data point.",
              "Your CMMS is only as good as the data entered. We automate the entry."
            ].map((quote, i) => (
              <motion.div key={i} variants={fadeInUp} className={`p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 shadow-lg ${i === 3 ? "md:col-span-2 lg:col-span-1" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                <p className="text-lg font-medium text-gray-300 italic">"{quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* F. Final CTA Section */}
      <section id="book" className="py-32 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to automate the invisible?
            </h2>
            <p className="text-xl text-orange-100 mb-10 font-medium">
              Built for facility managers who refuse to accept inspection gaps in 24/7 operations.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href="mailto:pilots@facilityops.ai" className="group flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-orange-600 bg-white transition-transform hover:scale-105 rounded-full shadow-2xl">
                Book a 15-Min Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-orange-200">
                Or email us at <a href="mailto:pilots@facilityops.ai" className="text-white hover:underline font-semibold">pilots@facilityops.ai</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
