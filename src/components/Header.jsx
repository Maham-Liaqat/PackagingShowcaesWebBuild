import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="AKRO" className="h-12" />
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-gray-900 transition">
              Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </button>
          </nav>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden lg:flex items-center text-gray-600 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +1 (234) 567-890
            </div>
            <button 
              onClick={handleGetQuote}
              className="bg-green-600 text-white px-4 sm:px-5 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition"
            >
              <span className="hidden sm:inline">Get a Quote</span>
              <span className="sm:hidden">Quote</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-600 hover:text-gray-900 transition py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-600 hover:text-gray-900 transition py-2">
                Products
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-gray-900 transition py-2">
                Contact
              </button>
              <div className="flex items-center text-gray-600 pt-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (234) 567-890</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;