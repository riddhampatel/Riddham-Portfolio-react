import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const Blogs = () => {
  const blogs = [
    { title: 'Building Scalable Node.js Applications', excerpt: 'Best practices for scaling Node.js applications', date: 'Dec 2025', readTime: '8 min read' },
    { title: 'React Hooks Deep Dive', excerpt: 'Understanding the power of React hooks', date: 'Nov 2025', readTime: '10 min read' },
    { title: 'MongoDB Optimization Tips', excerpt: 'Performance optimization for MongoDB', date: 'Oct 2025', readTime: '7 min read' },
  ];

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-text-primary">My Blog</h1>
        <div className="space-y-6">
          {blogs.map((blog, idx) => (
            <Card key={idx} variant="glass">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-secondary-400">{blog.title}</h3>
                <span className="text-xs text-text-secondary whitespace-nowrap ml-4">{blog.date}</span>
              </div>
              <p className="text-text-secondary mb-3">{blog.excerpt}</p>
              <span className="text-sm text-text-muted">{blog.readTime}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
