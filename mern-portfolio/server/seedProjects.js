import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './src/models/Project.js';

// Load environment variables
dotenv.config();

const projects = [];

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
