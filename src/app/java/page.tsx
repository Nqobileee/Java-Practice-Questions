import Link from 'next/link';
import { divideIntoExams } from '@/lib/questions';
import { ALL_QUESTIONS } from '@/lib/questionData';

export default function JavaPage() {
  const exams = divideIntoExams(ALL_QUESTIONS);
  const totalQuestions = ALL_QUESTIONS.length;

  return (
    <div className="relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back Button */}
      <div className="px-6 pt-2">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#9c7349] hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Subjects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-6 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="material-symbols-outlined text-orange-500 text-sm mr-2">verified</span>
            <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider">OCP 1Z0-829</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Master <span className="text-orange-500 italic">Java</span> Programming
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Ace your professional certifications with timed practice exams, detailed logic breakdowns, and real-time performance feedback.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="bg-white p-5 rounded-xl border border-orange-200">
            <p className="text-orange-500 text-2xl font-black mb-1">{totalQuestions}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Questions</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-orange-200">
            <p className="text-orange-500 text-2xl font-black mb-1">{exams.length}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Exams</p>
          </div>
        </div>
      </section>

      {/* Exam Selection Section */}
      <section className="px-6 pt-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Select an Exam</h3>
            <span className="text-orange-500 text-sm font-bold flex items-center gap-1">
              20 questions each <span className="material-symbols-outlined text-sm">quiz</span>
            </span>
          </div>

          {/* Exam Cards Grid */}
          <div className="flex flex-col gap-4">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                href={`/java/exam/${exam.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-orange-200 flex shadow-sm hover:shadow-md hover:border-orange-400/50 transition-all group"
              >
                <div className="w-24 h-24 bg-orange-50 flex items-center justify-center shrink-0">
                  <span className="text-orange-500 text-3xl font-black">{exam.id}</span>
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h4 className="font-bold text-base mb-1 group-hover:text-orange-500 transition-colors">
                    {exam.name}
                  </h4>
                  <p className="text-sm text-[#9c7349] font-mono leading-tight">
                    {exam.questionCount} questions
                  </p>
                </div>
                <div className="flex items-center pr-4">
                  <span className="material-symbols-outlined text-orange-200 group-hover:text-orange-500 transition-colors">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Code Snippet Overlay */}
      <div className="px-6 mt-10 max-w-md mx-auto pb-8">
        <div className="bg-[#1c140d] rounded-xl p-4 border border-white/10 font-mono text-[11px] leading-normal overflow-hidden opacity-80 rotate-1 relative">
          <div className="flex gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <p className="text-gray-400">
            <span className="text-orange-400">public class</span> MasterJava {'{'}
          </p>
          <p className="text-gray-400 ml-4">
            <span className="text-orange-400">public static void</span> main(String[] args) {'{'}
          </p>
          <p className="text-white ml-8">
            PracticeExam exam = <span className="text-orange-400">new</span> PracticeExam();
          </p>
          <p className="text-white ml-8">
            exam.<span className="text-orange-400">start</span>();
          </p>
          <p className="text-gray-400 ml-4">{'}'}</p>
          <p className="text-gray-400">{'}'}</p>
        </div>
      </div>
    </div>
  );
}
