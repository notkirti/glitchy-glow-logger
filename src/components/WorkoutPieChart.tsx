
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { mockWorkouts } from '../utils/mockData';

interface WorkoutTypeData {
  name: string;
  value: number;
}

const COLORS = ['#FFC0CB', '#E6E6FA', '#C1F0C1', '#FFFACD', '#ADD8E6'];

const WorkoutPieChart = () => {
  // Calculate workout type distribution
  const workoutTypeData: WorkoutTypeData[] = React.useMemo(() => {
    const typeCounts = mockWorkouts.reduce((acc, workout) => {
      acc[workout.type] = (acc[workout.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(typeCounts).map(([name, value]) => ({
      name,
      value
    }));
  }, []);

  return (
    <motion.div
      className="cute-box h-[300px] relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex justify-between items-center mb-4 p-4">
          <h3 className="text-lg font-bubblegum text-pastel-pink">Workout Activity</h3>
        </div>
        
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={workoutTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#FFC0CB"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {workoutTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} workouts`, name]}
                contentStyle={{ 
                  background: 'white', 
                  border: '2px solid #FFC0CB',
                  borderRadius: '12px',
                  padding: '8px',
                  fontFamily: 'Comic Neue, cursive'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkoutPieChart;
