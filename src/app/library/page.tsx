import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { dictionaryMetadata } from "../../data/dictionaries";

export default function Library() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            hmu.ai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Library</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Browse our comprehensive dictionaries to master the language of modern business and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(dictionaryMetadata).map(([slug, meta]) => (
            <Link 
              key={slug}
              href={`/library/${slug}`}
              className="group block p-6 border border-gray-800 rounded-2xl bg-zinc-950 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">{meta.title}</h2>
              </div>
              <p className="text-gray-400 mb-6 flex-grow">{meta.description}</p>
              <div className="flex items-center text-blue-400 font-semibold mt-auto group-hover:text-blue-300 transition-colors">
                Read Dictionary
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
