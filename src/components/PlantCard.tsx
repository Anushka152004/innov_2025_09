
import React from 'react';
import { Leaf, Info } from 'lucide-react';

interface PlantCardProps {
  name: string;
  scientificName: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  scientificName,
  description,
  benefits,
  imageUrl,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative h-96 perspective-1000 group"
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative preserve-3d transition-all duration-500 w-full h-full ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="glass-card h-full overflow-hidden group">
            <div className="relative h-3/5 overflow-hidden">
              <img 
                src={imageUrl || "https://images.unsplash.com/photo-1603356051383-9686a21a4f2d?q=80&w=2070"} 
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
              <p className="text-herb-400 text-sm italic mb-3">{scientificName}</p>
              <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
              <button
                onClick={handleFlip}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-herb-600/80 text-white flex items-center justify-center hover:bg-herb-500/90 transition-all duration-300"
              >
                <Info size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="glass-card h-full p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <Leaf size={18} className="text-herb-400" />
              Benefits of {name}
            </h3>
            <div className="mt-2 flex-grow">
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-herb-500 mt-2"></span>
                    <p className="text-gray-300 text-sm">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleFlip}
              className="self-end mt-auto w-10 h-10 rounded-full bg-herb-600/80 text-white flex items-center justify-center hover:bg-herb-500/90 transition-all duration-300"
            >
              <Info size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
