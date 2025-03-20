
"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, ShoppingBag, Star, Plus, Minus, Heart } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Lavender Essential Oil",
      category: "essential-oils",
      price: 12.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?q=80&w=1974",
      description: "100% pure lavender essential oil for aromatherapy, relaxation, and sleep improvement."
    },
    {
      id: 2,
      name: "Echinacea Tincture",
      category: "tinctures",
      price: 18.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1617206994903-78e6839f53be?q=80&w=1974",
      description: "Organic echinacea tincture to support immune system function."
    },
    {
      id: 3,
      name: "Chamomile Tea Blend",
      category: "teas",
      price: 9.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974",
      description: "Soothing blend of organic chamomile flowers for relaxation and better sleep."
    },
    {
      id: 4,
      name: "Peppermint Seeds",
      category: "seeds",
      price: 5.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1974",
      description: "Organic peppermint seeds for growing your own refreshing herb at home."
    },
    {
      id: 5,
      name: "Turmeric Capsules",
      category: "supplements",
      price: 24.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=1974",
      description: "Organic turmeric supplements with black pepper for enhanced absorption."
    },
    {
      id: 6,
      name: "Aloe Vera Gel",
      category: "topicals",
      price: 14.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1598733958287-5fabf2197f6f?q=80&w=1974",
      description: "Pure aloe vera gel for skin soothing and wound healing."
    },
    {
      id: 7,
      name: "Herb Garden Starter Kit",
      category: "kits",
      price: 29.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516048008684-6aa6bcd9e601?q=80&w=1974",
      description: "Complete kit with pots, soil, and seeds to start your medicinal herb garden."
    },
    {
      id: 8,
      name: "Herbal Medicine Guide Book",
      category: "books",
      price: 19.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=1972",
      description: "Comprehensive guide to growing and using medicinal herbs for health and wellness."
    },
  ];

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'essential-oils', name: 'Essential Oils' },
    { id: 'tinctures', name: 'Tinctures' },
    { id: 'teas', name: 'Herbal Teas' },
    { id: 'seeds', name: 'Seeds & Plants' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'topicals', name: 'Topicals' },
    { id: 'kits', name: 'Kits' },
    { id: 'books', name: 'Books' },
  ];

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text animate-fade-in">
              Herbal Garden Shop
            </h1>
            <p className="text-gray-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our curated collection of high-quality herbal products, seeds, and educational resources.
            </p>
            
            <div className="relative max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="glass-input pl-10 w-full"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent"></div>
      </section>
      
      {/* Product Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 md:mb-0 flex items-center">
              <ShoppingBag size={20} className="text-herb-500 mr-2" />
              Browse Products
              <span className="ml-3 text-sm bg-herb-800/60 text-herb-300 px-2 py-1 rounded-full">
                {filteredProducts.length} items
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
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-fade-in hover-scale">
                  <div className="glass-card h-full overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 rounded-full bg-herb-600/80 text-white flex items-center justify-center hover:bg-herb-500/90 transition-all duration-300">
                          <Heart size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-400"} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                        <span className="text-gray-300 text-xs ml-1">{product.rating}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-herb-400 font-bold">${product.price}</span>
                        <button 
                          onClick={() => addToCart(product.id)}
                          className="px-3 py-2 rounded bg-herb-600/80 text-white flex items-center gap-1 hover:bg-herb-500/90 transition-all duration-300"
                        >
                          <ShoppingBag size={16} />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-300">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Shopping Cart Preview (fixed) */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="glass-card p-4 rounded-xl w-64">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <ShoppingBag size={16} className="text-herb-400" />
                Your Cart
              </h3>
              <span className="bg-herb-600/80 text-white text-xs px-2 py-1 rounded-full">
                {cart.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto mb-3">
              {cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return product ? (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img src={product.image} alt={product.name} className="w-8 h-8 object-cover rounded" />
                      <span className="text-white text-sm">{product.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-herb-400">${(product.price * item.quantity).toFixed(2)}</span>
                      <span className="text-xs text-gray-400">x{item.quantity}</span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
            <div className="border-t border-dark-300 pt-3 flex justify-between items-center">
              <span className="text-white">Total:</span>
              <span className="text-herb-400 font-bold">
                ${cart.reduce((total, item) => {
                  const product = products.find(p => p.id === item.id);
                  return product ? total + (product.price * item.quantity) : total;
                }, 0).toFixed(2)}
              </span>
            </div>
            <button className="mt-3 w-full py-2 rounded bg-herb-600/80 text-white hover:bg-herb-500/90 transition-all duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
