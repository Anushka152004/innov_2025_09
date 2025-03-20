
"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageSquareText, Send } from 'lucide-react';

export default function Chatbot() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Herbal Garden Chat Assistant
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ask our AI assistant about medicinal plants, herbal remedies, growing tips, and more.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-4 h-[500px] flex flex-col">
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-herb-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquareText size={18} className="text-herb-300" />
                  </div>
                  <div className="glass-card p-3 max-w-[80%]">
                    <p className="text-white">Hello! I'm your virtual herbal garden assistant. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="glass-card p-3 bg-herb-600/30 max-w-[80%]">
                    <p className="text-white">What are the best plants for anxiety relief?</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-herb-600/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">You</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-herb-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquareText size={18} className="text-herb-300" />
                  </div>
                  <div className="glass-card p-3 max-w-[80%]">
                    <p className="text-white">
                      Some of the best herbs for anxiety relief include:
                      <br /><br />
                      1. <span className="text-herb-400">Lavender</span> - Has calming effects and promotes relaxation
                      <br />
                      2. <span className="text-herb-400">Chamomile</span> - Helps reduce stress and improve sleep
                      <br />
                      3. <span className="text-herb-400">Valerian</span> - Acts as a natural sedative
                      <br />
                      4. <span className="text-herb-400">Lemon Balm</span> - Reduces anxiety and promotes calmness
                      <br />
                      5. <span className="text-herb-400">Passionflower</span> - Helps with restlessness and anxiety
                      <br /><br />
                      Would you like me to tell you more about any of these plants specifically?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-2 border-t border-dark-300">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your question here..."
                    className="glass-input w-full pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-herb-500 hover:text-herb-400 transition-colors">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Popular Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="glass-card p-3 text-left hover:bg-herb-700/20 transition-colors">
                  <p className="text-gray-200">What herbs help with sleep?</p>
                </button>
                <button className="glass-card p-3 text-left hover:bg-herb-700/20 transition-colors">
                  <p className="text-gray-200">How do I grow basil indoors?</p>
                </button>
                <button className="glass-card p-3 text-left hover:bg-herb-700/20 transition-colors">
                  <p className="text-gray-200">Which herbs are best for digestive issues?</p>
                </button>
                <button className="glass-card p-3 text-left hover:bg-herb-700/20 transition-colors">
                  <p className="text-gray-200">How can I identify wild herbs safely?</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
