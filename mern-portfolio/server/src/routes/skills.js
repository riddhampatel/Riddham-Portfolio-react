import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';

/**
 * Skills Routes
 */
const router = express.Router();

// Placeholder controllers
const skillController = {
  getAll: (req, res) => res.json({ message: 'Get all skills' }),
  create: (req, res) => res.json({ message: 'Create skill' }),
  update: (req, res) => res.json({ message: 'Update skill' }),
  delete: (req, res) => res.json({ message: 'Delete skill' }),
};

// Public routes
router.get('/', skillController.getAll);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), skillController.create);
router.put('/:id', authenticate, authorize('admin'), skillController.update);
router.delete('/:id', authenticate, authorize('admin'), skillController.delete);

export default router;
