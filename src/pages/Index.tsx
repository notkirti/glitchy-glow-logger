
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
import WorkoutPieChart from '../components/WorkoutPieChart';
import NutritionPieChart from '../components/NutritionPieChart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockStats } from '../utils/mockData';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <motion.h1 
            className="text-3xl font-bubblegum font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to CyberFitness
          </motion.h1>
          <motion.p 
            className="text-foreground/70 max-w-3xl font-comicsans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track your workouts, meals, and fitness progress in this cute, bubbly digital realm.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Workouts"
            value={mockStats.totalWorkouts}
            icon={<Activity className="w-5 h-5 text-pastel-pink" />}
            color="pink"
            delay={1}
          />
          <StatCard 
            title="Calories Burned"
            value={mockStats.totalCaloriesBurned}
            icon={<Flame className="w-5 h-5 text-pastel-blue" />}
            color="blue"  
            delay={2}
          />
          <StatCard 
            title="Avg. Duration"
            value={`${mockStats.averageWorkoutDuration} min`}
            icon={<Clock className="w-5 h-5 text-pastel-lilac" />}
            color="lilac"  
            delay={3}
          />
          <StatCard 
            title="Workout Streak"
            value={`${mockStats.workoutStreak} days`}
            icon={<Calendar className="w-5 h-5 text-pastel-mint" />}
            color="mint"  
            delay={4}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WorkoutPieChart />
          <NutritionPieChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="cute-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="mb-4 flex items-center">
              <div className="h-8 w-2 bg-pastel-pink mr-3 rounded-full" />
              <h2 className="text-xl font-bubblegum text-primary">Recent Activity</h2>
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
                  className="flex items-center space-x-3 p-3 rounded-md bg-white/50 border border-pastel-pink/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <div className="p-2 rounded-full bg-pastel-pink/10">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-bubblegum text-sm text-foreground">{activity.name}</p>
                    <p className="text-xs text-foreground/70">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="cute-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="mb-4 flex items-center">
              <div className="h-8 w-2 bg-pastel-blue mr-3 rounded-full" />
              <h2 className="text-xl font-bubblegum text-pastel-blue">Nutrition Summary</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Protein</span>
                  <span className="text-sm font-bubblegum text-pastel-mint">{mockStats.proteinAverage}g</span>
                </div>
                <div className="h-2 bg-white/50 rounded-full">
                  <div className="h-2 bg-pastel-mint rounded-full" style={{ width: `${(mockStats.proteinAverage / 200) * 100}%` }} />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Carbs</span>
                  <span className="text-sm font-bubblegum text-pastel-blue">{mockStats.carbsAverage}g</span>
                </div>
                <div className="h-2 bg-white/50 rounded-full">
                  <div className="h-2 bg-pastel-blue rounded-full" style={{ width: `${(mockStats.carbsAverage / 300) * 100}%` }} />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm text-foreground/70">Fat</span>
                  <span className="text-sm font-bubblegum text-pastel-pink">{mockStats.fatAverage}g</span>
                </div>
                <div className="h-2 bg-white/50 rounded-full">
                  <div className="h-2 bg-pastel-pink rounded-full" style={{ width: `${(mockStats.fatAverage / 100) * 100}%` }} />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/50 rounded-md border border-pastel-blue/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bubblegum text-foreground">Daily Average</span>
                  <span className="text-xl font-bubblegum text-pastel-blue">{mockStats.averageCaloriesPerDay} cal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
