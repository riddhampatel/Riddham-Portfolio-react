import mongoose from 'mongoose';

/**
 * Project Schema
 * Stores portfolio projects
 */
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a project title'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    longDescription: String,
    image: {
      type: String,
      required: true,
    },
    images: [String], // Gallery images
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    features: [String],
    links: {
      github: String,
      live: String,
      demo: String,
    },
    startDate: Date,
    endDate: Date,
    category: {
      type: String,
      enum: ['web-app', 'mobile-app', 'design', 'other'],
      default: 'web-app',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    testimonial: {
      client: String,
      feedback: String,
    },
    metrics: {
      performance: String,
      userSatisfaction: Number,
      codeQuality: String,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Note: slug already has unique index from schema definition
// Create additional indexes for better performance
projectSchema.index({ featured: 1 });
projectSchema.index({ createdAt: -1 });
projectSchema.index({ technologies: 1 });

const Project = mongoose.model('Project', projectSchema);

export default Project;
