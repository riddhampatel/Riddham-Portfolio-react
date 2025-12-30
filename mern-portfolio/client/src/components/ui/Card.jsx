/**
 * Card Component
 * Reusable card container with glass effect
 */
const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'glass',
  ...props
}) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300 shadow-lg';

  const variants = {
    glass: 'glass backdrop-blur-xl border border-white/10 dark:bg-glass/80 dark:border-white/10',
    solid: 'bg-primary-800 border border-white/5 shadow-card',
    gradient: 'bg-gradient-to-br from-secondary-400/10 to-accent-300/10 border border-secondary-400/20 shadow-md',
  };

  const hoverClass = hover ? 'hover:shadow-2xl hover:border-secondary-400/50 hover:scale-105' : '';

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
