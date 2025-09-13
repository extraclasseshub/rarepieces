import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Documents', path: '/documents' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Only */}
          <Link to="/" className="flex items-center">
            <img 
  src="/logo.png" 
  alt="Rare Pieces Logo"
  className="h-14 w-auto object-contain"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-brand-blue border-b-2 border-brand-blue'
                    : 'text-brand-navy hover:text-brand-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+27784306215"
              className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-light-blue text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-navy hover:text-brand-blue transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-brand-blue'
                      : 'text-brand-navy hover:text-brand-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href="tel:+27784306215"
                  className="flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-light-blue text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
