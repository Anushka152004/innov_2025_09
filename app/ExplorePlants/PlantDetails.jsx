
import React from "react";
import PlantVisuals from "./PlantVisuals";
import PlantBasic from "./PlantBasic";
import AudioDetails from "./AudioDetails";
import PlantMedicinal from "./PlantMedicinal";
import PlantBenefits from "./PlantBenefits";
import { useLoaderData } from "react-router-dom";

export default function PlantDetails() {
  const plantData = useLoaderData();
  console.log(plantData);
  const isEmpty =
    plantData == undefined ||
    plantData.length == undefined ||
    plantData.length == 0
      ? false
      : true;
      
  // Helper function to get appropriate image based on plant name
  const getPlantImage = (plantName) => {
    if (!plantName) return null;
    
    switch(plantName.toLowerCase()) {
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
        return null;
    }
  };
  
  // Get plant name from common_names array if it exists
  const plantName = plantData?.common_names && plantData.common_names.length > 0 
    ? plantData.common_names[0] 
    : "Plant";
    
  // Create customImages array by combining original images with our custom image
  const customPlantImage = getPlantImage(plantName);
  const customImages = customPlantImage 
    ? [customPlantImage] 
    : [];
    
  // Combine with existing images if they exist
  const combinedImages = [
    ...customImages,
    ...(plantData?.ai_images || []),
    ...(plantData?.org_images || [])
  ];
  
  return (
    !isEmpty && (
      <div className="relative w-screen p-5 sm:px-10 px-5 h-max gap-y-5 sm:gap-y-0 sm:h-[90vh] flex sm:flex-row flex-col justify-evenly items-center">
        <PlantBasic
          size={plantData.description.size}
          region={plantData.habitat_distribution.native_region}
          climate={plantData.habitat_distribution.preferred_climate}
          sunlight={plantData.habitat_distribution.sunlight_needs}
          soil={plantData.habitat_distribution.soil_requirements}
        />
        <section className="h-full sm:w-max w-full flex flex-col sm:gap-y-0 gap-y-5 justify-evenly">
          <PlantBenefits 
            ayushBenefits={plantData.medicinal_uses.applications_in_ayush} 
            healthBenefits={plantData.phytochemistry.health_benefits}
            plantName={plantName}
            plantImages={combinedImages.length > 0 ? combinedImages : undefined}
          />
          <AudioDetails description={plantData.simplified_description} />
          <PlantVisuals
            images={combinedImages.length > 0 ? combinedImages : undefined}
            videos={plantData.videos}
            models={plantData.models}
            plantName={plantName}
          />
        </section>
        <PlantMedicinal
          plantParts={plantData.medicinal_uses.part_used}
          activeCompunds={plantData.phytochemistry.active_compounds}
          therapeutics={plantData.medicinal_uses.therapeutic_properties}
          dosages={plantData.phytochemistry.dosage_forms}
        />
      </div>
    )
  );
}
