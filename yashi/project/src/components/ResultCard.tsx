import React from 'react';
import { Trophy, RefreshCw, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;

  const getResultMessage = () => {
    if (score === totalQuestions) {
      return {
        title: "Plant Care Expert! 🌿",
        description: "Your knowledge of plant care is truly outstanding. You're ready to nurture any garden!",
        color: "text-neon"
      };
    } else if (score >= totalQuestions * 0.6) {
      return {
        title: "Growing Knowledge! 🌱",
        description: "You have a good foundation in plant care. Keep learning and your garden will flourish!",
        color: "text-emerald"
      };
    } else {
      return {
        title: "Time to Grow! 🌺",
        description: "Every gardener starts somewhere! Review the basics and try again to improve your plant care skills.",
        color: "text-red-400"
      };
    }
  };

  const result = getResultMessage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-3xl premium-glass rounded-xl p-12 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-30" />
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center mb-8"
      >
        <Trophy className="w-20 h-20 text-neon animate-glow" />
      </motion.div>
      
      <h2 className={`text-3xl font-poppins font-bold mb-4 ${result.color}`}>
        {result.title}
      </h2>
      
      <p className="text-gray-300 mb-8 font-inter">
        {result.description}
      </p>
      
      <div className="relative mb-12">
        <div className="h-2 bg-accent-black rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="score-meter"
          />
        </div>
        <div className="mt-4 flex justify-between text-2xl font-poppins font-bold">
          <span className={result.color}>{score}</span>
          <span className="text-gray-500">/{totalQuestions}</span>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="inline-flex items-center px-8 py-4 bg-accent-black rounded-xl neon-border text-neon font-poppins glow-hover"
      >
        <RefreshCw className="w-5 h-5 mr-3" />
        Try Again
      </motion.button>

      <div className="absolute -left-4 bottom-4">
        <Leaf className="w-12 h-12 text-emerald/20 animate-float" />
      </div>
      <div className="absolute -right-4 top-4">
        <Leaf className="w-12 h-12 text-neon/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>
    </motion.div>
  );
};