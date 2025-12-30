import { motion } from 'framer-motion';
import { clsx } from 'clsx';

/**
 * Button Component
 * Reusable button with multiple variants
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-button text-white hover:shadow-glow hover:scale-105 active:scale-95 shadow-lg',
    secondary: 'border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400/10 hover:shadow-md transition-shadow',
    ghost: 'text-text-primary hover:bg-white/5 dark:hover:bg-white/5',
    danger: 'bg-error/20 text-error hover:bg-error/30 shadow-md',
    success: 'bg-success/20 text-success hover:bg-success/30 shadow-md',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
