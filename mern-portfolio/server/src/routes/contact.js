import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';

/**
 * Contact Routes
 */
const router = express.Router();

// Placeholder controllers
const contactController = {
  submit: (req, res) => res.json({ message: 'Submit contact message' }),
  getAll: (req, res) => res.json({ message: 'Get all messages' }),
  getById: (req, res) => res.json({ message: 'Get message by ID' }),
  update: (req, res) => res.json({ message: 'Update message' }),
  delete: (req, res) => res.json({ message: 'Delete message' }),
};

// Public routes
router.post('/', contactController.submit);

// Protected routes (Admin only)
router.get('/', authenticate, authorize('admin'), contactController.getAll);
router.get('/:id', authenticate, authorize('admin'), contactController.getById);
router.put('/:id', authenticate, authorize('admin'), contactController.update);
router.delete('/:id', authenticate, authorize('admin'), contactController.delete);

export default router;
