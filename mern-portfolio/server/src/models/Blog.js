import mongoose from 'mongoose';

/**
 * Blog Schema
 * Stores blog articles with markdown content
 */
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a blog title'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    tags: [String],
    category: {
      type: String,
      enum: ['web-dev', 'mobile-dev', 'devops', 'tutorial', 'career', 'other'],
      default: 'other',
    },
    readTime: {
      type: Number, // in minutes
      default: 5,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: Date,
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        author: String,
        email: String,
        content: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    seo: {
      metaDescription: String,
      keywords: [String],
      ogImage: String,
    },
  },
  { timestamps: true }
);

// Create indexes
blogSchema.index({ slug: 1 });
blogSchema.index({ isPublished: 1 });
blogSchema.index({ createdAt: -1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ author: 1 });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
