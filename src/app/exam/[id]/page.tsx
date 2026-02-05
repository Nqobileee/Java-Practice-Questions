import ExamClient from '@/components/ExamClient';
import { QUESTIONS_PER_EXAM } from '@/lib/questions';

// Generate static params for all exam pages (121 questions / 20 = 7 exams)
export function generateStaticParams() {
  const totalExams = Math.ceil(121 / QUESTIONS_PER_EXAM);
  return Array.from({ length: totalExams }, (_, i) => ({
    id: String(i + 1),
  }));
}

interface ExamPageProps {
  params: { id: string };
}

export default function ExamPage({ params }: ExamPageProps) {
  const examId = parseInt(params.id);
  return <ExamClient examId={examId} />;
}
