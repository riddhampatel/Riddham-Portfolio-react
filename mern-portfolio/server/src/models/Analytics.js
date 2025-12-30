import mongoose from 'mongoose';

/**
 * Analytics Schema
 * Tracks website analytics and visitor data
 */
const analyticsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      index: true,
    },
    pageViews: {
      type: Number,
      default: 0,
    },
    uniqueVisitors: {
      type: Number,
      default: 0,
    },
    bounceRate: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    avgSessionDuration: {
      type: Number, // in seconds
      default: 0,
    },
    topPages: [
      {
        page: String,
        views: Number,
      },
    ],
    referrers: [
      {
        source: String,
        count: Number,
      },
    ],
    devices: {
      desktop: Number,
      mobile: Number,
      tablet: Number,
    },
    browsers: [
      {
        name: String,
        count: Number,
      },
    ],
    countries: [
      {
        name: String,
        count: Number,
      },
    ],
  },
  { timestamps: true }
);

const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;
