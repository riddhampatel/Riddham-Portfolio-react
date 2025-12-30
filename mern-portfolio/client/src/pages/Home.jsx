import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Home Page Component
 * Landing page with hero section, featured projects, and CTA
 */
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background-950 pt-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center"
        >
          {/* Left Content */}
          <div className="space-y-8 flex flex-col justify-center w-full">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-text-secondary text-2xl md:text-3xl block mb-2">Hi, I'm</span>
                <span className="text-gradient block mb-2">Riyank</span>
                <span className="text-text-primary">Full-Stack Developer</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed"
            >
              I build beautiful, performant web applications using modern technologies like React, Node.js, and MongoDB. Specialized in creating scalable architecture and exceptional user experiences.
            </motion.p>

            {/* Skills Preview */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-secondary-400/10 text-secondary-400 rounded-full text-sm font-medium hover:bg-secondary-400/20 transition-colors">
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap pt-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View My Work <FiArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  <FiGithub className="w-5 h-5" /> GitHub
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right - Unique Morphing Blob with Particles */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 hidden md:flex items-center justify-center"
          >
            {/* Organic Morphing Blob 1 */}
            <motion.div
              className="absolute w-96 h-96 bg-gradient-to-br from-secondary-400/40 to-accent-300/40 blur-3xl"
              animate={{
                borderRadius: ['60% 40% 30% 70%', '30% 60% 70% 40%', '50% 60% 30% 60%', '60% 40% 30% 70%'],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.2, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Morphing Blob 2 - Counter */}
            <motion.div
              className="absolute w-80 h-80 bg-gradient-to-tl from-accent-300/30 to-secondary-400/30 blur-2xl"
              animate={{
                borderRadius: ['30% 70% 70% 30%', '60% 40% 60% 40%', '40% 60% 40% 60%', '30% 70% 70% 30%'],
                rotate: [360, 270, 180, 90, 0],
                scale: [1.1, 0.9, 1.2, 1, 1.1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Particle 1 */}
            <motion.div
              className="absolute w-6 h-6 bg-secondary-400 rounded-full shadow-lg"
              animate={{
                x: [0, 120, -80, 100, 0],
                y: [0, -100, 120, -80, 0],
                scale: [1, 1.5, 0.5, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            {/* Particle 2 */}
            <motion.div
              className="absolute w-5 h-5 bg-accent-300 rounded-full shadow-lg"
              animate={{
                x: [0, -90, 110, -70, 0],
                y: [0, 110, -90, 100, 0],
                scale: [1, 0.5, 1.5, 1, 1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Particle 3 */}
            <motion.div
              className="absolute w-7 h-7 bg-secondary-400 rounded-full shadow-lg"
              animate={{
                x: [0, 70, -110, 90, 0],
                y: [0, -120, 80, -100, 0],
                scale: [1, 1.3, 0.7, 1.5, 1],
              }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            {/* Particle 4 */}
            <motion.div
              className="absolute w-5 h-5 bg-accent-300 rounded-full shadow-lg"
              animate={{
                x: [0, -100, 130, -90, 0],
                y: [0, 90, -110, 100, 0],
              }}
              transition={{ duration: 9, repeat: Infinity }}
            />
            {/* Particle 5 */}
            <motion.div
              className="absolute w-6 h-6 bg-secondary-400 rounded-full shadow-lg"
              animate={{
                x: [0, 95, -115, 60, 0],
                y: [0, -85, 95, -110, 0],
                scale: [1, 1.4, 0.6, 1.3, 1],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            {/* Particle 6 */}
            <motion.div
              className="absolute w-5.5 h-5.5 bg-accent-300 rounded-full shadow-lg"
              animate={{
                x: [0, -80, 105, -95, 0],
                y: [0, 105, -75, 90, 0],
                scale: [1, 0.8, 1.6, 1.1, 1],
              }}
              transition={{ duration: 7.5, repeat: Infinity }}
            />
            {/* Particle 7 */}
            <motion.div
              className="absolute w-7 h-7 bg-secondary-400 rounded-full shadow-lg"
              animate={{
                x: [0, 110, -90, 85, 0],
                y: [0, -95, 110, -70, 0],
                scale: [1, 1.2, 0.7, 1.4, 1],
              }}
              transition={{ duration: 6.5, repeat: Infinity }}
            />
            {/* Particle 8 */}
            <motion.div
              className="absolute w-5 h-5 bg-accent-300 rounded-full shadow-lg"
              animate={{
                x: [0, -105, 85, -100, 0],
                y: [0, 80, -105, 115, 0],
                scale: [1, 1.1, 0.5, 1.3, 1],
              }}
              transition={{ duration: 8.5, repeat: Infinity }}
            />
            {/* Liquid Border Ring */}
            <motion.div
              className="absolute w-96 h-96 border-4 border-secondary-400/30"
              animate={{
                borderRadius: ['50% 50% 50% 50%', '60% 40% 60% 40%', '40% 60% 40% 60%', '50% 50% 50% 50%'],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="relative w-80 h-80 rounded-full shadow-glow-lg overflow-hidden border-2 border-secondary-400/50 z-10">
              <img 
                src="/images/profile.jpg" 
                alt="Your Profile"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-text-secondary">Check out some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Doctor Appointment Booking System',
                description: 'A comprehensive healthcare platform for booking and managing doctor appointments with real-time availability',
                tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
              },
              {
                title: 'Social Dashboard Productivity Hub',
                description: 'Unified productivity dashboard integrating social media analytics, task management, and team collaboration',
                tags: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}
                className="card-hover"
              >
                <Card>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary-400/10 text-secondary-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Link to="/projects">
            <Button variant="secondary" size="lg" className="mt-8">
              View All Projects <FiArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects', value: '25+' },
            { label: 'Happy Clients', value: '15+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'GitHub Stars', value: '500+' },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
