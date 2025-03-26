import React, { useEffect } from 'react';
import Header from '../components/sections/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/BackToTop';

const Home: React.FC = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Find the closest anchor element
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        event.preventDefault();
        
        try {
          const targetId = anchor.hash;
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        } catch (error) {
          console.error('Error scrolling to element:', error);
        }
      }
    };
    
    // Use event delegation instead of attaching to each anchor
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-[#0F1624] bg-[radial-gradient(at_80%_0%,rgba(0,112,243,0.1)_0px,transparent_50%),radial-gradient(at_0%_50%,rgba(121,40,202,0.1)_0px,transparent_50%)] min-h-screen text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
