import Link from "next/link";
import { ArrowLeft, Book } from "lucide-react";
import { dictionaries, dictionaryMetadata, getDictionaryTerms } from "../../../data/dictionaries";

export async function generateStaticParams() {
  return Object.keys(dictionaries).map((category) => ({
    category,
  }));
}

export default function DictionaryCategory({ params }: { params: { category: string } }) {
  const terms = getDictionaryTerms(params.category);
  const metadata = dictionaryMetadata[params.category];

  if (!terms.length || !metadata) {
    return (
      <div className="min-h-screen bg-black text-white py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dictionary Not Found</h1>
          <Link href="/library" className="text-blue-500 hover:text-blue-400">Back to Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <Link href="/library" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
        </Link>
        
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-2xl mb-6">
            <Book className="h-10 w-10 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{metadata.title}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {metadata.description}
          </p>
        </div>

        <div className="space-y-6">
          {terms.map((term, index) => (
            <div 
              key={term.name}
              className="p-6 bg-zinc-950 border border-gray-800 rounded-2xl hover:border-gray-700 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-400">{term.name}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{term.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
