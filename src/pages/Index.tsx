
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  Clock, 
  Calendar,
  Flame, 
  Utensils, 
  BarChart3, 
  Scale
} from 'lucide-react';
import StatCard from '../components/StatCard';
import ChartPlaceholder from '../components/ChartPlaceholder';
import { mockStats } from '../utils/mockData';

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <motion.h1 
          className="text-3xl font-orbitron font-bold neon-text-pink"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to CyberFitness
        </motion.h1>
        <motion.p 
          className="text-gray-400 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Track your workouts, meals, and fitness progress in this neon-drenched digital realm.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Workouts"
          value={mockStats.totalWorkouts}
          icon={<Activity className="w-5 h-5 text-neon-pink" />}
          color="pink"
          delay={1}
        />
        <StatCard 
          title="Calories Burned"
          value={mockStats.totalCaloriesBurned}
          icon={<Flame className="w-5 h-5 text-neon-cyan" />}
          color="cyan"
          delay={2}
        />
        <StatCard 
          title="Avg. Duration"
          value={`${mockStats.averageWorkoutDuration} min`}
          icon={<Clock className="w-5 h-5 text-neon-purple" />}
          color="purple"
          delay={3}
        />
        <StatCard 
          title="Workout Streak"
          value={`${mockStats.workoutStreak} days`}
          icon={<Calendar className="w-5 h-5 text-neon-green" />}
          color="green"
          delay={4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartPlaceholder 
          title="Workout Activity" 
          color="pink" 
          delay={5}
        />
        <ChartPlaceholder 
          title="Nutrition Breakdown" 
          color="cyan" 
          delay={6}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="cyber-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="mb-4 flex items-center">
            <div className="h-8 w-2 bg-neon-pink mr-3" />
            <h2 className="text-xl font-orbitron neon-text-pink">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Matrix Running', time: '2 hours ago', icon: <Zap /> },
              { name: 'Protein Shake Logged', time: '5 hours ago', icon: <Utensils /> },
              { name: 'Weight Tracked', time: '1 day ago', icon: <Scale /> },
              { name: 'Digital HIIT Workout', time: '2 days ago', icon: <Activity /> }
            ].map((activity, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 p-3 rounded-md bg-cyber-dark/50 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <div className="p-2 rounded-full bg-neon-pink/10">
                  {activity.icon}
                </div>
                <div>
                  <p className="font-orbitron text-sm text-white">{activity.name}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="cyber-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="mb-4 flex items-center">
            <div className="h-8 w-2 bg-neon-cyan mr-3" />
            <h2 className="text-xl font-orbitron neon-text-cyan">Nutrition Summary</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Protein</span>
                <span className="text-sm font-orbitron text-neon-green">{mockStats.proteinAverage}g</span>
              </div>
              <div className="h-2 bg-cyber-dark/80 rounded-full">
                <div className="h-2 bg-neon-green rounded-full" style={{ width: `${(mockStats.proteinAverage / 200) * 100}%` }} />
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Carbs</span>
                <span className="text-sm font-orbitron text-neon-cyan">{mockStats.carbsAverage}g</span>
              </div>
              <div className="h-2 bg-cyber-dark/80 rounded-full">
                <div className="h-2 bg-neon-cyan rounded-full" style={{ width: `${(mockStats.carbsAverage / 300) * 100}%` }} />
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Fat</span>
                <span className="text-sm font-orbitron text-neon-pink">{mockStats.fatAverage}g</span>
              </div>
              <div className="h-2 bg-cyber-dark/80 rounded-full">
                <div className="h-2 bg-neon-pink rounded-full" style={{ width: `${(mockStats.fatAverage / 100) * 100}%` }} />
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-cyber-dark/30 rounded-md border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-sm font-orbitron text-gray-300">Daily Average</span>
                <span className="text-xl font-orbitron neon-text-cyan">{mockStats.averageCaloriesPerDay} cal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
