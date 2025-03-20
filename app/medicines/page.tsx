
"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicineCard from '@/components/MedicineCard';
import { Search, FlaskConical, Filter } from 'lucide-react';

export default function Medicines() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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

  // Filter medicines based on search term and category
  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = searchTerm === '' || 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.plants.some(plant => plant.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
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
              Herbal Medicines
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover traditional herbal remedies that have been used for centuries to 
              promote wellness and address common health concerns.
            </p>
            
            <div className="relative max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="glass-input pl-10 w-full"
                placeholder="Search for remedies or plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      {/* Medicines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
          
          {filteredMedicines.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedicines.map((medicine, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
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
        </div>
      </section>
      
      {/* Disclaimer Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
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
      </section>
      
      <Footer />
    </div>
  );
}
