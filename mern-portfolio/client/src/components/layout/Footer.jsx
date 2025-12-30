import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

/**
 * Footer Component
 * Site footer with links and social media
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resume', href: '/resume' },
        { label: 'Portfolio', href: '/projects' },
        { label: 'Case Studies', href: '/projects' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub', href: 'https://github.com', external: true },
        { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
        { label: 'Twitter', href: 'https://twitter.com', external: true },
      ],
    },
  ];

  return (
    <footer className="bg-primary-900/50 border-t border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary-400 to-accent-300 rounded-lg flex items-center justify-center font-bold text-primary-900 text-sm">
                {'</>'}
              </div>
              <span className="text-lg font-bold text-gradient">Developer</span>
            </div>
            <p className="text-text-secondary text-sm">
              Full-stack developer building modern web applications with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-text-primary mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-secondary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-text-secondary hover:text-secondary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-secondary-400"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-secondary-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-secondary-400"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-secondary hover:text-secondary-400"
              aria-label="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
