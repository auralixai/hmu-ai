export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">Execution, Not Consultation.</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose how you want to deploy your digital workforce. From DIY blueprints to fully managed enterprise architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold mb-2">The AI Sales Blueprint</h3>
            <div className="text-4xl font-extrabold mb-6">$97</div>
            <p className="text-gray-400 mb-8 flex-grow">
              For the builder. A downloadable vault of OpenClaw system prompts and proven architectural maps.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> OpenClaw Prompts</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Architecture Maps</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Workflow Diagrams</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors font-bold">
              Get the Blueprint
            </button>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-blue-600 bg-black p-8 rounded-2xl flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Core Deployment</h3>
            <div className="text-4xl font-extrabold mb-6">$2,500</div>
            <p className="text-gray-400 mb-8 flex-grow">
              Done-for-you installation of a specific pipeline on a headless server. We build the machine.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Headless Server Setup</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Pipeline Installation</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Strategy Mapping Call</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> API Integrations</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-bold">
              Deploy Now
            </button>
          </div>

          {/* Tier 3 */}
          <div className="border border-zinc-800 bg-zinc-950 p-8 rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Fractional Revenue Architect</h3>
            <div className="text-4xl font-extrabold mb-6">$5,000<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 mb-8 flex-grow">
              High-level VP of Sales strategy paired with full digital workforce deployment and ongoing maintenance.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> VP of Sales Strategy</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Full Workforce Deployment</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> 24/7 Maintenance</li>
              <li className="flex items-center text-sm text-gray-300"><span className="text-blue-500 mr-2">✓</span> Priority Support</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors font-bold">
              Apply for Partnership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
