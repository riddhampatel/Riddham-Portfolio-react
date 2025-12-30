import { motion } from 'framer-motion';

/**
 * Loader Component
 * Loading spinner
 */
const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`${sizes[size]} border-3 border-secondary-400/30 border-t-secondary-400 rounded-full ${className}`}
    />
  );
};

export default Loader;
