import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent backdrop-blur-md bg-opacity-5 border-b border-white/10 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-['Space_Grotesk'] font-bold text-white">
            <span className="text-[#00F5A0]">B.</span>Naveen
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="relative font-medium hover:text-[#00F5A0] transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00F5A0] after:transition-all hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden text-gray-100 hover:text-[#00F5A0] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-gray-900/30 backdrop-blur-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="block px-3 py-2 text-base font-medium hover:text-[#00F5A0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
