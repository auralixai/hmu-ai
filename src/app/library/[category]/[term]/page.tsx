import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2, BookOpen, Quote } from "lucide-react";
import { getDictionaryTerms, dictionaries, dictionaryMetadata } from "../../../../data/dictionaries";

export async function generateStaticParams() {
  const params: { category: string; term: string }[] = [];
  
  Object.entries(dictionaries).forEach(([category, terms]) => {
    terms.forEach((term) => {
      params.push({
        category,
        term: term.slug || term.name.toLowerCase().replace(/\s+/g, '-'),
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, term: string }> }) {
  const resolvedParams = await params;
  const terms = getDictionaryTerms(resolvedParams.category);
  const termData = terms.find(t => (t.slug || t.name.toLowerCase().replace(/\s+/g, '-')) === resolvedParams.term);
  const metadata = dictionaryMetadata[resolvedParams.category];

  if (!termData || !metadata) {
    return { title: "Term Not Found" };
  }

  return {
    title: `${termData.name} Definition & Meaning | ${metadata.title} | hmu.ai`,
    description: `Learn the definition of ${termData.name} in the context of ${metadata.title.replace(' Dictionary', '')}. ${termData.definition.slice(0, 100)}...`,
  };
}

export default async function TermPage({ params }: { params: Promise<{ category: string, term: string }> }) {
  const resolvedParams = await params;
  const terms = getDictionaryTerms(resolvedParams.category);
  const termData = terms.find(t => (t.slug || t.name.toLowerCase().replace(/\s+/g, '-')) === resolvedParams.term);
  const metadata = dictionaryMetadata[resolvedParams.category];

  if (!termData || !metadata) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <Link 
          href={`/library/${resolvedParams.category}`} 
          className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {metadata.title}
        </Link>
        
        <article className="prose prose-invert lg:prose-xl max-w-none">
          <div className="mb-8 border-b border-gray-800 pb-8">
            <div className="flex items-center gap-3 mb-4 text-blue-500 font-medium">
              <BookOpen className="h-5 w-5" />
              <span>{metadata.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {termData.name}
            </h1>
          </div>

          <div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 mb-10 shadow-lg shadow-blue-900/5">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
              <Quote className="h-5 w-5 opacity-50" />
              Definition
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              {termData.definition}
            </p>
          </div>

          {termData.seoData?.detailedDescription && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Deep Dive</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                {termData.seoData.detailedDescription.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {termData.seoData?.examples && termData.seoData.examples.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Examples & Use Cases</h2>
              <ul className="space-y-4">
                {termData.seoData.examples.map((example, i) => (
                  <li key={i} className="flex gap-4 items-start p-4 bg-zinc-900/50 rounded-xl border border-gray-800/50">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 mt-1">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {termData.seoData?.relatedTerms && termData.seoData.relatedTerms.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Terms</h2>
              <div className="flex flex-wrap gap-3">
                {termData.seoData.relatedTerms.map((related, i) => (
                  <span key={i} className="px-4 py-2 bg-zinc-900 border border-gray-800 rounded-full text-sm text-gray-300">
                    {related}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            Part of the hmu.ai extensive business and technology library.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/#features" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-black shadow transition-colors hover:bg-gray-200"
            >
              Start Building <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
