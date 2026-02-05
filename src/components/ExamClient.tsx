'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { parseCSV, divideIntoExams, getOptions, isMultipleChoice, checkAnswer, Question } from '@/lib/questions';

interface ExamClientProps {
  examId: number;
}

export default function ExamClient({ examId }: ExamClientProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch('/1Z0-829_questions.csv');
        const csvText = await response.text();
        const allQuestions = parseCSV(csvText);
        const exams = divideIntoExams(allQuestions);
        const exam = exams.find(e => e.id === examId);
        
        if (exam) {
          setQuestions(exam.questions);
        }
        setLoading(false);
      } catch (error) {
        console.error('Failed to load questions:', error);
        setLoading(false);
      }
    }
    loadQuestions();
  }, [examId]);

  const currentQuestion = questions[currentIndex];
  const options = currentQuestion ? getOptions(currentQuestion) : [];
  const isMultiple = currentQuestion ? isMultipleChoice(currentQuestion) : false;

  const handleSingleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: value }));
  };

  const handleMultipleAnswer = (value: string) => {
    const current = (answers[currentIndex] as string[]) || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    setAnswers(prev => ({ ...prev, [currentIndex]: updated }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateScore();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (userAnswer && checkAnswer(userAnswer, question.Correct_Answer)) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  };

  const restartExam = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-[#9c7349]">Loading exam...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-[#9c7349] mb-4">Exam not found</p>
          <Link href="/" className="text-primary font-bold">Go back home</Link>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="tech-pattern min-h-screen px-4">
        <div className="max-w-md mx-auto pt-8">
          {/* Results Card */}
          <div className="bg-white rounded-2xl border border-[#e8dbce] p-8 text-center shadow-lg">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
              <span className={`material-symbols-outlined text-5xl ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {passed ? 'emoji_events' : 'sentiment_dissatisfied'}
              </span>
            </div>
            
            <h2 className="text-2xl font-black mb-2">
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h2>
            <p className="text-[#9c7349] mb-6">
              {passed ? 'You passed the exam!' : 'You need 70% to pass.'}
            </p>

            {/* Score Display */}
            <div className="bg-[#f8f7f5] rounded-xl p-6 mb-6">
              <p className="text-6xl font-black text-primary mb-2">{percentage}%</p>
              <p className="text-[#9c7349] font-mono">
                {score} out of {questions.length} correct
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-green-600 text-2xl font-black">{score}</p>
                <p className="text-green-600/70 text-xs font-mono uppercase">Correct</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-red-600 text-2xl font-black">{questions.length - score}</p>
                <p className="text-red-600/70 text-xs font-mono uppercase">Incorrect</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={restartExam}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined">replay</span>
                Retry Exam
              </button>
              <Link
                href="/"
                className="w-full border border-[#e8dbce] text-[#1c140d] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:border-primary"
              >
                <span className="material-symbols-outlined">home</span>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Review Answers */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Review Your Answers</h3>
            <div className="flex flex-col gap-3">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer && checkAnswer(userAnswer, question.Correct_Answer);
                const userAnswerDisplay = Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer || 'No answer';
                
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-4 border ${isCorrect ? 'border-green-200' : 'border-red-200'}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`material-symbols-outlined ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? 'check_circle' : 'cancel'}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-bold mb-1">Question {index + 1}</p>
                        <p className="text-xs text-[#9c7349] mb-2 line-clamp-2">{question.Question_Text}</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className={`px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            Your answer: {userAnswerDisplay}
                          </span>
                          {!isCorrect && (
                            <span className="px-2 py-1 rounded bg-green-100 text-green-700">
                              Correct: {question.Correct_Answer}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tech-pattern min-h-screen px-4 pb-28">
      {/* Progress Bar Section */}
      <div className="max-w-md mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-between items-end">
            <p className="text-[#1c140d] text-sm font-medium">Exam {examId} Progress</p>
            <p className="text-primary text-sm font-bold">
              {String(currentIndex + 1).padStart(2, '0')}{' '}
              <span className="text-[#9c7349] font-normal">/ {questions.length}</span>
            </p>
          </div>
          <div className="h-2 w-full bg-[#e8dbce] rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-primary shadow-glow transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h3 className="text-[#1c140d] text-xl font-bold leading-snug mb-4">
          {currentQuestion.Question_Text}
        </h3>

        {/* Multiple Choice Indicator */}
        {isMultiple && (
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm mr-2">checklist</span>
            <span className="text-xs font-mono font-bold text-primary">Select multiple answers</span>
          </div>
        )}

        {/* Options List */}
        <div className="flex flex-col gap-3">
          {options.map((option) => {
            const isSelected = isMultiple
              ? ((answers[currentIndex] as string[]) || []).includes(option.label)
              : answers[currentIndex] === option.label;

            return (
              <label
                key={option.label}
                className={`group flex items-start gap-4 rounded-xl border-2 bg-white p-4 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-primary shadow-glow'
                    : 'border-[#e8dbce] hover:border-primary/50 hover:shadow-sm'
                }`}
                onClick={() =>
                  isMultiple ? handleMultipleAnswer(option.label) : handleSingleAnswer(option.label)
                }
              >
                <input
                  type={isMultiple ? 'checkbox' : 'radio'}
                  name="answer"
                  checked={isSelected}
                  onChange={() => {}}
                  className="h-5 w-5 mt-0.5 border-2 border-[#e8dbce] text-primary focus:ring-primary"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#1c140d] text-base font-bold">{option.label}.</p>
                  <p className="text-[#9c7349] text-sm">{option.value}</p>
                </div>
                <span
                  className={`material-symbols-outlined ${
                    isSelected ? 'text-primary' : 'text-[#e8dbce] group-hover:text-primary/30'
                  }`}
                >
                  {isSelected ? 'check_circle' : 'circle'}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#e8dbce] p-4 flex gap-4 items-center">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl border border-[#e8dbce] text-[#1c140d] font-bold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-[2] flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-primary text-white font-bold pulsing-glow transition-all active:scale-95"
        >
          {currentIndex === questions.length - 1 ? 'Finish Exam' : 'Next Question'}
          <span className="material-symbols-outlined">
            {currentIndex === questions.length - 1 ? 'check' : 'arrow_forward'}
          </span>
        </button>
      </footer>

      {/* Abstract Decorative Background Accents */}
      <div className="fixed top-20 right-[-50px] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-40 left-[-30px] w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
