import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Hooks
import useTheme from './hooks/useTheme';

/**
 * Main App Component
 * Handles routing, theme, and global state management
 */
function App() {
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  // Initialize app on mount
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Validate token and restore user session
      // dispatch(validateToken(token));
    }

    // Load user preferences
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dispatch]);

  // Update document class when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col min-h-screen bg-background-950 text-text-primary">
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 w-full">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
