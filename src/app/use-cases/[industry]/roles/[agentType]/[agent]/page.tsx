import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Terminal, Network, MessageSquare, Target } from "lucide-react";
import { getIndustryBySlug } from "@/data/industries";
import { getAgentBySlug, agentUseCases } from "@/data/agents";

export async function generateStaticParams() {
  return agentUseCases.map((agent) => ({
    industry: agent.industrySlug,
    agentType: agent.agentType.toLowerCase(),
    agent: agent.slug,
  }));
}

export async function generateMetadata({ params }: { params: { industry: string, agentType: string, agent: string } }) {
  const industryData = getIndustryBySlug(params.industry);
  const agentData = getAgentBySlug(params.industry, params.agent);

  if (!agentData || !industryData) return { title: "Agent Not Found" };

  return {
    title: `${agentData.taskName} AI Agent for ${industryData.name} | hmu.ai`,
    description: `Deploy a hyper-focused ${agentData.agentType} AI agent for ${agentData.taskName} in the ${industryData.name} industry. Save hours every week.`,
  };
}

export default async function AgentPage({ params }: { params: { industry: string, agentType: string, agent: string } }) {
  const industryData = getIndustryBySlug(params.industry);
  const agentData = getAgentBySlug(params.industry, params.agent);

  if (!agentData || !industryData || agentData.agentType.toLowerCase() !== params.agentType) {
    notFound();
  }

  // Color mapping based on Agent Type
  const theme = {
    Architect: { color: "blue", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
    Builder: { color: "green", bg: "bg-green-500/10", border: "border-green-500/20", text: "text-green-400" },
    Money: { color: "yellow", bg: "bg-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400" },
    Operator: { color: "purple", bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
  }[agentData.agentType] || { color: "blue", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" };

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <Link 
          href={`/use-cases/${industryData.slug}/roles/${params.agentType}`} 
          className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {agentData.agentType} Agents
        </Link>
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-800 pb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme.bg} ${theme.text} text-sm font-bold mb-6 border ${theme.border} uppercase tracking-wider`}>
            <Target className="h-4 w-4" /> {agentData.agentType} Agent
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Hyper-Focused <span className={theme.text}>{agentData.taskName}</span> for {industryData.name}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Stop doing this manually. Deploy an autonomous {agentData.agentType} agent to handle {agentData.taskName.toLowerCase()} entirely in the background.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/pricing" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-black shadow transition-colors hover:bg-gray-200">
              Deploy This Agent Now
            </Link>
          </div>
        </div>

        {/* Dynamic SEO Content (Phase 3 will populate this) */}
        {agentData.seoData ? (
          <div className="space-y-16">
            {/* Command Example */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Terminal className={`h-6 w-6 ${theme.text}`} /> 
                Zero-Shot Command Setup
              </h2>
              <div className="bg-zinc-900 border border-gray-800 rounded-xl p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {agentData.seoData.commandExample}
              </div>
            </section>

            {/* Benefits */}
            <section className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Core Benefits & ROI</h2>
                <ul className="space-y-4">
                  {agentData.seoData.benefits?.map((benefit, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-300">
                      <CheckCircle2 className={`h-6 w-6 shrink-0 ${theme.text}`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integration Details */}
              <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Network className="h-5 w-5 text-gray-400" />
                  Ecosystem Integration
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {agentData.seoData.integrationDetails}
                </p>
              </div>
            </section>

            {/* Sample Output */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Sample Output</h2>
              <div className="bg-black border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="whitespace-pre-wrap text-gray-300 font-mono text-sm leading-relaxed">
                  {agentData.seoData.sampleOutput}
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-gray-400" /> 
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {agentData.seoData.faqs?.map((faq, i) => (
                  <div key={i} className="bg-zinc-900/50 rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-bold text-lg mb-2 text-white">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-950 border border-gray-800 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-400">Detailed setup guide coming soon.</h2>
            <p className="text-gray-500 mt-2">We are currently compiling the exact prompts and ROI data for this specialized agent.</p>
          </div>
        )}
      </div>
    </div>
  );
}
