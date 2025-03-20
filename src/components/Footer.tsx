
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-nav pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf size={24} className="text-herb-500 mr-2" />
              <h2 className="text-xl font-bold text-white">Herbal Garden</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Explore the healing power of nature through our virtual herbal garden. 
              Discover medicinal plants, natural remedies, and traditional wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center hover:bg-herb-700 transition-colors">
                <Twitter size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center hover:bg-herb-700 transition-colors">
                <Github size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center hover:bg-herb-700 transition-colors">
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-dark-400 flex items-center justify-center hover:bg-herb-700 transition-colors">
                <Mail size={18} className="text-gray-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-herb-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/garden" className="text-gray-400 hover:text-herb-400 transition-colors">Virtual Garden</Link>
              </li>
              <li>
                <Link to="/medicines" className="text-gray-400 hover:text-herb-400 transition-colors">Herbal Medicines</Link>
              </li>
              <li>
                <Link to="/plant-identification" className="text-gray-400 hover:text-herb-400 transition-colors">Identify Plants</Link>
              </li>
              <li>
                <Link to="/disease-identification" className="text-gray-400 hover:text-herb-400 transition-colors">Identify Diseases</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-400 transition-colors">Plant Encyclopedia</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-400 transition-colors">Herb Growing Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-400 transition-colors">Medicinal Properties</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-400 transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-herb-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Virtual Herbal Garden. All rights reserved.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-herb-500 mx-1" />
            <span>for plant lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
