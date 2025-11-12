import { useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  onServicesClick?: () => void;
}

const Header = ({ onServicesClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onServicesClick) {
      e.preventDefault();
      onServicesClick();
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    } else {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="logo-new">Momentum Management</Link>

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
              <a href="/#services" onClick={handleServicesClick}>Partnerships</a>
              <a href="/#services" onClick={handleServicesClick}>Sales</a>
              <a href="/#services" onClick={handleServicesClick}>Staff Training & Executive Coaching</a>
            </div>
          </div>
          <a href="/#results" onClick={() => setMobileMenuOpen(false)}>Careers</a>
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
