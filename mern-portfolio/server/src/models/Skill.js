import mongoose from 'mongoose';

/**
 * Skill Schema
 * Stores technical skills with proficiency levels
 */
const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a skill name'],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'other'],
      required: true,
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 50,
    },
    experience: {
      type: Number, // in years
      default: 0,
    },
    icon: String,
    color: String,
    endorsements: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create indexes
skillSchema.index({ category: 1 });
skillSchema.index({ featured: 1 });
skillSchema.index({ proficiency: -1 });

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
