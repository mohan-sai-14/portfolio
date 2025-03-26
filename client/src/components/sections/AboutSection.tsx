import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/WhatsApp Image 2025-03-26 at 20.50.41_5c8127e7.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#0070F3]/30 backdrop-blur-md bg-gray-900/30 shadow-[0_0_15px_rgba(0,112,243,0.2)]">
                <div className="relative pb-[100%]"> {/* 1:1 aspect ratio */}
                  <img 
                    src={profilePhoto} 
                    alt="Bellamkonda Naveen" 
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-6 px-4">
                    <div className="text-center">
                      <p className="text-white font-['Space_Grotesk'] font-semibold text-xl">Bellamkonda Naveen</p>
                      <p className="text-[#00F5A0] text-sm">Tech Entrepreneur & Fintech Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-[#7928CA]/20 blur-2xl"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#0070F3]/20 blur-2xl"></div>
              
              {/* Education badge */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-[#00F5A0]/20 p-2">
                    <i className="fas fa-graduation-cap text-[#00F5A0]"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">BBA in Fintech</p>
                    <p className="text-xs text-gray-400">Takshashila University</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <p className="text-[#00F5A0] font-medium mb-4 tracking-wider">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6">Passionate About Financial Technology & Digital Innovation</h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Currently pursuing a BBA in Fintech at Takshashila University (2023-2027), I'm focused on the intersection of technology and finance to revolutionize business processes.
              </p>
              
              <div className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-5">
                <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-3 text-white">Education</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00F5A0]"></div>
                    </div>
                    <div>
                      <p className="font-medium text-white">BBA in Fintech</p>
                      <p className="text-sm text-gray-400">Takshashila University | 2023-2027</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#00F5A0]"></div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Intermediate - MPC</p>
                      <p className="text-sm text-gray-400">Deeksha Junior College | GPA: 7.8/10</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-5">
                <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-3 text-white">Experience</h3>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#00F5A0]"></div>
                  </div>
                  <div>
                    <p className="font-medium text-white">Food & Beverage Assistant</p>
                    <p className="text-sm text-gray-400">Amirta Hotel Management, Vijayawada | 2021-2023</p>
                    <p className="text-sm text-gray-300 mt-1">Managed customer service operations and inventory systems, developing essential skills in operational management and client relations.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
