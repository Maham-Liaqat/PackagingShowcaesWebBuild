import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="inline-flex items-center mb-4 rounded-xl bg-white/95 px-4 py-2 shadow-sm hover:bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
            >
              <img src={logo} alt="AKRO" className="h-8 w-auto" />
            </button>
            <p className="text-blue-100">
              Premium digital printing solutions for flexible packaging. No minimum orders, unlimited designs, fast turnaround.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition text-left">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-2 text-blue-100">
              <p>+1 (234) 567-890</p>
              <p>info@akropackaging.com</p>
              <p>Industrial Zone, Business City</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>© 2025 AKRO Packaging. All rights reserved.</p>
          <p>Digital Printed Packaging Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;