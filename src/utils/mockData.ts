
export interface Workout {
  id: string;
  name: string;
  type: string;
  duration: number;
  intensity: 'low' | 'medium' | 'high';
  date: string;
  calories: number;
  notes?: string;
}

export interface Meal {
  id: string;
  name: string;
  type: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date: string;
  time: string;
  notes?: string;
}

export interface UserProfile {
  name: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  streakDays: number;
  joinDate: string;
  totalWorkouts: number;
  totalMeals: number;
}

// Mock Workouts
export const mockWorkouts: Workout[] = [
  {
    id: '1',
    name: 'Morning Matrix Run',
    type: 'Matrix Running',
    duration: 45,
    intensity: 'high',
    date: '2023-06-01',
    calories: 450,
    notes: 'Felt like I was running through the matrix code. Great session!'
  },
  {
    id: '2',
    name: 'Neon Yoga Flow',
    type: 'Digital Yoga Flow',
    duration: 30,
    intensity: 'low',
    date: '2023-06-02',
    calories: 200,
    notes: 'Relaxing session with neon lights.'
  },
  {
    id: '3',
    name: 'Cyber Strength Circuit',
    type: 'Cyber Strength Training',
    duration: 60,
    intensity: 'high',
    date: '2023-06-03',
    calories: 550,
    notes: 'Heavy lifting day. New personal record!'
  },
  {
    id: '4',
    name: 'Digital HIIT',
    type: 'Virtual HIIT',
    duration: 25,
    intensity: 'high',
    date: '2023-06-04',
    calories: 380,
    notes: 'Short but intense session.'
  },
  {
    id: '5',
    name: 'Hologram Pilates',
    type: 'Hologram Pilates',
    duration: 40,
    intensity: 'medium',
    date: '2023-06-05',
    calories: 320,
    notes: '3D hologram instructor was very helpful.'
  },
  {
    id: '6',
    name: 'Neon Cardio Party',
    type: 'Neon Cardio Blast',
    duration: 50,
    intensity: 'medium',
    date: '2023-06-06',
    calories: 480,
    notes: 'Fun session with great music.'
  },
  {
    id: '7',
    name: 'Virtual Reality Boxing',
    type: 'Cyber Strength Training',
    duration: 35,
    intensity: 'high',
    date: '2023-06-07',
    calories: 400,
    notes: 'VR boxing is incredibly immersive!'
  },
  {
    id: '8',
    name: 'Morning Digital Flow',
    type: 'Digital Yoga Flow',
    duration: 30,
    intensity: 'low',
    date: '2023-06-08',
    calories: 180,
    notes: 'Peaceful morning routine.'
  },
  {
    id: '9',
    name: 'Cyber Sprint Intervals',
    type: 'Matrix Running',
    duration: 40,
    intensity: 'high',
    date: '2023-06-09',
    calories: 460,
    notes: 'Sprint intervals with neon visualization.'
  },
  {
    id: '10',
    name: 'Hologram Stretching',
    type: 'Hologram Pilates',
    duration: 25,
    intensity: 'low',
    date: '2023-06-10',
    calories: 120,
    notes: 'Recovery day with light stretching.'
  }
];

// Mock Meals
export const mockMeals: Meal[] = [
  {
    id: '1',
    name: 'Neon Protein Shake',
    type: 'Matrix Protein Shake',
    calories: 380,
    protein: 30,
    carbs: 40,
    fat: 8,
    date: '2023-06-01',
    time: '08:30',
    notes: 'Post-workout shake with blue spirulina for the neon effect.'
  },
  {
    id: '2',
    name: 'Cyber Avocado Toast',
    type: 'Cyber Breakfast',
    calories: 450,
    protein: 15,
    carbs: 45,
    fat: 22,
    date: '2023-06-01',
    time: '12:30',
    notes: 'Whole grain toast with avocado and digital blueberries.'
  },
  {
    id: '3',
    name: 'Virtual Reality Salad',
    type: 'Digital Lunch',
    calories: 380,
    protein: 20,
    carbs: 25,
    fat: 20,
    date: '2023-06-02',
    time: '13:15',
    notes: 'Colorful salad with holographic dressing.'
  },
  {
    id: '4',
    name: 'Hologram Grilled Chicken',
    type: 'Neon Dinner',
    calories: 520,
    protein: 40,
    carbs: 30,
    fat: 22,
    date: '2023-06-02',
    time: '19:00',
    notes: 'Grilled chicken with virtual vegetables.'
  },
  {
    id: '5',
    name: 'Matrix Energy Bar',
    type: 'Virtual Snack',
    calories: 220,
    protein: 12,
    carbs: 25,
    fat: 8,
    date: '2023-06-03',
    time: '10:30',
    notes: 'Quick energy boost before morning meeting.'
  },
  {
    id: '6',
    name: 'Cyber Salmon Bowl',
    type: 'Digital Lunch',
    calories: 580,
    protein: 35,
    carbs: 60,
    fat: 18,
    date: '2023-06-03',
    time: '13:00',
    notes: 'Salmon with rice and digital greens.'
  },
  {
    id: '7',
    name: 'Neon Smoothie Bowl',
    type: 'Cyber Breakfast',
    calories: 420,
    protein: 18,
    carbs: 70,
    fat: 8,
    date: '2023-06-04',
    time: '09:00',
    notes: 'Vibrant smoothie bowl with glowing fruits.'
  },
  {
    id: '8',
    name: 'Virtual Stir Fry',
    type: 'Neon Dinner',
    calories: 550,
    protein: 30,
    carbs: 55,
    fat: 20,
    date: '2023-06-04',
    time: '18:30',
    notes: 'Colorful vegetables with tofu in neon sauce.'
  },
  {
    id: '9',
    name: 'Digital Dark Chocolate',
    type: 'Hologram Dessert',
    calories: 180,
    protein: 3,
    carbs: 18,
    fat: 12,
    date: '2023-06-05',
    time: '20:00',
    notes: 'Small dessert with holographic sparkles.'
  },
  {
    id: '10',
    name: 'Cyber Protein Pancakes',
    type: 'Cyber Breakfast',
    calories: 480,
    protein: 30,
    carbs: 60,
    fat: 12,
    date: '2023-06-05',
    time: '08:30',
    notes: 'Protein-packed pancakes with digital berries.'
  }
];

// Mock User Profile
export const mockUserProfile: UserProfile = {
  name: 'Neo Anderson',
  age: 32,
  height: 183, // cm
  weight: 78, // kg
  goal: 'Build lean muscle and improve digital flexibility',
  streakDays: 14,
  joinDate: '2023-05-22',
  totalWorkouts: 37,
  totalMeals: 129
};

// Mock Stats
export const mockStats = {
  totalWorkouts: 37,
  totalCaloriesBurned: 15420,
  averageWorkoutDuration: 42, // minutes
  workoutStreak: 14, // days
  totalMeals: 129,
  averageCaloriesPerDay: 2250,
  proteinAverage: 135, // grams
  carbsAverage: 240, // grams
  fatAverage: 75 // grams
};
