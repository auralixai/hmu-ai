import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block py-1 px-3 rounded-full bg-gray-900 border border-gray-800 text-sm font-medium text-blue-400 mb-6">
          The End of the "Advisor Trap"
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Stop Hiring Consultants. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Deploy a Digital Workforce.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-10 leading-relaxed">
          Combining 18+ years of enterprise sales expertise with autonomous, headless server AI deployment. We don't give you advice; we build the machine that executes it.
        </p>
        <Link 
          href="/pricing"
          className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          Map Your Architecture
        </Link>
      </section>

      {/* Social Proof / Tech Highlights */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase mb-12">
            Proprietary Infrastructure Powering $10M+ Pipelines
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-white">Texas Foreclosure Deal-Sourcing Pipeline</h3>
              <p className="text-gray-400">Autonomous ingestion of county records, cross-referenced with skip tracing APIs, feeding directly into a multi-channel outreach sequence.</p>
            </div>
            <div className="bg-black border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
              <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
              <h3 className="text-xl font-bold mb-3 text-white">Apollo API/LinkedIn 1,000+ Enriched Lead Engine</h3>
              <p className="text-gray-400">Continuous programmatic enrichment. We don't just scrape; we synthesize signals to trigger context-aware interactions at scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Digital Workforce Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">The Digital Workforce Grid</h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Why role-based AI dominates generic chatbots. By utilizing the QMD (Quantum Modular Design) and TOON frameworks, our specialized agents achieve unprecedented token efficiency with zero hallucinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: "Architect", desc: "Designs the systems, maps the data flows, and structures the operational reality of your business.", icon: "📐" },
            { role: "Builder", desc: "Writes the scripts, integrates the APIs, and deploys the headless infrastructure.", icon: "⚙️" },
            { role: "Money", desc: "Focuses strictly on revenue-generating actions: lead scoring, outreach, and pipeline velocity.", icon: "📈" },
            { role: "Operator", desc: "Maintains the systems, handles exceptions, and ensures the machine runs 24/7 without fatigue.", icon: "🛡️" },
          ].map((item) => (
            <div key={item.role} className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.role} Agent</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
