
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: 20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-[calc(100vh-4rem)]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const GlitchTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
        exit={{ 
          opacity: 0,
          transition: {
            duration: 0.3
          }
        }}
        className="relative w-full min-h-[calc(100vh-4rem)]"
      >
        <motion.div
          className="absolute inset-0 bg-cyber-black"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            filter: ['blur(0px)', 'blur(10px)', 'blur(0px)'],
            x: [0, -10, 10, -5, 5, 0],
            transition: {
              duration: 0.5,
              times: [0, 0.2, 1]
            }
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
