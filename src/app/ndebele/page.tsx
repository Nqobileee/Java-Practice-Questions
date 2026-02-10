import Link from 'next/link';

export default function NdebelePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back Button */}
      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-emerald-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="material-symbols-outlined text-emerald-500 text-sm mr-2">translate</span>
            <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">Language Learning</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Learn <span className="text-emerald-500 italic">Ndebele</span> Language
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Discover the beautiful Ndebele language through interactive lessons, vocabulary practice, and grammar exercises.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-emerald-200 p-8 text-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-emerald-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              We&apos;re working hard to bring you comprehensive Ndebele learning materials. Check back soon for vocabulary quizzes, grammar lessons, and cultural insights.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-emerald-50 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500">menu_book</span>
                <span className="text-sm text-[#6b523b]">Vocabulary & Phrases</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-emerald-50 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500">spellcheck</span>
                <span className="text-sm text-[#6b523b]">Grammar Exercises</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-emerald-50 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500">record_voice_over</span>
                <span className="text-sm text-[#6b523b]">Pronunciation Guide</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-emerald-50 rounded-lg">
                <span className="material-symbols-outlined text-emerald-500">diversity_3</span>
                <span className="text-sm text-[#6b523b]">Cultural Context</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Quote */}
      <div className="px-6 mt-6 max-w-md mx-auto pb-8">
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
          <p className="text-lg font-semibold text-emerald-700 italic mb-2">
            &quot;Ulimi lwesiNdebele luhle kakhulu&quot;
          </p>
          <p className="text-sm text-emerald-600">
            The Ndebele language is very beautiful
          </p>
        </div>
      </div>
    </div>
  );
}
