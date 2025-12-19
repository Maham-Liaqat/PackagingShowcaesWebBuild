import React from 'react';
import { Package, Palette, Clock, Award } from 'lucide-react';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose AKRO?</h2>
        <p className="text-gray-600 text-lg mb-12">Industry-leading digital printing capabilities that give your brand the edge.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Package className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">No Minimum Order</h3>
            <p className="text-gray-600">Order exactly what you need. Perfect for testing new designs or small batch production.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Palette className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Unlimited Designs</h3>
            <p className="text-gray-600">No cliché or cylinder costs. Each pouch can feature a unique design at no extra charge.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Clock className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">5-Day Lead Time</h3>
            <p className="text-gray-600">Fast production turnaround. Get your custom packaging in just 5 working days.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Quality</h3>
            <p className="text-gray-600">State-of-the-art digital printing technology for vibrant, durable, food-safe packaging.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;