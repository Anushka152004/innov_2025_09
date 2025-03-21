
import { Button } from "@/components/ui/button";
import {
  Activity,
  ShieldPlus,
  CircleX,
  Salad,
  Amphora,
  Milk,
  Pill,
  Cross,
  Image,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PlantBenefits({ ayushBenefits, healthBenefits, plantName, plantImages }) {
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  
  // Get a default image if plantImages is empty or undefined
  const getDisplayImage = () => {
    if (Array.isArray(plantImages) && plantImages.length > 0) {
      return plantImages[0];
    }
    
    // Return appropriate image based on plantName
    switch(plantName?.toLowerCase()) {
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

  const displayImage = getDisplayImage();

  return (
    <div className="w-full sm:w-[400px] h-max flex sm:gap-x-0 gap-x-2 justify-between items-center">
      <BenefitDialog
        title={
          <h1 className="flex items-center">
            <ShieldPlus className="h-5 w-5 mr-2" /> AYUSH Application
          </h1>
        }
        button={
          <BenefitButton
            icon={<ShieldPlus className="h-4 w-4 mr-2" />}
            text="AYUSH Application"
          />
        }
        content={
          <>
            <AyushCard
              icon={<Salad className="h-4 w-4 mr-2" />}
              title="Ayurveda"
              content={ayushBenefits.ayurveda}
            />
            <AyushCard
              icon={<Milk className="h-4 w-4 mr-2" />}
              title="Unani"
              content={ayushBenefits.unani}
            />
            <AyushCard
              icon={<Pill className="h-4 w-4 mr-2" />}
              title="Siddha"
              content={ayushBenefits.siddha}
            />
          </>
        }
      />
      
      {/* Health Benefits Button */}
      <div>
        <Button 
          className="text-[13px] rounded-full" 
          variant="secondary"
          onClick={() => setIsDetailDialogOpen(true)}
        >
          <Activity className="h-4 w-4 mr-2" /> Health Benefits
        </Button>
        
        {/* Detailed Health Benefits Dialog */}
        <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
          <DialogContent className="glassmorphism max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-herb-400" />
                  Health Benefits of {plantName}
                </div>
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={displayImage}
                  alt={plantName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-2">Health Benefits</h3>
                <ul className="space-y-3">
                  {healthBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-herb-500 mt-2"></span>
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">AYUSH Applications</h3>
                  <div className="space-y-4">
                    <div className="border border-[#f9fafb24] relative rounded-lg p-5">
                      <Badge className="text-black text-xs px-3 rounded-full absolute -top-3 left-5" variant="secondary">
                        <Salad className="h-4 w-4 mr-2" />
                        Ayurveda
                      </Badge>
                      <p className="text-gray-300">{ayushBenefits.ayurveda}</p>
                    </div>
                    
                    <div className="border border-[#f9fafb24] relative rounded-lg p-5">
                      <Badge className="text-black text-xs px-3 rounded-full absolute -top-3 left-5" variant="secondary">
                        <Milk className="h-4 w-4 mr-2" />
                        Unani
                      </Badge>
                      <p className="text-gray-300">{ayushBenefits.unani}</p>
                    </div>
                    
                    <div className="border border-[#f9fafb24] relative rounded-lg p-5">
                      <Badge className="text-black text-xs px-3 rounded-full absolute -top-3 left-5" variant="secondary">
                        <Pill className="h-4 w-4 mr-2" />
                        Siddha
                      </Badge>
                      <p className="text-gray-300">{ayushBenefits.siddha}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export const BenefitDialog = ({ button, title, content }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{button}</AlertDialogTrigger>
      <AlertDialogContent className="glassmorphism">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="w-full h-max py-3 font-medium text-sm text-white flex flex-col gap-y-3">
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const AyushCard = ({ icon, title, content }) => {
  return (
    <div className="w-full h-max mt-5 border border-[#f9fafb24] relative rounded-lg p-5">
      <Badge
        className="text-black text-xs px-3 rounded-full absolute -top-3 left-5"
        variant="secondary"
      >
        {icon}
        {title}
      </Badge>
      <p>{content}</p>
    </div>
  );
};

export const BenefitButton = ({ icon, text }) => {
  return (
    <Button className="text-[13px] rounded-full" variant="secondary">
      {icon} {text}
    </Button>
  );
};
