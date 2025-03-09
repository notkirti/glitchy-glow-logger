
import React from 'react';
import { motion } from 'framer-motion';

interface ChartPlaceholderProps {
  title: string;
  height?: number;
  color?: 'pink' | 'blue' | 'lilac' | 'mint';
  delay?: number;
}

const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({
  title,
  height = 300,
  color = 'pink',
  delay = 0
}) => {
  const colorMap = {
    pink: {
      text: 'text-pastel-pink',
      border: 'border-pastel-pink/50',
      bg: 'bg-pastel-pink/20'
    },
    blue: {
      text: 'text-pastel-blue',
      border: 'border-pastel-blue/50',
      bg: 'bg-pastel-blue/20'
    },
    lilac: {
      text: 'text-pastel-lilac',
      border: 'border-pastel-lilac/50',
      bg: 'bg-pastel-lilac/20'
    },
    mint: {
      text: 'text-pastel-mint',
      border: 'border-pastel-mint/50',
      bg: 'bg-pastel-mint/20'
    }
  };

  return (
    <motion.div
      className="cute-box relative"
      style={{ height: `${height}px` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex justify-between items-center mb-4 p-4">
          <h3 className={`text-lg font-bubblegum ${colorMap[color].text}`}>{title}</h3>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <motion.div
                className={`absolute inset-0 rounded-full border-4 ${colorMap[color].border} opacity-70`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className={`absolute inset-2 rounded-full border-4 ${colorMap[color].border} opacity-80`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: 0.2,
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className={`absolute inset-4 rounded-full border-4 ${colorMap[color].border} opacity-90`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.9, 0.5, 0.9]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0.4,
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className={`absolute inset-6 rounded-full border-4 ${colorMap[color].border} opacity-100`}
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "easeInOut" 
                }}
              />
            </div>
            <p className="text-sm text-foreground/70 font-comicsans">
              Chart visualization coming soon 💕
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChartPlaceholder;
