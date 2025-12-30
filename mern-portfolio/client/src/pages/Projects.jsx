import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Projects = () => {
  const projects = [
    { title: 'E-Commerce Platform', description: 'Full-stack MERN application with Stripe', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
    { title: 'Task Management App', description: 'Real-time collaborative task management with Socket.IO', tags: ['React', 'Express', 'MongoDB', 'Socket.IO'] },
    { title: 'AI Chat Application', description: 'Chat app with OpenAI integration', tags: ['React', 'Node.js', 'OpenAI', 'Socket.IO'] },
  ];

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-text-primary">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} variant="glass">
              <h3 className="text-xl font-bold text-secondary-400 mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-secondary-400/10 text-secondary-400 rounded">{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
