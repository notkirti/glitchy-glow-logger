
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Activity, Utensils, Save, Edit } from 'lucide-react';
import { mockUserProfile } from '../utils/mockData';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockUserProfile);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would usually save to a backend
    console.log('Profile updated:', profile);
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
          <h1 className="text-3xl font-orbitron font-bold neon-text-purple">Profile</h1>
          <p className="text-gray-400">Manage your personal information</p>
        </div>
        <motion.button 
          className="glowing-btn"
          onClick={() => setIsEditing(!isEditing)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isEditing ? (
            <>
              <User className="w-5 h-5 mr-2" />
              View Profile
            </>
          ) : (
            <>
              <Edit className="w-5 h-5 mr-2" />
              Edit Profile
            </>
          )}
        </motion.button>
      </motion.div>

      <div className="cyber-box">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6 flex items-center">
              <div className="h-8 w-2 bg-neon-purple mr-3" />
              <h2 className="text-xl font-orbitron neon-text-purple">Edit Your Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-orbitron text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-orbitron text-gray-300">Age</label>
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  required
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-orbitron text-gray-300">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={profile.height}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  required
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-orbitron text-gray-300">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={profile.weight}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  required
                  min="0"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-orbitron text-gray-300">Fitness Goal</label>
                <textarea
                  name="goal"
                  value={profile.goal}
                  onChange={handleInputChange}
                  className="w-full bg-cyber-dark/80 border border-neon-purple/30 focus:border-neon-purple rounded-md p-2"
                  rows={3}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="glowing-btn mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save className="mr-2 h-4 w-4" />
              Save Profile
            </motion.button>
          </form>
        ) : (
          <div className="relative">
            <div className="mb-6 flex items-center">
              <div className="h-8 w-2 bg-neon-purple mr-3" />
              <h2 className="text-xl font-orbitron neon-text-purple">Your Profile</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-purple bg-cyber-dark flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <User className="w-20 h-20 text-neon-purple/50" />
                  <motion.div 
                    className="absolute inset-0 bg-neon-gradient opacity-10"
                    animate={{ 
                      opacity: [0.1, 0.15, 0.1],
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-xl font-orbitron neon-text-purple mb-1">{profile.name}</h3>
                  <div className="text-gray-400 text-sm flex justify-center items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Joined {formatDate(profile.joinDate)}
                  </div>
                  <div className="mt-3 inline-block text-white bg-cyber-dark/80 px-3 py-1 rounded-full text-sm border border-neon-purple/30">
                    {profile.streakDays} Day Streak
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-cyber-dark/50 rounded-md border border-white/5">
                    <span className="text-sm text-gray-400">Total Workouts</span>
                    <div className="flex items-center text-neon-pink">
                      <Activity className="w-4 h-4 mr-1" />
                      <span className="font-orbitron">{profile.totalWorkouts}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-cyber-dark/50 rounded-md border border-white/5">
                    <span className="text-sm text-gray-400">Total Meals</span>
                    <div className="flex items-center text-neon-cyan">
                      <Utensils className="w-4 h-4 mr-1" />
                      <span className="font-orbitron">{profile.totalMeals}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-orbitron neon-text-cyan">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-cyber-dark/50 rounded-md border border-white/5">
                      <div className="text-sm text-gray-400 mb-1">Age</div>
                      <div className="text-xl font-orbitron text-white">{profile.age}</div>
                    </div>
                    
                    <div className="p-4 bg-cyber-dark/50 rounded-md border border-white/5">
                      <div className="text-sm text-gray-400 mb-1">Height</div>
                      <div className="text-xl font-orbitron text-white">{profile.height} <span className="text-sm">cm</span></div>
                    </div>
                    
                    <div className="p-4 bg-cyber-dark/50 rounded-md border border-white/5">
                      <div className="text-sm text-gray-400 mb-1">Weight</div>
                      <div className="text-xl font-orbitron text-white">{profile.weight} <span className="text-sm">kg</span></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-orbitron neon-text-green">Fitness Goal</h3>
                  <div className="p-4 bg-cyber-dark/50 rounded-md border border-white/5">
                    <p className="text-gray-300 font-courier">{profile.goal}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-neon-gradient/5 border border-neon-purple/20 rounded-md">
                  <h3 className="text-lg font-orbitron neon-text-purple mb-2">Body Mass Index (BMI)</h3>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-orbitron neon-text-purple">
                      {(profile.weight / ((profile.height / 100) * (profile.height / 100))).toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>Height: {profile.height} cm</p>
                      <p>Weight: {profile.weight} kg</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 h-2 bg-cyber-dark rounded-full">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink"
                      style={{ width: `${Math.min((profile.weight / ((profile.height / 100) * (profile.height / 100))) / 40 * 100, 100)}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-400">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
