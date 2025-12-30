import Button from '../components/ui/Button';

/**
 * 404 Not Found Page
 */
const NotFound = () => {
  return (
    <div className="min-h-screen bg-background-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-bold text-text-primary mb-3">Page Not Found</h2>
        <p className="text-text-secondary mb-8">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button variant="primary" size="lg">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
