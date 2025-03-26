import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/WhatsApp Image 2025-03-26 at 20.50.40_07e9fcfe.jpg';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-[#00F5A0] font-medium mb-4 tracking-wider"
            >
              FINTECH ENTHUSIAST & TECH ENTREPRENEUR
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] font-bold mb-6 leading-tight"
            >
              Bellamkonda <span className="text-[#0070F3] text-shadow-glow">Naveen</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
            >
              Passionate about leveraging financial technology to optimize business processes and drive digital innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-[#0070F3] hover:bg-[#0070F3]/90 text-white font-medium transition-all transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full border border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0]/10 font-medium transition-all transform hover:-translate-y-1"
              >
                Let's Connect
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex items-center space-x-5"
            >
              <a href="https://www.linkedin.com/in/naveen-bellamkonda-b549952b7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F5A0] transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/NaveenFintech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00F5A0] transition-colors" aria-label="GitHub">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:naveenbellamkonda9595@gmail.com" className="text-gray-400 hover:text-[#00F5A0] transition-colors" aria-label="Email">
                <i className="far fa-envelope text-xl"></i>
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden rounded-full border-4 border-[#0070F3]/30 shadow-[0_0_25px_rgba(0,112,243,0.3)]">
                <img 
                  src={profilePhoto} 
                  alt="Bellamkonda Naveen" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F1624]/30 rounded-full"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#7928CA]/20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#0070F3]/20 blur-2xl"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900/70 backdrop-blur-md px-6 py-2 rounded-full border border-gray-700/50"
              >
                <p className="text-[#00F5A0] text-center font-medium">Tech Entrepreneur</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#00F5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
