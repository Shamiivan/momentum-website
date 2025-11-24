import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const { t } = useTranslation();
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
          aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
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
            <button
              className="nav-link nav-dropdown-button"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              {t('header.services')}
              <span style={{ fontSize: '0.7rem' }}>▼</span>
            </button>
            {servicesOpen && (
              <div className="dropdown-menu">
                <Link to="/services/partnerships">
                  {t('header.partnerships')}
                </Link>
                <Link to="/services/staff-training">
                  {t('header.staffTraining')}
                </Link>
                <Link to="/services/executive-coaching">
                  {t('header.executiveCoaching')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Services (expandable) */}
          <div className="mobile-only mobile-services-section">
            <button className="mobile-services-title">
              {t('header.services')}
            </button>
            <div className="mobile-services-submenu">
              <Link
                to="/services/partnerships"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> {t('header.partnerships')}
              </Link>
              <Link
                to="/services/staff-training"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> {t('header.staffTraining')}
              </Link>
              <Link
                to="/services/executive-coaching"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-submenu-item"
              >
                <span className="submenu-arrow">→</span> {t('header.executiveCoaching')}
              </Link>
            </div>
          </div>

          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>{t('header.careers')}</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t('header.about')}</Link>
          <a
            href="/#faq"
            onClick={(e) => {
              setMobileMenuOpen(false);
              // If we're already on the homepage, scroll to FAQ
              if (window.location.pathname === '/') {
                e.preventDefault();
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            {t('header.faq')}
          </a>
          <Link to="/contact" className="nav-cta-mobile" onClick={() => setMobileMenuOpen(false)}>
            {t('header.contact')}
          </Link>
        </nav>

        <Link to="/contact" className="header-cta-new header-cta-desktop">
          {t('header.contact')}
        </Link>
      </div>
    </header>
  );
};

export default Header;
