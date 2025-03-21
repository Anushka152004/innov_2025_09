
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PlantCard from '../components/PlantCard';
import Footer from '../components/Footer';
import { ArrowRight, Search, Leaf, FlaskConical, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Sample data for featured plants with updated images
  const featuredPlants = [
    {
      name: "Lavender",
      scientificName: "Lavandula",
      description: "Lavender is a fragrant herb with purple flowers, known for its calming properties and pleasant aroma.",
      benefits: [
        "Promotes relaxation and reduces anxiety",
        "Helps improve sleep quality",
        "Has antiseptic and anti-inflammatory properties",
        "Can help relieve headaches"
      ],
      imageUrl: "/lovable-uploads/5f67ebea-cabc-4fe7-988f-ec7914819ff9.png"
    },
    {
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      description: "Chamomile is a daisy-like herb with white flowers, commonly used for its calming effects.",
      benefits: [
        "Helps reduce stress and anxiety",
        "Promotes better sleep",
        "Soothes digestive issues",
        "Has anti-inflammatory properties"
      ],
      imageUrl: "/lovable-uploads/27c167a9-578f-4726-b219-1ec014cddd94.png"
    },
    {
      name: "Mint",
      scientificName: "Mentha",
      description: "Mint is a refreshing herb with bright green leaves, known for its digestive benefits and cooling sensation.",
      benefits: [
        "Helps with digestion",
        "Relieves nausea and headaches",
        "Freshens breath naturally",
        "Can help with respiratory issues"
      ],
      imageUrl: "/lovable-uploads/5119cb40-375c-449c-ac6c-31db80dc8974.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="section-title mx-auto">About Our Virtual Garden</h2>
            <p className="text-gray-300 mt-6">
              Our virtual herbal garden is a digital sanctuary where traditional wisdom 
              meets modern science. Explore healing plants, learn about their properties, 
              and discover how they can enhance your wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <Leaf size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Plant Database</h3>
              <p className="text-gray-300 mb-4">
                Access detailed information about hundreds of medicinal plants, including their uses, 
                growing conditions, and healing properties.
              </p>
              <Link to="/garden" className="text-herb-400 hover:text-herb-300 flex items-center gap-1 text-sm font-medium">
                Browse Plants <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="glass-card p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <FlaskConical size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Herbal Remedies</h3>
              <p className="text-gray-300 mb-4">
                Discover traditional herbal remedies and preparations that have been used 
                for centuries to address common health concerns.
              </p>
              <Link to="/medicines" className="text-herb-400 hover:text-herb-300 flex items-center gap-1 text-sm font-medium">
                Explore Remedies <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="glass-card p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <Search size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Plant Identification</h3>
              <p className="text-gray-300 mb-4">
                Use our advanced identification tools to identify unknown plants and detect 
                potential plant diseases in your garden.
              </p>
              <Link to="/plant-identification" className="text-herb-400 hover:text-herb-300 flex items-center gap-1 text-sm font-medium">
                Identify Plants <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Plants Section */}
      <section className="py-20 bg-dark-600/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="section-title">Featured Plants</h2>
              <p className="text-gray-300 max-w-2xl">
                Discover some of nature's most powerful medicinal plants and their healing properties.
              </p>
            </div>
            <Link to="/garden" className="glass-btn-outline mt-4 md:mt-0">
              View All Plants
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlants.map((plant, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
                <PlantCard {...plant} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-herb-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Herbal Journey</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Whether you're a seasoned herbalist or just starting to explore the world of medicinal plants, 
                our virtual herbal garden has something for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Link to="/plant-identification" className="glass-card p-5 flex items-center gap-4 hover-scale">
                <div className="w-12 h-12 rounded-full bg-herb-700/50 flex items-center justify-center flex-shrink-0">
                  <Search size={20} className="text-herb-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Identify Plants</h3>
                  <p className="text-gray-400 text-sm">Discover unknown plants in your garden</p>
                </div>
              </Link>
              
              <Link to="/disease-identification" className="glass-card p-5 flex items-center gap-4 hover-scale">
                <div className="w-12 h-12 rounded-full bg-herb-700/50 flex items-center justify-center flex-shrink-0">
                  <Sprout size={20} className="text-herb-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Diagnose Diseases</h3>
                  <p className="text-gray-400 text-sm">Check plant health and identify issues</p>
                </div>
              </Link>
            </div>
            
            <div className="text-center">
              <Link to="/garden" className="glass-btn inline-flex items-center gap-2 group">
                Explore the Garden
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
