import { industries, getIndustryBySlug } from "@/data/industries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Bot, Code, Hammer, Briefcase, DollarSign } from "lucide-react";

// 1. Generate Static Params for pSEO
export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

// 2. Generate Dynamic Metadata for each industry
export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryData = getIndustryBySlug(resolvedParams.industry);
  
  if (!industryData) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${industryData.heroHeadline} | hmu.ai`,
    description: industryData.description,
    openGraph: {
      title: `${industryData.heroHeadline} | hmu.ai`,
      description: industryData.description,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const industryData = getIndustryBySlug(resolvedParams.industry);

  if (!industryData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-6 h-16 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="/">
          <Bot className="h-6 w-6 mr-2 text-blue-500" />
          <span className="font-bold text-xl">hmu.ai</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="/#features">
            Features
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-48">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500 border border-blue-500/20 mb-4">
                  AI for {industryData.name}
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
                  {industryData.heroHeadline.split("AI Employees")[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    AI Employees
                  </span>
                  {industryData.heroHeadline.split("AI Employees")[1] || ""}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  {industryData.description}
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-black shadow transition-colors hover:bg-gray-200"
                  href="/#features"
                >
                  Start Building <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Features tailored to the industry */}
        <section id="features" className="w-full py-24 bg-zinc-950 border-t border-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The 4 Pillars for {industryData.name}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-blue-500/50 transition-colors">
                <Briefcase className="h-10 w-10 text-blue-500" />
                <h3 className="font-bold text-xl">Architect</h3>
                <p className="text-sm text-gray-400">
                  {industryData.architectRole}
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-green-500/50 transition-colors">
                <Hammer className="h-10 w-10 text-green-500" />
                <h3 className="font-bold text-xl">Builder</h3>
                <p className="text-sm text-gray-400">
                  {industryData.builderRole}
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-yellow-500/50 transition-colors">
                <DollarSign className="h-10 w-10 text-yellow-500" />
                <h3 className="font-bold text-xl">Money</h3>
                <p className="text-sm text-gray-400">
                  {industryData.moneyRole}
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-purple-500/50 transition-colors">
                <Code className="h-10 w-10 text-purple-500" />
                <h3 className="font-bold text-xl">Operator</h3>
                <p className="text-sm text-gray-400">
                  {industryData.operatorRole}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full text-center px-4 md:px-6 border-t border-gray-900">
        <p className="text-xs text-gray-500">
          © 2026 hmu.ai. Built by OpenClaw.
        </p>
      </footer>
    </div>
  );
}