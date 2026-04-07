import Link from "next/link";
import { ArrowRight, Code, Hammer, Briefcase, DollarSign, BookOpen, Zap, Target, ArrowUpRight } from "lucide-react";
import { industries } from "../data/industries";
import { agentUseCases } from "../data/agents";
import { dictionaryMetadata } from "../data/dictionaries";

export default function Home() {
  // Grab a diverse sample of agents for the showcase grid
  const showcaseAgents = agentUseCases.filter((_, i) => i % 33 === 0).slice(0, 12);

  return (
    <>
      {/* 1. High-Impact Hero & Stats Bar */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <div className="flex flex-col items-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-4">
              <Zap className="h-4 w-4 text-blue-400" /> The End of the "Advisor Trap"
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
              Stop Hiring Consultants. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Deploy a Digital Workforce.</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl leading-relaxed">
              Combining 18+ years of enterprise sales expertise with autonomous, headless server AI deployment. We don't give you advice; we build the machine that executes it.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:scale-105"
                href="/pricing"
              >
                Map Your Architecture <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                className="inline-flex h-14 items-center justify-center rounded-full bg-zinc-900 border border-gray-800 px-8 text-base font-bold text-white transition-all hover:bg-zinc-800 hover:border-gray-700"
                href="/insider"
              >
                Become an Insider
              </Link>
            </div>

            {/* Social Proof Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-16 pt-12 border-t border-white/10 w-full max-w-4xl text-left">
              <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-400"/>
                  Texas Foreclosure Pipeline
                </h3>
                <p className="text-sm text-gray-400">Autonomous ingestion of county records, cross-referenced with skip tracing APIs, feeding directly into a multi-channel outreach sequence.</p>
              </div>
              <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-400"/>
                  Apollo API/LinkedIn Engine
                </h3>
                <p className="text-sm text-gray-400">Continuous programmatic enrichment. We don't just scrape; we synthesize signals to trigger context-aware interactions at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The "Command Center" Agent Showcase */}
      <section className="w-full py-12 bg-black overflow-hidden relative border-y border-white/5">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">A glimpse inside the deployment bay</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-7xl mx-auto px-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {showcaseAgents.map((agent) => (
            <Link 
              key={agent.slug}
              href={`/use-cases/${agent.industrySlug}/roles/${agent.agentType.toLowerCase()}/${agent.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-gray-800 text-sm text-gray-300 hover:bg-zinc-800 hover:text-white hover:border-blue-500/50 transition-colors"
            >
              <Target className={`h-3 w-3 ${
                agent.agentType === 'Architect' ? 'text-blue-400' :
                agent.agentType === 'Builder' ? 'text-green-400' :
                agent.agentType === 'Money' ? 'text-yellow-400' : 'text-purple-400'
              }`} />
              {agent.taskName} {agent.agentType}
            </Link>
          ))}
        </div>
      </section>

      {/* 3. The 4 Pillars (Premium Upgrade) */}
      <section id="features" className="w-full py-32 bg-zinc-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              The <span className="text-blue-500">Digital Workforce</span> Grid
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Why role-based AI dominates generic chatbots. By utilizing the QMD (Quantum Modular Design) and TOON frameworks, our specialized agents achieve unprecedented token efficiency with <strong className="text-white">zero hallucinations</strong>.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-col p-8 border border-gray-800 rounded-3xl bg-black hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300">
              <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Architect</h3>
              <p className="text-gray-400 leading-relaxed">
                Designs the systems, maps the data flows, and structures the operational reality of your business before a single API is hit.
              </p>
            </div>
            <div className="group flex flex-col p-8 border border-gray-800 rounded-3xl bg-black hover:border-green-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)] transition-all duration-300">
              <div className="p-4 bg-green-500/10 rounded-2xl w-fit mb-6 text-green-500 group-hover:scale-110 transition-transform">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Builder</h3>
              <p className="text-gray-400 leading-relaxed">
                Rolls up their sleeves to write the scripts, integrate the external APIs, and deploy the headless infrastructure the Architect designed.
              </p>
            </div>
            <div className="group flex flex-col p-8 border border-gray-800 rounded-3xl bg-black hover:border-yellow-500/50 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.15)] transition-all duration-300">
              <div className="p-4 bg-yellow-500/10 rounded-2xl w-fit mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Money</h3>
              <p className="text-gray-400 leading-relaxed">
                Focuses strictly on revenue-generating actions: lead scoring, outreach qualification, tracking ROAS, and maximizing pipeline velocity.
              </p>
            </div>
            <div className="group flex flex-col p-8 border border-gray-800 rounded-3xl bg-black hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300">
              <div className="p-4 bg-purple-500/10 rounded-2xl w-fit mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-2xl mb-4">Operator</h3>
              <p className="text-gray-400 leading-relaxed">
                The engine that never stops. Maintains the systems, handles exceptions, qualifies inbound leads, and ensures the machine runs 24/7 without fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industry Hub (The Sub-Category Linker) */}
      <section id="use-cases" className="w-full py-32 bg-black border-t border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Who We Help</h2>
              <p className="text-gray-400 md:text-xl max-w-2xl">
                We've trained 65 hyper-focused agents for each of these core industries.
              </p>
            </div>
            <Link href="/use-cases" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group">
              View All Use Cases <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ slug, name, heroHeadline }) => {
              const industryAgents = agentUseCases.filter(a => a.industrySlug === slug).length;
              return (
                <Link 
                  key={slug} 
                  href={`/use-cases/${slug}`} 
                  className="group block h-full"
                >
                  <div className="flex flex-col p-8 border border-gray-800 rounded-3xl bg-zinc-950 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
                      {industryAgents} Agents
                    </div>
                    <h3 className="font-bold text-2xl mb-3 pr-8">{name}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 flex-1">{heroHeadline}</p>
                    <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                      Explore Agents <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. The Library Teaser */}
      <section className="w-full py-32 bg-zinc-950 border-t border-gray-900">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl mb-8">
            <BookOpen className="h-10 w-10 text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Master the Language of AI & Business
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Don't know what an LLM or ROAS is? We compiled over 960+ definitions, examples, and deep dives across 10 comprehensive dictionaries. 
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.keys(dictionaryMetadata).slice(0, 6).map(slug => (
              <span key={slug} className="px-4 py-2 bg-black border border-gray-800 rounded-full text-sm text-gray-400">
                {dictionaryMetadata[slug].title}
              </span>
            ))}
            <span className="px-4 py-2 bg-black border border-gray-800 rounded-full text-sm text-gray-500">
              + 4 more
            </span>
          </div>
          <Link
            href="/library"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black shadow transition-all hover:bg-gray-200"
          >
            Access the Free Library <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
