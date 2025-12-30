import Project from '../models/Project.js';
import { successResponse, errorResponse } from '../utils/response.js';

/**
 * @desc    Get all projects
 * @route   GET /api/v1/projects
 * @access  Public
 */
export const getAllProjects = async (req, res) => {
  try {
    const { featured, category, limit, sort } = req.query;
    
    // Build query
    const query = { isPublished: true };
    
    if (featured) {
      query.featured = featured === 'true';
    }
    
    if (category) {
      query.category = category;
    }
    
    // Build sort
    let sortOption = { createdAt: -1 }; // Default: newest first
    if (sort === 'oldest') sortOption = { createdAt: 1 };
    if (sort === 'views') sortOption = { views: -1 };
    if (sort === 'rating') sortOption = { rating: -1 };
    
    // Execute query
    let projectsQuery = Project.find(query).sort(sortOption);
    
    if (limit) {
      projectsQuery = projectsQuery.limit(parseInt(limit));
    }
    
    const projects = await projectsQuery;
    
    return successResponse(res, 200, 'Projects retrieved successfully', { projects });
  } catch (error) {
    console.error('Error getting projects:', error);
    return errorResponse(res, 500, 'Failed to retrieve projects');
  }
};

/**
 * @desc    Get single project by ID or slug
 * @route   GET /api/v1/projects/:id
 * @access  Public
 */
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Try to find by ID first, then by slug
    let project = await Project.findById(id);
    
    if (!project) {
      project = await Project.findOne({ slug: id });
    }
    
    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }
    
    // Increment views
    project.views += 1;
    await project.save();
    
    return successResponse(res, 200, 'Project retrieved successfully', { project });
  } catch (error) {
    console.error('Error getting project:', error);
    return errorResponse(res, 500, 'Failed to retrieve project');
  }
};

/**
 * @desc    Create new project
 * @route   POST /api/v1/projects
 * @access  Private (Admin)
 */
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      longDescription,
      image,
      images,
      technologies,
      features,
      links,
      startDate,
      endDate,
      category,
      featured,
      testimonial,
      metrics,
    } = req.body;
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    // Check if slug already exists
    const existingProject = await Project.findOne({ slug });
    if (existingProject) {
      return errorResponse(res, 400, 'A project with this title already exists');
    }
    
    // Create project
    const project = await Project.create({
      title,
      slug,
      description,
      longDescription,
      image,
      images,
      technologies,
      features,
      links,
      startDate,
      endDate,
      category,
      featured,
      testimonial,
      metrics,
    });
    
    return successResponse(res, 201, 'Project created successfully', { project });
  } catch (error) {
    console.error('Error creating project:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return errorResponse(res, 400, messages.join(', '));
    }
    
    return errorResponse(res, 500, 'Failed to create project');
  }
};

/**
 * @desc    Update project
 * @route   PUT /api/v1/projects/:id
 * @access  Private (Admin)
 */
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // If title is being updated, regenerate slug
    if (updateData.title) {
      updateData.slug = updateData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      // Check if new slug conflicts with existing project (excluding current)
      const existingProject = await Project.findOne({
        slug: updateData.slug,
        _id: { $ne: id },
      });
      
      if (existingProject) {
        return errorResponse(res, 400, 'A project with this title already exists');
      }
    }
    
    const project = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }
    
    return successResponse(res, 200, 'Project updated successfully', { project });
  } catch (error) {
    console.error('Error updating project:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return errorResponse(res, 400, messages.join(', '));
    }
    
    return errorResponse(res, 500, 'Failed to update project');
  }
};

/**
 * @desc    Delete project
 * @route   DELETE /api/v1/projects/:id
 * @access  Private (Admin)
 */
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }
    
    return successResponse(res, 200, 'Project deleted successfully', { project });
  } catch (error) {
    console.error('Error deleting project:', error);
    return errorResponse(res, 500, 'Failed to delete project');
  }
};

/**
 * @desc    Get project statistics
 * @route   GET /api/v1/projects/stats
 * @access  Private (Admin)
 */
export const getProjectStats = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const publishedProjects = await Project.countDocuments({ isPublished: true });
    const featuredProjects = await Project.countDocuments({ featured: true });
    const totalViews = await Project.aggregate([
      { $group: { _id: null, total: { $sum: '$views' } } },
    ]);
    
    const stats = {
      total: totalProjects,
      published: publishedProjects,
      featured: featuredProjects,
      totalViews: totalViews[0]?.total || 0,
    };
    
    return successResponse(res, 200, 'Project statistics retrieved successfully', { stats });
  } catch (error) {
    console.error('Error getting project stats:', error);
    return errorResponse(res, 500, 'Failed to retrieve project statistics');
  }
};
