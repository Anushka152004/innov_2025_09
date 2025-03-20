import React, { useEffect } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PlantModel from "./PlantModel";
import ModelView from "@/ModelView/ModelView";
import { useLocation } from "react-router-dom";

export default function PlantCanvas({ file, dayNightMode }) {
  console.warn(dayNightMode, file);
  const param = useLocation();
  return (
    <Canvas
      camera={{ position: [-5, 5, 0] }}
      style={{
        width: "300px",
        height: "300px",
      }}
    >
      <ambientLight intensity={0.5} />
      /** * ? To limit model movement in y-axis: "maxPolarAngle" used. * ? To
      limit model movement in Zoom: "maxDistance" and "minDistance" used. */
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={1}
        maxDistance={6}
        minDistance={5}
      />
      <group scale={3}>
        <ModelView
          plantId={param.pathname.substring(
            param.pathname.lastIndexOf("/") + 1
          )}
          file={file}
        />
      </group>
      {
        dayNightMode == true ? <Environment preset="sunset" /> : "" //! For sunlight and night mode
      
      }
    </Canvas>
  );
}
