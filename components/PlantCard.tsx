
"use client";

import React from 'react';
import { Leaf, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div 
        className="relative h-96 perspective-1000 group hover-scale transition-all duration-300"
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
                <div className="flex gap-2 absolute bottom-4 right-4">
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="w-10 h-10 rounded-full bg-herb-600/80 text-white flex items-center justify-center hover:bg-herb-500/90 transition-all duration-300"
                  >
                    <Leaf size={18} />
                  </button>
                  <button
                    onClick={handleFlip}
                    className="w-10 h-10 rounded-full bg-herb-600/80 text-white flex items-center justify-center hover:bg-herb-500/90 transition-all duration-300"
                  >
                    <Info size={18} />
                  </button>
                </div>
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

      {/* Detailed Plant Information Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-card border-none max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Leaf size={20} className="text-herb-400" />
              {name}
              <span className="text-herb-400 text-sm font-normal ml-2 italic">({scientificName})</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={imageUrl || "https://images.unsplash.com/photo-1603356051383-9686a21a4f2d?q=80&w=2070"} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <p className="text-gray-300">{description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Benefits</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-herb-500 mt-2"></span>
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Growing Conditions</h3>
                <p className="text-gray-300">
                  {name} thrives in well-drained soil with moderate sunlight. It requires regular watering but should not be overwatered. 
                  It can be grown both indoors and outdoors, depending on your climate.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Traditional Uses</h3>
            <p className="text-gray-300">
              For centuries, {name} has been used in traditional medicine systems around the world. It is commonly used to treat various ailments and is known for its therapeutic properties.
              The plant is often prepared as teas, tinctures, or poultices for different applications.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlantCard;
