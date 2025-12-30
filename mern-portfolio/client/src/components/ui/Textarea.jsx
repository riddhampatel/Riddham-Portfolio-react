/**
 * Textarea Component
 * Reusable textarea field
 */
const Textarea = ({
  label,
  error,
  helpText,
  className = '',
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
          {props.required && <span className="text-error ml-1">*</span>}
        </label>
      )}

      <textarea
        rows={rows}
        className={`w-full px-4 py-2.5 bg-primary-800 border rounded-lg text-text-primary placeholder-text-muted resize-none transition-colors ${
          error
            ? 'border-error focus:border-error focus:ring-2 focus:ring-error/50'
            : 'border-white/10 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-400/20'
        } ${className}`}
        {...props}
      />

      {error && <p className="mt-2 text-sm text-error">{error}</p>}
      {helpText && <p className="mt-2 text-sm text-text-secondary">{helpText}</p>}
    </div>
  );
};

export default Textarea;
