import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import productGrid from '../assets/custom-pouches.png';
import proteinSachets from '../assets/protien-sachets.png';
import coffeePouches from '../assets/coffee-pouches.jpg';
import customDesign from '../assets/custom-pouches.png';
import heroCard from '../assets/hero-card.jpg';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      categories: ['all', 'stand-up'],
      image: heroCard, // Using hero-card.jpg for Digital Printed Pouches Collection collage
      title: 'Digital Printed Pouches Collection',
      description: 'Vibrant, eye-catching pouches with full-color digital printing. Perfect for snacks, cereals, and confectionery.',
    },
    {
      id: 2,
      categories: ['stand-up', 'sachets', 'all'],
      image: proteinSachets,
      title: 'Stand-Up Pouches & Sachets',
      description: 'Professional packaging for supplements, protein powders, and health products. Multiple sizes available.',
    },
    {
      id: 3,
      categories: ['coffee', 'all'],
      image: coffeePouches,
      title: 'Premium Coffee Pouches',
      description: 'Specialized coffee packaging with degassing valves. Keeps your coffee fresh and flavorful.',
    },
    {
      id: 4,
      categories: ['all', 'stand-up'],
      image: customDesign, // Using custom-pouches.png for Custom Design Collection with fruits/vegetables
      title: 'Custom Design Collection',
      description: 'Showcase of unlimited design possibilities. No cliché costs, no minimum orders.',
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.categories.includes(activeFilter));

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  };

  const scrollToContact = () => {
    // Close modal and remove body scroll lock first
    handleCloseModal();
    // Small delay to ensure modal is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 text-lg">
            Explore our range of digitally printed packaging solutions, crafted to elevate your brand.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button 
            onClick={() => handleFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'all' 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Products
          </button>
          <button 
            onClick={() => handleFilter('stand-up')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'stand-up' 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Stand-Up Pouches
          </button>
          <button 
            onClick={() => handleFilter('sachets')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'sachets' 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sachets
          </button>
          <button 
            onClick={() => handleFilter('coffee')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === 'coffee' 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Coffee Packaging
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article 
              key={product.id} 
              className="animate-fade-in group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur-sm hover:bg-white"
                  >
                    <Eye className="w-4 h-4" />
                    View details
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-900 font-semibold mb-3">
                  <span className="h-2 w-2 rounded-full bg-blue-900"></span>
                  {product.categories.filter((c) => c !== 'all').join(' • ') || 'All'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Request quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
                  <p className="text-gray-600 text-base sm:text-lg">{selectedProduct.description}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 transition p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end border-t pt-6">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition w-full sm:w-auto"
                >
                  Close
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 transition w-full sm:w-auto"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;