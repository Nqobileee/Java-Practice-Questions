import Link from 'next/link';

export default function ShonaPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-teal-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
            <span className="material-symbols-outlined text-teal-500 text-sm mr-2">translate</span>
            <span className="text-xs font-mono font-bold text-teal-500 uppercase tracking-wider">Language Learning</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Learn <span className="text-teal-500 italic">Shona</span> Language
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Discover the rich Shona language through interactive lessons and cultural context.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-teal-200 p-8 text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-teal-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              Shona language learning materials are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-teal-50 rounded-lg">
                <span className="material-symbols-outlined text-teal-500">menu_book</span>
                <span className="text-sm text-[#6b523b]">Vocabulary & Phrases</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-teal-50 rounded-lg">
                <span className="material-symbols-outlined text-teal-500">spellcheck</span>
                <span className="text-sm text-[#6b523b]">Grammar Exercises</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-teal-50 rounded-lg">
                <span className="material-symbols-outlined text-teal-500">diversity_3</span>
                <span className="text-sm text-[#6b523b]">Cultural Context</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 mt-6 max-w-md mx-auto pb-8">
        <div className="bg-teal-50 rounded-xl p-6 border border-teal-200 text-center">
          <p className="text-lg font-semibold text-teal-700 italic mb-2">
            &quot;Mutauro wechiShona wakanaka kwazvo&quot;
          </p>
          <p className="text-sm text-teal-600">
            The Shona language is very beautiful
          </p>
        </div>
      </div>
    </div>
  );
}
