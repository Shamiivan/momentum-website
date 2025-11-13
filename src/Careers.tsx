import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container-new">
            <h1 className="contact-page-title">Careers</h1>
            <p className="contact-page-subtitle" style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              marginTop: '3rem',
              color: 'var(--color-accent-gold)'
            }}>
              Shape your future with us.
            </p>
            <div style={{ marginTop: '3rem' }}>
              <Link to="/contact" className="btn-primary-new">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Acquisition Flow Section */}
        <section className="acquisition-flow-section">
          <div className="container-new">
            <h2 className="section-title-new" style={{ color: 'var(--color-white)' }}>
              Our Customer Acquisition Process
            </h2>
            <p className="flow-subtitle">
              Multi-channel approach that turns prospects into loyal customers
            </p>

            <div className="flow-diagram">
              {/* Initial Contact */}
              <div className="flow-node flow-intro" data-animate>
                <div className="flow-node-content">
                  <div className="flow-icon">📧</div>
                  <h3>Intro Email</h3>
                  <p className="flow-metric">68% engagement</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flow-arrow" data-animate></div>

              {/* Follow-up Methods */}
              <div className="flow-group" data-animate>
                <div className="flow-node flow-followup-1">
                  <div className="flow-node-content">
                    <div className="flow-icon">📞</div>
                    <h3>1st Follow-up</h3>
                    <p className="flow-metric">44% engagement</p>
                  </div>
                </div>

                <div className="flow-node flow-linkedin">
                  <div className="flow-node-content">
                    <div className="flow-icon">💼</div>
                    <h3>LinkedIn Touch</h3>
                    <p className="flow-metric">18% engagement</p>
                  </div>
                </div>

                <div className="flow-node flow-call">
                  <div className="flow-node-content">
                    <div className="flow-icon">☎️</div>
                    <h3>Call Attempt</h3>
                    <p className="flow-metric">32% engagement</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flow-arrow" data-animate></div>

              {/* Second Follow-up */}
              <div className="flow-node flow-followup-2" data-animate>
                <div className="flow-node-content">
                  <div className="flow-icon">📨</div>
                  <h3>2nd Follow-up</h3>
                  <p className="flow-metric">28% engagement</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flow-arrow" data-animate></div>

              {/* Final Nudge */}
              <div className="flow-node flow-nudge" data-animate>
                <div className="flow-node-content">
                  <div className="flow-icon">⏰</div>
                  <h3>Last Nudge</h3>
                  <p className="flow-metric">12% engagement</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flow-arrow" data-animate></div>

              {/* Conversion */}
              <div className="flow-node flow-conversion" data-animate>
                <div className="flow-node-content">
                  <div className="flow-icon">✅</div>
                  <h3>Appointment Booked</h3>
                  <p className="flow-metric">12% appointment rate</p>
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

export default Careers
