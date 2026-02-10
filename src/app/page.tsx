import Link from 'next/link';

const subjects = [
  {
    id: 'java',
    name: 'Java',
    description: 'Master Java programming with OCP 1Z0-829 certification practice exams',
    icon: 'terminal',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Learn Python programming from basics to advanced concepts',
    icon: 'code',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'english',
    name: 'English',
    description: 'Improve your English language skills with grammar and comprehension',
    icon: 'menu_book',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'ndebele',
    name: 'Ndebele',
    description: 'Learn and practice Ndebele language with vocabulary and grammar',
    icon: 'translate',
    color: 'bg-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'shona',
    name: 'Shona',
    description: 'Master Shona language with interactive lessons and exercises',
    icon: 'translate',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'maths',
    name: 'Mathematics',
    description: 'Practice algebra, geometry, calculus and more mathematical concepts',
    icon: 'calculate',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
  },
  {
    id: 'science',
    name: 'Science',
    description: 'General science covering various scientific disciplines',
    icon: 'science',
    color: 'bg-cyan-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Understand mechanics, thermodynamics, electricity and more',
    icon: 'bolt',
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Learn organic, inorganic chemistry and chemical reactions',
    icon: 'experiment',
    color: 'bg-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Study life sciences, anatomy, ecology and genetics',
    icon: 'biotech',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="px-6 py-8 relative">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm mr-2">school</span>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">StudyPal</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Master <span className="text-primary italic">Any</span> Subject
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Choose your subject and start learning with interactive practice exams, quizzes, and real-time feedback.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="bg-white p-5 rounded-xl border border-[#e8dbce]">
            <p className="text-primary text-2xl font-black mb-1">{subjects.length}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Subjects</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#e8dbce]">
            <p className="text-primary text-2xl font-black mb-1">100+</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Questions</p>
          </div>
        </div>
      </section>

      {/* Subject Selection Section */}
      <section className="px-6 pt-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Choose a Subject</h3>
            <span className="text-primary text-sm font-bold flex items-center gap-1">
              Start learning <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>

          {/* Subject Cards Grid */}
          <div className="flex flex-col gap-4">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                href={`/${subject.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8dbce] shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="flex">
                  <div className={`w-24 h-28 ${subject.bgColor} flex items-center justify-center shrink-0`}>
                    <div className={`${subject.color} p-3 rounded-xl`}>
                      <span className="material-symbols-outlined text-white text-2xl">{subject.icon}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-center flex-1">
                    <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {subject.name}
                    </h4>
                    <p className="text-sm text-[#9c7349] leading-tight">
                      {subject.description}
                    </p>
                  </div>
                  <div className="flex items-center pr-4">
                    <span className="material-symbols-outlined text-[#e8dbce] group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Section */}
      <div className="px-6 mt-10 max-w-md mx-auto">
        <div className="bg-[#1c140d] rounded-xl p-4 border border-white/10 font-mono text-[11px] leading-normal overflow-hidden opacity-80 rotate-1 relative">
          <div className="flex gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <p className="text-gray-400">
            <span className="text-primary">const</span> student = {'{'}
          </p>
          <p className="text-gray-400 ml-4">
            subjects: [<span className="text-emerald-400">&apos;Java&apos;</span>, <span className="text-emerald-400">&apos;Ndebele&apos;</span>],
          </p>
          <p className="text-white ml-4">
            progress: <span className="text-primary">getProgress</span>()
          </p>
          <p className="text-gray-400">{'}'}</p>
        </div>
      </div>
    </div>
  );
}
