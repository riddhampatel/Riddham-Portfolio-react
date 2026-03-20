import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { portfolioContent } from '../data/portfolioContent';

const Blogs = () => {
  const { blogs } = portfolioContent;

  return (
    <div className="min-h-screen bg-background-950 py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 sm:mb-12 text-text-primary">My Blog</h1>
        {blogs.length === 0 ? (
          <Card variant="glass">
            <p className="text-text-secondary">Add your real blog posts in client/src/data/portfolioContent.js.</p>
          </Card>
        ) : (
          <div className="space-y-6">
            {blogs.map((blog, idx) => (
              <Card key={`${blog.title}-${idx}`} variant="glass">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-secondary-400">{blog.title}</h3>
                  <span className="text-xs text-text-secondary whitespace-nowrap sm:ml-4">{blog.date}</span>
                </div>
                <p className="text-text-secondary mb-3">{blog.excerpt}</p>
                <span className="text-sm text-text-muted">{blog.readTime}</span>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
