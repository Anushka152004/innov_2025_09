"use client";

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Upload, X, AlertTriangle, Sprout, Info, CheckCircle } from 'lucide-react';

// Hardcoded images and disease data
const diseaseData = [
  {
    image: "public/Images/healthy_leaf.jpeg",
    disease: "Healthy Leaf",
    confidence: 100,
    description: "This leaf is healthy with no signs of disease.",
    severity: "None"
  },
  {
    image: "public/Images/healthy_leaf2.jpeg",
    disease: "Healthy Leaf",
    confidence: 95,
    description: "This leaf is healthy with no signs of disease.",
    severity: "None"
  },
  {
    image: "public/Images/powdery_mildew.jpeg",
    disease: "Powdery Mildew",
    confidence: 92.5,
    description: "White or gray powdery growth on leaf surfaces.",
    causes: ["High humidity", "Poor air circulation"],
    treatment: ["Apply fungicide", "Improve air circulation"],
    prevention: ["Plant-resistant varieties", "Water at the base"],
    severity: "Moderate"
  },
  {
    image: "public/Images/powdery_mildew2.jpeg",
    disease: "Powdery Mildew",
    confidence: 91.5,
    description: "White or gray powdery growth on leaf surfaces.",
    causes: ["High humidity", "Poor air circulation"],
    treatment: ["Apply fungicide", "Improve air circulation"],
    prevention: ["Plant-resistant varieties", "Water at the base"],
    severity: "Moderate"
  },
  {
    image: "public/Images/leaf_blight.jpeg",
    disease: "Leaf Blight",
    confidence: 88.2,
    description: "Dark brown or black spots with yellow halos.",
    causes: ["Fungal infection", "Wet conditions"],
    treatment: ["Use copper fungicide", "Remove infected leaves"],
    prevention: ["Avoid overhead watering", "Ensure proper drainage"],
    severity: "High"
  },
  {
    image: "public/Images/leaf_blight2.jpeg",
    disease: "Leaf Blight",
    confidence: 85,
    description: "Dark brown or black spots with yellow halos.",
    causes: ["Fungal infection", "Wet conditions"],
    treatment: ["Use copper fungicide", "Remove infected leaves"],
    prevention: ["Avoid overhead watering", "Ensure proper drainage"],
    severity: "High"
  },
  {
    image: "public/Images/rust_disease.jpeg",
    disease: "Rust Disease",
    confidence: 90.3,
    description: "Orange or reddish-brown pustules on leaf undersides.",
    causes: ["Moist conditions", "Fungal spores spread by wind"],
    treatment: ["Remove affected leaves", "Apply sulfur-based fungicide"],
    prevention: ["Provide good air circulation", "Keep leaves dry"],
    severity: "Moderate"
  },
  {
    image: "public/Images/rust_disease2.jpeg",
    disease: "Rust Disease",
    confidence: 90.3,
    description: "Orange or reddish-brown pustules on leaf undersides.",
    causes: ["Moist conditions", "Fungal spores spread by wind"],
    treatment: ["Remove affected leaves", "Apply sulfur-based fungicide"],
    prevention: ["Provide good air circulation", "Keep leaves dry"],
    severity: "Moderate"
  },
  {
    image: "public/Images/downy_mildew.jpg",
    disease: "Downy Mildew",
    confidence: 85.7,
    description: "Yellow patches on top and fuzzy gray growth underneath.",
    causes: ["Cool, moist conditions", "Overcrowded planting"],
    treatment: ["Use copper-based fungicide", "Improve airflow"],
    prevention: ["Water in the morning", "Space plants properly"],
    severity: "High"
  },
  {
    image: "public/Images/downy_mildew2.jpg",
    disease: "Downy Mildew",
    confidence: 85.7,
    description: "Yellow patches on top and fuzzy gray growth underneath.",
    causes: ["Cool, moist conditions", "Overcrowded planting"],
    treatment: ["Use copper-based fungicide", "Improve airflow"],
    prevention: ["Water in the morning", "Space plants properly"],
    severity: "High"
  }
];

export default function DiseaseIdentification() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const uploadedImage = event.target?.result as string;
        setImage(uploadedImage);
        analyzeImage(uploadedImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = (uploadedImage: string) => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const matchedDisease = diseaseData.find((d) => uploadedImage.includes(d.image));
      setResult(matchedDisease || { disease: "Unknown", description: "No matching disease found." });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Plant Disease Identification</h1>
        <p className="text-gray-300 mb-6">Upload a photo to diagnose plant diseases.</p>
        
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className="glass-btn-outline mx-auto flex items-center gap-2"
        >
          <Upload size={18} /> Upload Image
        </button>
        
        {image && (
          <div className="mt-6">
            <img src={image} alt="Uploaded leaf" className="w-64 h-64 object-cover mx-auto rounded-lg" />
          </div>
        )}
        
        {isAnalyzing && <p className="mt-4 text-gray-300">Analyzing...</p>}
        
        {result && !isAnalyzing && (
          <div className="mt-6 p-4 border border-gray-600 rounded-lg max-w-md mx-auto text-left">
            <h2 className="text-xl font-bold">{result.disease}</h2>
            <p className="text-gray-300">{result.description}</p>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
