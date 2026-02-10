import Link from 'next/link';

export default function SciencePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-cyan-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="material-symbols-outlined text-cyan-500 text-sm mr-2">science</span>
            <span className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-wider">General Science</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Explore <span className="text-cyan-500 italic">Science</span>
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Discover the wonders of science across multiple disciplines with engaging experiments and quizzes.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-cyan-200 p-8 text-center">
            <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-cyan-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              General science content and experiments are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-cyan-50 rounded-lg">
                <span className="material-symbols-outlined text-cyan-500">public</span>
                <span className="text-sm text-[#6b523b]">Earth & Space Science</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-cyan-50 rounded-lg">
                <span className="material-symbols-outlined text-cyan-500">eco</span>
                <span className="text-sm text-[#6b523b]">Environmental Science</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-cyan-50 rounded-lg">
                <span className="material-symbols-outlined text-cyan-500">labs</span>
                <span className="text-sm text-[#6b523b]">Scientific Method</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
