import { createSlice } from '@reduxjs/toolkit';

/**
 * Portfolio Slice
 * Manages portfolio data (projects, skills, blogs, etc.)
 */
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: [],
    skills: [],
    blogs: [],
    testimonials: [],
    experience: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Set projects
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.error = null;
    },

    // Add single project
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    // Update project
    updateProject: (state, action) => {
      const index = state.projects.findIndex(
        (p) => p._id === action.payload._id
      );
      if (index > -1) {
        state.projects[index] = action.payload;
      }
    },

    // Delete project
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p._id !== action.payload);
    },

    // Set skills
    setSkills: (state, action) => {
      state.skills = action.payload;
    },

    // Set blogs
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },

    // Set testimonials
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },

    // Set experience
    setExperience: (state, action) => {
      state.experience = action.payload;
    },

    // Set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    // Set error
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProjects,
  addProject,
  updateProject,
  deleteProject,
  setSkills,
  setBlogs,
  setTestimonials,
  setExperience,
  setLoading,
  setError,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
