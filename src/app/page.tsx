'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { parseCSV, divideIntoExams, Exam } from '@/lib/questions';

export default function Home() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch('/1Z0-829_questions.csv');
        const csvText = await response.text();
        const questions = parseCSV(csvText);
        const examsList = divideIntoExams(questions);
        setExams(examsList);
        setTotalQuestions(questions.length);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load questions:', error);
        setLoading(false);
      }
    }
    loadQuestions();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-[#9c7349]">Loading exams...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 code-bg-pattern pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Section */}
      <section className="px-6 py-8 relative">
        <div className="max-w-md mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm mr-2">verified</span>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">OCP 1Z0-829</span>
          </div>
          <h1 className="text-4xl font-black leading-[1.1] mb-4 tracking-tight">
            Master <span className="text-primary italic">Java</span> Programming
          </h1>
          <p className="text-base text-[#6b523b] leading-relaxed mb-8">
            Ace your professional certifications with timed practice exams, detailed logic breakdowns, and real-time performance feedback.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="bg-white p-5 rounded-xl border border-[#e8dbce]">
            <p className="text-primary text-2xl font-black mb-1">{totalQuestions}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Questions</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#e8dbce]">
            <p className="text-primary text-2xl font-black mb-1">{exams.length}</p>
            <p className="text-xs font-mono font-semibold uppercase text-[#9c7349]">Exams</p>
          </div>
        </div>
      </section>

      {/* Exam Selection Section */}
      <section className="px-6 pt-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Select an Exam</h3>
            <span className="text-primary text-sm font-bold flex items-center gap-1">
              20 questions each <span className="material-symbols-outlined text-sm">quiz</span>
            </span>
          </div>

          {/* Exam Cards Grid */}
          <div className="flex flex-col gap-4">
            {exams.map((exam) => (
              <Link
                key={exam.id}
                href={`/exam/${exam.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8dbce] flex shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
              >
                <div className="w-24 h-24 bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary text-3xl font-black">{exam.id}</span>
                </div>
                <div className="p-4 flex flex-col justify-center flex-1">
                  <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                    {exam.name}
                  </h4>
                  <p className="text-sm text-[#9c7349] font-mono leading-tight">
                    {exam.questionCount} questions
                  </p>
                </div>
                <div className="flex items-center pr-4">
                  <span className="material-symbols-outlined text-[#e8dbce] group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Code Snippet Overlay */}
      <div className="px-6 mt-10 max-w-md mx-auto">
        <div className="bg-[#1c140d] rounded-xl p-4 border border-white/10 font-mono text-[11px] leading-normal overflow-hidden opacity-80 rotate-1 relative">
          <div className="flex gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
          </div>
          <p className="text-gray-400">
            <span className="text-primary">public class</span> MasterJava {'{'}
          </p>
          <p className="text-gray-400 ml-4">
            <span className="text-primary">public static void</span> main(String[] args) {'{'}
          </p>
          <p className="text-white ml-8">
            PracticeExam exam = <span className="text-primary">new</span> PracticeExam();
          </p>
          <p className="text-white ml-8">
            exam.<span className="text-primary">start</span>();
          </p>
          <p className="text-gray-400 ml-4">{'}'}</p>
          <p className="text-gray-400">{'}'}</p>
        </div>
      </div>
    </div>
  );
}
