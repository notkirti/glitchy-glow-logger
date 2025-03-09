
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Activity, Utensils, User, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.nav 
      className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-md border-b-2 border-pastel-pink/20 dark:border-gray-800 px-4 py-3 mb-8 shadow-pastel dark:shadow-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-montserrat text-primary dark:text-white">💗 CyberFitness</span>
        </Link>
        
        <div className="flex items-center space-x-1">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/workouts" icon={<Activity size={18} />} label="Workouts" />
          <NavItem to="/meals" icon={<Utensils size={18} />} label="Nutrition" />
          <NavItem to="/profile" icon={<User size={18} />} label="Profile" />
          
          <motion.button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun size={18} className="text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <Link to={to}>
      <motion.div 
        className="flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-montserrat text-foreground dark:text-gray-300 hover:bg-pastel-pink/10 dark:hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </motion.div>
    </Link>
  );
};

export default Navbar;
