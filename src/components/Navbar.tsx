
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Activity, Utensils, User } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-white/70 backdrop-blur-md border-b-2 border-pastel-pink/20 px-4 py-3 mb-8 shadow-pastel"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bubblegum text-primary">💗 CyberFitness</span>
        </Link>
        
        <div className="flex space-x-1">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/workouts" icon={<Activity size={18} />} label="Workouts" />
          <NavItem to="/meals" icon={<Utensils size={18} />} label="Nutrition" />
          <NavItem to="/profile" icon={<User size={18} />} label="Profile" />
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
        className="flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-bubblegum text-foreground hover:bg-pastel-pink/10 transition-colors"
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
