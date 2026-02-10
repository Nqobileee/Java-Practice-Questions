'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  divideIntoNdebeleExams, 
  getNdebeleOptions, 
  checkNdebeleAnswer, 
  NdebeleQuestion,
  NDEBELE_QUESTIONS 
} from '@/lib/ndebeleData';

interface NdebeleExamClientProps {
  examId: number;
}

export default function NdebeleExamClient({ examId }: NdebeleExamClientProps) {
  const exams = divideIntoNdebeleExams(NDEBELE_QUESTIONS);
  const exam = exams.find(e => e.id === examId);
  const questions = exam?.questions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentIndex];
  const options = currentQuestion ? getNdebeleOptions(currentQuestion) : [];
  const hasAnswered = answeredQuestions.has(currentIndex);

  const calculateScore = useCallback(() => {
    let correct = 0;
    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (userAnswer && checkNdebeleAnswer(userAnswer, question.Impendulo)) {
        correct++;
      }
    });
    setScore(correct);
    setShowResults(true);
  }, [questions, answers]);

  useEffect(() => {
    if (showResults || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateScore();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults, timeLeft, calculateScore]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (value: string) => {
    if (hasAnswered) return;
    setAnswers(prev => ({ ...prev, [currentIndex]: value }));
  };

  const confirmAnswer = () => {
    if (answers[currentIndex]) {
      setAnsweredQuestions(prev => new Set(prev).add(currentIndex));
    }
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

  const restartExam = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setTimeLeft(20 * 60);
    setAnsweredQuestions(new Set());
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-[#9c7349] mb-4">Isivivinyo asitholakalanga</p>
          <Link href="/ndebele" className="text-emerald-500 font-bold">Buyela emuva</Link>
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
          <div className="bg-white rounded-2xl border border-emerald-200 p-8 text-center shadow-lg">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
              <span className={`material-symbols-outlined text-5xl ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {passed ? 'emoji_events' : 'sentiment_dissatisfied'}
              </span>
            </div>
            
            <h2 className="text-2xl font-black mb-2">
              {passed ? 'Halala!' : 'Zama futhi!'}
            </h2>
            <p className="text-[#9c7349] mb-6">
              {passed ? 'Uphasile isivivinyo!' : 'Udinga u-70% ukuphasa.'}
            </p>

            <div className="bg-emerald-50 rounded-xl p-6 mb-6">
              <p className="text-6xl font-black text-emerald-500 mb-2">{percentage}%</p>
              <p className="text-[#9c7349] font-mono">
                {score} ku-{questions.length} kulungile
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-green-600 text-2xl font-black">{score}</p>
                <p className="text-green-600/70 text-xs font-mono uppercase">Kulungile</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-red-600 text-2xl font-black">{questions.length - score}</p>
                <p className="text-red-600/70 text-xs font-mono uppercase">Akukho lungile</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restartExam}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined">replay</span>
                Zama Futhi
              </button>
              <Link
                href="/ndebele"
                className="w-full border border-emerald-200 text-[#1c140d] font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:border-emerald-500"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Buyela Kuzivivinyo
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Buka Izimpendulo Zakho</h3>
            <div className="flex flex-col gap-3">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer && checkNdebeleAnswer(userAnswer, question.Impendulo);
                const optionLabels = ['A', 'B', 'C', 'D'];
                const userAnswerDisplay = userAnswer || 'Ayikho impendulo';
                
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
                        <p className="text-sm font-bold mb-1">Umbuzo {index + 1}</p>
                        <p className="text-xs text-[#9c7349] mb-2 line-clamp-2">{question.Umbuzo}</p>
                        <div className="flex gap-2 text-xs">
                          <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                            Impendulo yakho: {userAnswerDisplay}
                          </span>
                          {!isCorrect && (
                            <span className="text-green-600">
                              Elungileyo: {question.Impendulo}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#6b523b] mt-2 italic">{question.Incazelo}</p>
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

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Link href="/ndebele" className="text-emerald-500 flex items-center gap-1 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Phuma
            </Link>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${timeLeft < 300 ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
              <span className="material-symbols-outlined text-sm">timer</span>
              <span className="font-mono font-bold text-sm">{formatTime(timeLeft)}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#9c7349] mt-1 text-center">
            Umbuzo {currentIndex + 1} ku-{questions.length}
          </p>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-emerald-200 p-6 mb-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="bg-emerald-100 text-emerald-600 font-black text-lg w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              {currentIndex + 1}
            </span>
            <p className="text-[#1c140d] font-medium leading-relaxed pt-1">
              {currentQuestion.Umbuzo}
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-6">
          {options.map((option, index) => {
            const label = optionLabels[index];
            const isSelected = answers[currentIndex] === label;
            const isCorrectAnswer = label === currentQuestion.Impendulo;
            const showCorrect = hasAnswered && isCorrectAnswer;
            const showIncorrect = hasAnswered && isSelected && !isCorrectAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(label)}
                disabled={hasAnswered}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3
                  ${showCorrect ? 'border-green-500 bg-green-50' : ''}
                  ${showIncorrect ? 'border-red-500 bg-red-50' : ''}
                  ${!hasAnswered && isSelected ? 'border-emerald-500 bg-emerald-50' : ''}
                  ${!hasAnswered && !isSelected ? 'border-[#e8dbce] hover:border-emerald-300 hover:bg-emerald-50/50' : ''}
                  ${hasAnswered && !showCorrect && !showIncorrect ? 'border-[#e8dbce] opacity-50' : ''}
                `}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0
                  ${showCorrect ? 'bg-green-500 text-white' : ''}
                  ${showIncorrect ? 'bg-red-500 text-white' : ''}
                  ${!hasAnswered && isSelected ? 'bg-emerald-500 text-white' : ''}
                  ${!hasAnswered && !isSelected ? 'bg-emerald-100 text-emerald-600' : ''}
                  ${hasAnswered && !showCorrect && !showIncorrect ? 'bg-gray-100 text-gray-400' : ''}
                `}>
                  {label}
                </span>
                <span className={`flex-1 ${hasAnswered && !showCorrect && !showIncorrect ? 'text-gray-400' : ''}`}>
                  {option}
                </span>
                {showCorrect && <span className="material-symbols-outlined text-green-500">check_circle</span>}
                {showIncorrect && <span className="material-symbols-outlined text-red-500">cancel</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {hasAnswered && (
          <div className="bg-emerald-50 rounded-xl p-4 mb-6 border border-emerald-200">
            <p className="text-sm font-bold text-emerald-700 mb-1">Incazelo:</p>
            <p className="text-sm text-emerald-600">{currentQuestion.Incazelo}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="flex-1 py-4 px-6 rounded-xl border border-[#e8dbce] font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:border-emerald-300 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Emuva
          </button>
          
          {!hasAnswered ? (
            <button
              onClick={confirmAnswer}
              disabled={!answers[currentIndex]}
              className="flex-1 py-4 px-6 rounded-xl bg-emerald-500 text-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
            >
              Qinisekisa
              <span className="material-symbols-outlined">check</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-4 px-6 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
            >
              {currentIndex === questions.length - 1 ? 'Qeda' : 'Okulandelayo'}
              <span className="material-symbols-outlined">
                {currentIndex === questions.length - 1 ? 'done_all' : 'arrow_forward'}
              </span>
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-8">
          <p className="text-sm font-bold mb-3">Hambela Umbuzo:</p>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => {
              const isAnswered = answeredQuestions.has(index);
              const isCurrent = currentIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all
                    ${isCurrent ? 'bg-emerald-500 text-white' : ''}
                    ${isAnswered && !isCurrent ? 'bg-emerald-100 text-emerald-600' : ''}
                    ${!isAnswered && !isCurrent ? 'bg-gray-100 text-gray-400 hover:bg-emerald-50' : ''}
                  `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
