import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';

/**
 * Projects Routes
 */
const router = express.Router();

// Placeholder controllers
const projectController = {
  getAll: (req, res) => res.json({ message: 'Get all projects' }),
  getById: (req, res) => res.json({ message: 'Get project by ID' }),
  create: (req, res) => res.json({ message: 'Create project' }),
  update: (req, res) => res.json({ message: 'Update project' }),
  delete: (req, res) => res.json({ message: 'Delete project' }),
};

// Public routes
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), projectController.create);
router.put('/:id', authenticate, authorize('admin'), projectController.update);
router.delete('/:id', authenticate, authorize('admin'), projectController.delete);

export default router;
