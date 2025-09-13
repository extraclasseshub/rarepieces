import React from 'react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappMessage = "Hi Rare Pieces, I'd like to enquire about your credit repair services.";
  const whatsappUrl = `https://wa.me/27784306215?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/rare.png" 
                alt="Rare Pieces Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional credit repair services in South Africa. Fix your credit, secure your future.
            </p>
            <p className="text-sm text-gray-400">
              Company Registration: 2016/310023/07
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-light-blue">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-light-blue" />
                <a href="tel:+27784306215" className="hover:text-brand-light-blue transition-colors">
                  +27 78 430 6215
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-light-blue" />
                <a href="mailto:info@rarepieces.co.za" className="hover:text-brand-light-blue transition-colors">
                  info@rarepieces.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-light-blue mt-1" />
                <div>
                  <p>1531 Forbes Road, Zone 9</p>
                  <p>Meadowlands, 1852</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-light-blue">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Debt Review Removal</li>
              <li>Prescribed Debt Removal</li>
              <li>Judgement Removal</li>
              <li>Adverse Accounts Removal</li>
              <li>Credit Score Fix</li>
              <li>Unlawful Fraud Listing Removal</li>
              <li>Detailed Credit Reports</li>
              <li>Bank Loans (Quick Approval)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Rare Pieces Credit Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@rarepieces.co.za?subject=Credit Repair Enquiry"
                className="flex items-center space-x-2 bg-brand-blue hover:bg-brand-light-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
