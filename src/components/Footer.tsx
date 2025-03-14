
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-loudega-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <a href="/" className="text-2xl font-display font-bold">
                Loudega
              </a>
            </div>
            <p className="text-loudega-400 mb-6 max-w-md">
              Empowering Louisville communities through locally-owned bodegas that provide access to fresh food and essential items.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-loudega-800 rounded-full hover:bg-loudega-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-loudega-800 rounded-full hover:bg-loudega-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-loudega-800 rounded-full hover:bg-loudega-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-loudega-800 rounded-full hover:bg-loudega-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-loudega-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-loudega-400 hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#process" className="text-loudega-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-loudega-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://kycombinator.typeform.com/loudega" className="text-loudega-400 hover:text-white transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-loudega-400">
                123 Main Street<br />
                Louisville, KY 40202
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-loudega-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-loudega-400 text-sm">
            &copy; {currentYear} Loudega. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-loudega-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-loudega-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-loudega-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
