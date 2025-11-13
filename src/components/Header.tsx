import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <div className="nav-dropdown" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
                setServicesDropdownOpen(!servicesDropdownOpen);
              }}
            >
              Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`nav-dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
              <Link to="/services/partnerships" onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}>Partnerships</Link>
              <Link to="/services/staff-training" onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}>Staff Training</Link>
              <Link to="/services/executive-coaching" onClick={() => { setMobileMenuOpen(false); setServicesDropdownOpen(false); }}>Executive Coaching</Link>
            </div>
          </div>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
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
