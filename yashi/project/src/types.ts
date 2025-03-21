export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    outcome: {
      description: string;
      image: string;
    };
    isCorrect: boolean;
  }[];
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  showResult: boolean;
  selectedOption: number | null;
}