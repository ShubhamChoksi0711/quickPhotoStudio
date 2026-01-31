'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'directions', label: 'Direction' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'headshot', label: 'Headshot' },
    { id: 'services', label: 'Services' },
    { id: 'whyus', label: 'Why us?' },
  ];

  return (
    <header 
      className={`top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-yellow-400 shadow-lg' 
          : 'bg-yellow-400 shadow-md'
      }`}
    >
      <nav className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className=" transform transition-all duration-300 hover:scale-110" 
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-30 w-auto transition-transform duration-300 hover:rotate-3"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:text-blue-900 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:bg-blue-800 hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <X 
                className={`h-6 w-6 text-white absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`} 
              />
              <Menu 
                className={`h-6 w-6 text-white absolute transition-all duration-300 ${
                  isMenuOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-yellow-500">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-blue-900 transition-all duration-300 font-semibold px-4 py-2 text-left rounded-lg hover:bg-yellow-500 transform hover:translate-x-2"
                  style={{ 
                    animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : 'none'
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 w-full shadow-md hover:shadow-xl transform hover:scale-105"
                style={{ 
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${navLinks.length * 50}ms both` : 'none'
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}