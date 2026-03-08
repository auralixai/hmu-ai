import { industries, getIndustryBySlug } from "@/data/industries";
import { agentUseCases } from "@/data/agents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Briefcase, Hammer, DollarSign, Code, ArrowUpRight } from "lucide-react";
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

// Helper to map colors to Tailwind classes (avoids dynamic class issues)
const colorMap = {
  blue: { border: "hover:border-blue-500/50", shadow: "hover:shadow-blue-500/15", bg: "bg-blue-500/10", text: "text-blue-400" },
  green: { border: "hover:border-green-500/50", shadow: "hover:shadow-green-500/15", bg: "bg-green-500/10", text: "text-green-400" },
  yellow: { border: "hover:border-yellow-500/50", shadow: "hover:shadow-yellow-500/15", bg: "bg-yellow-500/10", text: "text-yellow-400" },
  purple: { border: "hover:border-purple-500/50", shadow: "hover:shadow-purple-500/15", bg: "bg-purple-500/10", text: "text-purple-400" },
};

// 3. Main Industry Page Component (Awaiting params for Next.js 15+)
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
      <section className="py-24 md:py-32 bg-zinc-950 border-b border-gray-800 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <p className="text-blue-400 font-semibold mb-3 tracking-wider uppercase text-sm">Industry Spotlight</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            {industry.name}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {industry.description}
          </p>
           <div className="mt-8 text-sm">
             <Link href="/use-cases" className="text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Industries
             </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The 4 Pillars for {industry.name}</h2>
            <p className="text-gray-500 mt-2">Specialized agents trained for your specific workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agentTypes.map(type => {
              const Icon = type.icon;
              const count = agentCounts[type.slug as keyof typeof agentCounts];
              const theme = colorMap[type.color as keyof typeof colorMap];
              return (
                <Link
                  key={type.slug}
                  href={`/use-cases/${industry.slug}/roles/${type.slug}`}
                  className="group block h-full"
                >
                  <div className={`flex flex-col p-8 border border-gray-800 rounded-3xl bg-black ${theme.border} hover:bg-zinc-900 transition-all duration-300 h-full relative overflow-hidden`}>
                     <div className={`absolute top-0 right-0 ${theme.bg} ${theme.text} text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl`}>
                       {count} Agents
                    </div>
                    <div className={`p-4 ${theme.bg} rounded-2xl w-fit mb-6 ${theme.text} group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3">{type.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{type.description}</p>
                    <div className={`flex items-center text-sm font-semibold ${theme.text} group-hover:brightness-125 transition-all mt-auto`}>
                      View Agents <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
