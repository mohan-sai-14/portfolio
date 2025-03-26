import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../ProjectModal';
import { projects } from '../../data/projectData';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#00F5A0] font-medium mb-4 tracking-wider">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6">Projects Portfolio</h2>
          <p className="text-gray-300">
            Showcasing innovative fintech solutions that leverage technology to solve financial challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-md border border-white/10"
            >
              <div className="relative h-48 overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id={`projectGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={project.color} stopOpacity="0.3" />
                      <stop offset="100%" stopColor={project.secondaryColor} stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="200" fill="url(#projectGradient${index})" />
                  <rect x="50" y="50" width="300" height="100" fill="#0F1624" rx="8" ry="8" />
                  <text x="200" y="100" textAnchor="middle" fill="#fff" fontFamily="'Space Grotesk', sans-serif" fontSize="16" fontWeight="bold">
                    {project.title}
                  </text>
                  <text x="200" y="120" textAnchor="middle" fill={project.color} fontFamily="'Inter', sans-serif" fontSize="12">
                    {project.technologies[0]}
                  </text>
                </svg>
                <div className="absolute inset-0 bg-dark/80 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                  <button 
                    className="px-5 py-2 rounded-full bg-[#00F5A0] text-dark font-medium transform transition-transform hover:scale-105"
                    onClick={() => openModal(index)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-['Space_Grotesk'] font-semibold">{project.title}</h3>
                  <span className={`text-xs bg-${project.color}/20 text-${project.color} px-2 py-1 rounded`} style={{ backgroundColor: `${project.color}20`, color: project.color }}>{project.date}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-700 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject !== null && (
          <ProjectModal 
            project={projects[selectedProject]} 
            onClose={closeModal} 
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
