import Link from 'next/link';

export default function BiologyPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-green-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="material-symbols-outlined text-green-500 text-sm mr-2">biotech</span>
            <span className="text-xs font-mono font-bold text-green-500 uppercase tracking-wider">Biology</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Explore <span className="text-green-500 italic">Biology</span>
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Study life sciences including anatomy, ecology, genetics, and cellular biology.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-green-200 p-8 text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-green-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              Biology lessons and interactive diagrams are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-green-50 rounded-lg">
                <span className="material-symbols-outlined text-green-500">cell_tower</span>
                <span className="text-sm text-[#6b523b]">Cell Biology</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-green-50 rounded-lg">
                <span className="material-symbols-outlined text-green-500">genetics</span>
                <span className="text-sm text-[#6b523b]">Genetics & DNA</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-green-50 rounded-lg">
                <span className="material-symbols-outlined text-green-500">forest</span>
                <span className="text-sm text-[#6b523b]">Ecology & Ecosystems</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-green-50 rounded-lg">
                <span className="material-symbols-outlined text-green-500">skeleton</span>
                <span className="text-sm text-[#6b523b]">Human Anatomy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
