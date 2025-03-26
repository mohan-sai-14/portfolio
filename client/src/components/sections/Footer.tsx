import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to my newsletter.",
        variant: "default",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="text-2xl font-['Space_Grotesk'] font-bold text-white inline-block mb-4">
              <span className="text-[#00F5A0]">B.</span>Naveen
            </a>
            <p className="text-gray-400 max-w-xs">
              Leveraging financial technology to optimize business processes and drive digital innovation.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="https://www.linkedin.com/in/naveen-bellamkonda-b549952b7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </motion.a>
              <motion.a 
                href="https://github.com/NaveenFintech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#333] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </motion.a>
              <motion.a 
                href="mailto:naveenbellamkonda9595@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[#00F5A0] hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <i className="far fa-envelope text-xl"></i>
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-['Space_Grotesk'] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['about', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item}`} 
                    className="flex items-center text-gray-400 hover:text-[#00F5A0] transition-colors group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2 text-[#0070F3] group-hover:text-[#00F5A0] transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-['Space_Grotesk'] font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with my latest fintech insights and projects.</p>
            <form className="relative" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-[#0070F3] focus:border-transparent transition-all duration-300"
                  disabled={isSubmitting}
                  required
                />
                <motion.button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bg-gradient-to-r from-[#0070F3] to-[#00F5A0] text-white p-1.5 rounded-md font-medium hover:shadow-lg hover:shadow-[#00F5A0]/20 focus:outline-none disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </motion.button>
              </div>
              <div className="mt-2 text-xs text-gray-500">* I'll never share your email with anyone else.</div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bellamkonda Naveen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
