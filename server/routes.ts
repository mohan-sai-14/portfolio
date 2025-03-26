import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, you would send email here
      // For demo purposes, we'll just log the data and return success
      console.log('Contact form submission:', validatedData);
      
      // Simulated successful submission response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. Thank you for reaching out!' 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      }
      
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address' 
        });
      }
      
      // In a real app, you would store this in a database or send to a newsletter service
      console.log('Newsletter subscription:', email);
      
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!' 
      });
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your subscription. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
