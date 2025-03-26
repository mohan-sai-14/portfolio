import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../SkillBar';
import SkillRadarChart from '../SkillRadarChart';
import { financialSkills, programmingSkills, businessSkills, tools, professionalSkills } from '../../data/skillsData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#00F5A0] font-medium mb-4 tracking-wider">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6">Skills & Technologies</h2>
          <p className="text-gray-300">
            A diverse set of skills across financial analysis, programming, and business strategy to drive innovation in the fintech space.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Financial Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#0070F3]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0070F3]/20 flex items-center justify-center mb-6 group-hover:bg-[#0070F3]/30 transition-all">
              <i className="fas fa-chart-line text-[#0070F3] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Financial Skills</h3>
            
            {financialSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                color="#0070F3" 
                delay={index * 0.1}
              />
            ))}
          </motion.div>
          
          {/* Programming Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#7928CA]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#7928CA]/20 flex items-center justify-center mb-6 group-hover:bg-[#7928CA]/30 transition-all">
              <i className="fas fa-code text-[#7928CA] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Programming Skills</h3>
            
            {programmingSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                color="#7928CA" 
                delay={index * 0.1}
              />
            ))}
          </motion.div>
          
          {/* Business Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#00F5A0]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#00F5A0]/20 flex items-center justify-center mb-6 group-hover:bg-[#00F5A0]/30 transition-all">
              <i className="fas fa-briefcase text-[#00F5A0] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Business Skills</h3>
            
            {businessSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                color="#00F5A0" 
                delay={index * 0.1} 
              />
            ))}
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#0070F3]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0070F3]/20 flex items-center justify-center mb-6 group-hover:bg-[#0070F3]/30 transition-all">
              <i className="fas fa-tools text-[#0070F3] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Tools & Applications</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className={`${tool.icon} text-[#0070F3]`}></i>
                  <p className="text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#7928CA]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#7928CA]/20 flex items-center justify-center mb-6 group-hover:bg-[#7928CA]/30 transition-all">
              <i className="fas fa-user-tie text-[#7928CA] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Professional Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className={`${skill.icon} text-[#7928CA]`}></i>
                  <p className="text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Skill Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#00F5A0]/10 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#00F5A0]/20 flex items-center justify-center mb-6 group-hover:bg-[#00F5A0]/30 transition-all">
              <i className="fas fa-th text-[#00F5A0] text-xl"></i>
            </div>
            <h3 className="text-xl font-['Space_Grotesk'] font-semibold mb-4">Skill Matrix</h3>
            
            <div className="relative h-60">
              <SkillRadarChart />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
