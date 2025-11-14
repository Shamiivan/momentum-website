import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PartnershipFlow from '../components/PartnershipFlow'
import '../App.css'

const Partnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* Full-width hero with two columns */}
        <section className="partnerships-full-width-hero">
          {/* Subtle background pattern */}
          <div className="partnerships-bg-pattern" />

          <div className="partnerships-grid">
            {/* Left column - Text content */}
            <div className="partnerships-content">
              <h1 className="contact-page-title" style={{
                marginBottom: '1.5rem',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}>
                Partnerships
              </h1>
              <p className="contact-page-subtitle" style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                Our proven outreach process turns cold leads into warm partnerships through strategic, multi-touch engagement.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.8',
                marginBottom: '2.5rem',
                opacity: 0.85
              }}>
                We combine personalized email sequences, LinkedIn touches, and strategic follow-ups to achieve industry-leading conversion rates. Watch our systematic approach convert prospects into valuable partnerships.
              </p>
              <Link to="/contact" className="btn-primary-new">
                Get In Touch
              </Link>
            </div>

            {/* Right column - Flow diagram */}
            <div className="partnerships-flow-wrapper">
              <PartnershipFlow />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Partnerships;
