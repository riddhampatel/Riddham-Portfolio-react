import mongoose from 'mongoose';

/**
 * Contact Message Schema
 * Stores messages from contact form
 */
const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: String,
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      minlength: [10, 'Message must be at least 10 characters'],
    },
    type: {
      type: String,
      enum: ['project-inquiry', 'collaboration', 'freelance', 'job-offer', 'other'],
      default: 'other',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    response: String,
    respondedAt: Date,
    attachments: [String],
  },
  { timestamps: true }
);

// Create indexes
contactMessageSchema.index({ email: 1 });
contactMessageSchema.index({ isRead: 1 });
contactMessageSchema.index({ createdAt: -1 });

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

export default ContactMessage;
