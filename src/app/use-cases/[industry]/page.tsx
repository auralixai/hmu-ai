import { industries } from "@/data/industries";
import { agentUseCases } from "@/data/agents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Briefcase, Hammer, DollarSign, Code, ArrowUpRight, Zap } from "lucide-react";
import type { Metadata } from "next";

// 1. Generate Static Params for pSEO
export async function generateStaticParams() {
  return industries.map(industry => ({
    industry: industry.slug,
  }));
}

// 2. Generate Dynamic Metadata (Awaiting params for Next.js 15+)
export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industries.find(i => i.slug === resolvedParams.industry);
  
  if (!industry) {
    return {
      title: "Industry Not Found"
    }
  }
  return {
    title: `AI Agent Use Cases for ${industry.name} | hmu.ai`,
    description: industry.description,
  };
}

const agentTypes = [
  { name: "Architect", slug: "architect", description: "High-level strategic planning, system design, and project roadmapping.", icon: Briefcase, color: "blue" },
  { name: "Builder", slug: "builder", description: "Hands-on execution, coding, content creation, and technical implementation.", icon: Hammer, color: "green" },
  { name: "Money", slug: "money", description: "Financial analysis, revenue tracking, payment processing, and market insights.", icon: DollarSign, color: "yellow" },
  { name: "Operator", slug: "operator", description: "Daily operations, process automation, customer support, and system maintenance.", icon: Code, color: "purple" },
];

const themeMap = {
  blue: { border: "hover:border-blue-500/50", shadow: "hover:shadow-blue-500/10", bg: "bg-blue-500/10", text: "text-blue-400" },
  green: { border: "hover:border-green-500/50", shadow: "hover:shadow-green-500/10", bg: "bg-green-500/10", text: "text-green-400" },
  yellow: { border: "hover:border-yellow-500/50", shadow: "hover:shadow-yellow-500/10", bg: "bg-yellow-500/10", text: "text-yellow-400" },
  purple: { border: "hover:border-purple-500/50", shadow: "hover:shadow-purple-500/10", bg: "bg-purple-500/10", text: "text-purple-400" },
};

// 3. Main Industry Page Component
export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industry = industries.find(i => i.slug === resolvedParams.industry);

  if (!industry) {
    notFound();
  }
  
  const agentCounts = {
    architect: agentUseCases.filter(a => a.industrySlug === industry.slug && a.agentType === 'Architect').length,
    builder: agentUseCases.filter(a => a.industrySlug === industry.slug && a.agentType === 'Builder').length,
    money: agentUseCases.filter(a => a.industrySlug === industry.slug && a.agentType === 'Money').length,
    operator: agentUseCases.filter(a => a.industrySlug === industry.slug && a.agentType === 'Operator').length,
  };

  return (
    <div className="w-full">
      {/* 1. Impactful Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Zap className="h-3 w-3" /> Industry Solution
            </div>
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">{industry.name}</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-400 md:text-2xl leading-relaxed font-light">
              {industry.description}
            </p>
            
            <div className="pt-8">
               <Link href="/use-cases" className="text-sm font-semibold text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Industries
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 4 Pillars Grid */}
      <section className="py-32 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              The <span className="text-blue-500">4 Pillars</span> for {industry.name}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've trained specialized agents to handle every stage of your {industry.name.toLowerCase()} workflow.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {agentTypes.map(type => {
              const Icon = type.icon;
              const count = agentCounts[type.slug as keyof typeof agentCounts];
              const theme = themeMap[type.color as keyof typeof themeMap];
              
              return (
                <Link
                  key={type.slug}
                  href={`/use-cases/${industry.slug}/roles/${type.slug}`}
                  className="group block h-full"
                >
                  <div className={`flex flex-col p-8 border border-gray-800 rounded-3xl bg-zinc-950 transition-all duration-500 h-full relative overflow-hidden ${theme.border} ${theme.shadow}`}>
                    <div className={`absolute top-0 right-0 ${theme.bg} ${theme.text} text-[10px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-tighter`}>
                      {count} Agents Ready
                    </div>
                    <div className={`p-4 ${theme.bg} rounded-2xl w-fit mb-8 ${theme.text} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-blue-400 transition-colors">{type.name}</h3>
                    <p className="text-gray-400 leading-relaxed mb-10 flex-1 text-sm">
                      {industry[`${type.slug}Role` as keyof typeof industry] || type.description}
                    </p>
                    <div className={`flex items-center text-sm font-bold ${theme.text} group-hover:gap-3 transition-all mt-auto`}>
                      Deploy {type.name} <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="w-full py-24 bg-zinc-950 border-t border-white/5">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Ready to automate your {industry.name.toLowerCase()}?</h2>
          <Link
            href="/waitlist"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-black shadow-xl hover:bg-gray-200 hover:scale-105 transition-all"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
