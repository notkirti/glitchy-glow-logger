
import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: 'pink' | 'cyan' | 'purple' | 'green';
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
      text: 'neon-text-pink',
      shadow: 'shadow-neon-pink',
      border: 'border-neon-pink',
      bg: 'from-neon-pink/10 to-transparent'
    },
    cyan: {
      text: 'neon-text-cyan',
      shadow: 'shadow-neon-cyan',
      border: 'border-neon-cyan',
      bg: 'from-neon-cyan/10 to-transparent'
    },
    purple: {
      text: 'text-neon-purple',
      shadow: 'shadow-neon-purple',
      border: 'border-neon-purple',
      bg: 'from-neon-purple/10 to-transparent'
    },
    green: {
      text: 'text-neon-green',
      shadow: 'shadow-neon-green',
      border: 'border-neon-green',
      bg: 'from-neon-green/10 to-transparent'
    }
  };

  return (
    <motion.div
      className="cyber-box h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-orbitron text-gray-400 uppercase tracking-wider">{title}</h3>
          <div className={`p-2 rounded-full ${colorMap[color].bg} bg-gradient-to-br`}>
            {icon}
          </div>
        </div>
        
        <motion.div 
          className={`text-3xl md:text-4xl font-orbitron font-bold mb-2 ${colorMap[color].text}`}
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
        
        <div className={`h-1 w-full rounded bg-gradient-to-r ${colorMap[color].bg} mt-auto`} />
      </div>
    </motion.div>
  );
};

export default StatCard;
