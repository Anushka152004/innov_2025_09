
"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Globe, Leaf, LineChart, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EcoIQ() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-herb-700/30 px-4 py-2 rounded-full mb-6">
              <Globe size={18} className="text-herb-400" />
              <span className="text-white font-medium">EcoIQ Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Sustainable Herbal Practices
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join our EcoIQ initiative to learn about sustainable herb cultivation, conservation efforts, 
              and how to reduce your environmental footprint while enjoying the benefits of medicinal plants.
            </p>
            
            <Link href="#learn-more" className="glass-btn inline-flex items-center gap-2 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      <section id="learn-more" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">What is EcoIQ?</h2>
              <p className="text-gray-300 mb-6">
                EcoIQ is our sustainability initiative focused on promoting environmentally-conscious 
                practices in herbal medicine, gardening, and conservation. We believe that the power 
                of herbal medicine should be harnessed without causing harm to our planet.
              </p>
              <p className="text-gray-300 mb-6">
                Our program tracks and measures the ecological impact of herbal harvesting and cultivation, 
                providing certification for sustainable practices, educational resources, and community 
                support for herbalists, gardeners, and herbal medicine enthusiasts.
              </p>
              <div className="flex items-center gap-4 text-herb-400">
                <div className="w-12 h-12 rounded-full bg-herb-700/30 flex items-center justify-center">
                  <Leaf size={20} />
                </div>
                <div>
                  <span className="font-medium">Sustainable Harvesting</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="glass-card p-3 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013" 
                  alt="Eco-friendly herb garden" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-dark-600/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Impact Goals</h2>
            <p className="text-gray-300">
              Through EcoIQ, we're working to create measurable positive change in the way 
              herbal plants are grown, harvested, and used around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover-scale">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <Leaf size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Conservation</h3>
              <p className="text-gray-300">
                Protect endangered medicinal plant species and restore natural habitats through 
                conservation partnerships and sustainable harvesting practices.
              </p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <LineChart size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Carbon Reduction</h3>
              <p className="text-gray-300">
                Lower the carbon footprint of herbal medicine through local sourcing, 
                sustainable packaging, and carbon offset programs for our community.
              </p>
            </div>
            
            <div className="glass-card p-6 hover-scale">
              <div className="w-14 h-14 rounded-full bg-herb-700/50 flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-herb-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-gray-300">
                Provide resources and training on sustainable growing practices, ethical wildcrafting, 
                and reducing environmental impact in herbal medicine production.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Join the EcoIQ Community</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Be part of our growing network of environmentally-conscious herbalists, gardeners, 
                and plant enthusiasts committed to sustainable practices.
              </p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input type="text" id="name" className="glass-input w-full" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input type="email" id="email" className="glass-input w-full" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-white mb-2">Area of Interest</label>
                <select id="interest" className="glass-input w-full">
                  <option value="">Select your area of interest</option>
                  <option value="conservation">Plant Conservation</option>
                  <option value="sustainable-growing">Sustainable Growing</option>
                  <option value="education">Educational Resources</option>
                  <option value="certification">Sustainable Certification</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="text-center mt-8">
                <button type="submit" className="glass-btn inline-flex items-center gap-2 group">
                  Join Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
