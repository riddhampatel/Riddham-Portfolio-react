import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';

/**
 * Blogs Routes
 */
const router = express.Router();

// Placeholder controllers
const blogController = {
  getAll: (req, res) => res.json({ message: 'Get all blogs' }),
  getById: (req, res) => res.json({ message: 'Get blog by ID' }),
  create: (req, res) => res.json({ message: 'Create blog' }),
  update: (req, res) => res.json({ message: 'Update blog' }),
  delete: (req, res) => res.json({ message: 'Delete blog' }),
};

// Public routes
router.get('/', blogController.getAll);
router.get('/:id', blogController.getById);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), blogController.create);
router.put('/:id', authenticate, authorize('admin'), blogController.update);
router.delete('/:id', authenticate, authorize('admin'), blogController.delete);

export default router;
