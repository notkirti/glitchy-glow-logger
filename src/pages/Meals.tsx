
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, Clock, BarChart, Trash2, Plus } from 'lucide-react';
import MealForm from '../components/MealForm';
import { mockMeals, Meal } from '../utils/mockData';

const Meals = () => {
  const [meals, setMeals] = useState<Meal[]>(mockMeals);
  const [showForm, setShowForm] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div className="space-y-8">
      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-orbitron font-bold neon-text-cyan">Meals</h1>
          <p className="text-gray-400">Track and manage your nutrition</p>
        </div>
        <motion.button 
          className="glowing-btn"
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? (
            <>
              <Utensils className="w-5 h-5 mr-2" />
              View Meals
            </>
          ) : (
            <>
              <Plus className="w-5 h-5 mr-2" />
              Add Meal
            </>
          )}
        </motion.button>
      </motion.div>

      {showForm ? (
        <MealForm />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {meals.map((meal, index) => (
              <motion.div
                key={meal.id}
                className="cyber-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-md bg-neon-cyan/10 border border-neon-cyan/30">
                      <Utensils className="text-neon-cyan w-6 h-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-orbitron text-white">{meal.name}</h3>
                      <p className="text-sm text-gray-400">{meal.type}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <Calendar className="w-3 h-3 mr-1 text-neon-pink" />
                          <span>{formatDate(meal.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <Clock className="w-3 h-3 mr-1 text-neon-cyan" />
                          <span>{formatTime(meal.time)}</span>
                        </div>
                        
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <BarChart className="w-3 h-3 mr-1 text-neon-green" />
                          <span>{meal.calories} cal</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex space-x-4">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <span className="text-xs text-gray-400 mr-2">P</span>
                            <span className="text-xs font-orbitron text-neon-green">{meal.protein}g</span>
                          </div>
                          <div className="h-1 w-16 bg-cyber-dark/80 rounded-full">
                            <div className="h-1 bg-neon-green rounded-full" style={{ width: `${(meal.protein / 50) * 100}%` }} />
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <span className="text-xs text-gray-400 mr-2">C</span>
                            <span className="text-xs font-orbitron text-neon-cyan">{meal.carbs}g</span>
                          </div>
                          <div className="h-1 w-16 bg-cyber-dark/80 rounded-full">
                            <div className="h-1 bg-neon-cyan rounded-full" style={{ width: `${(meal.carbs / 100) * 100}%` }} />
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <span className="text-xs text-gray-400 mr-2">F</span>
                            <span className="text-xs font-orbitron text-neon-pink">{meal.fat}g</span>
                          </div>
                          <div className="h-1 w-16 bg-cyber-dark/80 rounded-full">
                            <div className="h-1 bg-neon-pink rounded-full" style={{ width: `${(meal.fat / 50) * 100}%` }} />
                          </div>
                        </div>
                      </div>
                      
                      {meal.notes && (
                        <p className="mt-2 text-sm text-gray-400 italic">"{meal.notes}"</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 md:self-start">
                    <button className="p-2 rounded-md bg-cyber-dark border border-neon-cyan/30 hover:border-neon-cyan text-neon-cyan">
                      <BarChart className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md bg-cyber-dark border border-neon-pink/30 hover:border-neon-pink text-neon-pink">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meals;
