// Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  // State to control the mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to hold the current path for active link styling
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // On mount, set the current path if available
    if (typeof window !== 'undefined') {
    setCurrentPath(window.location.pathname);
    }
    }, []);

  const isActive = (path: string): boolean => currentPath === path;

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-md">
    <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <a
          href="/"
          className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
        >
            Home
        </a>
        {/* Desktop Menu (hidden on mobile) */}
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
        {/* Hamburger Icon (visible only on mobile) */}
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
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden transition-all duration-300">
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
</header>
  );
  };

export default Navbar;
