import Link from "next/link";
import { ArrowRight, Code, Hammer, Briefcase, DollarSign } from "lucide-react";
import { industries } from "../data/industries";

export default function Home() {
  return (
    <>
      <section className="w-full py-24 md:py-32 lg:py-48">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI Workforce</span> is Ready
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Scale your solopreneur business with specialized AI employees. Architect, Builder, Money, and Operator are waiting for your command.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-black shadow transition-colors hover:bg-gray-200"
                href="#features"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-24 bg-zinc-950 border-t border-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The 4 Pillars of Scale
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-blue-500/50 transition-colors">
              <Briefcase className="h-10 w-10 text-blue-500" />
              <h3 className="font-bold text-xl">Architect</h3>
              <p className="text-sm text-gray-400">
                Designs systems, plans strategy, and outlines your technical vision.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-green-500/50 transition-colors">
              <Hammer className="h-10 w-10 text-green-500" />
              <h3 className="font-bold text-xl">Builder</h3>
              <p className="text-sm text-gray-400">
                Executes tasks, writes production code, and builds products.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-yellow-500/50 transition-colors">
              <DollarSign className="h-10 w-10 text-yellow-500" />
              <h3 className="font-bold text-xl">Money</h3>
              <p className="text-sm text-gray-400">
                Manages finances, tracks revenue streams, and handles crypto/payments.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 border border-gray-800 rounded-xl bg-black hover:border-purple-500/50 transition-colors">
              <Code className="h-10 w-10 text-purple-500" />
              <h3 className="font-bold text-xl">Operator</h3>
              <p className="text-sm text-gray-400">
                Runs daily operations, manages memory, and handles maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="use-cases" className="w-full py-24 bg-black border-t border-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Help</h2>
            <p className="mx-auto max-w-md text-gray-400 md:text-lg mt-4">Specialized AI agents for your industry</p>
          </div>
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ slug, name, heroHeadline }) => (
              <Link 
                key={slug} 
                href={`/use-cases/${slug}`} 
                className="group"
              >
                <div className="flex flex-col gap-3 p-6 border border-gray-800 rounded-xl bg-zinc-950 hover:border-blue-500/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 h-full">
                  <h3 className="font-bold text-xl">{name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{heroHeadline}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Learn More</span>
                    <ArrowRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
