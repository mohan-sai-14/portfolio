import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00F5A0] font-medium mb-4 tracking-wider">GET IN TOUCH</p>
            <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6">Let's Connect & Innovate in Fintech!</h2>
            <p className="text-gray-300 mb-8">
              Have a project idea or interested in collaboration? Feel free to reach out, and let's explore how we can leverage financial technology together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#0070F3]/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-[#0070F3]"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:naveenbellamkonda9595@gmail.com" className="font-medium hover:text-[#0070F3] transition-colors">naveenbellamkonda9595@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7928CA]/20 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-[#7928CA]"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Vijayawada, Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#00F5A0]/20 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-linkedin text-[#00F5A0]"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/naveen-bellamkonda-b549952b7" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#00F5A0] transition-colors">linkedin.com/in/naveen-bellamkonda-b549952b7</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7928CA]/20 flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-github text-[#7928CA]"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/NaveenFintech" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#7928CA] transition-colors">github.com/NaveenFintech</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/30 backdrop-blur-md rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-['Space_Grotesk'] font-semibold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-dark/50 border-gray-700 text-white focus:ring-2 focus:ring-[#00F5A0] focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            className="bg-dark/50 border-gray-700 text-white focus:ring-2 focus:ring-[#00F5A0] focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            className="bg-dark/50 border-gray-700 text-white focus:ring-2 focus:ring-[#00F5A0] focus:border-transparent resize-none"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-[#0070F3] to-[#00F5A0] rounded-lg text-white font-medium transition-transform hover:scale-[1.02] focus:ring-2 focus:ring-[#00F5A0] focus:ring-offset-2 focus:ring-offset-dark"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
