import Link from 'next/link';
import { divideIntoNdebeleExams, NDEBELE_QUESTIONS } from '@/lib/ndebeleData';

export default function NdebelePage() {
  const exams = divideIntoNdebeleExams(NDEBELE_QUESTIONS);
  const totalQuestions = NDEBELE_QUESTIONS.length;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-emerald-500 transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Buyela Ezifundweni
        </Link>
      </div>

      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="material-symbols-outlined text-emerald-500 text-sm mr-2">translate</span>
            <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">Ulimi LwesiNdebele</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Funda <span className="text-emerald-500 italic">IsiNdebele</span>
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Funda ulimi lwesiNdebele ngokwenza izivivinyo, ufunde amagama amatsha, kanye lokuzwa ngamasiko.
          </p>
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="bg-white p-5 rounded-xl border border-emerald-200">
            <p className="text-emerald-500 text-2xl font-black mb-1">{totalQuestions}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Imibuzo</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-emerald-200">
            <p className="text-emerald-500 text-2xl font-black mb-1">{exams.length}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Izivivinyo</p>
          </div>
        </div>
      </section>

      <section className="px-6 pt-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Khetha Isivivinyo</h3>
            <span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
              Imibuzo engu-20 <span className="material-symbols-outlined text-sm">quiz</span>
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                href={`/ndebele/exam/${exam.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-emerald-200 flex shadow-sm hover:shadow-md hover:border-emerald-400/50 transition-all group"
              >
                <div className="w-24 h-24 bg-emerald-50 flex items-center justify-center shrink-0">
                  <span className="text-emerald-500 text-3xl font-black">{exam.id}</span>
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h4 className="font-bold text-base mb-1 group-hover:text-emerald-500 transition-colors">
                    {exam.name}
                  </h4>
                  <p className="text-sm text-[#9c7349] font-mono leading-tight">
                    Imibuzo engu-{exam.questionCount}
                  </p>
                </div>
                <div className="flex items-center pr-4">
                  <span className="material-symbols-outlined text-emerald-200 group-hover:text-emerald-500 transition-colors">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 mt-10 max-w-md mx-auto pb-8">
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
