import { useGLTF } from '@react-three/drei'

export default function PlantModel({file}) {
    
//   const {scene} = useGLTF(async ()=>{
//     const response = await fetch(url);
//     const blob = await response.blob();
//     return blob;
//   });
//   const {scene} = useGLTF("/public/PlantsModels/Aloevera.glb");
  const {scene} = useGLTF(file[0]);
  return (
    <primitive object={scene} />
  )
}
