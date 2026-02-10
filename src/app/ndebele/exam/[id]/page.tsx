import NdebeleExamClient from '@/components/NdebeleExamClient';
import { NDEBELE_QUESTIONS, NDEBELE_QUESTIONS_PER_EXAM } from '@/lib/ndebeleData';

export function generateStaticParams() {
  const totalExams = Math.ceil(NDEBELE_QUESTIONS.length / NDEBELE_QUESTIONS_PER_EXAM);
  return Array.from({ length: totalExams }, (_, i) => ({
    id: String(i + 1),
  }));
}

interface ExamPageProps {
  params: { id: string };
}

export default function NdebeleExamPage({ params }: ExamPageProps) {
  const examId = parseInt(params.id);
  return <NdebeleExamClient examId={examId} />;
}
