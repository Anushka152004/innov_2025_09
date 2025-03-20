
"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Droplet, Heart } from 'lucide-react';

const HeroSection = () => {
  const leafRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create random leaf animations
    leafRefs.current.forEach((leaf, index) => {
      if (leaf) {
        leaf.style.animationDelay = `${index * 0.7}s`;
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.top = `${Math.random() * 100}%`;
        leaf.style.animationDuration = `${5 + Math.random() * 10}s`;
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={el => leafRefs.current[i] = el}
          className="absolute opacity-10 animate-float pointer-events-none"
        >
          <Leaf size={Math.random() * 40 + 20} className="text-herb-400" />
        </div>
      ))}

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-3 py-1 rounded-full bg-herb-800/60 border border-herb-700/50 mb-6">
              <span className="text-herb-400 text-sm font-medium">Nature's Medicine Cabinet</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text leading-tight">
              Discover the Healing<br />Power of Herbs
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Explore our virtual herbal garden and learn about medicinal plants that have been 
              used for centuries to promote health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/garden" className="glass-btn flex items-center justify-center gap-2 group">
                Explore Garden 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/plant-identification" className="glass-btn-outline flex items-center justify-center gap-2">
                Identify Plants
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-herb-500/20 backdrop-blur-sm rounded-3xl transform rotate-3 scale-95"></div>
              <div className="glass rounded-3xl p-6 relative z-10 transform -rotate-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 glass-card p-4 flex items-center gap-3 animate-slide-in-bottom" style={{ animationDelay: '0.9s' }}>
                    <div className="w-12 h-12 rounded-full bg-herb-600/30 flex items-center justify-center">
                      <Leaf size={24} className="text-herb-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">100+ Herbal Plants</h3>
                      <p className="text-gray-400 text-sm">Detailed information</p>
                    </div>
                  </div>
                  <div className="glass-card p-4 flex flex-col items-center text-center animate-slide-in-bottom" style={{ animationDelay: '1.1s' }}>
                    <Droplet size={28} className="text-herb-400 mb-2" />
                    <h3 className="font-semibold text-white">Natural Remedies</h3>
                    <p className="text-gray-400 text-sm">Traditional cures</p>
                  </div>
                  <div className="glass-card p-4 flex flex-col items-center text-center animate-slide-in-bottom" style={{ animationDelay: '1.3s' }}>
                    <Heart size={28} className="text-herb-400 mb-2" />
                    <h3 className="font-semibold text-white">Health Benefits</h3>
                    <p className="text-gray-400 text-sm">Wellness support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
