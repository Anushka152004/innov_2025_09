import React from 'react';
import { Sprout } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="glass-morphism fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sprout className="w-6 h-6 text-green-400" />
          <span className="text-xl font-bold text-green-400">Herbal Garden</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">ChatBot</a>
          <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Eco IQ</a>
        </div>
      </div>
    </nav>
  );
};