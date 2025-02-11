// Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isActive = (path: string): boolean => currentPath === path;

  const generateBreadcrumbs = (path: string) => {
    const segments = path.split('/').filter(segment => segment !== '');
    const breadcrumbs = [];

    // Always start with Home
    breadcrumbs.push({ name: 'Home', path: '/' });

    let accumulatedPath = '';
    for (const segment of segments) {
      accumulatedPath += `/${segment}`;
      const formattedName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        name: formattedName,
        path: accumulatedPath
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(currentPath);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-md">
      <div className="relative">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <div className="flex items-center space-x-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  {index !== 0 && (
                    <span className="text-[var(--color-text-primary)] mx-1">/</span>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-[var(--color-primary)]">
                      {crumb.name}
                    </span>
                  ) : (
                    <a
                      href={crumb.path}
                      className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {crumb.name}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <a
                href="/resume"
                className={`text-lg font-medium transition-colors ${
                  isActive('/resume')
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                }`}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={`text-lg font-medium transition-colors ${
                  isActive('/blog')
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="mailto:mail@tulio.org"
                className="px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-mono hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-surface)] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu toggle remains the same */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        {/* Mobile menu remains the same */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full md:hidden transition-all duration-300">
            <ul className="px-6 py-4 space-y-4 bg-[var(--color-surface)]">
              <li>
                <a
                  href="/resume"
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/resume')
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={`block text-lg font-medium transition-colors ${
                    isActive('/blog')
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--color-text-primary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@tulio.org"
                  className="block px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-mono hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-surface)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;