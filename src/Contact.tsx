import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './Contact.css'

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <div className="nav-dropdown">
              <button
                className="nav-link nav-dropdown-trigger"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
                <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Partnerships</a>
                <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Sales</a>
                <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Staff Training & Executive Coaching</a>
              </div>
            </div>
            <a href="/#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
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

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Get In Touch</h1>
            <p className="contact-page-subtitle">
              Ready to scale customer acquisition? Let's discuss how we can transform your growth trajectory.
            </p>
          </div>
        </section>

        <section className="contact-content-section">
          <div className="container-new">
            <div className="contact-wrapper">
              <div className="contact-form-container">
                <h2 className="form-section-title">Send us a message</h2>
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (514) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help? *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your goals, problems, and how we can help..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-contact">
                    Send Message
                  </button>

                  <p className="form-note">
                    <span className="pulse-dot"></span>
                    We typically respond within 2 hours during business hours
                  </p>
                </form>
              </div>

              <div className="contact-info-container">
                <div className="contact-info-card">
                  <h3 className="contact-info-title">Contact Information</h3>
                  <p className="contact-info-text">
                    Get in touch with us directly or fill out the form and we'll get back to you promptly.
                  </p>

                  <div className="contact-details">
                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4>Location</h4>
                        <p>Montreal, Quebec</p>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <h4>Email</h4>
                        <a href="mailto:contact@momentummanagment.com">contact@momentummanagment.com</a>
                      </div>
                    </div>

                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4>Phone</h4>
                        <a href="tel:+15141234567">+1 (514) 123-4567</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-cta-box">
                    <h4>Looking for immediate assistance?</h4>
                    <p>Schedule a call with our team to discuss your customer acquisition strategy.</p>
                    <a href="mailto:contact@momentummanagment.com" className="btn-contact-alt">
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-new">
        <div className="container-new">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <h3 className="footer-logo">Momentum Management</h3>
              <p className="footer-tagline">Performance-based customer acquisition. We only get paid when you get customers.</p>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#results">Careers</a></li>
                <li><a href="/#faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-links">
                <li><a href="/#services">Partnerships</a></li>
                <li><a href="/#services">Staff Training</a></li>
                <li><a href="/#services">Executive Coaching</a></li>
                <li><a href="/#services">Sales Teams</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>Montreal, Quebec</li>
                <li><a href="mailto:contact@momentummanagment.com">contact@momentummanagment.com</a></li>
                <li><a href="tel:+15141234567">+1 (514) 123-4567</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Momentum Management. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
