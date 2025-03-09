
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart, Calendar, Clock, Trash2, Plus } from 'lucide-react';
import WorkoutForm from '../components/WorkoutForm';
import { mockWorkouts, Workout } from '../utils/mockData';

const Workouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(mockWorkouts);
  const [showForm, setShowForm] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'low':
        return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'medium':
        return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30';
      case 'high':
        return 'bg-neon-pink/20 text-neon-pink border-neon-pink/30';
      default:
        return 'bg-gray-700 text-gray-300';
    }
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
          <h1 className="text-3xl font-orbitron font-bold neon-text-pink">Workouts</h1>
          <p className="text-gray-400">Track and manage your workout sessions</p>
        </div>
        <motion.button 
          className="glowing-btn"
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? (
            <>
              <BarChart className="w-5 h-5 mr-2" />
              View Workouts
            </>
          ) : (
            <>
              <Plus className="w-5 h-5 mr-2" />
              Add Workout
            </>
          )}
        </motion.button>
      </motion.div>

      {showForm ? (
        <WorkoutForm />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {workouts.map((workout, index) => (
              <motion.div
                key={workout.id}
                className="cyber-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-md bg-neon-pink/10 border border-neon-pink/30">
                      <Activity className="text-neon-pink w-6 h-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-orbitron text-white">{workout.name}</h3>
                      <p className="text-sm text-gray-400">{workout.type}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <Clock className="w-3 h-3 mr-1 text-neon-cyan" />
                          <span>{workout.duration} min</span>
                        </div>
                        
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <Calendar className="w-3 h-3 mr-1 text-neon-pink" />
                          <span>{formatDate(workout.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-xs bg-cyber-dark/80 px-2 py-1 rounded border border-white/10">
                          <BarChart className="w-3 h-3 mr-1 text-neon-green" />
                          <span>{workout.calories} cal</span>
                        </div>
                        
                        <div className={`text-xs px-2 py-1 rounded border ${getIntensityColor(workout.intensity)}`}>
                          {workout.intensity.charAt(0).toUpperCase() + workout.intensity.slice(1)} Intensity
                        </div>
                      </div>
                      
                      {workout.notes && (
                        <p className="mt-3 text-sm text-gray-400 italic">"{workout.notes}"</p>
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

export default Workouts;
