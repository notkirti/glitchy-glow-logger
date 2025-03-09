
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-cyber-black">
      <div className="scanline" />
      <Navbar />
      <motion.main 
        className="flex-1 px-4 md:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full"
        key={location.pathname}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.main>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-cyber-grid bg-[size:50px_50px] opacity-[0.03] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] -z-10 bg-radial-glow opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[500px] h-[500px] -z-10 bg-radial-glow opacity-20 pointer-events-none" />
    </div>
  );
};

export default Layout;
