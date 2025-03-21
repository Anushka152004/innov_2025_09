import React from 'react';
import { Question } from '../types';
import { Check, X, ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuizCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  onNext: () => void;
  showOutcome: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  onNext,
  showOutcome,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl premium-glass rounded-xl p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 h-full w-[1px] vine-divider" />
      
      <h2 className="text-2xl font-poppins font-semibold text-neon mb-8 relative">
        <Leaf className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald/30 animate-float" />
        {question.text}
      </h2>
      
      <div className="grid gap-6">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectOption(index)}
            disabled={showOutcome}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-6 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
              selectedOption === index
                ? 'neon-border bg-accent-black/80'
                : 'premium-glass glow-hover'
            }`}
          >
            <div className="flex items-center justify-between relative z-10">
              <span className="text-lg font-inter text-gray-200">{option.text}</span>
              {showOutcome && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {option.isCorrect ? (
                    <Check className="text-neon w-6 h-6" />
                  ) : (
                    <X className="text-red-400 w-6 h-6" />
                  )}
                </motion.span>
              )}
            </div>
            
            {showOutcome && selectedOption === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-6 space-y-4"
              >
                <p className="text-gray-400 font-inter">{option.outcome.description}</p>
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={option.outcome.image}
                  alt={option.outcome.description}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </motion.div>
            )}

            <div className="absolute top-2 right-2">
              <div className="dew-drop" style={{ animationDelay: `${index * 0.5}s` }} />
            </div>
          </motion.button>
        ))}
      </div>

      {showOutcome && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex justify-end"
        >
          <button
            onClick={onNext}
            className="flex items-center space-x-3 px-8 py-4 rounded-xl neon-border bg-accent-black/80 text-neon font-poppins glow-hover"
          >
            <span>Next Question</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};