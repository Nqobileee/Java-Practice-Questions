import Link from 'next/link';

export default function PhysicsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-amber-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="material-symbols-outlined text-amber-500 text-sm mr-2">bolt</span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">Physics</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Understand <span className="text-amber-500 italic">Physics</span>
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Learn mechanics, thermodynamics, electricity, magnetism, and modern physics concepts.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl border border-amber-200 p-8 text-center">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-amber-500 text-4xl">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Coming Soon!</h3>
            <p className="text-[#6b523b] mb-6">
              Physics problems and simulations are being prepared.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-left p-3 bg-amber-50 rounded-lg">
                <span className="material-symbols-outlined text-amber-500">speed</span>
                <span className="text-sm text-[#6b523b]">Mechanics & Motion</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-amber-50 rounded-lg">
                <span className="material-symbols-outlined text-amber-500">electric_bolt</span>
                <span className="text-sm text-[#6b523b]">Electricity & Magnetism</span>
              </div>
              <div className="flex items-center gap-3 text-left p-3 bg-amber-50 rounded-lg">
                <span className="material-symbols-outlined text-amber-500">waves</span>
                <span className="text-sm text-[#6b523b]">Waves & Optics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
