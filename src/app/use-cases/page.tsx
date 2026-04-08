import Link from "next/link";
import { ArrowRight, Bot, Target, Users, Zap, Code, PenTool, TrendingUp, Building } from "lucide-react";
import { industries } from "../../data/industries";

const iconMap: Record<string, any> = {
  "e-commerce": TrendingUp,
  "real-estate": Building,
  "marketing-agencies": Target,
  "content-creators": PenTool,
  "saas-founders": Code,
  "consultants": Users,
  "freelance-developers": Zap,
  "online-coaches": Bot,
};

export const metadata = {
  title: "AI Agent Use Cases by Industry | hmu.ai",
  description: "Explore autonomous pipelines tailored to your industry. Discover how hmu.ai can scale e-commerce, real estate, SaaS, and more.",
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
            <Zap className="h-4 w-4" /> Solutions for Every Niche
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Choose Your Industry – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Scale with Pipelines</span>
          </h1>
          <p className="text-xl text-gray-400">
            Stop spending hours configuring generic tools. Pick your industry and explore high-converting architectural maps built specifically for your business model.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {industries.map((industry) => {
            const Icon = iconMap[industry.slug] || Bot;
            return (
              <Link 
                key={industry.slug} 
                href={`/use-cases/${industry.slug}`}
                className="group flex flex-col p-6 bg-zinc-950 border border-gray-800 rounded-2xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-100">{industry.name}</h2>
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {industry.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-400 mt-auto group-hover:text-blue-300 transition-colors">
                  Explore {industry.name} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats/Trust Section */}
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Solopreneurs save <span className="text-blue-400">20+ hrs/week</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <p className="text-gray-400">Faster time to market with automated task delegation.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <p className="text-gray-400">Increase in output without hiring human employees.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-400">Continuous execution across all 4 operational pillars.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your AI workforce?</h2>
          <Link
            href="/pricing"
            className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:scale-105"
          >
            View Pricing & Plans <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
