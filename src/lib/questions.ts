export interface Question {
  Question_Number: number;
  Question_ID: string;
  Question_Text: string;
  Option_A: string;
  Option_B: string;
  Option_C: string;
  Option_D: string;
  Option_E: string;
  Option_F: string;
  Option_G: string;
  Option_H: string;
  Correct_Answer: string;
}

export interface Exam {
  id: number;
  name: string;
  questions: Question[];
  questionCount: number;
}

export const QUESTIONS_PER_EXAM = 20;

export function parseCSV(csvText: string): Question[] {
  const lines = csvText.split('\n');
  const headers = parseCSVLine(lines[0]);
  const questions: Question[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const values = parseCSVLine(line);
    if (values.length < headers.length) continue;

    const question: Question = {
      Question_Number: parseInt(values[0]) || i,
      Question_ID: values[1] || '',
      Question_Text: values[2] || '',
      Option_A: values[3] || '',
      Option_B: values[4] || '',
      Option_C: values[5] || '',
      Option_D: values[6] || '',
      Option_E: values[7] || '',
      Option_F: values[8] || '',
      Option_G: values[9] || '',
      Option_H: values[10] || '',
      Correct_Answer: values[11] || '',
    };
    
    questions.push(question);
  }

  return questions;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"' && !inQuotes) {
      inQuotes = true;
    } else if (char === '"' && inQuotes) {
      if (nextChar === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = false;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

export function divideIntoExams(questions: Question[]): Exam[] {
  const exams: Exam[] = [];
  const totalExams = Math.ceil(questions.length / QUESTIONS_PER_EXAM);
  
  for (let i = 0; i < totalExams; i++) {
    const start = i * QUESTIONS_PER_EXAM;
    const end = Math.min(start + QUESTIONS_PER_EXAM, questions.length);
    const examQuestions = questions.slice(start, end);
    
    exams.push({
      id: i + 1,
      name: `Exam ${i + 1}`,
      questions: examQuestions,
      questionCount: examQuestions.length,
    });
  }
  
  return exams;
}

export function getOptions(question: Question): { label: string; value: string }[] {
  const options: { label: string; value: string }[] = [];
  const optionMap: Record<string, string> = {
    A: question.Option_A,
    B: question.Option_B,
    C: question.Option_C,
    D: question.Option_D,
    E: question.Option_E,
    F: question.Option_F,
    G: question.Option_G,
    H: question.Option_H,
  };

  for (const [key, value] of Object.entries(optionMap)) {
    if (value && value.trim()) {
      options.push({ label: key, value: value });
    }
  }

  return options;
}

export function isMultipleChoice(question: Question): boolean {
  return question.Correct_Answer.includes(',');
}

export function checkAnswer(userAnswer: string | string[], correctAnswer: string): boolean {
  const correctAnswers = correctAnswer.split(',').map(a => a.trim().toUpperCase()).sort();
  
  if (Array.isArray(userAnswer)) {
    const userAnswers = userAnswer.map(a => a.trim().toUpperCase()).sort();
    return JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
  }
  
  return userAnswer.toUpperCase() === correctAnswers.join(',');
}
