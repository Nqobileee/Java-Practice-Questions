import Link from 'next/link';

export default function PythonPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-blue-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="material-symbols-outlined text-blue-500 text-sm mr-2">code</span>
            <span className="text-xs font-mono font-bold text-blue-500 uppercase tracking-wider">Programming</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Learn <span className="text-blue-500 italic">Python</span> Programming
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Master Python from basics to advanced topics with hands-on exercises and coding challenges.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-blue-200 p-8 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-blue-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              Python programming exercises and tutorials are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-blue-50 rounded-lg">
                <span className="material-symbols-outlined text-blue-500">data_object</span>
                <span className="text-sm text-[#6b523b]">Variables & Data Types</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-blue-50 rounded-lg">
                <span className="material-symbols-outlined text-blue-500">repeat</span>
                <span className="text-sm text-[#6b523b]">Loops & Functions</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-blue-50 rounded-lg">
                <span className="material-symbols-outlined text-blue-500">inventory_2</span>
                <span className="text-sm text-[#6b523b]">Classes & OOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
