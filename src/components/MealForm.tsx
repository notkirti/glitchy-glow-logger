
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Coffee, Utensils, Save } from 'lucide-react';

const MealForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    calories: '',
    protein: '0',
    carbs: '0',
    fat: '0',
    date: '',
    time: '',
    notes: ''
  });

  const [totalCalories, setTotalCalories] = useState(0);

  const mealTypes = [
    'Cyber Breakfast',
    'Digital Lunch',
    'Neon Dinner',
    'Virtual Snack',
    'Matrix Protein Shake',
    'Hologram Dessert'
  ];

  useEffect(() => {
    // Calculate calories based on macros
    const protein = parseInt(formData.protein) || 0;
    const carbs = parseInt(formData.carbs) || 0;
    const fat = parseInt(formData.fat) || 0;
    
    const calculatedCalories = (protein * 4) + (carbs * 4) + (fat * 9);
    
    setTotalCalories(calculatedCalories);
  }, [formData.protein, formData.carbs, formData.fat]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meal submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      type: '',
      calories: '',
      protein: '0',
      carbs: '0',
      fat: '0',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <motion.div
      className="cyber-box w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 flex items-center">
        <div className="h-8 w-2 bg-neon-cyan mr-3" />
        <h2 className="text-xl font-orbitron neon-text-cyan">Log Meal</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Meal Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2 pl-10"
                placeholder="Enter meal name"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Utensils className="h-4 w-4 text-neon-cyan/70" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Meal Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-cyber-dark/80 border border-neon-pink/30 focus:border-neon-pink rounded-md p-2"
              required
            >
              <option value="" disabled>Select meal type</option>
              {mealTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Date</label>
            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2 pl-10"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="h-4 w-4 text-neon-cyan/70" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Time</label>
            <div className="relative">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-pink/30 focus:border-neon-pink rounded-md p-2 pl-10"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Clock className="h-4 w-4 text-neon-pink/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-orbitron text-gray-300">Macronutrients</label>
              <div className="font-courier text-sm">
                Calculated Calories: 
                <span className="ml-2 font-orbitron text-neon-green">
                  {totalCalories}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-courier text-gray-400">Protein (g)</label>
                <input
                  type="number"
                  name="protein"
                  value={formData.protein}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2"
                  min="0"
                />
                <div className="h-1 bg-neon-cyan/20 rounded-full mt-1">
                  <div 
                    className="h-1 bg-neon-cyan rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(parseInt(formData.protein) || 0, 100)}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-courier text-gray-400">Carbs (g)</label>
                <input
                  type="number"
                  name="carbs"
                  value={formData.carbs}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark/80 border border-neon-pink/30 focus:border-neon-pink rounded-md p-2"
                  min="0"
                />
                <div className="h-1 bg-neon-pink/20 rounded-full mt-1">
                  <div 
                    className="h-1 bg-neon-pink rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(parseInt(formData.carbs) || 0, 100)}%` }}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block text-xs font-courier text-gray-400">Fat (g)</label>
                <input
                  type="number"
                  name="fat"
                  value={formData.fat}
                  onChange={handleChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  min="0"
                />
                <div className="h-1 bg-neon-purple/20 rounded-full mt-1">
                  <div 
                    className="h-1 bg-neon-purple rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(parseInt(formData.fat) || 0, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">
              Or Enter Total Calories Manually
            </label>
            <div className="relative">
              <input
                type="number"
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-green/30 focus:border-neon-green rounded-md p-2"
                placeholder={totalCalories > 0 ? totalCalories.toString() : "Enter calories"}
                min="0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-orbitron text-gray-300">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2 min-h-[100px]"
            placeholder="Enter any additional notes about your meal..."
          />
        </div>

        <motion.button
          type="submit"
          className="glowing-btn mt-4 w-full md:w-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Meal
        </motion.button>
      </form>
    </motion.div>
  );
};

export default MealForm;
