import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/certificationsData';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#00F5A0] font-medium mb-4 tracking-wider">MY CREDENTIALS</p>
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6">Certifications & Achievements</h2>
          <p className="text-gray-300">
            Continuous learning and skill development to stay at the forefront of financial technology innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gray-900/30 backdrop-blur-md rounded-xl p-6 border border-${cert.color}/20 hover:border-${cert.color}/40 transition-all`}
              style={{ borderColor: `${cert.color}33` }}
            >
              <div className={`rounded-full w-16 h-16 bg-${cert.color}/20 flex items-center justify-center mb-6 mx-auto`} style={{ backgroundColor: `${cert.color}33` }}>
                <i className={`${cert.icon} text-${cert.color} text-2xl`} style={{ color: cert.color }}></i>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                <div className={`inline-block bg-${cert.color}/20 text-${cert.color} text-xs px-3 py-1 rounded-full`} style={{ backgroundColor: `${cert.color}33`, color: cert.color }}>
                  {cert.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
