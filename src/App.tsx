import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">momentum</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
          </div>
          <button className="cta-button-nav">Schedule Call</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-decoration"></div>
        <div className="hero-content">
          <div className="hero-tag">CUSTOMER ACQUISITION AGENCY</div>
          <h1 className="hero-title">
            In 5 Years, We Generated<br />$40M for TELUS.
          </h1>
          <p className="hero-subtitle">
            We build customer acquisition systems across retail, phone, digital, and social.<br />
            <strong>No upfront risk. No monthly retainers.</strong><br />
            You pay only for customers delivered.
          </p>
          <div className="hero-buttons">
            <button className="cta-button-primary">See How We Work</button>
            <button className="cta-button-secondary">Schedule Call</button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <h3 className="trust-title">Trusted by leading brands:</h3>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-logo">
                <span className="logo-large">TELUS</span>
              </div>
              <div className="trust-metric-main">$40M+</div>
              <div className="trust-description">revenue generated</div>
            </div>
            <div className="trust-card">
              <div className="trust-logo">
                <span className="logo-medium">Partner 2</span>
              </div>
              <div className="trust-metric-main">5,000+</div>
              <div className="trust-description">customers in 12 months</div>
            </div>
            <div className="trust-card">
              <div className="trust-logo">
                <span className="logo-medium">Partner 3</span>
              </div>
              <div className="trust-metric-main">312%</div>
              <div className="trust-description">ROI on acquisition spend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section">
        <div className="value-container">
          <h2 className="section-title">Performance-Based Growth</h2>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Zero Upfront Cost</h3>
              <p>No risk, no retainers. Start generating customers with zero investment.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Pay Per Customer</h3>
              <p>Only pay for actual customers delivered. Aligned incentives, guaranteed results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Multi-Channel System</h3>
              <p>Retail, phone, digital, and social - we build systems that scale across all channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Scale Your Customer Acquisition?</h2>
          <p className="cta-subtitle">Let's discuss how we can build a custom acquisition system for your business.</p>
          <div className="cta-buttons">
            <button className="cta-button-primary large">Schedule a Call</button>
            <button className="cta-button-secondary large">See Case Studies</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">momentum</span>
              <p className="footer-tagline">Customer Acquisition Systems</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="mailto:contact@momentummanagement.ca">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Momentum Management. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App