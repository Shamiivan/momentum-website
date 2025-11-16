import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

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
    </header>
  );
};

export default Header;
