import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PartnershipFlow from '../components/PartnershipFlow'
import '../App.css'

const Partnerships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="contact-page">
        {/* Hero Section */}
        <section className="partnerships-full-width-hero">
          <div className="partnerships-bg-pattern" />
          <div className="partnerships-grid">
            <div className="partnerships-content">
              <h1 className="contact-page-title" style={{
                marginBottom: '1.5rem',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)'
              }}>
                We Build Your Sales System, Then Hand You The Keys
              </h1>
              <p className="contact-page-subtitle" style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
                opacity: 0.9
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Performance-based partnerships that create self-sufficient sales teams.
              </p>
              <Link to="/contact" className="btn-primary-new">
                Start Your Partnership
              </Link>
            </div>
            <div className="partnerships-flow-wrapper">
              <PartnershipFlow />
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="about-story-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              How Partnerships Work
            </h2>
            <p className="about-mission-intro" data-animate style={{ marginBottom: '4rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Shadow-based learning model.
            </p>

            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {[
                { step: '01', title: 'Discovery & Alignment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We understand your business, goals, and market to define success metrics together.' },
                { step: '02', title: 'We Show You', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team executes across chosen channels while you observe proven methods in action.' },
                { step: '03', title: 'Shadow & Learn', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team shadows our reps, hands-on learning in the field with real-time coaching.' },
                { step: '04', title: 'You Own It', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team executes independently, we shadow and coach as you take full ownership.' }
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-accent-gold)', opacity: 0.3, marginBottom: '1rem' }}>
                    {item.step}
                  </div>
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              What You Get
            </h2>
            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                { title: 'Multi-Channel Execution', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Simultaneous deployment across 6 channels with integrated strategy.' },
                { title: 'Training & Knowledge Transfer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your team learns our proven methods with documented processes and playbooks.' },
                { title: 'Systems & Processes', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. CRM setup, sales workflows, reporting dashboards, and performance tracking tools.' }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Model Section */}
        <section className="about-story-section">
          <div className="container-new">
            <div className="about-story-grid">
              <div className="about-story-content">
                <h2 className="about-section-title" data-animate>We Only Win When You Win</h2>
                <div className="about-story-text" data-animate>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Pay per customer acquired, not retainer.
                  </p>
                  <p>
                    <strong>Aligned Incentives:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    We're motivated to deliver quality customers, not just volume.
                  </p>
                  <p>
                    <strong>No Risk For You:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Predictable customer acquisition cost with budget flexibility and ROI guaranteed by design.
                  </p>
                </div>
              </div>
              <div className="about-story-image" data-animate>
                <div style={{
                  background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-dark-gradient-end))',
                  borderRadius: '12px',
                  padding: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '400px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤝</div>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-accent-gold)' }}>
                      Performance-Based Model
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Partner Profile Section */}
        <section className="about-mission-section">
          <div className="container-new">
            <h2 className="about-section-title centered" data-animate>
              Ideal Partner Profile
            </h2>
            <p className="about-mission-intro" data-animate>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Does this sound like you?
            </p>
            <div className="about-values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {[
                { title: 'Company Characteristics', desc: 'Lorem ipsum dolor sit amet. B2C or B2B companies with local/regional focus, ready to scale customer acquisition.' },
                { title: 'Challenges We Solve', desc: 'Lorem ipsum dolor sit amet. Unpredictable sales pipeline, single-channel dependency, maxed out in-house team.' },
                { title: 'Industries We Excel In', desc: 'Lorem ipsum dolor sit amet. Telecom, E-commerce, Retail, Education, SaaS, Financial services.' }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="about-value-card"
                  data-animate
                  style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                >
                  <h3 className="about-value-title">{item.title}</h3>
                  <p className="about-value-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container-new">
            <div className="about-cta-content" data-animate>
              <h2 className="about-cta-title">Ready to Start Your Partnership?</h2>
              <p className="about-cta-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Schedule a free consultation.
              </p>
              <Link to="/contact" className="btn-primary-new btn-large">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Partnerships;
