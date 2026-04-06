export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#eaeaea] pt-24 pb-20 font-serif selection:bg-[#c0a062] selection:text-black">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 border-b border-[#222] pb-12">
          <div className="text-[#c0a062] tracking-[0.2em] uppercase text-xs font-bold mb-4">
            Exclusive Local Executive Briefing
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            AI for Business Owners
          </h1>
          <p className="text-xl text-[#888] max-w-2xl mx-auto italic">
            For Houston Executives in Cypress & Champions. 
            <br />Sell the Magic, Not the Code.
          </p>
        </div>

        {/* The Pitch */}
        <div className="mb-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6 text-white">Cut 15 Hours of Weekly Admin Work.</h2>
            <p className="text-[#aaa] leading-relaxed mb-6">
              You don't need to learn how to code. You don't need another software subscription that your team won't use. You need a digital workforce that executes standard operating procedures flawlessly, day and night.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              Join us for an exclusive 1-day, 4-6 hour executive briefing where we reveal exactly how local businesses are deploying autonomous agents to handle the grunt work.
            </p>
          </div>
          <div className="bg-[#111] border border-[#333] p-10 text-center rounded-sm">
            <div className="text-sm uppercase tracking-widest text-[#888] mb-4">Investment</div>
            <div className="text-5xl font-light text-[#c0a062] mb-2">$997</div>
            <div className="text-sm text-[#666] mb-8">Per Seat</div>
            
            <div className="w-full h-[1px] bg-[#333] mb-8"></div>
            
            <div className="text-sm uppercase tracking-widest text-[#c0a062] mb-2">Strictly Limited</div>
            <div className="text-xl text-white">Max 10 Participants</div>
            
            <button className="mt-10 w-full py-4 border border-[#c0a062] text-[#c0a062] hover:bg-[#c0a062] hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold">
              Reserve Your Seat
            </button>
          </div>
        </div>

        {/* The Itinerary */}
        <div>
          <h3 className="text-2xl font-light mb-12 text-center text-white border-t border-[#222] pt-16">The Itinerary</h3>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex border-l border-[#333] pl-6 py-2 relative">
              <div className="absolute w-3 h-3 bg-[#c0a062] rounded-full -left-[6.5px] top-4"></div>
              <div>
                <div className="text-[#c0a062] text-sm tracking-widest uppercase mb-1">Part I</div>
                <h4 className="text-xl font-medium text-white mb-2">Demystifying Consumer AI</h4>
                <p className="text-[#aaa]">Beyond ChatGPT. Understanding the real-world utility of Large Language Models and how they fit into a professional business architecture.</p>
              </div>
            </div>

            <div className="flex border-l border-[#333] pl-6 py-2 relative">
              <div className="absolute w-3 h-3 bg-[#c0a062] rounded-full -left-[6.5px] top-4"></div>
              <div>
                <div className="text-[#c0a062] text-sm tracking-widest uppercase mb-1">Part II</div>
                <h4 className="text-xl font-medium text-white mb-2">The "Magic Trick"</h4>
                <p className="text-[#aaa]">A live, unscripted demonstration of an OpenClaw autonomous pipeline. Watch a headless agent perform lead sourcing, enrichment, and outreach in real-time.</p>
              </div>
            </div>

            <div className="flex border-l border-transparent pl-6 py-2 relative">
              <div className="absolute w-3 h-3 bg-[#c0a062] rounded-full -left-[6.5px] top-4 shadow-[0_0_10px_#c0a062]"></div>
              <div>
                <div className="text-[#c0a062] text-sm tracking-widest uppercase mb-1">Part III</div>
                <h4 className="text-xl font-medium text-white mb-2">Executive Q&A</h4>
                <p className="text-[#aaa]">Direct access to our architects. We will dissect your specific business bottlenecks and map out a hypothetical digital workforce solution on the spot.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
