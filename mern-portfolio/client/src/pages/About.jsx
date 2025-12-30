import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

/**
 * About Page Component
 */
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-8 text-text-primary"
          >
            About Me
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary mb-6 leading-relaxed"
          >
            I'm a full-stack developer passionate about building beautiful, scalable web applications. 
            With experience in React, Node.js, and MongoDB, I create solutions that combine elegant design 
            with robust functionality.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 my-12">
            <Card variant="glass">
              <h3 className="text-xl font-bold text-secondary-400 mb-3">Experience</h3>
              <p className="text-text-secondary">5+ years building web applications and working with modern technologies</p>
            </Card>
            <Card variant="glass">
              <h3 className="text-xl font-bold text-secondary-400 mb-3">Expertise</h3>
              <p className="text-text-secondary">Full-stack development, system design, cloud architecture, and DevOps</p>
            </Card>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-text-primary">
            Skills
          </motion.h2>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express', 'Tailwind CSS', 'Docker', 'AWS'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-secondary-400/10 text-secondary-400 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
