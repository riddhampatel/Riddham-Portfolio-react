import { motion } from 'framer-motion';

/**
 * Badge Component
 * Small label for tags, skills, status
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full whitespace-nowrap';

  const variants = {
    default: 'bg-secondary-400/20 text-secondary-400',
    primary: 'bg-primary-700 text-text-primary',
    accent: 'bg-accent-300/20 text-accent-300',
    success: 'bg-success/20 text-success',
    warning: 'bg-warning/20 text-warning',
    error: 'bg-error/20 text-error',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
