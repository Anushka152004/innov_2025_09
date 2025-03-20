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
          <PlantBenefits ayushBenefits={plantData.medicinal_uses.applications_in_ayush} healthBenefits={plantData.phytochemistry.health_benefits} />
          <AudioDetails description={plantData.simplified_description} />
          <PlantVisuals
            images={(plantData.ai_images != undefined && plantData.org_images != undefined) ? [...plantData.ai_images, ...plantData.org_images] : undefined}
            videos={plantData.videos}
            models={plantData.models}
            plantName={plantData.common_names[0]}
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
