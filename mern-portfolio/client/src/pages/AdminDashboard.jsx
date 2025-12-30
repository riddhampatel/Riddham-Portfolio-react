import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Loader from '../components/ui/Loader';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import apiClient from '../utils/apiClient';

/**
 * Admin Dashboard
 * Manage portfolio content without touching code
 */
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [about, setAbout] = useState({
    bio: 'I am a full-stack developer passionate about building scalable applications.',
    experience: '5+ years of experience',
    location: 'Your Location',
  });
  const [cv, setCV] = useState({
    url: 'https://your-cv-url.com/cv.pdf',
    lastUpdated: '2025-12-28',
  });

  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (activeTab === 'projects') {
      fetchProjects();
    }
  }, [activeTab]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/projects');
      setProjects(response.data.projects || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  // Projects Management
  const handleAddProject = async () => {
    try {
      setLoading(true);
      const projectData = {
        title: formData.title,
        description: formData.description,
        image: formData.image || 'https://via.placeholder.com/400x300',
        technologies: formData.technologies ? formData.technologies.split(',').map(t => t.trim()) : [],
        links: {
          github: formData.github || '',
          live: formData.live || '',
        },
        category: formData.category || 'web-app',
        featured: formData.featured || false,
      };
      
      const response = await apiClient.post('/projects', projectData);
      setProjects([...projects, response.data.project]);
      setFormData({});
      setError(null);
      alert('Project added successfully!');
    } catch (err) {
      console.error('Error adding project:', err);
      setError(err.response?.data?.message || 'Failed to add project');
      alert('Failed to add project: ' + (err.response?.data?.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProject = async (id) => {
    try {
      setLoading(true);
      const projectData = {
        title: formData.title,
        description: formData.description,
        image: formData.image,
        technologies: formData.technologies ? formData.technologies.split(',').map(t => t.trim()) : [],
        links: {
          github: formData.github || '',
          live: formData.live || '',
        },
        category: formData.category || 'web-app',
        featured: formData.featured || false,
      };
      
      const response = await apiClient.put(`/projects/${id}`, projectData);
      setProjects(projects.map(p => p._id === id ? response.data.project : p));
      setEditingId(null);
      setFormData({});
      setError(null);
      alert('Project updated successfully!');
    } catch (err) {
      console.error('Error updating project:', err);
      setError(err.response?.data?.message || 'Failed to update project');
      alert('Failed to update project: ' + (err.response?.data?.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }
    
    try {
      setLoading(true);
      await apiClient.delete(`/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
      setError(null);
      alert('Project deleted successfully!');
    } catch (err) {
      console.error('Error deleting project:', err);
      setError(err.response?.data?.message || 'Failed to delete project');
      alert('Failed to delete project: ' + (err.response?.data?.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const handleAboutChange = (field, value) => {
    setAbout({ ...about, [field]: value });
  };

  const handleCVUpload = (url) => {
    setCV({ ...cv, url, lastUpdated: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 className="text-5xl font-bold mb-12 text-text-primary">
          Admin Dashboard
        </motion.h1>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {['projects', 'about', 'skills', 'cv'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setEditingId(null);
                setFormData({});
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-secondary-400 text-white shadow-lg'
                  : 'bg-background-800 text-text-secondary hover:bg-background-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center py-10">
            <Loader />
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && !loading && (
          <div className="space-y-8">
            <Card variant="glass">
              <h2 className="text-2xl font-bold text-secondary-400 mb-6">
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h2>
              <div className="space-y-4">
                <Input
                  label="Project Title *"
                  type="text"
                  placeholder="e.g., E-Commerce Platform"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
                <Textarea
                  label="Description *"
                  placeholder="Project description"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
                <Input
                  label="Technologies (comma separated)"
                  type="text"
                  placeholder="e.g., React, Node.js, MongoDB"
                  value={formData.technologies || ''}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                />
                <Input
                  label="Image URL"
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <Input
                  label="GitHub URL"
                  type="text"
                  placeholder="https://github.com/username/repo"
                  value={formData.github || ''}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                />
                <Input
                  label="Live Demo URL"
                  type="text"
                  placeholder="https://example.com"
                  value={formData.live || ''}
                  onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured || false}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="featured" className="text-text-secondary">Featured Project</label>
                </div>
                <div className="flex gap-4">
                  {editingId ? (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateProject(editingId)}
                        disabled={!formData.title || !formData.description}
                      >
                        Save Changes
                      </Button>
                      <Button variant="ghost" onClick={() => {
                        setEditingId(null);
                        setFormData({});
                      }}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="primary" 
                      onClick={handleAddProject}
                      disabled={!formData.title || !formData.description}
                    >
                      <FiPlus /> Add Project
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text-primary">Your Projects</h3>
              {projects.length === 0 ? (
                <Card variant="glass">
                  <p className="text-center text-text-secondary py-8">No projects yet. Add your first project above!</p>
                </Card>
              ) : (
                projects.map((project) => (
                  <Card key={project._id} variant="glass">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <h4 className="text-xl font-bold text-secondary-400 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-text-secondary mb-3">{project.description}</p>
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-secondary-400/10 text-secondary-400 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {project.featured && (
                          <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm mb-3">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            setEditingId(project._id);
                            setFormData({
                              title: project.title,
                              description: project.description,
                              technologies: project.technologies ? project.technologies.join(', ') : '',
                              image: project.image,
                              github: project.links?.github || '',
                              live: project.links?.live || '',
                              featured: project.featured,
                            });
                          }}
                        >
                          <FiEdit2 />
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDeleteProject(project._id)}
                        >
                          <FiTrash2 />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <Card variant="glass">
            <h2 className="text-2xl font-bold text-secondary-400 mb-6">Edit About Section</h2>
            <div className="space-y-4">
              <Textarea
                label="Bio"
                placeholder="Write your bio here..."
                value={about.bio}
                onChange={(e) => handleAboutChange('bio', e.target.value)}
                rows={5}
              />
              <Input
                label="Experience"
                type="text"
                placeholder="e.g., 5+ years of experience"
                value={about.experience}
                onChange={(e) => handleAboutChange('experience', e.target.value)}
              />
              <Input
                label="Location"
                type="text"
                placeholder="Your location"
                value={about.location}
                onChange={(e) => handleAboutChange('location', e.target.value)}
              />
              <Button variant="primary">Save About Section</Button>
            </div>
          </Card>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <Card variant="glass">
            <h2 className="text-2xl font-bold text-secondary-400 mb-6">Manage Skills</h2>
            <div className="space-y-4">
              <Textarea
                label="Skills (one per line)"
                placeholder="React&#10;Node.js&#10;MongoDB&#10;TypeScript"
                rows={6}
              />
              <Button variant="primary">Save Skills</Button>
            </div>
          </Card>
        )}

        {/* CV Tab */}
        {activeTab === 'cv' && (
          <Card variant="glass">
            <h2 className="text-2xl font-bold text-secondary-400 mb-6">Update CV/Resume</h2>
            <div className="space-y-4">
              <Input
                label="CV URL"
                type="text"
                placeholder="https://your-storage.com/cv.pdf"
                value={cv.url}
                onChange={(e) => handleCVUpload(e.target.value)}
              />
              <div className="p-4 bg-background-900 rounded-lg">
                <p className="text-text-secondary text-sm mb-2">Current CV:</p>
                <a
                  href={cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:underline break-all"
                >
                  {cv.url}
                </a>
                <p className="text-text-muted text-sm mt-3">
                  Last updated: {cv.lastUpdated}
                </p>
              </div>
              <div className="p-4 bg-secondary-400/10 rounded-lg border border-secondary-400/20">
                <h4 className="font-bold text-secondary-400 mb-2">How to upload CV:</h4>
                <ol className="text-text-secondary text-sm space-y-1 list-decimal ml-5">
                  <li>Upload your PDF to Google Drive or Dropbox</li>
                  <li>Right-click and select "Share"</li>
                  <li>Copy the sharing link</li>
                  <li>Paste the link in the CV URL field above</li>
                </ol>
              </div>
              <Button variant="primary">Update CV</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
