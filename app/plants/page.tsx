"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlantCard from '@/components/PlantCard';
import MedicineCard from '@/components/MedicineCard';
import { Search, Filter, Leaf, FlaskConical, Tabs, Tab } from 'lucide-react';
import { Tabs as UITabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Plants() {
  // Plant state
  const [plantSearchTerm, setPlantSearchTerm] = useState('');
  const [selectedPlantCategory, setSelectedPlantCategory] = useState('all');
  const [visiblePlants, setVisiblePlants] = useState<any[]>([]);
  
  // Medicine state
  const [medicineSearchTerm, setMedicineSearchTerm] = useState('');
  const [selectedMedicineCategory, setSelectedMedicineCategory] = useState('all');
  
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

  // Sample medicine data
  const medicines = [
    {
      name: "Echinacea Tincture",
      category: "immune",
      plants: ["Echinacea", "Goldenseal"],
      uses: [
        "Boosts immune system",
        "Helps fight colds and flu",
        "Reduces inflammation",
        "May shorten duration of illness"
      ],
      preparation: "Made by steeping fresh or dried echinacea flowers, leaves and roots in alcohol for several weeks.",
      caution: "Not recommended for people with autoimmune disorders or allergies to plants in the daisy family.",
      imageUrl: "https://images.unsplash.com/photo-1617206994903-78e6839f53be?q=80&w=1974"
    },
    {
      name: "Lavender Sleep Sachet",
      category: "sleep",
      plants: ["Lavender", "Chamomile", "Hops"],
      uses: [
        "Promotes relaxation",
        "Improves sleep quality",
        "Reduces anxiety",
        "Creates a calming atmosphere"
      ],
      preparation: "Dried herbs are combined and placed in a small cloth sachet, placed under the pillow or nearby when sleeping.",
      imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1970"
    },
    {
      name: "Ginger & Turmeric Tea",
      category: "digestive",
      plants: ["Ginger", "Turmeric", "Black Pepper"],
      uses: [
        "Reduces inflammation",
        "Aids digestion",
        "Boosts immune system",
        "Provides antioxidants"
      ],
      preparation: "Fresh ginger and turmeric roots are sliced or grated and steeped in hot water. A pinch of black pepper improves curcumin absorption.",
      imageUrl: "https://images.unsplash.com/photo-1563245160-7ff90295366b?q=80&w=1974"
    },
    {
      name: "Calendula Salve",
      category: "skin",
      plants: ["Calendula", "Plantain", "Comfrey"],
      uses: [
        "Heals cuts and scrapes",
        "Soothes skin irritations",
        "Moisturizes dry skin",
        "Reduces inflammation"
      ],
      preparation: "Calendula flowers and herbs are infused in oil, strained, and combined with beeswax to create a healing salve.",
      imageUrl: "https://images.unsplash.com/photo-1512237798647-84b57b22b517?q=80&w=1974"
    },
    {
      name: "Peppermint Digestive Tonic",
      category: "digestive",
      plants: ["Peppermint", "Fennel", "Ginger"],
      uses: [
        "Relieves indigestion",
        "Calms stomach upset",
        "Reduces bloating",
        "Freshens breath"
      ],
      preparation: "Herbs are steeped in hot water for 10-15 minutes, strained, and can be consumed warm or cold.",
      imageUrl: "https://images.unsplash.com/photo-1558443336-dfc9b8e649c2?q=80&w=1970"
    },
    {
      name: "St. John's Wort Oil",
      category: "mood",
      plants: ["St. John's Wort"],
      uses: [
        "Alleviates mild depression",
        "Reduces anxiety",
        "Soothes nerve pain",
        "Helps with seasonal affective disorder"
      ],
      preparation: "Fresh St. John's Wort flowers are infused in oil for several weeks in sunlight until the oil turns deep red.",
      caution: "Can interact with many medications including antidepressants, birth control, and blood thinners. Always consult a healthcare provider before use.",
      imageUrl: "https://images.unsplash.com/photo-1610147342239-208237a532b0?q=80&w=1974"
    },
    {
      name: "Elderberry Syrup",
      category: "immune",
      plants: ["Elderberry", "Cinnamon", "Ginger", "Clove"],
      uses: [
        "Boosts immune system",
        "Fights cold and flu viruses",
        "Reduces symptoms of respiratory infections",
        "Provides antioxidants"
      ],
      preparation: "Elderberries and spices are simmered in water, strained, and combined with honey to create a sweet syrup.",
      imageUrl: "https://images.unsplash.com/photo-1551655510-555dc3be8633?q=80&w=1974"
    },
    {
      name: "Herbal Steam Inhalation",
      category: "respiratory",
      plants: ["Eucalyptus", "Thyme", "Rosemary", "Peppermint"],
      uses: [
        "Clears congestion",
        "Opens airways",
        "Soothes throat and respiratory inflammation",
        "Relieves sinus pressure"
      ],
      preparation: "Herbs are added to a bowl of steaming hot water. The steam is inhaled by leaning over the bowl with a towel draped over the head.",
      imageUrl: "https://images.unsplash.com/photo-1648926824555-7b7d0dcf3419?q=80&w=2070"
    }
  ];

  // Filter plants based on search term and category
  useEffect(() => {
    let filtered = plants;
    
    if (plantSearchTerm) {
      filtered = filtered.filter(plant => 
        plant.name.toLowerCase().includes(plantSearchTerm.toLowerCase()) || 
        plant.scientificName.toLowerCase().includes(plantSearchTerm.toLowerCase())
      );
    }
    
    if (selectedPlantCategory !== 'all') {
      filtered = filtered.filter(plant => plant.category === selectedPlantCategory);
    }
    
    setVisiblePlants(filtered);
  }, [plantSearchTerm, selectedPlantCategory]);

  // Filter medicines based on search term and category
  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicineSearchTerm === '' || 
      medicine.name.toLowerCase().includes(medicineSearchTerm.toLowerCase()) ||
      medicine.plants.some(plant => plant.toLowerCase().includes(medicineSearchTerm.toLowerCase()));
    
    const matchesCategory = selectedMedicineCategory === 'all' || medicine.category === selectedMedicineCategory;
    
    return matchesSearch && matchesCategory;
  });

  const plantCategories = [
    { id: 'all', name: 'All Plants' },
    { id: 'calming', name: 'Calming' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'immune', name: 'Immune Support' },
    { id: 'skin', name: 'Skin Health' },
    { id: 'anti-inflammatory', name: 'Anti-inflammatory' },
    { id: 'mood', name: 'Mood Support' },
  ];

  const medicineCategories = [
    { id: 'all', name: 'All Remedies' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'immune', name: 'Immune Support' },
    { id: 'skin', name: 'Skin Health' },
    { id: 'sleep', name: 'Sleep & Relaxation' },
    { id: 'mood', name: 'Mood Support' },
    { id: 'respiratory', name: 'Respiratory' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Plants & Medicines
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our virtual herbal garden and discover healing remedies crafted from nature's pharmacy.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <UITabs defaultValue="plants" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-2 glass-card">
                <TabsTrigger value="plants" className="flex items-center gap-2">
                  <Leaf size={16} />
                  <span>Medicinal Plants</span>
                </TabsTrigger>
                <TabsTrigger value="medicines" className="flex items-center gap-2">
                  <FlaskConical size={16} />
                  <span>Herbal Medicines</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Plants Tab Content */}
            <TabsContent value="plants" className="animate-fade-in">
              <div className="relative max-w-xl mx-auto mb-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="glass-input pl-10 w-full"
                  placeholder="Search for herbs by name..."
                  value={plantSearchTerm}
                  onChange={(e) => setPlantSearchTerm(e.target.value)}
                />
              </div>
              
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
                    {plantCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedPlantCategory(category.id)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                          selectedPlantCategory === category.id
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
            </TabsContent>
            
            {/* Medicines Tab Content */}
            <TabsContent value="medicines" className="animate-fade-in">
              <div className="relative max-w-xl mx-auto mb-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="glass-input pl-10 w-full"
                  placeholder="Search for remedies or plants..."
                  value={medicineSearchTerm}
                  onChange={(e) => setMedicineSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
                  <FlaskConical size={20} className="text-herb-500 mr-2" />
                  Herbal Remedies
                  <span className="ml-3 text-sm bg-herb-800/60 text-herb-300 px-2 py-1 rounded-full">
                    {filteredMedicines.length} remedies
                  </span>
                </h2>
                
                <div className="flex items-center gap-3">
                  <div className="text-white flex items-center gap-2">
                    <Filter size={16} className="text-herb-500" />
                    <span className="text-sm">Filter:</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {medicineCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedMedicineCategory(category.id)}
                        className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                          selectedMedicineCategory === category.id
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
              
              {filteredMedicines.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMedicines.map((medicine, index) => (
                    <div key={index} className="animate-fade-in hover-scale" style={{ animationDelay: `${0.1 * index}s` }}>
                      <MedicineCard {...medicine} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card p-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">No remedies found</h3>
                  <p className="text-gray-300">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                </div>
              )}
              
              {/* Disclaimer Section */}
              <div className="py-10">
                <div className="glass-card p-6 border-l-4 border-l-amber-500">
                  <h3 className="text-xl font-semibold text-white mb-3">Herbal Medicine Disclaimer</h3>
                  <p className="text-gray-300 text-sm">
                    The information presented on this website about herbal medicines is for educational purposes only. 
                    It is not intended as medical advice or to replace the expertise and judgment of your healthcare provider. 
                    Always consult with a qualified healthcare professional before using any herbal remedies, especially if you 
                    are pregnant, nursing, have a medical condition, or are taking medications.
                  </p>
                </div>
              </div>
            </TabsContent>
          </UITabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
