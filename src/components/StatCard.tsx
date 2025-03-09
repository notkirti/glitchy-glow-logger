
import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: 'pink' | 'blue' | 'lilac' | 'mint';
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color = 'pink',
  delay = 0
}) => {
  const colorMap = {
    pink: {
      text: 'text-pastel-pink',
      bg: 'bg-pastel-pink/20',
      border: 'border-pastel-pink/50',
      shadow: 'shadow-pastel'
    },
    blue: {
      text: 'text-pastel-blue',
      bg: 'bg-pastel-blue/20',
      border: 'border-pastel-blue/50',
      shadow: 'shadow-pastel'
    },
    lilac: {
      text: 'text-pastel-lilac',
      bg: 'bg-pastel-lilac/20',
      border: 'border-pastel-lilac/50',
      shadow: 'shadow-pastel'
    },
    mint: {
      text: 'text-pastel-mint',
      bg: 'bg-pastel-mint/20',
      border: 'border-pastel-mint/50',
      shadow: 'shadow-pastel'
    }
  };

  return (
    <motion.div
      className="cute-box h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1, type: "spring", stiffness: 100 }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bubblegum text-foreground uppercase tracking-wider">{title}</h3>
          <div className={`p-2 rounded-full ${colorMap[color].bg}`}>
            {icon}
          </div>
        </div>
        
        <motion.div 
          className={`text-3xl md:text-4xl font-bubblegum font-bold mb-2 ${colorMap[color].text}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: (delay * 0.1) + 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          {typeof value === 'number' ? value.toLocaleString() : value}
        </motion.div>
        
        <div className={`h-2 w-full rounded-full bg-gradient-to-r from-white to-${colorMap[color].bg} mt-auto`} />
      </div>
    </motion.div>
  );
};

export default StatCard;
