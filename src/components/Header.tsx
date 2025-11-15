import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-new">
          <img src="/LOGO-NEW.svg" alt="Momentum Management" className="logo-image" />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
          <div className="mobile-only">
            <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link
                to="/services/partnerships"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '0.9rem', opacity: 0.8 }}
              >
                → Partnerships
              </Link>
              <Link
                to="/services/staff-training"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '0.9rem', opacity: 0.8 }}
              >
                → Staff/Sales Training
              </Link>
              <Link
                to="/services/executive-coaching"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '0.9rem', opacity: 0.8 }}
              >
                → Executive Coaching
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
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: var(--color-white);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
          font-size: 0.95rem;
        }

        .dropdown-menu a:hover {
          background: rgba(212, 175, 55, 0.1);
          color: var(--color-accent-gold);
        }

        .desktop-only {
          display: block;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 968px) {
          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
