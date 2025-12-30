import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectStats,
} from '../controllers/projectController.js';

/**
 * Projects Routes
 */
const router = express.Router();

// Public routes
router.get('/', getAllProjects);
router.get('/stats', authenticate, authorize('admin'), getProjectStats);
router.get('/:id', getProjectById);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), createProject);
router.put('/:id', authenticate, authorize('admin'), updateProject);
router.delete('/:id', authenticate, authorize('admin'), deleteProject);

export default router;
