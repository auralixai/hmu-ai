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
      <section className="py-24 md:py-32 bg-zinc-950 border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-blue-400 font-semibold mb-3">Use Cases</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            {industry.name}
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {industry.description}
          </p>
           <div className="mt-4 text-sm">
             <Link href="/use-cases" className="text-gray-400 hover:text-white transition-colors">
                &larr; Back to All Industries
             </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agentTypes.map(type => {
              const Icon = type.icon;
              const count = agentCounts[type.slug as keyof typeof agentCounts];
              return (
                <Link
                  key={type.slug}
                  href={`/use-cases/${industry.slug}/roles/${type.slug}`}
                  className="group block h-full"
                >
                  <div className={`flex flex-col p-8 border border-gray-800 rounded-3xl bg-black hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300 h-full relative overflow-hidden`}>
                     <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
                       {count} Agents
                    </div>
                    <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-2xl mb-3">{type.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{type.description}</p>
                    <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
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
