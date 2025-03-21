
"use client";

import React from 'react';
import { Leaf, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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

  // Helper function to get fallback image if needed
  const getImage = () => {
    if (imageUrl) return imageUrl;
    
    // Fallback based on plant name
    switch(name.toLowerCase()) {
      case "lavender":
        return "/lovable-uploads/5f67ebea-cabc-4fe7-988f-ec7914819ff9.png";
      case "chamomile":
        return "/lovable-uploads/27c167a9-578f-4726-b219-1ec014cddd94.png";
      case "mint":
        return "/lovable-uploads/5119cb40-375c-449c-ac6c-31db80dc8974.png";
      case "echinacea":
        return "/lovable-uploads/b945cb21-a5e2-4e7c-b50e-c08a2fce801d.png";
      case "ginger":
        return "/lovable-uploads/a773733e-cb94-43b0-877c-7e3d59ab5295.png";
      case "aloe vera":
        return "/lovable-uploads/b5a6293e-eb25-48e9-9539-6684d2a3cf97.png";
      case "turmeric":
        return "/lovable-uploads/c0e5c05d-90c5-477e-b918-903e3d804ed1.png";
      case "st. john's wort":
        return "/lovable-uploads/d92fcd2d-cea0-489a-989d-6d086d0ec8d3.png";
      case "valerian":
        return "/lovable-uploads/57c9bed3-4730-4e13-96bc-112878249d57.png";
      default:
        return "https://images.unsplash.com/photo-1603356051383-9686a21a4f2d?q=80&w=2070";
    }
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
                  src={getImage()}
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
                src={getImage()}
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
