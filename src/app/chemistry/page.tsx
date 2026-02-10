import Link from 'next/link';

export default function ChemistryPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-pink-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
            <span className="material-symbols-outlined text-pink-500 text-sm mr-2">experiment</span>
            <span className="text-xs font-mono font-bold text-pink-500 uppercase tracking-wider">Chemistry</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Discover <span className="text-pink-500 italic">Chemistry</span>
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Learn organic chemistry, inorganic chemistry, and understand chemical reactions.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-pink-200 p-8 text-center">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-pink-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              Chemistry exercises and virtual labs are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-pink-50 rounded-lg">
                <span className="material-symbols-outlined text-pink-500">grid_view</span>
                <span className="text-sm text-[#6b523b]">Periodic Table & Elements</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-pink-50 rounded-lg">
                <span className="material-symbols-outlined text-pink-500">change_circle</span>
                <span className="text-sm text-[#6b523b]">Chemical Reactions</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-pink-50 rounded-lg">
                <span className="material-symbols-outlined text-pink-500">hub</span>
                <span className="text-sm text-[#6b523b]">Organic Chemistry</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
