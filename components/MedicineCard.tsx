
"use client";

import React from 'react';
import { Heart, Leaf, AlertTriangle } from 'lucide-react';

interface MedicineCardProps {
  name: string;
  plants: string[];
  uses: string[];
  preparation: string;
  caution?: string;
  imageUrl?: string;
}

const MedicineCard: React.FC<MedicineCardProps> = ({
  name,
  plants,
  uses,
  preparation,
  caution,
  imageUrl,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div 
      className={`glass-card overflow-hidden transition-all duration-500 ${
        expanded ? 'h-auto' : 'h-[28rem]'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1577467014896-38d274f6dc4d?q=80&w=1931"} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-herb-600/80 backdrop-blur-sm px-3 py-1 rounded-full inline-flex items-center">
            <Heart size={14} className="text-white mr-1" />
            <span className="text-white text-xs font-medium">Herbal Remedy</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-3">{name}</h3>
        
        <div className="mb-4">
          <h4 className="text-herb-400 text-sm font-medium mb-2 flex items-center">
            <Leaf size={14} className="mr-1" /> 
            Key Plants
          </h4>
          <div className="flex flex-wrap gap-2">
            {plants.map((plant, index) => (
              <span 
                key={index} 
                className="text-xs bg-herb-800/60 text-herb-300 px-2 py-1 rounded-full"
              >
                {plant}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-herb-400 text-sm font-medium mb-2">Uses</h4>
          <ul className="space-y-1">
            {uses.slice(0, expanded ? uses.length : 2).map((use, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-herb-500 mt-1.5"></span>
                <span>{use}</span>
              </li>
            ))}
            {!expanded && uses.length > 2 && (
              <li className="text-sm text-gray-400">+ {uses.length - 2} more uses</li>
            )}
          </ul>
        </div>
        
        {expanded && (
          <>
            <div className="mb-4">
              <h4 className="text-herb-400 text-sm font-medium mb-2">Preparation</h4>
              <p className="text-sm text-gray-300">{preparation}</p>
            </div>
            
            {caution && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-800/30 rounded-lg">
                <h4 className="text-red-400 text-sm font-medium mb-1 flex items-center">
                  <AlertTriangle size={14} className="mr-1" /> 
                  Caution
                </h4>
                <p className="text-sm text-gray-300">{caution}</p>
              </div>
            )}
          </>
        )}
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-herb-400 text-sm font-medium hover:text-herb-300 transition-colors mt-2"
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default MedicineCard;
