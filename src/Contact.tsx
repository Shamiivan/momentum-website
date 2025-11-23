import Header from './components/Header'
import Footer from './components/Footer'
import { usePageScroll } from './hooks/usePageScroll'
import './App.css'
import './Contact.css'

const Contact = () => {
  usePageScroll();

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Get In Touch</h1>
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
                        <p>4845 Rue Jean-Talon O</p>
                        <p>Montreal, QC H4P 1W7</p>
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
                        <a href="mailto:info@momentummanagement.ca">info@momentummanagement.ca</a>
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
                        <a href="tel:+18773540317">+1 (877) 354-0317</a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-cta-box">
                    <h4>Looking for immediate assistance?</h4>
                    <p>Schedule a call with our team to discuss your customer acquisition strategy.</p>
                    <a href="mailto:info@momentummanagement.ca" className="btn-contact-alt">
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
