
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled 
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-loudega-900">
              Loudega
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-loudega-800 hover:text-loudega-accent transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#benefits" 
              className="text-loudega-800 hover:text-loudega-accent transition-colors font-medium"
            >
              Benefits
            </a>
            <a 
              href="#process" 
              className="text-loudega-800 hover:text-loudega-accent transition-colors font-medium"
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-loudega-800 hover:text-loudega-accent transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="https://kycombinator.typeform.com/loudega"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-loudega-accent hover:bg-loudega-accent/90 text-white"
              >
                Apply Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-loudega-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 md:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-8 py-6 flex flex-col space-y-6">
          <a 
            href="#about" 
            className="text-loudega-800 text-lg py-2 border-b border-loudega-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#benefits" 
            className="text-loudega-800 text-lg py-2 border-b border-loudega-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#process" 
            className="text-loudega-800 text-lg py-2 border-b border-loudega-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#contact" 
            className="text-loudega-800 text-lg py-2 border-b border-loudega-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-loudega-accent hover:bg-loudega-accent/90 text-white w-full mt-4"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open('https://kycombinator.typeform.com/loudega', '_blank');
            }}
          >
            Apply Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
