import React, { useState } from 'react';
import { Sprout, Leaf } from 'lucide-react';
import { questions } from './data/questions';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { QuizState } from './types';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResult: false,
    selectedOption: null,
  });

  const handleOptionSelect = (optionIndex: number) => {
    if (quizState.selectedOption !== null) return;

    setQuizState(prev => ({
      ...prev,
      selectedOption: optionIndex,
    }));
  };

  const handleNext = () => {
    const isCorrect = questions[quizState.currentQuestion].options[quizState.selectedOption!].isCorrect;
    
    setQuizState(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, prev.selectedOption!],
      showResult: prev.currentQuestion === questions.length - 1,
      selectedOption: null,
    }));
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResult: false,
      selectedOption: null,
    });
  };

  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="absolute -left-8 top-0 transform -translate-x-full">
              <Leaf className="w-8 h-8 text-green-400/30 floating-leaves" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute -right-8 bottom-0 transform translate-x-full">
              <Leaf className="w-8 h-8 text-green-400/30 floating-leaves" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="flex items-center justify-center mb-4">
              <Sprout className="w-12 h-12 text-green-400 floating-leaves animate-pulse-slow" />
            </div>
            <h1 className="text-4xl font-bold text-green-400 mb-2 animate-fadeIn">
              Virtual Herbal Garden Quiz
            </h1>
            <p className="text-gray-400 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Test your plant care knowledge and learn how to keep your garden thriving!
            </p>
          </div>

          {!quizState.showResult ? (
            <>
              <div className="mb-8 text-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <span className="inline-block gradient-border px-4 py-2 rounded-full text-green-400">
                  Question {quizState.currentQuestion + 1} of {questions.length}
                </span>
              </div>
              
              <QuizCard
                question={questions[quizState.currentQuestion]}
                selectedOption={quizState.selectedOption}
                onSelectOption={handleOptionSelect}
                onNext={handleNext}
                showOutcome={quizState.selectedOption !== null}
              />
            </>
          ) : (
            <ResultCard
              score={quizState.score}
              totalQuestions={questions.length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;