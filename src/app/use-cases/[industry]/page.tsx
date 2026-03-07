import { industries, getIndustryBySlug } from "@/data/industries";
import { getAgentsByIndustry } from "@/data/agents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Bot, Code, Hammer, Briefcase, DollarSign, Target } from "lucide-react";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryData = getIndustryBySlug(resolvedParams.industry);
  
  if (!industryData) return { title: "Not Found" };

  return {
    title: `${industryData.heroHeadline} | hmu.ai`,
    description: industryData.description,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryData = getIndustryBySlug(resolvedParams.industry);

  if (!industryData) notFound();

  const agents = getAgentsByIndustry(resolvedParams.industry);

  return (
    <>
      <section className="w-full py-24 md:py-32 lg:py-48">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500 border border-blue-500/20 mb-4">
                AI for {industryData.name}
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
                {industryData.heroHeadline}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                {industryData.description}
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-black shadow transition-colors hover:bg-gray-200"
                href="#agents"
              >
                View Specialized Agents <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section id="agents" className="w-full py-24 bg-zinc-950 border-t border-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Deploy Hyper-Focused {industryData.name} Agents
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Select an agent below to see its exact prompt, ROI, and integration details.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {agents.map((agent) => (
              <Link 
                key={agent.slug}
                href={`/use-cases/${industryData.slug}/${agent.slug}`}
                className="group flex flex-col p-5 bg-black border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${
                    agent.agentType === 'Architect' ? 'bg-blue-500/10 text-blue-500' :
                    agent.agentType === 'Builder' ? 'bg-green-500/10 text-green-500' :
                    agent.agentType === 'Money' ? 'bg-yellow-500/10 text-yellow-500' :
                    'bg-purple-500/10 text-purple-500'
                  }`}>
                    <Target className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{agent.agentType}</span>
                </div>
                <h3 className="font-bold text-gray-100 mb-2">{agent.taskName}</h3>
                <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  View Setup <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
