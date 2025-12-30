import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './src/models/Project.js';

// Load environment variables
dotenv.config();

const projects = [
  {
    title: 'Doctor Appointment Booking System',
    slug: 'doctor-appointment-booking-system',
    description: 'A comprehensive healthcare platform for booking and managing doctor appointments with real-time availability',
    longDescription: 'Full-featured appointment booking system with patient records, doctor schedules, and automated reminders',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Stripe'],
    features: [
      'Real-time appointment booking',
      'Patient medical records',
      'Doctor availability management',
      'SMS/Email reminders',
      'Payment integration'
    ],
    links: {
      github: 'https://github.com/yourusername/doctor-booking',
      live: 'https://doctor-booking-demo.com'
    },
    category: 'web-app',
    featured: true,
    isPublished: true
  },
  {
    title: 'Social Dashboard Productivity Hub',
    slug: 'social-dashboard-productivity-hub',
    description: 'Unified productivity dashboard integrating social media analytics, task management, and team collaboration',
    longDescription: 'All-in-one productivity platform combining social media insights, project tracking, and team communication',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Chart.js'],
    features: [
      'Social media analytics',
      'Task and project management',
      'Team collaboration tools',
      'Real-time notifications',
      'Custom dashboards'
    ],
    links: {
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://social-dashboard-demo.com'
    },
    category: 'web-app',
    featured: true,
    isPublished: true
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-portfolio';
    await mongoose.connect(mongoURI);
    console.log('✓ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('✓ Cleared existing projects');

    // Insert new projects
    const createdProjects = await Project.insertMany(projects);
    console.log(`✓ Added ${createdProjects.length} projects:`);
    createdProjects.forEach(p => console.log(`  - ${p.title}`));

    console.log('\n✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
