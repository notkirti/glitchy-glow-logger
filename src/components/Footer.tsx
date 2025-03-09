
import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white/70 backdrop-blur-md border-t-2 border-pastel-pink/20 py-6 mt-12 shadow-pastel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70 font-comicsans">
              © 2023 CyberFitness. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-sm text-foreground/70 font-comicsans">Made with</span>
            <Heart className="h-4 w-4 text-pastel-pink" fill="#FFC0CB" />
            <span className="text-sm text-foreground/70 font-comicsans">and sprinkles</span>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <motion.a 
              href="#" 
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
