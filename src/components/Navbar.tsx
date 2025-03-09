
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Activity, Coffee, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <Activity className="w-5 h-5" /> },
    { path: '/workouts', label: 'Workouts', icon: <Activity className="w-5 h-5" /> },
    { path: '/meals', label: 'Meals', icon: <Coffee className="w-5 h-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full">
      <nav className="glassmorphism border-b border-neon-pink/20">
        <div className="px-4 md:px-6 lg:px-8 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <motion.div
                  className="text-2xl font-orbitron font-bold neon-text-pink mr-2"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  CYBER
                </motion.div>
                <motion.div 
                  className="text-2xl font-orbitron font-bold neon-text-cyan"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  FITNESS
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-orbitron transition-all duration-300 hover:text-neon-cyan ${
                    location.pathname === item.path
                      ? 'text-neon-pink'
                      : 'text-gray-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 h-0.5 bg-neon-pink w-full left-0 right-0"
                      layoutId="navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="p-2 text-white hover:text-neon-pink"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden glassmorphism border-b border-neon-pink/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-orbitron ${
                    location.pathname === item.path
                      ? 'text-neon-pink'
                      : 'text-gray-300 hover:text-neon-cyan'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
