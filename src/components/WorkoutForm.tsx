
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BarChart, Save } from 'lucide-react';

const WorkoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    intensity: 'medium',
    date: '',
    notes: ''
  });

  const workoutTypes = [
    'Neon Cardio Blast',
    'Cyber Strength Training',
    'Digital Yoga Flow',
    'Virtual HIIT',
    'Hologram Pilates',
    'Matrix Running'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Workout submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      type: '',
      duration: '',
      intensity: 'medium',
      date: '',
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
        <div className="h-8 w-2 bg-neon-pink mr-3" />
        <h2 className="text-xl font-orbitron neon-text-pink">Log Workout</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Workout Name</label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-pink/30 focus:border-neon-pink rounded-md p-2 pl-10"
                placeholder="Enter workout name"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BarChart className="h-4 w-4 text-neon-pink/70" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Workout Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2"
              required
            >
              <option value="" disabled>Select workout type</option>
              {workoutTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Duration (minutes)</label>
            <div className="relative">
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-cyan/30 focus:border-neon-cyan rounded-md p-2 pl-10"
                placeholder="30"
                min="1"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Clock className="h-4 w-4 text-neon-cyan/70" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Date</label>
            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-cyber-dark/80 border border-neon-pink/30 focus:border-neon-pink rounded-md p-2 pl-10"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Calendar className="h-4 w-4 text-neon-pink/70" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-orbitron text-gray-300">Intensity</label>
            <div className="flex space-x-1">
              {['low', 'medium', 'high'].map((intensity) => (
                <button
                  key={intensity}
                  type="button"
                  onClick={() => setFormData({ ...formData, intensity })}
                  className={`flex-1 py-2 px-3 rounded-md font-orbitron text-sm transition duration-200 ${
                    formData.intensity === intensity
                      ? intensity === 'low'
                        ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
                        : intensity === 'medium'
                        ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50'
                        : 'bg-neon-pink/20 text-neon-pink border border-neon-pink/50'
                      : 'bg-cyber-dark border border-white/10 text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                </button>
              ))}
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
            placeholder="Enter any additional notes about your workout..."
          />
        </div>

        <motion.button
          type="submit"
          className="glowing-btn mt-4 w-full md:w-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Workout
        </motion.button>
      </form>
    </motion.div>
  );
};

export default WorkoutForm;
