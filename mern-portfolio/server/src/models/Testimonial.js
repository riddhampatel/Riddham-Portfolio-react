import mongoose from 'mongoose';

/**
 * Testimonial Schema
 * Stores client testimonials
 */
const testimonialSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
      trim: true,
    },
    company: String,
    position: String,
    image: String,
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create indexes
testimonialSchema.index({ featured: 1 });
testimonialSchema.index({ createdAt: -1 });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
