
import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Camera, Upload, X, AlertTriangle, Sprout, Info, CheckCircle } from 'lucide-react';

const DiseaseIdentification = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClearImage = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = () => {
    if (!image) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis with timeout
    setTimeout(() => {
      // Sample result data
      setResult({
        disease: "Powdery Mildew",
        confidence: 92.5,
        description: "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white or gray powdery growth on leaf surfaces, stems, and flowers.",
        causes: [
          "High humidity and poor air circulation",
          "Overcrowded plantings",
          "Moderate temperatures (60-80°F / 15-27°C)",
          "Shaded conditions"
        ],
        treatment: [
          "Remove and dispose of infected plant parts",
          "Improve air circulation around plants",
          "Apply fungicidal treatments such as neem oil or potassium bicarbonate",
          "Avoid overhead watering"
        ],
        prevention: [
          "Plant disease-resistant varieties",
          "Ensure proper spacing between plants",
          "Water at the base of plants in the morning",
          "Maintain good garden sanitation"
        ],
        severity: "Moderate"
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'low':
        return 'bg-green-600/30 text-green-400';
      case 'moderate':
        return 'bg-amber-600/30 text-amber-400';
      case 'high':
        return 'bg-red-600/30 text-red-400';
      default:
        return 'bg-gray-600/30 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Plant Disease Identification
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Upload a photo of your plant's affected areas and our system will identify 
              potential diseases and provide treatment recommendations.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      {/* Identification Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Diagnose Plant Problems</h2>
                <p className="text-gray-300">
                  Take a clear photo of the affected areas (leaves, stems, flowers) to help identify 
                  potential diseases or issues.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div 
                    className={`border-2 border-dashed ${image ? 'border-herb-600/50' : 'border-gray-700'} rounded-xl 
                    aspect-square flex flex-col items-center justify-center relative overflow-hidden transition-all group`}
                  >
                    {image ? (
                      <>
                        <img 
                          src={image} 
                          alt="Plant disease to identify" 
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-dark-500/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            onClick={handleClearImage}
                            className="w-10 h-10 rounded-full bg-dark-500/80 flex items-center justify-center text-white hover:bg-red-600/80 transition-colors"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <Upload size={40} className="text-gray-500 mb-3" />
                        <p className="text-gray-400 text-center px-4">
                          Drag and drop a photo here or click to upload
                        </p>
                      </>
                    )}
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={handleCapture}
                      className={`flex-1 glass-btn-outline flex items-center justify-center gap-2 ${image ? 'opacity-70 hover:opacity-100' : ''}`}
                    >
                      <Camera size={18} />
                      {image ? 'Change Photo' : 'Upload Photo'}
                    </button>
                    
                    <button
                      onClick={handleAnalyze}
                      disabled={!image || isAnalyzing}
                      className={`flex-1 glass-btn flex items-center justify-center gap-2 ${!image ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Sprout size={18} />
                          Diagnose Problem
                        </>
                      )}
                    </button>
                  </div>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
                
                <div className="relative">
                  {result ? (
                    <div className="animate-fade-in">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                          <Sprout size={18} className="text-herb-400" />
                          Diagnosis Results
                        </h3>
                        <div className="px-2.5 py-1 bg-herb-600/30 rounded-full">
                          <span className="text-xs text-herb-300 font-medium">
                            {result.confidence}% confidence
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold text-white">{result.disease}</h4>
                        <div className={`px-2.5 py-1 rounded-full ${getSeverityColor(result.severity)}`}>
                          <span className="text-xs font-medium">
                            {result.severity} severity
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">
                        {result.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="text-white font-medium mb-2">Common Causes:</h5>
                        <ul className="space-y-1">
                          {result.causes.map((cause: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-white font-medium mb-2">Treatment:</h5>
                        <ul className="space-y-1">
                          {result.treatment.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle size={14} className="text-herb-500 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-medium mb-2">Prevention:</h5>
                        <ul className="space-y-1">
                          {result.prevention.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6">
                      <Info size={40} className="text-gray-600 mb-3" />
                      <h3 className="text-xl font-semibold text-white mb-2">Disease Information</h3>
                      <p className="text-gray-400">
                        Upload a photo and click "Diagnose Problem" to get information about potential 
                        plant diseases and treatments.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-10 glass-card p-6 border-l-4 border-l-amber-500">
              <div className="flex items-start gap-4">
                <AlertTriangle size={22} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Disclaimer</h3>
                  <p className="text-gray-300 text-sm">
                    This plant disease identification tool provides general guidance only. 
                    The accuracy of the diagnosis depends on image quality and other factors. 
                    For severe plant problems or valuable specimens, we recommend consulting with 
                    a professional horticulturist or plant pathologist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DiseaseIdentification;
