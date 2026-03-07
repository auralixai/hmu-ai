import { agentUseCases } from "@/data/agents";
import { industries } from "@/data/industries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Briefcase, Hammer, DollarSign, Code, Target, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

const agentTypeData = {
  architect: { name: "Architect", icon: Briefcase, color: "blue", description: "High-level strategic planning, system design, and project roadmapping." },
  builder: { name: "Builder", icon: Hammer, color: "green", description: "Hands-on execution, coding, content creation, and technical implementation." },
  money: { name: "Money", icon: DollarSign, color: "yellow", description: "Financial analysis, revenue tracking, payment processing, and market insights." },
  operator: { name: "Operator", icon: Code, color: "purple", description: "Daily operations, process automation, customer support, and system maintenance." },
};

export async function generateStaticParams() {
  const params = [];
  const agentTypeSlugs = ["architect", "builder", "money", "operator"];
  for (const industry of industries) {
    for (const agentType of agentTypeSlugs) {
      params.push({ industry: industry.slug, agentType });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { industry: string; agentType: string } }): Promise<Metadata> {
  const industry = industries.find(i => i.slug === params.industry);
  const agentTypeInfo = agentTypeData[params.agentType as keyof typeof agentTypeData];

  if (!industry || !agentTypeInfo) {
    return {
      title: "Not Found"
    }
  }

  return {
    title: `${agentTypeInfo.name} Agents for ${industry.name}`,
    description: `Browse specialized ${agentTypeInfo.name} AI agents for the ${industry.name} industry. ${agentTypeInfo.description}`,
  };
}

export default function AgentTypePage({ params }: { params: { industry: string; agentType: string } }) {
  const { industry: industrySlug, agentType: agentTypeSlug } = params;

  const industry = industries.find(i => i.slug === industrySlug);
  const agentTypeInfo = agentTypeData[agentTypeSlug as keyof typeof agentTypeData];

  if (!industry || !agentTypeInfo) {
    notFound();
  }

  const filteredAgents = agentUseCases.filter(a => 
    a.industrySlug === industrySlug && 
    a.agentType.toLowerCase() === agentTypeSlug
  );

  const Icon = agentTypeInfo.icon;
  const colorClass = `text-${agentTypeInfo.color}-400`;
  const ringColorClass = `ring-${agentTypeInfo.color}-500/30`;

  return (
    <div className="w-full">
      <section className={`py-20 md:py-28 bg-zinc-950 border-b border-gray-800`}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center items-center mb-6">
             <div className={`relative w-16 h-16 flex items-center justify-center bg-black rounded-2xl ring-4 ${ringColorClass}`}>
               <Icon className={`h-8 w-8 ${colorClass}`} />
             </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            {agentTypeInfo.name} Agents
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Specialized <strong className={colorClass}>{agentTypeInfo.name}</strong> agents designed for the <strong className="text-white">{industry.name}</strong> industry. {agentTypeInfo.description}
          </p>
          <div className="mt-4 text-sm">
             <Link href={`/use-cases/${industry.slug}`} className="text-gray-400 hover:text-white transition-colors">
                ← Back to {industry.name}
             </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map(agent => (
              <Link
                key={agent.slug}
                href={`/use-cases/${industrySlug}/${agent.slug}`}
                className="group block h-full"
              >
                <div className="flex flex-col p-8 border border-gray-800 rounded-3xl bg-zinc-950 hover:border-white/20 hover:bg-zinc-900 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                     <Target className={`h-5 w-5 ${colorClass} flex-shrink-0`} />
                     <h3 className="font-semibold text-lg text-white">{agent.taskName}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{agent.taskName.slice(0, 100)}...</p>
                  <div className="flex items-center justify-end text-xs font-semibold text-gray-500 group-hover:text-white transition-colors mt-auto">
                    View Agent Details <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
