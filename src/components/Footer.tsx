import { Link } from 'react-router-dom'

const Footer = () => {
  return (
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
              <li><Link to="/about">About</Link></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#results">Careers</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><Link to="/contact">Contact</Link></li>
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
              <li>4845 Rue Jean-Talon O</li>
              <li>Montreal, QC H4P 1W7</li>
              <li><a href="mailto:info@momentummanagement.ca">info@momentummanagement.ca</a></li>
              <li><a href="tel:+18773540317">+1 (877) 354-0317</a></li>
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
  );
};

export default Footer;
