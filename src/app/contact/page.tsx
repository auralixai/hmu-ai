import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Ready to scale with AI? Send us a message or email hello@hmu.ai.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-zinc-950 border border-gray-800 rounded-2xl">
              <Mail className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <a href="mailto:hello@hmu.ai" className="text-blue-400 hover:text-blue-300 font-medium">
                  hello@hmu.ai
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-zinc-950 border border-gray-800 rounded-2xl">
              <Phone className="h-8 w-8 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-gray-400">Coming soon</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-zinc-950 border border-gray-800 rounded-2xl">
              <MapPin className="h-8 w-8 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-gray-400">Remote-first, Houston TX</p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6 bg-zinc-950 p-8 border border-gray-800 rounded-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" className="w-full p-4 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" className="w-full p-4 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors" placeholder="hello@hmu.ai" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full p-4 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-vertical" placeholder="Tell us about your AI workforce needs..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                Send Message
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
