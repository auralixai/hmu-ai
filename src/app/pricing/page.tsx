import Link from "next/link";
import { ArrowRight, CheckCircle, Crown, Star } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for solo founders testing the waters",
    popular: false,
    features: [
      "1 AI Agent",
      "Basic Tasks",
      "Email Support",
      "Community Access"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    description: "Full AI Workforce - Most Popular",
    popular: true,
    features: [
      "Unlimited Agents",
      "Architect + Builder + Money + Operator",
      "Priority Execution",
      "Custom Workflows",
      "24/7 Support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale to millions with dedicated AI army",
    popular: false,
    features: [
      "All Pro Features",
      "Custom Agents",
      "Private Deployment",
      "SLA + Dedicated Support",
      "Advanced Analytics"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Choose your plan. Upgrade anytime. Cancel monthly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative p-8 border border-gray-800 rounded-2xl bg-zinc-950 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group ${tier.popular ? 'ring-2 ring-blue-500/30 scale-[1.02]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{tier.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 ml-2">/mo</span>
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#signup"
                className={`w-full flex items-center justify-center h-12 rounded-xl font-bold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-24">
          <p className="text-gray-400 mb-8">
            Not sure? <Link href="/use-cases" className="text-blue-400 hover:text-blue-300 underline">See use cases</Link>
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            Talk to Sales
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}