import React from 'react';
import { CheckCircle } from 'lucide-react';
import heroMain from '../assets/hero-main.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Premium Digital Printing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Printed Packaging Pouches & Sachets
            </h1>
            <p className="text-gray-600 mb-8">
              Transform your brand with stunning, high-quality digitally printed packaging. From stand-up pouches to custom sachets, we bring your vision to life.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span>No minimum order quantity</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Unlimited designs</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span>5-day production lead time</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition flex items-center justify-center"
              >
                View Products →
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-gray-300 bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition"
              >
                Request Quote
              </button>
            </div>
          </div>
          <div>
            <img src={heroMain} alt="AKRO Packaging" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;