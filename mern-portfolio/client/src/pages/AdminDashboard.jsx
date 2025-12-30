import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

/**
 * Admin Dashboard
 * Manage portfolio content without touching code
 */
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with Stripe integration',
      tags: 'React, Node.js, MongoDB, Stripe',
      image: 'https://via.placeholder.com/400x300',
    },
  ]);
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

  // Projects Management
  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: formData.title || 'New Project',
      description: formData.description || 'Project description',
      tags: formData.tags || 'React, Node.js',
      image: formData.image || 'https://via.placeholder.com/400x300',
    };
    setProjects([...projects, newProject]);
    setFormData({});
  };

  const handleUpdateProject = (id) => {
    setProjects(
      projects.map((p) =>
        p.id === id
          ? {
              ...p,
              title: formData.title || p.title,
              description: formData.description || p.description,
              tags: formData.tags || p.tags,
              image: formData.image || p.image,
            }
          : p
      )
    );
    setEditingId(null);
    setFormData({});
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
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

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <Card variant="glass">
              <h2 className="text-2xl font-bold text-secondary-400 mb-6">
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h2>
              <div className="space-y-4">
                <Input
                  label="Project Title"
                  type="text"
                  placeholder="e.g., E-Commerce Platform"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <Textarea
                  label="Description"
                  placeholder="Project description"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
                <Input
                  label="Technologies (comma separated)"
                  type="text"
                  placeholder="e.g., React, Node.js, MongoDB"
                  value={formData.tags || ''}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
                <Input
                  label="Image URL"
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <div className="flex gap-4">
                  {editingId ? (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateProject(editingId)}
                      >
                        Save Changes
                      </Button>
                      <Button variant="ghost" onClick={() => setEditingId(null)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button variant="primary" onClick={handleAddProject}>
                      <FiPlus /> Add Project
                    </Button>
                  )}
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-text-primary">Your Projects</h3>
              {projects.map((project) => (
                <Card key={project.id} variant="glass">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-secondary-400 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-text-secondary mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.split(',').map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-secondary-400/10 text-secondary-400 rounded-full text-sm"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                          setEditingId(project.id);
                          setFormData(project);
                        }}
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                      >
                        <FiTrash2 />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
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
