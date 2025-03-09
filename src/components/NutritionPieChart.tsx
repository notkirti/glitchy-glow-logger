
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { mockStats } from '../utils/mockData';

const NutritionPieChart = () => {
  const nutritionData = [
    { name: 'Protein', value: mockStats.proteinAverage, color: '#C1F0C1' },
    { name: 'Carbs', value: mockStats.carbsAverage, color: '#ADD8E6' },
    { name: 'Fat', value: mockStats.fatAverage, color: '#FFC0CB' }
  ];

  return (
    <motion.div
      className="cute-box h-[300px] relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex justify-between items-center mb-4 p-4">
          <h3 className="text-lg font-bubblegum text-pastel-blue">Nutrition Breakdown</h3>
        </div>
        
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={nutritionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {nutritionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value}g`, name]}
                contentStyle={{ 
                  background: 'white', 
                  border: '2px solid #ADD8E6',
                  borderRadius: '12px',
                  padding: '8px',
                  fontFamily: 'Comic Neue, cursive'
                }}
              />
              <Legend wrapperStyle={{ fontFamily: 'Comic Neue, cursive' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default NutritionPieChart;
