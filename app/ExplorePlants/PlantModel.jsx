
import { useGLTF } from '@react-three/drei'

export default function PlantModel({file}) {
  // Determine the file to use - if file is an array, use the first element
  const modelFile = Array.isArray(file) ? file[0] : file;
  
  const {scene} = useGLTF(modelFile);
  
  return (
    <primitive object={scene} />
  )
}
