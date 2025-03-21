
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantCard from '../components/PlantCard';
import { Search, Filter, Leaf } from 'lucide-react';

const Garden = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePlants, setVisiblePlants] = useState<any[]>([]);
  
  // Sample plant data with updated images
  const plants = [
    {
      name: "Lavender",
      scientificName: "Lavandula",
      category: "calming",
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
      category: "calming",
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
      category: "digestive",
      description: "Mint is a refreshing herb with bright green leaves, known for its digestive benefits and cooling sensation.",
      benefits: [
        "Helps with digestion",
        "Relieves nausea and headaches",
        "Freshens breath naturally",
        "Can help with respiratory issues"
      ],
      imageUrl: "/lovable-uploads/5119cb40-375c-449c-ac6c-31db80dc8974.png"
    },
    {
      name: "Echinacea",
      scientificName: "Echinacea purpurea",
      category: "immune",
      description: "Echinacea is a flowering plant that stimulates the immune system and helps fight infections.",
      benefits: [
        "Boosts immune system function",
        "Helps fight colds and infections",
        "Reduces inflammation",
        "May shorten illness duration"
      ],
      imageUrl: "/lovable-uploads/b945cb21-a5e2-4e7c-b50e-c08a2fce801d.png"
    },
    {
      name: "Ginger",
      scientificName: "Zingiber officinale",
      category: "digestive",
      description: "Ginger is a pungent, spicy root with powerful anti-inflammatory and digestive properties.",
      benefits: [
        "Relieves nausea and motion sickness",
        "Reduces inflammation and pain",
        "Aids digestion",
        "Helps fight colds and flu"
      ],
      imageUrl: "/lovable-uploads/a773733e-cb94-43b0-877c-7e3d59ab5295.png"
    },
    {
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis",
      category: "skin",
      description: "Aloe vera is a succulent plant with gel-filled leaves that have remarkable healing properties.",
      benefits: [
        "Soothes sunburns and skin irritations",
        "Accelerates wound healing",
        "Has antibacterial properties",
        "Can help with digestive issues"
      ],
      imageUrl: "/lovable-uploads/b5a6293e-eb25-48e9-9539-6684d2a3cf97.png"
    },
    {
      name: "Turmeric",
      scientificName: "Curcuma longa",
      category: "anti-inflammatory",
      description: "Turmeric is a golden-colored spice with powerful anti-inflammatory and antioxidant properties.",
      benefits: [
        "Reduces inflammation",
        "Has strong antioxidant effects",
        "May help prevent chronic diseases",
        "Improves brain function"
      ],
      imageUrl: "/lovable-uploads/c0e5c05d-90c5-477e-b918-903e3d804ed1.png"
    },
    {
      name: "St. John's Wort",
      scientificName: "Hypericum perforatum",
      category: "mood",
      description: "St. John's Wort is a flowering plant traditionally used to improve mood and treat depression.",
      benefits: [
        "May help with mild to moderate depression",
        "Can reduce anxiety",
        "Has anti-inflammatory properties",
        "May help with menopausal symptoms"
      ],
      imageUrl: "/lovable-uploads/d92fcd2d-cea0-489a-989d-6d086d0ec8d3.png"
    },
    {
      name: "Valerian",
      scientificName: "Valeriana officinalis",
      category: "calming",
      description: "Valerian is a flowering plant whose root is used as a natural sedative and sleep aid.",
      benefits: [
        "Improves sleep quality",
        "Reduces anxiety",
        "May help with stress",
        "Can ease menstrual cramps"
      ],
      imageUrl: "/lovable-uploads/57c9bed3-4730-4e13-96bc-112878249d57.png"
    }
  ];

  // Filter plants based on search term and category
  useEffect(() => {
    let filtered = plants;
    
    if (searchTerm) {
      filtered = filtered.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(plant => plant.category === selectedCategory);
    }
    
    setVisiblePlants(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Plants' },
    { id: 'calming', name: 'Calming' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'immune', name: 'Immune Support' },
    { id: 'skin', name: 'Skin Health' },
    { id: 'anti-inflammatory', name: 'Anti-inflammatory' },
    { id: 'mood', name: 'Mood Support' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Virtual Herbal Garden
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our collection of medicinal herbs and discover their unique properties, 
              growing conditions, and traditional uses.
            </p>
            
            <div className="relative max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="glass-input pl-10 w-full"
                placeholder="Search for herbs by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      {/* Plant Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
              <Leaf size={20} className="text-herb-500 mr-2" />
              Browse Plants
              <span className="ml-3 text-sm bg-herb-800/60 text-herb-300 px-2 py-1 rounded-full">
                {visiblePlants.length} herbs
              </span>
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="text-white flex items-center gap-2">
                <Filter size={16} className="text-herb-500" />
                <span className="text-sm">Filter:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-herb-600/80 text-white'
                        : 'bg-dark-400/60 text-gray-300 hover:bg-dark-300/60'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {visiblePlants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visiblePlants.map((plant, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <PlantCard {...plant} />
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No plants found</h3>
              <p className="text-gray-300">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Garden;
