import Link from "next/link";
import { ArrowRight, CheckCircle, Crown, Star } from "lucide-react";

const tiers = [
  {
    name: "The AI Sales Blueprint",
    price: "$97",
    period: "",
    description: "Downloadable vault of OpenClaw system prompts and architectural maps for specific niches.",
    popular: false,
    features: [
      "OpenClaw System Prompts",
      "Niche Architectural Maps",
      "Immediate Download",
      "Lifetime Updates"
    ],
    buttonText: "Get The Blueprint",
    buttonLink: "#"
  },
  {
    name: "Core Deployment",
    price: "$2,500",
    period: "+",
    description: "Done-for-you installation of a specific pipeline on a headless server.",
    popular: true,
    features: [
      "Custom Pipeline Installation",
      "Headless Server Setup",
      "Strategy Mapping Call",
      "1-on-1 Onboarding",
      "30 Days of Tuning"
    ],
    buttonText: "Map Your Architecture",
    buttonLink: "#"
  },
  {
    name: "Fractional Revenue Architect",
    price: "$5,000",
    period: "/mo",
    description: "High-level VP of Sales strategy + full digital workforce deployment and maintenance.",
    popular: false,
    features: [
      "All Core Deployment Features",
      "High-Level VP of Sales Strategy",
      "Full Workforce Maintenance",
      "Priority 24/7 Adjustments",
      "Monthly Strategy Briefings"
    ],
    buttonText: "Apply Now",
    buttonLink: "#"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Deployment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            From DIY architectural blueprints to a fully managed, fractional VP of Sales digital workforce.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-8 border border-gray-800 rounded-3xl bg-zinc-950 hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] transition-all duration-300 group ${tier.popular ? 'ring-2 ring-blue-500/30 scale-[1.02] bg-zinc-900' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">{tier.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 ml-1 font-medium">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.buttonLink}
                className={`w-full flex items-center justify-center h-14 rounded-xl font-bold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {tier.buttonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}