# Java Practice Questions - OCP 1Z0-829 Exam Preparation

A web-based practice exam application designed to help developers prepare for the Oracle Certified Professional Java SE 17 Developer (1Z0-829) certification exam.

## Overview

This application provides a structured learning environment with 121 practice questions covering key Java SE 17 topics. Questions are organized into 7 timed exams, each containing 20 questions (with one exam containing the remaining questions). The platform offers immediate feedback on answers and tracks your progress throughout each exam session.

## Features

- **Timed Practice Exams**: Each exam has a 30-minute time limit. If time expires, the exam is automatically scored.
- **Instant Feedback**: After answering each question, the correct answer is immediately displayed along with visual indicators showing whether your response was correct or incorrect.
- **Multiple Question Types**: Supports both single-choice and multiple-choice questions, reflecting the actual exam format.
- **Progress Tracking**: Visual progress bar shows your current position within each exam.
- **Score Summary**: Upon completion, view your total score, percentage, pass/fail status, and a detailed breakdown of each question with your answers compared to the correct ones.
- **Exam Retry**: Restart any exam to practice again with a fresh timer.

## Question Topics

The practice questions cover essential Java SE 17 topics tested on the 1Z0-829 exam, including:

- Primitive types and type casting
- Operators and operator precedence
- String manipulation and the String API
- Date and Time API (LocalDate, LocalTime, LocalDateTime, Period, Duration, Instant)
- Wrapper classes and autoboxing
- Control flow and logical operators
- Method overloading and type resolution

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export for hosting on any static file server

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nqobileee/Java-Practice-Questions.git
   cd Java-Practice-Questions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a static production build:

```bash
npm run build
```

The output will be generated in the `out` directory, ready for deployment to any static hosting service.

## Project Structure

```
src/
  app/
    page.tsx          # Home page with exam selection
    layout.tsx        # Root layout with navigation
    globals.css       # Global styles and Tailwind configuration
    exam/
      [id]/
        page.tsx      # Dynamic exam page route
  components/
    ExamClient.tsx    # Main exam component with timer, questions, and scoring
  lib/
    questions.ts      # Question parsing and utility functions
    questionData.ts   # Hardcoded question data (121 questions)
```

## Usage

1. From the home page, select an exam (Exam 1 through Exam 7).
2. Answer each question by selecting your choice. For multiple-choice questions, select all applicable answers and click "Confirm Answer".
3. After answering, the correct answer is revealed immediately.
4. Navigate between questions using the Back and Next buttons.
5. Complete all questions or let the timer run out to see your final score.
6. Review your answers in the results summary and retry the exam if desired.

## License

This project is intended for educational purposes to assist with Java certification exam preparation.

## Acknowledgments

Questions are based on the Oracle Certified Professional Java SE 17 Developer (1Z0-829) exam objectives.