import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Mobile menu backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="header-container">
        <Logo />

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {/* Desktop Services Dropdown */}
          <div
            className="nav-dropdown desktop-only"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/#services"
              className="nav-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              Services
              <span style={{ fontSize: '0.7rem' }}>▼</span>
            </a>
            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/services/partnerships">
                  Partnerships
                </Link>
                <Link to="/services/staff-training">
                  Staff/Sales Training
                </Link>
                <Link to="/services/executive-coaching">
                  Executive Coaching
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Services (expandable) */}
          <div className="mobile-only mobile-services-section">
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="mobile-services-title">
              Services
            </a>
            <div className="mobile-services-submenu">
              <Link
                to="/services/partnerships"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> Partnerships
              </Link>
              <Link
                to="/services/staff-training"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> Staff/Sales Training
              </Link>
              <Link
                to="/services/executive-coaching"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> Executive Coaching
              </Link>
            </div>
          </div>

          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Link to="/contact" className="nav-cta-mobile" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <Link to="/contact" className="header-cta-new header-cta-desktop">
          Contact Us
        </Link>
      </div>

      <style>{`
        /* Mobile Menu Backdrop */
        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 999;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(4px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Navigation Dropdown */
        .nav-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--color-primary-dark);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 8px;
          padding: 0.5rem 0;
          min-width: 200px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          margin-top: 0;
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: var(--color-white);
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          border-left: 3px solid transparent;
        }

        .dropdown-menu a:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-accent-gold);
          border-left-color: var(--color-accent-gold);
          padding-left: 1.75rem;
        }

        /* Mobile Navigation Enhancements */
        .mobile-only {
          display: none;
        }

        .mobile-services-section {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.5rem;
        }

        .mobile-services-title {
          display: block;
          padding: 1rem 0.5rem;
          font-size: 1.1rem;
          color: var(--color-white);
          text-decoration: none;
          font-weight: 500;
          min-height: 48px;
          display: flex;
          align-items: center;
        }

        .mobile-services-submenu {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-left: 1.5rem;
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
        }

        .mobile-submenu-item {
          padding: 0.75rem 0.5rem;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 44px;
        }

        .submenu-arrow {
          color: var(--color-accent-gold);
          transition: transform 0.2s ease;
        }

        .mobile-submenu-item:hover .submenu-arrow,
        .mobile-submenu-item:active .submenu-arrow {
          transform: translateX(4px);
        }

        .mobile-submenu-item:active {
          background: rgba(212, 175, 55, 0.15);
          color: var(--color-accent-gold);
        }

        .desktop-only {
          display: block;
        }

        @media (max-width: 968px) {
          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: block;
          }

          /* Stagger animation for mobile menu items */
          .main-nav.mobile-open > * {
            animation: slideInLeft 0.3s ease forwards;
          }

          .main-nav.mobile-open > *:nth-child(1) { animation-delay: 0.05s; }
          .main-nav.mobile-open > *:nth-child(2) { animation-delay: 0.1s; }
          .main-nav.mobile-open > *:nth-child(3) { animation-delay: 0.15s; }
          .main-nav.mobile-open > *:nth-child(4) { animation-delay: 0.2s; }
          .main-nav.mobile-open > *:nth-child(5) { animation-delay: 0.25s; }
          .main-nav.mobile-open > *:nth-child(6) { animation-delay: 0.3s; }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
