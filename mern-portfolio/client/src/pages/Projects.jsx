import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import apiClient from '../utils/apiClient';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/projects');
      setProjects(response.data.projects || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-950 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background-950 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-text-primary">My Projects</h1>
        {projects.length === 0 ? (
          <div className="text-center text-text-secondary py-20">
            <p className="text-xl">No projects available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project._id} variant="glass">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-secondary-400 mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-secondary-400/10 text-secondary-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.links && (
                  <div className="flex gap-3 mt-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-400 hover:text-secondary-300 text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-400 hover:text-secondary-300 text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
