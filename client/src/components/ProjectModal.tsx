import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectType } from '../data/projectData';

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70" 
          onClick={handleOverlayClick}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gray-900/90 backdrop-blur-md rounded-xl p-8 max-w-3xl w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto scrollbar-hide"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div>
            <div className="mb-6">
              <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <defs>
                    <linearGradient id={`modalGradient_${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={project.color} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={project.secondaryColor} stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="400" fill="#0F1624" />
                  <rect width="800" height="400" fill={`url(#modalGradient_${project.id})`} />
                  <rect x="150" y="100" width="500" height="200" rx="20" ry="20" fill="#0F1624" fillOpacity="0.8" />
                  <text x="400" y="180" fontSize="28" fontWeight="bold" fontFamily="'Space Grotesk', sans-serif" fill="#fff" textAnchor="middle">{project.title}</text>
                  <text x="400" y="220" fontSize="16" fontFamily="'Inter', sans-serif" fill={project.color} textAnchor="middle">{project.shortDescription}</text>
                  <text x="400" y="250" fontSize="14" fontFamily="'Inter', sans-serif" fill="#fff" textAnchor="middle">{project.date}</text>
                </svg>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-['Space_Grotesk'] font-semibold">{project.title}</h3>
                <span className="text-sm px-3 py-1 rounded" style={{ backgroundColor: `${project.color}33`, color: project.color }}>{project.date}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-['Space_Grotesk'] font-semibold mb-2">Project Overview</h4>
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-['Space_Grotesk'] font-semibold mb-2">Key Features</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-['Space_Grotesk'] font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-sm bg-gray-700 px-3 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
